!function(t){var e={};function s(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=33)}({22:function(t,e){e.compare=function(t,e,s){let r,n;this.php_js=this.php_js||{},this.php_js.ENV=this.php_js.ENV||{};let i=0;const a={dev:-6,alpha:-5,a:-5,beta:-4,b:-4,RC:-3,rc:-3,"#":-2,p:1,pl:1},o=function(t){return(t=(t=`${t}`.replace(/[_\-+]/g,".")).replace(/([^.\d]+)/g,".$1.").replace(/\.{2,}/g,".")).length?t.split("."):[-8]},u=function(t){return t?isNaN(t)?a[t]||-7:parseInt(t,10):0};for(t=o(t),e=o(e),n=Math.max(t.length,e.length),r=0;r<n;r++)if(t[r]!=e[r]){if(t[r]=u(t[r]),e[r]=u(e[r]),t[r]<e[r]){i=-1;break}if(t[r]>e[r]){i=1;break}}if(!s)return i;switch(s){case">":case"gt":return i>0;case">=":case"ge":return i>=0;case"<=":case"le":return i<=0;case"==":case"=":case"eq":return 0===i;case"<>":case"!=":case"ne":return 0!==i;case"":case"<":case"lt":return i<0;default:return null}}},33:function(t,e,s){const r=s(22);t.exports={name:"update",el:"#update",data:()=>_.extend({view:"index",status:"success",finished:!1,update:!1,output:"",progress:0,releases:[],errorsPagekit:[]},window.$data),created(){this.getVersions()},computed:{hasUpdate(){return this.update&&r.compare(this.update.version,this.version,">")}},methods:{getVersions(){this.$http.get(`${this.api}/api/update`,{params:{version:this.version}}).then(function(t){const{data:e}=t,s=e["nightly"==this.channel?"nightly":"latest"];s?(this.update=s,this.releases=e.versions):this.error(this.$trans("Cannot obtain versions. Please try again later."))},function(){this.error(this.$trans("Cannot connect to the server. Please try again later."))})},install(){this.$set(this,"view","installation"),this.doDownload(this.update)},doDownload(t){this.$set(this,"progress",33),this.$http.post("admin/system/update/download",{url:t.url}).then(this.doInstall,this.error)},doInstall(){const t=this;this.$set(this,"progress",66),this.$http.get("admin/system/update/update",null,{xhr:{onprogress(){t.setOutput(this.responseText)}}}).then(this.doMigration,this.error)},doMigration(){this.$set(this,"progress",100),"success"===this.status?this.$http.get("admin/system/migration/migrate").then(function(t){const{data:e}=t;this.output+=`\n\n${e.message}`,this.finished=!0},this.error):this.error()},setOutput(t){const e=t.split("\n"),s=e[e.length-1].match(/^status=(success|error)$/);s?(this.status=s[1],delete e[e.length-1],this.output=e.join("\n")):this.output=t},error(t){this.errorsPagekit.push(t.data||this.$trans("Whoops, something went wrong.")),this.status="error",this.finished=!0},showChangelog(t){return r.compare(t,this.version,">")},changelog(t){const e=new marked.Renderer;let s;return e.heading=function(t){return s=t,""},e.listitem=function(t){switch(s){case"Added":return`<li><span class="uk-badge pk-badge-justify uk-badge-success uk-margin-right">${s}</span> ${t}</li>`;case"Deprecated":case"Removed":return`<li><span class="uk-badge pk-badge-justify uk-badge-warning uk-margin-right">${s}</span> ${t}</li>`;case"Fixed":case"Security":return`<li><span class="uk-badge pk-badge-justify uk-badge-danger uk-margin-right">${s}</span> ${t}</li>`;default:return`<li><span class="uk-badge pk-badge-justify uk-margin-right">${s}</span> ${t}</li>`}},e.list=function(t){return t},marked(t,{renderer:e})}},filters:{}},Vue.ready(t.exports)}});