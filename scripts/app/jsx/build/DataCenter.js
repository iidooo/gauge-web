var DataCenterActions = Reflux.createActions(['searchGaugeItemList']);

var DataCenterStore = Reflux.createStore({
    listenables: [DataCenterActions],
    onSearchGaugeItemList: function (data) {
        var url = SiteProperties.serverURL + API.searchGaugeItemList;
        data.appID = SecurityClient.appID;
        data.secret = SecurityClient.secret;
        data.accessToken = sessionStorage.getItem(SessionKey.accessToken);
        // 检查token是否过期
        if (data.accessToken == null || data.accessToken == "") {
            location.href = SiteProperties.clientURL + Page.Login;
            return false;
        }

        var self = this;

        var callback = function (result) {
            if (result.status == 200) {
                console.log(result.data);
                self.trigger(result.data);
            } else {
                console.log(result);
            }
        };

        ajaxPost(url, data, callback);
    }
});

var DataCenter = React.createClass({displayName: "DataCenter",
    mixins: [Reflux.connect(DataCenterStore, 'itemListData')],
    getInitialState: function () {
        return {
            itemListData: {
                page: {},
                itemList: []
            },
            condition: {
                productCode: "",
                vehicleLicense:"",
                temperature:"",
                tempCompareLabel:"",
                pressure: "",
                pressureCompareLabel:"",
                startDateTime:"",
                endDateTime:"",
                currentPage:1,
            }
        };
    },
    componentDidMount: function () {
        DataCenterActions.searchGaugeItemList(this.state.condition);
    },
    onChildChanged: function (childState) {
        if (childState.currentPage != null) {
            this.state.condition.currentPage = childState.currentPage;
            DataCenterActions.searchGaugeItemList(this.state.condition);
        }
    },
    handleSearch: function () {
        this.state.condition.productCode = this.refs.inputProductCode.value;
        this.state.condition.vehicleLicense = this.refs.inputVehicleLicense.value;
        this.state.condition.temperature = this.refs.inputTemperature.value;
        this.state.condition.tempCompareLabel = this.refs.inputTempCompareLabel.value;
        this.state.condition.pressure = this.refs.inputPressure.value;
        this.state.condition.pressureCompareLabel = this.refs.inputPressureCompareLabel.value;
        this.state.condition.startDateTime = this.refs.inputStartDateTime.value;
        this.state.condition.endDateTime = this.refs.inputEndDateTime.value;
        DataCenterActions.searchGaugeItemList(this.state.condition);
    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Header, {activeMenuID: "menuDataCenter"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", {className: "panel panel-primary"}, 
                        React.createElement("div", {className: "panel-heading"}, "查询条件"), 
                        React.createElement("div", {className: "panel-body"}, 
                            React.createElement("div", {className: "form-horizontal"}, 
                                React.createElement("div", {className: "row form-group"}, 
                                    React.createElement("div", {className: "col-sm-6"}, 
                                        React.createElement("div", {className: "col-sm-4 control-label"}, 
                                            React.createElement("label", null, "设备编号")
                                        ), 
                                        React.createElement("div", {className: "col-sm-8"}, 
                                            React.createElement("input", {type: "text", className: "form-control", ref: "inputProductCode"})
                                        )
                                    ), 
                                    React.createElement("div", {className: "col-sm-6"}, 
                                        React.createElement("div", {className: "col-sm-4 control-label"}, 
                                            React.createElement("label", null, "车牌号码")
                                        ), 
                                        React.createElement("div", {className: "col-sm-8"}, 
                                            React.createElement("input", {type: "text", className: "form-control", ref: "inputVehicleLicense"})
                                        )
                                    )
                                ), 
                                React.createElement("div", {className: "row form-group"}, 
                                    React.createElement("div", {className: "col-sm-6"}, 
                                        React.createElement("div", {className: "col-sm-4 control-label"}, 
                                            React.createElement("label", null, "采集温度")
                                        ), 
                                        React.createElement("div", {className: "col-sm-4"}, 
                                            React.createElement("select", {className: "form-control", ref: "inputTempCompareLabel"}, 
                                                React.createElement("option", {value: ">="}, "超过"), 
                                                React.createElement("option", {value: "<="}, "低于")
                                            )
                                        ), 
                                        React.createElement("div", {className: "col-sm-4"}, 
                                            React.createElement("input", {type: "text", className: "form-control", ref: "inputTemperature"})
                                        )
                                    ), 
                                    React.createElement("div", {className: "col-sm-6"}, 
                                        React.createElement("div", {className: "col-sm-4 control-label"}, 
                                            React.createElement("label", null, "采集压力")
                                        ), 
                                        React.createElement("div", {className: "col-sm-4"}, 
                                            React.createElement("select", {className: "form-control", ref: "inputPressureCompareLabel"}, 
                                                React.createElement("option", {value: ">="}, "超过"), 
                                                React.createElement("option", {value: "<="}, "低于")
                                            )
                                        ), 
                                        React.createElement("div", {className: "col-sm-4"}, 
                                            React.createElement("input", {type: "text", className: "form-control", ref: "inputPressure"})
                                        )
                                    )
                                ), 
                                React.createElement("div", {className: "row form-group"}, 
                                    React.createElement("div", {className: "col-sm-6"}, 
                                        React.createElement("div", {className: "col-sm-4 control-label"}, 
                                            React.createElement("label", null, "采集开始期间")
                                        ), 
                                        React.createElement("div", {className: "col-sm-8"}, 
                                            React.createElement("div", {className: "input-group date form_datetime", "data-date": "", 
                                                 "data-date-format": "yyyy-mm-dd hh:ii:ss", 
                                                 "data-link-field": "startDateTime", "data-link-format": "yyyy-mm-dd hh:ii:ss"}, 
                                                React.createElement("input", {className: "form-control", type: "text", readonly: true, ref: "inputStartDateTime"}), 
                                        React.createElement("span", {className: "input-group-addon"}, 
                                            React.createElement("span", {className: "glyphicon glyphicon-calendar"})
                                        )
                                            )
                                        )
                                    ), 
                                    React.createElement("div", {className: "col-sm-6"}, 
                                        React.createElement("div", {className: "col-sm-4 control-label"}, 
                                            React.createElement("label", null, "采集结束期间")
                                        ), 
                                        React.createElement("div", {className: "col-sm-8"}, 
                                            React.createElement("div", {className: "input-group date form_datetime", "data-date": "", 
                                                 "data-date-format": "yyyy-mm-dd hh:ii:ss", 
                                                 "data-link-field": "endDateTime", "data-link-format": "yyyy-mm-dd hh:ii:ss"}, 
                                                React.createElement("input", {className: "form-control", type: "text", readonly: true, ref: "inputEndDateTime"}), 
                                        React.createElement("span", {className: "input-group-addon"}, 
                                            React.createElement("span", {className: "glyphicon glyphicon-calendar"})
                                        )
                                            )
                                        )
                                    )
                                )
                            ), 

                            React.createElement("div", {className: "text-right"}, 
                                React.createElement("a", {href: "javascript:void(0)", className: "btn btn-primary", onClick: this.handleSearch}, 
                                    "查 询"
                                )
                            )
                        )
                    ), 
                    React.createElement(SearchResult, {itemList: this.state.itemListData.itemList}), 
                    React.createElement(Pager, {callbackParent: this.onChildChanged, 
                           recordSum: this.state.itemListData.page.recordSum, 
                           currentPage: this.state.itemListData.page.currentPage, 
                           pageSum: this.state.itemListData.page.pageSum})
                ), 

                React.createElement(Footer, null)
            )
        );
    }
});

var SearchResult = React.createClass({displayName: "SearchResult",
    render: function () {
        return (
            React.createElement("div", {className: "panel panel-success"}, 
                React.createElement("div", {className: "panel-heading"}, "查询结果(压力超过20kpa红色警报，超过15kpa黄色警告)"), 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement("table", {className: "table table-hover"}, 
                        React.createElement("thead", null, 
                        React.createElement("tr", null, 
                            React.createElement("th", null, "设备型号"), 
                            React.createElement("th", null, "设备编号"), 
                            React.createElement("th", null, "采集时间"), 
                            React.createElement("th", null, "温度"), 
                            React.createElement("th", null, "压力"), 
                            React.createElement("th", null, "车牌号"), 
                            React.createElement("th", null, "备注")
                        )
                        ), 
                        React.createElement("tbody", null, 
                        this.props.itemList.map(function (item) {
                            return React.createElement(SearchResultItem, {key: item.itemID, item: item})
                        })
                        )
                    )
                )
            )
        );
    }
});

var SearchResultItem = React.createClass({displayName: "SearchResultItem",
    render: function () {
        var cssClass = "";
        if(this.props.item.pressure >= SiteProperties.pressDanger ){
            cssClass = "bg-danger";
        } else if(this.props.item.pressure >= SiteProperties.pressWarn){
            cssClass = "bg-warning";
        }

        var productModel = "";
        var productCode = "";
        var license = "";
        var temperature = this.props.item.temperature + " ℃";
        var pressure = this.props.item.pressure + " kPa";

        if(this.props.item.product != null){
            productModel = this.props.item.product.productModel;
            productCode = this.props.item.product.productCode;

            if(this.props.item.product.vehicle != null){
                license = this.props.item.product.vehicle.license;
            }
        }

        if(this.props.item.errorCode == "E0001"){
            temperature = "－"
        } else if(this.props.item.errorCode == "E0002"){
            pressure = "－"
        } else if(this.props.item.errorCode == "E0003"){
            temperature = "－"
            pressure = "－"
        }

        return (
            React.createElement("tr", {className: cssClass}, 
                React.createElement("td", null, productModel), 
                React.createElement("td", null, productCode), 
                React.createElement("td", null, new Date(this.props.item.createTime).format('yyyy-MM-dd hh:mm:ss')), 
                React.createElement("td", null, temperature), 
                React.createElement("td", null, pressure), 
                React.createElement("td", null, license), 
                React.createElement("td", null, ErrorCodeMap[this.props.item.errorCode])
            )
        );
    }
});

ReactDOM.render(
    React.createElement(DataCenter, null),
    document.getElementById('page')
);


$(function () {
    var $formDataTime = $('.form_datetime');
    if ($formDataTime != "undefined") {
        $formDataTime.datetimepicker({
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            forceParse: 0,
            showMeridian: 1,
            format: 'yyyy-mm-dd hh:ii:ss'
        });
    }
});