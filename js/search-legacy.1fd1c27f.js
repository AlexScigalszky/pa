"use strict";(self["webpackChunkpalabras_aleatorias_pwa"]=self["webpackChunkpalabras_aleatorias_pwa"]||[]).push([[464],{6029:function(t,e,s){s.r(e),s.d(e,{default:function(){return q}});var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"saved page-content"},[s("SearchForm",{on:{"search-word":t.search}}),s("div",{staticClass:"container"},[t.results&&t.results.body&&t.results.body.length&&!t.waiting?s("div",{staticClass:"words-list"},t._l(t.results.body,(function(t){return s("div",{key:t.Word,staticClass:"word-item"},[s("ExpressWord",{attrs:{word:t.Word}}),s("SavedButton",{attrs:{word:t}})],1)})),0):s("p",{staticClass:"full-center"},[t._v(" No se encuentran resultados para esta búsqueda ")])])],1)},a=[],n=s(655),i=s(4028),u=s(4119),l=s(818),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",placeholder:"Escribe parte de una palabra"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),s("button",{staticClass:"btn",on:{click:t.search}},[s("i",{staticClass:"fas fa-search"}),s("span",{staticClass:"hidden-on-mobile"},[t._v("Buscar")])])])},c=[],d=s(2944),h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.query="",e}return(0,n.ZT)(e,t),e.prototype.search=function(){d.Z.log("search",this.query),this.$emit("search-word",this.query)},e=(0,n.gn)([i.wA],e),e}(i.w3),p=h,f=p,v=s(3736),w=(0,v.Z)(f,o,c,!1,null,null,null),m=w.exports,y=s(3550),b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.results={},e.waiting=!0,e}return(0,n.ZT)(e,t),e.prototype.search=function(t){return(0,n.mG)(this,void 0,Promise,(function(){var e;return(0,n.Jh)(this,(function(s){switch(s.label){case 0:return this.waiting=!0,e=this,[4,y.Z.search(t)];case 1:return e.results=s.sent(),this.waiting=!1,[2]}}))}))},e=(0,n.gn)([(0,i.wA)({components:{SearchForm:m,ExpressWord:u.Z,SavedButton:l.Z}})],e),e}(i.w3),g=b,C=g,_=(0,v.Z)(C,r,a,!1,null,null,null),q=_.exports}}]);
//# sourceMappingURL=search-legacy.1fd1c27f.js.map