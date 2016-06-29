var SysManage = React.createClass({
    render: function () {
        return (
            <div>
                <Header activeMenuID={"menuSysManage"}/>

                <div className="container-fluid">
                    <div className="row">
                        <SideBar/>
                        <UserManage/>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
});

var SideBar = React.createClass({
    render: function () {
        return (
            <div className="col-sm-3 col-md-2 sidebar">
                <ul className="nav nav-sidebar">
                    <li className="active"><a href="#">用户管理</a></li>
                    <li><a href="#">角色管理</a></li>
                    <li><a href="#">权限管理</a></li>
                </ul>
            </div>
        );
    }
});

var UserManage = React.createClass({
    render: function () {
        return (
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <UserSearchCondition/>
                <UserSearchResult/>
            </div>
        );
    }
});


var UserSearchCondition = React.createClass({

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
            <div className="panel panel-primary">
                <div className="panel-heading">查询条件</div>
                <div className="panel-body">
                    <div className="form-horizontal">
                        <div className="row form-group">
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label>用户名</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" ref="inputProductCode"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label>角色</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" ref="inputVehicleLicense"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-right">
                        <a href="javascript:void(0)" className="btn btn-primary" onClick={this.handleSearch}>
                            查&nbsp;询
                        </a>
                        &nbsp;
                        <a href="javascript:void(0)" className="btn btn-success" onClick={this.handleCreate}>创建新用户</a>
                    </div>
                </div>
            </div>
        );
    }
});

var UserSearchResult = React.createClass({

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
                            <th>用户ID</th>
                            <th>用户名</th>
                            <th>角色</th>
                            <th>最后登录日期</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>test1</td>
                            <td>测试用户1</td>
                            <td>检测员</td>
                            <td>2016-06-22 17:12:43</td>
                        </tr>
                        <tr>
                            <td>test1</td>
                            <td>测试用户1</td>
                            <td>检测员</td>
                            <td>2016-06-22 17:12:43</td>
                        </tr>
                        <tr>
                            <td>test1</td>
                            <td>测试用户1</td>
                            <td>检测员</td>
                            <td>2016-06-22 17:12:43</td>
                        </tr>
                        <tr>
                            <td>test1</td>
                            <td>测试用户1</td>
                            <td>检测员</td>
                            <td>2016-06-22 17:12:43</td>
                        </tr>
                        <tr>
                            <td>test1</td>
                            <td>测试用户1</td>
                            <td>检测员</td>
                            <td>2016-06-22 17:12:43</td>
                        </tr>
                        <tr>
                            <td>test1</td>
                            <td>测试用户1</td>
                            <td>检测员</td>
                            <td>2016-06-22 17:12:43</td>
                        </tr>
                        <tr>
                            <td>test1</td>
                            <td>测试用户1</td>
                            <td>检测员</td>
                            <td>2016-06-22 17:12:43</td>
                        </tr>
                        <tr>
                            <td>test1</td>
                            <td>测试用户1</td>
                            <td>检测员</td>
                            <td>2016-06-22 17:12:43</td>
                        </tr>
                        <tr>
                            <td>test1</td>
                            <td>测试用户1</td>
                            <td>检测员</td>
                            <td>2016-06-22 17:12:43</td>
                        </tr>
                        <tr>
                            <td>test1</td>
                            <td>测试用户1</td>
                            <td>检测员</td>
                            <td>2016-06-22 17:12:43</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
});



ReactDOM.render(
    <SysManage />,
    document.getElementById('page')
);