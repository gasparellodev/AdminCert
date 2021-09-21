(this["webpackJsonp@devias/material-kit-pro-react"]=this["webpackJsonp@devias/material-kit-pro-react"]||[]).push([[50],{1046:function(t,e,a){"use strict";var r=a(42),n=a(4),i=a(2),o=a(1),c=a(9),s=(a(10),a(70)),l=a(476),d=a(98),h=a(21),b=a(5),g=a(13),m=a(433),u=a(477);function p(t){return Object(m.a)("MuiSkeleton",t)}Object(u.a)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var j,O,v,f,x,y,w,C,R=a(0),P=Object(s.c)(x||(x=j||(j=Object(r.a)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),k=Object(s.c)(y||(y=O||(O=Object(r.a)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),S=Object(b.a)("span",{},{name:"MuiSkeleton",slot:"Root",overridesResolver:function(t,e){var a=t.styleProps;return Object(i.a)({},e.root,e[a.variant],!1!==a.animation&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto)}})((function(t){var e=t.theme,a=t.styleProps,r=Object(d.d)(e.shape.borderRadius)||"px",n=Object(d.g)(e.shape.borderRadius);return Object(i.a)({display:"block",backgroundColor:Object(h.a)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===a.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(n).concat(r,"/").concat(Math.round(n/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===a.variant&&{borderRadius:"50%"},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})}),(function(t){return"pulse"===t.styleProps.animation&&Object(s.b)(w||(w=v||(v=Object(r.a)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),P)}),(function(t){var e=t.styleProps,a=t.theme;return"wave"===e.animation&&Object(s.b)(C||(C=f||(f=Object(r.a)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(90deg, transparent, ",", transparent);\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),k,a.palette.action.hover)})),z=o.forwardRef((function(t,e){var a=Object(g.a)({props:t,name:"MuiSkeleton"}),r=a.animation,o=void 0===r?"pulse":r,s=a.className,d=a.component,h=void 0===d?"span":d,b=a.height,m=a.style,u=a.variant,j=void 0===u?"text":u,O=a.width,v=Object(n.a)(a,["animation","className","component","height","style","variant","width"]),f=Object(i.a)({},a,{animation:o,component:h,variant:j,hasChildren:Boolean(v.children)}),x=function(t){var e=t.classes,a=t.variant,r=t.animation,n=t.hasChildren,i=t.width,o=t.height,c={root:["root",a,r,n&&"withChildren",n&&!i&&"fitContent",n&&!o&&"heightAuto"]};return Object(l.a)(c,p,e)}(f);return Object(R.jsx)(S,Object(i.a)({as:h,ref:e,className:Object(c.a)(x.root,s),styleProps:f},v,{style:Object(i.a)({width:O,height:b},m)}))}));e.a=z},1621:function(t,e,a){"use strict";a.r(e);var r=a(11),n=a.n(r),i=a(19),o=a(14),c=a(1),s=a(124),l=a(166),d=a(443),h=a(498),b=a(442),g=a(511),m=a(936),u=a(1046),p=a(39),j=a(18),O=a(78),v=a(514),f=a(513),x=a(613),y=a(0),w=["cta","currency","description","features","image","name","popular","price","sx"],C=function(t){var e=t.cta,a=t.currency,r=t.description,n=t.features,i=t.image,o=t.name,c=t.popular,s=t.price,d=t.sx,h=Object(O.a)(t,w);return Object(y.jsxs)(l.a,Object(j.a)(Object(j.a)({sx:Object(j.a)({display:"flex",flexDirection:"column"},d)},h),{},{children:[Object(y.jsxs)(l.a,{sx:{p:3},children:[Object(y.jsx)(l.a,{sx:{height:52,width:52,"& img":{height:"auto",width:"100%"}},children:Object(y.jsx)("img",{alt:"",src:i})}),Object(y.jsxs)(l.a,{sx:{display:"flex"},children:[Object(y.jsx)(b.a,{color:"textPrimary",variant:"h6",children:a}),Object(y.jsx)(b.a,{color:"textPrimary",variant:"h4",children:s}),Object(y.jsx)(b.a,{color:"textSecondary",sx:{alignSelf:"flex-end",ml:1},variant:"subtitle2",children:"/mo"})]}),Object(y.jsx)(b.a,{color:"textPrimary",sx:{mt:2},variant:"h6",children:o}),Object(y.jsx)(b.a,{color:"textSecondary",sx:{mt:2},variant:"body2",children:r})]}),Object(y.jsx)(v.a,{}),Object(y.jsxs)(l.a,{sx:{display:"flex",flexDirection:"column",flexGrow:1,p:3},children:[n.map((function(t){return Object(y.jsxs)(l.a,{sx:{alignItems:"center",display:"flex","& + &":{mt:2}},children:[Object(y.jsx)(x.a,{fontSize:"small",sx:{color:"text.primary"}}),Object(y.jsx)(b.a,{color:"textPrimary",sx:{fontWeight:500,ml:2},variant:"body2",children:t})]},t)})),Object(y.jsx)(l.a,{sx:{flexGrow:1}}),Object(y.jsx)(l.a,{sx:{display:"flex",justifyContent:"center",mt:6},children:Object(y.jsx)(f.a,{fullWidth:!0,color:"primary",variant:c?"contained":"outlined",children:e})})]})]}))},R=a(125);e.default=function(){var t=Object(p.a)(),e=Object(c.useState)(!0),a=Object(o.a)(e,2),r=a[0],j=a[1],O=Object(c.useState)(""),v=Object(o.a)(O,2),f=v[0],x=v[1];return Object(c.useEffect)((function(){R.a.push({event:"page_view"})}),[]),Object(c.useEffect)((function(){Object(i.a)(n.a.mark((function e(){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/static/pricing/pricing_".concat(t.palette.mode,".svg"));case 2:return a=e.sent,e.next=5,a.blob();case 5:r=e.sent,x(URL.createObjectURL(r)),j(!1);case 8:case"end":return e.stop()}}),e)})))()}),[t.palette.mode]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(s.a,{children:Object(y.jsx)("title",{children:"Pricing | Material Kit Pro"})}),Object(y.jsxs)(l.a,{sx:{backgroundColor:"background.paper",minHeight:"100%",pb:6},children:[Object(y.jsx)(l.a,{sx:{backgroundColor:"background.default",py:6},children:Object(y.jsx)(d.a,{maxWidth:"lg",children:Object(y.jsxs)(h.a,{container:!0,alignItems:"center",spacing:2,flexWrap:"nowrap",children:[Object(y.jsxs)(h.a,{item:!0,md:7,xs:12,children:[Object(y.jsx)(b.a,{color:"textPrimary",variant:"h3",children:"Start today. Boost up your services!"}),Object(y.jsx)(b.a,{color:"textSecondary",sx:{my:2},variant:"body1",children:"Join 3,000+ developers & designers using Devias to power modern web projects."}),Object(y.jsx)(g.a,{color:"primary"}),Object(y.jsx)(m.a,{badgeContent:"25% OFF",sx:{"& .MuiBadge-badge":{backgroundColor:"success.main",color:"primary.contrastText",right:-38,top:"25%"}},children:Object(y.jsx)(b.a,{color:"textPrimary",variant:"body1",children:"Yearly Payment"})})]}),Object(y.jsx)(h.a,{item:!0,md:5,sx:{display:{md:"block",xs:"none"}},children:Object(y.jsx)(l.a,{sx:{maxWidth:419,width:"100%"},children:r?Object(y.jsx)(u.a,{sx:{borderRadius:1,pt:"99.76%",width:"100%"},variant:"rectangular"}):Object(y.jsx)("img",{alt:"Pricing Hero",src:f,style:{width:"100%"}})})})]})})}),Object(y.jsx)(d.a,{maxWidth:"lg",sx:{py:6},children:Object(y.jsxs)(h.a,{container:!0,spacing:4,children:[Object(y.jsx)(h.a,{item:!0,md:4,xs:12,children:Object(y.jsx)(C,{cta:"Start Free Trial",currency:"$",description:"To familiarize yourself with our tools.",features:["Create contracts","Chat support","Email alerts"],image:"/static/pricing/plan1.svg",name:"Startup",price:"0",sx:{height:"100%",maxWidth:460,mx:"auto"}})}),Object(y.jsx)(h.a,{item:!0,md:4,xs:12,children:Object(y.jsx)(C,{cta:"Start Free Trial",currency:"$",description:"To familiarize yourself with our tools.",features:["All previous","Highlights reporting","Data history","Unlimited users"],image:"/static/pricing/plan2.svg",name:"Standard",popular:!0,price:"4.99",sx:{height:"100%",maxWidth:460,mx:"auto"}})}),Object(y.jsx)(h.a,{item:!0,md:4,xs:12,children:Object(y.jsx)(C,{cta:"Contact Us",currency:"$",description:"To familiarize yourself with our tools.",features:["All previous","Unlimited contacts","Analytics platform","Public API access","Send and sign unlimited contracts"],image:"/static/pricing/plan3.svg",name:"Business",price:"29.99",sx:{height:"100%",maxWidth:460,mx:"auto"}})})]})}),Object(y.jsx)(b.a,{align:"center",color:"textSecondary",component:"p",variant:"caption",children:"30% of our income goes into Whale Charity"})]})]})}},613:function(t,e,a){"use strict";var r=a(20),n=a(0),i=Object(r.a)(Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),"Check");e.a=i},936:function(t,e,a){"use strict";var r=a(3),n=a(4),i=a(2),o=a(1),c=(a(10),a(9)),s=function(t){var e=o.useRef({});return o.useEffect((function(){e.current=t})),e.current},l=a(477),d=a(133),h=a(433);function b(t){return Object(h.a)("MuiBadge",t)}var g=Object(l.a)("MuiBadge",["root","badge","dot","standard","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular","invisible"]),m=a(279),u=a(476),p=a(0),j=o.forwardRef((function(t,e){var a=t.anchorOrigin,r=void 0===a?{vertical:"top",horizontal:"right"}:a,o=t.classes,l=t.badgeContent,h=t.component,g=void 0===h?"span":h,j=t.children,O=t.className,v=t.components,f=void 0===v?{}:v,x=t.componentsProps,y=void 0===x?{}:x,w=t.invisible,C=t.max,R=void 0===C?99:C,P=t.overlap,k=void 0===P?"rectangular":P,S=t.showZero,z=void 0!==S&&S,B=t.variant,W=void 0===B?"standard":B,M=t.theme,T=Object(n.a)(t,["anchorOrigin","classes","badgeContent","component","children","className","components","componentsProps","invisible","max","overlap","showZero","variant","theme"]),A=s({anchorOrigin:r,badgeContent:l,max:R,overlap:k,variant:W}),N=w;null==w&&(0===l&&!z||null==l&&"dot"!==W)&&(N=!0);var F=N?A:t,I=F.anchorOrigin,L=void 0===I?r:I,D=F.badgeContent,E=F.max,U=void 0===E?R:E,Z=F.overlap,H=void 0===Z?k:Z,X=F.variant,J=void 0===X?W:X,$=Object(i.a)({},t,{anchorOrigin:L,badgeContent:D,classes:o,invisible:N,max:U,overlap:H,variant:J}),_="";"dot"!==J&&(_=D>U?"".concat(U,"+"):D);var G=function(t){var e=t.variant,a=t.anchorOrigin,r=t.overlap,n=t.invisible,i=t.classes,o={root:["root"],badge:["badge",e,"anchorOrigin".concat(Object(m.a)(a.vertical)).concat(Object(m.a)(a.horizontal)).concat(Object(m.a)(r)),n&&"invisible"]};return Object(u.a)(o,b,i)}($),K=f.Root||g,Y=y.root||{},q=f.Badge||"span",Q=y.badge||{};return Object(p.jsxs)(K,Object(i.a)({},Y,!Object(d.a)(K)&&{as:g,styleProps:Object(i.a)({},$,Y.styleProps),theme:M},{ref:e},T,{className:Object(c.a)(G.root,Y.className,O),children:[j,Object(p.jsx)(q,Object(i.a)({},Q,!Object(d.a)(q)&&{styleProps:Object(i.a)({},$,Q.styleProps),theme:M},{className:Object(c.a)(G.badge,Q.className),children:_}))]}))})),O=a(5),v=a(13),f=a(8),x=Object(i.a)({},g,Object(l.a)("MuiBadge",["colorError","colorPrimary","colorSecondary"])),y=Object(O.a)("span",{},{name:"MuiBadge",slot:"Root",overridesResolver:function(t,e){return e.root}})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),w=Object(O.a)("span",{},{name:"MuiBadge",slot:"Badge",overridesResolver:function(t,e){var a=t.styleProps;return Object(i.a)({},e.badge,e[a.variant],e["anchorOrigin".concat(Object(f.a)(a.anchorOrigin.vertical)).concat(Object(f.a)(a.anchorOrigin.horizontal)).concat(Object(f.a)(a.overlap))],"default"!==a.color&&e["color".concat(Object(f.a)(a.color))],a.invisible&&e.invisible)}})((function(t){var e=t.theme,a=t.styleProps;return Object(i.a)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.enteringScreen})},"default"!==a.color&&{backgroundColor:e.palette[a.color].main,color:e.palette[a.color].contrastText},"dot"===a.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===a.anchorOrigin.vertical&&"right"===a.anchorOrigin.horizontal&&"rectangular"===a.overlap&&Object(r.a)({top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(x.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===a.anchorOrigin.vertical&&"right"===a.anchorOrigin.horizontal&&"rectangular"===a.overlap&&Object(r.a)({bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(x.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===a.anchorOrigin.vertical&&"left"===a.anchorOrigin.horizontal&&"rectangular"===a.overlap&&Object(r.a)({top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(x.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===a.anchorOrigin.vertical&&"left"===a.anchorOrigin.horizontal&&"rectangular"===a.overlap&&Object(r.a)({bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(x.invisible),{transform:"scale(0) translate(-50%, 50%)"}),"top"===a.anchorOrigin.vertical&&"right"===a.anchorOrigin.horizontal&&"circular"===a.overlap&&Object(r.a)({top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(x.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===a.anchorOrigin.vertical&&"right"===a.anchorOrigin.horizontal&&"circular"===a.overlap&&Object(r.a)({bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(x.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===a.anchorOrigin.vertical&&"left"===a.anchorOrigin.horizontal&&"circular"===a.overlap&&Object(r.a)({top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(x.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===a.anchorOrigin.vertical&&"left"===a.anchorOrigin.horizontal&&"circular"===a.overlap&&Object(r.a)({bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(x.invisible),{transform:"scale(0) translate(-50%, 50%)"}),a.invisible&&{transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.leavingScreen})})})),C=o.forwardRef((function(t,e){var a,r,o=Object(v.a)({props:t,name:"MuiBadge"}),l=Object(n.a)(o,["isRtl"]),h=l.components,g=void 0===h?{}:h,m=l.componentsProps,u=void 0===m?{}:m,O=l.color,x=void 0===O?"default":O,C=l.invisible,R=l.badgeContent,P=l.showZero,k=void 0!==P&&P,S=l.variant,z=void 0===S?"standard":S,B=Object(n.a)(l,["components","componentsProps","color","invisible","badgeContent","showZero","variant"]),W=s({color:x}),M=C;null==C&&(0===R&&!k||null==R&&"dot"!==z)&&(M=!0);var T=(M?W:l).color,A=void 0===T?x:T,N=function(t){var e=t.color,a=t.classes,r=void 0===a?{}:a;return Object(i.a)({},r,{badge:Object(c.a)(r.badge,"default"!==e&&[b("color".concat(Object(f.a)(e))),r["color".concat(Object(f.a)(e))]])})}(Object(i.a)({},l,{invisible:M,color:A}));return Object(p.jsx)(j,Object(i.a)({invisible:C,badgeContent:R,showZero:k,variant:z},B,{components:Object(i.a)({Root:y,Badge:w},g),componentsProps:{root:Object(i.a)({},u.root,(!g.Root||!Object(d.a)(g.Root))&&{styleProps:Object(i.a)({},null===(a=u.root)||void 0===a?void 0:a.styleProps,{color:A})}),badge:Object(i.a)({},u.badge,(!g.Thumb||!Object(d.a)(g.Thumb))&&{styleProps:Object(i.a)({},null===(r=u.badge)||void 0===r?void 0:r.styleProps,{color:A})})},classes:N,ref:e}))}));e.a=C}}]);
//# sourceMappingURL=50.f7a6a447.chunk.js.map