(function(t){function e(e){for(var o,s,a=e[0],c=e[1],l=e[2],u=0,d=[];u<a.length;u++)s=a[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var a=n[s];0!==i[a]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},s={app:0},i={app:0},r=[];function a(t){return c.p+"js/"+({about:"about",comments:"comments",saved:"saved",setttings:"setttings","show-comments":"show-comments","words-group":"words-group"}[t]||t)+"."+{about:"949c6926",comments:"bc7bb218",saved:"5e936420",setttings:"1bba2c9f","show-comments":"49400528","words-group":"08c9ad8f"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var o="css/"+({about:"about",comments:"comments",saved:"saved",setttings:"setttings","show-comments":"show-comments","words-group":"words-group"}[t]||t)+"."+{about:"7867575f",comments:"31d6cfe0",saved:"31d6cfe0",setttings:"31d6cfe0","show-comments":"31d6cfe0","words-group":"31d6cfe0"}[t]+".css",i=c.p+o,r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var l=r[a],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===i))return e()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){l=d[a],u=l.getAttribute("data-href");if(u===o||u===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete s[t],f.parentNode.removeChild(f),n(r)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){s[t]=0})));var o=i[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,n){o=i[t]=[e,n]}));e.push(o[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=a(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",d.name="ChunkLoadError",d.type=o,d.request=s,n[1](d)}i[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"03aa":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{attrs:{src:"/img/alarm.png",width:"150",alt:"alarm icon"}})},s=[],i=n("9ab4"),r=n("1b40"),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i["c"])(e,t),e=Object(i["b"])([r["a"]],e),e}(r["d"]),c=a,l=c,u=n("2877"),d=Object(u["a"])(l,o,s,!1,null,null,null);e["a"]=d.exports},"0402":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"definition-container",class:t.showDefinition?"":"hidden"},[n("vue-markdown",{attrs:{source:t.definition,linkify:!1,"toc-anchor-link":!1,options:t.options}})],1)},s=[],i=n("9ab4"),r=n("1b40"),a=n("5d9b"),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.options={html:!0},e}return Object(i["c"])(e,t),Object(i["b"])([Object(r["c"])({default:""})],e.prototype,"definition",void 0),Object(i["b"])([Object(r["c"])({default:!1})],e.prototype,"showDefinition",void 0),e=Object(i["b"])([Object(r["a"])({components:{VueMarkdown:a["a"]}})],e),e}(r["d"]),l=c,u=l,d=n("2877"),f=Object(d["a"])(u,o,s,!1,null,null,null);e["a"]=f.exports},"0824":function(t,e,n){"use strict";var o=n("85ee"),s=localStorage,i="saved_words",r="saved_words",a="[]";function c(t){if(t.Word!==o["a"].END_OF_WORDS_TEXT&&t.Word!==o["a"].START_OF_WORDS_TEXT){var e=s[i];e||(e=a);var n=JSON.parse(e),r=n.filter((function(e){return e.Word===t.Word})).length>0;r?console.log("localstorage - word exist",t):(n.push(t),s[i]=JSON.stringify(n),console.log("localstorage - word added",t))}}function l(t){var e=s[i];e||(e=a);var n=JSON.parse(e),o=n.filter((function(e){return e.Word!==t.Word}));s[i]=JSON.stringify(o),console.log("localstorage - word deleted",t)}function u(){var t=s[i];t||(t=a);var e=JSON.parse(t);return console.log("localstorage - getAll",e),e}function d(t){s[r]=JSON.stringify(t),console.log("localstorage - set custom list",t.length)}function f(){var t=s[r],e=JSON.parse(t);return console.log("localstorage - getAll",e),e}e["a"]={add:c,remove:l,getAll:u,setCustomList:d,getCustomList:f}},"138b":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=function(){function t(){this.audioType=t.HTML5,this.sounds=[]}return t.prototype.preload=function(e,n){if(this.audioType===t.HTML5){var o={key:e,asset:n,type:t.HTML5};this.sounds.push(o)}},t.prototype.play=function(e,n){void 0===n&&(n=1);var o=this.sounds.find((function(t){return t.key===e}));if(o&&o.type===t.HTML5){var s=new Audio(o.asset);s.volume=n,s.play()}},t.HTML5="html5",t.NATIVE="native",t}(),s=new o},"14f4":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("85ee"),s=function(){function t(){this.soundOn=!1,this.changeColorOn=!0,this.timesPerMinute=160,this.accentBetweenTicks=4,console.log("settings - constructor"),this.actionAtEnd=o["a"].ActionsAtEnd.DEFAULT,this.timeRemaning=o["a"].TIMEOUT_SECONDS,this.countsBeforeAds=o["a"].COUNTS_BEFORE_ADS,this.timesPerMinute=o["a"].TIMES_PER_MINUTE_DEFAULT,this.accentBetweenTicks=o["a"].ACCENT_BETWEEN_TICKS_DEFAULT}return t.getInstance=function(){var e,n,s,i;return t._instance||"1"!==(null===localStorage||void 0===localStorage?void 0:localStorage.getItem("settings"))||(console.log("settings - getInstance - localStorage"),t._instance=new t,t._instance.actionAtEnd=localStorage.getItem("settings.actionAtEnd"),t._instance.timeRemaning=parseInt(null!==(e=localStorage.getItem("settings.timeRemaning"))&&void 0!==e?e:t._instance.timeRemaning+"",10),console.log("settings - getInstance -  ls ",{a:localStorage.getItem("settings.timeRemaning"),b:t._instance.timeRemaning}),t._instance.soundOn="true"===localStorage.getItem("settings.soundOn"),t._instance.changeColorOn="true"===localStorage.getItem("settings.changeColorOn"),t._instance.countsBeforeAds=null!==(n=parseInt(localStorage.getItem("settings.countsBeforeAds"),10))&&void 0!==n?n:o["a"].COUNTS_BEFORE_ADS,t._instance.timesPerMinute=null!==(s=parseInt(localStorage.getItem("settings.timesPerMinute"),10))&&void 0!==s?s:o["a"].TIMES_PER_MINUTE_DEFAULT,t._instance.accentBetweenTicks=null!==(i=parseInt(localStorage.getItem("settings.accentBetweenTicks"),10))&&void 0!==i?i:o["a"].ACCENT_BETWEEN_TICKS_DEFAULT),t._instance||(console.log("settings - getInstance - new"),t._instance=new t,t._instance.saveInLocalStorage()),t._instance},t.prototype.saveInLocalStorage=function(){console.log("settings - saveInLocalStorage"),null===localStorage||void 0===localStorage||localStorage.setItem("settings","1"),null===localStorage||void 0===localStorage||localStorage.setItem("settings.actionAtEnd",t._instance.actionAtEnd.toString()),null===localStorage||void 0===localStorage||localStorage.setItem("settings.timeRemaning",t._instance.timeRemaning.toString()),null===localStorage||void 0===localStorage||localStorage.setItem("settings.soundOn",t._instance.soundOn.toString()),null===localStorage||void 0===localStorage||localStorage.setItem("settings.changeColorOn",t._instance.changeColorOn.toString()),null===localStorage||void 0===localStorage||localStorage.setItem("settings.countsBeforeAds",t._instance.countsBeforeAds.toString()),null===localStorage||void 0===localStorage||localStorage.setItem("settings.timesPerMinute",t._instance.timesPerMinute.toString()),null===localStorage||void 0===localStorage||localStorage.setItem("settings.accentBetweenTicks",t._instance.accentBetweenTicks.toString())},t.prototype.setTimeout=function(e){this.timeRemaning=e,console.log("settings - this.timeout",this.timeRemaning),null===localStorage||void 0===localStorage||localStorage.setItem("settings.timeRemaning",t._instance.timeRemaning.toString())},t.prototype.setActionAtEnd=function(e){this.actionAtEnd=e,console.log("settings - this.actionAtEnd",this.actionAtEnd),null===localStorage||void 0===localStorage||localStorage.setItem("settings.actionAtEnd",t._instance.actionAtEnd.toString())},t.prototype.setSoundOn=function(e){this.soundOn=e,console.log("settings - this.soundOn",this.soundOn),null===localStorage||void 0===localStorage||localStorage.setItem("settings.soundOn",t._instance.soundOn.toString())},t.prototype.setChangeColorOn=function(e){this.changeColorOn=e,console.log("settings - this.changeColorOn",this.changeColorOn),null===localStorage||void 0===localStorage||localStorage.setItem("settings.changeColorOn",t._instance.changeColorOn.toString())},t.prototype.setTimesPerMinute=function(e){this.timesPerMinute=e,console.log("settings - this.timesPerMinute",this.timesPerMinute),null===localStorage||void 0===localStorage||localStorage.setItem("settings.timesPerMinute",t._instance.timesPerMinute.toString())},t.prototype.setCountsBeforeAds=function(e){this.countsBeforeAds=e,console.log("settings - this.countsBeforeAds",this.countsBeforeAds),null===localStorage||void 0===localStorage||localStorage.setItem("settings.countsBeforeAds",t._instance.countsBeforeAds.toString())},t.prototype.setAccentBetweenTicks=function(e){this.accentBetweenTicks=e,console.log("settings - this.accentBetweenTicks",this.accentBetweenTicks),null===localStorage||void 0===localStorage||localStorage.setItem("settings.accentBetweenTicks",t._instance.accentBetweenTicks.toString())},t}(),i=s},"177b":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn btn-primary",on:{click:t.save}},[n("i",{staticClass:"fas fa-star"}),n("span",{staticClass:"hidden-on-mobile"},[t._v("Añadir a Favoritos")])])},s=[],i=n("9ab4"),r=n("0824"),a=n("1b40"),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i["c"])(e,t),e.prototype.save=function(){r["a"].add(this.word)},Object(i["b"])([Object(a["c"])()],e.prototype,"word",void 0),e=Object(i["b"])([a["a"]],e),e}(a["d"]),l=c,u=l,d=n("2877"),f=Object(d["a"])(u,o,s,!1,null,null,null);e["a"]=f.exports},"22d7":function(t,e,n){"use strict";n("be87")},"2fc4":function(t,e,n){},"40c5":function(t,e,n){"use strict";var o=n("9ab4"),s=n("bc3a"),i=n.n(s);function r(t){var e=[];if("undefined"!==typeof t)for(var n in Object.keys(t))n&&void 0!==t[n]&&e.push(n+"="+t[n]);return e.join("&")}var a,c="https://palabras-aleatorias-public-api.herokuapp.com",l="https://random-names-api.herokuapp.com",u=500,d=10,f=0,h=localStorage.getItem("cache");function m(t){return Object(o["a"])(this,void 0,Promise,(function(){return Object(o["d"])(this,(function(e){switch(e.label){case 0:return[4,i.a.get(t).then((function(t){return t.data})).then((function(t){return console.log("api",t),t}))];case 1:return[2,e.sent()]}}))}))}function b(t){return console.log("api extract first word and set it into cache"),a.api_owner=t.api_owner,a.words=t.body||[],a.hasValue=a.words.length>0,localStorage.setItem("cache",JSON.stringify(a)),console.log("api cache updated",a),{api_owner:t.api_owner,body:t.body[0]||{}}}function g(){return Object(o["a"])(this,void 0,Promise,(function(){return Object(o["d"])(this,(function(t){switch(t.label){case 0:return[4,m(c+"/multiple-random")];case 1:return[2,t.sent()]}}))}))}function p(){return Object(o["a"])(this,void 0,Promise,(function(){return Object(o["d"])(this,(function(t){switch(t.label){case 0:return[4,m(c+"/random")];case 1:return[2,t.sent()]}}))}))}function v(){return Object(o["a"])(this,void 0,Promise,(function(){return Object(o["d"])(this,(function(t){switch(t.label){case 0:return console.log("api - get word from server"),[4,Promise.race([p(),g().then(b)])];case 1:return[2,t.sent()]}}))}))}function j(){return Object(o["a"])(this,void 0,Promise,(function(){return Object(o["d"])(this,(function(t){switch(t.label){case 0:return console.log("api - get word from cache"),[4,new Promise((function(t){var e=a.words.length-1,n=Math.floor(Math.random()*e),o=a.words[n];t({api_owner:a.api_owner,body:o})}))];case 1:return[2,t.sent()]}}))}))}function O(){return Object(o["a"])(this,void 0,Promise,(function(){return Object(o["d"])(this,(function(t){return console.log("api - get random - cache.hasValue=",{hasValue:a.hasValue,usesCounter:a.usesCounter}),a.hasValue?(a.usesCounter++,a.usesCounter>u?[2,v()]:[2,j()]):[2,v()]}))}))}function w(t){return Object(o["a"])(this,void 0,Promise,(function(){return Object(o["d"])(this,(function(e){switch(e.label){case 0:return[4,m(c+"/Word="+t)];case 1:return[2,e.sent()]}}))}))}function y(t){return Object(o["a"])(this,void 0,Promise,(function(){var e;return Object(o["d"])(this,(function(n){switch(n.label){case 0:return e=r(t),[4,m(c+"/add-word?"+e)];case 1:return[2,n.sent()]}}))}))}function _(){return Object(o["a"])(this,void 0,Promise,(function(){return Object(o["d"])(this,(function(t){switch(t.label){case 0:return[4,m(c+"/comments")];case 1:return[2,t.sent()]}}))}))}function S(t){return Object(o["a"])(this,void 0,Promise,(function(){return Object(o["d"])(this,(function(e){switch(e.label){case 0:return[4,m(c+"/palabras-aleatorias?_page="+f+"&_limit="+d+"&Word_like="+t)];case 1:return[2,e.sent()]}}))}))}function T(){return Object(o["a"])(this,void 0,Promise,(function(){return Object(o["d"])(this,(function(t){switch(t.label){case 0:return[4,m(l+"/random")];case 1:return[2,t.sent()]}}))}))}a=h&&""!==h?JSON.parse(h):{hasValue:!1,words:[],api_owner:null,usesCounter:0};e["a"]={randomWord:O,get:w,addComment:y,getComments:_,search:S,randomName:T}},4678:function(t,e,n){var o={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=i(t);return n(e)}function i(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}s.keys=function(){return Object.keys(o)},s.resolve=i,t.exports=s,s.id="4678"},"7ae8":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"main-word"},[t._v(" "+t._s(t.word)+" ")])},s=[],i=n("9ab4"),r=n("1b40"),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i["c"])(e,t),Object(i["b"])([Object(r["c"])()],e.prototype,"word",void 0),e=Object(i["b"])([r["a"]],e),e}(r["d"]),c=a,l=c,u=n("2877"),d=Object(u["a"])(l,o,s,!1,null,null,null);e["a"]=d.exports},"85ee":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={END_OF_WORDS_TEXT:"Este es el fin, se terminaron mis palabras",START_OF_WORDS_TEXT:"¡Comencemos!",TIMEOUT_SECONDS:10,COUNTS_BEFORE_ADS:7,ActionsAtEnd:{ALARM:"alarm",NEXT_ITEM:"next",DEFAULT:"none",NONE:"none"},ACCENT_BETWEEN_TICKS_DEFAULT:4,TIMES_PER_MINUTE_DEFAULT:160,Sounds:{METRONOME:"metronome",METRONOME_PATH:"audio/tick.mp3",METRONOME_END:"metronomeEnd",METRONOME_END_PATH:"audio/tock.mp3",TIMEOUT:"timeout",TIMEOUT_PATH:"audio/beep-05.mp3"}}},"8e3d":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=function(){function t(t){this.beforeRandomColor="",this.currentRandomColor="",this.colorCallback=t,this.colors=[],this.buffer=this.colors,this.loadData()}return t.prototype.loadData=function(){this.colors=["custom-red","custom-pink","custom-purple","custom-deep-purple","custom-indigo","custom-blue","custom-light-blue","custom-cyan","custom-teal","custom-green","custom-light-green","custom-lime","custom-yellow","custom-amber","custom-orange","custom-deep-orange","custom-brown","custom-grey","custom-blue-grey"]},t.prototype.reset=function(){this.buffer=this.colors},t.prototype.all=function(){return this.colors},t.prototype.next=function(){0===this.buffer.length&&this.reset();var t=this.buffer[Math.floor(Math.random()*this.buffer.length)];return this.buffer=this.buffer.filter((function(e){return e!==t})),this.saveBefore(t),console.debug("colorservice - randomColor",t),t},t.prototype.before=function(){return this.beforeRandomColor},t.prototype.saveBefore=function(t){this.beforeRandomColor=this.currentRandomColor,this.currentRandomColor=t,this.callColorCallback()},t.prototype.callColorCallback=function(){this.colorCallback&&this.colorCallback(this.currentRandomColor)},t}(),s=new o},"947c":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n("14f4"),s=function(){function t(t,e){this.time=o["a"].getInstance().timeRemaning,this.runTimer=!0,this.hasStarted=!0,this.hasFinished=!1,this.remainingTime=o["a"].getInstance().timeRemaning,this.finishCallback=t,this.tickEvent=e}return t.prototype.initTimer=function(){console.info("settings - initTimer"),this.remainingTime=o["a"].getInstance().timeRemaning,this.time=this.remainingTime,this.runTimer=!1,this.hasStarted=!1,this.hasFinished=!1,this.callFinishCallback()},t.prototype.startTimer=function(){console.info("settings - startTimer"),this.runTimer=!0,this.hasStarted=!0,this.timerTick()},t.prototype.pauseTimer=function(){console.info("settings - pauseTimer"),this.runTimer=!1},t.prototype.resetTimer=function(){console.info("settings - resetTimer"),this.remainingTime=o["a"].getInstance().timeRemaning,this.callFinishCallback(),this.callTickEvent(),this.time=this.remainingTime,this.hasFinished&&this.initTimer(),this.runTimer||(this.hasFinished=!1,this.callFinishCallback(),this.startTimer())},t.prototype.resumeTimer=function(){console.info("settings - resumeTimer"),this.startTimer()},t.prototype.timerTick=function(){var t=this;console.info("settings - timerTick"),setTimeout((function(){t.runTimer&&(t.remainingTime--,t.callTickEvent(),t.remainingTime>0?t.timerTick():(t.hasFinished=!0,t.callFinishCallback(),console.info("settings - finish")))}),1e3)},t.prototype.callFinishCallback=function(){console.log("settings - callFinishCallback",this.hasFinished),this.finishCallback&&this.finishCallback(this.hasFinished)},t.prototype.callTickEvent=function(){console.log("settings - callTickEvent",this.remainingTime),this.tickEvent&&this.tickEvent(this.remainingTime)},t}()},b043:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top-bar"},[n("div",{staticClass:"counter"},[t._v(" "+t._s(t.remainingTime)+" ")])])},s=[],i=n("9ab4"),r=n("1b40"),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i["c"])(e,t),Object(i["b"])([Object(r["c"])()],e.prototype,"remainingTime",void 0),e=Object(i["b"])([r["a"]],e),e}(r["d"]),c=a,l=c,u=n("2877"),d=Object(u["a"])(l,o,s,!1,null,null,null);e["a"]=d.exports},be87:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("aside",{attrs:{id:"sidebar"}},[n("nav",[t._l(t.routes,(function(e){return n("div",{key:e.name},[n("router-link",{staticClass:"nav-link",attrs:{to:e,"active-class":"active"}},[n("i",{class:e.icon}),n("span",{staticClass:"hidden-on-mobile"},[t._v(t._s(e.title))])])],1)})),t._m(0),t._m(1)],2)]),n("main",{attrs:{id:"main"}},[n("router-view")],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{attrs:{href:"https://play.google.com/store/apps/details?id=palabras.aleatorias.com",rel:"noopener",target:"_blank"}},[n("i",{staticClass:"fab fa-google-play"}),n("span",{staticClass:"hidden-on-mobile"},[t._v("Play Store")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{attrs:{href:"https://cafecito.app/palabrasaleatorias",rel:"noopener",target:"_blank"}},[n("img",{staticStyle:{"padding-right":"0.5rem",width:"1.3rem"},attrs:{src:"https://cdn.cafecito.app/imgs/cafecito_logo.svg",alt:"Invitame un café en cafecito.app"}}),n("span",{staticClass:"hidden-on-mobile"},[t._v("Invitame un cafecito")])])])}],r=n("9ab4"),a=n("1b40"),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.routes=[{path:"/home",icon:"fas fa-home",title:"Inicio"},{path:"/words-group",icon:"fas fa-layer-group",title:"Grupo de palabras"},{path:"/names",icon:"fas fa-layer-group",title:"Nombres"},{path:"/search",icon:"fas fa-search",title:"Buscar"},{path:"/saved",icon:"fas fa-star",title:"Favoritos"},{path:"/comments",icon:"fas fa-comment-dots",title:"Comentarios"},{path:"/settings",icon:"fas fa-sliders-h",title:"Ajustes"},{path:"/about",icon:"fa fa-address-card",title:"Sobre nosotros"}],e}return Object(r["c"])(e,t),e=Object(r["b"])([a["a"]],e),e}(a["d"]),l=c,u=l,d=n("2877"),f=Object(d["a"])(u,s,i,!1,null,"44ce74fc",null),h=f.exports,m=n("9483");Object(m["a"])("service-worker.js",{ready:function(){console.log("registerServiceWorker - App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("registerServiceWorker - Service worker has been registered.")},cached:function(){console.log("registerServiceWorker - Content has been cached for offline use.")},updatefound:function(){console.log("registerServiceWorker - New content is downloading.")},updated:function(){console.log("registerServiceWorker - New content is available; please refresh.")},offline:function(){console.log("registerServiceWorker - No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var b=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t.hasFinished?n("div"):t._e(),t.hasFinished?t._e():n("TopBar",{attrs:{remainingTime:t.remainingTime}}),n("div",{staticClass:"container full-center",class:t.showDefinition?"with-definition":"without-definition",on:{click:t.next}},[t.currentWord&&!t.waiting?n("div",[t.hasFinished?t._e():n("div",[n("div",{attrs:{id:"word-container"}},[n("div",{staticClass:"two-columns"},[n("ExpressWord",{attrs:{word:t.currentWord.Word}}),n("ExpressDefinition",{attrs:{definition:t.currentWord.DefinitionMD,showDefinition:t.showDefinition}})],1)])]),t.hasFinished?n("div",{attrs:{id:"alarm-overview-container"}},[n("AlarmOverlay")],1):t._e()]):t._e(),t.waiting?n("SquareGrid"):t._e()],1),n("BottomBar",{attrs:{word:t.currentWord},on:{"show-definition":t.toogleDefinition,share:function(){}}}),t.hasFinished?n("div"):t._e()],1)},p=[],v=n("7ae8"),j=n("0402"),O=n("03aa"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom-bar"},[n("div",{staticClass:"bottom-bar-nav"},[n("button",{staticClass:"btn",on:{click:t.showDefinition}},[n("i",{staticClass:"fas fa-arrow-left"}),n("span",{staticClass:"hidden-on-mobile"},[t._v("Anterior")])]),n("div",[n("button",{staticClass:"btn btn-secondary",on:{click:t.showDefinition}},[n("i",{staticClass:"fas fa-align-left"}),n("span",{staticClass:"hidden-on-mobile"},[t._v("Mostrar/Ocultar Definición")])]),n("SavedButton",{attrs:{word:t.word}}),n("button",{staticClass:"btn",on:{click:t.share}},[n("i",{staticClass:"fas fa-share-alt"}),n("span",{staticClass:"hidden-on-mobile"},[t._v("Compartir")])])],1)])])},y=[],_=n("177b"),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal",class:{open:t.open}},[t._v(" algo ")])},T=[],E=n("2fe1"),k=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r["c"])(e,t),e.prototype.close=function(){console.log("modal - close")},Object(r["b"])([Object(a["c"])({required:!0,type:String})],e.prototype,"title",void 0),Object(r["b"])([Object(a["c"])({required:!0,type:Boolean,default:!1})],e.prototype,"open",void 0),Object(r["b"])([Object(a["b"])("close")],e.prototype,"close",null),e=Object(r["b"])([E["b"]],e),e}(o["a"]),C=k,A=C,I=(n("22d7"),Object(d["a"])(A,S,T,!1,null,null,null)),M=I.exports,B=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r["c"])(e,t),e.prototype.share=function(){console.log("modal - share")},e.prototype.showDefinition=function(){console.log("bottom bar - show definition"),this.$emit("show-definition")},Object(r["b"])([Object(a["c"])()],e.prototype,"word",void 0),Object(r["b"])([Object(a["b"])("share")],e.prototype,"share",null),e=Object(r["b"])([Object(a["a"])({components:{SavedButton:_["a"],Modal:M}})],e),e}(a["d"]),D=B,N=D,F=Object(d["a"])(N,w,y,!1,null,null,null),P=F.exports,R=n("b043"),x=n("40c5"),W=n("d58b"),L=n("947c"),z=n("14f4"),U=n("85ee"),$=n("138b"),J=n("8e3d"),H=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.currentWord=null,e.waiting=!1,e.remainingTime=0,e.timer=new L["a"](e.onFinish,e.tickCounter),e.hasFinished=!1,e.metronomeWorking=!1,e.count=0,e.saveCounter=0,e.color="",e.enabledBackButton=!1,e.showDefinition=!1,e}return Object(r["c"])(e,t),e.prototype.mounted=function(){return Object(r["a"])(this,void 0,Promise,(function(){return Object(r["d"])(this,(function(t){return this.next(),this.timer.initTimer(),[2]}))}))},e.prototype.toogleDefinition=function(){console.log("home - toogleDefinition"),this.showDefinition=!this.showDefinition},e.prototype.tickCounter=function(t){this.remainingTime=t},e.prototype.onFinish=function(t){t&&this.executeAtEndAction(t)},e.prototype.executeAtEndAction=function(t){switch(console.log("home -  executeAtEndAction",t),console.log("home -  executeAtEndAction",z["a"]),z["a"].getInstance().actionAtEnd){case U["a"].ActionsAtEnd.NEXT_ITEM:z["a"].getInstance().soundOn&&$["a"].play(U["a"].Sounds.TIMEOUT),this.next();break;case U["a"].ActionsAtEnd.ALARM:this.hasFinished=t,z["a"].getInstance().soundOn&&$["a"].play(U["a"].Sounds.TIMEOUT);break;default:break}},e.prototype.next=function(){return Object(r["a"])(this,void 0,Promise,(function(){var t;return Object(r["d"])(this,(function(e){switch(e.label){case 0:return this.count>z["a"].getInstance().countsBeforeAds&&(this.count=0),this.count++,this.hasFinished=!1,this.waiting=!0,[4,x["a"].randomWord()];case 1:return t=e.sent(),this.currentWord=t.body,this.waiting=!1,z["a"].getInstance().changeColorOn&&(this.color=J["a"].next()),this.enabledBackButton=!0,this.timer.resetTimer(),[2]}}))}))},e.prototype.before=function(){return Object(r["a"])(this,void 0,Promise,(function(){var t;return Object(r["d"])(this,(function(e){switch(e.label){case 0:return[4,x["a"].randomWord()];case 1:return t=e.sent(),this.currentWord=t.body,z["a"].getInstance().changeColorOn&&(this.color=J["a"].before()),this.enabledBackButton=!1,[2]}}))}))},e=Object(r["b"])([Object(a["a"])({components:{ExpressWord:v["a"],ExpressDefinition:j["a"],SquareGrid:W["a"],AlarmOverlay:O["a"],BottomBar:P,TopBar:R["a"]}})],e),e}(a["d"]),q=H,V=q,X=Object(d["a"])(V,g,p,!1,null,null,null),G=X.exports;o["a"].use(b["a"]);var K=[{path:"/home",name:"Home",component:G},{path:"/settings",name:"Ajustes",component:function(){return n.e("setttings").then(n.bind(null,"26d3"))}},{path:"/words-group",name:"Grupo de palabras",component:function(){return n.e("words-group").then(n.bind(null,"9ccd"))}},{path:"/names",name:"Nombres",component:function(){return n.e("saved").then(n.bind(null,"fd5c"))}},{path:"/saved",name:"Favoritos",component:function(){return n.e("saved").then(n.bind(null,"20de"))}},{path:"/search",name:"Buscar",component:function(){return n.e("saved").then(n.bind(null,"2d3b"))}},{path:"/about",name:"Sobre nosotros",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/comments",name:"Comentarios",component:function(){return n.e("comments").then(n.bind(null,"0bef"))}},{path:"/show-comments",name:"Mostrar comentarios recividos",component:function(){return n.e("show-comments").then(n.bind(null,"1dc0"))}},{path:"/",redirect:"/home"}],Y=new b["a"]({routes:K}),Q=Y,Z=n("2f62");o["a"].use(Z["a"]);var tt=new Z["a"].Store({state:{},mutations:{},actions:{},modules:{}}),et=(n("15f5"),n("2fc4"),n("c1df")),nt=n.n(et);o["a"].filter("formatDate",(function(t){if(t)return nt()(String(t)).format("DD/MM/YYYY hh:mm")})),o["a"].config.productionTip=!1,new o["a"]({router:Q,store:tt,render:function(t){return t(h)}}).$mount("#app")}});
//# sourceMappingURL=app.23f14eef.js.map