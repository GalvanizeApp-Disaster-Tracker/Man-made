(this["webpackJsonpreact-disasters"]=this["webpackJsonpreact-disasters"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/aqi.dd661a9a.jpg"},,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),u=(n(12),n(2)),i=n.n(u),s=n(3),l=n(1),f=(n(14),function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)([]),f=Object(l.a)(u,2),m=f[0],h=f[1],p=Object(a.useState)(""),d=Object(l.a)(p,2),b=d[0],v=d[1],y=Object(a.useState)([]),E=Object(l.a)(y,2),j=E[0],g=E[1],O=Object(a.useState)(""),w=Object(l.a)(O,2),k=w[0],L=w[1],x=function(){var t=Object(s.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.target.value,o(a),v(""),g([]),L(""),t.next=7,fetch("https://api.airvisual.com/v2/states?country="+n.target.value+"&key="+e.apiKey).then((function(e){return e.json()})).then((function(e){return h(e.data)})).catch((function(e){return console.log("error",e)}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),S=function(){var t=Object(s.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.target.value,v(a),L(""),t.next=5,fetch("https://api.airvisual.com/v2/cities?state="+n.target.value+"&country="+c+"&key="+e.apiKey).then((function(e){return e.json()})).then((function(e){return g(e.data)})).catch((function(e){return console.log("error",e)}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=Object(s.a)(i.a.mark((function t(n,a,r){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.airvisual.com/v2/city?city="+n+"&state="+a+"&country="+r+"&key="+e.apiKey).then((function(e){return e.json()})).then((function(t){return e.setCurrentLocation(t.data)})).catch((function(e){return console.log("error",e)}));case 2:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}();return r.a.createElement("form",{className:"nav-form"},r.a.createElement("select",{onChange:function(e){return x(e)}},r.a.createElement("option",{selected:!0,value:!0},"--Choose a country--"),e.countries.map((function(e){return r.a.createElement("option",{key:e.country,value:e.country},e.country)}))),r.a.createElement("select",{onChange:function(e){return S(e)}},r.a.createElement("option",{selected:!0,value:!0},"--Choose a state--"),m.map((function(e){return r.a.createElement("option",{key:e.state,value:e.state},e.state)}))),r.a.createElement("select",{onChange:function(e){return L(e.target.value)}},r.a.createElement("option",{selected:!0,value:!0},"--Choose a city--"),j.map((function(e){return r.a.createElement("option",{key:e.city,value:e.city},e.city)}))),r.a.createElement("button",{type:"button",className:"btn btn-light",onClick:function(){return C(k,b,c)}},"Submit"))}),m=n(4),h=n.n(m),p=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light justify-content-between"},r.a.createElement("button",{type:"button",className:"btn btn-light",onClick:function(){return e.setCurrentLocation(e.nearestLocation)}},"Home"),r.a.createElement(f,{countries:e.countries,apiKey:e.apiKey,setCurrentLocation:e.setCurrentLocation}))},d=function(e){var t=Object(a.useState)(),n=Object(l.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)({}),i=Object(l.a)(u,2),s=i[0],f=i[1];return Object(a.useEffect)((function(){if(e.currentLocation.current){fetch("/levels/"+e.currentLocation.current.pollution.aqius).then((function(e){return e.json()})).then((function(e){return f(e)})).catch((function(e){return console.log("error",e)})),o(e.currentLocation.current.pollution.aqius)}}),[e.currentLocation]),Object(a.useEffect)((function(){if(s.color){e=s.color,document.body.style.backgroundColor=e}var e}),[s.color]),r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card-img-top",src:h.a,alt:"Air Quality Index Logo"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",null,e.currentLocation.city,", ",e.currentLocation.state,", ",e.currentLocation.country),r.a.createElement("br",null),r.a.createElement("h3",null,c),r.a.createElement("br",null),r.a.createElement("h4",null,s.concern),r.a.createElement("br",null),r.a.createElement("h4",null,s.description)))},b=function(e){return r.a.createElement("div",{className:"article-div"},r.a.createElement("img",{src:e.data.image,alt:e.data.message,className:"article-img"}),r.a.createElement("div",{className:"article-body"},r.a.createElement("h3",null,e.data.message),r.a.createElement("p",null,e.data.articleDate,", ",e.data.location),r.a.createElement("p",null,e.data.summary),r.a.createElement("a",{href:e.data.articleLink,target:"_blank"},"Read More...")))};var v=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){fetch("/disasters").then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return console.log("error",e)}))}),[]),r.a.createElement("div",{id:"article-space"},r.a.createElement("h3",null,"Read the following articles to learn what's going on in the world, and how you can help."),n.map((function(e){return r.a.createElement(b,{data:e})})))};var y=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)({}),u=Object(l.a)(o,2),f=u[0],m=u[1],h=Object(a.useState)({}),b=Object(l.a)(h,2),y=b[0],E=b[1],j=Object(a.useState)([]),g=Object(l.a)(j,2),O=g[0],w=g[1],k=Object(a.useState)("66f2cb04-569e-48b4-8505-4dd21c814ac9"),L=Object(l.a)(k,2),x=L[0];return L[1],Object(a.useEffect)((function(){function e(){return(e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.airvisual.com/v2/countries?key="+x).then((function(e){return e.json()})).then((function(e){return w(e.data)})).catch((function(e){return console.log("error",e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),c(!1)}),[]),Object(a.useEffect)((function(){function e(){return(e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.airvisual.com/v2/nearest_city?key="+x).then((function(e){return e.json()})).then((function(e){return E(e.data)})).catch((function(e){return console.log("error",e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){function e(){return(e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.airvisual.com/v2/nearest_city?key="+x).then((function(e){return e.json()})).then((function(e){return m(e.data)})).catch((function(e){return console.log("error",e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n?r.a.createElement("p",null,"Loading..."):r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Our Man-Made Disasters"),r.a.createElement("h3",null,"Oil spills. Industrial fires. Deforestation. Pollution."),r.a.createElement("h4",null,"Learn where your city stands, and read more about current man-made disasters. You can make a difference."),r.a.createElement(p,{countries:O,apiKey:x,setCurrentLocation:m,nearestLocation:y})),r.a.createElement(d,{currentLocation:f}),r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.f7fd76be.chunk.js.map