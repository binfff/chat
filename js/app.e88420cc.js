(function(){var e={305:function(){document.addEventListener("plusready",(function(){var e=plus.webview.currentWebview();plus.key.addEventListener("backbutton",(function(){e.canBack((function(t){if(t.canBack)e.back();else{var n=null;plus.key.addEventListener("backbutton",(function(){n?(new Date).getTime()-n<1500&&plus.runtime.quit():(n=(new Date).getTime(),confirm("点击确定退出应用")?plus.runtime.quit():alert("取消退出"),setTimeout((function(){n=null}),1e3))}),!1)}}))}))}))},6370:function(e,t,n){"use strict";var r=n(4183),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],u={name:"APP",components:{}},a=u,c=n(62),f=(0,c.Z)(a,o,i,!1,null,null,null),l=f.exports,s=n(3498),d=n(4766),p=n(8790),m=n.n(p),h=n(3213),v=n(1378),b=(n(305),n(4404)),g=n(4690),y=n.n(g);r["default"].config.productionTip=!1,r["default"].use(v.Z,h.Z),r["default"].use(m()),r["default"].use(b.Z),r["default"].use(y()),r["default"].prototype.$Eventbus=new r["default"],new r["default"]({router:s.Z,store:d.Z,render:e=>e(l)}).$mount("#app")},3498:function(e,t,n){"use strict";var r=n(4183),o=n(3101);r["default"].use(o.ZP);const i=[{path:"/login",name:"logn",component:()=>n.e(156).then(n.bind(n,9156))},{path:"/register",name:"register",component:()=>n.e(809).then(n.bind(n,8809))},{path:"/",component:()=>n.e(76).then(n.bind(n,6076)),redirect:"/home",meta:{title:"",icon:"el-icon-coin",requireAuth:!0},children:[{path:"/home",name:"home",component:()=>Promise.all([n.e(35),n.e(193)]).then(n.bind(n,1193)),meta:{title:"首页",icon:"",requireAuth:!1}},{path:"/chatting",name:"chatting",component:()=>Promise.all([n.e(35),n.e(827)]).then(n.bind(n,8827)),meta:{title:"对话框",icon:"",requireAuth:!1}},{path:"/createAi",name:"createAi",component:()=>n.e(295).then(n.bind(n,3295)),meta:{title:"创建AI角色",icon:"",requireAuth:!1}}]}],u=new o.ZP({mode:"history",base:"/",routes:i});t["Z"]=u},4766:function(e,t,n){"use strict";var r=n(4183),o=n(5250);r["default"].use(o.ZP),t["Z"]=new o.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var f=o();void 0!==f&&(t=f)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{35:"982a8edf",76:"68e9aeb0",156:"8837265a",193:"6b4b5bf2",295:"68fc84c0",809:"683676f6",827:"286e7f56"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{76:"255d03c8",156:"fce60f31",193:"f78238bd",295:"e3917a8f",809:"d440dec6",827:"49828176"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="pro:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var s=f[l];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+i){a=s;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var u=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var u=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=u,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(t(u,a))return o();e(r,a,null,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={76:1,156:1,193:1,295:1,809:1,827:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),a=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],c=r[2],f=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var l=c(n)}for(t&&t(r);f<u.length;f++)i=u[f],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkpro"]=self["webpackChunkpro"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6370)}));r=n.O(r)})();
//# sourceMappingURL=app.e88420cc.js.map