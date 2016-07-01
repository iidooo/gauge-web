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

var ProductDetail = React.createClass({
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

        var pageMode = sessionStorage.getItem(SessionKey.pageMode);
        if (pageMode == "2") {
            this.state.productID = this.state.product.productID;
            this.state.vehicleID = this.state.product.vehicleID;
            this.state.driverID = this.state.driverID;
            ProductDetailActions.updateProduct(this.state);
        } else {
            ProductDetailActions.createProduct(this.state);
        }
    },
    render: function () {
        return (
            <div>
                <Header activeMenuID={"menuProductList"}/>

                <div className="container">
                    <div className="panel panel-primary">
                        <div className="panel-heading">注册新设备</div>
                        <div className="panel-body">
                            <div className="panel panel-default">
                                <div className="panel-heading">设备信息</div>
                                <div className="panel-body">
                                    <div className="form-horizontal">
                                        <div className="row form-group">
                                            <div className="col-sm-6">
                                                <div className="col-sm-4 control-label">
                                                    <label className="required">设备编号</label>
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
                                                    <select type="text" className="form-control" ref="inputProductCity">
                                                        <option value="1">上海</option>
                                                        <option value="2">杭州</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="panel panel-default">
                                <div className="panel-heading">车辆信息</div>
                                <div className="panel-body">
                                    <div className="form-horizontal">
                                        <div className="row form-group">
                                            <div className="col-sm-6">
                                                <div className="col-sm-4 control-label">
                                                    <label className="required">车牌号码</label>
                                                </div>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control"
                                                           ref="inputVehicleLicense"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="col-sm-4 control-label">
                                                    <label>车架号</label>
                                                </div>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control" ref="inputVehicleNo"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col-sm-6">
                                                <div className="col-sm-4 control-label">
                                                    <label>车辆类型</label>
                                                </div>
                                                <div className="col-sm-8">
                                                    <select type="text" className="form-control" ref="inputVehicleType">
                                                        <option value="A1">A1:大型客车（大型载客汽车）</option>
                                                        <option value="A2">A2:牵引车（重型中型全挂，半挂汽车）</option>
                                                        <option value="A3">A3:城市公交车（荷载10人以上的城市公交车）</option>
                                                        <option value="B1">B1:中型客车（中型载客汽车，含载10人以上19人以下的城市公交车）</option>
                                                        <option value="B2">B2：大型货车（重型中型载货汽车，大重中型专项作业车）</option>
                                                        <option value="C1">C1：小型汽车（小型微型载客汽车以及轻型微型载货汽车：轻小微型专项作业车）
                                                        </option>
                                                        <option value="C2">C2：小型自动挡汽车（小型微型自动挡载客汽车以及轻型微型自动挡载货汽车）</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="col-sm-4 control-label">
                                                    <label>排气量</label>
                                                </div>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control"
                                                           ref="inputVehicleVolumn"/>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row form-group">
                                            <div className="col-sm-6">
                                                <div className="col-sm-4 control-label">
                                                    <label>车辆品牌</label>
                                                </div>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control"
                                                           ref="inputVehicleMaker"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="col-sm-4 control-label">
                                                    <label>车辆型号</label>
                                                </div>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control"
                                                           ref="inputVehicleModel"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="panel panel-default">
                                <div className="panel-heading">驾驶员信息</div>
                                <div className="panel-body">
                                    <div className="form-horizontal">
                                        <div className="row form-group">
                                            <div className="col-sm-6">
                                                <div className="col-sm-4 control-label">
                                                    <label className="required">姓</label>
                                                </div>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control"
                                                           ref="inputDriverFirstName"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="col-sm-4 control-label">
                                                    <label className="required">名</label>
                                                </div>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control"
                                                           ref="inputDriverLastName"/>
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
                                                         data-link-field="inputBirthday" data-link-format="yyyy-mm-dd">
                                                        <input id="inputBirthday" className="form-control" type="text"
                                                               ref="inputBirthday"
                                                               readonly/>
                                        <span className="input-group-addon">
                                            <span className="glyphicon glyphicon-calendar"></span>
                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="col-sm-4 control-label">
                                                    <label className="required">联系电话</label>
                                                </div>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control" ref="inputDriverPhone"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col-sm-6">
                                                <div className="col-sm-4 control-label">
                                                    <label className="required">驾驶证号码</label>
                                                </div>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control"
                                                           ref="inputDriverLicense"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="col-sm-4 control-label">
                                                    <label>驾驶证类型</label>
                                                </div>
                                                <div className="col-sm-8">
                                                    <select type="text" className="form-control"
                                                            ref="inputDriverLicenseType">
                                                        <option value="A1">A1:大型客车（大型载客汽车）</option>
                                                        <option value="A2">A2:牵引车（重型中型全挂，半挂汽车）</option>
                                                        <option value="A3">A3:城市公交车（荷载10人以上的城市公交车）</option>
                                                        <option value="B1">B1:中型客车（中型载客汽车，含载10人以上19人以下的城市公交车）</option>
                                                        <option value="B2">B2：大型货车（重型中型载货汽车，大重中型专项作业车）</option>
                                                        <option value="C1">C1：小型汽车（小型微型载客汽车以及轻型微型载货汽车：轻小微型专项作业车）
                                                        </option>
                                                        <option value="C2">C2：小型自动挡汽车（小型微型自动挡载客汽车以及轻型微型自动挡载货汽车）</option>
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
                                                         data-link-field="inputDriverLicenseStart" data-link-format="yyyy-mm-dd">
                                                        <input id="inputDriverLicenseStart" className="form-control"
                                                               type="text"
                                                               ref="inputDriverLicenseStart"
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
                                                         data-link-field="inputDriverLicenseEnd" data-link-format="yyyy-mm-dd">
                                                        <input id="inputDriverLicenseEnd" className="form-control"
                                                               type="text"
                                                               ref="inputDriverLicenseEnd"
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

                            <div className="text-center">
                                <a href="javascript:void(0)" className="btn btn-success" onClick={this.handleSave}>
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
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">设备信息</div>
                <div className="panel-body">
                    <div className="form-horizontal">
                        <div className="row form-group">
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label className="required">设备编号</label>
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
                                    <select type="text" className="form-control" ref="inputProductCity">
                                        <option value="1">上海</option>
                                        <option value="2">杭州</option>
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
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">车辆信息</div>
                <div className="panel-body">
                    <div className="form-horizontal">
                        <div className="row form-group">
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label className="required">车牌号码</label>
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
                                    <input type="text" className="form-control" ref="inputVehicleNo"/>
                                </div>
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label>车辆类型</label>
                                </div>
                                <div className="col-sm-8">
                                    <select type="text" className="form-control" ref="inputVehicleType">
                                        <option value="A1">A1:大型客车（大型载客汽车）</option>
                                        <option value="A2">A2:牵引车（重型中型全挂，半挂汽车）</option>
                                        <option value="A3">A3:城市公交车（荷载10人以上的城市公交车）</option>
                                        <option value="B1">B1:中型客车（中型载客汽车，含载10人以上19人以下的城市公交车）</option>
                                        <option value="B2">B2：大型货车（重型中型载货汽车，大重中型专项作业车）</option>
                                        <option value="C1">C1：小型汽车（小型微型载客汽车以及轻型微型载货汽车：轻小微型专项作业车）</option>
                                        <option value="C2">C2：小型自动挡汽车（小型微型自动挡载客汽车以及轻型微型自动挡载货汽车）</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label>排气量</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" ref="inputVehicleVolumn"/>
                                </div>
                            </div>
                        </div>


                        <div className="row form-group">
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label>车辆品牌</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" ref="inputVehicleMaker"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label>车辆型号</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" ref="inputVehicleModel"/>
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
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">驾驶员信息</div>
                <div className="panel-body">
                    <div className="form-horizontal">
                        <div className="row form-group">
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label className="required">姓</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" ref="inputDriverFirstName"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label className="required">名</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" ref="inputDriverLastName"/>
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
                                        <input id="inputBirthday" className="form-control" type="text"
                                               ref="inputBirthday"
                                               readonly/>
                                        <span className="input-group-addon">
                                            <span className="glyphicon glyphicon-calendar"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label className="required">联系电话</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" ref="inputDriverPhone"/>
                                </div>
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label className="required">驾驶证号码</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" ref="inputDriverLicense"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-sm-4 control-label">
                                    <label>驾驶证类型</label>
                                </div>
                                <div className="col-sm-8">
                                    <select type="text" className="form-control" ref="inputDriverLicenseType">
                                        <option value="A1">A1:大型客车（大型载客汽车）</option>
                                        <option value="A2">A2:牵引车（重型中型全挂，半挂汽车）</option>
                                        <option value="A3">A3:城市公交车（荷载10人以上的城市公交车）</option>
                                        <option value="B1">B1:中型客车（中型载客汽车，含载10人以上19人以下的城市公交车）</option>
                                        <option value="B2">B2：大型货车（重型中型载货汽车，大重中型专项作业车）</option>
                                        <option value="C1">C1：小型汽车（小型微型载客汽车以及轻型微型载货汽车：轻小微型专项作业车）</option>
                                        <option value="C2">C2：小型自动挡汽车（小型微型自动挡载客汽车以及轻型微型自动挡载货汽车）</option>
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
                                        <input id="inputDriverLicenseStart" className="form-control" type="text"
                                               ref="inputDriverLicenseStart"
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
                                        <input id="inputDriverLicenseEnd" className="form-control" type="text"
                                               ref="inputDriverLicenseEnd"
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