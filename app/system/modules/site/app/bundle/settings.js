!function(t){var e={};function n(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=45)}([function(t,e,n){"use strict";function a(t,e,n,a,i,o,s,r){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),a&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):i&&(c=r?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:l}}n.d(e,"a",function(){return a})},,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var a=n(14),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e.default=i.a},function(t,e){t.exports={section:{label:"Code",icon:"pk-icon-large-code",priority:20},props:["config"]}},function(t,e,n){"use strict";n.r(e);var a=n(16),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e.default=i.a},function(t,e){t.exports={section:{label:"Meta",icon:"pk-icon-large-meta",priority:50},props:["config"]}},function(t,e,n){"use strict";n.r(e);var a=n(18),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e.default=i.a},function(t,e){t.exports={section:{label:"General",icon:"pk-icon-large-settings",priority:10},inject:["$validator"],props:["config"]}},function(t,e,n){"use strict";n.r(e);var a=n(20),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e.default=i.a},function(t,e){t.exports={section:{label:"Maintenance",icon:"pk-icon-large-cone",priority:30},props:["config"]}},,,,,,,function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"uk-margin uk-flex uk-flex-middle uk-flex-between uk-flex-wrap"},[n("div",[n("h2",{staticClass:"uk-margin-remove"},[t._v("\n                "+t._s(t._f("trans")("General"))+"\n            ")])]),t._v(" "),n("div",{staticClass:"uk-margin-small"},[n("button",{staticClass:"uk-button uk-button-primary",attrs:{type:"submit"}},[t._v("\n                "+t._s(t._f("trans")("Save"))+"\n            ")])])]),t._v(" "),n("div",{staticClass:"uk-form-horizontal"},[n("div",{staticClass:"uk-margin"},[n("label",{staticClass:"uk-form-label",attrs:{for:"form-title"}},[t._v(t._s(t._f("trans")("Title")))]),t._v(" "),n("div",{staticClass:"uk-form-controls"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.config.title,expression:"config.title"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"uk-form-width-large uk-input",attrs:{id:"form-title",name:"title",type:"text"},domProps:{value:t.config.title},on:{input:function(e){e.target.composing||t.$set(t.config,"title",e.target.value)}}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.errors.first("title"),expression:"errors.first('title')"}],staticClass:"uk-text-meta uk-text-danger"},[t._v("\n                    "+t._s(t._f("trans")("Site title cannot be blank."))+"\n                ")])])]),t._v(" "),n("div",{staticClass:"uk-margin"},[n("label",{staticClass:"uk-form-label",attrs:{for:"form-logo"}},[t._v(t._s(t._f("trans")("Logo")))]),t._v(" "),n("div",{staticClass:"uk-form-controls"},[n("input-image",{attrs:{source:t.config.view.logo,"input-class":"uk-form-width-large"},on:{"update:source":function(e){return t.$set(t.config.view,"logo",e)}},model:{value:t.config.view.logo,callback:function(e){t.$set(t.config.view,"logo",e)},expression:"config.view.logo"}})],1)]),t._v(" "),n("div",{staticClass:"uk-margin"},[n("label",{staticClass:"uk-form-label",attrs:{for:"form-favicon"}},[t._v(t._s(t._f("trans")("Favicon")))]),t._v(" "),n("div",{staticClass:"uk-form-controls"},[n("input-image",{attrs:{source:t.config.icons.favicon,"input-class":"uk-form-width-large"},on:{"update:source":function(e){return t.$set(t.config.icons,"favicon",e)}},model:{value:t.config.icons.favicon,callback:function(e){t.$set(t.config.icons,"favicon",e)},expression:"config.icons.favicon"}})],1)]),t._v(" "),n("div",{staticClass:"uk-margin"},[n("label",{staticClass:"uk-form-label",attrs:{for:"form-appicon"}},[t._v(t._s(t._f("trans")("Appicon")))]),t._v(" "),n("div",{staticClass:"uk-form-controls"},[n("input-image",{attrs:{source:t.config.icons.appicon,"input-class":"uk-form-width-large"},on:{"update:source":function(e){return t.$set(t.config.icons,"appicon",e)}},model:{value:t.config.icons.appicon,callback:function(e){t.$set(t.config.icons,"appicon",e)},expression:"config.icons.appicon"}})],1)])])])},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},,,,,,,function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"uk-margin uk-flex uk-flex-middle uk-flex-between uk-flex-wrap"},[n("div",[n("h2",{staticClass:"uk-margin-remove"},[t._v("\n                "+t._s(t._f("trans")("Code"))+"\n            ")])]),t._v(" "),n("div",{staticClass:"uk-margin-small"},[n("button",{staticClass:"uk-button uk-button-primary",attrs:{type:"submit"}},[t._v("\n                "+t._s(t._f("trans")("Save"))+"\n            ")])])]),t._v(" "),n("p",[t._v(t._s(t._f("trans")("Insert code in the header and footer of your theme. This is useful for tracking codes and meta tags.")))]),t._v(" "),n("div",{staticClass:"uk-form-stacked"},[n("div",{staticClass:"uk-margin"},[n("label",{staticClass:"uk-form-label",attrs:{for:"form-codeheader"}},[t._v(t._s(t._f("trans")("Header")))]),t._v(" "),n("div",{staticClass:"uk-form-controls"},[n("v-editor",{attrs:{type:"code",value:t.config.code.header},on:{"update:value":function(e){return t.$set(t.config.code,"header",e)}},model:{value:t.config.code.header,callback:function(e){t.$set(t.config.code,"header",e)},expression:"config.code.header"}})],1)]),t._v(" "),n("div",{staticClass:"uk-margin"},[n("label",{staticClass:"uk-form-label",attrs:{for:"form-codeheader"}},[t._v(t._s(t._f("trans")("Footer")))]),t._v(" "),n("div",{staticClass:"uk-form-controls"},[n("v-editor",{attrs:{type:"code",value:t.config.code.footer},on:{"update:value":function(e){return t.$set(t.config.code,"footer",e)}},model:{value:t.config.code.footer,callback:function(e){t.$set(t.config.code,"footer",e)},expression:"config.code.footer"}})],1)])])])},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"uk-margin uk-flex uk-flex-middle uk-flex-between uk-flex-wrap"},[n("div",[n("h2",{staticClass:"uk-margin-remove"},[t._v("\n                "+t._s(t._f("trans")("Maintenance"))+"\n            ")])]),t._v(" "),n("div",{staticClass:"uk-margin-small"},[n("button",{staticClass:"uk-button uk-button-primary",attrs:{type:"submit"}},[t._v("\n                "+t._s(t._f("trans")("Save"))+"\n            ")])])]),t._v(" "),n("div",{staticClass:" uk-form-horizontal"},[n("div",{staticClass:"uk-margin"},[n("span",{staticClass:"uk-form-label"},[t._v(t._s(t._f("trans")("Offline")))]),t._v(" "),n("div",{staticClass:"uk-form-controls uk-form-controls-text"},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.config.maintenance.enabled,expression:"config.maintenance.enabled"}],staticClass:"uk-checkbox",attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.config.maintenance.enabled)?t._i(t.config.maintenance.enabled,"1")>-1:t.config.maintenance.enabled},on:{change:function(e){var n=t.config.maintenance.enabled,a=e.target,i=!!a.checked;if(Array.isArray(n)){var o=t._i(n,"1");a.checked?o<0&&t.$set(t.config.maintenance,"enabled",n.concat(["1"])):o>-1&&t.$set(t.config.maintenance,"enabled",n.slice(0,o).concat(n.slice(o+1)))}else t.$set(t.config.maintenance,"enabled",i)}}}),t._v(" "+t._s(t._f("trans")("Put the site offline and show the offline message.")))])])]),t._v(" "),n("div",{staticClass:"uk-margin"},[n("label",{staticClass:"uk-form-label",attrs:{for:"form-offlinemessage"}},[t._v(t._s(t._f("trans")("Message")))]),t._v(" "),n("div",{staticClass:"uk-form-controls"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.config.maintenance.msg,expression:"config.maintenance.msg"}],staticClass:"uk-form-width-large uk-textarea",attrs:{id:"form-offlinemessage",placeholder:t._f("trans")("We'll be back soon."),rows:"5"},domProps:{value:t.config.maintenance.msg},on:{input:function(e){e.target.composing||t.$set(t.config.maintenance,"msg",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"uk-margin"},[n("label",{staticClass:"uk-form-label",attrs:{for:"form-logo"}},[t._v(t._s(t._f("trans")("Logo")))]),t._v(" "),n("div",{staticClass:"uk-form-controls"},[n("input-image",{attrs:{source:t.config.maintenance.logo,"input-class":"uk-form-width-large"},on:{"update:source":function(e){return t.$set(t.config.maintenance,"logo",e)}},model:{value:t.config.maintenance.logo,callback:function(e){t.$set(t.config.maintenance,"logo",e)},expression:"config.maintenance.logo"}})],1)])])])},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"uk-margin uk-flex uk-flex-middle uk-flex-between uk-flex-wrap"},[n("div",[n("h2",{staticClass:"uk-margin-remove"},[t._v("\n                "+t._s(t._f("trans")("Meta"))+"\n            ")])]),t._v(" "),n("div",{staticClass:"uk-margin-small"},[n("button",{staticClass:"uk-button uk-button-primary",attrs:{type:"submit"}},[t._v("\n                "+t._s(t._f("trans")("Save"))+"\n            ")])])]),t._v(" "),n("div",{staticClass:"uk-form-horizontal"},[n("div",{staticClass:"uk-margin"},[n("label",{staticClass:"uk-form-label",attrs:{for:"form-meta-description"}},[t._v(t._s(t._f("trans")("Description")))]),t._v(" "),n("div",{staticClass:"uk-form-controls"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.config.meta.description,expression:"config.meta.description"}],staticClass:"uk-form-width-large uk-textarea",attrs:{id:"form-meta-description",rows:"5"},domProps:{value:t.config.meta.description},on:{input:function(e){e.target.composing||t.$set(t.config.meta,"description",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"uk-margin"},[n("label",{staticClass:"uk-form-label",attrs:{for:"form-meta-image"}},[t._v(t._s(t._f("trans")("Image")))]),t._v(" "),n("div",{staticClass:"uk-form-controls"},[n("input-image",{attrs:{source:t.config.meta.image,"input-class":"uk-form-width-large"},on:{"update:source":function(e){return t.$set(t.config.meta,"image",e)}},model:{value:t.config.meta.image,callback:function(e){t.$set(t.config.meta,"image",e)},expression:"config.meta.image"}})],1)]),t._v(" "),n("div",{staticClass:"uk-margin"},[n("label",{staticClass:"uk-form-label",attrs:{for:"form-meta-facebook"}},[t._v("Facebook")]),t._v(" "),n("div",{staticClass:"uk-form-controls"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.config.meta.facebook,expression:"config.meta.facebook"}],staticClass:"uk-form-width-large uk-input",attrs:{id:"form-meta-facebook",type:"text",placeholder:"app_id"},domProps:{value:t.config.meta.facebook},on:{input:function(e){e.target.composing||t.$set(t.config.meta,"facebook",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"uk-margin"},[n("label",{staticClass:"uk-form-label",attrs:{for:"form-meta-twitter"}},[t._v("Twitter")]),t._v(" "),n("div",{staticClass:"uk-form-controls"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.config.meta.twitter,expression:"config.meta.twitter"}],staticClass:"uk-form-width-large uk-input",attrs:{id:"form-meta-twitter",type:"text",placeholder:"@username"},domProps:{value:t.config.meta.twitter},on:{input:function(e){e.target.composing||t.$set(t.config.meta,"twitter",e.target.value)}}})])])])])},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},,,,,,,,,function(t,e,n){window.Site={name:"site-settings",el:"#settings",mixins:[Vue2Filters.mixin],data:()=>_.merge({form:{}},window.$data),mounted(){UIkit.switcher(this.$refs.tab,{connect:".settings-tab"})},computed:{sections(){const t=[],e=window.location.hash.replace("#","");return _.forIn(this.$options.components,(n,a)=>{const{section:i}=n;n.section&&(i.name=a,i.active=a==e,t.push(i))}),t}},methods:{submit(){const t=this;this.$validator.validateAll().then(e=>{e&&t.save()})},save(){this.$trigger("save:settings",this.config),this.$http.post("admin/system/settings/config",{name:"system/site",config:this.config}).then(function(){this.$notify("Settings saved.")},function(t){this.$notify(t.data,"danger")})}},components:{"site-code":n(46).default,"site-meta":n(47).default,"site-general":n(48).default,"site-maintenance":n(49).default}},Vue.ready(window.Site)},function(t,e,n){"use strict";n.r(e);var a=n(34),i=n(13);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var s=n(0),r=Object(s.a)(i.default,a.a,a.b,!1,null,null,null);e.default=r.exports},function(t,e,n){"use strict";n.r(e);var a=n(36),i=n(15);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var s=n(0),r=Object(s.a)(i.default,a.a,a.b,!1,null,null,null);e.default=r.exports},function(t,e,n){"use strict";n.r(e);var a=n(27),i=n(17);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var s=n(0),r=Object(s.a)(i.default,a.a,a.b,!1,null,null,null);e.default=r.exports},function(t,e,n){"use strict";n.r(e);var a=n(35),i=n(19);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var s=n(0),r=Object(s.a)(i.default,a.a,a.b,!1,null,null,null);e.default=r.exports}]);