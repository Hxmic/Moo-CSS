(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(e,a){e.exports=React},17:function(e,a){e.exports=ReactRouterDOM},19:function(e,a,t){e.exports=t(31)},2:function(e,a,t){e.exports={"m-home":"m-2f9L5","m-title":"m-aIG2k",name:"m-yjZJw",description:"m-167qZ",action:"m-2Znq5",btn:"m-BbmG1","m-feature":"m-HQ93T",item:"m-1r22o"}},28:function(e,a,t){e.exports=t.p+"static/media/logo.2cd2214d.png"},29:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),m=t.n(c),l=t(3),s=t(4),o=t(6),i=t(5),u=t(7),h=t(9),p=t.n(h),d=t(1),f=t.n(d),E=function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:f()(p.a["m-navbar"],"u-j-middle"),"s-theme__navbar":"1"},r.a.createElement("a",{href:"/",className:"u-home-link"},r.a.createElement("span",{className:"g-fs20"},"Moo-CSS")),r.a.createElement("nav",{className:f()(p.a["m-nav"],"u-j-middle")},r.a.createElement("div",{className:"nav__item j-change_theme",onClick:this.props.triggerTheme},r.a.createElement("a",null,"切换主题")),r.a.createElement("div",{className:p.a["m-nav__item"]},r.a.createElement("a",{href:"/moocss/"},"Moo-css")),r.a.createElement("div",{className:"m-nav__item"},r.a.createElement("a",{href:"https://github.com/MichealWayne/Moo-css",target:"_blank"},"Github"))))}}]),a}(n.Component),b=t(13);function g(){var e=Object(b.a)(["\n    padding: 40px;\n\tcolor: #4e6e8e;\n"]);return g=function(){return e},e}var v=t(14).a.footer(g()),j=function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(v,{className:"f-tc g-fs12 f-b_1px bt_1px g-mt60"},"MIT Licensed | Copyright © 2019-present MichealWayne")}}]),a}(n.Component),N=t(2),O=t.n(N),_=function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:f()(O.a["m-home"]),"s-theme__home":"1"},r.a.createElement("div",{className:f()(O.a["m-title"],"f-tc")},r.a.createElement("img",{src:t(28),alt:"hero"}),r.a.createElement("h1",{className:f()(O.a.name,"g-fs50")},"Moo-CSS"),r.a.createElement("p",{className:f()(O.a.description),"s-description":"1"},"模块化面向对象的CSS写法规则，这是一个简单的PC demo"),r.a.createElement("p",{className:f()(O.a.action)},r.a.createElement("a",{href:"https://github.com/MichealWayne/Moo-css",target:"_blank",className:f()(O.a.btn,"u-btn_il"),"s-color":"red","s-size":"big"},"立即了解 →"))),r.a.createElement("div",{className:f()(O.a["m-features"],"u-p20 u-j-middle f-b_1px bt_1px g-mt40"),"s-feature":"1"},r.a.createElement("div",{className:O.a.item},r.a.createElement("h2",null,"重用性强"),r.a.createElement("p",null,"样式模块化、原子化，大部分样式能直接复用。")),r.a.createElement("div",{className:O.a.item},r.a.createElement("h2",null,"维护性强"),r.a.createElement("p",null,"分层分类，对象化的编写方式易读易改。")),r.a.createElement("div",{className:O.a.item},r.a.createElement("h2",null,"拓展性强"),r.a.createElement("p",null,"组件的理念，简单样式能直接拼出。"))),r.a.createElement("div",{className:f()(O.a["m-details"],"u-pt50 f-b_1px bt_1px g-mt20")},r.a.createElement("h3",{id:"介绍",className:"u-paragraph g-fs20"},r.a.createElement("a",{href:"#介绍","aria-hidden":"true"},"#")," 介绍"),r.a.createElement("p",{className:"u-paragraph g-fs16"},"Moo-CSS (Moo, [mu:]哞~)是结合BEM、SMACSS、MCSS、OOCSS等写法思想总结而成的一套CSS写法规则，适用于大中小型C端项目样式开发，旨在提高开发和维护效率。"),r.a.createElement("p",{className:"u-paragraph g-fs16"},"Moo-CSS有个大胆的想法：",r.a.createElement("strong",null,"统一CSS写法规范。")),r.a.createElement("h3",{id:"核心",className:"u-paragraph g-fs20 g-mt20"},r.a.createElement("a",{href:"#核心","aria-hidden":"true"},"#")," 核心"),r.a.createElement("p",{className:"u-paragraph g-fs16"},"组件化+面向对象。")))}}]),a}(n.Component),S=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={theme:"default"},t.triggerTheme=function(){t.setState({theme:"default"===t.state.theme?"dark":"default"})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state.theme;return r.a.createElement("div",{className:"m-app a-trans_color","s-theme":e},r.a.createElement(E,{triggerTheme:this.triggerTheme}),r.a.createElement(_,null),r.a.createElement(j,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=t(17);t(29);m.a.render(r.a.createElement(C.HashRouter,null,r.a.createElement(S,null)),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a){e.exports=ReactDOM},9:function(e,a,t){e.exports={"m-navbar":"m-Lqd2R","m-nav":"m-AsGRu","m-nav__item":"m-pJ-hE"}}},[[19,2,1]]]);
//# sourceMappingURL=main.9195a458.chunk.js.map