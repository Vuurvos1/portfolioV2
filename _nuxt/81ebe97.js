(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3],{223:function(t,e,c){"use strict";c.r(e);var n={head:{script:[{src:"/js/partyPickle.js",body:!0,defer:!0}]}},r=c(7),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("section",{staticClass:"partyPickle"},[c("div",{staticClass:"positionMove"},[c("div",{staticClass:"moveSpace"},[c("img",{staticClass:"pickle grabNone selectNone",attrs:{src:"/img/partyPickle/pickle.png",alt:"Augurk"}})])]),t._v(" "),c("div",{staticClass:"pickleSaus"}),t._v(" "),c("div",{staticClass:"deksel"}),t._v(" "),c("img",{staticClass:"jar grabNone selectNone",attrs:{src:"/img/partyPickle/jar.png",alt:"Augurken pot"}}),t._v(" "),c("div",{staticClass:"eten"}),t._v(" "),c("div",{staticClass:"eten"}),t._v(" "),c("div",{staticClass:"eten"}),t._v(" "),c("div",{staticClass:"eten"}),t._v(" "),c("div",{staticClass:"eten"}),t._v(" "),c("div",{staticClass:"knoppen"},[c("div",{staticClass:"button selectNone",attrs:{id:"drink"}},[t._v("\n      Give Juice\n    ")]),t._v(" "),c("div",{staticClass:"button selectNone",attrs:{id:"eten"}},[t._v("\n      Give Food\n    ")])])])}],!1,null,null,null);e.default=component.exports},224:function(t,e,c){"use strict";c.r(e);var n={head:{script:[{src:"/js/ticTacToe.js",body:!0,defer:!0}]}},r=c(7),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("section",{staticClass:"ticTacToe"},[t._m(0),t._v(" "),c("p",{staticClass:"winner heading5"},[t._v(".")]),t._v(" "),c("div",{staticClass:"restart"},[c("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[c("path",{attrs:{d:"M480.6 235.6c-11.3 0-20.4 9.1-20.4 20.4 0 112.6-91.6 204.2-204.2 204.2S51.8 368.6 51.8 256 143.4 51.8 256 51.8c61.5 0 118.5 27.1 157.1 73.7h-70.5c-11.3 0-20.4 9.1-20.4 20.4s9.1 20.4 20.4 20.4h114.6c11.3 0 20.4-9.1 20.4-20.4V31.4c0-11.3-9.1-20.4-20.4-20.4s-20.4 9.1-20.4 20.4v59C390.7 40.1 325.8 11 256 11 120.9 11 11 120.9 11 256s109.9 245 245 245 245-109.9 245-245c0-11.3-9.1-20.4-20.4-20.4z"}})])]),t._v(" "),t._m(1),t._v(" "),c("p",{staticClass:"sliderVal"},[t._v("50")])])}),[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"ticTacToe__Grid"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col"}),t._v(" "),c("div",{staticClass:"col"}),t._v(" "),c("div",{staticClass:"col"})]),t._v(" "),c("div",{staticClass:"row"},[c("div",{staticClass:"col"}),t._v(" "),c("div",{staticClass:"col"}),t._v(" "),c("div",{staticClass:"col"})]),t._v(" "),c("div",{staticClass:"row"},[c("div",{staticClass:"col"}),t._v(" "),c("div",{staticClass:"col"}),t._v(" "),c("div",{staticClass:"col"})])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"sliderContainer"},[c("p",[t._v("makkelijk")]),t._v(" "),c("input",{staticClass:"slider",attrs:{id:"slider",type:"range",min:"0",max:"1",value:"0.5",step:"0.01"}}),t._v(" "),c("p",[t._v("moeilijk")])])}],!1,null,null,null);e.default=component.exports},225:function(t,e,c){"use strict";c(226)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},226:function(t,e,c){var n=c(4),r=c(13),l=c(46),o=/"/g,v=function(t,e,c,n){var r=String(l(t)),v="<"+e;return""!==c&&(v+=" "+c+'="'+String(n).replace(o,"&quot;")+'"'),v+">"+r+"</"+e+">"};t.exports=function(t,e){var c={};c[t]=e(v),n(n.P+n.F*r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",c)}},241:function(t,e,c){"use strict";c.r(e);c(225),c(34);var n=c(2),r=c(223),l=c(224),o={components:{PartyPickle:r.default,TicTacToe:l.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var c,n,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.$content,n=t.params,e.next=3,c("articles",n.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.article.title,meta:[{hid:"description",name:"description",content:this.article.description},{hid:"ogtitle",property:"og:title",content:this.article.title},{hid:"ogdescription ",property:"og:description ",content:this.article.title},{hid:"ogurl",property:"og:url",content:"http://schelpkikker.nl/projects/".concat(this.article.link)},{hid:"og:image",property:"og:image",content:"http://schelpkikker.nl".concat(this.article.img)},{hid:"keywords",property:"keywords",content:this.article.keywords?this.article.keywords:""}]}}},v=c(7),component=Object(v.a)(o,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return"Party Pickle"===t.article.title?c("main",{staticClass:"col-2 footer--var"},[c("PartyPickle"),t._v(" "),c("section",{staticClass:"col-2-content"},[c("nuxt-content",{attrs:{document:t.article}})],1)],1):"Tic Tac Toe"===t.article.title?c("main",{staticClass:"col-2 footer--var"},[c("TicTacToe"),t._v(" "),c("section",{staticClass:"col-2-content"},[c("nuxt-content",{attrs:{document:t.article}})],1)],1):"C"===t.article.title?c("div",[t._v("\n  C\n")]):c("main",{staticClass:"projectDesc"},[c("article",[c("nuxt-content",{attrs:{document:t.article}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PartyPickle:c(223).default,TicTacToe:c(224).default})}}]);