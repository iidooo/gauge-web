var ProductDetail = React.createClass({displayName: "ProductDetail",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Header, {activeMenuID: "menuProductList"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", {className: "panel panel-primary"}, 
                        React.createElement("div", {className: "panel-heading"}, "注册新设备"), 
                        React.createElement("div", {className: "panel-body"}, 
                            React.createElement(ProductForm, null), 
                            React.createElement(VehicleForm, null), 
                            React.createElement(DriverForm, null), 
                            React.createElement("div", {className: "text-center"}, 
                                React.createElement("a", {href: "javascript:void(0)", className: "btn btn-success", onClick: this.handleSearch}, 
                                    "保 存"
                                ), 
                                " ", 
                                React.createElement("a", {href: "javascript:void(0)", className: "btn btn-danger"}, "重 置")
                            )
                        )
                    )
                ), 

                React.createElement(Footer, null)
            )
        );
    }
});

var ProductForm = React.createClass({displayName: "ProductForm",

    handleSearch: function () {
        //this.state.contentTitle = this.refs.inputContentTitle.value;
        //this.state.startDate = this.refs.inputStartDate.value;
        //this.state.endDate = this.refs.inputEndDate.value;
        //PageActions.search(this.state);
    },
    render: function () {
        return (

            React.createElement("div", {className: "panel panel-default"}, 
                React.createElement("div", {className: "panel-heading"}, "设备信息"), 
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
                                    React.createElement("label", null, "适用区域")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("select", {type: "text", className: "form-control"}, 
                                        React.createElement("option", null, "上海"), 
                                        React.createElement("option", null, "杭州")
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );
    }
});

var VehicleForm = React.createClass({displayName: "VehicleForm",

    handleSearch: function () {
        //this.state.contentTitle = this.refs.inputContentTitle.value;
        //this.state.startDate = this.refs.inputStartDate.value;
        //this.state.endDate = this.refs.inputEndDate.value;
        //PageActions.search(this.state);
    },
    render: function () {
        return (
            React.createElement("div", {className: "panel panel-default"}, 
                React.createElement("div", {className: "panel-heading"}, "车辆信息"), 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement("div", {className: "form-horizontal"}, 
                        React.createElement("div", {className: "row form-group"}, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "车牌号码")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputVehicleLicense"})
                                )
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "车架号")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputProductCode"})
                                )
                            )
                        ), 

                        React.createElement("div", {className: "row form-group"}, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "车辆类型")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("select", {type: "text", className: "form-control"}, 
                                        React.createElement("option", null, "A1:大型客车（大型载客汽车）"), 
                                        React.createElement("option", null, "A2:牵引车（重型中型全挂，半挂汽车）"), 
                                        React.createElement("option", null, "A3:城市公交车（荷载10人以上的城市公交车）"), 
                                        React.createElement("option", null, "B1:中型客车（中型载客汽车，含载10人以上19人以下的城市公交车）"), 
                                        React.createElement("option", null, "B2：大型货车（重型中型载货汽车，大重中型专项作业车）"), 
                                        React.createElement("option", null, "C1：小型汽车（小型微型载客汽车以及轻型微型载货汽车：轻小微型专项作业车）"), 
                                        React.createElement("option", null, "C2：小型自动挡汽车（小型微型自动挡载客汽车以及轻型微型自动挡载货汽车）")
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "排气量")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputProductCode"})
                                )
                            )
                        ), 


                        React.createElement("div", {className: "row form-group"}, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "车辆品牌")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputProductCode"})
                                )
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "车辆型号")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputVehicleLicense"})
                                )
                            )
                        )
                    )
                )
            )
        );
    }
});

var DriverForm = React.createClass({displayName: "DriverForm",

    handleSearch: function () {
        //this.state.contentTitle = this.refs.inputContentTitle.value;
        //this.state.startDate = this.refs.inputStartDate.value;
        //this.state.endDate = this.refs.inputEndDate.value;
        //PageActions.search(this.state);
    },
    render: function () {
        return (
            React.createElement("div", {className: "panel panel-default"}, 
                React.createElement("div", {className: "panel-heading"}, "驾驶员信息"), 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement("div", {className: "form-horizontal"}, 
                        React.createElement("div", {className: "row form-group"}, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "姓")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputVehicleLicense"})
                                )
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "名")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputProductCode"})
                                )
                            )
                        ), 

                        React.createElement("div", {className: "row form-group"}, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "出生年月")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("div", {className: "input-group date form_date", "data-date": "", 
                                         "data-date-format": "yyyy-mm-dd", 
                                         "data-link-field": "startDate", "data-link-format": "yyyy-mm-dd"}, 
                                        React.createElement("input", {id: "startDate", className: "form-control", type: "text", 
                                               ref: "inputStartDate", 
                                               readonly: true}), 
                                        React.createElement("span", {className: "input-group-addon"}, 
                                            React.createElement("span", {className: "glyphicon glyphicon-calendar"})
                                        )
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "联系电话")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputVehicleLicense"})
                                )
                            )
                        ), 

                        React.createElement("div", {className: "row form-group"}, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "驾驶证号码")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputVehicleLicense"})
                                )
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "驾驶证类型")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("select", {type: "text", className: "form-control"}, 
                                        React.createElement("option", null, "A1:大型客车（大型载客汽车）"), 
                                        React.createElement("option", null, "A2:牵引车（重型中型全挂，半挂汽车）"), 
                                        React.createElement("option", null, "A3:城市公交车（荷载10人以上的城市公交车）"), 
                                        React.createElement("option", null, "B1:中型客车（中型载客汽车，含载10人以上19人以下的城市公交车）"), 
                                        React.createElement("option", null, "B2：大型货车（重型中型载货汽车，大重中型专项作业车）"), 
                                        React.createElement("option", null, "C1：小型汽车（小型微型载客汽车以及轻型微型载货汽车：轻小微型专项作业车）"), 
                                        React.createElement("option", null, "C2：小型自动挡汽车（小型微型自动挡载客汽车以及轻型微型自动挡载货汽车）")
                                    )
                                )
                            )
                        ), 

                        React.createElement("div", {className: "row form-group"}, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "领证时间")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("div", {className: "input-group date form_date", "data-date": "", 
                                         "data-date-format": "yyyy-mm-dd", 
                                         "data-link-field": "startDate", "data-link-format": "yyyy-mm-dd"}, 
                                        React.createElement("input", {id: "startDate", className: "form-control", type: "text", 
                                               ref: "inputStartDate", 
                                               readonly: true}), 
                                        React.createElement("span", {className: "input-group-addon"}, 
                                            React.createElement("span", {className: "glyphicon glyphicon-calendar"})
                                        )
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "过期时间")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("div", {className: "input-group date form_date", "data-date": "", 
                                         "data-date-format": "yyyy-mm-dd", 
                                         "data-link-field": "startDate", "data-link-format": "yyyy-mm-dd"}, 
                                        React.createElement("input", {id: "startDate", className: "form-control", type: "text", 
                                               ref: "inputStartDate", 
                                               readonly: true}), 
                                        React.createElement("span", {className: "input-group-addon"}, 
                                            React.createElement("span", {className: "glyphicon glyphicon-calendar"})
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(ProductDetail, null),
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