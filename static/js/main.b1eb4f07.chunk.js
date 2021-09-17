(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{32:function(t,e,i){},33:function(t,e,i){},43:function(t,e,i){},50:function(t,e,i){},51:function(t,e,i){},52:function(t,e,i){},53:function(t,e,i){"use strict";i.r(e);var s=i(1),n=i(13),a=i.n(n),r=(i(32),i(9)),c=i(3),o=i(7),l=(i(33),i(2)),h=i.n(l),d=i(10),u=(i(43),i(0)),j=function(t){Object(c.f)();return Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)(r.b,{to:t.href,className:"link",children:[Object(u.jsx)("img",{src:t.src}),Object(u.jsx)("div",{id:"game-title",children:Object(u.jsx)("h1",{children:t.title})}),Object(u.jsx)("footer",{children:Object(u.jsx)("p",{children:t.description})})]})})},m=(i(50),function(t){return Object(u.jsx)("div",{className:"arrowButton",children:Object(u.jsx)("p",{children:t.symbol})})}),p=(i(51),0),b=0,x=function(t){var e=function(){var e=[];return window.outerWidth>1090?e.push(t.cards[b-1<0?t.cards.length-1:b-1],t.cards[b],t.cards[b+1>t.cards.length-1?0:b+1]):e.push(t.cards[b]),e},i=Object(s.useState)(e()),n=Object(o.a)(i,2),a=n[0],r=n[1],c=Object(s.useState)([]),l=Object(o.a)(c,2),d=l[0],j=l[1],x=function(e){for(var i=[],s=0;s<t.cards.length;s++)i.push(s===e?"\u2b24":"\u3007");j(i)};return Object(s.useEffect)((function(){x(p)}),[]),window.onresize=function(){r(e()),h()("#card-1").css({filter:"blur(1.5px)"}),h()("#card-2").css({filter:"blur(0)"}),h()("#card-3").css({filter:"blur(1.5px)"})},Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{id:"carousel",children:[Object(u.jsx)("span",{id:"left-arrow",onClick:function(){p--,b--,p=p<0?t.cards.length-1:p,b=b<0?t.cards.length-1:b,r(e()),x(p),h()("#card-1").css({transform:"translateY(0px)",filter:"blur(0)"}),h()("#card-3").css({transform:"translateY(0px)",filter:"blur(0)"}),setTimeout((function(){h()("#card-3").css({transform:"translateY(10px)"}),h()("#card-1").css({transform:"translateY(10px)"}),h()("#card-1").css({filter:"blur(1.5px)"}),h()("#card-3").css({filter:"blur(1.5px)"})}),250)},children:Object(u.jsx)(m,{symbol:"\u25c0"})}),a.map((function(t,e){return 1==a.length?Object(u.jsx)("div",{id:"card-2",children:t}):Object(u.jsx)("div",{id:"card-"+(e+1),children:t})})),Object(u.jsx)("span",{id:"right-arrow",onClick:function(){p++,b=++b>t.cards.length-1?0:b,p=p>=t.cards.length?0:p,r(e()),x(p),h()("#card-1").css({transform:"translateY(0px)"}),h()("#card-3").css({transform:"translateY(0px)"}),h()("#card-1").css({filter:"blur(0)"}),h()("#card-3").css({filter:"blur(0)"}),setTimeout((function(){h()("#card-3").css({transform:"translateY(10px)"}),h()("#card-1").css({transform:"translateY(10px)"}),h()("#card-1").css({filter:"blur(1.5px)"}),h()("#card-3").css({filter:"blur(1.5px)"})}),250)},children:Object(u.jsx)(m,{symbol:"\u25b6"})})]}),Object(u.jsx)("div",{id:"symbol-list",children:d})]})},f=function(){return Object(u.jsxs)("div",{id:"unity",children:[Object(u.jsx)("h1",{id:"title",children:"Unity"}),Object(u.jsx)("p",{id:"unity-description",children:"Take a look at some of my creations and learn about my journey to become a game developer."}),Object(u.jsx)("div",{className:"carousel",children:Object(u.jsx)(x,{cards:[Object(u.jsx)(j,{src:"https://bl6pap003files.storage.live.com/y4mbG7AE4JqapG8OgvXNChAMXy_NOv6esQjJSsPXRi-rEpevw4IWdbS6nz1Pi6NexouLOdjy0xzDmI2ZONB3loo9J9oxB9n5BUfGSUkSjlX27Zn59aXHSZ5Dukd46KA0I-k_bcLF6y0hwOOEVQaXLJyTaU7sFm_J-quawnnT7Z1OtQjy25vzIliN4C-zq7F6wWK?width=1334&height=750&cropmode=none",title:"2D Platformer",description:"This game doesn't have a name because I never fully completed it. This game was the first time I tried to use tilemaps and some other features that I had to learn.",href:"/Platformer"}),Object(u.jsx)(j,{src:"https://dsm01pap001files.storage.live.com/y4mf2eZ7zHDygDIBJPBcfonOoIXxG5XA3RlAwPAAD9YaVBi2hfqPQcDK4XCqz4XmbyzlEzj_VlQag-K-vctqtkflQyVu3T1W56VwpIN_WDvY_2LMenjH-i_Kpu71ZlRyhqlmI-tAJyJ9c-0IuMx4YsgCkO7pXxLI3cLTE82FWgtWcMrc8uIIv6HCJCDZ7yT4DUk?width=1334&height=750&cropmode=none",title:"PooperPunk",description:"This was among one of the first games that i've ever made! It features a dynamic 'choose your own path' system with a good storyline.",href:"/PooperPunk"}),Object(u.jsx)(j,{src:"https://bl6pap003files.storage.live.com/y4mDXHWEzzap4XZHLIKvVPJGJ_vPGwlMuwqGtzi7uKIKO5tTljIe19lOyLuz7pPlDTRlp3gEcN8PYV3LoPOgb9VE3UZleiBBJl1TMMOHYQsPTtZYVvLvS3vz1WKCYFYMEJRX2uJlHh2Bx4y1f79kRtKhSJVqvcKM-y5UA3op1zRrr153i1DJ2i9H2Rd1zZPWeW3?width=1334&height=750&cropmode=none",title:"Number Wizard",description:"Number Wizard is a spin off of a very basic game that most programmers learn to make. It will eventually guess the number that you have in your head using basic math and logic.",href:"/NumberWizard"}),Object(u.jsx)(j,{src:"https://bl6pap003files.storage.live.com/y4mQ6g73PxrW1G6wSCLNE6xu1WNzMpKS4C9pbbVzr2vfuZDheJErFZ9Of9WsATMuCiairzEqjJeCB3HA55_4YidP0F2-V-Cjm2VkZyOvllSYbvIRUpf7wiMKG1NsxLKc5yb_kxeYdWiwpUgY2x1ctJYOpL81XtGQ7O3X3lrAoBC5sVoDxIfFbhSbv5wo3NXgfvQ?width=1334&height=750&cropmode=none",title:"Block Breaker",description:"This game was one of the first BIG games that i've made. This was the game that taught me the most about unity's 2D engine.",href:"/BlockBreaker"})]})})]})},g=(i(52),function(){var t=Object(s.useState)(window.pageYOffset),e=Object(o.a)(t,2),i=e[0],n=e[1],a=function(){n(window.scrollY),console.log(window.scrollY)};return Object(s.useEffect)((function(){return window.addEventListener("scroll",a),function(){return window.removeEventListener("scroll",a)}}),[]),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{id:"web",children:[Object(u.jsxs)("div",{id:"outer-flex",children:[Object(u.jsx)("h1",{id:"title",children:"Web Development"}),Object(u.jsxs)("div",{id:"flex",children:[Object(u.jsxs)("div",{style:{transform:"translateX(".concat(.09*i-170>=0||i-1504<0?0:.09*i-170,"px)"),opacity:"".concat(.0048*i-8)},children:[Object(u.jsx)("h1",{className:"title",children:"Html"}),Object(u.jsx)("span",{className:"underline"}),Object(u.jsx)("p",{children:"Christian Auman. Christian Auman. Christian Auman. Christian Auman. Christian Auman. Christian Auman. Christian Auman. Christian Auman."})]}),Object(u.jsxs)("div",{style:{transform:"translateY(".concat(.09*i-170>=0||i-1504<0?0:.09*i-170,"px)"),opacity:"".concat(.0048*i-8)},children:[Object(u.jsx)("h1",{className:"title",children:"Css"}),Object(u.jsx)("span",{className:"underline"}),Object(u.jsx)("p",{children:"Christian Auman. Christian Auman. Christian Auman. Christian Auman. Christian Auman. Christian Auman. Christian Auman. Christian Auman."})]}),Object(u.jsxs)("div",{style:{transform:"translateX(".concat(-(.09*i-170)<=0||i-1504<0?0:-(.09*i-170),"px)"),opacity:"".concat(.0048*i-8)},children:[Object(u.jsx)("h1",{className:"title",children:"Javascript"}),Object(u.jsx)("span",{className:"underline"}),Object(u.jsx)("p",{children:"Christian Auman. Christian Auman. Christian Auman. Christian Auman. Christian Auman. Christian Auman. Christian Auman. Christian Auman."})]})]})]}),Object(u.jsx)("img",{id:"transitionImg"}),Object(u.jsx)("img",{src:"https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png",width:"400px",className:"reactLogo",style:{transform:"translateX(".concat(i-2300<i?.5*(i-2300)-450:0,"px) rotate(").concat(.1*i,"deg)")}})]}),Object(u.jsxs)("div",{id:"react",children:[Object(u.jsx)("h1",{id:"title",children:"React"}),Object(u.jsxs)("div",{id:"flex2",children:[Object(u.jsxs)("div",{style:{transform:"translateX(".concat(.09*i-300>=0||i-2960<0?0:.09*i-300,"px)"),opacity:"".concat(.0048*i-14.87)},children:[Object(u.jsx)("h1",{className:"title",children:"Html"}),Object(u.jsx)("span",{className:"underline"}),Object(u.jsx)("p",{children:"Christian Auman. Christian Auman. Christian Auman. Christian Auman. Christian Auman. Christian Auman. Christian Auman. Christian Auman."})]}),Object(u.jsxs)("div",{style:{transform:"translateY(".concat(.09*i-300>=0||i-2960<0?0:.09*i-300,"px)"),opacity:"".concat(.0048*i-14.87)},children:[Object(u.jsx)("h1",{className:"title",children:"Css"}),Object(u.jsx)("span",{className:"underline"}),Object(u.jsx)("p",{children:"Christian Auman. Christian Auman. Christian Auman. Christian Auman. Christian Auman. Christian Auman. Christian Auman. Christian Auman."})]}),Object(u.jsxs)("div",{style:{transform:"translateX(".concat(-(.09*i-300)<=0||i-2960<0?0:-(.09*i-300),"px)"),opacity:"".concat(.0048*i-14.87)},children:[Object(u.jsx)("h1",{className:"title",children:"Javascript"}),Object(u.jsx)("span",{className:"underline"}),Object(u.jsx)("p",{children:"Christian Auman. Christian Auman. Christian Auman. Christian Auman. Christian Auman. Christian Auman. Christian Auman. Christian Auman."})]})]})]})]})}),O=new Date,v=0,y=1100;function w(t,e,i){h()("header.App-header div").is(":visible")&&setTimeout((function(){i(t.substring(0,v)),++v<=t.length?w(t,e,i):C(t,e,i)}),100)}function C(t,e,i){h()("header.App-header div").is(":visible")&&setTimeout((function(){i(t.substring(0,v)),--v>=0&&C(t,e,i)}),50)}var A=0;var I=function(){Object(s.useEffect)((function(){h()("html").css({background:"white"})}),[]);var t=Object(s.useState)(""),e=Object(o.a)(t,2),i=e[0],n=e[1],a=[", pet lover...",", game developer...",", gamer...",", varcity soccer player..."];return Object(s.useEffect)((function(){var t="",e=setInterval((function(){w(t=a[A],i,n),A=A>=a.length-1?A=0:A+1,y=125*t.length,v=0}),y);return function(){return clearInterval(e)}})),Object(u.jsxs)("div",{id:"html",className:"app",children:[Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{className:"navOptions",children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{onClick:function(){d.animateScroll.scrollTo(h()("#cSharp").position().top)},href:"#cSharp",children:"C#"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{onClick:function(){d.animateScroll.scrollTo(h()("#java").position().top)},href:"#java",children:"Java"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{onClick:function(){d.animateScroll.scrollTo(h()("#web").position().top)},href:"#web",children:"Web"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{onClick:function(){d.animateScroll.scrollTo(h()("#unity").position().top)},href:"#unity",children:"Unity"})})]})}),Object(u.jsx)("button",{className:"scrollToTop",onClick:function(){d.animateScroll.scrollToTop()},children:"\u25b3"}),Object(u.jsx)("header",{className:"App-header",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"I'm Christian Auman!"}),Object(u.jsxs)("p",{children:[O.getFullYear()-2003-(O.getMonth()<8?1:0)," years old, computer scientist",i]})]})}),Object(u.jsx)("span",{id:"#unity",children:Object(u.jsx)(f,{})}),Object(u.jsx)(g,{}),Object(u.jsxs)("div",{id:"java",children:[Object(u.jsx)("h1",{id:"title",children:"Java"}),Object(u.jsxs)("section",{children:[Object(u.jsx)("p",{children:"Im struggling to figure out what to put here..."}),Object(u.jsx)("p",{children:"Im struggling to figure out what to put here..."}),Object(u.jsx)("p",{children:"Im struggling to figure out what to put here..."}),Object(u.jsx)("p",{children:"Im struggling to figure out what to put here..."}),Object(u.jsx)("p",{children:"Im struggling to figure out what to put here..."}),Object(u.jsx)("p",{children:"Im struggling to figure out what to put here..."}),Object(u.jsx)("p",{children:"Im struggling to figure out what to put here..."})]})]}),Object(u.jsxs)("div",{id:"cSharp",children:[Object(u.jsx)("h1",{id:"title",children:"C#"}),Object(u.jsxs)("section",{children:[Object(u.jsx)("p",{children:"Im struggling to figure out what to put here..."}),Object(u.jsx)("p",{children:"Im struggling to figure out what to put here..."}),Object(u.jsx)("p",{children:"Im struggling to figure out what to put here..."}),Object(u.jsx)("p",{children:"Im struggling to figure out what to put here..."}),Object(u.jsx)("p",{children:"Im struggling to figure out what to put here..."}),Object(u.jsx)("p",{children:"Im struggling to figure out what to put here..."}),Object(u.jsx)("p",{children:"Im struggling to figure out what to put here..."})]})]})]})},k=i(8),N=i.n(k),P=function(t){var e=Object(s.useState)(window.pageYOffset),i=Object(o.a)(e,2),n=i[0],a=i[1],c=function(){a(window.pageYOffset)};return Object(s.useEffect)((function(){return h()(window).scrollTop(0),h()("html").css({background:"#212529"}),window.addEventListener("scroll",c),function(){return window.removeEventListener("scroll",c)}}),[]),Object(u.jsxs)("div",{id:N.a.page,children:[Object(u.jsx)(r.b,{to:"",id:N.a.back,children:Object(u.jsx)(m,{symbol:"\u25c0 Home"})}),Object(u.jsxs)("div",{id:N.a.leftSide,children:[Object(u.jsx)("div",{className:N.a.titleBackground,children:Object(u.jsx)("h1",{className:N.a.title,style:{transform:"skewY(".concat(Math.pow(Math.pow(n,4),.1)/4,"deg)"),opacity:"".concat(-Math.pow(Math.pow(n,4),.2)/4*.05+1<=0?0:-Math.pow(Math.pow(n,4),.2)/4*.05+1)},children:t.title})}),Object(u.jsx)("img",{src:t.src,style:{transform:"translateY(".concat(.6*n,"px)")}})]}),Object(u.jsxs)("div",{id:N.a.descriptionBackground,children:[Object(u.jsx)("h1",{id:N.a.descriptionTitle,children:"About"}),Object(u.jsx)("p",{className:N.a.description,children:t.description})]})]})},T=function(){return Object(u.jsx)(P,{className:"unity-page",title:"Number Wizard",src:"https://bl6pap003files.storage.live.com/y4mDXHWEzzap4XZHLIKvVPJGJ_vPGwlMuwqGtzi7uKIKO5tTljIe19lOyLuz7pPlDTRlp3gEcN8PYV3LoPOgb9VE3UZleiBBJl1TMMOHYQsPTtZYVvLvS3vz1WKCYFYMEJRX2uJlHh2Bx4y1f79kRtKhSJVqvcKM-y5UA3op1zRrr153i1DJ2i9H2Rd1zZPWeW3?width=1334&height=750&cropmode=none",description:"Number Wizard is a spin off of a very basic game that most programmers learn to make. It will eventually guess the number that you have in your head using basic math and logic."})},_=function(){return Object(u.jsx)(P,{className:"unity-page",title:"Pooper Punk",src:"https://dsm01pap001files.storage.live.com/y4mf2eZ7zHDygDIBJPBcfonOoIXxG5XA3RlAwPAAD9YaVBi2hfqPQcDK4XCqz4XmbyzlEzj_VlQag-K-vctqtkflQyVu3T1W56VwpIN_WDvY_2LMenjH-i_Kpu71ZlRyhqlmI-tAJyJ9c-0IuMx4YsgCkO7pXxLI3cLTE82FWgtWcMrc8uIIv6HCJCDZ7yT4DUk?width=1334&height=750&cropmode=none",description:"This was among one of the first games that i've ever made! It features a dynamic 'choose your own path' system with a good storyline."})},Y=function(){return Object(u.jsx)(P,{className:"unity-page",title:"Block Breaker",src:"https://bl6pap003files.storage.live.com/y4mQ6g73PxrW1G6wSCLNE6xu1WNzMpKS4C9pbbVzr2vfuZDheJErFZ9Of9WsATMuCiairzEqjJeCB3HA55_4YidP0F2-V-Cjm2VkZyOvllSYbvIRUpf7wiMKG1NsxLKc5yb_kxeYdWiwpUgY2x1ctJYOpL81XtGQ7O3X3lrAoBC5sVoDxIfFbhSbv5wo3NXgfvQ?width=1334&height=750&cropmode=none",description:"This game was one of the first BIG games that i've made. This was the game that taught me the most about unity's 2D engine."})},J=function(){return Object(u.jsx)(P,{className:"unity-page",title:"2D Platformer",src:"https://bl6pap003files.storage.live.com/y4mbG7AE4JqapG8OgvXNChAMXy_NOv6esQjJSsPXRi-rEpevw4IWdbS6nz1Pi6NexouLOdjy0xzDmI2ZONB3loo9J9oxB9n5BUfGSUkSjlX27Zn59aXHSZ5Dukd46KA0I-k_bcLF6y0hwOOEVQaXLJyTaU7sFm_J-quawnnT7Z1OtQjy25vzIliN4C-zq7F6wWK?width=1334&height=750&cropmode=none",description:"This game doesn't have a name because I never fully completed it. This game was the first time I tried to use tilemaps and some other features that I had to learn."})},z=function(){return Object(u.jsx)(r.a,{children:Object(u.jsx)("div",{children:Object(u.jsxs)(c.c,{children:[Object(u.jsx)(c.a,{path:"/",exact:!0,children:Object(u.jsx)(I,{})}),Object(u.jsx)(c.a,{path:"/NumberWizard",exact:!0,children:Object(u.jsx)(T,{})}),Object(u.jsx)(c.a,{path:"/PooperPunk",exact:!0,children:Object(u.jsx)(_,{})}),Object(u.jsx)(c.a,{path:"/BlockBreaker",exact:!0,children:Object(u.jsx)(Y,{})}),Object(u.jsx)(c.a,{path:"/Platformer",exact:!0,children:Object(u.jsx)(J,{})})]})})})};a.a.render(Object(u.jsx)(z,{}),document.getElementById("root"))},8:function(t,e,i){t.exports={page:"UnityPage_page__sJppV",title:"UnityPage_title__3DZ6X",titleBackground:"UnityPage_titleBackground__3Mg8S",leftSide:"UnityPage_leftSide__D1Edq",descriptionBackground:"UnityPage_descriptionBackground__Zxi5V",description:"UnityPage_description__3Y21c",descriptionTitle:"UnityPage_descriptionTitle__3-CrG",back:"UnityPage_back__28YmO"}}},[[53,1,2]]]);
//# sourceMappingURL=main.b1eb4f07.chunk.js.map