(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["saved"],{"20de":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"saved page-content"},[n("div",{staticClass:"container"},[t.saved.length&&!t.waiting?n("div",{staticClass:"words-list"},t._l(t.saved,(function(e){return n("div",{key:e.Word,staticClass:"word-item"},[n("ExpressWord",{attrs:{word:e.Word}}),n("UnSavedButton",{attrs:{word:e},on:{removed:function(e){return t.refresh()}}})],1)})),0):n("p",[t._v("Todavía no has agregado ninguna palabra favorita")])])])},a=[],o=n("9ab4"),s=n("1b40"),r=n("0824"),c=n("7ae8"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn btn-secondary",on:{click:t.remove}},[n("i",{staticClass:"fas fa-trash"}),n("span",{staticClass:"hidden-on-mobile"},[t._v("Eliminar de Favoritos")])])},l=[],d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(o["c"])(e,t),e.prototype.remove=function(){r["a"].remove(this.word),this.$emit("removed")},Object(o["b"])([Object(s["c"])()],e.prototype,"word",void 0),e=Object(o["b"])([s["a"]],e),e}(s["d"]),h=d,p=h,f=n("2877"),m=Object(f["a"])(p,u,l,!1,null,null,null),b=m.exports,v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.saved=[],e.waiting=!0,e}return Object(o["c"])(e,t),e.prototype.mounted=function(){this.refresh()},e.prototype.refresh=function(){this.waiting=!0,this.saved=r["a"].getAll(),this.waiting=!1},e=Object(o["b"])([Object(s["a"])({components:{ExpressWord:c["a"],UnSavedButton:b}})],e),e}(s["d"]),g=v,w=g,O=Object(f["a"])(w,i,a,!1,null,null,null);e["default"]=O.exports},"2d3b":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"saved page-content"},[n("SearchForm",{on:{"search-word":t.search}}),n("div",{staticClass:"container"},[t.results&&t.results.body&&t.results.body.length&&!t.waiting?n("div",{staticClass:"words-list"},t._l(t.results.body,(function(t){return n("div",{key:t.Word,staticClass:"word-item"},[n("ExpressWord",{attrs:{word:t.Word}}),n("SavedButton",{attrs:{word:t}})],1)})),0):n("p",{staticClass:"full-center"},[t._v(" No se encuentran resultados para esta búsqueda ")])])],1)},a=[],o=n("9ab4"),s=n("1b40"),r=n("7ae8"),c=n("177b"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",placeholder:"Escribe parte de una palabra"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),n("button",{staticClass:"btn",on:{click:t.search}},[n("i",{staticClass:"fas fa-search"}),n("span",{staticClass:"hidden-on-mobile"},[t._v("Buscar")])])])},l=[],d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.query="",e}return Object(o["c"])(e,t),e.prototype.search=function(){console.log("search",this.query),this.$emit("search-word",this.query)},e=Object(o["b"])([s["a"]],e),e}(s["d"]),h=d,p=h,f=n("2877"),m=Object(f["a"])(p,u,l,!1,null,null,null),b=m.exports,v=n("40c5"),g=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.results={},e.waiting=!0,e}return Object(o["c"])(e,t),e.prototype.search=function(t){return Object(o["a"])(this,void 0,Promise,(function(){var e;return Object(o["d"])(this,(function(n){switch(n.label){case 0:return this.waiting=!0,e=this,[4,v["a"].search(t)];case 1:return e.results=n.sent(),this.waiting=!1,[2]}}))}))},e=Object(o["b"])([Object(s["a"])({components:{SearchForm:b,ExpressWord:r["a"],SavedButton:c["a"]}})],e),e}(s["d"]),w=g,O=w,y=Object(f["a"])(O,i,a,!1,null,null,null);e["default"]=y.exports},"9a3f":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"onomatopeias"},[t.hasFinished?n("div"):t._e(),t.hasFinished?t._e():n("TopBar",{attrs:{remainingTime:t.remainingTime}}),n("div",{staticClass:"container full-center without-definition",on:{click:t.next}},[t.currentOnomatopeia&&!t.waiting?n("div",[t.hasFinished?t._e():n("div",[n("div",{attrs:{id:"word-container"}},[n("div",{staticClass:"two-columns"},[n("ExpressWord",{attrs:{word:t.currentOnomatopeia.onomatopeia}}),n("ExpressDefinition",{attrs:{definition:t.currentOnomatopeia.subject,showDefinition:t.showDefinition,isHtml:!1}})],1)])]),t.hasFinished?n("div",{attrs:{id:"alarm-overview-container"}},[n("AlarmOverlay")],1):t._e()]):t._e(),t.waiting?n("SquareGrid"):t._e()],1),n("BottomBar",{attrs:{word:t.currentOnomatopeia},on:{"show-definition":t.toogleDefinition,share:function(){}}}),t.hasFinished?n("div"):t._e()],1)},a=[],o=n("9ab4"),s=n("1b40"),r=n("7ae8"),c=n("0402"),u=n("03aa"),l=n("b043"),d=n("c386"),h=n("40c5"),p=n("d58b"),f=n("947c"),m=n("14f4"),b=n("85ee"),v=n("138b"),g=n("8e3d"),w=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.currentOnomatopeia=null,e.waiting=!1,e.remainingTime=0,e.timer=new f["a"](e.onFinish,e.tickCounter),e.hasFinished=!1,e.metronomeWorking=!1,e.count=0,e.saveCounter=0,e.color="",e.enabledBackButton=!1,e.showDefinition=!1,e}return Object(o["c"])(e,t),e.prototype.mounted=function(){return Object(o["a"])(this,void 0,Promise,(function(){return Object(o["d"])(this,(function(t){return this.next(),this.timer.initTimer(),[2]}))}))},e.prototype.toogleDefinition=function(){console.log("onomatopeia - toogleDefinition"),this.showDefinition=!this.showDefinition},e.prototype.tickCounter=function(t){this.remainingTime=t},e.prototype.onFinish=function(t){t&&this.executeAtEndAction(t)},e.prototype.executeAtEndAction=function(t){switch(console.log("onomatopeia -  executeAtEndAction",t),console.log("onomatopeia -  executeAtEndAction",m["a"]),m["a"].getInstance().actionAtEnd){case b["a"].ActionsAtEnd.NEXT_ITEM:m["a"].getInstance().soundOn&&v["a"].play(b["a"].Sounds.TIMEOUT),this.next();break;case b["a"].ActionsAtEnd.ALARM:this.hasFinished=t,m["a"].getInstance().soundOn&&v["a"].play(b["a"].Sounds.TIMEOUT);break;default:break}},e.prototype.next=function(){return Object(o["a"])(this,void 0,Promise,(function(){var t;return Object(o["d"])(this,(function(e){switch(e.label){case 0:return this.count>m["a"].getInstance().countsBeforeAds&&(this.count=0),this.count++,this.hasFinished=!1,this.waiting=!0,[4,h["a"].randomOnomatopeia()];case 1:return t=e.sent(),this.currentOnomatopeia=t.body,this.waiting=!1,m["a"].getInstance().changeColorOn&&(this.color=g["a"].next()),this.enabledBackButton=!0,this.timer.resetTimer(),[2]}}))}))},e.prototype.before=function(){return Object(o["a"])(this,void 0,Promise,(function(){var t;return Object(o["d"])(this,(function(e){switch(e.label){case 0:return[4,h["a"].randomOnomatopeia()];case 1:return t=e.sent(),this.currentOnomatopeia=t.body,m["a"].getInstance().changeColorOn&&(this.color=g["a"].before()),this.enabledBackButton=!1,[2]}}))}))},e=Object(o["b"])([Object(s["a"])({components:{ExpressWord:r["a"],ExpressDefinition:c["a"],SquareGrid:p["a"],AlarmOverlay:u["a"],TopBar:l["a"],BottomBar:d["a"]}})],e),e}(s["d"]),O=w,y=O,E=n("2877"),j=Object(E["a"])(y,i,a,!1,null,null,null);e["default"]=j.exports},fd5c:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"names"},[t.hasFinished?n("div"):t._e(),t.hasFinished?t._e():n("TopBar",{attrs:{remainingTime:t.remainingTime}}),n("div",{staticClass:"container full-center without-definition",on:{click:t.next}},[t.currentName&&!t.waiting?n("div",[t.hasFinished?t._e():n("div",[n("div",{attrs:{id:"word-container"}},[n("div",{staticClass:"two-columns"},[n("ExpressWord",{attrs:{word:t.currentName.name}})],1)])]),t.hasFinished?n("div",{attrs:{id:"alarm-overview-container"}},[n("AlarmOverlay")],1):t._e()]):t._e(),t.waiting?n("SquareGrid"):t._e()],1),t.hasFinished?n("div"):t._e()],1)},a=[],o=n("9ab4"),s=n("1b40"),r=n("7ae8"),c=n("03aa"),u=n("b043"),l=n("40c5"),d=n("d58b"),h=n("947c"),p=n("14f4"),f=n("85ee"),m=n("138b"),b=n("8e3d"),v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.currentName=null,e.waiting=!1,e.remainingTime=0,e.timer=new h["a"](e.onFinish,e.tickCounter),e.hasFinished=!1,e.metronomeWorking=!1,e.count=0,e.saveCounter=0,e.color="",e.enabledBackButton=!1,e.showDefinition=!1,e}return Object(o["c"])(e,t),e.prototype.mounted=function(){return Object(o["a"])(this,void 0,Promise,(function(){return Object(o["d"])(this,(function(t){return this.next(),this.timer.initTimer(),[2]}))}))},e.prototype.toogleDefinition=function(){console.log("names - toogleDefinition"),this.showDefinition=!this.showDefinition},e.prototype.tickCounter=function(t){this.remainingTime=t},e.prototype.onFinish=function(t){t&&this.executeAtEndAction(t)},e.prototype.executeAtEndAction=function(t){switch(console.log("names -  executeAtEndAction",t),console.log("names -  executeAtEndAction",p["a"]),p["a"].getInstance().actionAtEnd){case f["a"].ActionsAtEnd.NEXT_ITEM:p["a"].getInstance().soundOn&&m["a"].play(f["a"].Sounds.TIMEOUT),this.next();break;case f["a"].ActionsAtEnd.ALARM:this.hasFinished=t,p["a"].getInstance().soundOn&&m["a"].play(f["a"].Sounds.TIMEOUT);break;default:break}},e.prototype.next=function(){return Object(o["a"])(this,void 0,Promise,(function(){var t;return Object(o["d"])(this,(function(e){switch(e.label){case 0:return this.count>p["a"].getInstance().countsBeforeAds&&(this.count=0),this.count++,this.hasFinished=!1,this.waiting=!0,[4,l["a"].randomName()];case 1:return t=e.sent(),this.currentName=t.body,this.waiting=!1,p["a"].getInstance().changeColorOn&&(this.color=b["a"].next()),this.enabledBackButton=!0,this.timer.resetTimer(),[2]}}))}))},e.prototype.before=function(){return Object(o["a"])(this,void 0,Promise,(function(){var t;return Object(o["d"])(this,(function(e){switch(e.label){case 0:return[4,l["a"].randomName()];case 1:return t=e.sent(),this.currentName=t.body,p["a"].getInstance().changeColorOn&&(this.color=b["a"].before()),this.enabledBackButton=!1,[2]}}))}))},e=Object(o["b"])([Object(s["a"])({components:{ExpressWord:r["a"],SquareGrid:d["a"],AlarmOverlay:c["a"],TopBar:u["a"]}})],e),e}(s["d"]),g=v,w=g,O=n("2877"),y=Object(O["a"])(w,i,a,!1,null,null,null);e["default"]=y.exports}}]);
//# sourceMappingURL=saved.fadbba00.js.map