!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=17)}({17:function(e,t,n){Vue.ready(_.merge(n(9),{name:"user-permissions",el:"#permissions"}))},9:function(e,t){e.exports={data:()=>window.$data,created(){this.Roles=this.$resource("api/user/role{/id}"),this.debounced=[],this.saveCb=_.debounce(()=>{this.Roles.save({id:"bulk"},{roles:this.debounced}).then(function(){this.$notify("Permissions saved")}),this.debounced=[]},1e3)},computed:{authenticated(){return this.roles.filter(e=>e.authenticated)[0]}},methods:{savePermissions(e){_.find(this.debounced,"id",e.id)||this.debounced.push(e),this.saveCb()},addPermission:(e,t)=>e.administrator?null:e.permissions.push(t),hasPermission:(e,t)=>-1!==e.permissions.indexOf(t),isInherited(e,t){return!e.locked&&this.hasPermission(this.authenticated,t)},showFakeCheckbox(e,t){return e.administrator||this.isInherited(e,t)&&!this.hasPermission(e,t)}}}}});