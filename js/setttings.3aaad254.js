(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["setttings"],{"26d3":function(e,t,n){"use strict";n.r(t),n.d(t,"FormModel",(function(){return l}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"settings page-content"},[n("div",{staticClass:"container"},[n("h1",[e._v("Ajustes")]),n("form",{on:{submit:e.submit}},[n("fieldset",{staticClass:"fieldset-radios"},[n("h3",[e._v("Al finalizar el tiempo")]),n("label",{attrs:{for:"alarm"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model.action,expression:"model.action"}],attrs:{type:"radio",id:"alarm",value:"alarm"},domProps:{checked:e._q(e.model.action,"alarm")},on:{change:function(t){return e.$set(e.model,"action","alarm")}}}),e._v(" Alarma ")]),n("label",{attrs:{for:"next"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model.action,expression:"model.action"}],attrs:{type:"radio",id:"next",value:"next"},domProps:{checked:e._q(e.model.action,"next")},on:{change:function(t){return e.$set(e.model,"action","next")}}}),e._v(" Siguiente palabra ")]),n("label",{attrs:{for:"none"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model.action,expression:"model.action"}],attrs:{type:"radio",id:"none",value:"none"},domProps:{checked:e._q(e.model.action,"none")},on:{change:function(t){return e.$set(e.model,"action","none")}}}),e._v(" No hacer nada ")])]),n("fieldset",{staticClass:"fieldset-radios"},[n("h3",[e._v("Tamaño de las palabras")]),n("label",{attrs:{for:"small"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model.fontSize,expression:"model.fontSize"}],attrs:{type:"radio",id:"small",value:"small"},domProps:{checked:e._q(e.model.fontSize,"small")},on:{change:function(t){return e.$set(e.model,"fontSize","small")}}}),e._v(" Pequeño ")]),n("label",{attrs:{for:"normal"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model.fontSize,expression:"model.fontSize"}],attrs:{type:"radio",id:"normal",value:"normal"},domProps:{checked:e._q(e.model.fontSize,"normal")},on:{change:function(t){return e.$set(e.model,"fontSize","normal")}}}),e._v(" Normal ")]),n("label",{attrs:{for:"large"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model.fontSize,expression:"model.fontSize"}],attrs:{type:"radio",id:"large",value:"large"},domProps:{checked:e._q(e.model.fontSize,"large")},on:{change:function(t){return e.$set(e.model,"fontSize","large")}}}),e._v(" Grande ")])]),n("fieldset",[n("h3",[e._v("Sonido")]),n("label",{attrs:{for:"sound"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model.sound,expression:"model.sound"}],attrs:{type:"checkbox",id:"sound",value:"sound"},domProps:{checked:Array.isArray(e.model.sound)?e._i(e.model.sound,"sound")>-1:e.model.sound},on:{change:function(t){var n=e.model.sound,o=t.target,i=!!o.checked;if(Array.isArray(n)){var a="sound",r=e._i(n,a);o.checked?r<0&&e.$set(e.model,"sound",n.concat([a])):r>-1&&e.$set(e.model,"sound",n.slice(0,r).concat(n.slice(r+1)))}else e.$set(e.model,"sound",i)}}}),e.model.sound?e._e():n("span",[e._v(" Inactivo")]),e.model.sound?n("span",[e._v(" Activo")]):e._e()])]),n("fieldset",[n("h3",[e._v("Tiempo de espera")]),n("label",{attrs:{for:"reminingTime"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model.reminingTime,expression:"model.reminingTime"}],attrs:{type:"number",id:"reminingTime",value:"reminingTime"},domProps:{value:e.model.reminingTime},on:{input:function(t){t.target.composing||e.$set(e.model,"reminingTime",t.target.value)}}}),e._v(" Segundos ")])]),e._m(0)])])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fieldset",[n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Guardar")])])}],a=n("9ab4"),r=n("1b40"),s=n("14f4"),l=function(){function e(){this.action="",this.sound=!1,this.reminingTime=100,this.fontSize="normal"}return e}(),d=function(e){function t(){var t=e.call(this)||this;t.model=new l;var n=s["a"].getInstance();return t.model.action=n.actionAtEnd,t.model.sound=n.soundOn,t.model.reminingTime=n.timeRemaning,t.model.fontSize=n.fontSize,t}return Object(a["c"])(t,e),t.prototype.submit=function(){console.info("settings",this.model);var e=s["a"].getInstance();e.setTimeout(this.model.reminingTime),e.setActionAtEnd(this.model.action),e.setSoundOn(this.model.sound),e.setFontSize(this.model.fontSize),this.$router.push("/")},t=Object(a["b"])([r["a"]],t),t}(r["d"]),m=d,c=m,u=n("2877"),f=Object(u["a"])(c,o,i,!1,null,null,null);t["default"]=f.exports},"7aa0":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"specific-word"},[e.hasFinished?n("div"):e._e(),n("div",{staticClass:"top-bar"}),n("div",{staticClass:"container full-center",class:e.showDefinition?"with-definition":"without-definition"},[e.currentWord&&!e.waiting?[e.hasFinished?e._e():[n("div",{attrs:{id:"word-container"}},[n("div",{staticClass:"two-columns"},[n("ExpressWord",{attrs:{word:e.currentWord.Word}}),n("ExpressDefinition",{attrs:{definition:e.currentWord.DefinitionMD,showDefinition:e.showDefinition}})],1)])]]:e._e(),e.waiting?n("SquareGrid"):e._e()],2),n("BottomBar",{attrs:{word:e.currentWord},on:{"show-definition":e.toogleDefinition,share:function(){}}}),e.hasFinished?n("div"):e._e()],1)},i=[],a=n("9ab4"),r=n("1b40"),s=n("7ae8"),l=n("0402"),d=n("c386"),m=n("40c5"),c=n("d58b"),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.currentWord=null,t.waiting=!1,t.hasFinished=!1,t.enabledBackButton=!1,t.showDefinition=!1,t}return Object(a["c"])(t,e),t.prototype.mounted=function(){return Object(a["a"])(this,void 0,Promise,(function(){var e,t;return Object(a["d"])(this,(function(n){switch(n.label){case 0:return e=this.$route.params.word,this.waiting=!0,[4,m["a"].get(e)];case 1:return t=n.sent(),this.currentWord=t.body.length>0?t.body[0]:null,this.waiting=!1,[2]}}))}))},t.prototype.toogleDefinition=function(){console.log("home - toogleDefinition"),this.showDefinition=!this.showDefinition},t=Object(a["b"])([Object(r["a"])({components:{ExpressWord:s["a"],ExpressDefinition:l["a"],SquareGrid:c["a"],BottomBar:d["a"]}})],t),t}(r["d"]),f=u,v=f,h=n("2877"),p=Object(h["a"])(v,o,i,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=setttings.3aaad254.js.map