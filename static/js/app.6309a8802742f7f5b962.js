webpackJsonp([3],{NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("7+uW");t("feh2");o.a.mixin({data:function(){return{isLoading:!1,isLogin:!1,isMobile:null}},methods:{checkMobileResolution:function(){this.isMobile=window.innerWidth<769},comingSoon:function(){alert("서비스 준비중입니다.")},goBack:function(){this.$router.go(-1)},setCookie:function(e,n,t){var o=new Date;o.setDate(o.getDate()+t),document.cookie=e+"="+n+";Expires="+o.toUTCString()},getCookie:function(e){var n=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return n?n[2]:null},delCookie:function(e){var n=new Date;n.setDate(n.getDate()-100),document.cookie=e+"=;Expires="+n.toUTCString()},handleResize:function(){var e=this;this.$nextTick(function(){e.checkMobileResolution()})}},computed:{mobileDevice:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("android")>-1?"android":e.indexOf("iphone")>-1||e.indexOf("ipad")>-1||e.indexOf("ipod")>-1?"ios":"other"}},watch:{},created:function(){this.checkMobileResolution()},mounted:function(){window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)}});var i={render:function(){var e=this.$createElement;return(this._self._c||e)("router-view")},staticRenderFns:[]},r=t("VU/8")({name:"App"},i,!1,null,null,null).exports,a=t("/ocq");o.a.use(a.a);var c=new a.a({mode:"history",routes:[{path:"/",name:"Main",component:function(){return t.e(0).then(t.bind(null,"VZrM"))}},{path:"*",redirect:"/error/404"},{path:"/error/:code",name:"Error",component:function(){return t.e(1).then(t.bind(null,"xLdf"))}}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:c,components:{App:r},template:"<App/>"})},feh2:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.6309a8802742f7f5b962.js.map