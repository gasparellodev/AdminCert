(this["webpackJsonp@devias/material-kit-pro-react"]=this["webpackJsonp@devias/material-kit-pro-react"]||[]).push([[63],{1245:function(t,e){},1585:function(t,e,n){"use strict";n.r(e);var a=n(11),r=n.n(a),c=n(19),i=n(14),o=n(18),s=n(78),p=n(1),g=n(27),l=n(124),f=n(717),u=n.n(f),h=n(1244),m=n.n(h),d=n(1612),b=n(1542),j=n.n(b),x=n(443),O=n(5),v=n(126),S=n(125),k=n(0),y=["href","children"],B=["language","value"],z=Object(O.a)("div")((function(t){var e=t.theme;return{color:e.palette.text.primary,fontFamily:e.typography.fontFamily,"& blockquote":{borderLeft:"4px solid ".concat(e.palette.text.secondary),marginBottom:e.spacing(2),paddingBottom:e.spacing(1),paddingLeft:e.spacing(2),paddingTop:e.spacing(1),"& > p":{color:e.palette.text.secondary,marginBottom:0}},"& code":{color:"#01ab56",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",fontSize:14,paddingLeft:2,paddingRight:2},"& h1":{fontSize:35,fontWeight:500,letterSpacing:"-0.24px",marginBottom:e.spacing(2),marginTop:e.spacing(6)},"& h2":{fontSize:29,fontWeight:500,letterSpacing:"-0.24px",marginBottom:e.spacing(2),marginTop:e.spacing(6)},"& h3":{fontSize:24,fontWeight:500,letterSpacing:"-0.06px",marginBottom:e.spacing(2),marginTop:e.spacing(6)},"& h4":{fontSize:20,fontWeight:500,letterSpacing:"-0.06px",marginBottom:e.spacing(2),marginTop:e.spacing(4)},"& h5":{fontSize:16,fontWeight:500,letterSpacing:"-0.05px",marginBottom:e.spacing(2),marginTop:e.spacing(2)},"& h6":{fontSize:14,fontWeight:500,letterSpacing:"-0.05px",marginBottom:e.spacing(2),marginTop:e.spacing(2)},"& li":{fontSize:14,lineHeight:1.5,marginBottom:e.spacing(2),marginLeft:e.spacing(4)},"& p":{fontSize:14,lineHeight:1.5,marginBottom:e.spacing(2),"& > a":{color:e.palette.secondary.main}}}})),W={link:function(t){var e=t.href,n=t.children,a=Object(s.a)(t,y);return e.startsWith("http")?Object(k.jsx)("a",Object(o.a)(Object(o.a)({href:e,rel:"nofollow noreferrer noopener",target:"_blank"},a),{},{children:n})):Object(k.jsx)("a",Object(o.a)(Object(o.a)({href:e},a),{},{children:n}))},code:function(t){var e=t.language,n=t.value,a=Object(s.a)(t,B);return Object(k.jsx)(d.a,Object(o.a)(Object(o.a)({language:e,style:j.a},a),{},{children:n}))}};e.default=function(){var t=Object(g.h)(),e=Object(g.g)().pathname,n=Object(v.a)().settings,a=Object(p.useState)(null),o=Object(i.a)(a,2),s=o[0],f=o[1];return Object(p.useEffect)((function(){S.a.push({event:"page_view"})}),[s]),Object(p.useEffect)((function(){(function(){var n=Object(c.a)(r.a.mark((function n(){var a,c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,e.startsWith("/docs")){n.next=4;break}return t("/404",{replace:!0}),n.abrupt("return");case 4:return n.next=6,fetch("/static".concat(e,".md"),{headers:{accept:"text/markdown"}});case 6:if(200===(a=n.sent).status){n.next=10;break}return t(404===a.status?"/404":"/500",{replace:!0}),n.abrupt("return");case 10:return n.next=12,a.text();case 12:c=n.sent,f(m()(c)),n.next=20;break;case 16:n.prev=16,n.t0=n.catch(0),console.error(n.t0),t("/500");case 20:case"end":return n.stop()}}),n,null,[[0,16]])})));return function(){return n.apply(this,arguments)}})()()}),[e]),s?Object(k.jsxs)("div",{children:[Object(k.jsx)(l.a,{children:Object(k.jsx)("title",{children:"Docs: ".concat(s.data.title," | Material Kit Pro")})}),Object(k.jsx)(x.a,{maxWidth:!!n.compact&&"lg",sx:{pb:"120px"},children:Object(k.jsx)(z,{children:Object(k.jsx)(u.a,{escapeHtml:!0,renderers:W,source:s.content})})})]}):null}}}]);
//# sourceMappingURL=63.9f7cbea8.chunk.js.map