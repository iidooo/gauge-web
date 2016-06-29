/**
 * Created by Ethan on 16/5/13.
 */

var HeaderActions = Reflux.createActions(['getUserByToken', 'logout']);

var HeaderStore = Reflux.createStore({
    listenables: [HeaderActions],
    onGetUserByToken: function (data) {
        var url = SiteProperties.serverURL + API.getUserByToken;
        data.appID = SecurityClient.appID;
        data.secret = SecurityClient.secret;
        data.accessToken = sessionStorage.getItem(SessionKey.accessToken);

        // 检查token是否过期
        if (data.accessToken == null || data.accessToken == "") {
            alert("登陆过期，请重新登陆！");
            location.href = SiteProperties.clientURL + Page.Login;
            return false;
        }

        var self = this;
        var callback = function (result) {
            if (result.status == 200) {
                self.trigger(result.data);
            } else {
                console.log(result);
                alert("获取登陆用户信息失败！");
            }
        };

        ajaxPost(url, data, callback);
    },

    onLogout: function (data) {
        sessionStorage.removeItem(SessionKey.accessToken);
        sessionStorage.removeItem(SessionKey.userID);
        location.href = SiteProperties.clientURL + Page.Login;
    }
});

var Header = React.createClass({displayName: "Header",
    mixins: [Reflux.connect(HeaderStore, 'SecurityUser')],
    getInitialState: function () {
        return {
            SecurityUser: {}
        };
    },
    componentWillMount: function () {
        HeaderActions.getUserByToken(this.state);
    },
    render: function () {
        return (
            React.createElement("header", {className: "header"}, 
                React.createElement("nav", {className: "navbar navbar-inverse navbar-fixed-top"}, 
                    React.createElement("div", {className: "container-fluid"}, 
                        React.createElement("div", {className: "navbar-header"}, 
                            React.createElement(LOGO, null)
                        ), 
                        React.createElement("div", {id: "navbar", className: "navbar-collapse collapse"}, 
                            React.createElement(MainMenu, {activeMenuID: this.props.activeMenuID}), 
                            React.createElement(LoginInfo, {roleName: this.state.SecurityUser.roleName, 
                                       userName: this.state.SecurityUser.userName})
                        )
                    )
                )
            )
        );
    }
});

var LOGO = React.createClass({displayName: "LOGO",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("a", {className: "navbar-brand", href: SiteProperties.clientURL + Page.gaugeList}, "中国车辆尾气排放在线监测平台")
            )
        );
    }
});

var MainMenu = React.createClass({displayName: "MainMenu",
    componentDidUpdate: function () {
        var activeMenuID = this.props.activeMenuID;
        $("#" + activeMenuID).addClass("active");

    },
    render: function () {
        return (
            React.createElement("ul", {className: "nav navbar-nav"}, 
                React.createElement("li", {id: ""}, 
                    React.createElement("a", {href: SiteProperties.homeClientURL, target: "_blank"}, "门户")
                ), 
                React.createElement("li", {id: "menuGaugeList"}, 
                    React.createElement("a", {href: SiteProperties.clientURL + Page.gaugeList}, "实时监测")
                ), 
                React.createElement("li", {id: "menuDataCenter"}, 
                    React.createElement("a", {href: SiteProperties.clientURL + Page.DataCenter}, "数据中心")
                ), 
                React.createElement("li", {id: "menuProductList"}, 
                    React.createElement("a", {href: SiteProperties.clientURL + Page.ProductList}, "设备管理")
                ), 
                React.createElement("li", {id: "menuSysManage"}, 
                    React.createElement("a", {href: SiteProperties.clientURL + Page.SysManage}, "系统管理")
                )
            )
        );
    }
});

var LoginInfo = React.createClass({displayName: "LoginInfo",
    handleClick: function () {
        HeaderActions.logout();
    },

    render: function () {
        return (
            React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
                React.createElement("li", null, React.createElement("a", {href: "#"}, "您好，", this.props.roleName, " ", this.props.userName)), 
                React.createElement("li", null, React.createElement("a", {href: "#", onClick: this.handleClick}, "注销"))
            )
        );
    }
});