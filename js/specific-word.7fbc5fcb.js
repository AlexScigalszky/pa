"use strict";(self["webpackChunkpalabras_aleatorias_pwa"]=self["webpackChunkpalabras_aleatorias_pwa"]||[]).push([[182],{3435:function(t,i,n){n.r(i),n.d(i,{default:function(){return D}});var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"specific-word"},[t.hasFinished?n("div"):t._e(),n("div",{staticClass:"top-bar"}),n("div",{staticClass:"container full-center",class:t.showDefinition?"with-definition":"without-definition"},[t.currentWord&&!t.waiting?[t.hasFinished?t._e():[n("div",{attrs:{id:"word-container"}},[n("div",{staticClass:"two-columns"},[n("ExpressWord",{attrs:{word:t.currentWord.Word}}),n("ExpressDefinition",{attrs:{definition:t.currentWord.DefinitionMD,showDefinition:t.showDefinition}})],1)])]]:t._e(),t.waiting?n("SquareGrid"):t._e()],2),n("BottomBar",{attrs:{word:t.currentWord},on:{"show-definition":t.toogleDefinition,share:function(){}}}),t.hasFinished?n("div"):t._e()],1)},o=[],r=n(655),s=n(4028),a=n(4119),u=n(5805),l=n(7215),c=n(994),h=n(3550),d=n(9329),f=n(2944),w=function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.currentWord=null,i.waiting=!1,i.hasFinished=!1,i.enabledBackButton=!1,i.showDefinition=!1,i}return(0,r.ZT)(i,t),i.prototype.mounted=function(){return(0,r.mG)(this,void 0,Promise,(function(){var t,i,n;return(0,r.Jh)(this,(function(e){switch(e.label){case 0:return t="".concat(this.$route.query.w),this.waiting=!0,[4,h.Z.get(t)];case 1:return i=e.sent(),i.body.length>0?(this.currentWord=i.body[0],this.waiting=!1,[3,4]):[3,2];case 2:return n=new c.s,n.title=t,n.word=t,n.author="web app user - specific word not found",[4,h.Z.addComment(n).then((function(t){f.Z.log("comments - saved",t)}))];case 3:e.sent(),this.$router.push("/"),e.label=4;case 4:return[2]}}))}))},i.prototype.toogleDefinition=function(){f.Z.log("home - toogleDefinition"),this.showDefinition=!this.showDefinition},i=(0,r.gn)([(0,s.wA)({components:{ExpressWord:a.Z,ExpressDefinition:u.Z,SquareGrid:d.Yz,BottomBar:l.Z}})],i),i}(s.w3),p=w,g=p,m=n(3736),v=(0,m.Z)(g,e,o,!1,null,null,null),D=v.exports},994:function(t,i,n){n.d(i,{s:function(){return e}});var e=function(){function t(){this.word=null,this.related=null,this.definition="",this.author="web app user",this.title=null,this.done=!1,this.language="es",this.currentWord=null,this.time=new Date,this.onesigalkey=null}return t}()}}]);
//# sourceMappingURL=specific-word.7fbc5fcb.js.map