"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[696],{696:function(n,e,i){i.r(e),i.d(e,{default:function(){return z}});var r,t,a,s,A,d,f=i(152),l=i(168),x=i(791),c=i(871),o=i(660),p=i(697),h=i(751),u=i(933),m=i(184),Z=h.ZP.div(r||(r=(0,l.Z)(["\n  border: 1px solid #fff;\n  border-radius: 6px;\n  padding: 10px;\n"]))),P=h.ZP.ul(t||(t=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  margin: -5px;\n  color: #fff;\n  list-style: none;\n  font-family: 'Jura', sans-serif;\n"]))),B=h.ZP.li(a||(a=(0,l.Z)(["\n  display: flex;\n  margin: 5px;\n  width: calc((100% - 35px) / 3);\n"]))),v=h.ZP.div(s||(s=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n"]))),C=h.ZP.span(A||(A=(0,l.Z)(["\n  font-size: 18px;\n  margin-bottom: 5px;\n"]))),D=h.ZP.span(d||(d=(0,l.Z)(["\n  font-size: 24px;\n  margin-bottom: 15px;\n"])));function z(){var n=(0,x.useState)(null),e=(0,f.Z)(n,2),i=e[0],r=e[1],t=(0,x.useState)("idle"),a=(0,f.Z)(t,2),s=a[0],A=a[1],d=(0,c.UO)().id;return(0,x.useEffect)((function(){A("pending"),(0,p.xc)(d).then((function(n){r(n),A("resolved")}))}),[d]),(0,m.jsxs)(m.Fragment,{children:["pending"===s&&(0,m.jsx)(u.Z,{}),i&&"resolved"===s&&(0,m.jsx)(Z,{children:(0,m.jsx)(P,{children:i.cast.map((function(n){return(0,m.jsxs)(B,{children:[(0,m.jsx)("img",{src:n.profile_path?"https://image.tmdb.org/t/p/original".concat(n.profile_path):o,alt:n.name,height:"225",width:"150px"}),(0,m.jsxs)(v,{children:[(0,m.jsx)(C,{children:"Full name:"}),(0,m.jsx)(D,{children:n.name}),(0,m.jsx)(C,{children:"Character:"}),(0,m.jsx)(D,{children:n.character})]})]},n.id)}))})})]})}},660:function(n){n.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=696.6ba551e2.chunk.js.map