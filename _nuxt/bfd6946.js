(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{236:function(t,e,r){"use strict";r.r(e);var n=r(2),o=(r(31),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.slug).limit(3).only(["title","description","img","slug"]).sortBy("createdAt","asc").fetch();case 3:return o=e.sent,e.abrupt("return",{articles:o});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Portfolio | Sam",meta:[{hid:"description",name:"description",content:"Hey, I’m Sam. I’m a Front end Developer currently studying Communication and multimedia design in Amsterdam. Apart from Front end development, I am also intrested things like game development, programming, and 3D modeling"},{hid:"ogtitle",property:"og:title",content:"Home page"}],script:[{src:"/js/parallaxBlobs.js",body:!0,defer:!0}]}}}),l=r(7),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"homePage"},[r("section",{staticClass:"grid homePage__about"},[r("h1",{staticClass:"width-3/10"},[t._v("\n      Hey, I’m Sam. I’m a Front end Developer currently studying Communication\n      and multimedia design in Amsterdam\n    ")]),t._v(" "),r("a",{staticClass:"scroll width-3/10",attrs:{href:"#whatIdo"}},[t._v("scroll")]),t._v(" "),r("svg",{staticClass:"svg1",attrs:{width:"449",height:"372",viewBox:"0 0 449 372",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M380.916 70.5304C423.974 109.906 458.919 170.219 446.439 216.783C433.646 263.346 373.116 296.471 311.025 326.472C248.934 356.472 185.283 383.347 129.12 367.097C72.6458 350.534 23.9716 290.846 6.81082 222.095C-10.038 153.344 4.62671 75.843 47.9967 36.1549C91.6787 -3.22063 164.066 -4.15815 225.533 4.27948C287.312 13.0296 337.858 31.4674 380.916 70.5304Z"}})]),t._v(" "),r("svg",{staticClass:"svg2",attrs:{width:"372",height:"399",viewBox:"0 0 372 399",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M295.257 95.0565C337.065 145.506 375.467 200.908 371.751 258.476C368.344 316.044 322.82 376.089 268.005 393.421C213.19 410.754 149.394 385.065 98.2947 352.566C47.5057 320.378 9.72353 281.38 1.6716 237.739C-6.38033 194.408 15.6076 146.744 47.196 98.4611C79.094 50.178 120.902 1.58541 164.568 0.0378709C207.925 -1.50966 253.449 44.6069 295.257 95.0565Z"}})])]),t._v(" "),r("section",{staticClass:"grid homePage__about2",attrs:{id:"whatIdo"}},[r("h2",{staticClass:"width-3/10 heading1"},[t._v("What do I do")]),t._v(" "),r("p",{staticClass:"width-3/10 heading3"},[t._v("\n      Apart from Front end development, I am also intrested things like game\n      development, programming, and 3D modeling\n    ")]),t._v(" "),r("svg",{staticClass:"svg3",attrs:{width:"260",height:"324",viewBox:"0 0 260 324",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M200.628 80.3524C234.601 122.648 265.01 167.796 259.308 209.379C253.606 250.962 211.319 288.743 164.28 308.703C117.004 328.426 64.7388 330.326 37.4183 307.04C10.0979 283.516 7.72217 235.042 3.92107 193.934C0.35753 152.588 -4.86899 118.846 9.62273 81.0652C24.1144 43.284 58.3244 1.22559 93.9598 0.0375047C129.595 -1.3882 166.893 38.0564 200.628 80.3524Z"}})]),t._v(" "),r("svg",{staticClass:"svg4",attrs:{width:"382",height:"366",viewBox:"0 0 382 366",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M320.699 76.24C359.424 123.255 396.42 191.012 376.366 251.509C356.312 311.661 278.863 364.207 197.956 365.936C117.049 368.01 32.6846 319.612 8.13595 256.695C-16.4127 193.778 18.5086 116.687 60.6909 67.9432C102.873 18.854 152.316 -2.23367 196.919 0.186222C241.867 2.95181 281.975 28.8792 320.699 76.24Z"}})])]),t._v(" "),r("section",{staticClass:"grid homePage__projects"},[r("h2",{staticClass:"width-3/10"},[t._v("Featured projects")]),t._v(" "),r("ul",{staticClass:"grid width-1/12 grid--inner"},t._l(t.articles,(function(article){return r("li",{key:article.slug,staticClass:"span-4 projects__item"},[r("NuxtLink",{attrs:{to:{name:"projects-slug",params:{slug:article.slug}}}},[r("img",{attrs:{src:article.img}}),t._v(" "),r("div",{staticClass:"projects__text"},[r("h2",[t._v(t._s(article.title))]),t._v(" "),r("svg",{attrs:{width:"49",height:"32",viewBox:"0 0 49 32",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M32.3182 0L48.1385 15.5691L32.3182 31.1382L30.2139 29L42.3373 17.0691H0V14.0691H42.3373L30.2139 2.13823L32.3182 0Z"}})])])])],1)})),0),t._v(" "),r("a",{staticClass:"width-1/12 heading3",attrs:{href:"/projects"}},[t._v("Explore more projects\n      "),r("svg",{attrs:{width:"49",height:"32",viewBox:"0 0 49 32",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M32.3182 0L48.1385 15.5691L32.3182 31.1382L30.2139 29L42.3373 17.0691H0V14.0691H42.3373L30.2139 2.13823L32.3182 0Z"}})])])]),t._v(" "),r("section",{staticClass:"grid homePage__contact"},[r("h2",{staticClass:"width-7/12"},[t._v("Like what you see?")]),t._v(" "),r("a",{staticClass:"width-7/12 button button--purple",attrs:{href:"/contact"}},[t._v("Lets get in contact")]),t._v(" "),r("svg",{staticClass:"svg5",attrs:{viewBox:"0 0 669 580",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M515.839 238.613C558.573 310.907 608.572 394.964 586.283 445.678C563.632 496.292 468.228 513.823 386.848 514.593C305.73 515.825 238.636 500.296 175.482 459.357C112.328 418.418 53.4761 352.169 49.4203 279.711C45.4651 206.891 96.406 127.5 164.579 87.1988C232.751 46.8981 317.794 45.587 378.129 75.6083C438.102 105.529 473.106 166.319 515.839 238.613Z"}})])])])}),[],!1,null,null,null);e.default=component.exports}}]);