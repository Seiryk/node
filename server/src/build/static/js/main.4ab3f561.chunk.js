(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(t,e,n){t.exports=n(40)},40:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(16),c=n.n(r),i=n(2),s=n.n(i),u=n(3),l=n(5),p=n(4),h=n.n(p),f=n(6),m=n.n(f),d=function(){var t=Object(a.useState)(),e=Object(l.a)(t,2),r=(e[0],e[1]);Object(a.useEffect)((function(){setTimeout((function(){n.e(3).then(n.bind(null,41)).then((function(t){r(t.default)}))}),2e3)}),[]);var c=function(){var t=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.post("http://localhost:3333/checkCookie",{},{withCredentials:!0});case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=Object(u.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.post("http://192.168.0.27:2222/session",{},{withCredentials:!0});case 2:e=t.sent,console.log(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("http://localhost:2222/auth/logout",{withCredentials:!0});case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return console.log(m.a),o.a.createElement("div",{style:{marginTop:50,marginLeft:100}},o.a.createElement("img",{src:m.a,width:"200px",height:"200px"}),o.a.createElement("a",{href:"http://localhost:2222/auth/google"},"google"),o.a.createElement("button",{onClick:i},"session"),o.a.createElement("button",{onClick:c},"check cookie"),o.a.createElement("button",{onClick:p},"logout"))};var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},6:function(t,e,n){t.exports=n.p+"static/media/cat.0d86f587.png"}},[[17,1,2]]]);