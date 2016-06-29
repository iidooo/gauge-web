var DataCenter = React.createClass({displayName: "DataCenter",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Header, {activeMenuID: "menuDataCenter"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement(SearchCondition, null), 
                    React.createElement(SearchResult, null)
                ), 

                React.createElement(Footer, null)
            )
        );
    }
});

var SearchCondition = React.createClass({displayName: "SearchCondition",

    handleSearch: function () {
        //this.state.contentTitle = this.refs.inputContentTitle.value;
        //this.state.startDate = this.refs.inputStartDate.value;
        //this.state.endDate = this.refs.inputEndDate.value;
        //PageActions.search(this.state);
    },
    render: function () {
        return (
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
                                    React.createElement("select", {className: "form-control"}, 
                                        React.createElement("option", null, "超过"), 
                                        React.createElement("option", null, "低于")
                                    )
                                ), 
                                React.createElement("div", {className: "col-sm-4"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputProductCode"})
                                )
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "采集压力")
                                ), 
                                React.createElement("div", {className: "col-sm-4"}, 
                                    React.createElement("select", {className: "form-control"}, 
                                        React.createElement("option", null, "超过"), 
                                        React.createElement("option", null, "低于")
                                    )
                                ), 
                                React.createElement("div", {className: "col-sm-4"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputVehicleLicense"})
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
                                         "data-date-format": "yyyy-mm-dd hh:ii", 
                                         "data-link-field": "startDate", "data-link-format": "yyyy-mm-dd hh:ii"}, 
                                        React.createElement("input", {className: "form-control", type: "text", readonly: true}), 
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
                                         "data-date-format": "yyyy-mm-dd hh:ii", 
                                         "data-link-field": "startDate", "data-link-format": "yyyy-mm-dd hh:ii"}, 
                                        React.createElement("input", {className: "form-control", type: "text", readonly: true}), 
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
                        ), 
                        " ", 
                        React.createElement("a", {href: "javascript:void(0)", className: "btn btn-success"}, "报表导出")
                    )
                )
            )
        );
    }
});

var SearchResult = React.createClass({displayName: "SearchResult",

    handleSearch: function () {
        //this.state.contentTitle = this.refs.inputContentTitle.value;
        //this.state.startDate = this.refs.inputStartDate.value;
        //this.state.endDate = this.refs.inputEndDate.value;
        //PageActions.search(this.state);
    },
    render: function () {
        return (
            React.createElement("div", {className: "panel panel-success"}, 
                React.createElement("div", {className: "panel-heading"}, "查询结果"), 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement("table", {className: "table table-striped table-hover"}, 
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
                        React.createElement("tr", null, 
                            React.createElement("td", null, "2"), 
                            React.createElement("td", null, "2016-06-22 16:30:23"), 
                            React.createElement("td", null, "500.56 ℃"), 
                            React.createElement("td", null, "600.45 kPa"), 
                            React.createElement("td", null, "沪N2348")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "2"), 
                            React.createElement("td", null, "2016-06-22 16:30:23"), 
                            React.createElement("td", null, "500.56 ℃"), 
                            React.createElement("td", null, "600.45 kPa"), 
                            React.createElement("td", null, "沪N2348")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "2"), 
                            React.createElement("td", null, "2016-06-22 16:30:23"), 
                            React.createElement("td", null, "500.56 ℃"), 
                            React.createElement("td", null, "600.45 kPa"), 
                            React.createElement("td", null, "沪N2348")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "2"), 
                            React.createElement("td", null, "2016-06-22 16:30:23"), 
                            React.createElement("td", null, "500.56 ℃"), 
                            React.createElement("td", null, "600.45 kPa"), 
                            React.createElement("td", null, "沪N2348")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "2"), 
                            React.createElement("td", null, "2016-06-22 16:30:23"), 
                            React.createElement("td", null, "500.56 ℃"), 
                            React.createElement("td", null, "600.45 kPa"), 
                            React.createElement("td", null, "沪N2348")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "2"), 
                            React.createElement("td", null, "2016-06-22 16:30:23"), 
                            React.createElement("td", null, "500.56 ℃"), 
                            React.createElement("td", null, "600.45 kPa"), 
                            React.createElement("td", null, "沪N2348")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "2"), 
                            React.createElement("td", null, "2016-06-22 16:30:23"), 
                            React.createElement("td", null, "500.56 ℃"), 
                            React.createElement("td", null, "600.45 kPa"), 
                            React.createElement("td", null, "沪N2348")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "2"), 
                            React.createElement("td", null, "2016-06-22 16:30:23"), 
                            React.createElement("td", null, "500.56 ℃"), 
                            React.createElement("td", null, "600.45 kPa"), 
                            React.createElement("td", null, "沪N2348")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "2"), 
                            React.createElement("td", null, "2016-06-22 16:30:23"), 
                            React.createElement("td", null, "500.56 ℃"), 
                            React.createElement("td", null, "600.45 kPa"), 
                            React.createElement("td", null, "沪N2348")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "2"), 
                            React.createElement("td", null, "2016-06-22 16:30:23"), 
                            React.createElement("td", null, "500.56 ℃"), 
                            React.createElement("td", null, "600.45 kPa"), 
                            React.createElement("td", null, "沪N2348")
                        )
                        )
                    )
                )
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
            format: 'yyyy-mm-dd hh:ii'
        });
    }
});