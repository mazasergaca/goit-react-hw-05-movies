"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[798],{105:function(n,e,t){t.d(e,{Z:function(){return v}});var r,i,c,o,a,u=t(168),s=(t(791),t(504)),f=t(871),d=t(751),l=t(184),p=d.ZP.div(r||(r=(0,u.Z)(["\n  width: 100%;\n  height: 400px;\n"]))),h=d.ZP.img(i||(i=(0,u.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),x=d.ZP.ul(c||(c=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: -5px;\n"]))),g=d.ZP.li(o||(o=(0,u.Z)(["\n  border: 1px solid #fff;\n  margin: 5px;\n  list-style: none;\n  width: calc((100% - 40px) / 4);\n  border-radius: 6px;\n  overflow: hidden;\n"]))),m=d.ZP.p(a||(a=(0,u.Z)(["\n  padding: 10px;\n  font-size: 28px;\n  font-family: 'Jura', sans-serif;\n  color: #fff;\n  text-align: center;\n"])));function v(n){var e=n.movies,t=(0,f.TH)();return(0,l.jsx)(x,{children:e.map((function(n){return(0,l.jsx)(g,{children:(0,l.jsxs)(s.rU,{to:{pathname:"/movies/".concat(n.id)},state:{from:{location:t}},style:{display:"flex",flexDirection:"column"},children:[(0,l.jsx)(p,{children:(0,l.jsx)(h,{src:"https://image.tmdb.org/t/p/original".concat(n.poster_path)})}),(0,l.jsx)(m,{children:n.title?n.title:n.name})]})},n.id)}))})}},836:function(n,e,t){t.d(e,{Z:function(){return u}});var r,i=t(168),c=(t(791),t(751)),o=t(184),a=c.ZP.section(r||(r=(0,i.Z)(["\npadding 25px 0"])));function u(n){var e=n.children;return(0,o.jsx)(a,{children:e})}},933:function(n,e,t){t.d(e,{Z:function(){return s}});var r,i=t(168),c=t(375),o=(t(791),t(751)),a=t(184),u=o.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n"])));function s(){return(0,a.jsx)(u,{children:(0,a.jsx)(c.iT,{ariaLabel:"loading-indicator",height:100,width:100,strokeWidth:5,color:"rgb(255, 65, 65)",secondaryColor:"#fff"})})}},697:function(n,e,t){t.d(e,{wr:function(){return f},BG:function(){return d},bI:function(){return l},xc:function(){return p},Hx:function(){return h}});var r=t(861),i=t(757),c=t.n(i),o="https://api.themoviedb.org/3",a="af82d7be8f57d00f4e04fac446f5a0d5";function u(n){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e);case 2:if(!(t=n.sent).ok){n.next=9;break}return n.next=6,t.json();case 6:n.t0=n.sent,n.next=10;break;case 9:n.t0=Promise.reject(new Error("Not Found"));case 10:return n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(){return u("".concat(o,"/trending/all/day?api_key=").concat(a))}function d(n){return u("".concat(o,"/movie/").concat(n,"?api_key=").concat(a))}function l(n){return u("".concat(o,"/search/movie?api_key=").concat(a,"&language=en-US&page=1&include_adult=false&query=").concat(n))}function p(n){return u("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(a))}function h(n){return u("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(a,"&language=en-US&page=1"))}},798:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r,i=t(152),c=t(791),o=t(697),a=t(105),u=t(168),s=t(751),f=t(184),d=s.ZP.h1(r||(r=(0,u.Z)(["\n  font-size: 50px;\n  color: rgb(255, 255, 255);\n  font-family: 'Jura', sans-serif;\n  letter-spacing: 0.06em;\n  text-align: center;\n  margin-bottom: 20px;\n"])));function l(){return(0,f.jsx)(d,{children:"Trending today"})}var p=t(221),h=t(836),x=t(933);function g(){var n=(0,c.useState)([]),e=(0,i.Z)(n,2),t=e[0],r=e[1],u=(0,c.useState)("idle"),s=(0,i.Z)(u,2),d=s[0],g=s[1];return(0,c.useEffect)((function(){g("pending"),(0,o.wr)().then((function(n){g("resolved"),r(n.results)}))}),[]),(0,f.jsx)(h.Z,{children:(0,f.jsxs)(p.Z,{children:[(0,f.jsx)(l,{}),"pending"===d&&(0,f.jsx)(x.Z,{}),t&&"resolved"===d&&(0,f.jsx)(a.Z,{movies:t})]})})}}}]);
//# sourceMappingURL=798.fccdc94b.chunk.js.map