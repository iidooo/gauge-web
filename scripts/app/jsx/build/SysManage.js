var SysManage = React.createClass({displayName: "SysManage",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Header, {activeMenuID: "menuSysManage"}), 

                React.createElement("div", {className: "container-fluid"}, 
                    React.createElement("div", {className: "row"}, 
                        React.createElement(SideBar, null), 
                        React.createElement(UserManage, null)
                    )
                ), 

                React.createElement(Footer, null)
            )
        );
    }
});

var SideBar = React.createClass({displayName: "SideBar",
    render: function () {
        return (
            React.createElement("div", {className: "col-sm-3 col-md-2 sidebar"}, 
                React.createElement("ul", {className: "nav nav-sidebar"}, 
                    React.createElement("li", {className: "active"}, React.createElement("a", {href: "#"}, "用户管理")), 
                    React.createElement("li", null, React.createElement("a", {href: "#"}, "角色管理")), 
                    React.createElement("li", null, React.createElement("a", {href: "#"}, "权限管理"))
                )
            )
        );
    }
});

var UserManage = React.createClass({displayName: "UserManage",
    render: function () {
        return (
            React.createElement("div", {className: "col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"}, 
                React.createElement(UserSearchCondition, null), 
                React.createElement(UserSearchResult, null)
            )
        );
    }
});


var UserSearchCondition = React.createClass({displayName: "UserSearchCondition",

    handleSearch: function () {
        //this.state.contentTitle = this.refs.inputContentTitle.value;
        //this.state.startDate = this.refs.inputStartDate.value;
        //this.state.endDate = this.refs.inputEndDate.value;
        //PageActions.search(this.state);
    },
    handleCreate : function(){
        //location.href = SiteProperties.clientURL + Page.ProductDetail;
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
                                    React.createElement("label", null, "用户名")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputProductCode"})
                                )
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "角色")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputVehicleLicense"})
                                )
                            )
                        )
                    ), 

                    React.createElement("div", {className: "text-right"}, 
                        React.createElement("a", {href: "javascript:void(0)", className: "btn btn-primary", onClick: this.handleSearch}, 
                            "查 询"
                        ), 
                        " ", 
                        React.createElement("a", {href: "javascript:void(0)", className: "btn btn-success", onClick: this.handleCreate}, "创建新用户")
                    )
                )
            )
        );
    }
});

var UserSearchResult = React.createClass({displayName: "UserSearchResult",

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
                            React.createElement("th", null, "用户ID"), 
                            React.createElement("th", null, "用户名"), 
                            React.createElement("th", null, "角色"), 
                            React.createElement("th", null, "最后登录日期")
                        )
                        ), 
                        React.createElement("tbody", null, 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "test1"), 
                            React.createElement("td", null, "测试用户1"), 
                            React.createElement("td", null, "检测员"), 
                            React.createElement("td", null, "2016-06-22 17:12:43")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "test1"), 
                            React.createElement("td", null, "测试用户1"), 
                            React.createElement("td", null, "检测员"), 
                            React.createElement("td", null, "2016-06-22 17:12:43")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "test1"), 
                            React.createElement("td", null, "测试用户1"), 
                            React.createElement("td", null, "检测员"), 
                            React.createElement("td", null, "2016-06-22 17:12:43")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "test1"), 
                            React.createElement("td", null, "测试用户1"), 
                            React.createElement("td", null, "检测员"), 
                            React.createElement("td", null, "2016-06-22 17:12:43")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "test1"), 
                            React.createElement("td", null, "测试用户1"), 
                            React.createElement("td", null, "检测员"), 
                            React.createElement("td", null, "2016-06-22 17:12:43")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "test1"), 
                            React.createElement("td", null, "测试用户1"), 
                            React.createElement("td", null, "检测员"), 
                            React.createElement("td", null, "2016-06-22 17:12:43")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "test1"), 
                            React.createElement("td", null, "测试用户1"), 
                            React.createElement("td", null, "检测员"), 
                            React.createElement("td", null, "2016-06-22 17:12:43")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "test1"), 
                            React.createElement("td", null, "测试用户1"), 
                            React.createElement("td", null, "检测员"), 
                            React.createElement("td", null, "2016-06-22 17:12:43")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "test1"), 
                            React.createElement("td", null, "测试用户1"), 
                            React.createElement("td", null, "检测员"), 
                            React.createElement("td", null, "2016-06-22 17:12:43")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "test1"), 
                            React.createElement("td", null, "测试用户1"), 
                            React.createElement("td", null, "检测员"), 
                            React.createElement("td", null, "2016-06-22 17:12:43")
                        )
                        )
                    )
                )
            )
        );
    }
});



ReactDOM.render(
    React.createElement(SysManage, null),
    document.getElementById('page')
);