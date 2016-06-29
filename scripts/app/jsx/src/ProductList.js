var ProductListActions = Reflux.createActions(['searchProductList']);

var ProductListStore = Reflux.createStore({
    listenables: [ProductListActions],
    onSearchProductList: function (data) {
        var url = SiteProperties.serverURL + API.searchProductList;
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

var ProductList = React.createClass({
    mixins: [Reflux.connect(ProductListStore, 'productListData')],
    getInitialState: function () {
        return {
            productListData: {
                page: {},
                productList: []
            }
        };
    },
    componentWillMount: function () {
        ProductListActions.searchProductList(this.state);
    },
    onChildChanged: function (childState) {
        if (childState.currentPage != null) {
            this.state.currentPage = childState.currentPage;
            ProductListActions.searchProductList(this.state);
        }
    },
    render: function () {
        return (
            <div>
                <Header activeMenuID={"menuProductList"}/>

                <div className="container">
                    <SearchCondition/>
                    <SearchResult productList={this.state.productListData.productList}/>
                    <Pager callbackParent={this.onChildChanged}
                           recordSum={this.state.productListData.page.recordSum}
                           currentPage={this.state.productListData.page.currentPage}
                           pageSum={this.state.productListData.page.pageSum}/>
                </div>

                <Footer/>
            </div>
        );
    }
});

var SearchCondition = React.createClass({
    getInitialState: function () {
        return {
            productCode: "",
            vehicleLicense:"",
            driverName:"",
            driverPhone:"",
        };
    },
    handleSearch: function () {
        console.log(this.refs.inputProductCode.value);
        this.state.productCode = this.refs.inputProductCode.value;
        this.state.vehicleLicense = this.refs.inputVehicleLicense.value;
        this.state.driverName = this.refs.inputDriverName.value;
        this.state.driverPhone = this.refs.inputDriverPhone.value;
        ProductListActions.searchProductList(this.state);
    },
    handleCreate: function () {
        location.href = SiteProperties.clientURL + Page.ProductDetail;
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
                                    <label>驾驶员姓名</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" ref="inputDriverName"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label>联系电话</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" ref="inputDriverPhone"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-right">
                        <a href="javascript:void(0)" className="btn btn-primary" onClick={this.handleSearch}>
                            查&nbsp;询
                        </a>
                        &nbsp;
                        <a href="javascript:void(0)" className="btn btn-success" onClick={this.handleCreate}>注册新设备</a>
                    </div>
                </div>
            </div>
        );
    }
});

var SearchResult = React.createClass({

    render: function () {
        return (
            <div className="panel panel-success">
                <div className="panel-heading">查询结果</div>
                <div className="panel-body">
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>设备编号</th>
                            <th>注册时间</th>
                            <th>车牌号</th>
                            <th>驾驶员姓名</th>
                            <th>联系电话</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.productList.map(function (item) {
                            return <SearchResultItem key={item.productID} product={item}/>
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

        return (
            <tr>
                <td>{this.props.product.productCode}</td>
                <td>{new Date(this.props.product.createTime).format('yyyy-MM-dd hh:mm:ss')}</td>
                <td>{this.props.product.vehicle.license}</td>
                <td>{this.props.product.driver.firstName + this.props.product.driver.lastName}</td>
                <td>{this.props.product.driver.phone}</td>
            </tr>
        );
    }
});

ReactDOM.render(
    <ProductList />,
    document.getElementById('page')
);