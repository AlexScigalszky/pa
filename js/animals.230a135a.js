(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["animals"],{7652:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"animals"},[t.hasFinished?e("div"):t._e(),t.hasFinished?t._e():e("TopBar",{attrs:{remainingTime:t.remainingTime}}),e("div",{staticClass:"container full-center without-definition",on:{click:t.next}},[t.currentName&&!t.waiting?[t.hasFinished?t._e():[e("div",{attrs:{id:"word-container"}},[e("div",{staticClass:"two-columns"},[e("ExpressWord",{attrs:{word:t.currentName.name}})],1)])],t.hasFinished?e("div",{attrs:{id:"alarm-overview-container"}},[e("AlarmOverlay")],1):t._e()]:t._e(),t.waiting?e("SquareGrid"):t._e()],2),t.hasFinished?e("div"):t._e()],1)},a=[],o=e("9ab4"),s=e("1b40"),r=e("7ae8"),c=e("03aa"),u=e("b043"),h=e("40c5"),d=e("d58b"),l=e("947c"),m=e("14f4"),f=e("85ee"),b=e("138b"),p=e("8e3d"),g=e("f61a"),w=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.currentName=null,n.waiting=!1,n.remainingTime=0,n.timer=new l["a"](n.onFinish,n.tickCounter),n.hasFinished=!1,n.metronomeWorking=!1,n.count=0,n.saveCounter=0,n.color="",n.enabledBackButton=!1,n.showDefinition=!1,n}return Object(o["c"])(n,t),n.prototype.mounted=function(){return Object(o["a"])(this,void 0,Promise,(function(){return Object(o["d"])(this,(function(t){return this.next(),this.timer.initTimer(),[2]}))}))},n.prototype.toogleDefinition=function(){g["a"].log("names - toogleDefinition"),this.showDefinition=!this.showDefinition},n.prototype.tickCounter=function(t){this.remainingTime=t},n.prototype.onFinish=function(t){t&&this.executeAtEndAction(t)},n.prototype.executeAtEndAction=function(t){switch(g["a"].log("names -  executeAtEndAction",t),g["a"].log("names -  executeAtEndAction",m["a"]),m["a"].getInstance().actionAtEnd){case f["a"].ActionsAtEnd.NEXT_ITEM:m["a"].getInstance().soundOn&&b["a"].play(f["a"].Sounds.TIMEOUT),this.next();break;case f["a"].ActionsAtEnd.ALARM:this.hasFinished=t,m["a"].getInstance().soundOn&&b["a"].play(f["a"].Sounds.TIMEOUT);break;default:break}},n.prototype.next=function(){return Object(o["a"])(this,void 0,Promise,(function(){var t;return Object(o["d"])(this,(function(n){switch(n.label){case 0:return this.count>m["a"].getInstance().countsBeforeAds&&(this.count=0),this.count++,this.hasFinished=!1,this.waiting=!0,[4,h["a"].randomAnimal()];case 1:return t=n.sent(),this.currentName=t.body,this.waiting=!1,m["a"].getInstance().changeColorOn&&(this.color=p["a"].next()),this.enabledBackButton=!0,this.timer.resetTimer(),[2]}}))}))},n.prototype.before=function(){return Object(o["a"])(this,void 0,Promise,(function(){var t;return Object(o["d"])(this,(function(n){switch(n.label){case 0:return[4,h["a"].randomAnimal()];case 1:return t=n.sent(),this.currentName=t.body,m["a"].getInstance().changeColorOn&&(this.color=p["a"].before()),this.enabledBackButton=!1,[2]}}))}))},n=Object(o["b"])([Object(s["a"])({components:{ExpressWord:r["a"],SquareGrid:d["a"],AlarmOverlay:c["a"],TopBar:u["a"]}})],n),n}(s["d"]),v=w,A=v,O=e("2877"),y=Object(O["a"])(A,i,a,!1,null,null,null);n["default"]=y.exports}}]);
//# sourceMappingURL=animals.230a135a.js.map