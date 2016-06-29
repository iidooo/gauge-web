var ProductDetail = React.createClass({
    render: function () {
        return (
            <div>
                <Header activeMenuID={"menuProductList"}/>

                <div className="container">
                    <div className="panel panel-primary">
                        <div className="panel-heading">注册新设备</div>
                        <div className="panel-body">
                            <ProductForm/>
                            <VehicleForm/>
                            <DriverForm/>
                            <div className="text-center">
                                <a href="javascript:void(0)" className="btn btn-success" onClick={this.handleSearch}>
                                    保&nbsp;存
                                </a>
                                &nbsp;
                                <a href="javascript:void(0)" className="btn btn-danger">重&nbsp;置</a>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
});

var ProductForm = React.createClass({

    handleSearch: function () {
        //this.state.contentTitle = this.refs.inputContentTitle.value;
        //this.state.startDate = this.refs.inputStartDate.value;
        //this.state.endDate = this.refs.inputEndDate.value;
        //PageActions.search(this.state);
    },
    render: function () {
        return (

            <div className="panel panel-default">
                <div className="panel-heading">设备信息</div>
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
                                    <label>适用区域</label>
                                </div>
                                <div className="col-sm-8">
                                    <select type="text" className="form-control">
                                        <option>上海</option>
                                        <option>杭州</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var VehicleForm = React.createClass({

    handleSearch: function () {
        //this.state.contentTitle = this.refs.inputContentTitle.value;
        //this.state.startDate = this.refs.inputStartDate.value;
        //this.state.endDate = this.refs.inputEndDate.value;
        //PageActions.search(this.state);
    },
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">车辆信息</div>
                <div className="panel-body">
                    <div className="form-horizontal">
                        <div className="row form-group">
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label>车牌号码</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" ref="inputVehicleLicense"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label>车架号</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" ref="inputProductCode"/>
                                </div>
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label>车辆类型</label>
                                </div>
                                <div className="col-sm-8">
                                    <select type="text" className="form-control">
                                        <option>A1:大型客车（大型载客汽车）</option>
                                        <option>A2:牵引车（重型中型全挂，半挂汽车）</option>
                                        <option>A3:城市公交车（荷载10人以上的城市公交车）</option>
                                        <option>B1:中型客车（中型载客汽车，含载10人以上19人以下的城市公交车）</option>
                                        <option>B2：大型货车（重型中型载货汽车，大重中型专项作业车）</option>
                                        <option>C1：小型汽车（小型微型载客汽车以及轻型微型载货汽车：轻小微型专项作业车）</option>
                                        <option>C2：小型自动挡汽车（小型微型自动挡载客汽车以及轻型微型自动挡载货汽车）</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label>排气量</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" ref="inputProductCode"/>
                                </div>
                            </div>
                        </div>


                        <div className="row form-group">
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label>车辆品牌</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" ref="inputProductCode"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label>车辆型号</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" ref="inputVehicleLicense"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var DriverForm = React.createClass({

    handleSearch: function () {
        //this.state.contentTitle = this.refs.inputContentTitle.value;
        //this.state.startDate = this.refs.inputStartDate.value;
        //this.state.endDate = this.refs.inputEndDate.value;
        //PageActions.search(this.state);
    },
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">驾驶员信息</div>
                <div className="panel-body">
                    <div className="form-horizontal">
                        <div className="row form-group">
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label>姓</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" ref="inputVehicleLicense"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label>名</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" ref="inputProductCode"/>
                                </div>
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label>出生年月</label>
                                </div>
                                <div className="col-sm-8">
                                    <div className="input-group date form_date" data-date=""
                                         data-date-format="yyyy-mm-dd"
                                         data-link-field="startDate" data-link-format="yyyy-mm-dd">
                                        <input id="startDate" className="form-control" type="text"
                                               ref="inputStartDate"
                                               readonly/>
                                        <span className="input-group-addon">
                                            <span className="glyphicon glyphicon-calendar"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label>联系电话</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" ref="inputVehicleLicense"/>
                                </div>
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label>驾驶证号码</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" ref="inputVehicleLicense"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label>驾驶证类型</label>
                                </div>
                                <div className="col-sm-8">
                                    <select type="text" className="form-control">
                                        <option>A1:大型客车（大型载客汽车）</option>
                                        <option>A2:牵引车（重型中型全挂，半挂汽车）</option>
                                        <option>A3:城市公交车（荷载10人以上的城市公交车）</option>
                                        <option>B1:中型客车（中型载客汽车，含载10人以上19人以下的城市公交车）</option>
                                        <option>B2：大型货车（重型中型载货汽车，大重中型专项作业车）</option>
                                        <option>C1：小型汽车（小型微型载客汽车以及轻型微型载货汽车：轻小微型专项作业车）</option>
                                        <option>C2：小型自动挡汽车（小型微型自动挡载客汽车以及轻型微型自动挡载货汽车）</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label>领证时间</label>
                                </div>
                                <div className="col-sm-8">
                                    <div className="input-group date form_date" data-date=""
                                         data-date-format="yyyy-mm-dd"
                                         data-link-field="startDate" data-link-format="yyyy-mm-dd">
                                        <input id="startDate" className="form-control" type="text"
                                               ref="inputStartDate"
                                               readonly/>
                                        <span className="input-group-addon">
                                            <span className="glyphicon glyphicon-calendar"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label>过期时间</label>
                                </div>
                                <div className="col-sm-8">
                                    <div className="input-group date form_date" data-date=""
                                         data-date-format="yyyy-mm-dd"
                                         data-link-field="startDate" data-link-format="yyyy-mm-dd">
                                        <input id="startDate" className="form-control" type="text"
                                               ref="inputStartDate"
                                               readonly/>
                                        <span className="input-group-addon">
                                            <span className="glyphicon glyphicon-calendar"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <ProductDetail />,
    document.getElementById('page')
);


$(function () {
    var $formDate = $('.form_date');
    if ($formDate != "undefined") {
        $formDate.datetimepicker({
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0,
            format: 'yyyy-mm-dd'
        });
    }
});