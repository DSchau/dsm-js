webpackJsonp([35783957827783],{15:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e){var t=e.styleOverrides;return k.createElement(x.Img,{src:"https://dsmjs.com/img/dsmjs-logo.png",css:t})}function a(){return k.createElement(M,null,"dsmJS")}function i(){return k.createElement(A,null,"Second Tuesday every month")}function s(e){var t=e.sponsor;return k.createElement(j,null,t)}function l(e){var t=e.location;return k.createElement(D,null,t)}function c(e){var t=e.sponsor,n=e.location;return k.createElement("header",null,k.createElement("a",{href:"/"},k.createElement(o,{styleOverrides:{float:"left",height:192}})),k.createElement(a,null),k.createElement(s,{sponsor:t}),k.createElement(l,{location:n}),k.createElement(i,null))}function u(e){var t=e.linkStyles;return k.createElement("ol",{style:{listStyle:"none",display:"flex",margin:0}},k.createElement("li",{style:F},k.createElement("a",{style:t,href:"/"},"Home")),k.createElement("li",{style:F},k.createElement("a",{style:t,href:"/archive"},"Past Meetings")))}function p(){return k.createElement("div",{style:{background:"#666"}},k.createElement(u,{linkStyles:{color:"#fff"}}))}function d(){return k.createElement("div",{style:L},"Copyright © dsmJS 2013 - ",(new Date).getFullYear())}function f(){return k.createElement("footer",null,k.createElement(p,null),k.createElement(d,null))}function m(e){var t=e.sponsor,n=e.location,r=e.children;return k.createElement(x.Div,{css:Object.assign({},N,{marginTop:"1em",maxWidth:1e3,margin:"0 auto"})},k.createElement(c,{sponsor:t,location:n}),r,k.createElement(f,null))}function h(e){var t=e.meeting,n=e.host;return k.createElement("div",null,k.createElement("h2",null,t.date),k.createElement("p",null,t.time.start," - ",t.time.end," @ ",n.location))}function g(e){var t=e.talk,n=e.content;return k.createElement(C.Fragment,null,k.createElement("h1",{style:{color:"#AD5472"}},t.title),k.createElement("h3",null,t.speaker.frontmatter.name),k.createElement("div",{dangerouslySetInnerHTML:{__html:n}}))}function y(e){var t=e.meeting,n=e.host,r=e.talk,o=e.content;return k.createElement(C.Fragment,null,k.createElement(h,{meeting:t,host:n}),k.createElement(g,{talk:r,content:o}))}function b(e){var t=e.sponsor;return k.createElement("p",null,"Pizza and drinks proudly sponsored by ",k.createElement("a",{href:t.site},t.name))}function v(e){var t=e.meeting,n=e.sponsor,r=e.host,o=e.talk,a=e.content;return k.createElement("section",null,k.createElement(y,{meeting:t,host:r,talk:o,content:a}),k.createElement(b,{sponsor:n}))}Object.defineProperty(t,"__esModule",{value:!0});var C=n(1),k=r(C),x=(n(2),n(24)),w=r(x);o.propTypes={},o.defaultProps={styleOverrides:{}};var E="9px 24px 9px 0",O="#fff",T="right",P=24,S={padding:E,color:O,textAlign:T,fontSize:P},M=w.div(Object.assign({},S,{background:"#56626B"})),A=w.div(Object.assign({},S,{background:"#AD5472"})),j=w.div(Object.assign({},S,{background:"#6C9380"}));s.propTypes={};var D=w.div(Object.assign({},S,{background:"#F07C6C"}));l.propTypes={},c.propTypes={};var F={padding:"0.5em"};u.propTypes={},u.defaultProps={linkStyles:{}};var L={backgroundColor:"#333",color:"#f0da4f",padding:"1em",textAlign:"center"},R="Quicksand, sans-serif",z=24,N={fontFamily:R,fontSize:z};m.propTypes={},h.propTypes={},g.propTypes={},y.propTypes={},b.propTypes={},v.propTypes={},t.Layout=m,t.Meeting=y,t.CurrentMeeting=v},24:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.noWarn,o=void 0!==r&&r,a=n.createElement,i=void 0===a||a,s=function(t){function n(){var e,r,a;W(this,n);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return e=r=K(this,t.call.apply(t,[this].concat(s))),r.warned=o,r.state={theme:{}},r.setTheme=function(e){return r.setState({theme:e})},a=e,K(r,a)}return H(n,t),n.prototype.componentWillMount=function(){!this.context[N];var e=this.props.theme;this.context[N]?this.setTheme(e?e:this.context[N].getState()):this.setTheme(e||{})},n.prototype.componentWillReceiveProps=function(e){this.props.theme!==e.theme&&this.setTheme(e.theme)},n.prototype.componentDidMount=function(){this.context[N]&&!this.props.theme&&(this.subscriptionId=this.context[N].subscribe(this.setTheme))},n.prototype.componentWillUnmount=function(){this.subscriptionId&&this.context[N].unsubscribe(this.subscriptionId)},n.prototype.render=function(){return i?D.createElement(e,B({},this.props,this.state)):e.call(this,B({},this.props,this.state),this.context)},n}(D.Component),l=(t={},t[N]=U.object,t),c=null;return Object.defineProperty(s,"contextTypes",{enumerable:!0,configurable:!0,set:function(e){c=e},get:function(){return c?B({},l,c):l}}),s}function a(e){var t=Y.call(e);return"[object Function]"===t||"function"==typeof e&&"[object RegExp]"!==t||"undefined"!=typeof window&&(e===window.setTimeout||e===window.alert||e===window.confirm||e===window.prompt)}function i(e){return J(e)===!0&&"[object Object]"===Object.prototype.toString.call(e)}function s(e){function t(){return s}function n(e){s=e;for(var t=Object.keys(a),n=0,r=t.length;n<r;n++)a[t[n]]&&a[t[n]](e)}function r(e){if("function"!=typeof e)throw new Error("listener must be a function.");var t=i;return a[t]=e,i+=1,t}function o(e){a[e]=void 0}var a={},i=1,s=e;return{getState:t,setState:n,subscribe:r,unsubscribe:o}}function l(e){var t=[],n=[];return e.toString().split(" ").forEach(function(e){if(void 0===F.styleSheet.registered[e.substring(4)])t.push(e);else{var r=c(e);n.push(r)}}),{glamorlessClassName:t,glamorStyles:n}}function c(e){var t;return t={},t["data-"+e]="",t}function u(e){var t=e.styles,n=e.props,r=e.cssOverrides,o=e.cssProp,a=e.context,i=e.displayName,s=p([].concat(t,[n.className,r,o]),n,a),l=s.mappedArgs,c=s.nonGlamorClassNames,u=!1,d=u?{label:i}:null,f=F.css.apply(void 0,[d].concat(l)).toString(),m=c.join(" ").trim();return(f+" "+m).trim()}function p(e,t,n){for(var r=void 0,o=[],a=[],i=0;i<e.length;i++){for(r=e[i];"function"==typeof r;)r=r(t,n);if("string"==typeof r){var s=l(r),c=s.glamorStyles,u=s.glamorlessClassName;o.push.apply(o,c),a.push.apply(a,u)}else if(Array.isArray(r)){var d=p(r,t,n);o.push.apply(o,d.mappedArgs),a.push.apply(a,d.nonGlamorClassNames)}else o.push(r)}return{mappedArgs:o,nonGlamorClassNames:a}}function d(e){function t(r){function a(e){return t(r,B({},s,e))}function i(){function i(e,t,n){if(!p)return!0;var r=!0;return n&&(p(n.props,e,n.context,t)||(r=!1)),r}for(var s=arguments.length,d=Array(s),h=0;h<s;h++)d[h]=arguments[h];var b=o(function(t,n){t=f(b.propsToApply,{},t,n);var r=i(t,n,this.previous);p&&(this.previous={props:t,context:n});var o=e(t,b),a=o.toForward,s=o.cssOverrides,l=o.cssProp;return this.className=r?u({styles:b.styles,props:t,cssOverrides:s,cssProp:l,context:n,displayName:b.displayName}):this.className,D.createElement(b.comp,B({ref:"innerRef"in a?void 0:t.innerRef},a,{className:this.className}))},{noWarn:!0,createElement:!1});return Object.assign(b,n({comp:r,styles:d,rootEl:l,filterProps:m,forwardProps:y,displayName:c,propsToApply:C}),{isGlamorousComponent:!0,propsAreCssOverrides:v,withComponent:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=b.forwardProps,o=b.filterProps,a=V(b,["forwardProps","filterProps"]);return t(B({},a,{comp:e,rootEl:g(e)}),B({forwardProps:r,filterProps:o},n))()},withProps:function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t(b,{withProps:n})()},withConfig:a}),b}var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=s.rootEl,c=s.displayName,p=s.shouldClassNameUpdate,d=s.filterProps,m=void 0===d?[]:d,h=s.forwardProps,y=void 0===h?[]:h,b=s.propsAreCssOverrides,v=void 0===b?r.propsAreCssOverrides:b,C=s.withProps;return Object.assign(i,{withConfig:a}),i}function n(e){var t=e.comp,n=e.styles,r=e.rootEl,o=e.filterProps,a=e.forwardProps,i=e.displayName,s=e.propsToApply,l=t.comp?t.comp:t,c=t.propsToApply?[].concat(t.propsToApply,m(s)):m(s);return{styles:h(t.styles,n),comp:l,rootEl:r||g(t),forwardProps:h(t.forwardProps,a),filterProps:h(t.filterProps,o),displayName:i||"glamorous("+y(t)+")",propsToApply:c}}return t}function f(e,t,n,r){return e.forEach(function(e){return"function"==typeof e?Object.assign(t,e(Object.assign({},t,n),r)):Array.isArray(e)?Object.assign(t,f(e,t,n,r)):Object.assign(t,e)}),Object.assign(t,n)}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Array.isArray(e)?e:[e]}function h(e,t){return e?e.concat(t):t}function g(e){return e.rootEl?e.rootEl:e.comp||e}function y(e){return"string"==typeof e?e:e.displayName||e.name||"unknown"}function b(e,t){var n=t&&t.cache?t.cache:$,r=t&&t.serializer?t.serializer:T,o=t&&t.strategy?t.strategy:w;return o(e,{cache:n,serializer:r})}function v(e){return null==e||"number"==typeof e||"boolean"==typeof e}function C(e,t,n,r){var o=v(r)?r:n(r),a=t.get(o);return"undefined"==typeof a&&(a=e.call(this,r),t.set(o,a)),a}function k(e,t,n){var r=Array.prototype.slice.call(arguments,3),o=n(r),a=t.get(o);return"undefined"==typeof a&&(a=e.apply(this,r),t.set(o,a)),a}function x(e,t,n,r,o){return n.bind(t,e,r,o)}function w(e,t){var n=1===e.length?C:k;return x(e,this,n,t.cache.create(),t.serializer)}function E(e,t){var n=k;return x(e,this,n,t.cache.create(),t.serializer)}function O(e,t){var n=C;return x(e,this,n,t.cache.create(),t.serializer)}function T(){return JSON.stringify(arguments)}function P(){this.cache=Object.create(null)}function S(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function M(e,t){return t={exports:{}},e(t,t.exports),t.exports}function A(e,t){var n=t.propsAreCssOverrides,r=t.rootEl,o=t.filterProps,a=t.forwardProps,i=e.css,s=e.innerRef,l=(e.theme,e.className,e.glam,V(e,["css","innerRef","theme","className","glam"]));void 0!==s&&a.indexOf("innerRef")!==-1&&(l.innerRef=s);var c={toForward:{},cssProp:i,cssOverrides:{}};return n||"string"==typeof r||0!==o.length?Object.keys(l).reduce(function(e,t){return o.indexOf(t)!==-1?e:(a.indexOf(t)!==-1||Pt(r,t)?e.toForward[t]=l[t]:n&&(e.cssOverrides[t]=l[t]),e)},c):(c.toForward=l,c)}function j(e){return e.slice(0,1).toUpperCase()+e.slice(1)}var D=r(n(1)),F=n(23),L=["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","element","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","isindex","kbd","keygen","label","legend","li","link","listing","main","map","mark","marquee","math","menu","menuitem","meta","meter","multicol","nav","nextid","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","pre","progress","q","rb","rbc","rp","rt","rtc","ruby","s","samp","script","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp"],R=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","animation","audio","canvas","circle","clipPath","color-profile","cursor","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","handler","hatch","hatchpath","hkern","iframe","image","line","linearGradient","listener","marker","mask","mesh","meshgradient","meshpatch","meshrow","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","prefetch","radialGradient","rect","script","set","solidColor","solidcolor","stop","style","svg","switch","symbol","tbreak","text","textArea","textPath","title","tref","tspan","unknown","use","video","view","vkern"],z=L.concat(R).filter(function(e,t,n){return n.indexOf(e)===t}),N="__glamorous__",I=!1,U=void 0;if(I){if(D.PropTypes||(U=function(){return U},["array","bool","func","number","object","string","symbol","any","arrayOf","element","instanceOf","node","objectOf","oneOf","oneOfType","shape","exact"].forEach(function(e){U[e]=U})),!D.Children){var q={map:function(e,t,n){return null==e?null:(e=q.toArray(e),n&&n!==e&&(t=t.bind(n)),e.map(t))},forEach:function(e,t,n){return null==e?null:(e=q.toArray(e),n&&n!==e&&(t=t.bind(n)),void e.forEach(t))},count:function(e){return e&&e.length||0},only:function(e){if(e=q.toArray(e),1!==e.length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:function(e){return null==e?[]:[].concat(e)}};D.Children=q}}else if(parseFloat(D.version.slice(0,4))>=15.5)try{U=n(2)}catch(e){}U=U||D.PropTypes;var _,G,W=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},V=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},X=a,Y=Object.prototype.toString,J=function(e){return null!=e&&"object"==typeof e&&Array.isArray(e)===!1},Z=function(e){var t,n;return i(e)!==!1&&(t=e.constructor,"function"==typeof t&&(n=t.prototype,i(n)!==!1&&n.hasOwnProperty("isPrototypeOf")!==!1))},Q=function(e){function t(){var n,r,o;W(this,t);for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return n=r=K(this,e.call.apply(e,[this].concat(i))),r.setOuterTheme=function(e){r.outerTheme=e,void 0!==r.broadcast&&r.publishTheme()},o=n,K(r,o)}return H(t,e),t.prototype.getTheme=function(e){var t=e||this.props.theme;if(X(t)){var n=t(this.outerTheme);if(!Z(n))throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");return n}return B({},this.outerTheme,t)},t.prototype.getChildContext=function(){var e;return e={},e[N]=this.broadcast,e},t.prototype.publishTheme=function(e){this.broadcast.setState(this.getTheme(e))},t.prototype.componentDidMount=function(){this.context[N]&&(this.subscriptionId=this.context[N].subscribe(this.setOuterTheme))},t.prototype.componentWillMount=function(){this.context[N]&&this.setOuterTheme(this.context[N].getState()),this.broadcast=s(this.getTheme(this.props.theme))},t.prototype.componentWillReceiveProps=function(e){this.props.theme!==e.theme&&this.publishTheme(e.theme)},t.prototype.componentWillUnmount=function(){this.subscriptionId&&this.context[N].unsubscribe(this.subscriptionId)},t.prototype.render=function(){return this.props.children?D.Children.only(this.props.children):null},t}(D.Component);Q.childContextTypes=(_={},_[N]=U.object.isRequired,_),Q.contextTypes=(G={},G[N]=U.object,G),P.prototype.has=function(e){return e in this.cache},P.prototype.get=function(e){return this.cache[e]},P.prototype.set=function(e,t){this.cache[e]=t};var $={create:function(){return new P}},ee=b,te={variadic:E,monadic:O};ee.strategies=te;var ne=["coords","download","href","name","rel","shape","target","type"],re=["title"],oe=["alt","height","name","width"],ae=["alt","coords","download","href","rel","shape","target","type"],ie=["controls","loop","muted","preload","src"],se=["href","target"],le=["size"],ce=["dir"],ue=["cite"],pe=["disabled","form","name","type","value"],de=["height","width"],fe=["span","width"],me=["span","width"],he=["value"],ge=["cite"],ye=["open"],be=["title"],ve=["open"],Ce=["height","src","type","width"],ke=["disabled","form","name"],xe=["size"],we=["accept","action","method","name","target"],Ee=["name","scrolling","src"],Oe=["cols","rows"],Te=["profile"],Pe=["size","width"],Se=["manifest"],Me=["height","name","sandbox","scrolling","src","width"],Ae=["alt","height","name","sizes","src","width"],je=["accept","alt","autoCapitalize","autoCorrect","autoSave","checked","defaultChecked","defaultValue","disabled","form","height","list","max","min","multiple","name","onChange","pattern","placeholder","required","results","size","src","step","title","type","value","width"],De=["cite"],Fe=["challenge","disabled","form","name"],Le=["form"],Re=["type","value"],ze=["color","href","integrity","media","nonce","rel","scope","sizes","target","title","type"],Ne=["name"],Ie=["content","name"],Ue=["high","low","max","min","optimum","value"],qe=["data","form","height","name","type","width"],_e=["reversed","start","type"],Ge=["disabled","label"],We=["disabled","label","selected","value"],Be=["form","name"],He=["name","type","value"],Ve=["width"],Ke=["max","value"],Xe=["cite"],Ye=["async","defer","integrity","nonce","src","type"],Je=["defaultValue","disabled","form","multiple","name","onChange","required","size","value"],Ze=["name"],Qe=["media","sizes","src","type"],$e=["media","nonce","title","type"],et=["summary","width"],tt=["headers","height","scope","width"],nt=["autoCapitalize","autoCorrect","cols","defaultValue","disabled","form","name","onChange","placeholder","required","rows","value","wrap"],rt=["headers","height","scope","width"],ot=["default","kind","label","src"],at=["type"],it=["controls","height","loop","muted","playsInline","poster","preload","src","width"],st=["accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baseProfile","baselineShift","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","color","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","height","horizAdvX","horizOriginX","ideographic","imageRendering","in","in2","intercept","k","k1","k2","k3","k4","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","points","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","scale","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","vHanging","vIdeographic","vMathematical","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","viewBox","viewTarget","visibility","width","widths","wordSpacing","writingMode","x","x1","x2","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlSpace","xmlns","xmlnsXlink","y","y1","y2","yChannelSelector","z","zoomAndPan"],lt={html:["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],svg:["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"]},ct={a:ne,abbr:re,applet:oe,area:ae,audio:ie,base:se,basefont:le,bdo:ce,blockquote:ue,button:pe,canvas:de,col:fe,colgroup:me,data:he,del:ge,details:ye,dfn:be,dialog:ve,embed:Ce,fieldset:ke,font:xe,form:we,frame:Ee,frameset:Oe,head:Te,hr:Pe,html:Se,iframe:Me,img:Ae,input:je,ins:De,keygen:Fe,label:Le,li:Re,link:ze,map:Ne,meta:Ie,meter:Ue,object:qe,ol:_e,optgroup:Ge,option:We,output:Be,param:He,pre:Ve,progress:Ke,q:Xe,script:Ye,select:Je,slot:Ze,source:Qe,style:$e,table:et,td:tt,textarea:nt,th:rt,track:ot,ul:at,video:it,svg:st,elements:lt,"*":["about","acceptCharset","accessKey","allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","capture","cellPadding","cellSpacing","charSet","classID","className","colSpan","contentEditable","contextMenu","crossOrigin","dangerouslySetInnerHTML","datatype","dateTime","dir","draggable","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hidden","hrefLang","htmlFor","httpEquiv","icon","id","inlist","inputMode","is","itemID","itemProp","itemRef","itemScope","itemType","keyParams","keyType","lang","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","prefix","property","radioGroup","readOnly","resource","role","rowSpan","scoped","seamless","security","spellCheck","srcDoc","srcLang","srcSet","style","suppressContentEditableWarning","tabIndex","title","typeof","unselectable","useMap","vocab","wmode"]},ut=Object.freeze({a:ne,abbr:re,applet:oe,area:ae,audio:ie,base:se,basefont:le,bdo:ce,blockquote:ue,button:pe,canvas:de,col:fe,colgroup:me,data:he,del:ge,details:ye,dfn:be,dialog:ve,embed:Ce,fieldset:ke,font:xe,form:we,frame:Ee,frameset:Oe,head:Te,hr:Pe,html:Se,iframe:Me,img:Ae,input:je,ins:De,keygen:Fe,label:Le,li:Re,link:ze,map:Ne,meta:Ie,meter:Ue,object:qe,ol:_e,optgroup:Ge,option:We,output:Be,param:He,pre:Ve,progress:Ke,q:Xe,script:Ye,select:Je,slot:Ze,source:Qe,style:$e,table:et,td:tt,textarea:nt,th:rt,track:ot,ul:at,video:it,svg:st,elements:lt,default:ct}),pt=ut&&ct||ut,dt=M(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=pt,e.exports=pt}),ft=S(dt),mt=["children","dangerouslySetInnerHTML","key","ref","autoFocus","defaultValue","valueLink","defaultChecked","checkedLink","innerHTML","suppressContentEditableWarning","onFocusIn","onFocusOut","className","onCopy","onCut","onPaste","onCompositionEnd","onCompositionStart","onCompositionUpdate","onKeyDown","onKeyPress","onKeyUp","onFocus","onBlur","onChange","onInput","onInvalid","onSubmit","onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onScroll","onWheel","onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting","onLoad","onAnimationStart","onAnimationEnd","onAnimationIteration","onTransitionEnd","onCopyCapture","onCutCapture","onPasteCapture","onCompositionEndCapture","onCompositionStartCapture","onCompositionUpdateCapture","onKeyDownCapture","onKeyPressCapture","onKeyUpCapture","onFocusCapture","onBlurCapture","onChangeCapture","onInputCapture","onSubmitCapture","onClickCapture","onContextMenuCapture","onDoubleClickCapture","onDragCapture","onDragEndCapture","onDragEnterCapture","onDragExitCapture","onDragLeaveCapture","onDragOverCapture","onDragStartCapture","onDropCapture","onMouseDownCapture","onMouseEnterCapture","onMouseLeaveCapture","onMouseMoveCapture","onMouseOutCapture","onMouseOverCapture","onMouseUpCapture","onSelectCapture","onTouchCancelCapture","onTouchEndCapture","onTouchMoveCapture","onTouchStartCapture","onScrollCapture","onWheelCapture","onAbortCapture","onCanPlayCapture","onCanPlayThroughCapture","onDurationChangeCapture","onEmptiedCapture","onEncryptedCapture","onEndedCapture","onErrorCapture","onLoadedDataCapture","onLoadedMetadataCapture","onLoadStartCapture","onPauseCapture","onPlayCapture","onPlayingCapture","onProgressCapture","onRateChangeCapture","onSeekedCapture","onSeekingCapture","onStalledCapture","onSuspendCapture","onTimeUpdateCapture","onVolumeChangeCapture","onWaitingCapture","onLoadCapture","onAnimationStartCapture","onAnimationEndCapture","onAnimationIterationCapture","onTransitionEndCapture"];I&&mt.push("autocomplete","autofocus","class","for","onDblClick","onSearch","slot","srcset");var ht=ft["*"],gt=ft.elements.svg,yt=ft.elements.html,bt=["color","height","width"],vt=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",Ct=vt+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",kt=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+Ct+"]*$")),xt=function(e){return"svg"===e||yt.indexOf(e)===-1&&gt.indexOf(e)!==-1},wt=function(e,t){var n=void 0;return n=xt(t)?ft.svg:ft[t]||[],ht.indexOf(e)!==-1||n.indexOf(e)!==-1},Et=function(e){return bt.indexOf(e)!==-1},Ot=function(e){return mt.indexOf(e)!==-1},Tt=function(e,t){return"string"!=typeof e||(wt(t,e)||Ot(t)||kt(t.toLowerCase()))&&(!Et(t)||xt(e))},Pt=ee(Tt),St=d(A);Object.assign(St,z.reduce(function(e,t){return e[t]=St(t),e},{})),Object.assign(St,z.reduce(function(e,t){var n=j(t);return e[n]=St[t](),e[n].displayName="glamorous."+n,e[n].propsAreCssOverrides=!0,e},{})),St.default=St;var Mt=Object.freeze({default:St,ThemeProvider:Q,withTheme:o}),At=St;Object.assign(At,Object.keys(Mt).reduce(function(e,t){return"default"!==t&&(e[t]=Mt[t]),e},{})),e.exports=At},106:function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(t){var n=t.data,r=n.allMarkdownRemark.edges[0].node.frontmatter;return e.createElement(s.CurrentMeeting,{sponsor:r.sponsor.frontmatter,meeting:r,host:r.host.frontmatter,talk:r.talk.frontmatter,content:r.talk.html})}t.__esModule=!0,t.query=void 0,t.default=o;var a=n(1),i=(r(a),n(2)),s=n(15);o.propTypes={data:(0,i.shape)()};t.query="** extracted graphql fragment **"}).call(t,n(11))}});
//# sourceMappingURL=component---src-pages-index-js-0c0cc396cc809f7325a7.js.map