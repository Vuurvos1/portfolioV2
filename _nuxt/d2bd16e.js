(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{240:function(t,e,r){"use strict";r.r(e);r(34);var n=r(2),o={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.slug).only(["title","description","img","slug"]).sortBy("createdAt","asc").fetch();case 3:return o=e.sent,e.abrupt("return",{articles:o});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Projecten",meta:[{hid:"description",name:"description",content:"Hey, I’m Sam. I’m a Front end Developer currently studying Communication and multimedia design in Amsterdam. Apart from Front end development, I am also intrested things like game development, programming, and 3D modeling"},{hid:"ogtitle",property:"og:title",content:"Project page"}]}}},c=r(7),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"projects"},[r("section",{staticClass:"header"},[r("h1",[t._v("Projects")]),t._v(" "),r("svg",{attrs:{width:"54",height:"37",viewBox:"0 0 54 37",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M0.707107 8.79289L8.79289 0.707107C9.18342 0.316582 9.81658 0.316583 10.2071 0.707107L26.2929 16.7929C26.6834 17.1834 27.3166 17.1834 27.7071 16.7929L43.7929 0.707107C44.1834 0.316582 44.8166 0.316583 45.2071 0.707107L53.2929 8.79289C53.6834 9.18342 53.6834 9.81658 53.2929 10.2071L27.7071 35.7929C27.3166 36.1834 26.6834 36.1834 26.2929 35.7929L0.707107 10.2071C0.316583 9.81658 0.316583 9.18342 0.707107 8.79289Z"}})])]),t._v(" "),r("ul",{staticClass:"grid projects--grid"},t._l(t.articles,(function(article){return r("li",{key:article.slug,staticClass:"span-4 projects__item"},[r("NuxtLink",{attrs:{to:{name:"projects-slug",params:{slug:article.slug}}}},[r("img",{attrs:{src:article.img}}),t._v(" "),r("div",{staticClass:"projects__text"},[r("h2",[t._v(t._s(article.title))]),t._v(" "),r("svg",{attrs:{width:"49",height:"32",viewBox:"0 0 49 32",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M32.3182 0L48.1385 15.5691L32.3182 31.1382L30.2139 29L42.3373 17.0691H0V14.0691H42.3373L30.2139 2.13823L32.3182 0Z"}})])])])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);