var DataCenter = React.createClass({
    render: function () {
        return (
            <div>
                <Header activeMenuID={"menuDataCenter"}/>

                <div className="container">
                    <SearchCondition/>
                    <SearchResult/>
                </div>

                <Footer/>
            </div>
        );
    }
});

var SearchCondition = React.createClass({

    handleSearch: function () {
        //this.state.contentTitle = this.refs.inputContentTitle.value;
        //this.state.startDate = this.refs.inputStartDate.value;
        //this.state.endDate = this.refs.inputEndDate.value;
        //PageActions.search(this.state);
    },
    render: function () {
        return (
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
                                    <select className="form-control">
                                        <option>超过</option>
                                        <option>低于</option>
                                    </select>
                                </div>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" ref="inputProductCode"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label>采集压力</label>
                                </div>
                                <div className="col-sm-4">
                                    <select className="form-control">
                                        <option>超过</option>
                                        <option>低于</option>
                                    </select>
                                </div>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" ref="inputVehicleLicense"/>
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
                                         data-date-format="yyyy-mm-dd hh:ii"
                                         data-link-field="startDate" data-link-format="yyyy-mm-dd hh:ii">
                                        <input className="form-control" type="text" readonly/>
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
                                         data-date-format="yyyy-mm-dd hh:ii"
                                         data-link-field="startDate" data-link-format="yyyy-mm-dd hh:ii">
                                        <input className="form-control" type="text" readonly/>
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
                        &nbsp;
                        <a href="javascript:void(0)" className="btn btn-success">报表导出</a>
                    </div>
                </div>
            </div>
        );
    }
});

var SearchResult = React.createClass({

    handleSearch: function () {
        //this.state.contentTitle = this.refs.inputContentTitle.value;
        //this.state.startDate = this.refs.inputStartDate.value;
        //this.state.endDate = this.refs.inputEndDate.value;
        //PageActions.search(this.state);
    },
    render: function () {
        return (
            <div className="panel panel-success">
                <div className="panel-heading">查询结果</div>
                <div className="panel-body">
                    <table className="table table-striped table-hover">
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
                        <tr>
                            <td>2</td>
                            <td>2016-06-22 16:30:23</td>
                            <td>500.56 ℃</td>
                            <td>600.45 kPa</td>
                            <td>沪N2348</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2016-06-22 16:30:23</td>
                            <td>500.56 ℃</td>
                            <td>600.45 kPa</td>
                            <td>沪N2348</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2016-06-22 16:30:23</td>
                            <td>500.56 ℃</td>
                            <td>600.45 kPa</td>
                            <td>沪N2348</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2016-06-22 16:30:23</td>
                            <td>500.56 ℃</td>
                            <td>600.45 kPa</td>
                            <td>沪N2348</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2016-06-22 16:30:23</td>
                            <td>500.56 ℃</td>
                            <td>600.45 kPa</td>
                            <td>沪N2348</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2016-06-22 16:30:23</td>
                            <td>500.56 ℃</td>
                            <td>600.45 kPa</td>
                            <td>沪N2348</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2016-06-22 16:30:23</td>
                            <td>500.56 ℃</td>
                            <td>600.45 kPa</td>
                            <td>沪N2348</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2016-06-22 16:30:23</td>
                            <td>500.56 ℃</td>
                            <td>600.45 kPa</td>
                            <td>沪N2348</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2016-06-22 16:30:23</td>
                            <td>500.56 ℃</td>
                            <td>600.45 kPa</td>
                            <td>沪N2348</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2016-06-22 16:30:23</td>
                            <td>500.56 ℃</td>
                            <td>600.45 kPa</td>
                            <td>沪N2348</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
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
            format: 'yyyy-mm-dd hh:ii'
        });
    }
});