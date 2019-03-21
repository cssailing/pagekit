!function(t){var e={};function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=52)}({0:function(t,e,n){"use strict";function s(t,e,n,s,i,o,r,a){var l,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=n,d._compiled=!0),s&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=l):i&&(l=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(d.functional){d._injectStyles=l;var c=d.render;d.render=function(t,e){return l.call(e),c(t,e)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:d}}n.d(e,"a",function(){return s})},38:function(t,e){t.exports="<div> <div class=uk-margin> <label for=form-menu-title class=uk-form-label>{{ 'Menu Title' | trans }}</label> <div class=uk-form-controls> <input id=form-menu-title class=\"uk-form-width-large uk-input\" type=text name=title v-model=node.title v-validate=\"'required'\"> <div class=\"uk-text-meta uk-text-danger\" v-show=\"errors.first('title')\">{{ 'Invalid name.' | trans }}</div> </div> </div> <div class=uk-margin> <label for=form-slug class=uk-form-label>{{ 'Slug' | trans }}</label> <div class=uk-form-controls> <input id=form-slug class=\"uk-form-width-large uk-input\" type=text v-model=node.slug> </div> </div> <div class=uk-margin> <label for=form-status class=uk-form-label>{{ 'Status' | trans }}</label> <div class=uk-form-controls> <select id=form-status class=\"uk-form-width-large uk-select\" v-model.number=node.status> <option value=0>{{ 'Disabled' | trans }}</option> <option value=1>{{ 'Enabled' | trans }}</option> </select> </div> </div> <div class=uk-margin> <span class=uk-form-label>{{ 'Restrict Access' | trans }}</span> <div class=\"uk-form-controls uk-form-controls-text\"> <p v-for=\"role in roles\" class=uk-margin-small> <label><input class=uk-checkbox type=checkbox :value=role.id v-model.number=node.roles> {{ role.name }}</label> </p> </div> </div> <div class=uk-margin> <span class=uk-form-label>{{ 'Menu' | trans }}</span> <div class=\"uk-form-controls uk-form-controls-text\"> <label><input class=uk-checkbox type=checkbox value=center-content v-model=node.data.menu_hide> {{ 'Hide in menu' | trans }}</label> </div> </div> </div> "},52:function(t,e,n){"use strict";n.r(e);var s={props:["node","roles"],section:{label:"Settings"},created(){this.$options.components["template-settings"]=this.$root.$options.components["template-settings"]}},i=n(0),o=Object(i.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"uk-form-horizontal"},[e("template-settings",{tag:"component",attrs:{node:this.node,roles:this.roles}})],1)},[],!1,null,null,null).exports,r={section:{label:"Settings",priority:0,active:"link"},inject:["$validator"],props:["node","roles","form"],computed:{behavior:{get(){return this.node.data.alias?"alias":this.node.data.redirect?"redirect":"link"},set(t){this.$set(this.node,"data",_.extend(this.node.data,{alias:"alias"===t,redirect:"redirect"===t&&this.node.link}))}}},created(){this.$options.components["template-settings"]=this.$root.$options.components["template-settings"],"redirect"===this.behavior&&(this.node.link=this.node.data.redirect),this.node.id||(this.node.status=1)},events:{"save:node":function(){"redirect"===this.behavior&&(this.node.data.redirect=this.node.link)}}},a=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uk-form-horizontal"},[n("div",{staticClass:"uk-margin"},[n("label",{staticClass:"uk-form-label",attrs:{for:"form-url"}},[t._v(t._s(t._f("trans")("Url")))]),t._v(" "),n("div",{staticClass:"uk-form-controls"},[n("input-link",{attrs:{id:"form-url",cls:"uk-form-width-large",name:"link",link:t.node.link,required:""},on:{"update:link":function(e){return t.$set(t.node,"link",e)}},model:{value:t.node.link,callback:function(e){t.$set(t.node,"link",e)},expression:"node.link"}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.errors.first("link"),expression:"errors.first('link')"}],staticClass:"uk-text-meta uk-text-danger"},[t._v("\n                "+t._s(t._f("trans")("Invalid url."))+"\n            ")])],1)]),t._v(" "),n("div",{staticClass:"uk-margin"},[n("label",{staticClass:"uk-form-label",attrs:{for:"form-type"}},[t._v(t._s(t._f("trans")("Type")))]),t._v(" "),n("div",{staticClass:"uk-form-controls"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.behavior,expression:"behavior"}],staticClass:"uk-form-width-large uk-select",attrs:{id:"form-type"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.behavior=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"link"}},[t._v("\n                    "+t._s(t._f("trans")("Link"))+"\n                ")]),t._v(" "),n("option",{attrs:{value:"alias"}},[t._v("\n                    "+t._s(t._f("trans")("URL Alias"))+"\n                ")]),t._v(" "),n("option",{attrs:{value:"redirect"}},[t._v("\n                    "+t._s(t._f("trans")("Redirect"))+"\n                ")])])])]),t._v(" "),n("template-settings",{tag:"component",attrs:{node:t.node,roles:t.roles,form:t.form},on:{"update:node":function(e){t.node=e},"update:roles":function(e){t.roles=e}}})],1)},[],!1,null,null,null).exports,l=n(38),d=n.n(l);window.Site={name:"page",el:"#site-edit",data:()=>_.merge({sections:[],form:{},active:0,processing:!1},window.$data),created(){let t=[];const e=_.kebabCase(this.type.id);let n;_.forIn(this.$options.components,(e,n)=>{e.section&&t.push(_.extend({name:n,priority:0},e.section))}),t=_.sortBy(t.filter(s=>null===(n=s.name.match("(.+)--(.+)"))?!_.find(t,{name:`${e}--${s.name}`}):n[1]==e,this),"priority"),this.$set(this,"sections",t)},mounted(){const t=this;this.Nodes=this.$resource("api/site/node{/id}"),this.tab=UIkit.tab("#page-tab",{connect:"#page-content"}),UIkit.util.on(this.tab.connects,"show",(e,n)=>{if(n!=t.tab)return!1;for(const e in n.toggles)if(n.toggles[e].parentNode.classList.contains("uk-active")){t.active=e;break}}),this.$watch("active",function(t){this.tab.show(t)}),this.$state("active")},computed:{path(){return`${this.node.path?this.node.path.split("/").slice(0,-1).join("/"):""}/${this.node.slug||""}`}},filers:{},methods:{submit(){const t=this;this.$validator.validateAll().then(e=>{e&&(t.processing=!0,t.save())})},save(){const t={node:this.node},e=this;this.$trigger("save:node",t),this.Nodes.save({id:this.node.id},t).then(function(t){const{data:n}=t;this.node.id||window.history.replaceState({},"",this.$url.route("admin/site/page/edit",{id:n.node.id})),this.$set(this,"node",n.node),this.$notify(this.$trans("%type% saved.",{type:this.type.label})),setTimeout(()=>{e.processing=!1},500)},function(t){this.processing=!1,this.$notify(t.data,"danger")})}},components:{settings:o,"link--settings":a,"template-settings":{inject:["$validator"],props:["node","roles"],template:d.a}}},Vue.ready(window.Site)}});