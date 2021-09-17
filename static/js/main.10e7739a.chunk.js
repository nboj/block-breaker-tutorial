(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},43:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(13),i=c.n(a),n=(c(32),c(3)),r=c(7),l=(c(33),c(2)),o=c.n(l),d=c(10),j=(c(43),c(9)),p=c(0),h=function(e){Object(n.e)();return Object(p.jsx)("div",{className:"card",children:Object(p.jsxs)(j.b,{to:e.href,className:"link",children:[Object(p.jsx)("img",{src:e.src}),Object(p.jsx)("div",{id:"game-title",children:Object(p.jsx)("h1",{children:e.title})}),Object(p.jsx)("footer",{children:Object(p.jsx)("p",{children:e.description})})]})})},m=(c(50),function(e){return Object(p.jsx)("div",{className:"arrowButton",children:Object(p.jsx)("p",{children:e.symbol})})}),x=(c(51),0),b=0,u=function(e){var t=function(){var t=[];return window.outerWidth>1090?t.push(e.cards[b-1<0?e.cards.length-1:b-1],e.cards[b],e.cards[b+1>e.cards.length-1?0:b+1]):t.push(e.cards[b]),t},c=Object(s.useState)(t()),a=Object(r.a)(c,2),i=a[0],n=a[1],l=Object(s.useState)([]),d=Object(r.a)(l,2),j=d[0],h=d[1],u=function(t){for(var c=[],s=0;s<e.cards.length;s++)c.push(s===t?"\u2b24":"\u3007");h(c)};return Object(s.useEffect)((function(){u(x)}),[]),window.onresize=function(){n(t()),o()("#card-1").css({filter:"blur(1.5px)"}),o()("#card-2").css({filter:"blur(0)"}),o()("#card-3").css({filter:"blur(1.5px)"})},Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{id:"carousel",children:[Object(p.jsx)("span",{id:"left-arrow",onClick:function(){x--,b--,x=x<0?e.cards.length-1:x,b=b<0?e.cards.length-1:b,n(t()),u(x),o()("#card-1").css({transform:"translateY(0px)",filter:"blur(0)"}),o()("#card-3").css({transform:"translateY(0px)",filter:"blur(0)"}),setTimeout((function(){o()("#card-3").css({transform:"translateY(10px)"}),o()("#card-1").css({transform:"translateY(10px)"}),o()("#card-1").css({filter:"blur(1.5px)"}),o()("#card-3").css({filter:"blur(1.5px)"})}),250)},children:Object(p.jsx)(m,{symbol:"\u25c0"})}),i.map((function(e,t){return 1==i.length?Object(p.jsx)("div",{id:"card-2",children:e}):Object(p.jsx)("div",{id:"card-"+(t+1),children:e})})),Object(p.jsx)("span",{id:"right-arrow",onClick:function(){x++,b=++b>e.cards.length-1?0:b,x=x>=e.cards.length?0:x,n(t()),u(x),o()("#card-1").css({transform:"translateY(0px)"}),o()("#card-3").css({transform:"translateY(0px)"}),o()("#card-1").css({filter:"blur(0)"}),o()("#card-3").css({filter:"blur(0)"}),setTimeout((function(){o()("#card-3").css({transform:"translateY(10px)"}),o()("#card-1").css({transform:"translateY(10px)"}),o()("#card-1").css({filter:"blur(1.5px)"}),o()("#card-3").css({filter:"blur(1.5px)"})}),250)},children:Object(p.jsx)(m,{symbol:"\u25b6"})})]}),Object(p.jsx)("div",{id:"symbol-list",children:j})]})},O=function(){return Object(p.jsxs)("div",{id:"unity",children:[Object(p.jsx)("h1",{id:"title",children:"Unity"}),Object(p.jsx)("p",{id:"unity-description",children:"Take a look at some of my creations and learn about my journey to become a game developer."}),Object(p.jsx)("div",{className:"carousel",children:Object(p.jsx)(u,{cards:[Object(p.jsx)(h,{src:"https://bl6pap003files.storage.live.com/y4mbG7AE4JqapG8OgvXNChAMXy_NOv6esQjJSsPXRi-rEpevw4IWdbS6nz1Pi6NexouLOdjy0xzDmI2ZONB3loo9J9oxB9n5BUfGSUkSjlX27Zn59aXHSZ5Dukd46KA0I-k_bcLF6y0hwOOEVQaXLJyTaU7sFm_J-quawnnT7Z1OtQjy25vzIliN4C-zq7F6wWK?width=1334&height=750&cropmode=none",title:"2D Platformer",description:"This game doesn't have a name because I never fully completed it. This game was the first time I tried to use tilemaps and some other features that I had to learn.",href:"/Platformer"}),Object(p.jsx)(h,{src:"https://dsm01pap001files.storage.live.com/y4mf2eZ7zHDygDIBJPBcfonOoIXxG5XA3RlAwPAAD9YaVBi2hfqPQcDK4XCqz4XmbyzlEzj_VlQag-K-vctqtkflQyVu3T1W56VwpIN_WDvY_2LMenjH-i_Kpu71ZlRyhqlmI-tAJyJ9c-0IuMx4YsgCkO7pXxLI3cLTE82FWgtWcMrc8uIIv6HCJCDZ7yT4DUk?width=1334&height=750&cropmode=none",title:"PooperPunk",description:"This was among one of the first games that i've ever made! It features a dynamic 'choose your own path' system with a good storyline.",href:"/PooperPunk"}),Object(p.jsx)(h,{src:"https://bl6pap003files.storage.live.com/y4mDXHWEzzap4XZHLIKvVPJGJ_vPGwlMuwqGtzi7uKIKO5tTljIe19lOyLuz7pPlDTRlp3gEcN8PYV3LoPOgb9VE3UZleiBBJl1TMMOHYQsPTtZYVvLvS3vz1WKCYFYMEJRX2uJlHh2Bx4y1f79kRtKhSJVqvcKM-y5UA3op1zRrr153i1DJ2i9H2Rd1zZPWeW3?width=1334&height=750&cropmode=none",title:"Number Wizard",description:"Number Wizard is a spin off of a very basic game that most programmers learn to make. It will eventually guess the number that you have in your head using basic math and logic.",href:"/NumberWizard"}),Object(p.jsx)(h,{src:"https://bl6pap003files.storage.live.com/y4mQ6g73PxrW1G6wSCLNE6xu1WNzMpKS4C9pbbVzr2vfuZDheJErFZ9Of9WsATMuCiairzEqjJeCB3HA55_4YidP0F2-V-Cjm2VkZyOvllSYbvIRUpf7wiMKG1NsxLKc5yb_kxeYdWiwpUgY2x1ctJYOpL81XtGQ7O3X3lrAoBC5sVoDxIfFbhSbv5wo3NXgfvQ?width=1334&height=750&cropmode=none",title:"Block Breaker",description:"This game was one of the first BIG games that i've made. This was the game that taught me the most about unity's 2D engine.",href:"/BlockBreaker"})]})})]})},f=(c(52),function(){var e=Object(s.useState)(window.pageYOffset),t=Object(r.a)(e,2),c=t[0],a=t[1],i=function(){a(window.scrollY),console.log(window.scrollY)};return Object(s.useEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i)}}),[]),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{id:"web",children:[Object(p.jsxs)("div",{id:"outer-flex",children:[Object(p.jsx)("h1",{id:"title",children:"Web Development"}),Object(p.jsxs)("div",{id:"flex",children:[Object(p.jsxs)("div",{style:{transform:"translateX(".concat(.09*c-170>=0||c-1504<0?0:.09*c-170,"px)"),opacity:"".concat(.0048*c-8)},children:[Object(p.jsx)("h1",{className:"title",children:"Html"}),Object(p.jsx)("span",{className:"underline"}),Object(p.jsx)("p",{children:"Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."})]}),Object(p.jsxs)("div",{style:{transform:"translateY(".concat(.09*c-170>=0||c-1504<0?0:.09*c-170,"px)"),opacity:"".concat(.0048*c-8)},children:[Object(p.jsx)("h1",{className:"title",children:"Css"}),Object(p.jsx)("span",{className:"underline"}),Object(p.jsx)("p",{children:"Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."})]}),Object(p.jsxs)("div",{style:{transform:"translateX(".concat(-(.09*c-170)<=0||c-1504<0?0:-(.09*c-170),"px)"),opacity:"".concat(.0048*c-8)},children:[Object(p.jsx)("h1",{className:"title",children:"Javascript"}),Object(p.jsx)("span",{className:"underline"}),Object(p.jsx)("p",{children:"Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."})]})]})]}),Object(p.jsx)("img",{id:"transitionImg"}),Object(p.jsx)("img",{src:"https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png",width:"400px",className:"reactLogo",style:{transform:"translateX(".concat(c-2300<c?.5*(c-2300)-450:0,"px) rotate(").concat(.1*c,"deg)")}})]}),Object(p.jsxs)("div",{id:"react",children:[Object(p.jsx)("h1",{id:"title",children:"React"}),Object(p.jsxs)("div",{id:"flex2",children:[Object(p.jsxs)("div",{style:{transform:"translateX(".concat(.09*c-300>=0||c-2960<0?0:.09*c-300,"px)"),opacity:"".concat(.0048*c-14.87)},children:[Object(p.jsx)("h1",{className:"title",children:"Html"}),Object(p.jsx)("span",{className:"underline"}),Object(p.jsx)("p",{children:"Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."})]}),Object(p.jsxs)("div",{style:{transform:"translateY(".concat(.09*c-300>=0||c-2960<0?0:.09*c-300,"px)"),opacity:"".concat(.0048*c-14.87)},children:[Object(p.jsx)("h1",{className:"title",children:"Css"}),Object(p.jsx)("span",{className:"underline"}),Object(p.jsx)("p",{children:"Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."})]}),Object(p.jsxs)("div",{style:{transform:"translateX(".concat(-(.09*c-300)<=0||c-2960<0?0:-(.09*c-300),"px)"),opacity:"".concat(.0048*c-14.87)},children:[Object(p.jsx)("h1",{className:"title",children:"Javascript"}),Object(p.jsx)("span",{className:"underline"}),Object(p.jsx)("p",{children:"Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."})]})]})]})]})}),g=new Date,v=0,S=1100;function y(e,t,c){o()("header.App-header div").is(":visible")&&setTimeout((function(){c(e.substring(0,v)),++v<=e.length?y(e,t,c):w(e,t,c)}),100)}function w(e,t,c){o()("header.App-header div").is(":visible")&&setTimeout((function(){c(e.substring(0,v)),--v>=0&&w(e,t,c)}),50)}var T=0;var E=function(){Object(s.useEffect)((function(){o()("html").css({background:"white"})}),[]);var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],i=[", pet lover...",", game developer...",", gamer...",", varcity soccer player..."];return Object(s.useEffect)((function(){var e="",t=setInterval((function(){y(e=i[T],c,a),T=T>=i.length-1?T=0:T+1,S=125*e.length,v=0}),S);return function(){return clearInterval(t)}})),Object(p.jsxs)("div",{id:"html",className:"app",children:[Object(p.jsx)("nav",{children:Object(p.jsxs)("ul",{className:"navOptions",children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{onClick:function(){d.animateScroll.scrollTo(o()("#cSharp").position().top)},href:"#cSharp",children:"C#"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{onClick:function(){d.animateScroll.scrollTo(o()("#java").position().top)},href:"#java",children:"Java"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{onClick:function(){d.animateScroll.scrollTo(o()("#web").position().top)},href:"#web",children:"Web"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{onClick:function(){d.animateScroll.scrollTo(o()("#unity").position().top)},href:"#unity",children:"Unity"})})]})}),Object(p.jsx)("button",{className:"scrollToTop",onClick:function(){d.animateScroll.scrollToTop()},children:"\u25b3"}),Object(p.jsx)("header",{className:"App-header",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"I'm Christian Auman!"}),Object(p.jsxs)("p",{children:[g.getFullYear()-2003-(g.getMonth()<8?1:0)," years old, computer scientist",c]})]})}),Object(p.jsx)("span",{id:"#unity",children:Object(p.jsx)(O,{})}),Object(p.jsx)(f,{}),Object(p.jsxs)("div",{id:"java",children:[Object(p.jsx)("h1",{id:"title",children:"Java"}),Object(p.jsxs)("section",{children:[Object(p.jsx)("p",{children:"SAMPLE TEXT"}),Object(p.jsx)("p",{children:"SAMPLE TEXT"}),Object(p.jsx)("p",{children:"SAMPLE TEXT"}),Object(p.jsx)("p",{children:"SAMPLE TEXT"}),Object(p.jsx)("p",{children:"SAMPLE TEXT"}),Object(p.jsx)("p",{children:"SAMPLE TEXT"}),Object(p.jsx)("p",{children:"SAMPLE TEXT"})]})]}),Object(p.jsxs)("div",{id:"cSharp",children:[Object(p.jsx)("h1",{id:"title",children:"C#"}),Object(p.jsxs)("section",{children:[Object(p.jsx)("p",{children:"SAMPLE TEXT"}),Object(p.jsx)("p",{children:"SAMPLE TEXT"}),Object(p.jsx)("p",{children:"SAMPLE TEXT"}),Object(p.jsx)("p",{children:"SAMPLE TEXT"}),Object(p.jsx)("p",{children:"SAMPLE TEXT"}),Object(p.jsx)("p",{children:"SAMPLE TEXT"}),Object(p.jsx)("p",{children:"SAMPLE TEXT"})]})]})]})},P=c(8),k=c.n(P),N=function(e){var t=Object(s.useState)(window.pageYOffset),c=Object(r.a)(t,2),a=c[0],i=c[1],n=function(){i(window.pageYOffset)};return Object(s.useEffect)((function(){return o()(window).scrollTop(0),o()("html").css({background:"#212529"}),window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}}),[]),Object(p.jsxs)("div",{id:k.a.page,children:[Object(p.jsx)(j.b,{to:"",id:k.a.back,children:Object(p.jsx)(m,{symbol:"\u25c0 Home"})}),Object(p.jsxs)("div",{id:k.a.leftSide,children:[Object(p.jsx)("div",{className:k.a.titleBackground,children:Object(p.jsx)("h1",{className:k.a.title,style:{transform:"skewY(".concat(Math.pow(Math.pow(a,4),.1)/4,"deg)"),opacity:"".concat(-Math.pow(Math.pow(a,4),.2)/4*.05+1<=0?0:-Math.pow(Math.pow(a,4),.2)/4*.05+1)},children:e.title})}),Object(p.jsx)("img",{src:e.src,style:{transform:"translateY(".concat(.6*a,"px)")}})]}),Object(p.jsxs)("div",{id:k.a.descriptionBackground,children:[Object(p.jsx)("h1",{id:k.a.descriptionTitle,children:"About"}),Object(p.jsx)("p",{className:k.a.description,children:e.description})]})]})},X=function(){return Object(p.jsx)(N,{className:"unity-page",title:"Number Wizard",src:"https://bl6pap003files.storage.live.com/y4mDXHWEzzap4XZHLIKvVPJGJ_vPGwlMuwqGtzi7uKIKO5tTljIe19lOyLuz7pPlDTRlp3gEcN8PYV3LoPOgb9VE3UZleiBBJl1TMMOHYQsPTtZYVvLvS3vz1WKCYFYMEJRX2uJlHh2Bx4y1f79kRtKhSJVqvcKM-y5UA3op1zRrr153i1DJ2i9H2Rd1zZPWeW3?width=1334&height=750&cropmode=none",description:"Number Wizard is a spin off of a very basic game that most programmers learn to make. It will eventually guess the number that you have in your head using basic math and logic."})},I=function(){return Object(p.jsx)(N,{className:"unity-page",title:"Pooper Punk",src:"https://dsm01pap001files.storage.live.com/y4mf2eZ7zHDygDIBJPBcfonOoIXxG5XA3RlAwPAAD9YaVBi2hfqPQcDK4XCqz4XmbyzlEzj_VlQag-K-vctqtkflQyVu3T1W56VwpIN_WDvY_2LMenjH-i_Kpu71ZlRyhqlmI-tAJyJ9c-0IuMx4YsgCkO7pXxLI3cLTE82FWgtWcMrc8uIIv6HCJCDZ7yT4DUk?width=1334&height=750&cropmode=none",description:"This was among one of the first games that i've ever made! It features a dynamic 'choose your own path' system with a good storyline."})},_=function(){return Object(p.jsx)(N,{className:"unity-page",title:"Block Breaker",src:"https://bl6pap003files.storage.live.com/y4mQ6g73PxrW1G6wSCLNE6xu1WNzMpKS4C9pbbVzr2vfuZDheJErFZ9Of9WsATMuCiairzEqjJeCB3HA55_4YidP0F2-V-Cjm2VkZyOvllSYbvIRUpf7wiMKG1NsxLKc5yb_kxeYdWiwpUgY2x1ctJYOpL81XtGQ7O3X3lrAoBC5sVoDxIfFbhSbv5wo3NXgfvQ?width=1334&height=750&cropmode=none",description:"This game was one of the first BIG games that i've made. This was the game that taught me the most about unity's 2D engine."})},M=function(){return Object(p.jsx)(N,{className:"unity-page",title:"2D Platformer",src:"https://bl6pap003files.storage.live.com/y4mbG7AE4JqapG8OgvXNChAMXy_NOv6esQjJSsPXRi-rEpevw4IWdbS6nz1Pi6NexouLOdjy0xzDmI2ZONB3loo9J9oxB9n5BUfGSUkSjlX27Zn59aXHSZ5Dukd46KA0I-k_bcLF6y0hwOOEVQaXLJyTaU7sFm_J-quawnnT7Z1OtQjy25vzIliN4C-zq7F6wWK?width=1334&height=750&cropmode=none",description:"This game doesn't have a name because I never fully completed it. This game was the first time I tried to use tilemaps and some other features that I had to learn."})},Y=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(n.a,{exact:!0,path:"/",children:Object(p.jsx)(E,{})}),Object(p.jsx)(n.a,{path:"/NumberWizard",children:Object(p.jsx)(X,{})}),Object(p.jsx)(n.a,{path:"/PooperPunk",children:Object(p.jsx)(I,{})}),Object(p.jsx)(n.a,{path:"/BlockBreaker",children:Object(p.jsx)(_,{})}),Object(p.jsx)(n.a,{path:"/Platformer",children:Object(p.jsx)(M,{})})]})};i.a.render(Object(p.jsx)(j.a,{children:Object(p.jsx)(Y,{})}),document.getElementById("root"))},8:function(e,t,c){e.exports={page:"UnityPage_page__sJppV",title:"UnityPage_title__3DZ6X",titleBackground:"UnityPage_titleBackground__3Mg8S",leftSide:"UnityPage_leftSide__D1Edq",descriptionBackground:"UnityPage_descriptionBackground__Zxi5V",description:"UnityPage_description__3Y21c",descriptionTitle:"UnityPage_descriptionTitle__3-CrG",back:"UnityPage_back__28YmO"}}},[[53,1,2]]]);
//# sourceMappingURL=main.10e7739a.chunk.js.map