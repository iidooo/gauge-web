var Index = React.createClass({displayName: "Index",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("div", {className: "container"}, 
                    React.createElement("header", {id: "indexHeader"}, 
                        React.createElement("div", {className: "banner"}, 
                            React.createElement("h1", {className: "banner-title"}, "舵杰汽车尾气监测管理与分析平台")
                        ), 
                        React.createElement("nav", {className: "navbar"}, 
                            React.createElement("ul", {className: "nav navbar-nav"}, 
                                React.createElement("li", null, 
                                    React.createElement("a", {href: SiteProperties.clientURL + Page.Index, target: "_blank"}, "首页")
                                ), 
                                React.createElement("li", null, 
                                    React.createElement("a", {href: "http://www.duoje.cn", target: "_blank"}, "公司介绍")
                                ), 
                                React.createElement("li", null, 
                                    React.createElement("a", {href: "http://www.duoje.cn/page/offerlist.htm", className: "show-category", 
                                       target: "_blank"}, "供应产品▼")
                                ), 
                                React.createElement("li", null, 
                                    React.createElement("a", {href: "http://www.duoje.cn/page/creditdetail.htm", target: "_blank"}, "公司档案")
                                ), 
                                React.createElement("li", null, 
                                    React.createElement("a", {href: "http://www.duoje.cn/page/albumlist.htm", target: "_blank"}, "我的相册")
                                ), 
                                React.createElement("li", null, 
                                    React.createElement("a", {href: "http://www.duoje.cn/page/newslist.htm", target: "_blank"}, "产品动态")
                                ), 
                                React.createElement("li", null, 
                                    React.createElement("a", {href: "http://www.duoje.cn/page/feedback.htm", target: "_blank"}, "留言板")
                                ), 
                                React.createElement("li", null, 
                                    React.createElement("a", {href: "http://www.duoje.cn/page/contactinfo.htm", target: "_blank"}, "联系方式")
                                )
                            )
                        )
                    ), 
                    React.createElement("div", {className: "row margin-top-10"}, 
                        React.createElement("div", {className: "col-sm-3"}, 
                            React.createElement("div", {className: "block"}, 
                                React.createElement("div", {className: "panel panel-success"}, 
                                    React.createElement("div", {className: "panel-heading"}, "监测平台登录"), 
                                    React.createElement("div", {className: "panel-body"}, 
                                        React.createElement(LoginForm, null)
                                    )
                                )
                            ), 
                            React.createElement(LinkList, null)
                        ), 
                        React.createElement("div", {className: "col-sm-9"}, 
                            React.createElement(Notice, null), 
                            React.createElement(News, null)
                        )
                    ), 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-sm-12"}, 
                        React.createElement(Ads, null)
                            )
                    )
                ), 
                React.createElement(Footer, null)
            )
        );
    }
});

var LinkList = React.createClass({displayName: "LinkList",
    render: function () {
        return (
            React.createElement("div", {className: "block"}, 
                React.createElement("div", {className: "panel panel-success"}, 
                    React.createElement("div", {className: "panel-heading"}, "友情链接"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("ul", {className: "list-group"}, 
                            React.createElement("li", {className: "list-group-item"}, React.createElement("a", {href: "http://www.cnemc.cn", target: "_blank"}, React.createElement("img", {
                                src: "img/index/link1.jpg"}))), 
                            React.createElement("li", {className: "list-group-item"}, React.createElement("a", {href: "http://www.hjjkyyj.com", target: "_blank"}, React.createElement("img", {
                                src: "img/index/link2.jpg"}))), 
                            React.createElement("li", {className: "list-group-item"}, React.createElement("a", {href: "http://hjjcgl.cnjournals.net/ch/index.aspx", 
                                                               target: "_blank"}, React.createElement("img", {
                                src: "img/index/link3.jpg"}))), 
                            React.createElement("li", {className: "list-group-item"}, React.createElement("a", {href: "http://www.wanfangdata.com.cn", target: "_blank"}, React.createElement("img", {
                                src: "img/index/link4.jpg"}))), 
                            React.createElement("li", {className: "list-group-item"}, React.createElement("a", {href: "http://www.alljournals.cn", target: "_blank"}, React.createElement("img", {
                                src: "img/index/link5.jpg"})))
                        )
                    )
                )
            )
        );
    }
});

var Notice = React.createClass({displayName: "Notice",
    render: function () {
        return (
            React.createElement("div", {className: "block"}, 
                React.createElement("div", {className: "panel panel-success"}, 
                    React.createElement("div", {className: "panel-heading"}, "信息公告"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("ul", {className: "list-group"}, 
                            React.createElement("li", {className: "list-group-item"}, 
                                React.createElement("div", {className: "row"}, 
                                    React.createElement("div", {className: "col-sm-8"}, 
                                        React.createElement("a", {href: "reader/view_news.aspx?id=20160119092748001", target: "_blank"}, 
                                            "全省各地两会“绿色生态”成热词")
                                    ), 
                                    React.createElement("div", {className: "col-sm-4 text-right"}, 
                                        "2016-01-19"
                                    )
                                )
                            ), 
                            React.createElement("li", {className: "list-group-item"}, 
                                React.createElement("div", {className: "row"}, 
                                    React.createElement("div", {className: "col-sm-8"}, 
                                        React.createElement("a", {href: "reader/view_news.aspx?id=20160119092421001", target: "_blank"}, 
                                            "南京体验馆引导垃圾分类")
                                    ), 
                                    React.createElement("div", {className: "col-sm-4 text-right"}, 
                                        "2016-01-19"
                                    )
                                )
                            ), 
                            React.createElement("li", {className: "list-group-item"}, 
                                React.createElement("div", {className: "row"}, 
                                    React.createElement("div", {className: "col-sm-8"}, 
                                        React.createElement("a", {href: "reader/view_news.aspx?id=20151215025922001", target: "_blank"}, 
                                            "省环保厅向媒体通报近期大气环境质量情况和相关保障措施")
                                    ), 
                                    React.createElement("div", {className: "col-sm-4 text-right"}, 
                                        "2016-01-19"
                                    )
                                )
                            ), 
                            React.createElement("li", {className: "list-group-item"}, 
                                React.createElement("div", {className: "row"}, 
                                    React.createElement("div", {className: "col-sm-8"}, 
                                        React.createElement("a", {href: "reader/view_news.aspx?id=20151026032951001", target: "_blank"}, 
                                            "省环保厅举行“方舟-2015”江苏省辐射事故综合应急演习")
                                    ), 
                                    React.createElement("div", {className: "col-sm-4 text-right"}, 
                                        "2016-01-19"
                                    )
                                )
                            ), 
                            React.createElement("li", {className: "list-group-item"}, 
                                React.createElement("div", {className: "row"}, 
                                    React.createElement("div", {className: "col-sm-8"}, 
                                        React.createElement("a", {href: "reader/view_news.aspx?id=20150908034718001", target: "_blank"}, 
                                            "环保公安共治机动车污染 南京成立机动车环保警务室")
                                    ), 
                                    React.createElement("div", {className: "col-sm-4 text-right"}, 
                                        "2016-01-19"
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

var News = React.createClass({displayName: "News",
    render: function () {
        return (
            React.createElement("div", {className: "block"}, 
                React.createElement("div", {className: "panel panel-success"}, 
                    React.createElement("div", {className: "panel-heading"}, "行业动态"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("ul", {className: "list-group"}, 
                            React.createElement("li", {className: "list-group-item"}, "大众VAS5054A安装与调试方法上"), 
                            React.createElement("li", {className: "list-group-item"}, "汽车示波器在检测汽车传感器中的应用上"), 
                            React.createElement("li", {className: "list-group-item"}, "汽车刹车油技术分析"), 
                            React.createElement("li", {className: "list-group-item"}, "丰田自动织机将开始销售PHV/EV用充电站"), 
                            React.createElement("li", {className: "list-group-item"}, "汽车整车测量")
                        )
                    )
                )
            )
        );
    }
});

var Companey = React.createClass({displayName: "Companey",
    render: function () {
        return (
            React.createElement("div", {className: "block"}, 
                React.createElement("div", {className: "panel panel-success"}, 
                    React.createElement("div", {className: "panel-heading"}, "公司介绍"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("div", null, 
                            React.createElement("div", {className: "col-sm-4 padding-5"}, 
                                React.createElement("img", {src: "img/index/companey.jpg"})
                            ), 
                            React.createElement("div", {className: "col-sm-8"}, 
                                React.createElement("p", null, 
                                    "上海舵杰汽车检测仪器有限公司是一家致力于汽车电子技术及计算机信息处理技术产品研究的公司。公司依托上海第二工业大学汽车学院从事汽车检测产品的开发与研究，公司与院方专门成立了汽车光电传感应用技术实验室。公司于2004年1月与美国‘APOLLO汽车科技公司’签署了正式协议，联合引进和在国内推出汽车检测仪等系列汽车专用检测仪器产品，产品上市几年来无论在产品品质上及技术服务上一致获得客户的肯定和赞誉。公司将本着引进消化，科学创新，服务国内客户为主，出口定制为辅之原则，不断探索和追求，将本公司产品打造真正意义的“国际品质，国际标准”的一流汽车检测产品。"
                                )
                            )
                        )
                    )
                )
            )
        );
    }
});

var Ads = React.createClass({displayName: "Ads",
    render: function () {
        return (
            React.createElement("div", {className: "block"}, 
                React.createElement("div", {className: "panel panel-success"}, 
                    React.createElement("div", {className: "panel-heading"}, "广而告之"), 
                    React.createElement("div", {id: "ads", className: "panel-body"}, 
                        React.createElement("div", {style: {width:3000 + "px"}}, 
                            React.createElement("div", {id: "inner01"}, 
                                React.createElement("ul", null, 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "http://www.tegent.com.cn/", title: "德祥科技1"}, 
                                            React.createElement("img", {src: "img/index/ads1.jpg"})
                                        )
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "/config/hjjcgl/news_category/2015-05-28/德祥科技2.png", title: "德祥科技2"}, 
                                            React.createElement("img", {src: "img/index/ads2.png"})
                                        )
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "http://www.sailhero.com/", title: "河北先河1"}, 
                                            React.createElement("img", {src: "img/index/ads3.jpg"})
                                        )
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "/config/hjjcgl/news_category/2012-02-22/先河环保宣传图_副本.jpg", title: "河北先河2"}, 
                                            React.createElement("img", {src: "img/index/ads4.jpg"})
                                        )
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "http://thyb.shuoyi.com", title: "武汉天虹1"}, 
                                            React.createElement("img", {src: "img/index/ads5.jpg"})
                                        )
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "/config/hjjcgl/news_category/2012-02-22/武汉天虹宣传图_副本.jpg", title: "武汉天虹2"}, 
                                            React.createElement("img", {src: "img/index/ads6.jpg"})
                                        )
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "/config/hjjcgl/news_category/2012-02-22/厦门隆力德宣传图_副本.jpg", 
                                           title: "厦门隆力德2"}, 
                                            React.createElement("img", {src: "img/index/ads7.jpg"})
                                        )
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "/config/hjjcgl/news_category/2012-02-22/厦门隆力德产品.jpg", title: "厦门隆力德1"}, 
                                            React.createElement("img", {src: "img/index/ads8.jpg"})
                                        )
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "http://www.comleader.cn/", title: "珠海高凌1"}, 
                                            React.createElement("img", {src: "img/index/ads9.jpg"})
                                        )
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "/config/hjjcgl/news_category/2012-09-25/2-简介图.jpg", title: "珠海高凌2"}, 
                                            React.createElement("img", {src: "img/index/ads10.jpg"})
                                        )
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "http://www.3ctech.com.cn/", title: "戈顿三希1"}, 
                                            React.createElement("img", {src: "img/index/ads11.jpg"})
                                        )
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "/config/hjjcgl/news_category/2013-04-18/戈顿三希2.jpg", title: "戈顿三希2"}, 
                                            React.createElement("img", {src: "img/index/ads12.jpg"})
                                        )
                                    )
                                )
                            ), 
                            React.createElement("div", {id: "inner02"})
                        )
                    )
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(Index, null),
    document.getElementById('page')
);

$(function () {
    var outer_keleyi_com = $("#ads");
    var inner01 = $("#inner01");
    var inner02 = $("#inner02");
    inner02.html(inner01.html());
    function que() {
//alert(outer_keleyi_com.scrollLeft() +" "+ inner01.width());
        if (outer_keleyi_com.scrollLeft() >= inner01.width()) {
//alert(outer_keleyi_com.scrollLeft() +" "+ inner01.width());
            outer_keleyi_com.scrollLeft(0);
        }
        else {
            outer_keleyi_com.scrollLeft(outer_keleyi_com.scrollLeft() + 1);
        }
    }

    setInterval(que, 50);
})