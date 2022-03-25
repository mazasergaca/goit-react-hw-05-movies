"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[573],{836:function(n,e,t){t.d(e,{Z:function(){return c}});var r,i=t(168),A=(t(791),t(751)),o=t(184),a=A.ZP.section(r||(r=(0,i.Z)(["\npadding 25px 0"])));function c(n){var e=n.children;return(0,o.jsx)(a,{children:e})}},933:function(n,e,t){t.d(e,{Z:function(){return s}});var r,i=t(168),A=t(375),o=(t(791),t(751)),a=t(184),c=o.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n"])));function s(){return(0,a.jsx)(c,{children:(0,a.jsx)(A.iT,{ariaLabel:"loading-indicator",height:100,width:100,strokeWidth:5,color:"rgb(255, 65, 65)",secondaryColor:"#fff"})})}},697:function(n,e,t){t.d(e,{wr:function(){return l},BG:function(){return f},bI:function(){return u},xc:function(){return d},Hx:function(){return p}});var r=t(861),i=t(757),A=t.n(i),o="https://api.themoviedb.org/3",a="af82d7be8f57d00f4e04fac446f5a0d5";function c(n){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(A().mark((function n(e){var t;return A().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e);case 2:if(!(t=n.sent).ok){n.next=9;break}return n.next=6,t.json();case 6:n.t0=n.sent,n.next=10;break;case 9:n.t0=Promise.reject(new Error("Not Found"));case 10:return n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(){return c("".concat(o,"/trending/all/day?api_key=").concat(a))}function f(n){return c("".concat(o,"/movie/").concat(n,"?api_key=").concat(a))}function u(n){return c("".concat(o,"/search/movie?api_key=").concat(a,"&language=en-US&page=1&include_adult=false&query=").concat(n))}function d(n){return c("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(a))}function p(n){return c("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(a,"&language=en-US&page=1"))}},573:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r,i,A,o,a,c,s,l,f,u=t(152),d=t(168),p=t(791),k=t(504),x=t(871),S=t(697),h=t(375),m=t(203),J=t(751),v=t(933),y=t(221),Z=t(836),g=t(184),j=(0,p.lazy)((function(){return t.e(696).then(t.bind(t,696))})),L=(0,p.lazy)((function(){return t.e(6).then(t.bind(t,6))})),w=J.ZP.button(r||(r=(0,d.Z)(["\n  display: inline-block;\n  padding: 5px 15px;\n  margin-bottom: 10px;\n  cursor: pointer;\n  font-family: 'Paytone One', sans-serif;\n  font-size: 18px;\n  border-radius: 4px;\n  border: none;\n  color: #fff;\n  background-color: transparent;\n  transition: color 250ms linear, background-color 250ms linear;\n\n  &:hover {\n    color: rgb(255, 65, 65);\n    background-color: rgb(48, 48, 48);\n  }\n"]))),R=J.ZP.div(i||(i=(0,d.Z)(["\n  display: flex;\n  margin-bottom: 15px;\n  border: 1px solid #fff;\n  border-radius: 6px;\n  overflow: hidden;\n"]))),b=J.ZP.h2(A||(A=(0,d.Z)(["\n  margin-bottom: 25px;\n  font-family: 'Jura', sans-serif;\n  font-size: 34px;\n  color: #fff;\n  text-align: center;\n"]))),X=J.ZP.div(o||(o=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n"]))),V=J.ZP.span(a||(a=(0,d.Z)(["\n  margin-bottom: 10px;\n  font-size: 20px;\n  color: #fff;\n"]))),T=J.ZP.span(c||(c=(0,d.Z)(["\n  margin-bottom: 5px;\n  font-size: 24px;\n  color: #fff;\n"]))),I=J.ZP.h2(s||(s=(0,d.Z)(["\n  font-size: 34px;\n  font-family: 'Jura', sans-serif;\n  color: #fff;\n  text-align: center;\n"]))),K=J.ZP.div(l||(l=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 15px;\n"]))),N=J.ZP.div(f||(f=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 50px;\n"]))),U=function(n){return{color:n.isActive?"rgb(255, 65, 65)":"rgb(250, 250, 250)"}};function H(){var n=(0,p.useState)(null),e=(0,u.Z)(n,2),t=e[0],r=e[1],i=(0,p.useState)("idle"),A=(0,u.Z)(i,2),o=A[0],a=A[1],c=(0,x.UO)().id,s=(0,x.TH)(),l=(0,x.s0)();(0,p.useEffect)((function(){a("pending"),(0,S.BG)(c).then((function(n){r(n),a("resolved")}))}),[c]);return(0,g.jsx)(Z.Z,{children:(0,g.jsxs)(y.Z,{children:[(0,g.jsx)(w,{type:"button",onClick:function(){var n,e,t;l(null!==(n=null===s||void 0===s||null===(e=s.state)||void 0===e||null===(t=e.from)||void 0===t?void 0:t.location)&&void 0!==n?n:"/movies")},children:"Go Back"}),"pending"===o&&(0,g.jsx)(v.Z,{}),t&&"resolved"===o&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(R,{children:[(0,g.jsx)("div",{children:(0,g.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):m,width:"400px",alt:t.title})}),(0,g.jsxs)(X,{children:[(0,g.jsx)(b,{children:t.title}),(0,g.jsx)(T,{children:"Genres:"}),(0,g.jsx)(V,{children:t.genres.map((function(n){return n.name})).join(", ")}),(0,g.jsx)(T,{children:"Release date:"}),(0,g.jsx)(V,{children:t.release_date}),(0,g.jsx)(T,{children:"User score:"}),(0,g.jsx)(V,{children:t.vote_average}),(0,g.jsx)(T,{children:"Overview:"}),(0,g.jsxs)(V,{children:[" ",t.overview]})]})]}),(0,g.jsx)(I,{children:"Additional information"}),(0,g.jsxs)(K,{children:[(0,g.jsx)(k.OL,{to:"cast",style:U,className:"nav-link",children:"Cast"}),(0,g.jsx)(k.OL,{to:"reviews",style:U,className:"nav-link",children:"Reviews"})]}),(0,g.jsx)(p.Suspense,{fallback:(0,g.jsx)(N,{children:(0,g.jsx)(h.s5,{width:"100",strokeColor:"#fff",strokeWidth:"1"})}),children:(0,g.jsxs)(x.Z5,{children:[(0,g.jsx)(x.AW,{path:"cast",element:(0,g.jsx)(j,{})}),(0,g.jsx)(x.AW,{path:"reviews",element:(0,g.jsx)(L,{})})]})})]})]})})}},203:function(n){n.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=573.3bdf1c45.chunk.js.map