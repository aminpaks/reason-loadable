require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({29:[function(require,module,exports) {
"use strict";var e=require("react"),r=require("reason-react/src/ReasonReact.js"),t=require("../Core/Shell.bs.js"),n=r.statelessComponent("Faq");function c(){var r=n.slice();return r[9]=function(){return e.createElement("div",void 0,e.createElement("a",{onClick:function(e){return t.redirect("/",e)}},"Home"),e.createElement("a",{onClick:function(e){return t.redirect("/faq",e)}},"FAQ"),e.createElement("a",{onClick:function(e){return t.redirect("/test/deep",e)}},"Deep link"),e.createElement("h1",void 0,"FAQ"))},r}exports.component=n,exports.make=c;
},{"react":24,"reason-react/src/ReasonReact.js":19,"../Core/Shell.bs.js":7}],17:[function(require,module,exports) {
"use strict";var e=require("./Faq.bs.js"),r=[e.component,e.make];exports.importable=r;
},{"./Faq.bs.js":29}]},{},[17])