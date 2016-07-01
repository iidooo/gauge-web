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

var Header = React.createClass({
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
            <header className="header">
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <LOGO/>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <MainMenu activeMenuID = {this.props.activeMenuID}/>
                            <LoginInfo roleName={this.state.SecurityUser.roleName}
                                       userName={this.state.SecurityUser.userName}/>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
});

var LOGO = React.createClass({
    render: function () {
        return (
            <div>
                <a className="navbar-brand" href={SiteProperties.clientURL + Page.gaugeList}>中国车辆尾气排放在线监测平台</a>
            </div>
        );
    }
});

var MainMenu = React.createClass({
    componentDidUpdate: function () {
        var activeMenuID = this.props.activeMenuID;
        $("#" + activeMenuID).addClass("active");

    },
    render: function () {
        return (
            <ul className="nav navbar-nav">
                <li id="">
                    <a href={SiteProperties.homeClientURL} target="_blank">门户</a>
                </li>
                <li id="menuGaugeList">
                    <a href={SiteProperties.clientURL + Page.gaugeList}>实时监测</a>
                </li>
                <li id="menuDataCenter">
                    <a href={SiteProperties.clientURL + Page.DataCenter}>数据中心</a>
                </li>
                <li id="menuProductList">
                    <a href={SiteProperties.clientURL + Page.ProductList}>设备管理</a>
                </li>
                <li id="menuSysManage">
                    <a href={SiteProperties.clientURL + Page.SysManage}>系统管理</a>
                </li>
            </ul>
        );
    }
});

var LoginInfo = React.createClass({
    handleClick: function () {
        HeaderActions.logout();
    },

    render: function () {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#">您好，{this.props.roleName} {this.props.userName}</a></li>
                <li><a href="#" onClick={this.handleClick}>注销</a></li>
            </ul>
        );
    }
});