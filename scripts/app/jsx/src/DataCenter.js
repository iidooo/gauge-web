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
                self.trigger(result.data);
            } else {
                console.log(result);
            }
        };

        ajaxPost(url, data, callback);
    }
});

var DataCenter = React.createClass({
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
    componentWillMount: function () {
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
            <div>
                <Header activeMenuID={"menuDataCenter"}/>

                <div className="container">
                    <div className="panel panel-primary">
                        <div className="panel-heading">查询条件</div>
                        <div className="panel-body">
                            <div className="form-horizontal">
                                <div className="row form-group">
                                    <div className="col-sm-6">
                                        <div className="col-sm-4 control-label">
                                            <label>设备编号</label>
                                        </div>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" ref="inputProductCode"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="col-sm-4 control-label">
                                            <label>车牌号码</label>
                                        </div>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" ref="inputVehicleLicense"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-sm-6">
                                        <div className="col-sm-4 control-label">
                                            <label>采集温度</label>
                                        </div>
                                        <div className="col-sm-4">
                                            <select className="form-control" ref="inputTempCompareLabel">
                                                <option value=">=">超过</option>
                                                <option value="<=">低于</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-4">
                                            <input type="text" className="form-control" ref="inputTemperature"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="col-sm-4 control-label">
                                            <label>采集压力</label>
                                        </div>
                                        <div className="col-sm-4">
                                            <select className="form-control" ref="inputPressureCompareLabel">
                                                <option value=">=">超过</option>
                                                <option value="<=">低于</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-4">
                                            <input type="text" className="form-control" ref="inputPressure"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-sm-6">
                                        <div className="col-sm-4 control-label">
                                            <label>采集开始期间</label>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="input-group date form_datetime" data-date=""
                                                 data-date-format="yyyy-mm-dd hh:ii:ss"
                                                 data-link-field="startDateTime" data-link-format="yyyy-mm-dd hh:ii:ss">
                                                <input className="form-control" type="text" readonly ref="inputStartDateTime"/>
                                        <span className="input-group-addon">
                                            <span className="glyphicon glyphicon-calendar"></span>
                                        </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="col-sm-4 control-label">
                                            <label>采集结束期间</label>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="input-group date form_datetime" data-date=""
                                                 data-date-format="yyyy-mm-dd hh:ii:ss"
                                                 data-link-field="endDateTime" data-link-format="yyyy-mm-dd hh:ii:ss">
                                                <input className="form-control" type="text" readonly ref="inputEndDateTime"/>
                                        <span className="input-group-addon">
                                            <span className="glyphicon glyphicon-calendar"></span>
                                        </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-right">
                                <a href="javascript:void(0)" className="btn btn-primary" onClick={this.handleSearch}>
                                    查&nbsp;询
                                </a>
                            </div>
                        </div>
                    </div>
                    <SearchResult itemList={this.state.itemListData.itemList}/>
                    <Pager callbackParent={this.onChildChanged}
                           recordSum={this.state.itemListData.page.recordSum}
                           currentPage={this.state.itemListData.page.currentPage}
                           pageSum={this.state.itemListData.page.pageSum}/>
                </div>

                <Footer/>
            </div>
        );
    }
});

var SearchResult = React.createClass({
    render: function () {
        return (
            <div className="panel panel-success">
                <div className="panel-heading">查询结果(压力超过20kpa红色警报，超过15kpa黄色警告)</div>
                <div className="panel-body">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>设备编号</th>
                            <th>采集时间</th>
                            <th>温度</th>
                            <th>压力</th>
                            <th>车牌号</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.itemList.map(function (item) {
                            return <SearchResultItem key={item.itemID} item={item}/>
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
});

var SearchResultItem = React.createClass({
    render: function () {
        var cssClass = "";
        if(this.props.item.pressure >= SiteProperties.pressDanger ){
            cssClass = "bg-danger";
        } else if(this.props.item.pressure >= SiteProperties.pressWarn){
            cssClass = "bg-warning";
        }
        return (
            <tr className={cssClass}>
                <td>{this.props.item.product.productCode}</td>
                <td>{new Date(this.props.item.createTime).format('yyyy-MM-dd hh:mm:ss')}</td>
                <td>{this.props.item.temperature} ℃</td>
                <td>{this.props.item.pressure} kPa</td>
                <td>{this.props.item.product.vehicle.license}</td>
            </tr>
        );
    }
});

ReactDOM.render(
    <DataCenter />,
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