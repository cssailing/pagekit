!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=11)}({11:function(t,e){t.exports={name:"widget",el:"#widget-edit",mixins:[window.Widgets],data:()=>_.merge({form:{},sections:[],active:0,processing:!1},window.$data),created(){let t=[];const e=_.kebabCase(this.widget.type);let i;_.forIn(this.$options.components,(e,i)=>{e.section&&t.push(_.extend({name:i,priority:0},e.section))}),t=_.sortBy(t.filter(n=>null===(i=n.name.match("(.+)--(.+)"))?!_.find(t,{name:`${e}--${n.name}`}):i[1]==e,this),"priority"),this.$set(this,"sections",t)},mounted(){this.tab=UIkit.tab("#widget-tab",{connect:"#widget-content"});const t=this;if(UIkit.util.on(this.tab.connects,"show",(e,i,n)=>{if(i!=t.tab)return!1;for(const e in i.toggles)if(i.toggles[e].parentNode.classList.contains("uk-active")){t.active=e;break}}),this.$watch("active",function(t){this.tab.show(t)}),this.$state("active"),!this.widget.id){const t=new RegExp("[?&]position=([^&]*)").exec(location.search);this.widget.position=t&&decodeURIComponent(t[1].replace(/\+/g," "))||""}},methods:{submit(){const t=this;this.$validator.validateAll().then(e=>{e&&(t.processing=!0,t.save())})},save(){const t=this;this.$trigger("save:widget",{widget:this.widget}),this.$resource("api/site/widget{/id}").save({id:this.widget.id},{widget:this.widget}).then(function(e){const{data:i}=e;this.$trigger("saved:widget"),this.widget.id||window.history.replaceState({},"",this.$url.route("admin/site/widget/edit",{id:i.widget.id})),this.$set(this,"widget",i.widget),this.$notify("Widget saved."),setTimeout(()=>{t.processing=!1},500)},function(t){this.$notify(t.data,"danger")})},cancel(){this.$trigger("cancel:widget")}}},Vue.ready(t.exports)}});