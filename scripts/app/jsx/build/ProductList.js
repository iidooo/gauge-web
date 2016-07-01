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

var ProductList = React.createClass({displayName: "ProductList",
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
            React.createElement("div", null, 
                React.createElement(Header, {activeMenuID: "menuProductList"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement(SearchCondition, null), 
                    React.createElement(SearchResult, {productList: this.state.productListData.productList}), 
                    React.createElement(Pager, {callbackParent: this.onChildChanged, 
                           recordSum: this.state.productListData.page.recordSum, 
                           currentPage: this.state.productListData.page.currentPage, 
                           pageSum: this.state.productListData.page.pageSum})
                ), 

                React.createElement(Footer, null)
            )
        );
    }
});

var SearchCondition = React.createClass({displayName: "SearchCondition",
    getInitialState: function () {
        return {
            productCode: "",
            vehicleLicense:"",
            driverName:"",
            driverPhone:"",
        };
    },
    handleSearch: function () {
        this.state.productCode = this.refs.inputProductCode.value;
        this.state.vehicleLicense = this.refs.inputVehicleLicense.value;
        this.state.driverName = this.refs.inputDriverName.value;
        this.state.driverPhone = this.refs.inputDriverPhone.value;
        ProductListActions.searchProductList(this.state);
    },
    handleCreate: function () {
        sessionStorage.setItem(SessionKey.pageMode, 1);
        location.href = SiteProperties.clientURL + Page.ProductDetail;
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
                                    React.createElement("label", null, "驾驶员姓名")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputDriverName"})
                                )
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "联系电话")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputDriverPhone"})
                                )
                            )
                        )
                    ), 

                    React.createElement("div", {className: "text-right"}, 
                        React.createElement("a", {href: "javascript:void(0)", className: "btn btn-primary", onClick: this.handleSearch}, 
                            "查 询"
                        ), 
                        " ", 
                        React.createElement("a", {href: "javascript:void(0)", className: "btn btn-success", onClick: this.handleCreate}, "注册新设备")
                    )
                )
            )
        );
    }
});

var SearchResult = React.createClass({displayName: "SearchResult",

    render: function () {
        return (
            React.createElement("div", {className: "panel panel-success"}, 
                React.createElement("div", {className: "panel-heading"}, "查询结果"), 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement("table", {className: "table table-striped table-hover"}, 
                        React.createElement("thead", null, 
                        React.createElement("tr", null, 
                            React.createElement("th", null, "设备编号"), 
                            React.createElement("th", null, "注册时间"), 
                            React.createElement("th", null, "车牌号"), 
                            React.createElement("th", null, "驾驶员姓名"), 
                            React.createElement("th", null, "联系电话")
                        )
                        ), 
                        React.createElement("tbody", null, 
                        this.props.productList.map(function (item) {
                            return React.createElement(SearchResultItem, {key: item.productID, product: item})
                        })
                        )
                    )


                )
            )
        );
    }
});


var SearchResultItem = React.createClass({displayName: "SearchResultItem",
    handleLink: function (productID) {
        sessionStorage.setItem(SessionKey.pageMode, 2);
        sessionStorage.setItem(SessionKey.productID, productID);
        location.href = SiteProperties.clientURL + Page.ProductDetail;
    },
    render: function () {
        return (
            React.createElement("tr", null, 
                React.createElement("td", null, React.createElement("a", {href: "javascript:void(0)", onClick: this.handleLink.bind(null, this.props.product.productID)}, this.props.product.productCode)), 
                React.createElement("td", null, new Date(this.props.product.createTime).format('yyyy-MM-dd hh:mm:ss')), 
                React.createElement("td", null, this.props.product.vehicle.license), 
                React.createElement("td", null, this.props.product.driver.firstName + this.props.product.driver.lastName), 
                React.createElement("td", null, this.props.product.driver.phone)
            )
        );
    }
});

ReactDOM.render(
    React.createElement(ProductList, null),
    document.getElementById('page')
);