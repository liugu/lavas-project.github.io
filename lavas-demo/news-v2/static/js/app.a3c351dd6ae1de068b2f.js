webpackJsonp([7],{172:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(80),a=n.n(i),o=n(120),r=(n.n(o),n(55)),s=n.n(r),c=n(443),u=n(199),l=n.n(u),h=s.a.prototype.$loading=new s.a(l.a).$mount(),p=n.i(c.a)(),d=p.app,f=p.router,v=p.store;document.body.appendChild(h.$el),s.a.mixin({beforeRouteUpdate:function(t,e,n){var i=this.$options.asyncData;i?(h.start(),i.call(this,{store:this.$store,route:t}).then(function(){h.finish(),n()}).catch(n)):n()},beforeRouteEnter:function(t,e,n){n(function(e){e.$el.scrollTop=e.$store.state.appShell.historyPageScrollTop[t.fullPath]||0})},beforeRouteLeave:function(t,e,n){this.$store.dispatch("appShell/saveScrollTop",{path:e.fullPath,scrollTop:this.$el.scrollTop}),n()}}),f.beforeResolve(function(t,e,n){var i=f.getMatchedComponents(t),o=f.getMatchedComponents(e),r=!1,s=i.filter(function(t,e){return r||(r=o[e]!==t)});if(!s.length)return n();h.start(),a.a.all(s.map(function(e){if(e.asyncData&&(!e.asyncDataFetched||t.meta.notKeepAlive))return e.asyncData({store:v,route:t}).then(function(){e.asyncDataFetched=!0})})).then(function(){h.finish(),n()}).catch(n)}),f.onReady(function(){return d.$mount("#app")})},173:function(t,e,n){"use strict";var i=n(55),a=n.n(i);e.a=new a.a},196:function(t,e,n){function i(t){n(209),n(210)}var a=n(44)(n(444),n(203),i,"data-v-4e64dc28",null);t.exports=a.exports},197:function(t,e,n){function i(t){n(214)}var a=n(44)(n(445),n(207),i,"data-v-ad8f8a4c",null);t.exports=a.exports},198:function(t,e,n){function i(t){n(208)}var a=n(44)(n(446),n(202),i,"data-v-215f825f",null);t.exports=a.exports},199:function(t,e,n){function i(t){n(212)}var a=n(44)(n(447),n(205),i,"data-v-6e453c72",null);t.exports=a.exports},200:function(t,e,n){function i(t){n(213)}var a=n(44)(n(448),n(206),i,"data-v-83387fb0",null);t.exports=a.exports},201:function(t,e,n){function i(t){n(211)}var a=n(44)(n(449),n(204),i,null,null);t.exports=a.exports},202:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("sidebar",{attrs:{enableSwipeOut:t.enableSwipeOut},model:{value:t.sidebarStatus,callback:function(e){t.sidebarStatus=e},expression:"sidebarStatus"}},[n("div",{staticClass:"app-sidebar-content"},[t.title?n("div",{staticClass:"app-sidebar-title",on:{click:function(e){e.stopPropagation(),t.close(e)}}},[n("span",{staticClass:"app-sidebar-title-left-icon"},[t.title.imageLeft?n("img",{attrs:{src:t.title.imageLeft,alt:t.title.altLeft}}):t.title.svgLeft?n("icon",{attrs:{name:t.title.svgLeft}}):t.title.iconLeft?n("v-icon",{attrs:{light:""}},[t._v(t._s(t.title.iconLeft))]):t._e()],1),t._v(" "),n("span",[t._v(t._s(t.title.text))]),t._v(" "),t._t("logo",[n("span",{staticClass:"app-sidebar-title-right-logo"},[t.title.imageRight?n("img",{attrs:{src:t.title.imageRight,alt:t.title.altRight}}):t.title.svgRight?n("icon",{attrs:{name:t.title.svgRight}}):t.title.iconRight?n("v-icon",[t._v(t._s(t.title.iconRight))]):t._e()],1)])],2):t._e(),t._v(" "),t.blocks?n("div",{staticClass:"app-sidebar-blocks"},[n("ul",t._l(t.blocks,function(e){return n("li",{staticClass:"app-sidebar-block"},[n("v-container",{attrs:{fluid:"","grid-list-sm":""}},[n("v-layout",{attrs:{row:"",wrap:""}},t._l(e.sublist,function(e){return n("v-flex",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"grey--text"},expression:"{class: 'grey--text'}"}],key:e.text,staticClass:"app-block-sublist-item",attrs:{xs6:""},on:{click:function(n){t.tip(e.route)}}},[n("span",{staticClass:"app-sidebar-block-left-icon"},[n("v-icon",{class:e.color+"--text"},[t._v(t._s(e.icon))])],1),t._v(" "),e.text?n("span",{staticClass:"app-sidebar-block-text"},[t._v(t._s(e.text))]):t._e()])}))],1),t._v(" "),n("v-list",[t._l(e.list,function(i,a){return[n("v-list-tile",{staticClass:"app-block-list-item",attrs:{ripple:""}},[n("v-list-tile-content",{on:{click:function(e){e.stopPropagation(),t.tip(i.route)}}},[n("v-list-tile-title",{domProps:{innerHTML:t._s(i.text)}})],1),t._v(" "),n("v-list-tile-action",[n("v-icon",[t._v(t._s(i.iconRight))])],1)],1),t._v(" "),a!==e.list.length-1?n("v-divider",{attrs:{light:""}}):t._e()]})],2)],1)}))]):t._e(),t._v(" "),t.showDemoTip?n("v-alert",{staticClass:"app-sidebar-tip",attrs:{info:"",value:"true"}},[t._v("Only a demo")]):t._e()],1)])},staticRenderFns:[]}},203:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"app-shell"},[n("app-header",{staticClass:"app-shell-header",on:{"click-menu":t.handleClickHeaderMenu,"click-back":t.handleClickHeaderBack}},[n("template",{slot:"logo"})],2),t._v(" "),n("app-sidebar",{on:{"hide-sidebar":t.hideSidebar,"show-sidebar":t.showSidebar}}),t._v(" "),n("div",{ref:"appViewWrapper",staticClass:"app-view-wrapper"},[n("transition",{attrs:{name:t.pageTransitionName},on:{"before-enter":t.handleBeforeEnter,"after-enter":t.handleAfterEnter}},[n("keep-alive",[t.$route.meta.notKeepAlive?t._e():n("router-view",{staticClass:"app-view",class:{"app-view-with-header":t.appHeader.show,"overflow-scrolling-touch":!t.previewShow}})],1)],1),t._v(" "),n("transition",{attrs:{name:t.pageTransitionName},on:{"before-enter":t.handleBeforeEnter,"after-enter":t.handleAfterEnter}},[t.$route.meta.notKeepAlive?n("router-view",{staticClass:"app-view",class:{"app-view-with-header":t.appHeader.show,"overflow-scrolling-touch":!t.previewShow}}):t._e()],1)],1)],1)])},staticRenderFns:[]}},204:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:t.clazz,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e){return n("path",t._b({},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e){return n("polygon",t._b({},"polygon",e,!1))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[n("g",{domProps:{innerHTML:t._s(t.icon.raw)}})]:t._e()])],2)},staticRenderFns:[]}},205:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"progress",style:{width:t.percent+"%",height:t.height,"background-color":t.canSuccess?t.color:t.failedColor,opacity:t.show?1:0}})},staticRenderFns:[]}},206:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.enableSwipeOut,expression:"enableSwipeOut"}],ref:"sidebarWrapper",staticClass:"sidebar-wrapper",class:t.wrapperClass},[n("div",{ref:"sidebarScroller",staticClass:"sidebar-scroller",style:{"padding-left":t.widthProp}},[n("div",{staticClass:"sidebar-main",style:{width:t.widthProp},on:{scroll:function(t){t.stopPropagation()}}},[t._t("default")],2),t._v(" "),n("div",{ref:"sidebarToggle",staticClass:"touch-toggle",style:{opacity:t.opacity,"padding-left":t.widthProp},on:{touchstart:t.toggleTouchStart,touchmove:t.toggleTouchMove,click:function(e){e.stopPropagation(),e.preventDefault(),t.toggleClick(e)}}})])])},staticRenderFns:[]}},207:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-down"}},[n("header",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"app-header-wrapper"},[n("div",{staticClass:"app-header-left"},[t.showMenu?n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){t.handleClick("menu")}}},[n("v-icon",{staticClass:"app-header-icon"},[t._v("menu")])],1):t._e(),t._v(" "),t.showFavor?n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){t.handleClick("favor")}}},[n("v-icon",{staticClass:"app-header-icon"},[t._v("folder")])],1):t._e(),t._v(" "),t.showBack?n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){t.handleClick("back")}}},[n("v-icon",{staticClass:"app-header-icon"},[t._v("arrow_back")])],1):t._e(),t._v(" "),t.showLogo?n("div",{on:{click:function(e){t.handleClick("logo")}}},[t._t("logo",[n("icon",{staticClass:"app-header-icon",attrs:{name:t.logoIcon}})])],2):t._e()],1),t._v(" "),n("div",{staticClass:"app-header-middle"},[t._t("title",[t._v("\n                "+t._s(t.title)+"\n            ")])],2),t._v(" "),n("div",{staticClass:"app-header-right"},[t._l(t.actions,function(e,i){return t._t("actions",[e.toggle?n("v-btn",{attrs:{icon:"icon"},nativeOn:{click:function(n){t.handleClick("toggle",{actionIdx:i,handler:e.toggleHandler})}}},[n("v-icon",{staticClass:"app-header-icon"},[t._v(t._s(e.toggleIcon))])],1):n("v-btn",{attrs:{icon:"icon"},nativeOn:{click:function(n){t.handleClick("action",{actionIdx:i,route:e.route})}}},[e.svg?n("icon",{staticClass:"app-header-icon",attrs:{name:e.svg}}):e.icon?n("v-icon",{staticClass:"app-header-icon"},[t._v(t._s(e.icon))]):t._e()],1)],{icon:e.icon,route:e.route})})],2)])])},staticRenderFns:[]}},208:function(t,e){},209:function(t,e){},210:function(t,e){},211:function(t,e){},212:function(t,e){},213:function(t,e){},214:function(t,e){},443:function(t,e,n){"use strict";function i(){var t=n.i(l.a)();return{app:new s.a(o()({router:t,store:h.a},d.a)),router:t,store:h.a}}e.a=i;var a=n(62),o=n.n(a),r=n(55),s=n.n(r),c=n(176),u=n.n(c),l=n(451),h=n(452),p=n(196),d=n.n(p),f=n(201),v=n.n(f);s.a.use(u.a),s.a.component("icon",v.a),s.a.config.productionTip=!1,v.a.register({"svg-sentiment-very-satisfied":{width:48,height:48,d:"M23.99 4C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zm2-20.12L28.12 22l2.12-2.12L32.36 22l2.13-2.12-4.25-4.24zm-8.24 0L19.88 22 22 19.88l-4.24-4.24-4.25 4.24L15.64 22zM24 35c4.66 0 8.62-2.92 10.22-7H13.78c1.6 4.08 5.56 7 10.22 7z"}})},444:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(62),a=n.n(i),o=n(61),r=n(197),s=n.n(r),c=n(198),u=n.n(c);e.default={name:"app",components:{AppHeader:s.a,AppSidebar:u.a},computed:a()({},n.i(o.a)("appShell",["appHeader","pageTransitionName"]),n.i(o.b)(["previewShow"])),methods:a()({},n.i(o.c)("appShell",["setPageSwitching"]),n.i(o.c)("appShell/appSidebar",["showSidebar","hideSidebar"]),{handleBeforeEnter:function(t){this.setPageSwitching(!0)},handleAfterEnter:function(t){this.setPageSwitching(!1)},handleClickHeaderBack:function(){this.$router.go(-1)},handleClickHeaderMenu:function(){this.showSidebar()}}),mounted:function(){var t=this,e=this.$refs.appViewWrapper;this.$refs.appViewWrapper.style.backgroundColor="#fff";var n=void 0,i=void 0,a=void 0,o=void 0,r=function(t){n=t.touches[0].pageX,a=t.touches[0].pageY},s=function(t){i=t.touches[0].pageX-n,o=t.touches[0].pageY-a},c=function(e){i>60&&Math.abs(o)<60&&"/"!==t.$router.currentRoute.path&&!t.previewShow&&t.$router.go(-1),i=0,o=0};e.addEventListener("touchstart",r),e.addEventListener("touchmove",s),e.addEventListener("touchend",c)}}},445:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(62),a=n.n(i),o=n(61),r=n(173);e.default={name:"appHeader",computed:a()({},n.i(o.a)("appShell/appHeader",["show","showMenu","showFavor","showBack","showLogo","logoIcon","title","actions"]),n.i(o.a)("appShell",["isPageSwitching"])),methods:{handleClick:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.handler,i=e.actionIdx,a=e.route;if(!this.isPageSwitching){var o={};"action"===t&&(o.actionIdx=i),"toggle"===t&&(o.handler=n),this.$emit("click-"+t,o),r.a.$emit("app-header:click-"+t,o),a&&this.$router.push(a)}}}}},446:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(62),a=n.n(i),o=n(61),r=n(200),s=n.n(r);e.default={components:{Sidebar:s.a},computed:a()({},n.i(o.a)("appShell/appSidebar",["show","title","user","blocks","enableSwipeOut"]),{sidebarStatus:{get:function(){return this.show},set:function(t){t?this.$emit("show-sidebar"):this.$emit("hide-sidebar")}}}),data:function(){return{showDemoTip:!1}},methods:{close:function(){this.sidebarStatus=!1},closeAndGo:function(t){this.$router.push(t),this.close()},tip:function(t){var e=this;if(t)return void this.closeAndGo(t);this.showDemoTip=!0,setTimeout(function(){e.showDemoTip=!1},2500)}}}},447:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#ffca2b",failedColor:"#ff0000"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,t.$nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},448:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(437),a=n.n(i),o=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};e.default={props:{value:{type:Boolean,default:!1},width:{type:Number,default:.75},enableSwipeOut:{type:Boolean,default:!1}},data:function(){return{showStatus:this.value,startX:0,startY:0,wrapperClass:{expand:!1,collapse:!0,"w-left":!0},opacity:0,iscroll:null}},computed:{itsWidth:function(){return this.width<1?Math.round(this.width*document.documentElement.clientWidth):this.width},widthProp:function(){return this.itsWidth+"px"}},watch:{value:function(){this.showStatus=this.value},showStatus:function(t){this.toggleScroll(t),this.$emit("input",t)}},methods:{toggleTouchStart:function(t){if(this.enableSwipeOut&&!this.wrapperClass.expand){var e=t.touches[0],n=e.clientX,i=e.clientY;this.startX=n,this.startY=i}},toggleTouchMove:function(t){var e=this;if(this.enableSwipeOut&&!this.wrapperClass.expand){var n=t.touches[0],i=n.clientX,a=n.clientY,o=i-this.startX;o>5&&Math.abs(a-this.startY)/o<.577&&(this.wrapperClass.expand=!0,this.wrapperClass.collapse=!1,this.$nextTick(function(){e.bindScroll(t)}))}},toggleClick:function(t){this.iscroll&&this.forceToggleScroll(!1)},bindScroll:function(t){var e=this;this.iscroll||(this.iscroll=new a.a(this.$refs.sidebarWrapper,{eventPassthrough:!0,scrollY:!1,scrollX:!0,bounce:!1,startX:-this.itsWidth}),this.changeOpacity(),this.iscroll.on("scrollEnd",function(){var t=e.iscroll,n=t.directionX,i=t.x;return 0===i?void(e.showStatus=!0):i===-e.itsWidth?(e.unbindScroll(),void(e.showStatus=!1)):void(n>0?e.forceToggleScroll(!1):n<0?e.forceToggleScroll(!0):e.showStatus=!e.showStatus)}),t&&this.iscroll._start(t))},unbindScroll:function(){this.iscroll&&(this.iscroll.destroy(),this.iscroll=null,this.wrapperClass.expand=!1,this.wrapperClass.collapse=!0,this.opacity=0,this.$refs.sidebarScroller.setAttribute("style","padding-left:"+this.widthProp))},toggleScroll:function(t){var e=this;t?(this.wrapperClass.expand=!0,this.wrapperClass.collapse=!1,this.$nextTick(function(){e.iscroll||e.bindScroll(),e.iscroll.x<0&&setTimeout(function(){e.iscroll&&e.iscroll.scrollTo(0,0,200)},10)})):this.iscroll&&this.iscroll.x>-this.itsWidth&&setTimeout(function(){e.iscroll.scrollTo(-e.itsWidth,0,200)})},forceToggleScroll:function(t){this.showStatus===t?this.toggleScroll(t):this.showStatus=t},changeOpacity:function(){this.wrapperClass.expand&&this.iscroll&&(this.opacity=(this.iscroll.x+this.itsWidth)/this.itsWidth*.5,o(this.changeOpacity.bind(this)))}}}},449:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(55),a=n.n(i),o={};e.default={name:"icon",props:{name:{type:String,validator:function(t){return t?t in o||(a.a.util.warn('Invalid prop: prop "icon" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.',this),!1):null}},scale:[Number,String],spin:Boolean,inverse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(a.a.util.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},clazz:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse}},icon:function(){return this.name?o[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,n=t.height;return Math.max(e,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,n=0;this.$children.forEach(function(t){e=Math.max(e,t.width),n=Math.max(n,t.height)}),this.childrenWidth=e,this.childrenHeight=n,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(n-t.height)/2})}},register:function(t){for(var e in t){var n=t[e];n.paths||(n.paths=[]),n.d&&n.paths.push({d:n.d}),n.polygons||(n.polygons=[]),n.points&&n.polygons.push({points:n.points}),o[e]=n}},icons:o}},450:function(t,e,n){"use strict";var i=n(80),a=n.n(i),o=n(122),r=n.n(o),s=n(121),c=n.n(s),u=n(177),l=n.n(u);e.a={getNewsList:function(t){var e=this;return c()(r.a.mark(function n(){var i,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()("https://pwa.baidu.com/api/mockup/news/"+t.category,{withCredentials:!0});case 2:return i=e.sent,t.nid&&(a=i.data.data.news||[],i.data.data.news=a.filter(function(e){return e.nid===t.nid})||a[0]||[]),e.abrupt("return",i.data.data);case 5:case"end":return e.stop()}},n,e)}))()},getSearchResult:function(t){var e=this;return c()(r.a.mark(function t(){var n,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l()("https://pwa.baidu.com/api/mockup/news/shehui",{withCredentials:!0});case 2:return n=t.sent,i=n.data.data.news||[],n.data.data=i,t.abrupt("return",n.data.data);case 6:case"end":return t.stop()}},t,e)}))()},getUserInfo:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new a.a(function(t){t({userName:"Baidu",messageCount:10})})},getHotNews:function(){return new a.a(function(t){t({news:[{title:"习近平将访哈萨克斯坦并出席系列活动",abs:"本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...",ts:"1496806231000",url:"http://www.sznews.com/news/content/2016-12/18/content_14606309.htm"},{title:"习近平将访哈萨克斯坦并出席系列活动",abs:"本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...",ts:"1496806231000",url:"http://www.sznews.com/news/content/2016-12/18/content_14606309.htm"},{title:"习近平将访哈萨克斯坦并出席系列活动",abs:"本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...",ts:"1496806231000",url:"http://www.sznews.com/news/content/2016-12/18/content_14606309.htm"}]})})},searchNews:function(t){return new a.a(function(t){setTimeout(function(){t({news:[{title:"习近平将访哈萨克斯坦并出席系列活动",abs:"本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...",ts:"1496806231000",url:"http://www.sznews.com/news/content/2016-12/18/content_14606309.htm"},{title:"习近平将访哈萨克斯坦并出席系列活动",abs:"本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...",ts:"1496806231000",url:"http://www.sznews.com/news/content/2016-12/18/content_14606309.htm"},{title:"习近平将访哈萨克斯坦并出席系列活动",abs:"本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...",ts:"1496806231000",url:"http://www.sznews.com/news/content/2016-12/18/content_14606309.htm"}]})},1500)})}}},451:function(t,e,n){"use strict";function i(){var t=new s.a({mode:"hash",base:"/lavas-demo/news-v2/",routes:[{path:"/",name:"home",component:u},{path:"/detail/:nid",name:"detail",component:l,meta:{}},{path:"/user",name:"user",component:p},{path:"/search",name:"search",component:d},{path:"/favor",name:"favor",component:f},{path:"*",name:"notFound",component:h}]});return t.beforeEach(function(e,n,i){if(t.app.$store&&t.app.$store.state.appShell.needPageTransition){var o=a(e,n)?"slide-left":"slide-right";t.app.$store.commit("appShell/"+c.o,{pageTransitionName:o})}i()}),t}function a(t,e){if(t.name&&-1!==v.indexOf(t.name))return w.length=0,!1;if(e.name&&-1!==v.indexOf(e.name))return w.push(t.fullPath),!0;if(t.name&&-1!==m.indexOf(t.name))return w.push(t.fullPath),!0;var n=w.indexOf(t.fullPath);return-1!==n?(w.length=n+1,!1):(w.push(t.fullPath),!0)}e.a=i;var o=n(55),r=n.n(o),s=n(435),c=n(81),u=function(){return n.e(0).then(n.bind(null,460))},l=function(){return n.e(1).then(n.bind(null,458))},h=function(){return n.e(4).then(n.bind(null,461))},p=function(){return n.e(5).then(n.bind(null,463))},d=function(){return n.e(2).then(n.bind(null,462))},f=function(){return n.e(3).then(n.bind(null,459))};r.a.use(s.a);var v=["home"],m=[],w=[]},452:function(t,e,n){"use strict";var i=n(55),a=(n.n(i),n(61)),o=n(453),r=n(454);e.a=new a.d.Store({modules:{appShell:o.a,news:r.a}})},453:function(t,e,n){"use strict";var i,a,o,r=n(79),s=n.n(r),c=n(123),u=n.n(c),l=n(81),h={needPageTransition:!0,isPageSwitching:!1,pageTransitionName:"",historyPageScrollTop:{}},p={enablePageTransition:function(t){(0,t.commit)(l.k,!0)},disablePageTransition:function(t){(0,t.commit)(l.l,!1)},setPageSwitching:function(t,e){(0,t.commit)(l.m,e)},saveScrollTop:function(t,e){var n=t.commit,i=e.path,a=e.scrollTop;n(l.n,{path:i,scrollTop:a})}},d=(i={},u()(i,l.m,function(t,e){t.isPageSwitching=e}),u()(i,l.o,function(t,e){var n=e.pageTransitionName;t.pageTransitionName=n}),u()(i,l.n,function(t,e){var n=e.path,i=e.scrollTop;t.historyPageScrollTop[n]=i}),i);e.a={namespaced:!0,actions:p,mutations:d,state:h,modules:{appHeader:{namespaced:!0,state:{show:!0,title:"Lavas",logoIcon:"",showMenu:!1,showFavor:!1,showBack:!1,showLogo:!0,actions:[]},actions:{setAppHeader:function(t,e){(0,t.commit)(l.p,e)}},mutations:u()({},l.p,function(t,e){t.appHeader=s()(t,e)})},appSidebar:{namespaced:!0,state:{show:!1,slideFrom:"left",title:{imageLeft:"",altLeft:"",svgLeft:"",iconLeft:"home",text:"个人中心",imageRight:"",altRight:"",svgRight:"",iconRight:""},width:.75,showWidthThreshold:.25,enableSwipeOut:!1,blocks:[{sublist:[{text:"收藏",icon:"star",route:"/favor",color:"orange"},{text:"历史",icon:"history",color:"teal"}],list:[{text:"消息通知",iconRight:"keyboard_arrow_right"},{text:"用户反馈",iconRight:"keyboard_arrow_right"},{text:"系统设置",iconRight:"keyboard_arrow_right"}]}]},actions:{showSidebar:function(t){(0,t.commit)(l.q,!0)},hideSidebar:function(t){(0,t.commit)(l.q,!1)},enableSwipeOut:function(t){(0,t.commit)(l.r,!0)},disableSwipeOut:function(t){(0,t.commit)(l.r,!1)}},mutations:(a={},u()(a,l.q,function(t,e){t.show=e}),u()(a,l.r,function(t,e){t.enableSwipeOut=e}),a)},appBottomNavigator:{namespaced:!0,state:{show:!0,navs:[{name:"home",icon:"home",text:"主页",active:!0,route:{name:"home",path:"/"}},{name:"user",icon:"person",text:"个人中心",route:"/user"}]},actions:{hideBottomNav:function(t){(0,t.commit)(l.s,{show:!1})},showBottomNav:function(t){(0,t.commit)(l.s,{show:!0})},activateBottomNav:function(t,e){(0,t.commit)(l.t,e)}},mutations:(o={},u()(o,l.t,function(t,e){t.navs=t.navs.map(function(t){return t.active=t.name===e,t})}),u()(o,l.s,function(t,e){t=s()(t,e)}),o)}}}},454:function(t,e,n){"use strict";function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments[1];C.setItem(t,T()(e))}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=C.getItem(t),n=void 0;try{n=JSON.parse(e)}catch(t){return}return n}function o(t){return new Date(parseInt(t,10)||Date.now()).toISOString().replace("T"," ").substr(0,16)}function r(t){return t.show=o(t.ts),t}var s,c,u=n(79),l=n.n(u),h=n(123),p=n.n(h),d=n(442),f=n.n(d),v=n(441),m=n.n(v),w=n(122),g=n.n(w),b=n(121),_=n.n(b),S=n(439),T=n.n(S),x=n(450),y=n(81),C=window.localStorage,E="menuTabsLocalDataKey",k=[{text:"热点",value:"remen"},{text:"娱乐",value:"yule"},{text:"体育",value:"tiyu"},{text:"军事",value:"junshi"},{text:"社会",value:"shehui"}],L=[{text:"汽车",value:"qiche"},{text:"国内",value:"guonei"},{text:"国际",value:"guoji"}];k=a(E)||k,L=a("otherMenuTabsLocalDataKey")||L,e.a={state:{loaded:!1,listFromCache:!1,data:{},newsDetail:{},newsFavorList:[],detailPageFavorStatus:!1,lastListLen:0,menuTabs:k,preview:{show:!1,images:[],index:0},otherMenuTabs:L,searchResultData:[],previewShow:!1},getters:{loaded:function(t){return t.loaded},listFromCache:function(t){return t.listFromCache},data:function(t){return t.data},category:function(t){return t.menuTabs.find(function(t){return t.active}).value},newsDetail:function(t){return t.newsDetail},lastListLen:function(t){return t.lastListLen},menuTabs:function(t){return t.menuTabs},newsFavorList:function(t){return t.newsFavorList},detailPageFavorStatus:function(t){return t.detailPageFavorStatus},preview:function(t){return t.preview},otherMenuTabs:function(t){return t.otherMenuTabs},searchResultData:function(t){return t.searchResultData},previewShow:function(t){return t.previewShow}},actions:(s={getNewsList:function(t,e){var n=this,i=t.commit;t.state;return _()(g.a.mark(function t(){var a;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.getNewsList({category:e});case 3:a=t.sent,i(y.a,!1),i(y.b,{category:e,data:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}},t,n,[[0,8]])}))()},selectTab:function(t,e){var n=this,i=t.commit,a=t.state;return _()(g.a.mark(function t(){var o;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i(y.c,e),!a.data[e]){t.next=4;break}return i(y.a,!0),t.abrupt("return");case 4:return t.prev=4,t.next=7,x.a.getNewsList({category:e});case 7:o=t.sent,i(y.b,{category:e,change:!0,data:o}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),console.log(t.t0);case 14:i(y.a,!1);case 15:case"end":return t.stop()}},t,n,[[4,11]])}))()},getNewsDetail:function(t,e){var n=this,i=t.commit,a=t.state;return _()(g.a.mark(function t(){var o,r,s,c,u;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=m()(a.data).reduce(function(t,e){return t=t.concat(a.data[e].news)},[]),o.length){t.next=9;break}return t.next=4,x.a.getNewsList({category:"remen"});case 4:r=t.sent,s=r.news,c=r.banner,u=r.topic,o=[].concat(f()(s),f()(c),f()(u));case 9:i(y.d,o.find(function(t){return t.nid===e.nid})||o[0]);case 10:case"end":return t.stop()}},t,n)}))()},getSearchResult:function(t,e){var n=this,i=t.commit;return _()(g.a.mark(function t(){var a;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.getSearchResult({query:e});case 2:a=t.sent,i(y.e,a);case 4:case"end":return t.stop()}},t,n)}))()},clearSearchResult:function(t){(0,t.commit)(y.e,[])},addFavorItem:function(t,e){var n=t.commit,i=t.state,a=i.newsFavorList;a.push({title:e.title,nid:e.nid,time:Date.now()}),C.setItem("FAVORITE_NEWS",T()(a)),n(y.f,a)},removeFavorItem:function(t,e){var n=t.commit,i=t.state,a=i.newsFavorList;a=a.filter(function(t,n){if(t.nid!==e.nid)return!0}),C.setItem("FAVORITE_NEWS",T()(a)),n(y.f,a)},getNewsFavorList:function(t){var e=t.commit,n=[];try{var i=C.getItem("FAVORITE_NEWS");i&&(n=JSON.parse(i))}catch(t){}e(y.f,n)},isFavored:function(t,e){var n=t.commit,i=t.state,a=i.newsFavorList;a=a.filter(function(t,n){if(t.nid===e.nid)return!0}),n(y.g,a.length>0)},showPreview:function(t,e){var n=t.commit,i=(t.state,e.imageurls.map(function(t){return{src:t.url}}));n(y.h,{show:!0,images:i,index:e.index})},closePreview:function(t){var e=t.commit;t.state;e(y.h,{show:!1})}},p()(s,y.i,function(t,e){var n=t.commit,i=e.value;n(y.i,i)}),p()(s,y.j,function(t,e){(0,t.commit)(y.j,e.value)}),p()(s,"changePreviewShow",function(t,e){(0,t.commit)("changePreviewShow",e)}),s),mutations:(c={},p()(c,y.b,function(t,e){var n=e.data,i=e.category,a=e.change;n.news=n.news.filter(function(t){return t.content.length}).map(r),n.banner=n.banner.filter(function(t){return t.content.length}).map(r),n.news&&n.news.length?(a?(t.data[i]=n,t.lastListLen=0):(t.lastListLen=t.data[i].news.length,t.data[i].news=[].concat(f()(t.data[i].news),f()(n.news)),t.loaded="loaded"),t.data=l()({},t.data)):t.loaded="complete"}),p()(c,y.a,function(t,e){t.listFromCache=e}),p()(c,y.d,function(t,e){t.newsDetail=e}),p()(c,y.c,function(t,e){t.menuTabs=t.menuTabs.map(function(t){return t.active=e===t.value,t})}),p()(c,y.f,function(t,e){t.newsFavorList=e}),p()(c,y.g,function(t,e){t.detailPageFavorStatus=e}),p()(c,y.h,function(t,e){t.preview=l()(t.preview,e)}),p()(c,y.j,function(t,e){t.menuTabs.forEach(function(n,a){if(e===n.value){var o=t.menuTabs.splice(a,1)[0];t.otherMenuTabs.unshift(o),i("otherMenuTabsLocalDataKey",t.otherMenuTabs)}}),i(E,t.menuTabs)}),p()(c,y.i,function(t,e){t.otherMenuTabs.forEach(function(n,a){if(e===n.value){var o=t.otherMenuTabs.splice(a,1)[0];t.menuTabs.push(o),i(E,t.menuTabs)}}),i("otherMenuTabsLocalDataKey",t.otherMenuTabs)}),p()(c,y.e,function(t,e){e=e.filter(function(t){return t.content.length}).map(r),t.searchResultData=e}),p()(c,"changePreviewShow",function(t,e){t.previewShow=e}),c)}},455:function(t,e,n){n(120),t.exports=n(172)},55:function(t,e){t.exports=Vue},81:function(t,e,n){"use strict";n.d(e,"k",function(){return i}),n.d(e,"l",function(){return a}),n.d(e,"m",function(){return o}),n.d(e,"o",function(){return r}),n.d(e,"p",function(){return s}),n.d(e,"s",function(){return c}),n.d(e,"t",function(){return u}),n.d(e,"q",function(){return l}),n.d(e,"n",function(){return h}),n.d(e,"r",function(){return p}),n.d(e,"b",function(){return d}),n.d(e,"a",function(){return f}),n.d(e,"c",function(){return v}),n.d(e,"d",function(){return m}),n.d(e,"f",function(){return w}),n.d(e,"g",function(){return g}),n.d(e,"h",function(){return b}),n.d(e,"j",function(){return _}),n.d(e,"i",function(){return S}),n.d(e,"e",function(){return T});var i="ENABLE_PAGE_TRANSITION",a="DISABLE_PAGE_TRANSITION",o="SET_PAGE_SWITCHING",r="SET_PAGE_TRANSITION_NAME",s="SET_APP_HEADER",c="SET_APP_BOTTOM_NAV",u="ACTIVATE_APP_BOTTOM_NAV",l="SET_SIDEBAR_VISIBILITY",h="SAVE_SCROLLTOP",p="SET_SWIPE_OUT",d="SET_NEWS_DATA",f="SET_LIST_FROM_CACHE",v="SET_NEWS_ACTIVE_TAB",m="SET_NEWS_DETAIL",w="SET_NEWS_FAVOR_LIST",g="SET_NEWS_DETAIL_FAVOR_STATUS",b="SET_PREVIEW_DATA",_="DEL_CATEGORY",S="ADD_CATEGORY",T="SET_SEARCH_RESULT"}},[455]);
//# sourceMappingURL=app.a3c351dd6ae1de068b2f.js.map