webpackJsonp([0xd2a57dc1d883],{37:function(e,t,n){"use strict";function o(e,t,n){var o=a.map(function(n){if(n.plugin[e]){var o=n.plugin[e](t,n.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:n?[n]:[]}function r(e,t,n){return a.reduce(function(n,o){return o.plugin[e]?n.then(function(){return o.plugin[e](t,o.options)}):n},Promise.resolve())}t.__esModule=!0,t.apiRunner=o,t.apiRunnerAsync=r;var a=[{plugin:n(209),options:{plugins:[]}}]},97:function(e,t,n){"use strict";t.components={"component---src-templates-meeting-js":n(203),"component---src-pages-archive-index-js":n(201),"component---src-pages-index-js":n(202)},t.json={"layout-index.json":n(204),"2018-03-13.json":n(205),"2018-06-19.json":n(206),"archive.json":n(207),"index.json":n(208)},t.layouts={"layout---index":n(200)}},98:function(e,t,n){(function(o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=n(1),l=r(s),f=n(2),p=r(f),d=n(57),h=r(d),m=n(27),g=r(m),v=n(37),y=n(274),R=r(y),w=function(e){var t=e.children;return o.createElement("div",null,t())},P=function(e){function t(n){a(this,t);var o=u(this,e.call(this)),r=n.location;return h.default.getPage(r.pathname)||(r=c({},r,{pathname:"/404.html"})),o.state={location:r,pageResources:h.default.getResourcesForPathname(r.pathname)},o}return i(t,e),t.prototype.componentWillReceiveProps=function(e){var t=this;if(this.state.location.pathname!==e.location.pathname){var n=h.default.getResourcesForPathname(e.location.pathname);if(n)this.setState({location:e.location,pageResources:n});else{var o=e.location;h.default.getPage(o.pathname)||(o=c({},o,{pathname:"/404.html"})),h.default.getResourcesForPathname(o.pathname,function(e){t.setState({location:o,pageResources:e})})}}},t.prototype.componentDidMount=function(){var e=this;g.default.on("onPostLoadPageResources",function(t){h.default.getPage(e.state.location.pathname)&&t.page.path===h.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:t.pageResources})})},t.prototype.shouldComponentUpdate=function(e,t){return!t.pageResources||(!(this.state.pageResources||!t.pageResources)||(this.state.pageResources.component!==t.pageResources.component||(this.state.pageResources.json!==t.pageResources.json||(!(this.state.location.key===t.location.key||!t.pageResources.page||!t.pageResources.page.matchPath&&!t.pageResources.page.path)||(0,R.default)(this,e,t)))))},t.prototype.render=function(){var e=(0,v.apiRunner)("replaceComponentRenderer",{props:c({},this.props,{pageResources:this.state.pageResources}),loader:d.publicLoader}),t=e[0];return this.props.page?this.state.pageResources?t||(0,s.createElement)(this.state.pageResources.component,c({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?t||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:w,c({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},t}(l.default.Component);P.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},t.default=P,e.exports=t.default}).call(t,n(11))},27:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(245),a=o(r),u=(0,a.default)();e.exports=u},99:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(36),a=n(58),u=o(a),i={};e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var o=decodeURIComponent(n),a=(0,u.default)(o,t);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),i[a])return i[a];var c=void 0;return e.some(function(e){if(e.matchPath){if((0,r.matchPath)(a,{path:e.path})||(0,r.matchPath)(a,{path:e.matchPath}))return c=e,i[a]=e,!0}else{if((0,r.matchPath)(a,{path:e.path,exact:!0}))return c=e,i[a]=e,!0;if((0,r.matchPath)(a,{path:e.path+"index.html"}))return c=e,i[a]=e,!0}return!1}),c}}},100:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(86),a=o(r),u=n(37),i=(0,u.apiRunner)("replaceHistory"),c=i[0],s=c||(0,a.default)();e.exports=s},205:function(e,t,n){n(7),e.exports=function(e){return n.e(0xa02b9ad6a4fc,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(239)})})}},206:function(e,t,n){n(7),e.exports=function(e){return n.e(0xbfba54292d8b,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(240)})})}},207:function(e,t,n){n(7),e.exports=function(e){return n.e(0xd30560ed0a0a,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(241)})})}},208:function(e,t,n){n(7),e.exports=function(e){return n.e(0x81b8806e4260,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(242)})})}},204:function(e,t,n){n(7),e.exports=function(e){return n.e(60335399758886,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(53)})})}},200:function(e,t,n){n(7),e.exports=function(e){return n.e(0x67ef26645b2a,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(101)})})}},57:function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.publicLoader=void 0;var r=n(1),a=(o(r),n(99)),u=o(a),i=n(27),c=o(i),s=n(58),l=o(s),f=void 0,p={},d={},h={},m={},g={},v=[],y=[],R={},w="",P=[],_={},x=function(e){return e&&e.default||e},b=void 0,j=!0,E=[],O={},C={},N=5;b=n(102)({getNextQueuedResources:function(){return P.slice(-1)[0]},createResourceDownload:function(e){L(e,function(){P=P.filter(function(t){return t!==e}),b.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){b.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){b.onPostLoadPageResources(e)});var k=function(e,t){return _[e]>_[t]?1:_[e]<_[t]?-1:0},T=function(e,t){return R[e]>R[t]?1:R[e]<R[t]?-1:0},L=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(m[t])e.nextTick(function(){n(null,m[t])});else{var o=void 0;o="component---"===t.slice(0,12)?d.components[t]:"layout---"===t.slice(0,9)?d.layouts[t]:d.json[t],o(function(e,o){m[t]=o,E.push({resource:t,succeeded:!e}),C[t]||(C[t]=e),E=E.slice(-N),n(e,o)})}},S=function(t,n){g[t]?e.nextTick(function(){n(null,g[t])}):C[t]?e.nextTick(function(){n(C[t])}):L(t,function(e,o){if(e)n(e);else{var r=x(o());g[t]=r,n(e,r)}})},A=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var t=E.find(function(e){return e.succeeded});return!!t},D=function(e,t){console.log(t),O[e]||(O[e]=t),A()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},F=1,M={empty:function(){y=[],R={},_={},P=[],v=[],w=""},addPagesArray:function(e){v=e,f=(0,u.default)(e,w)},addDevRequires:function(e){p=e},addProdRequires:function(e){d=e},dequeue:function(){return y.pop()},enqueue:function(e){var t=(0,l.default)(e,w);if(!v.some(function(e){return e.path===t}))return!1;var n=1/F;F+=1,R[t]?R[t]+=1:R[t]=1,M.has(t)||y.unshift(t),y.sort(T);var o=f(t);return o.jsonName&&(_[o.jsonName]?_[o.jsonName]+=1+n:_[o.jsonName]=1+n,P.indexOf(o.jsonName)!==-1||m[o.jsonName]||P.unshift(o.jsonName)),o.componentChunkName&&(_[o.componentChunkName]?_[o.componentChunkName]+=1+n:_[o.componentChunkName]=1+n,P.indexOf(o.componentChunkName)!==-1||m[o.jsonName]||P.unshift(o.componentChunkName)),P.sort(k),b.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:P,resourcesCount:_}},getPages:function(){return{pathArray:y,pathCount:R}},getPage:function(e){return f(e)},has:function(e){return y.some(function(t){return t===e})},getResourcesForPathname:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};j&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(t)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var t=e,n=Array.isArray(t),o=0,t=n?t:t[Symbol.iterator]();;){var r;if(n){if(o>=t.length)break;r=t[o++]}else{if(o=t.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),j=!1;if(O[t])return D(t,'Previously detected load failure for "'+t+'"'),n();var o=f(t);if(!o)return D(t,"A page wasn't found for \""+t+'"'),n();if(t=o.path,h[t])return e.nextTick(function(){n(h[t]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:h[t]})}),h[t];c.default.emit("onPreLoadPageResources",{path:t});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){h[t]={component:r,json:a,layout:u,page:o};var e={component:r,json:a,layout:u,page:o};n(e),c.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return S(o.componentChunkName,function(e,t){e&&D(o.path,"Loading the component for "+o.path+" failed"),r=t,i()}),S(o.jsonName,function(e,t){e&&D(o.path,"Loading the JSON for "+o.path+" failed"),a=t,i()}),void(o.layoutComponentChunkName&&S(o.layout,function(e,t){e&&D(o.path,"Loading the Layout for "+o.path+" failed"),u=t,i()}))},peek:function(e){return y.slice(-1)[0]},length:function(){return y.length},indexOf:function(e){return y.length-y.indexOf(e)-1}};t.publicLoader={getResourcesForPathname:M.getResourcesForPathname};t.default=M}).call(t,n(246))},243:function(e,t){e.exports=[{componentChunkName:"component---src-templates-meeting-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2018-03-13.json",path:"/2018-03-13/"},{componentChunkName:"component---src-templates-meeting-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2018-06-19.json",path:"/2018-06-19/"},{componentChunkName:"component---src-pages-archive-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"archive.json",path:"/archive/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"}]},102:function(e,t){"use strict";e.exports=function(e){var t=e.getNextQueuedResources,n=e.createResourceDownload,o=[],r=[],a=function(){var e=t();e&&(r.push(e),n(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(t){return t!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(t){return t!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,t,n){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(37),a=n(1),u=(t(a),n(89)),i=t(u),c=n(36),s=n(213),l=n(185),f=t(l),p=n(8),d=n(100),h=t(d),m=n(27),g=t(m),v=n(243),y=t(v),R=n(244),w=t(R),P=n(98),_=t(P),x=n(97),b=t(x),j=n(57),E=t(j);n(117),window.___history=h.default,window.___emitter=g.default,E.default.addPagesArray(y.default),E.default.addProdRequires(b.default),window.asyncRequires=b.default,window.___loader=E.default,window.matchPath=c.matchPath;var O=w.default.reduce(function(e,t){return e[t.fromPath]=t,e},{}),C=function(e){var t=O[e];return null!=t&&(h.default.replace(t.toPath),!0)};C(window.location.pathname),(0,r.apiRunnerAsync)("onClientEntry").then(function(){function t(e){window.___history&&d!==!1||(window.___history=e,d=!0,e.listen(function(e,t){C(e.pathname)||setTimeout(function(){(0,r.apiRunner)("onRouteUpdate",{location:e,action:t})},0)}))}function u(e,t){var n=t.location.pathname,o=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:n});if(o.length>0)return o[0];if(e){var a=e.location.pathname;if(a===n)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&n(103);var l=function(e){function t(e){e.page.path===E.default.getPage(o).path&&(g.default.off("onPostLoadPageResources",t),clearTimeout(u),window.___history.push(n))}var n=(0,p.createLocation)(e,null,null,h.default.location),o=n.pathname,r=O[o];r&&(o=r.toPath);var a=window.location;if(a.pathname!==n.pathname||a.search!==n.search||a.hash!==n.hash){var u=setTimeout(function(){g.default.off("onPostLoadPageResources",t),g.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(n)},1e3);E.default.getResourcesForPathname(o)?(clearTimeout(u),window.___history.push(n)):g.default.on("onPostLoadPageResources",t)}};window.___navigateTo=l,(0,r.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var d=!1,m=(0,r.apiRunner)("replaceRouterComponent",{history:h.default})[0],v=function(t){var n=t.children;return e.createElement(c.Router,{history:h.default},n)},y=(0,c.withRouter)(_.default);E.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,a.createElement)(m?m:v,null,(0,a.createElement)(s.ScrollContext,{shouldUpdateScroll:u},(0,a.createElement)(y,{layout:!0,children:function(e){return(0,a.createElement)(c.Route,{render:function(n){t(n.history);var r=e?e:n;return E.default.getPage(r.location.pathname)?(0,a.createElement)(_.default,o({page:!0},r)):(0,a.createElement)(_.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},l=(0,r.apiRunner)("wrapRootComponent",{Root:n},n)[0],p=(0,r.apiRunner)("replaceHydrateFunction",void 0,i.default.render)[0];(0,f.default)(function(){return p(e.createElement(l,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})}).call(t,n(11))},244:function(e,t){e.exports=[]},103:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(27),a=o(r),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var t=e.installing;console.log("installingWorker",t),t.addEventListener("statechange",function(){switch(t.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},58:function(e,t){"use strict";t.__esModule=!0,t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,t.length)===t?e.slice(t.length):e},e.exports=t.default},185:function(e,t,n){!function(t,n){e.exports=n()}("domready",function(){var e,t=[],n=document,o=n.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return a||n.addEventListener(r,e=function(){for(n.removeEventListener(r,e),a=1;e=t.shift();)e()}),function(e){a?setTimeout(e,0):t.push(e)}})},7:function(e,t,n){"use strict";function o(){function e(e){var t=o.lastChild;return"SCRIPT"!==t.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",t)):void(t.onload=t.onerror=function(){t.onload=t.onerror=null,setTimeout(e,0)})}var t,o=document.querySelector("head"),r=n.e,a=n.s;n.e=function(o,u){var i=!1,c=!0,s=function(e){u&&(u(n,e),u=null)};return!a&&t&&t[o]?void s(!0):(r(o,function(){i||(i=!0,c?setTimeout(function(){s()}):s())}),void(i||(c=!1,e(function(){i||(i=!0,a?a[o]=void 0:(t||(t={}),t[o]=!0),s(!0))}))))}}o()},209:function(e,t,n){"use strict";var o=n(23);t.onClientEntry=function(){window._glamor&&(0,o.rehydrate)(window._glamor)}},87:function(e,t){"use strict";function n(e,t,f){if("string"!=typeof t){if(l){var p=s(t);p&&p!==l&&n(e,p,f)}var d=u(t);i&&(d=d.concat(i(t)));for(var h=0;h<d.length;++h){var m=d[h];if(!(o[m]||r[m]||f&&f[m])){var g=c(t,m);try{a(e,m,g)}catch(e){}}}return e}return e}var o={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,u=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,l=s&&s(Object);e.exports=n},245:function(e,t){function n(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).slice().map(function(e){e(n)}),(e["*"]||[]).slice().map(function(e){e(t,n)})}}}e.exports=n},246:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function u(){m&&d&&(m=!1,d.length?h=d.concat(h):g=-1,h.length&&i())}function i(){if(!m){var e=r(u);m=!0;for(var t=h.length;t;){for(d=h,h=[];++g<t;)d&&d[g].run();g=-1,t=h.length}d=null,m=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function s(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var d,h=[],m=!1,g=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new c(e,t)),1!==h.length||m||r(i)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.prependListener=s,p.prependOnceListener=s,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},274:function(e,t){"use strict";function n(e,t){for(var n in e)if(!(n in t))return!0;for(var o in t)if(e[o]!==t[o])return!0;return!1}t.__esModule=!0,t.default=function(e,t,o){return n(e.props,t)||n(e.state,o)},e.exports=t.default},201:function(e,t,n){n(7),e.exports=function(e){return n.e(47568926626997,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(105)})})}},202:function(e,t,n){n(7),e.exports=function(e){return n.e(35783957827783,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(106)})})}},203:function(e,t,n){n(7),e.exports=function(e){return n.e(0x78aa100170a9,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(107)})})}}});
//# sourceMappingURL=app-897955edfefc9a85665b.js.map