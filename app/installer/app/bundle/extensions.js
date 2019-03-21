!function(t){var e={};function s(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=29)}([function(t,e,s){"use strict";function a(t,e,s,a,n,i,r,o){var u,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=s,l._compiled=!0),a&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),r?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=u):n&&(u=o?function(){n.call(this,this.$root.$options.shadowRoot)}:n),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(t,e){return u.call(e),c(t,e)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,u):[u]}return{exports:t,options:l}}s.d(e,"a",function(){return a})},function(t,e,s){"use strict";s.r(e);var a=s(2),n=s.n(a);for(var i in a)"default"!==i&&function(t){s.d(e,t,function(){return a[t]})}(i);e.default=n.a},function(t,e,s){t.exports={mixins:[s(7)],methods:{install(t,e,s,a){return this.$set(this,"pkg",t),this.cb=s,self=this,this.$http.get("admin/system/package/install",{params:{package:t,packagist:Boolean(a)},progress(){self.init(this)}}).then(function(){if("success"===this.status&&e){const s=_.findIndex(e,{name:t.name});-1!==s?e.splice(s,1,t):e.push(t)}},function(t){this.$notify(t.data,"danger"),this.close()})},enable(){this.$parent.enable(this.pkg),this.close()}}}},function(t,e,s){"use strict";s.r(e);var a=s(4),n=s.n(a);for(var i in a)"default"!==i&&function(t){s.d(e,t,function(){return a[t]})}(i);e.default=n.a},function(t,e,s){t.exports={mixins:[s(7)],methods:{uninstall(t,e){return this.$set(this,"pkg",t),self=this,this.$http.get("admin/system/package/uninstall",{params:{name:t.name},progress(){self.init(this)}}).then(function(){"success"===this.status&&e&&e.splice(e.indexOf(t),1)},function(t){this.$notify(t.data,"danger"),this.close()})}}}},function(t,e,s){"use strict";s.r(e);var a=s(6),n=s.n(a);for(var i in a)"default"!==i&&function(t){s.d(e,t,function(){return a[t]})}(i);e.default=n.a},function(t,e,s){t.exports={mixins:[s(7)],methods:{update(t,e,s,a){return this.$set(this,"pkg",t),this.$set(this,"updatePkg",e[t.name]),this.cb=s,self=this,this.$http.get("admin/system/package/install",{params:{package:e[t.name],packagist:Boolean(a)},progress(){self.init(this)}}).then(function(){"loading"===this.status&&(this.status="error"),"success"===this.status&&Vue.delete(e,t.name),t.enabled&&this.$parent.enable(t).then(null,function(){this.status="error"})},function(t){this.$notify(t.data,"danger"),this.close()})}}}},function(t,e){t.exports={data:()=>({pkg:{},updatePkg:{},output:"",status:"loading",options:{bgClose:!1,escClose:!1}}),created(){this.$mount()},methods:{init(t){return this.open(),this.setOutput(t.responseText)},setOutput(t){const e=t.split("\n"),s=e[e.length-1].match(/^status=(success|error)$/);s?(this.status=s[1],delete e[e.length-1],this.output=e.join("\n")):this.output=t},open(){this.$refs.output.open(),UIkit.util.on(this.$refs.output.modal.$el,"hide",this.onClose)},close(){this.$refs.output.close()},onClose(){this.cb&&this.cb(this),this.$destroy()}},watch:{status(){"loading"!==this.status&&(this.$refs.output.modal.$options.props.bgclose=!0,this.$refs.output.modal.$options.props.keyboard=!0)}}}},function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-modal",{ref:"output",attrs:{options:t.options}},[s("div",{staticClass:"uk-modal-header uk-flex uk-flex-middle"},[s("h2",[t._v(t._s(t._f("trans")("Updating %title% to %version%",{title:t.pkg.title,version:t.updatePkg.version})))])]),t._v(" "),s("div",{staticClass:"uk-modal-body"},[s("pre",{staticClass:"pk-pre uk-text-break",domProps:{innerHTML:t._s(t.output)}}),t._v(" "),s("v-loader",{directives:[{name:"show",rawName:"v-show",value:"loading"==t.status,expression:"status == 'loading'"}]}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"success"==t.status,expression:"status == 'success'"}],staticClass:"uk-alert uk-alert-success"},[t._v("\n            "+t._s(t._f("trans")("Successfully updated."))+"\n        ")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"error"==t.status,expression:"status == 'error'"}],staticClass:"uk-alert uk-alert-danger"},[t._v("\n            "+t._s(t._f("trans")("Error"))+"\n        ")])],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"loading"!=t.status,expression:"status != 'loading'"}],staticClass:"uk-modal-footer uk-text-right"},[s("a",{staticClass:"uk-button uk-button-secondary",on:{click:function(e){return e.preventDefault(),t.close(e)}}},[t._v(t._s(t._f("trans")("Close")))])])])},n=[];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return n})},function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-modal",{ref:"output",attrs:{options:t.options}},[s("div",{staticClass:"uk-modal-header uk-flex uk-flex-middle"},[s("h2",[t._v(t._s(t._f("trans")("Removing %title% %version%",{title:t.pkg.title,version:t.pkg.version})))])]),t._v(" "),s("div",{staticClass:"uk-modal-body"},[s("pre",{staticClass:"pk-pre uk-text-break",domProps:{innerHTML:t._s(t.output)}}),t._v(" "),s("v-loader",{directives:[{name:"show",rawName:"v-show",value:"loading"==t.status,expression:"status == 'loading'"}]}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"success"==t.status,expression:"status == 'success'"}],staticClass:"uk-alert uk-alert-success"},[t._v("\n            "+t._s(t._f("trans")("Successfully removed."))+"\n        ")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"error"==t.status,expression:"status == 'error'"}],staticClass:"uk-alert uk-alert-danger"},[t._v("\n            "+t._s(t._f("trans")("Error"))+"\n        ")])],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"loading"!=t.status,expression:"status != 'loading'"}],staticClass:"uk-modal-footer uk-text-right"},[s("a",{staticClass:"uk-button uk-button-secondary",on:{click:function(e){return e.preventDefault(),t.close(e)}}},[t._v(t._s(t._f("trans")("Close")))])])])},n=[];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return n})},function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-modal",{ref:"output",attrs:{options:t.options}},[s("div",{staticClass:"uk-modal-header uk-flex uk-flex-middle"},[s("h2",[t._v(t._s(t._f("trans")("Installing %title% %version%",{title:t.pkg.title,version:t.pkg.version})))])]),t._v(" "),s("div",{staticClass:"uk-modal-body"},[s("pre",{staticClass:"pk-pre uk-text-break",domProps:{innerHTML:t._s(t.output)}}),t._v(" "),s("v-loader",{directives:[{name:"show",rawName:"v-show",value:"loading"==t.status,expression:"status == 'loading'"}]}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"success"==t.status,expression:"status == 'success'"}],staticClass:"uk-alert uk-alert-success"},[t._v("\n            "+t._s(t._f("trans")("Successfully installed."))+"\n        ")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"error"==t.status,expression:"status == 'error'"}],staticClass:"uk-alert uk-alert-danger"},[t._v("\n            "+t._s(t._f("trans")("Error"))+"\n        ")])],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"loading"!=t.status,expression:"status != 'loading'"}],staticClass:"uk-modal-footer uk-text-right"},[s("a",{staticClass:"uk-button uk-button-secondary",on:{click:function(e){return e.preventDefault(),t.close(e)}}},[t._v(t._s(t._f("trans")("Close")))]),t._v(" "),s("a",{directives:[{name:"show",rawName:"v-show",value:"success"==t.status,expression:"status == 'success'"}],staticClass:"uk-button uk-button-primary",on:{click:function(e){return e.preventDefault(),t.enable(e)}}},[t._v(t._s(t._f("trans")("Enable")))])])])},n=[];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return n})},function(t,e,s){"use strict";s.r(e);var a=s(12),n=s.n(a);for(var i in a)"default"!==i&&function(t){s.d(e,t,function(){return a[t]})}(i);e.default=n.a},function(t,e,s){t.exports={mixins:[s(15)],props:{api:{type:String,default:""},packages:Array,type:String},data:()=>({package:{},upload:null,progress:""}),mounted(){const{type:t}=this,e={url:this.$url.route("admin/system/package/upload"),dataType:"json",name:"file",beforeAll(e){console.log(e),_.merge(e.params,{_csrf:$pagekit.csrf,type:t})},loadStart:this.onStart,progress:this.onProgress,completeAll:this.onComplete};UIkit.upload(this.$refs.input,e),this.modal=UIkit.modal(this.$refs.modal)},methods:{onStart(){this.progress="1%"},onProgress(t){this.progress=`${Math.ceil(t.loaded/t.total*100)}%`},onComplete(t){try{t=JSON.parse(t.responseText)}catch(s){try{t=JSON.parse(t.responseText.substring(t.responseText.lastIndexOf("{"),t.responseText.lastIndexOf("}")+1));var{message:e}=t}catch(t){var e="Unable load package."}return this.progress="",void this.$notify(e,"danger")}const s=this;this.progress="100%",setTimeout(()=>{s.progress=""},250),t.package?(this.$set(this,"upload",t),this.$set(this,"package",t.package),this.modal.show()):this.$notify(t,"danger")},doInstall(){this.modal.hide(),this.install(this.upload.package,this.packages,t=>{"success"===t.status&&setTimeout(()=>{location.reload()},300)},!0)}},components:{"package-details":s(21).default}}},function(t,e,s){"use strict";s.r(e);var a=s(14),n=s.n(a);for(var i in a)"default"!==i&&function(t){s.d(e,t,function(){return a[t]})}(i);e.default=n.a},function(t,e,s){const a=s(22);t.exports={props:{api:{type:String,default:""},package:{type:Object,default:()=>({})}},data:()=>({messages:{}}),filters:{icon(t){const e=t.extra||{};return e.icon?e.icon.match(/^(https?:)?\//)?e.icon:`${t.url}/${e.icon}`:this.$url("app/system/assets/images/placeholder-icon.svg")},image(t){const e=t.extra||{};return e.image?e.image.match(/^(https?:)?\//)?e.image:`${t.url}/${e.image}`:this.$url("app/system/assets/images/placeholder-image.svg")}},watch:{package:{handler(){this.package.name&&(_.isArray(this.package.authors)&&(this.package.author=this.package.authors[0]),this.$set(this,"messages",{}),this.queryPackage(this.package,function(t){const{data:e}=t;let{version:s}=this.package;const n=e.versions[s];n&&this.package.shasum&&this.$set(this.messages,"checksum",n.dist.shasum!=this.package.shasum),_.each(e.versions,t=>{a.compare(t.version,s,">")&&(s=t.version)}),this.$set(this.messages,"update",s!=this.package.version)}))},immediate:!0}},methods:{queryPackage(t,e){return this.$http.get(`${this.api}/api/package/{+name}`,{params:{name:_.isObject(t)?t.name:t}}).then(e,this.error)}}}},function(t,e,s){const a=Vue.extend(s(18).default),n=Vue.extend(s(19).default),i=Vue.extend(s(20).default);t.exports={methods:{queryUpdates(t,e){const s={};return _.each(t,t=>{s[t.name]=t.version}),this.$http.post(`${this.api}/api/package/update`,{packages:JSON.stringify(s)},{emulateJSON:!0}).then(e,this.error)},enable(t){return this.$http.post("admin/system/package/enable",{name:t.name}).then(function(){this.$notify(this.$trans('"%title%" enabled.',{title:t.title})),Vue.set(t,"enabled",!0),document.location.assign(this.$url(`admin/system/package/${"pagekit-theme"===t.type?"themes":"extensions"}`))},this.error)},disable(t){return this.$http.post("admin/system/package/disable",{name:t.name}).then(function(){this.$notify(this.$trans('"%title%" disabled.',{title:t.title})),Vue.set(t,"enabled",!1),document.location.reload()},this.error)},install(t,e,s,n){return new a({parent:this}).install(t,e,s,n)},update(t,e,s,a){return new i({parent:this}).update(t,e,s,a)},uninstall(t,e){return new n({parent:this}).uninstall(t,e)},error(t){this.$notify(t.data,"danger")}}}},function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{ref:"input",staticClass:"package-upload"},[s("div",{attrs:{"uk-form-custom":""}},[s("input",{attrs:{type:"file",name:"file"}}),t._v(" "),s("button",{staticClass:"uk-button uk-button-primary",attrs:{type:"button",tabindex:"-1"}},[t.progress?s("span",[s("i",{attrs:{"uk-spinner":""}}),t._v(" "+t._s(t.progress))]):s("span",[t._v(t._s(t._f("trans")("Upload")))])])])]),t._v(" "),s("div",{ref:"modal",attrs:{"uk-modal":""}},[s("div",{staticClass:"uk-modal-dialog"},[s("package-details",{attrs:{api:t.api,package:t.package}}),t._v(" "),s("div",{staticClass:"uk-modal-footer uk-text-right"},[s("button",{staticClass:"uk-button uk-button-default uk-modal-close",attrs:{type:"button"}},[t._v("\n                    "+t._s(t._f("trans")("Cancel"))+"\n                ")]),t._v(" "),s("button",{staticClass:"uk-button uk-button-primary",on:{click:function(e){return e.preventDefault(),t.doInstall(e)}}},[t._v("\n                    "+t._s(t._f("trans")("Install"))+"\n                ")])])],1)])])},n=[];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return n})},function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"package-details"},[s("div",{staticClass:"uk-modal-header uk-flex uk-flex-middle"},[t.package.extra&&t.package.extra.icon?s("img",{staticClass:"uk-margin-right",attrs:{width:"50",height:"50",alt:t.package.title,src:t._f("icon")(t.package)}}):t._e(),t._v(" "),s("div",{staticClass:"uk-flex-1"},[s("h2",{staticClass:"uk-margin-remove"},[t._v("\n                "+t._s(t.package.title)+"\n            ")]),t._v(" "),s("ul",{staticClass:"uk-subnav uk-subnav-divider uk-margin-remove-bottom uk-margin-remove-top"},[t.package.authors&&t.package.authors[0]?s("li",{staticClass:"uk-text-muted"},[t._v("\n                    "+t._s(t.package.authors[0].name)+"\n                ")]):t._e(),t._v(" "),s("li",{staticClass:"uk-text-muted"},[t._v("\n                    "+t._s(t._f("trans")("Version %version%",{version:t.package.version}))+"\n                ")])])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.messages.checksum,expression:"messages.checksum"}],staticClass:"uk-alert uk-alert-danger uk-margin-remove"},[t._v("\n        "+t._s(t._f("trans")("The checksum of the uploaded package does not match the one from the marketplace. The file might be manipulated."))+"\n    ")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.messages.update,expression:"messages.update"}],staticClass:"uk-alert uk-alert-primary uk-margin-remove"},[t._v("\n        "+t._s(t._f("trans")("There is an update available for the package."))+"\n    ")]),t._v(" "),s("div",{staticClass:"uk-modal-body"},[t.package.description?s("p",[t._v("\n            "+t._s(t.package.description)+"\n        ")]):t._e(),t._v(" "),s("ul",{staticClass:"uk-list"},[t.package.license?s("li",[s("strong",[t._v(t._s(t._f("trans")("License:")))]),t._v(" "+t._s(t.package.license)+"\n            ")]):t._e(),t._v(" "),t.package.authors&&t.package.authors[0]?[t.package.authors[0].homepage?s("li",[s("strong",[t._v(t._s(t._f("trans")("Homepage:")))]),t._v(" "),s("a",{attrs:{href:t.package.authors[0].homepage,target:"_blank"}},[t._v(t._s(t.package.authors[0].homepage))])]):t._e(),t._v(" "),t.package.authors[0].email?s("li",[s("strong",[t._v(t._s(t._f("trans")("Email:")))]),t._v(" "),s("a",{attrs:{href:"mailto:"+t.package.authors[0].email}},[t._v(t._s(t.package.authors[0].email))])]):t._e()]:t._e()],2),t._v(" "),t.package.extra&&t.package.extra.image?s("img",{attrs:{width:"1200",height:"800",alt:t.package.title,src:t._f("image")(t.package)}}):t._e()])])},n=[];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return n})},function(t,e,s){"use strict";s.r(e);var a=s(10),n=s(1);for(var i in n)"default"!==i&&function(t){s.d(e,t,function(){return n[t]})}(i);var r=s(0),o=Object(r.a)(n.default,a.a,a.b,!1,null,null,null);e.default=o.exports},function(t,e,s){"use strict";s.r(e);var a=s(9),n=s(3);for(var i in n)"default"!==i&&function(t){s.d(e,t,function(){return n[t]})}(i);var r=s(0),o=Object(r.a)(n.default,a.a,a.b,!1,null,null,null);e.default=o.exports},function(t,e,s){"use strict";s.r(e);var a=s(8),n=s(5);for(var i in n)"default"!==i&&function(t){s.d(e,t,function(){return n[t]})}(i);var r=s(0),o=Object(r.a)(n.default,a.a,a.b,!1,null,null,null);e.default=o.exports},function(t,e,s){"use strict";s.r(e);var a=s(17),n=s(13);for(var i in n)"default"!==i&&function(t){s.d(e,t,function(){return n[t]})}(i);var r=s(0),o=Object(r.a)(n.default,a.a,a.b,!1,null,null,null);e.default=o.exports},function(t,e){e.compare=function(t,e,s){let a,n;this.php_js=this.php_js||{},this.php_js.ENV=this.php_js.ENV||{};let i=0;const r={dev:-6,alpha:-5,a:-5,beta:-4,b:-4,RC:-3,rc:-3,"#":-2,p:1,pl:1},o=function(t){return(t=(t=`${t}`.replace(/[_\-+]/g,".")).replace(/([^.\d]+)/g,".$1.").replace(/\.{2,}/g,".")).length?t.split("."):[-8]},u=function(t){return t?isNaN(t)?r[t]||-7:parseInt(t,10):0};for(t=o(t),e=o(e),n=Math.max(t.length,e.length),a=0;a<n;a++)if(t[a]!=e[a]){if(t[a]=u(t[a]),e[a]=u(e[a]),t[a]<e[a]){i=-1;break}if(t[a]>e[a]){i=1;break}}if(!s)return i;switch(s){case">":case"gt":return i>0;case">=":case"ge":return i>=0;case"<=":case"le":return i<=0;case"==":case"=":case"eq":return 0===i;case"<>":case"!=":case"ne":return 0!==i;case"":case"<":case"lt":return i<0;default:return null}}},,,function(t,e,s){t.exports={mixins:[s(15),Vue2Filters.mixin],data(){return _.extend({package:{},view:!1,updates:null,search:this.$session.get(`${this.$options.name}.search`,""),status:""},window.$data)},mounted(){this.load()},watch:{search(t){this.$session.set(`${this.$options.name}.search`,t)}},methods:{load(){this.$set(this,"status","loading"),this.packages&&this.queryUpdates(this.packages).then(function(t){const{data:e}=t;this.$set(this,"updates",e.packages.length?_.keyBy(e.packages,"name"):null),this.$set(this,"status","")},function(){this.$set(this,"status","error")})},icon(t){return t.extra&&t.extra.icon?`${t.url}/${t.extra.icon}`:this.$url("app/system/assets/images/placeholder-icon.svg")},image(t){return t.extra&&t.extra.image?`${t.url}/${t.extra.image}`:this.$url("app/system/assets/images/placeholder-800x600.svg")},details(t){this.$set(this,"package",t),this.$refs.details.open()},settings(t){if(!t.settings)return;let e,s;_.forIn(this.$options.components,(a,n)=>{(s=a.options||{}).settings&&t.settings===n&&(e=n)}),e?(this.$set(this,"package",t),this.$set(this,"view",e),this.$refs.settings.open()):window.location=t.settings},empty(t){return 0===this.filterBy(t,this.search,"title").length}},components:{"package-upload":s(26).default,"package-details":s(21).default}}},function(t,e,s){"use strict";s.r(e);var a=s(16),n=s(11);for(var i in n)"default"!==i&&function(t){s.d(e,t,function(){return n[t]})}(i);var r=s(0),o=Object(r.a)(n.default,a.a,a.b,!1,null,null,null);e.default=o.exports},,,function(t,e,s){window.Extensions=_.merge(s(25),{name:"extensions",el:"#extensions"}),Vue.ready(window.Extensions)}]);