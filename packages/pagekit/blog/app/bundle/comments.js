!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=18)}({0:function(t,e,n){"use strict";function r(t,e,n,r,a,s,o,i){var m,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),o?(m=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=m):a&&(m=i?function(){a.call(this,this.$root.$options.shadowRoot)}:a),m)if(l.functional){l._injectStyles=m;var c=l.render;l.render=function(t,e){return m.call(e),c(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,m):[m]}return{exports:t,options:l}}n.d(e,"a",function(){return r})},12:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{attrs:{id:"comment-"+t.comment.id}},[n("article",{staticClass:"uk-comment uk-visible-toggle",class:{"uk-comment-primary":t.comment.special}},[n("header",{staticClass:"uk-comment-header uk-position-relative"},[t.comment.status?n("div",{staticClass:"uk-flex uk-flex-middle"},[n("div",{staticClass:"uk-width-auto"},[n("img",{directives:[{name:"gravatar",rawName:"v-gravatar",value:t.comment.email,expression:"comment.email"}],staticClass:"uk-comment-avatar uk-border-rounded",attrs:{width:"30",height:"30",alt:t.comment.author}})]),t._v(" "),n("div",{staticClass:"uk-margin-small-left"},[n("div",{staticClass:"uk-flex uk-flex-middle"},[n("h4",{staticClass:"uk-comment-title uk-margin-remove"},[t._v("\n                            "+t._s(t.comment.author)+"\n                        ")]),t._v(" "),n("time",{staticClass:"uk-margin-small-left",attrs:{datetime:t.comment.created}},[t._v(t._s(t._f("date")(t.comment.created,"dd.MM.yy в hh:ss")))]),t._v(" "),n("a",{attrs:{href:t.permalink,"uk-scroll":""}},[n("span",{staticClass:"uk-margin-small-left tm-icon-hashtag"})])])])]):t._e(),t._v(" "),t.comment.status?n("div",{staticClass:"uk-position-top-right uk-hidden-hover"},[t.showReplyButton?n("a",{staticClass:"uk-link-muted",attrs:{href:"#","uk-icon":"reply"},on:{click:function(e){return e.preventDefault(),t.replyTo(e)}}}):t._e()]):n("p",{staticClass:"uk-comment-meta"},[t._v("\n                "+t._s("The comment is awaiting approval.")+"\n            ")])]),t._v(" "),n("div",{staticClass:"uk-comment-body"},[n("p",{domProps:{innerHTML:t._s(t.comment.content)}})]),t._v(" "),t._l(t.comment.messages,function(e){return n("div",{staticClass:"uk-alert"},[t._v("\n            "+t._s(e)+"\n        ")])}),t._v(" "),t.config.enabled?n("div",{ref:"reply"}):t._e()],2),t._v(" "),t.tree[t.comment.id]&&t.depth<t.config.max_depth?n("ul",t._l(t.tree[t.comment.id],function(e){return n("comment",{key:e.id,attrs:{comment:e,config:t.config,tree:t.tree,root:t.root}})}),1):t._e()])},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},18:function(t,e,n){const r=n(19).default,a=n(24).default,{$:s}=UIkit.util,{append:o}=UIkit.util;t.exports={el:"#comments",name:"comments",template:'\n            <div id="comments" class="uk-margin-large-top" v-show="config.enabled || comments.length">\n\n                <template v-if="comments.length">\n\n                    <h2 class="uk-h4">{{ \'Comments (%count%)\' | trans({count:count}) }}</h2>\n\n                    <ul class="uk-comment-list">\n                        <comment v-for="comment in tree[0]" :key="comment.id" :comment="comment" :config="config" :tree="tree" :comments="comments" :root="root"></comment>\n                    </ul>\n\n                </template>\n\n                <div class="uk-alert" v-for="message in messages">{{ message }}</div>\n\n                <div ref="reply" v-if="config.enabled"></div>\n\n                <p v-else>{{ \'Comments are closed.\' | trans }}</p>\n\n            </div>',data(){return _.extend({post:{},tree:{},comments:[],messages:[],count:0,replyForm:!1,root:this},window.$comments)},beforeCreate(){},created(){this.load()},mounted(){},methods:{load(){return this.$http.get("api/blog/comment{/id}",{params:{post:this.config.post}}).then(function(t){const{data:e}=t;this.$set(this,"comments",e.comments),this.$set(this,"tree",_.groupBy(e.comments,"parent_id")),this.$set(this,"post",e.posts[0]),this.$set(this,"count",e.count),this.$nextTick(()=>{const t=window.location.hash;t&&document.querySelector(t).scrollIntoView({behavior:"smooth"})}),this.reply()})},reply(t){t=t||this,this.replyForm&&(this.replyForm.$el.parentNode.removeChild(this.replyForm.$el),this.replyForm.$destroy(!0));const{reply:e}=this.$options.components,n=new(Vue.extend({parent:t,mixins:[e],props:["root"],data:()=>({config:t.config,parent:t.comment&&t.comment.id||0})}))({propsData:{root:this}});this.replyForm=n.$mount(),t.$refs.reply.appendChild(this.replyForm.$el)}},components:{comment:r,reply:a}},Vue.ready(t.exports)},19:function(t,e,n){"use strict";n.r(e);var r=n(12),a=n(3);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);var o=n(0),i=Object(o.a)(a.default,r.a,r.b,!1,null,null,null);e.default=i.exports},24:function(t,e,n){"use strict";n.r(e);var r={name:"Reply",data:()=>({author:"",email:"",content:"",error:!1,form:!1}),computed:{user(){return this.config.user},login(){return this.$url("user/login",{redirect:window.location.href})}},methods:{save(){const t=this;this.$validator.validateAll().then(e=>{if(e){const e={parent_id:t.parent,post_id:t.config.post,content:t.content};t.user.isAuthenticated||(e.author=t.author,e.email=t.email),t.$set(t,"error",!1),t.$resource("api/blog/comment{/id}").save({id:0},{comment:e}).then(function(e){const{data:n}=e;t.user.skipApproval?t.root.load().then(()=>{window.location.hash=`comment-${n.comment.id}`}):t.root.messages.push(this.$trans("Thank you! Your comment needs approval before showing up.")),t.cancel()},()=>{t.$set(t,"error",t.$trans("Unable to comment. Please try again later."))})}})},cancel(){this.root.reply()}}},a=n(0),s=Object(a.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"js-comment-reply uk-margin-auto"},[n("h3",{staticClass:"uk-h4 uk-margin-medium-top"},[t._v("\n        "+t._s(t._f("trans")("Leave a comment"))+"\n        "),n("small",[t.parent?n("a",{staticClass:"uk-text-muted uk-margin-small-left",attrs:{href:"#",accesskey:"c"},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}},[t._v(t._s(t._f("trans")("Cancel")))]):t._e()])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}],staticClass:"uk-alert uk-alert-danger"},[t._v("\n        "+t._s(t.error)+"\n    ")]),t._v(" "),t.user.canComment?n("form",{staticClass:"uk-form-stacked",on:{submit:function(e){return e.preventDefault(),t.save(e)}}},[t.user.isAuthenticated?n("p",[t._v("\n            "+t._s(t._f("trans")("Logged in as %name%",{name:t.user.name}))+"\n        ")]):[n("div",{staticClass:"uk-margin"},[n("label",{staticClass:"uk-form-label",attrs:{for:"form-name"}},[t._v(t._s(t._f("trans")("Name")))]),t._v(" "),n("div",{staticClass:"uk-form-controls"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"uk-form-width-large uk-input",attrs:{id:"form-name",type:"text",name:"author"},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.errors.first("author"),expression:"errors.first('author')"}],staticClass:"uk-text-small uk-text-danger"},[t._v("\n                        "+t._s(t._f("trans")("Name cannot be blank."))+"\n                    ")])])]),t._v(" "),n("div",{staticClass:"uk-margin"},[n("label",{staticClass:"uk-form-label",attrs:{for:"form-email"}},[t._v(t._s(t._f("trans")("Email")))]),t._v(" "),n("div",{staticClass:"uk-form-controls"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"uk-form-width-large uk-input",attrs:{id:"form-email",type:"email",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.errors.first("email"),expression:"errors.first('email')"}],staticClass:"uk-text-small uk-text-danger"},[t._v("\n                        "+t._s(t._f("trans")("Email invalid."))+"\n                    ")])])])],t._v(" "),n("div",{staticClass:"uk-margin"},[n("label",{staticClass:"uk-form-label",attrs:{for:"form-comment"}},[t._v(t._s(t._f("trans")("Comment")))]),t._v(" "),n("div",{staticClass:"uk-form-controls"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"uk-form-width-large uk-textarea",attrs:{id:"form-comment",name:"content",rows:"10"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.errors.first("content"),expression:"errors.first('content')"}],staticClass:"uk-text-small uk-text-danger"},[t._v("\n                    "+t._s(t._f("trans")("Comment cannot be blank."))+"\n                ")])])]),t._v(" "),n("p",[n("button",{staticClass:"uk-button uk-button-primary",attrs:{type:"submit",accesskey:"s"}},[n("span",[t._v(t._s(t._f("trans")("Submit")))])])])],2):[t.user.isAuthenticated?n("p",[t._v("\n            "+t._s(t._f("trans")("You are not allowed to post comments."))+"\n        ")]):n("p",[n("a",{attrs:{href:t.login}},[t._v(t._s(t._f("trans")("Please login to leave a comment.")))])])]],2)},[],!1,null,null,null);e.default=s.exports},3:function(t,e,n){"use strict";n.r(e);var r=n(4),a=n.n(r);for(var s in r)"default"!==s&&function(t){n.d(e,t,function(){return r[t]})}(s);e.default=a.a},4:function(t,e){t.exports={name:"comment",props:["comment","config","tree","root"],computed:{depth(){let t=1,e=this.$parent;for(;e;)"Comment"===e.$options.name&&t++,e=e.$parent;return t},showReplyButton(){return this.config.enabled&&!this.isLeaf&&this.root.replyForm.$parent!==this},remainder(){return this.isLeaf&&this.tree[this.comment.id]||[]},isLeaf(){return this.depth>=this.config.max_depth},permalink(){return`#comment-${this.comment.id}`}},methods:{replyTo(){this.root.reply(this)}}}}});