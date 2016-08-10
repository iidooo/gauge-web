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

var GuageList = React.createClass({
    mixins: [Reflux.connect(Store, 'gaugeList')],
    getInitialState: function () {
        return {
            gaugeList: []
        };
    },
    componentDidMount: function () {
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
                Actions.getGaugeList(this.state);
            }
        }.bind(this), 1000);
    },
    render: function () {
        return (
            <div>
                <Header activeMenuID={"menuGaugeList"}/>

                <div className="container">
                    <div className="panel panel-primary">
                        <div className="panel-heading">尾气实时数据监测(压力超过20kpa红色警报，超过15kpa黄色警告)</div>
                        <div className="panel-body">
                            <div className="alert alert-info" role="alert">
                                离下次刷新尾气监测数据还剩 <span ref="labelSecond" id="labelSecond">30</span> S &nbsp;&nbsp;
                                最后刷新时间：<strong>{new Date().format('yyyy-MM-dd hh:mm:ss')}</strong>
                            </div>
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th>设备型号</th>
                                    <th>设备编号</th>
                                    <th>采集时间</th>
                                    <th>温度</th>
                                    <th>压力</th>
                                    <th>车牌号</th>
                                    <th>备注</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.gaugeList.map(function (item) {
                                    return <DataList key={item.itemID} guageItem={item}/>
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
});

var DataList = React.createClass({
    render: function () {
        var cssClass = "";
        if(this.props.guageItem.pressure >= SiteProperties.pressDanger ){
            cssClass = "bg-danger";
        } else if(this.props.guageItem.pressure >= SiteProperties.pressWarn){
            cssClass = "bg-warning";
        }

        var productModel = "";
        var productCode = "";
        var license = "";
        var temperature = this.props.guageItem.temperature + " ℃";
        var pressure = this.props.guageItem.pressure + " kPa";

        if(this.props.guageItem.product != null){
            productModel = this.props.guageItem.product.productModel;
            productCode = this.props.guageItem.product.productCode;

            if(this.props.guageItem.product.vehicle != null){
                license = this.props.guageItem.product.vehicle.license;
            }
        }

        if(this.props.guageItem.errorCode == "E0001"){
            temperature = "－"
        } else if(this.props.guageItem.errorCode == "E0002"){
            pressure = "－"
        }

        return (
            <tr className={cssClass}>
                <td>{productModel}</td>
                <td>{productCode}</td>
                <td>{new Date(this.props.guageItem.createTime).format('yyyy-MM-dd hh:mm:ss')}</td>
                <td>{temperature}</td>
                <td>{pressure}</td>
                <td>{license}</td>
                <td>{ErrorCodeMap[this.props.guageItem.errorCode]}</td>
            </tr>
        );
    }
});

ReactDOM.render(
    <GuageList />,
    document.getElementById('page')
);