!function(t){var e={};function s(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=24)}({0:function(t,e,s){"use strict";function a(t,e,s,a,i,r,n,o){var l,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=s,d._compiled=!0),a&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),n?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},d._ssrRegister=l):i&&(l=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(d.functional){d._injectStyles=l;var u=d.render;d.render=function(t,e){return l.call(e),u(t,e)}}else{var c=d.beforeCreate;d.beforeCreate=c?[].concat(c,l):[l]}return{exports:t,options:d}}s.d(e,"a",function(){return a})},11:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.editing?s("div",{staticClass:"uk-card-header pk-panel-teaser"},[s("form",{staticClass:"uk-form-stacked"},[s("div",{staticClass:"uk-margin"},[s("span",{staticClass:"uk-form-label"},[t._v(t._s(t._f("trans")("User Type")))]),t._v(" "),s("div",{staticClass:"uk-form-controls uk-form-controls-text"},[s("p",{staticClass:"uk-margin-small"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.widget.show,expression:"widget.show"}],staticClass:"uk-radio",attrs:{type:"radio",value:"login"},domProps:{checked:t._q(t.widget.show,"login")},on:{change:function(e){return t.$set(t.widget,"show","login")}}}),t._v(" "+t._s(t._f("trans")("Logged in")))])]),t._v(" "),s("p",{staticClass:"uk-margin-small"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.widget.show,expression:"widget.show"}],staticClass:"uk-radio",attrs:{type:"radio",value:"registered"},domProps:{checked:t._q(t.widget.show,"registered")},on:{change:function(e){return t.$set(t.widget,"show","registered")}}}),t._v(" "+t._s(t._f("trans")("Last registered")))])])])]),t._v(" "),s("div",{staticClass:"uk-margin"},[s("span",{staticClass:"uk-form-label"},[t._v(t._s(t._f("trans")("Display")))]),t._v(" "),s("div",{staticClass:"uk-form-controls uk-form-controls-text"},[s("p",{staticClass:"uk-margin-small"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.widget.display,expression:"widget.display"}],staticClass:"uk-radio",attrs:{type:"radio",value:"thumbnail"},domProps:{checked:t._q(t.widget.display,"thumbnail")},on:{change:function(e){return t.$set(t.widget,"display","thumbnail")}}}),t._v(" "+t._s(t._f("trans")("Thumbnail")))])]),t._v(" "),s("p",{staticClass:"uk-margin-small"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.widget.display,expression:"widget.display"}],staticClass:"uk-radio",attrs:{type:"radio",value:"list"},domProps:{checked:t._q(t.widget.display,"list")},on:{change:function(e){return t.$set(t.widget,"display","list")}}}),t._v(" "+t._s(t._f("trans")("List")))])])])]),t._v(" "),s("div",{staticClass:"uk-margin"},[s("span",{staticClass:"uk-form-label"},[t._v(t._s(t._f("trans")("Total Users")))]),t._v(" "),s("div",{staticClass:"uk-form-controls uk-form-controls-text"},[s("p",{staticClass:"uk-margin-small"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.widget.total,expression:"widget.total"}],staticClass:"uk-radio",attrs:{type:"radio",value:"1"},domProps:{checked:t._q(t.widget.total,"1")},on:{change:function(e){return t.$set(t.widget,"total","1")}}}),t._v(" "+t._s(t._f("trans")("Show")))])]),t._v(" "),s("p",{staticClass:"uk-margin-small"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.widget.total,expression:"widget.total"}],staticClass:"uk-radio",attrs:{type:"radio",value:""},domProps:{checked:t._q(t.widget.total,"")},on:{change:function(e){return t.$set(t.widget,"total","")}}}),t._v(" "+t._s(t._f("trans")("Hide")))])])])]),t._v(" "),s("div",{staticClass:"uk-margin"},[s("label",{staticClass:"-label",attrs:{for:"form-user-number"}},[t._v(t._s(t._f("trans")("Number of Users")))]),t._v(" "),s("div",{staticClass:"uk-form-controls"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.widget.count,expression:"widget.count"}],staticClass:"uk-select uk-width-1-1",attrs:{id:"form-user-number",number:""},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.widget,"count",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"6"}},[t._v("\n                            6\n                        ")]),t._v(" "),s("option",{attrs:{value:"12"}},[t._v("\n                            12\n                        ")]),t._v(" "),s("option",{attrs:{value:"18"}},[t._v("\n                            18\n                        ")]),t._v(" "),s("option",{attrs:{value:"24"}},[t._v("\n                            24\n                        ")])])])])])]):t._e(),t._v(" "),s("div",{staticClass:"uk-card-body"},[t.widget.total?s("div",{staticClass:"pk-text-large"},[t._v("\n            "+t._s(t.userscount)+"\n        ")]):t._e(),t._v(" "),"registered"==t.widget.show&&t.widget.total?s("h3",{staticClass:"uk-card-title uk-margin-small-top"},[t._v("\n            "+t._s(t._f("transChoice")("{0} Registered Users|{1} Registered User|]1,Inf[ Registered Users",t.userscount))+"\n        ")]):t._e(),t._v(" "),"registered"!=t.widget.show&&t.widget.total?s("h3",{staticClass:"uk-card-title uk-margin-small-top"},[t._v("\n            "+t._s(t._f("transChoice")("{0} Logged in Users|{1} Logged in User|]1,Inf[ Logged in Users",t.userscount))+"\n        ")]):t._e(),t._v(" "),"registered"!=t.widget.show||t.widget.total?t._e():s("h3",{staticClass:"uk-card-title"},[t._v("\n            "+t._s(t._f("trans")("Latest registered Users"))+"\n        ")]),t._v(" "),"registered"==t.widget.show||t.widget.total?t._e():s("h3",{staticClass:"uk-card-title"},[t._v("\n            "+t._s(t._f("trans")("Latest logged in Users"))+"\n        ")]),t._v(" "),t.users.length&&"thumbnail"==t.widget.display?s("ul",{staticClass:"uk-grid uk-grid-small uk-child-width-1-4 uk-child-width-1-6@s uk-child-width-1-4@m uk-child-width-1-6@xl",attrs:{"data-user":""}},t._l(t.users,function(e){return s("li",{key:e.id},[s("a",{attrs:{href:t.$url.route("admin/user/edit",{id:e.id}),title:e.username}},[s("img",{directives:[{name:"gravatar",rawName:"v-gravatar",value:e.email,expression:"user.email"}],staticClass:"uk-border-rounded",attrs:{width:"100",height:"100",alt:e.name}})])])}),0):t._e(),t._v(" "),t.users.length&&"list"==t.widget.display?s("ul",{staticClass:"uk-list uk-list-divider",attrs:{"data-user":""}},t._l(t.users,function(e){return s("li",{key:e.id,staticClass:"uk-flex uk-flex-middle"},[s("img",{directives:[{name:"gravatar",rawName:"v-gravatar",value:e.email,expression:"user.email"}],staticClass:"uk-border-circle uk-margin-right",attrs:{width:"40",height:"40",alt:e.name}}),t._v(" "),s("div",{staticClass:"uk-flex-1 uk-text-truncate"},[s("a",{attrs:{href:t.$url.route("admin/user/edit",{id:e.id}),title:e.name}},[t._v(t._s(e.username))]),t._v(" "),s("br"),s("a",{staticClass:"uk-link-muted",attrs:{href:"mailto:"+e.email}},[t._v(t._s(e.email))])])])}),0):t._e()])])},i=[];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return i})},24:function(t,e,s){"use strict";s.r(e);var a=s(11),i=s(5);for(var r in i)"default"!==r&&function(t){s.d(e,t,function(){return i[t]})}(r);var n=s(0),o=Object(n.a)(i.default,a.a,a.b,!1,null,null,null);e.default=o.exports},5:function(t,e,s){"use strict";s.r(e);var a=s(6),i=s.n(a);for(var r in a)"default"!==r&&function(t){s.d(e,t,function(){return a[t]})}(r);e.default=i.a},6:function(t,e){t.exports={type:{id:"user",label:"User",description(){},defaults:{show:"login",display:"thumbnail",total:!0,count:12}},replace:!1,props:["widget","editing"],data:()=>({users:[],userscount:null}),watch:{"widget.show":{handler:"load",immediate:!0},"widget.count":"load"},methods:{load(){let t;t="registered"===this.widget.show?{params:{filter:{order:"registered DESC"}}}:{params:{filter:{access:300,order:"login DESC"}}},this.$http.get("api/user/count",t).then(function(t){this.$set(this,"userscount",t.data.count)}),t.params.limit=this.widget.count,this.$http.get("api/user{/id}",t).then(function(t){this.$set(this,"users",t.data.users.slice(0,this.widget.count))})}}},window.Dashboard.components.user=t.exports}});