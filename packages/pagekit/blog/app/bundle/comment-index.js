!function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=13)}({13:function(t,e){t.exports={name:"comment",el:"#comments",mixins:[Vue2Filters.mixin],data(){return _.merge({posts:[],config:{filter:this.$session.get("comments.filter",{})},comments:!1,pages:0,count:"",selected:[],user:window.$pagekit.user,replyComment:{},editComment:{}},window.$data)},mounted(){this.Comments=this.$resource("api/blog/comment{/id}"),this.$watch("config.page",this.load,{immediate:!0})},watch:{"config.filter":{handler(t){this.config.page?this.config.page=0:this.load(),this.$session.set("comments.filter",t)},deep:!0}},computed:{statusOptions(){const t=_.map(this.$data.statuses,(t,e)=>({text:t,value:e}));return[{label:this.$trans("Filter by"),options:t}]}},methods:{active(t){return-1!=this.selected.indexOf(t.id)},submit(){const t=this;this.$validator.validateAll().then(e=>{e&&t.save(t.editComment.id?t.editComment:t.replyComment)})},save(t){return this.Comments.save({id:t.id},{comment:t}).then(function(){this.load(),this.$notify("Comment saved.")},function(t){this.$notify(t.data,"danger")})},status(t){const e=this.getSelected();e.forEach(e=>{e.status=t}),this.Comments.save({id:"bulk"},{comments:e}).then(function(){this.load(),this.$notify("Comments saved.")})},remove(){this.Comments.delete({id:"bulk"},{ids:this.selected}).then(function(){this.load(),this.$notify("Comments deleted.")})},load(){this.cancel(),this.Comments.query({filter:this.config.filter,post:this.config.post&&this.config.post.id||0,page:this.config.page,limit:this.config.limit}).then(function(t){const{data:e}=t;this.$set(this,"posts",e.posts),this.$set(this,"comments",e.comments),this.$set(this,"pages",e.pages),this.$set(this,"count",e.count),this.$set(this,"selected",[])})},getSelected(){const t=this;return this.comments.filter(e=>-1!==t.selected.indexOf(e.id))},getStatusText(t){return this.statuses[t.status]},cancel(){this.$set(this,"replyComment",{}),this.$set(this,"editComment",{})},reply(t){this.cancel(),this.$set(this,"replyComment",{parent_id:t.id,post_id:t.post_id,author:this.user.name,email:this.user.email})},edit(t){this.cancel(),this.$set(this,"editComment",_.merge({},t))},toggleStatus(t){t.status=1===t.status?0:1,this.save(t)}}},Vue.ready(t.exports)}});