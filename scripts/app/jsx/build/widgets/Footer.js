/**
 * Created by Ethan on 16/5/13.
 */
var Footer = React.createClass({displayName: "Footer",
    render: function () {
        return (
            React.createElement("footer", {className: "footer"}, 
                React.createElement("div", {className: "container"}, 
                    React.createElement("p", {className: "text-muted text-center"}, "上海萨可秀净化科技有限公司 版权所有")
                )
            )
        );
    }
});