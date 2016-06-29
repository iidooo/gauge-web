var Index = React.createClass({
    render: function () {
        return (
            <div>
                <div className="container">
                    <header id="indexHeader">
                        <div className="banner">
                            <h1 className="banner-title">舵杰汽车尾气监测管理与分析平台</h1>
                        </div>
                        <nav className="navbar">
                            <ul className="nav navbar-nav">
                                <li>
                                    <a href={SiteProperties.clientURL + Page.Index} target="_blank">首页</a>
                                </li>
                                <li>
                                    <a href="http://www.duoje.cn" target="_blank">公司介绍</a>
                                </li>
                                <li>
                                    <a href="http://www.duoje.cn/page/offerlist.htm" className="show-category"
                                       target="_blank">供应产品▼</a>
                                </li>
                                <li>
                                    <a href="http://www.duoje.cn/page/creditdetail.htm" target="_blank">公司档案</a>
                                </li>
                                <li>
                                    <a href="http://www.duoje.cn/page/albumlist.htm" target="_blank">我的相册</a>
                                </li>
                                <li>
                                    <a href="http://www.duoje.cn/page/newslist.htm" target="_blank">产品动态</a>
                                </li>
                                <li>
                                    <a href="http://www.duoje.cn/page/feedback.htm" target="_blank">留言板</a>
                                </li>
                                <li>
                                    <a href="http://www.duoje.cn/page/contactinfo.htm" target="_blank">联系方式</a>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <div className="row margin-top-10">
                        <div className="col-sm-3">
                            <div className="block">
                                <div className="panel panel-success">
                                    <div className="panel-heading">监测平台登录</div>
                                    <div className="panel-body">
                                        <LoginForm/>
                                    </div>
                                </div>
                            </div>
                            <LinkList/>
                        </div>
                        <div className="col-sm-9">
                            <Notice/>
                            <News/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                        <Ads/>
                            </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
});

var LinkList = React.createClass({
    render: function () {
        return (
            <div className="block">
                <div className="panel panel-success">
                    <div className="panel-heading">友情链接</div>
                    <div className="panel-body">
                        <ul className="list-group">
                            <li className="list-group-item"><a href="http://www.cnemc.cn" target="_blank"><img
                                src="img/index/link1.jpg"/></a></li>
                            <li className="list-group-item"><a href="http://www.hjjkyyj.com" target="_blank"><img
                                src="img/index/link2.jpg"/></a></li>
                            <li className="list-group-item"><a href="http://hjjcgl.cnjournals.net/ch/index.aspx"
                                                               target="_blank"><img
                                src="img/index/link3.jpg"/></a></li>
                            <li className="list-group-item"><a href="http://www.wanfangdata.com.cn" target="_blank"><img
                                src="img/index/link4.jpg"/></a></li>
                            <li className="list-group-item"><a href="http://www.alljournals.cn" target="_blank"><img
                                src="img/index/link5.jpg"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

var Notice = React.createClass({
    render: function () {
        return (
            <div className="block">
                <div className="panel panel-success">
                    <div className="panel-heading">信息公告</div>
                    <div className="panel-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <a href="reader/view_news.aspx?id=20160119092748001" target="_blank">
                                            全省各地两会“绿色生态”成热词</a>
                                    </div>
                                    <div className="col-sm-4 text-right">
                                        2016-01-19
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <a href="reader/view_news.aspx?id=20160119092421001" target="_blank">
                                            南京体验馆引导垃圾分类</a>
                                    </div>
                                    <div className="col-sm-4 text-right">
                                        2016-01-19
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <a href="reader/view_news.aspx?id=20151215025922001" target="_blank">
                                            省环保厅向媒体通报近期大气环境质量情况和相关保障措施</a>
                                    </div>
                                    <div className="col-sm-4 text-right">
                                        2016-01-19
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <a href="reader/view_news.aspx?id=20151026032951001" target="_blank">
                                            省环保厅举行“方舟-2015”江苏省辐射事故综合应急演习</a>
                                    </div>
                                    <div className="col-sm-4 text-right">
                                        2016-01-19
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <a href="reader/view_news.aspx?id=20150908034718001" target="_blank">
                                            环保公安共治机动车污染 南京成立机动车环保警务室</a>
                                    </div>
                                    <div className="col-sm-4 text-right">
                                        2016-01-19
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

var News = React.createClass({
    render: function () {
        return (
            <div className="block">
                <div className="panel panel-success">
                    <div className="panel-heading">行业动态</div>
                    <div className="panel-body">
                        <ul className="list-group">
                            <li className="list-group-item">大众VAS5054A安装与调试方法上</li>
                            <li className="list-group-item">汽车示波器在检测汽车传感器中的应用上</li>
                            <li className="list-group-item">汽车刹车油技术分析</li>
                            <li className="list-group-item">丰田自动织机将开始销售PHV/EV用充电站</li>
                            <li className="list-group-item">汽车整车测量</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

var Companey = React.createClass({
    render: function () {
        return (
            <div className="block">
                <div className="panel panel-success">
                    <div className="panel-heading">公司介绍</div>
                    <div className="panel-body">
                        <div>
                            <div className="col-sm-4 padding-5">
                                <img src="img/index/companey.jpg"/>
                            </div>
                            <div className="col-sm-8">
                                <p>
                                    上海舵杰汽车检测仪器有限公司是一家致力于汽车电子技术及计算机信息处理技术产品研究的公司。公司依托上海第二工业大学汽车学院从事汽车检测产品的开发与研究，公司与院方专门成立了汽车光电传感应用技术实验室。公司于2004年1月与美国‘APOLLO汽车科技公司’签署了正式协议，联合引进和在国内推出汽车检测仪等系列汽车专用检测仪器产品，产品上市几年来无论在产品品质上及技术服务上一致获得客户的肯定和赞誉。公司将本着引进消化，科学创新，服务国内客户为主，出口定制为辅之原则，不断探索和追求，将本公司产品打造真正意义的“国际品质，国际标准”的一流汽车检测产品。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var Ads = React.createClass({
    render: function () {
        return (
            <div className="block">
                <div className="panel panel-success">
                    <div className="panel-heading">广而告之</div>
                    <div id="ads" className="panel-body">
                        <div style={{width:3000 + "px"}}>
                            <div id="inner01">
                                <ul>
                                    <li>
                                        <a href="http://www.tegent.com.cn/" title="德祥科技1">
                                            <img src="img/index/ads1.jpg"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/config/hjjcgl/news_category/2015-05-28/德祥科技2.png" title="德祥科技2">
                                            <img src="img/index/ads2.png"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.sailhero.com/" title="河北先河1">
                                            <img src="img/index/ads3.jpg"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/config/hjjcgl/news_category/2012-02-22/先河环保宣传图_副本.jpg" title="河北先河2">
                                            <img src="img/index/ads4.jpg"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://thyb.shuoyi.com" title="武汉天虹1">
                                            <img src="img/index/ads5.jpg"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/config/hjjcgl/news_category/2012-02-22/武汉天虹宣传图_副本.jpg" title="武汉天虹2">
                                            <img src="img/index/ads6.jpg"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/config/hjjcgl/news_category/2012-02-22/厦门隆力德宣传图_副本.jpg"
                                           title="厦门隆力德2">
                                            <img src="img/index/ads7.jpg"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/config/hjjcgl/news_category/2012-02-22/厦门隆力德产品.jpg" title="厦门隆力德1">
                                            <img src="img/index/ads8.jpg"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.comleader.cn/" title="珠海高凌1">
                                            <img src="img/index/ads9.jpg"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/config/hjjcgl/news_category/2012-09-25/2-简介图.jpg" title="珠海高凌2">
                                            <img src="img/index/ads10.jpg"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.3ctech.com.cn/" title="戈顿三希1">
                                            <img src="img/index/ads11.jpg"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/config/hjjcgl/news_category/2013-04-18/戈顿三希2.jpg" title="戈顿三希2">
                                            <img src="img/index/ads12.jpg"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div id="inner02"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Index />,
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