"use strict";(self["webpackChunkpalabras_aleatorias_pwa"]=self["webpackChunkpalabras_aleatorias_pwa"]||[]).push([[661],{546:function(t,n,e){e.r(n),e.d(n,{default:function(){return C}});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"saved page-content"},[e("div",{staticClass:"container"},[t.saved.length&&!t.waiting?e("div",{staticClass:"words-list"},t._l(t.saved,(function(n){return e("div",{key:n.Word,staticClass:"word-item"},[e("ExpressWord",{attrs:{word:n.Word}}),e("UnSavedButton",{attrs:{word:n},on:{removed:function(n){return t.refresh()}}})],1)})),0):e("p",[t._v("Todavía no has agregado ninguna palabra favorita")])])])},r=[],s=e(655),i=e(4028),o=e(2213),l=e(4119),u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"btn btn-secondary",on:{click:t.remove}},[e("i",{staticClass:"fas fa-trash"}),e("span",{staticClass:"hidden-on-mobile"},[t._v("Eliminar de Favoritos")])])},c=[],d=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return(0,s.ZT)(n,t),n.prototype.remove=function(){o.Z.remove(this.word),this.$emit("removed")},(0,s.gn)([(0,i.fI)()],n.prototype,"word",void 0),n=(0,s.gn)([i.wA],n),n}(i.w3),p=d,v=p,f=e(3736),h=(0,f.Z)(v,u,c,!1,null,null,null),w=h.exports,g=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.saved=[],n.waiting=!0,n}return(0,s.ZT)(n,t),n.prototype.mounted=function(){this.refresh()},n.prototype.refresh=function(){this.waiting=!0,this.saved=o.Z.getAll(),this.waiting=!1},n=(0,s.gn)([(0,i.wA)({components:{ExpressWord:l.Z,UnSavedButton:w}})],n),n}(i.w3),m=g,_=m,b=(0,f.Z)(_,a,r,!1,null,null,null),C=b.exports}}]);
//# sourceMappingURL=saved-legacy.84d56f81.js.map