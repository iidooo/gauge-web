/**
 * Created by Ethan on 16/5/18.
 */

var Actions = Reflux.createActions(['getGaugeList']);

var Store = Reflux.createStore({
    listenables: [Actions],
    onGetGaugeList: function (data) {
        var url = SiteProperties.serverURL + API.getGaugeItemRealTime;
        data.appID = SecurityClient.appID;
        data.secret = SecurityClient.secret;
        data.accessToken = sessionStorage.getItem(SessionKey.accessToken);
        // 检查token是否过期
        if (data.accessToken == null || data.accessToken == "") {
            location.href = SiteProperties.clientURL + Page.Login;
            return false;
        }

        var self = this;

        data.pageSize = "50";
        var callback = function (result) {
            if (result.status == 200) {
                self.trigger(result.data);
            } else {
                console.log(result);
            }
        };

        ajaxPost(url, data, callback);
    }
});

var GuageList = React.createClass({displayName: "GuageList",
    mixins: [Reflux.connect(Store, 'gaugeList')],
    getInitialState: function () {
        return {
            gaugeList: []
        };
    },
    componentWillMount: function () {
        Actions.getGaugeList(this.state);
    },
    componentDidUpdate: function () {
        this.timer = null;
        // 倒计时
        var second = 30;
        var $labelSecond = $("#labelSecond");
        this.timer = setInterval(function () {
            if (second > 0) {
                second--;
                $labelSecond.text(second);
            } else {
                clearInterval(this.timer);
                console.log("getGaugeList");
                Actions.getGaugeList(this.state);
            }
        }.bind(this), 1000);
    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Header, {activeMenuID: "menuGaugeList"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", {className: "panel panel-primary"}, 
                        React.createElement("div", {className: "panel-heading"}, "尾气实时数据监测(压力超过20kpa红色警报，超过15kpa黄色警告)"), 
                        React.createElement("div", {className: "panel-body"}, 
                            React.createElement("div", {className: "alert alert-info", role: "alert"}, 
                                "离下次刷新尾气监测数据还剩 ", React.createElement("span", {ref: "labelSecond", id: "labelSecond"}, "30"), " S   " + ' ' +
                                "最后刷新时间：", React.createElement("strong", null, new Date().format('yyyy-MM-dd hh:mm:ss'))
                            ), 
                            React.createElement("table", {className: "table table-hover"}, 
                                React.createElement("thead", null, 
                                React.createElement("tr", null, 
                                    React.createElement("th", null, "设备编号"), 
                                    React.createElement("th", null, "采集时间"), 
                                    React.createElement("th", null, "温度"), 
                                    React.createElement("th", null, "压力"), 
                                    React.createElement("th", null, "车牌号")
                                )
                                ), 
                                React.createElement("tbody", null, 
                                this.state.gaugeList.map(function (item) {
                                    return React.createElement(DataList, {key: item.itemID, guageItem: item})
                                })
                                )
                            )
                        )
                    )
                ), 
                React.createElement(Footer, null)
            )
        );
    }
});

var DataList = React.createClass({displayName: "DataList",
    render: function () {
        var cssClass = "";
        if(this.props.guageItem.pressure >= SiteProperties.pressDanger ){
            cssClass = "bg-danger";
        } else if(this.props.guageItem.pressure >= SiteProperties.pressWarn){
            cssClass = "bg-warning";
        }
        return (
            React.createElement("tr", {className: cssClass}, 
                React.createElement("td", null, this.props.guageItem.product.productCode), 
                React.createElement("td", null, new Date(this.props.guageItem.createTime).format('yyyy-MM-dd hh:mm:ss')), 
                React.createElement("td", null, this.props.guageItem.temperature, " ℃"), 
                React.createElement("td", null, this.props.guageItem.pressure, " kPa"), 
                React.createElement("td", null, this.props.guageItem.product.vehicle.license)
            )
        );
    }
});

ReactDOM.render(
    React.createElement(GuageList, null),
    document.getElementById('page')
);