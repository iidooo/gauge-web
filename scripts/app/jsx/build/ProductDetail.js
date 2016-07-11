ProductDetailActions = Reflux.createActions(['createProduct', 'getProduct', 'updateProduct']);

var ProductDetailStore = Reflux.createStore({
    listenables: [ProductDetailActions],
    onCreateProduct: function (data) {
        var url = SiteProperties.serverURL + API.createProduct;
        data.appID = SecurityClient.appID;
        data.secret = SecurityClient.secret;
        data.accessToken = sessionStorage.getItem(SessionKey.accessToken);
        data.userID = sessionStorage.getItem(SessionKey.userID);
        // 检查token是否过期
        if (data.accessToken == null || data.accessToken == "") {
            location.href = SiteProperties.clientURL + Page.Login;
            return false;
        }

        var self = this;

        var callback = function (result) {
            if (result.status == 200) {
                alert("保存成功");
                location.href = SiteProperties.clientURL + Page.ProductList;
            } else {
                console.log(result);
            }
        };

        ajaxPost(url, data, callback);
    },
    onGetProduct: function (data) {
        var url = SiteProperties.serverURL + API.getProduct;
        data.appID = SecurityClient.appID;
        data.secret = SecurityClient.secret;
        data.accessToken = sessionStorage.getItem(SessionKey.accessToken);
        data.productID = sessionStorage.getItem(SessionKey.productID);
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
    },
    onUpdateProduct: function (data) {
        var url = SiteProperties.serverURL + API.updateProduct;
        data.appID = SecurityClient.appID;
        data.secret = SecurityClient.secret;
        data.accessToken = sessionStorage.getItem(SessionKey.accessToken);
        data.userID = sessionStorage.getItem(SessionKey.userID);
        // 检查token是否过期
        if (data.accessToken == null || data.accessToken == "") {
            location.href = SiteProperties.clientURL + Page.Login;
            return false;
        }

        var self = this;

        var callback = function (result) {
            if (result.status == 200) {
                alert("保存成功");
                location.href = SiteProperties.clientURL + Page.ProductList;
            } else {
                console.log(result);
            }
        };

        ajaxPost(url, data, callback);
    },
});

var ProductDetail = React.createClass({displayName: "ProductDetail",
    mixins: [Reflux.connect(ProductDetailStore, 'product')],
    getInitialState: function () {
        return {
            product: {}
        };
    },
    componentWillMount: function () {
        var pageMode = sessionStorage.getItem(SessionKey.pageMode);
        if (pageMode == "2") {
            ProductDetailActions.getProduct(this.state);
        }
    },
    componentDidUpdate: function () {
        console.log(this.state.product);
        this.refs.inputProductCode.value = this.state.product.productCode;
        this.refs.inputProductCity.value = this.state.product.city;

        this.refs.inputVehicleLicense.value = this.state.product.vehicle.license;
        this.refs.inputVehicleNo.value = this.state.product.vehicle.vehicleNo;
        this.refs.inputVehicleType.value = this.state.product.vehicle.type;
        this.refs.inputVehicleVolumn.value = this.state.product.vehicle.volume;
        this.refs.inputVehicleMaker.value = this.state.product.vehicle.maker;
        this.refs.inputVehicleModel.value = this.state.product.vehicle.model;

        this.refs.inputDriverFirstName.value = this.state.product.driver.firstName;
        this.refs.inputDriverLastName.value = this.state.product.driver.lastName;
        this.refs.inputBirthday.value = new Date(this.state.product.driver.birthday).format('yyyy-MM-dd');
        this.refs.inputDriverPhone.value = this.state.product.driver.phone;
        this.refs.inputDriverLicense.value = this.state.product.driver.license;
        this.refs.inputDriverLicenseType.value = this.state.product.driver.licenseType;
        this.refs.inputDriverLicenseStart.value = new Date(this.state.product.driver.validStart).format('yyyy-MM-dd');
        this.refs.inputDriverLicenseEnd.value = new Date(this.state.product.driver.validEnd).format('yyyy-MM-dd');
    },
    handleSave: function () {
        this.state.productCode = this.refs.inputProductCode.value;
        this.state.productCity = this.refs.inputProductCity.value;

        this.state.vehicleLicense = this.refs.inputVehicleLicense.value;
        this.state.vehicleNo = this.refs.inputVehicleNo.value;
        this.state.vehicleType = this.refs.inputVehicleType.value;
        this.state.vehicleVolumn = this.refs.inputVehicleVolumn.value;
        this.state.vehicleMaker = this.refs.inputVehicleMaker.value;
        this.state.vehicleModel = this.refs.inputVehicleModel.value;

        this.state.driverFirstName = this.refs.inputDriverFirstName.value;
        this.state.driverLastName = this.refs.inputDriverLastName.value;
        this.state.driverBirthday = this.refs.inputBirthday.value;
        this.state.driverPhone = this.refs.inputDriverPhone.value;
        this.state.driverLicense = this.refs.inputDriverLicense.value;
        this.state.driverLicenseType = this.refs.inputDriverLicenseType.value;
        this.state.driverLicenseStart = this.refs.inputDriverLicenseStart.value;
        this.state.driverLicenseEnd = this.refs.inputDriverLicenseEnd.value;

        if (this.state.productCode == "" || this.state.vehicleLicense == "" ||
            this.state.driverFirstName == "" || this.state.driverLastName == "" ||
            this.state.driverPhone == "" || this.state.driverLicense == "") {
            $("#inputProductCode").addClass("input-error");
            $("#inputVehicleLicense").addClass("input-error");
            $("#inputDriverFirstName").addClass("input-error");
            $("#inputDriverLastName").addClass("input-error");
            $("#inputDriverPhone").addClass("input-error");
            $("#inputDriverLicense").addClass("input-error");
            alert(Message.INPUT_REQUIRED);
            return false;
        }

        var pageMode = sessionStorage.getItem(SessionKey.pageMode);
        if (pageMode == "2") {
            this.state.productID = this.state.product.productID;
            this.state.vehicleID = this.state.product.vehicleID;
            this.state.driverID = this.state.product.driverID;
            ProductDetailActions.updateProduct(this.state);
        } else {
            ProductDetailActions.createProduct(this.state);
        }
    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Header, {activeMenuID: "menuProductList"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", {className: "panel panel-primary"}, 
                        React.createElement("div", {className: "panel-heading"}, "注册新设备"), 
                        React.createElement("div", {className: "panel-body"}, 
                            React.createElement("div", {className: "panel panel-default"}, 
                                React.createElement("div", {className: "panel-heading"}, "设备信息"), 
                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement("div", {className: "form-horizontal"}, 
                                        React.createElement("div", {className: "row form-group"}, 
                                            React.createElement("div", {className: "col-sm-6"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", {className: "required"}, "设备编号")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8"}, 
                                                    React.createElement("input", {id: "inputProductCode", type: "text", className: "form-control", ref: "inputProductCode"})
                                                )
                                            ), 
                                            React.createElement("div", {className: "col-sm-6"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", null, "适用区域")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8"}, 
                                                    React.createElement("select", {type: "text", className: "form-control", ref: "inputProductCity"}, 
                                                        React.createElement("option", {value: "1"}, "上海"), 
                                                        React.createElement("option", {value: "2"}, "杭州")
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            ), 

                            React.createElement("div", {className: "panel panel-default"}, 
                                React.createElement("div", {className: "panel-heading"}, "车辆信息"), 
                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement("div", {className: "form-horizontal"}, 
                                        React.createElement("div", {className: "row form-group"}, 
                                            React.createElement("div", {className: "col-sm-6"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", {className: "required"}, "车牌号码")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8"}, 
                                                    React.createElement("input", {id: "inputVehicleLicense", type: "text", className: "form-control", 
                                                           ref: "inputVehicleLicense"})
                                                )
                                            ), 
                                            React.createElement("div", {className: "col-sm-6"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", null, "车架号")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8"}, 
                                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputVehicleNo"})
                                                )
                                            )
                                        ), 

                                        React.createElement("div", {className: "row form-group"}, 
                                            React.createElement("div", {className: "col-sm-6"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", null, "车辆类型")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8"}, 
                                                    React.createElement("select", {type: "text", className: "form-control", ref: "inputVehicleType"}, 
                                                        React.createElement("option", {value: "A1"}, "A1:大型客车（大型载客汽车）"), 
                                                        React.createElement("option", {value: "A2"}, "A2:牵引车（重型中型全挂，半挂汽车）"), 
                                                        React.createElement("option", {value: "A3"}, "A3:城市公交车（荷载10人以上的城市公交车）"), 
                                                        React.createElement("option", {value: "B1"}, "B1:中型客车（中型载客汽车，含载10人以上19人以下的城市公交车）"), 
                                                        React.createElement("option", {value: "B2"}, "B2:大型货车（重型中型载货汽车，大重中型专项作业车）"), 
                                                        React.createElement("option", {value: "C1"}, "C1:小型汽车（小型微型载客汽车以及轻型微型载货汽车：轻小微型专项作业车）"
                                                        ), 
                                                        React.createElement("option", {value: "C2"}, "C2:小型自动挡汽车（小型微型自动挡载客汽车以及轻型微型自动挡载货汽车）")
                                                    )
                                                )
                                            ), 
                                            React.createElement("div", {className: "col-sm-6"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", null, "排气量")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8"}, 
                                                    React.createElement("input", {type: "text", className: "form-control", 
                                                           ref: "inputVehicleVolumn"})
                                                )
                                            )
                                        ), 


                                        React.createElement("div", {className: "row form-group"}, 
                                            React.createElement("div", {className: "col-sm-6"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", null, "车辆品牌")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8"}, 
                                                    React.createElement("input", {type: "text", className: "form-control", 
                                                           ref: "inputVehicleMaker"})
                                                )
                                            ), 
                                            React.createElement("div", {className: "col-sm-6"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", null, "车辆型号")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8"}, 
                                                    React.createElement("input", {type: "text", className: "form-control", 
                                                           ref: "inputVehicleModel"})
                                                )
                                            )
                                        )
                                    )
                                )
                            ), 

                            React.createElement("div", {className: "panel panel-default"}, 
                                React.createElement("div", {className: "panel-heading"}, "驾驶员信息"), 
                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement("div", {className: "form-horizontal"}, 
                                        React.createElement("div", {className: "row form-group"}, 
                                            React.createElement("div", {className: "col-sm-6"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", {className: "required"}, "姓")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8"}, 
                                                    React.createElement("input", {id: "inputDriverFirstName", type: "text", className: "form-control", 
                                                           ref: "inputDriverFirstName"})
                                                )
                                            ), 
                                            React.createElement("div", {className: "col-sm-6"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", {className: "required"}, "名")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8"}, 
                                                    React.createElement("input", {id: "inputDriverLastName", type: "text", className: "form-control", 
                                                           ref: "inputDriverLastName"})
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
                                                         "data-link-field": "inputBirthday", "data-link-format": "yyyy-mm-dd"}, 
                                                        React.createElement("input", {id: "inputBirthday", className: "form-control", type: "text", 
                                                               ref: "inputBirthday", 
                                                               readonly: true}), 
                                        React.createElement("span", {className: "input-group-addon"}, 
                                            React.createElement("span", {className: "glyphicon glyphicon-calendar"})
                                        )
                                                    )
                                                )
                                            ), 
                                            React.createElement("div", {className: "col-sm-6"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", {className: "required"}, "联系电话")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8"}, 
                                                    React.createElement("input", {id: "inputDriverPhone", type: "text", className: "form-control", ref: "inputDriverPhone"})
                                                )
                                            )
                                        ), 

                                        React.createElement("div", {className: "row form-group"}, 
                                            React.createElement("div", {className: "col-sm-6"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", {className: "required"}, "驾驶证号码")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8"}, 
                                                    React.createElement("input", {id: "inputDriverLicense", type: "text", className: "form-control", 
                                                           ref: "inputDriverLicense"})
                                                )
                                            ), 
                                            React.createElement("div", {className: "col-sm-6"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", null, "驾驶证类型")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8"}, 
                                                    React.createElement("select", {type: "text", className: "form-control", 
                                                            ref: "inputDriverLicenseType"}, 
                                                        React.createElement("option", {value: "A1"}, "A1:大型客车（大型载客汽车）"), 
                                                        React.createElement("option", {value: "A2"}, "A2:牵引车（重型中型全挂，半挂汽车）"), 
                                                        React.createElement("option", {value: "A3"}, "A3:城市公交车（荷载10人以上的城市公交车）"), 
                                                        React.createElement("option", {value: "B1"}, "B1:中型客车（中型载客汽车，含载10人以上19人以下的城市公交车）"), 
                                                        React.createElement("option", {value: "B2"}, "B2：大型货车（重型中型载货汽车，大重中型专项作业车）"), 
                                                        React.createElement("option", {value: "C1"}, "C1：小型汽车（小型微型载客汽车以及轻型微型载货汽车：轻小微型专项作业车）"
                                                        ), 
                                                        React.createElement("option", {value: "C2"}, "C2：小型自动挡汽车（小型微型自动挡载客汽车以及轻型微型自动挡载货汽车）")
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
                                                         "data-link-field": "inputDriverLicenseStart", "data-link-format": "yyyy-mm-dd"}, 
                                                        React.createElement("input", {id: "inputDriverLicenseStart", className: "form-control", 
                                                               type: "text", 
                                                               ref: "inputDriverLicenseStart", 
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
                                                         "data-link-field": "inputDriverLicenseEnd", "data-link-format": "yyyy-mm-dd"}, 
                                                        React.createElement("input", {id: "inputDriverLicenseEnd", className: "form-control", 
                                                               type: "text", 
                                                               ref: "inputDriverLicenseEnd", 
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
                            ), 

                            React.createElement("div", {className: "text-center"}, 
                                React.createElement("a", {href: "javascript:void(0)", className: "btn btn-success", onClick: this.handleSave}, 
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
    render: function () {
        return (
            React.createElement("div", {className: "panel panel-default"}, 
                React.createElement("div", {className: "panel-heading"}, "设备信息"), 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement("div", {className: "form-horizontal"}, 
                        React.createElement("div", {className: "row form-group"}, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", {className: "required"}, "设备编号")
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
                                    React.createElement("select", {type: "text", className: "form-control", ref: "inputProductCity"}, 
                                        React.createElement("option", {value: "1"}, "上海"), 
                                        React.createElement("option", {value: "2"}, "杭州")
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
    render: function () {
        return (
            React.createElement("div", {className: "panel panel-default"}, 
                React.createElement("div", {className: "panel-heading"}, "车辆信息"), 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement("div", {className: "form-horizontal"}, 
                        React.createElement("div", {className: "row form-group"}, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", {className: "required"}, "车牌号码")
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
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputVehicleNo"})
                                )
                            )
                        ), 

                        React.createElement("div", {className: "row form-group"}, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "车辆类型")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("select", {type: "text", className: "form-control", ref: "inputVehicleType"}, 
                                        React.createElement("option", {value: "A1"}, "A1:大型客车（大型载客汽车）"), 
                                        React.createElement("option", {value: "A2"}, "A2:牵引车（重型中型全挂，半挂汽车）"), 
                                        React.createElement("option", {value: "A3"}, "A3:城市公交车（荷载10人以上的城市公交车）"), 
                                        React.createElement("option", {value: "B1"}, "B1:中型客车（中型载客汽车，含载10人以上19人以下的城市公交车）"), 
                                        React.createElement("option", {value: "B2"}, "B2：大型货车（重型中型载货汽车，大重中型专项作业车）"), 
                                        React.createElement("option", {value: "C1"}, "C1：小型汽车（小型微型载客汽车以及轻型微型载货汽车：轻小微型专项作业车）"), 
                                        React.createElement("option", {value: "C2"}, "C2：小型自动挡汽车（小型微型自动挡载客汽车以及轻型微型自动挡载货汽车）")
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "排气量")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputVehicleVolumn"})
                                )
                            )
                        ), 


                        React.createElement("div", {className: "row form-group"}, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "车辆品牌")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputVehicleMaker"})
                                )
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "车辆型号")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputVehicleModel"})
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
    render: function () {
        return (
            React.createElement("div", {className: "panel panel-default"}, 
                React.createElement("div", {className: "panel-heading"}, "驾驶员信息"), 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement("div", {className: "form-horizontal"}, 
                        React.createElement("div", {className: "row form-group"}, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", {className: "required"}, "姓")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputDriverFirstName"})
                                )
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", {className: "required"}, "名")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputDriverLastName"})
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
                                        React.createElement("input", {id: "inputBirthday", className: "form-control", type: "text", 
                                               ref: "inputBirthday", 
                                               readonly: true}), 
                                        React.createElement("span", {className: "input-group-addon"}, 
                                            React.createElement("span", {className: "glyphicon glyphicon-calendar"})
                                        )
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", {className: "required"}, "联系电话")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputDriverPhone"})
                                )
                            )
                        ), 

                        React.createElement("div", {className: "row form-group"}, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", {className: "required"}, "驾驶证号码")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputDriverLicense"})
                                )
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "驾驶证类型")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("select", {type: "text", className: "form-control", ref: "inputDriverLicenseType"}, 
                                        React.createElement("option", {value: "A1"}, "A1:大型客车（大型载客汽车）"), 
                                        React.createElement("option", {value: "A2"}, "A2:牵引车（重型中型全挂，半挂汽车）"), 
                                        React.createElement("option", {value: "A3"}, "A3:城市公交车（荷载10人以上的城市公交车）"), 
                                        React.createElement("option", {value: "B1"}, "B1:中型客车（中型载客汽车，含载10人以上19人以下的城市公交车）"), 
                                        React.createElement("option", {value: "B2"}, "B2：大型货车（重型中型载货汽车，大重中型专项作业车）"), 
                                        React.createElement("option", {value: "C1"}, "C1：小型汽车（小型微型载客汽车以及轻型微型载货汽车：轻小微型专项作业车）"), 
                                        React.createElement("option", {value: "C2"}, "C2：小型自动挡汽车（小型微型自动挡载客汽车以及轻型微型自动挡载货汽车）")
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
                                        React.createElement("input", {id: "inputDriverLicenseStart", className: "form-control", type: "text", 
                                               ref: "inputDriverLicenseStart", 
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
                                        React.createElement("input", {id: "inputDriverLicenseEnd", className: "form-control", type: "text", 
                                               ref: "inputDriverLicenseEnd", 
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