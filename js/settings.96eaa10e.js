(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["settings"],{"26d3":function(e,o,n){"use strict";n.r(o),n.d(o,"FormModel",(function(){return d}));var t=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"settings page-content"},[n("div",{staticClass:"container"},[n("h1",[e._v("Ajustes")]),n("form",{on:{submit:e.submit}},[n("fieldset",{staticClass:"fieldset-radios"},[n("h3",[e._v("Al finalizar el tiempo")]),n("label",{attrs:{for:"alarm"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model.action,expression:"model.action"}],attrs:{type:"radio",id:"alarm",value:"alarm"},domProps:{checked:e._q(e.model.action,"alarm")},on:{change:function(o){return e.$set(e.model,"action","alarm")}}}),e._v(" Alarma ")]),n("label",{attrs:{for:"next"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model.action,expression:"model.action"}],attrs:{type:"radio",id:"next",value:"next"},domProps:{checked:e._q(e.model.action,"next")},on:{change:function(o){return e.$set(e.model,"action","next")}}}),e._v(" Siguiente palabra ")]),n("label",{attrs:{for:"none"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model.action,expression:"model.action"}],attrs:{type:"radio",id:"none",value:"none"},domProps:{checked:e._q(e.model.action,"none")},on:{change:function(o){return e.$set(e.model,"action","none")}}}),e._v(" No hacer nada ")])]),n("fieldset",{staticClass:"fieldset-radios"},[n("h3",[e._v("Tamaño de las palabras")]),n("label",{attrs:{for:"small"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model.fontSize,expression:"model.fontSize"}],attrs:{type:"radio",id:"small",value:"small"},domProps:{checked:e._q(e.model.fontSize,"small")},on:{change:function(o){return e.$set(e.model,"fontSize","small")}}}),e._v(" Pequeño ")]),n("label",{attrs:{for:"normal"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model.fontSize,expression:"model.fontSize"}],attrs:{type:"radio",id:"normal",value:"normal"},domProps:{checked:e._q(e.model.fontSize,"normal")},on:{change:function(o){return e.$set(e.model,"fontSize","normal")}}}),e._v(" Normal ")]),n("label",{attrs:{for:"large"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model.fontSize,expression:"model.fontSize"}],attrs:{type:"radio",id:"large",value:"large"},domProps:{checked:e._q(e.model.fontSize,"large")},on:{change:function(o){return e.$set(e.model,"fontSize","large")}}}),e._v(" Grande ")])]),n("fieldset",[n("h3",[e._v("Sonido")]),n("label",{attrs:{for:"sound"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model.sound,expression:"model.sound"}],attrs:{type:"checkbox",id:"sound",value:"sound"},domProps:{checked:Array.isArray(e.model.sound)?e._i(e.model.sound,"sound")>-1:e.model.sound},on:{change:function(o){var n=e.model.sound,t=o.target,a=!!t.checked;if(Array.isArray(n)){var i="sound",l=e._i(n,i);t.checked?l<0&&e.$set(e.model,"sound",n.concat([i])):l>-1&&e.$set(e.model,"sound",n.slice(0,l).concat(n.slice(l+1)))}else e.$set(e.model,"sound",a)}}}),e.model.sound?e._e():n("span",[e._v(" Inactivo")]),e.model.sound?n("span",[e._v(" Activo")]):e._e()])]),n("fieldset",[n("h3",[e._v("Tiempo de espera")]),n("label",{attrs:{for:"reminingTime"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model.reminingTime,expression:"model.reminingTime"}],attrs:{type:"number",id:"reminingTime",value:"reminingTime"},domProps:{value:e.model.reminingTime},on:{input:function(o){o.target.composing||e.$set(e.model,"reminingTime",o.target.value)}}}),e._v(" Segundos ")])]),e._m(0)])])])},a=[function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("fieldset",[n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Guardar")])])}],i=n("9ab4"),l=n("1b40"),s=n("14f4"),r=n("f61a"),d=function(){function e(){this.action="",this.sound=!1,this.reminingTime=100,this.fontSize="normal"}return e}(),m=function(e){function o(){var o=e.call(this)||this;o.model=new d;var n=s["a"].getInstance();return o.model.action=n.actionAtEnd,o.model.sound=n.soundOn,o.model.reminingTime=n.timeRemaning,o.model.fontSize=n.fontSize,o}return Object(i["c"])(o,e),o.prototype.submit=function(){r["a"].info("settings",this.model);var e=s["a"].getInstance();e.setTimeout(this.model.reminingTime),e.setActionAtEnd(this.model.action),e.setSoundOn(this.model.sound),e.setFontSize(this.model.fontSize),this.$router.push("/")},o=Object(i["b"])([l["a"]],o),o}(l["d"]),c=m,u=c,v=n("2877"),f=Object(v["a"])(u,t,a,!1,null,null,null);o["default"]=f.exports}}]);
//# sourceMappingURL=settings.96eaa10e.js.map