(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["onomatopeias"],{"9a3f":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"onomatopeias"},[t.hasFinished?e("div"):t._e(),t.hasFinished?t._e():e("TopBar",{attrs:{remainingTime:t.remainingTime}}),e("div",{staticClass:"container full-center without-definition",on:{click:t.next}},[t.currentOnomatopeia&&!t.waiting?[t.hasFinished?t._e():[e("div",{attrs:{id:"word-container"}},[e("div",{staticClass:"two-columns"},[e("ExpressWord",{attrs:{word:t.currentOnomatopeia.onomatopeia}}),e("ExpressDefinition",{attrs:{definition:t.currentOnomatopeia.subject,showDefinition:t.showDefinition,isHtml:!1}})],1)])],t.hasFinished?e("div",{attrs:{id:"alarm-overview-container"}},[e("AlarmOverlay")],1):t._e()]:t._e(),t.waiting?e("SquareGrid"):t._e()],2),e("BottomBar",{attrs:{word:t.currentOnomatopeia},on:{"show-definition":t.toogleDefinition,share:function(){}}}),t.hasFinished?e("div"):t._e()],1)},o=[],a=e("9ab4"),r=e("1b40"),s=e("7ae8"),c=e("0402"),u=e("03aa"),h=e("b043"),d=e("c386"),l=e("40c5"),p=e("d58b"),m=e("947c"),f=e("14f4"),b=e("85ee"),w=e("138b"),O=e("8e3d"),g=e("f61a"),v=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.currentOnomatopeia=null,n.waiting=!1,n.remainingTime=0,n.timer=new m["a"](n.onFinish,n.tickCounter),n.hasFinished=!1,n.metronomeWorking=!1,n.count=0,n.saveCounter=0,n.color="",n.enabledBackButton=!1,n.showDefinition=!1,n}return Object(a["c"])(n,t),n.prototype.mounted=function(){return Object(a["a"])(this,void 0,Promise,(function(){return Object(a["d"])(this,(function(t){return this.next(),this.timer.initTimer(),[2]}))}))},n.prototype.toogleDefinition=function(){g["a"].log("onomatopeia - toogleDefinition"),this.showDefinition=!this.showDefinition},n.prototype.tickCounter=function(t){this.remainingTime=t},n.prototype.onFinish=function(t){t&&this.executeAtEndAction(t)},n.prototype.executeAtEndAction=function(t){switch(g["a"].log("onomatopeia -  executeAtEndAction",t),g["a"].log("onomatopeia -  executeAtEndAction",f["a"]),f["a"].getInstance().actionAtEnd){case b["a"].ActionsAtEnd.NEXT_ITEM:f["a"].getInstance().soundOn&&w["a"].play(b["a"].Sounds.TIMEOUT),this.next();break;case b["a"].ActionsAtEnd.ALARM:this.hasFinished=t,f["a"].getInstance().soundOn&&w["a"].play(b["a"].Sounds.TIMEOUT);break;default:break}},n.prototype.next=function(){return Object(a["a"])(this,void 0,Promise,(function(){var t;return Object(a["d"])(this,(function(n){switch(n.label){case 0:return this.count>f["a"].getInstance().countsBeforeAds&&(this.count=0),this.count++,this.hasFinished=!1,this.waiting=!0,[4,l["a"].randomOnomatopeia()];case 1:return t=n.sent(),this.currentOnomatopeia=t.body,this.waiting=!1,f["a"].getInstance().changeColorOn&&(this.color=O["a"].next()),this.enabledBackButton=!0,this.timer.resetTimer(),[2]}}))}))},n.prototype.before=function(){return Object(a["a"])(this,void 0,Promise,(function(){var t;return Object(a["d"])(this,(function(n){switch(n.label){case 0:return[4,l["a"].randomOnomatopeia()];case 1:return t=n.sent(),this.currentOnomatopeia=t.body,f["a"].getInstance().changeColorOn&&(this.color=O["a"].before()),this.enabledBackButton=!1,[2]}}))}))},n=Object(a["b"])([Object(r["a"])({components:{ExpressWord:s["a"],ExpressDefinition:c["a"],SquareGrid:p["a"],AlarmOverlay:u["a"],TopBar:h["a"],BottomBar:d["a"]}})],n),n}(r["d"]),A=v,E=A,x=e("2877"),y=Object(x["a"])(E,i,o,!1,null,null,null);n["default"]=y.exports}}]);
//# sourceMappingURL=onomatopeias.fda3a314.js.map