(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/a9y":function(e,t,r){"use strict";var n=r("lwsE"),a=r("W8MJ"),o=r("7W2i"),i=r("a1gu"),s=r("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var a=s(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return i(this,r)}}var p=r("TqRt");t.__esModule=!0,t.default=void 0;var d=p(r("q1tI")),c=p(r("8Kt/")),g={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function u(e){var t=e.res,r=e.err;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}var f=function(e){o(r,e);var t=l(r);function r(){return n(this,r),t.apply(this,arguments)}return a(r,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||g[e]||"An unexpected error has occurred";return d.default.createElement("div",{style:m.error},d.default.createElement(c.default,null,d.default.createElement("title",null,e,": ",t)),d.default.createElement("div",null,d.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?d.default.createElement("h1",{style:m.h1},e):null,d.default.createElement("div",{style:m.desc},d.default.createElement("h2",{style:m.h2},t,"."))))}}]),r}(d.default.Component);t.default=f,f.displayName="ErrorPage",f.getInitialProps=u,f.origGetInitialProps=u;var m={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},RNiq:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSP",(function(){return x}));var n=r("MX0m"),a=r.n(n),o=r("q1tI"),i=r.n(o),s=r("5Yp1"),l=r("YFqc"),p=r.n(l),d=r("bWrV"),c=i.a.createElement,g=function(e){var t=e.channels;return c(i.a.Fragment,null,c("div",{className:"jsx-2104841391 channels"},t.map((function(e){return c(p.a,{href:"/channel?id=".concat(e.id),as:"/".concat(Object(d.a)(e.title),"?id=").concat(e.id),key:e.id},c("a",{className:"jsx-2104841391 channel"},c("img",{src:e.urls.logo_image.original,alt:"",className:"jsx-2104841391"}),c("h2",{className:"jsx-2104841391"},e.title)))}))),c(a.a,{id:"2104841391"},[".channels.jsx-2104841391{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}","a.channel.jsx-2104841391{display:block;margin-bottom:0.5em;color:#333;-webkit-text-decoration:none;text-decoration:none;}",".channel.jsx-2104841391 img.jsx-2104841391{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}","h2.jsx-2104841391{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}"]))},u=r("eomm"),f=r.n(u),m=i.a.createElement,x=!0;t.default=function(e){var t=e.channels,r=e.statusCode;return r?m(f.a,{statusCode:r}):m(i.a.Fragment,null,m(s.a,{title:"Podcasts"},m(g,{channels:t})),m(a.a,{id:"174076361"},["#nprogress{pointer-events:none;}","#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}","#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}","#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px;}","#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite;}",".nprogress-custom-parent{overflow:hidden;position:relative;}",".nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute;}","@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}","@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}","@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]))}},bWrV:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e){return(t=e,t.replace(/\xc0|\xc1|\xc2|\xc3|\xc4|\xc5/g,"A").replace(/\xe0|\xe1|\xe2|\xe3|\xe4|\xe5/g,"a").replace(/\xd2|\xd3|\xd4|\xd5|\xd5|\xd6|\xd8/g,"O").replace(/\xf2|\xf3|\xf4|\xf5|\xf6|\xf8/g,"o").replace(/\xc8|\xc9|\xca|\xcb/g,"E").replace(/\xe8|\xe9|\xea|\xeb/g,"e").replace(/\xc7|\xe7/g,"c").replace(/\xcc|\xcd|\xce|\xcf/g,"I").replace(/\xec|\xed|\xee|\xef/g,"i").replace(/\xd9|\xda|\xdb|\xdc/g,"U").replace(/\xf9|\xfa|\xfb|\xfc/g,"u")).toLowerCase().replace(/[^\w\-]+/g,"-");var t}},eomm:function(e,t,r){e.exports=r("/a9y")},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])}},[["vlRD",0,2,1,3,4]]]);