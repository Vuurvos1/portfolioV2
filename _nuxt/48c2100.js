(window.webpackJsonp=window.webpackJsonp||[]).push([[14,9],{225:function(t,e,n){},229:function(t,e,n){"use strict";var r=n(5),o=n(30),c=n(31),l=n(153),d=n(76),m=n(12),f=n(58).f,v=n(59).f,h=n(14).f,_=n(230).trim,w="Number",y=r.Number,x=y,I=y.prototype,S=c(n(96)(I))==w,C="trim"in String.prototype,L=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=C?e.trim():_(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,m=l.length;i<m;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(S?m((function(){I.valueOf.call(n)})):c(n)!=w)?l(new x(L(e)),n,y):L(e)};for(var N,k=n(9)?f(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;k.length>E;E++)o(x,N=k[E])&&!o(y,N)&&h(y,N,v(x,N));y.prototype=I,I.constructor=y,n(18)(r,w,y)}},230:function(t,e,n){var r=n(4),o=n(42),c=n(12),l=n(231),d="["+l+"]",m=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),v=function(t,e,n){var o={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),m=o[t]=d?e(h):l[t];n&&(o[n]=m),r(r.P+r.F*d,"String",o)},h=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(m,"")),2&e&&(t=t.replace(f,"")),t};t.exports=v},231:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},232:function(t,e,n){"use strict";n(225)},234:function(t,e,n){},246:function(t,e,n){"use strict";n.r(e);n(229);var r={props:{type:{type:String,default:"text"},label:{type:String,default:"Sample text"},name:{type:String,default:""},rows:{type:Number,default:5},req:{type:Boolean,default:!1}}},o=(n(232),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["textarea"==t.type?n("textarea",{attrs:{id:t.name,placeholder:t.label,rows:t.rows,required:t.req}}):n("input",{attrs:{id:t.name,placeholder:t.label,type:t.type,required:t.req}}),t._v(" "),n("label",{attrs:{for:t.name}},[t._v(t._s(t.label))])])}),[],!1,null,"67394d5b",null);e.default=component.exports},248:function(t,e,n){"use strict";n(234)},276:function(t,e,n){"use strict";n.r(e);var r={components:{TextInput:n(246).default},layout:"contactLayout",methods:{sendForm:function(t){t.preventDefault();var e=document.querySelector("#contactForm"),n=document.querySelector("#name"),r=document.querySelector("#email"),o=document.querySelector("#message"),c=new FormData(e);c.append("name",n.value),c.append("email",r.value),c.append("message",o.value);var data=new URLSearchParams(c);fetch("https://getform.io/f/7269afe1-d68e-4ecd-9138-b939abb663dc",{method:"POST",body:data}),n.value="",r.value="",o.value="",document.querySelector("#submitbutton").classList.add("clicked"),setTimeout((function(){document.querySelector("#submitbutton").classList.remove("clicked")}),4e3)}},head:function(){return{title:"Contact",meta:[{hid:"ogtitle",property:"og:title",content:"Contact"},{hid:"description",name:"description",content:"Find some info about me to find me on different platforms, or contact me if you have any questions"},{hid:"ogdescription ",property:"og:description ",content:"Lets get in contact"},{hid:"ogurl",property:"og:url",content:"http://schelpkikker.nl/contact"},{hid:"og:image",property:"og:image",content:"http://schelpkikker.nl/logo.png"},{hid:"keywords",property:"keywords",content:"Contact, mail"},{hid:"robots",name:"robots",content:"index, follow"},{hid:"googlebot",name:"googlebot",content:"index, follow"}]}}},o=(n(248),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"contactPage"},[n("section",{staticClass:"grid contactPage__form"},[n("h1",{staticClass:"width-4/9 heading2"},[t._v("Let’s get in contact")]),t._v(" "),n("form",{staticClass:"width-4/9",attrs:{id:"contactForm",action:"https://getform.io/f/7269afe1-d68e-4ecd-9138-b939abb663dc",method:"POST"},on:{submit:function(e){return t.sendForm(e)}}},[n("TextInput",{attrs:{type:"text",label:"Your name",name:"name",req:!0}}),t._v(" "),n("TextInput",{attrs:{type:"email",label:"Your email address",name:"email",req:!0}}),t._v(" "),n("TextInput",{attrs:{type:"textarea",label:"Leave a message",name:"message",req:!0}}),t._v(" "),t._m(0)],1)]),t._v(" "),n("section",{staticClass:"grid contactPage__social"},[n("h2",{staticClass:"width-4/9 heading2"},[t._v("Find me on other platforms")]),t._v(" "),n("ul",{staticClass:"width-4/9"},[n("li",[n("a",{attrs:{href:"https://github.com/vuurvos1/","aria-label":"Github"}},[t._v("\n          Github\n          "),n("svg",{attrs:{viewBox:"0 0 79 79",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M39.5 1.646C17.676 1.646 0 19.026 0 40.46 0 57.614 11.317 72.16 27.008 77.288c1.975.366 2.7-.836 2.7-1.866 0-.922-.034-3.364-.05-6.6-10.988 2.34-13.305-5.207-13.305-5.207-1.797-4.48-4.394-5.678-4.394-5.678-3.578-2.407.276-2.357.276-2.357 3.967.27 6.05 4 6.05 4 3.522 5.934 9.247 4.219 11.505 3.228.355-2.511 1.372-4.22 2.501-5.19-8.772-.972-17.992-4.31-17.992-19.181 0-4.237 1.53-7.7 4.065-10.415-.444-.981-1.777-4.928.346-10.273 0 0 3.308-1.04 10.862 3.98 3.16-.863 6.518-1.291 9.875-1.31 3.358.019 6.715.447 9.875 1.31 7.505-5.02 10.813-3.98 10.813-3.98 2.124 5.345.79 9.292.396 10.273 2.518 2.716 4.048 6.178 4.048 10.415 0 14.911-9.233 18.193-18.022 19.147 1.383 1.166 2.667 3.545 2.667 7.183 0 5.194-.05 9.368-.05 10.629 0 1.017.691 2.231 2.716 1.843C67.693 72.143 79 57.588 79 40.46 79 19.026 61.314 1.646 39.5 1.646z"}})])])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://codepen.io/firefox3000","aria-label":"Codepen"}},[t._v("\n          Codepen\n          "),n("svg",{attrs:{viewBox:"0 0 78 78",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1.479 53.663l35.649 23.77c1.215.748 2.516.758 3.744 0l35.65-23.77c.912-.608 1.478-1.696 1.478-2.785V27.114c0-1.089-.566-2.178-1.479-2.785L40.872.56c-1.215-.747-2.516-.754-3.744 0L1.478 24.33C.567 24.936 0 26.025 0 27.114v23.764c0 1.089.566 2.177 1.479 2.785zm34.17 14.716L9.402 50.881l11.71-7.836 14.537 9.708V68.38zm6.702 0V52.753l14.537-9.708 11.71 7.836L42.35 68.38zm28.948-23.77l-8.402-5.613L71.3 33.38v11.229zM42.35 9.616l26.247 17.498-11.71 7.836-14.537-9.708V9.616zM39 31.072l11.84 7.924L39 46.919l-11.84-7.923L39 31.072zM35.65 9.616v15.626L21.111 34.95l-11.71-7.836L35.65 9.616zM6.704 33.386v-.003L15.106 39l-8.401 5.616V33.386z"}})])])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.linkedin.com/in/sam-de-kanter-b3020b1a0/","aria-label":"LinkedIn"}},[t._v("\n          Linkedin\n          "),n("svg",{attrs:{viewBox:"0 0 79 79",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M78.98 79v-.003H79V50.023c0-14.173-3.052-25.092-19.622-25.092-7.965 0-13.311 4.371-15.494 8.516h-.23v-7.193H27.943v52.743h16.36V52.88c0-6.877 1.303-13.526 9.819-13.526 8.39 0 8.515 7.848 8.515 13.967V79H78.98zM1.303 26.258h16.38V79H1.303V26.258zM9.487 0C4.25 0 0 4.25 0 9.487s4.25 9.575 9.487 9.575 9.486-4.338 9.486-9.575C18.97 4.25 14.72 0 9.487 0z"}})])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button",attrs:{id:"submitbutton",type:"submit"}},[n("span",[t._v(" Send Message ")]),t._v(" "),n("span",[t._v("Sending...")]),t._v(" "),n("span",[t._v("Done!")])])}],!1,null,"dc3e1c6a",null);e.default=component.exports}}]);