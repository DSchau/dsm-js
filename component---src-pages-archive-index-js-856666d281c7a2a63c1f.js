webpackJsonp([47568926626997],{87:function(e,t){"use strict";function r(e,t,u){if("string"!=typeof t){if(c){var d=p(t);d&&d!==c&&r(e,d,u)}var f=o(t);s&&(f=f.concat(s(t)));for(var g=0;g<f.length;++g){var m=f[g];if(!(a[m]||n[m]||u&&u[m])){var y=i(t,m);try{l(e,m,y)}catch(e){}}}return e}return e}var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l=Object.defineProperty,o=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,c=p&&p(Object);e.exports=r},105:function(e,t,r){(function(e){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(t){var r=t.data,a=r.allMarkdownRemark.edges;return e.createElement("ol",null,a.map(function(t){var r=t.node.frontmatter,a=r.meeting,n=r.talk;return e.createElement("li",{key:t.node.fields.slug},e.createElement("h4",null,e.createElement(i.default,{to:t.node.fields.slug},a.date)),e.createElement("h5",null,n.title))}))}t.__esModule=!0,t.meetingsQuery=void 0,t.default=n;var l=r(1),o=(a(l),r(2)),s=r(199),i=a(s);n.propTypes={data:{allMarkdownRemark:(0,o.shape)({edges:(0,o.arrayOf)((0,o.shape)({node:(0,o.shape)({frontmatter:(0,o.shape)({meeting:(0,o.shape)({date:o.string}),talk:(0,o.shape)({title:o.string})})})}))})}};t.meetingsQuery="** extracted graphql fragment **"}).call(t,r(11))}});
//# sourceMappingURL=component---src-pages-archive-index-js-856666d281c7a2a63c1f.js.map