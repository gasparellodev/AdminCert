(this["webpackJsonp@devias/material-kit-pro-react"]=this["webpackJsonp@devias/material-kit-pro-react"]||[]).push([[33],{1040:function(e,t,a){"use strict";var c=a(3),r=a(4),n=a(2),i=a(1),l=(a(10),a(9)),s=a(475),o=a(7),d=a(491),j=a(479),b=a(39),h=a(500),u=a(13),x=a(5),O=a(432),p=a(476);function m(e){return Object(O.a)("MuiDialog",e)}var y=Object(p.a)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),g=a(495),f=a(0),v=Object(x.a)(g.a,{},{name:"MuiDialog",slot:"Backdrop",overrides:function(e,t){return t.backdrop}})({zIndex:-1}),w=Object(x.a)(d.a,{},{name:"MuiDialog",slot:"Root",overridesResolver:function(e,t){return t.root}})({"@media print":{position:"absolute !important"}}),P=Object(x.a)("div",{},{name:"MuiDialog",slot:"Container",overridesResolver:function(e,t){var a=e.styleProps;return Object(n.a)({},t.container,t["scroll".concat(Object(o.a)(a.scroll))])}})((function(e){var t=e.styleProps;return Object(n.a)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===t.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===t.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})})),C=Object(x.a)(h.a,{},{name:"MuiDialog",slot:"Paper",overridesResolver:function(e,t){var a=e.styleProps;return Object(n.a)({},t.paper,t["scrollPaper".concat(Object(o.a)(a.scroll))],t["paperWidth".concat(Object(o.a)(String(a.maxWidth)),")")],a.fullWidth&&t.paperFullWidth,a.fullScreen&&t.paperFullScreen)}})((function(e){var t=e.theme,a=e.styleProps;return Object(n.a)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===a.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===a.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!a.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===a.maxWidth&&Object(c.a)({maxWidth:"px"===t.breakpoints.unit?Math.max(t.breakpoints.values.xs,444):"".concat(t.breakpoints.values.xs).concat(t.breakpoints.unit)},"&.".concat(y.paperScrollBody),Object(c.a)({},t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})),"xs"!==a.maxWidth&&Object(c.a)({maxWidth:"".concat(t.breakpoints.values[a.maxWidth]).concat(t.breakpoints.unit)},"&.".concat(y.paperScrollBody),Object(c.a)({},t.breakpoints.down(t.breakpoints.values[a.maxWidth]+64),{maxWidth:"calc(100% - 64px)"})),a.fullWidth&&{width:"calc(100% - 64px)"},a.fullScreen&&Object(c.a)({margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0},"&.".concat(y.paperScrollBody),{margin:0,maxWidth:"100%"}))})),S={enter:b.b.enteringScreen,exit:b.b.leavingScreen},k=i.forwardRef((function(e,t){var a=Object(u.a)({props:e,name:"MuiDialog"}),c=a["aria-describedby"],d=a["aria-labelledby"],b=a.BackdropComponent,x=a.BackdropProps,O=a.children,p=a.className,y=a.disableEscapeKeyDown,g=void 0!==y&&y,k=a.fullScreen,W=void 0!==k&&k,D=a.fullWidth,B=void 0!==D&&D,T=a.maxWidth,R=void 0===T?"sm":T,A=a.onBackdropClick,M=a.onClose,N=a.open,E=a.PaperComponent,I=void 0===E?h.a:E,z=a.PaperProps,F=void 0===z?{}:z,H=a.scroll,L=void 0===H?"paper":H,V=a.TransitionComponent,K=void 0===V?j.a:V,$=a.transitionDuration,G=void 0===$?S:$,J=a.TransitionProps,X=Object(r.a)(a,["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"]),Y=Object(n.a)({},a,{disableEscapeKeyDown:g,fullScreen:W,fullWidth:B,maxWidth:R,scroll:L}),U=function(e){var t=e.classes,a=e.scroll,c=e.maxWidth,r=e.fullWidth,n=e.fullScreen,i={root:["root"],container:["container","scroll".concat(Object(o.a)(a))],paper:["paper","paperScroll".concat(Object(o.a)(a)),"paperWidth".concat(Object(o.a)(String(c))),r&&"paperFullWidth",n&&"paperFullScreen"]};return Object(s.a)(i,m,t)}(Y),Z=i.useRef();return Object(f.jsx)(w,Object(n.a)({className:Object(l.a)(U.root,p),BackdropProps:Object(n.a)({transitionDuration:G,as:b},x),closeAfterTransition:!0,BackdropComponent:v,disableEscapeKeyDown:g,onClose:M,open:N,ref:t,onClick:function(e){Z.current&&(Z.current=null,A&&A(e),M&&M(e,"backdropClick"))},styleProps:Y},X,{children:Object(f.jsx)(K,Object(n.a)({appear:!0,in:N,timeout:G,role:"presentation"},J,{children:Object(f.jsx)(P,{className:Object(l.a)(U.container),onMouseDown:function(e){Z.current=e.target===e.currentTarget},styleProps:Y,children:Object(f.jsx)(C,Object(n.a)({as:I,elevation:24,role:"dialog","aria-describedby":c,"aria-labelledby":d},F,{className:Object(l.a)(U.paper,F.className),styleProps:Y,children:O}))})}))}))}));t.a=k},1554:function(e,t,a){"use strict";a.r(t);var c=a(11),r=a.n(c),n=a(19),i=a(14),l=a(1),s=a(22),o=a(122),d=a(881),j=a(165),b=a(442),h=a(497),u=a(441),x=a(590),O=a(443),p=a(512),m=a(513),y=a(1040),g=a(913),f=a(930),v=a(78),w=a(124),P=a(214),C=a(199),S=a(123),k=a(0);t.default=function(){var e=Object(v.a)(),t=Object(w.a)().settings,a=Object(l.useState)(null),c=Object(i.a)(a,2),W=c[0],D=c[1],B=Object(l.useState)(!1),T=Object(i.a)(B,2),R=T[0],A=T[1];Object(l.useEffect)((function(){S.a.push({event:"page_view"})}),[]);var M=Object(l.useCallback)(Object(n.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.getInvoice();case 3:a=t.sent,e.current&&D(a),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e]);return Object(l.useEffect)((function(){M()}),[M]),W?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(o.a,{children:Object(k.jsx)("title",{children:"AdminCerti | Pedido em PDF"})}),Object(k.jsx)(j.a,{sx:{backgroundColor:"background.default",minHeight:"100%",py:8},children:Object(k.jsxs)(b.a,{maxWidth:!!t.compact&&"xl",children:[Object(k.jsxs)(h.a,{container:!0,justifyContent:"space-between",spacing:3,children:[Object(k.jsxs)(h.a,{item:!0,children:[Object(k.jsx)(u.a,{color:"textPrimary",variant:"h5",children:"Detalhes do Pedido"}),Object(k.jsxs)(x.a,{"aria-label":"breadcrumb",separator:Object(k.jsx)(C.a,{fontSize:"small"}),sx:{mt:1},children:[Object(k.jsx)(O.a,{color:"textPrimary",component:s.b,to:"/dashboard",variant:"subtitle2",children:"Dashboard"}),Object(k.jsx)(O.a,{color:"textPrimary",component:s.b,to:"/dashboard",variant:"subtitle2",children:"Controle AdminCerti"}),Object(k.jsx)(u.a,{color:"textSecondary",variant:"subtitle2",children:"Pedidos"})]})]}),Object(k.jsx)(h.a,{item:!0,children:Object(k.jsxs)(j.a,{sx:{m:-1},children:[Object(k.jsx)(p.a,{color:"primary",onClick:function(){return A(!0)},sx:{m:1},variant:"outlined",children:"Ver PDF"}),Object(k.jsx)(d.c,{document:Object(k.jsx)(f.b,{invoice:W}),fileName:"invoice",style:{textDecoration:"none"},children:Object(k.jsx)(p.a,{color:"primary",sx:{m:1},variant:"contained",children:"Download PDF"})})]})})]}),Object(k.jsx)(m.a,{sx:{my:3}}),Object(k.jsx)(f.c,{invoice:W})]})}),Object(k.jsx)(y.a,{fullScreen:!0,open:R,children:Object(k.jsxs)(j.a,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:[Object(k.jsx)(j.a,{sx:{backgroundColor:"background.default",p:2},children:Object(k.jsx)(p.a,{color:"primary",startIcon:Object(k.jsx)(P.a,{fontSize:"small"}),onClick:function(){return A(!1)},variant:"contained",children:"Back"})}),Object(k.jsx)(j.a,{sx:{flexGrow:1},children:Object(k.jsx)(d.d,{height:"100%",style:{border:"none"},width:"100%",children:Object(k.jsx)(f.b,{invoice:W})})})]})})]}):null}},534:function(e,t,a){"use strict";var c=a(20),r=a(0),n=Object(c.a)(Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),"ArrowRight");t.a=n},539:function(e,t,a){"use strict";var c=a(20),r=a(0),n=Object(c.a)(Object(r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(r.jsx)("path",{d:"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"}),Object(r.jsx)("path",{fillRule:"evenodd",d:"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",clipRule:"evenodd"})]}),"PencilAlt");t.a=n},540:function(e,t,a){"use strict";var c=a(18),r=a(77),n=a(5),i=a(0),l=Object(n.a)("span")((function(e){var t=e.theme,a=e.styleProps,c=t.palette[a.color].main,r=t.palette[a.color].contrastText;return{alignItems:"center",backgroundColor:c,borderRadius:t.shape.borderRadius,color:r,cursor:"default",display:"inline-flex",flexGrow:0,flexShrink:0,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(11),fontWeight:t.typography.fontWeightMedium,justifyContent:"center",letterSpacing:.5,minWidth:20,paddingBottom:t.spacing(.5),paddingLeft:t.spacing(1),paddingRight:t.spacing(1),paddingTop:t.spacing(.5),textTransform:"uppercase",whiteSpace:"nowrap"}}));t.a=function(e){var t=e.color,a=void 0===t?"primary":t,n=e.children,s=Object(r.a)(e,["color","children"]),o={color:a};return Object(i.jsx)(l,Object(c.a)(Object(c.a)({styleProps:o},s),{},{children:n}))}},913:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a(24),r=a(25),n=a(166),i=a(439),l=new Date,s=new(function(){function e(){Object(c.a)(this,e)}return Object(r.a)(e,[{key:"getInvoices",value:function(){var e=[{id:"5ecb868d0f437390ef3ac62c",currency:"$",customer:{email:"matheus@teste.com.br",name:"Matheus Bavaresco"},issueDate:Object(n.a)(l,1).getTime(),status:"paid",totalAmount:55.5},{id:"5ecb868ada8deedee0638502",currency:"$",customer:{email:"teste@teste.com.br",name:"Teste 1"},issueDate:Object(i.a)(Object(n.a)(l,5),2).getTime(),status:"pending",totalAmount:253.76},{id:"5ecb868700aba84d0f1c0e48",currency:"$",customer:{email:"teste@teste.com.br",name:"Teste 1"},issueDate:Object(i.a)(Object(n.a)(l,4),6).getTime(),status:"canceled",totalAmount:781.5}];return Promise.resolve(e)}},{key:"getInvoice",value:function(){var e={id:"5ecb86785312dcc69b5799ad",currency:"$",customer:{address:"271 Richmond Rd, Grey Lynn, Auckland 1022, New Zealand",company:"Countdown Grey Lynn",email:"contact@anahenisky.io",name:"Ana Henisky",taxId:"6934656584231"},dueDate:l.getTime(),issueDate:Object(n.a)(l,1).getTime(),items:[{id:"5ecb8694db1760a701dfbf74",currency:"$",description:"Freelancer Subscription (12/05/2019 - 11/06/2019)",unitAmount:55.5}],number:"DEV-9483",status:"paid",subtotalAmount:50,taxAmount:5.5,totalAmount:55.5};return Promise.resolve(e)}}]),e}())},930:function(e,t,a){"use strict";a.d(t,"a",(function(){return E})),a.d(t,"b",(function(){return F})),a.d(t,"c",(function(){return K}));var c=a(27),r=a(18),n=a(14),i=a(77),l=a(1),s=a(22),o=a(275),d=a(530),j=a.n(d),b=a(514),h=a(165),u=a(501),x=a(519),O=a(589),p=a(512),m=a(1601),y=a(1525),g=a(1603),f=a(1604),v=a(1602),w=a(443),P=a(441),C=a(511),S=a(1597),k=a(534),W=a(539),D=a(171),B=a(540),T=a(125),R=a(0),A=[{label:"Todos",value:"all"},{label:"Pago",value:"paid"},{label:"Pendente",value:"pending"},{label:"Cancelada",value:"canceled"}],M=[{label:"Newest first",value:"createdAt|desc"},{label:"Oldest first",value:"createdAt|asc"}],N=function(e){var t={canceled:{color:"error",text:"Canceled"},paid:{color:"success",text:"Paid"},pending:{color:"warning",text:"Pending"}}[e],a=t.text,c=t.color;return Object(R.jsx)(B.a,{color:c,children:a})},E=function(e){var t=e.invoices,a=Object(i.a)(e,["invoices"]),d=Object(l.useState)([]),B=Object(n.a)(d,2),E=B[0],I=B[1],z=Object(l.useState)(0),F=Object(n.a)(z,2),H=F[0],L=F[1],V=Object(l.useState)(10),K=Object(n.a)(V,2),$=K[0],G=K[1],J=Object(l.useState)(""),X=Object(n.a)(J,2),Y=X[0],U=X[1],Z=Object(l.useState)(M[0].value),_=Object(n.a)(Z,2),q=_[0],Q=_[1],ee=Object(l.useState)({status:null}),te=Object(n.a)(ee,2),ae=te[0],ce=te[1],re=function(e){I(e.target.checked?t.map((function(e){return e.id})):[])},ne=function(e,t,a){return e.filter((function(e){var c=!0;if(t){var r=!1;["name","email"].forEach((function(a){e.customer[a].toLowerCase().includes(t.toLowerCase())&&(r=!0)})),r||(c=!1)}return a.status&&e.status!==a.status&&(c=!1),c}))}(t,Y,ae),ie=function(e,t,a){return e.slice(t*a,t*a+a)}(ne,H,$),le=E.length>0,se=E.length>0&&E.length<t.length,oe=E.length===t.length;return Object(R.jsxs)(b.a,Object(r.a)(Object(r.a)({},a),{},{children:[Object(R.jsxs)(h.a,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",m:-1,p:2},children:[Object(R.jsx)(h.a,{sx:{m:1,maxWidth:"100%",width:500},children:Object(R.jsx)(u.a,{fullWidth:!0,InputProps:{startAdornment:Object(R.jsx)(x.a,{position:"start",children:Object(R.jsx)(D.a,{fontSize:"small"})})},onChange:function(e){U(e.target.value)},placeholder:"Procurar Pedidos",value:Y,variant:"outlined"})}),Object(R.jsx)(h.a,{sx:{m:1,maxWidth:"100%",width:240},children:Object(R.jsx)(u.a,{fullWidth:!0,label:"Ordenar por",name:"sort",onChange:function(e){Q(e.target.value)},select:!0,SelectProps:{native:!0},value:q,variant:"outlined",children:M.map((function(e){return Object(R.jsx)("option",{value:e.value,children:e.label},e.value)}))})}),Object(R.jsx)(h.a,{sx:{m:1,maxWidth:"100%",width:240},children:Object(R.jsx)(u.a,{fullWidth:!0,label:"Status",name:"status",onChange:function(e){var t=null;"all"!==e.target.value&&(t=e.target.value),ce((function(e){return Object(r.a)(Object(r.a)({},e),{},{status:t})}))},select:!0,SelectProps:{native:!0},value:ae.status||"all",variant:"outlined",children:A.map((function(e){return Object(R.jsx)("option",{value:e.value,children:e.label},e.value)}))})})]}),le&&Object(R.jsx)(h.a,{sx:{position:"relative"},children:Object(R.jsxs)(h.a,{sx:{backgroundColor:"background.paper",mt:"6px",position:"absolute",px:"4px",width:"100%",zIndex:2},children:[Object(R.jsx)(O.a,{checked:oe,color:"primary",indeterminate:se,onChange:re}),Object(R.jsx)(p.a,{color:"primary",sx:{ml:2},variant:"outlined",children:"Delete"}),Object(R.jsx)(p.a,{color:"primary",sx:{ml:2},variant:"outlined",children:"Edit"})]})}),Object(R.jsx)(T.a,{children:Object(R.jsx)(h.a,{sx:{minWidth:1200},children:Object(R.jsxs)(m.a,{children:[Object(R.jsx)(y.a,{children:Object(R.jsxs)(g.a,{children:[Object(R.jsx)(f.a,{padding:"checkbox",children:Object(R.jsx)(O.a,{checked:oe,color:"primary",indeterminate:se,onChange:re})}),Object(R.jsx)(f.a,{children:"Cliente"}),Object(R.jsx)(f.a,{children:"Status"}),Object(R.jsx)(f.a,{children:"Valor"}),Object(R.jsx)(f.a,{children:"ID"}),Object(R.jsx)(f.a,{children:"Data"}),Object(R.jsx)(f.a,{align:"right",children:"Mais Informa\xe7\xf5es"})]})}),Object(R.jsx)(v.a,{children:ie.map((function(e){var t=E.includes(e.id);return Object(R.jsxs)(g.a,{hover:!0,selected:t,children:[Object(R.jsx)(f.a,{padding:"checkbox",children:Object(R.jsx)(O.a,{checked:t,color:"primary",onChange:function(t){return a=e.id,void(E.includes(a)?I((function(e){return e.filter((function(e){return e!==a}))})):I((function(e){return[].concat(Object(c.a)(e),[a])})));var a},value:t})}),Object(R.jsxs)(f.a,{children:[Object(R.jsx)(w.a,{color:"textPrimary",component:s.b,to:"#",underline:"none",variant:"subtitle2",children:e.customer.name}),Object(R.jsx)(P.a,{color:"textSecondary",variant:"body2",children:e.customer.email})]}),Object(R.jsx)(f.a,{children:N(e.status)}),Object(R.jsx)(f.a,{children:j()(e.totalAmount).format("".concat(e.currency,"0,0.00"))}),Object(R.jsx)(f.a,{children:e.id}),Object(R.jsx)(f.a,{children:Object(o.a)(e.issueDate,"dd/MM/yyyy")}),Object(R.jsxs)(f.a,{align:"right",children:[Object(R.jsx)(C.a,{component:s.b,to:"#",children:Object(R.jsx)(W.a,{fontSize:"small"})}),Object(R.jsx)(C.a,{component:s.b,to:"/dashboard/invoices/1",children:Object(R.jsx)(k.a,{fontSize:"small"})})]})]},e.id)}))})]})})}),Object(R.jsx)(S.a,{component:"div",count:ne.length,onPageChange:function(e,t){L(t)},onRowsPerPageChange:function(e){G(parseInt(e.target.value,10))},page:H,rowsPerPage:$,rowsPerPageOptions:[5,10,25]})]}))},I=a(881),z=I.f.create({page:{backgroundColor:"#ffffff",padding:24},h4:{fontSize:14,fontWeight:600,lineHeight:1.235},h6:{fontSize:12,fontWeight:600,lineHeight:1.6},subtitle2:{fontSize:10,fontWeight:500,lineHeight:1.57},body2:{fontSize:10,lineHeight:1.43},gutterBottom:{marginBottom:4},header:{flexDirection:"row",justifyContent:"space-between"},brand:{height:32,width:32},company:{flexDirection:"row",justifyContent:"space-between",marginTop:32},references:{flexDirection:"row",justifyContent:"space-between",marginTop:32},billing:{marginTop:32},items:{marginTop:32},notes:{marginTop:32},table:{display:"flex",width:"auto"},tableHeader:{},tableBody:{},tableRow:{borderBottomWidth:1,borderColor:"#EEEEEE",borderStyle:"solid",flexDirection:"row"},tableCell1:{padding:6,width:"".concat(60,"%")},tableCellN:{padding:6,width:"".concat(20,"%")},alignRight:{textAlign:"right"}}),F=function(e){var t=e.invoice;return Object(R.jsx)(I.a,{children:Object(R.jsxs)(I.e,{size:"A4",style:z.page,children:[Object(R.jsxs)(I.h,{style:z.header,children:[Object(R.jsxs)(I.h,{children:[Object(R.jsx)(I.b,{source:"/static/favicon (1).png",style:z.brand}),Object(R.jsx)(I.g,{style:z.h6,children:"www.admincert.com.br"})]}),Object(R.jsxs)(I.h,{children:[Object(R.jsx)(I.g,{style:z.h4,children:t.status}),Object(R.jsx)(I.g,{style:z.subtitle2,children:"IPedido Teste #000001"})]})]}),Object(R.jsxs)(I.h,{style:z.company,children:[Object(R.jsxs)(I.h,{children:[Object(R.jsx)(I.g,{style:z.body2,children:"Rua Teste"}),Object(R.jsx)(I.g,{style:z.body2,children:"Number Teste"}),Object(R.jsx)(I.g,{style:z.body2,children:"Brasil"})]}),Object(R.jsxs)(I.h,{children:[Object(R.jsx)(I.g,{style:z.body2,children:"BRWORKS"}),Object(R.jsx)(I.g,{style:z.body2,children:"cnpj teste"})]}),Object(R.jsxs)(I.h,{children:[Object(R.jsx)(I.g,{style:z.body2,children:"teste@teste.com.br"}),Object(R.jsx)(I.g,{style:z.body2,children:"11 1111-1111"})]})]}),Object(R.jsxs)(I.h,{style:z.references,children:[Object(R.jsxs)(I.h,{children:[Object(R.jsx)(I.g,{style:[z.subtitle2,z.gutterBottom],children:"Data do Pedido"}),Object(R.jsx)(I.g,{style:z.body2,children:Object(o.a)(t.dueDate,"dd MMM yyyy")})]}),Object(R.jsxs)(I.h,{children:[Object(R.jsx)(I.g,{style:[z.subtitle2,z.gutterBottom],children:"Data de sa\xedda"}),Object(R.jsx)(I.g,{style:z.body2,children:Object(o.a)(t.issueDate,"dd MMM yyyy")})]}),Object(R.jsxs)(I.h,{children:[Object(R.jsx)(I.g,{style:[z.subtitle2,z.gutterBottom],children:"Id do Pedido"}),Object(R.jsx)(I.g,{style:z.body2,children:"#00001"})]})]}),Object(R.jsxs)(I.h,{style:z.billing,children:[Object(R.jsx)(I.g,{style:[z.subtitle2,z.gutterBottom],children:"Cobran\xe7a em nome de"}),Object(R.jsx)(I.g,{style:z.body2,children:"Matheus Bavaresco"}),Object(R.jsx)(I.g,{style:z.body2,children:"Teste"}),Object(R.jsx)(I.g,{style:z.body2,children:"Teste"}),Object(R.jsx)(I.g,{style:z.body2,children:"Teste"})]}),Object(R.jsx)(I.h,{style:z.items,children:Object(R.jsxs)(I.h,{style:z.table,children:[Object(R.jsx)(I.h,{style:z.tableHeader,children:Object(R.jsxs)(I.h,{style:z.tableRow,children:[Object(R.jsx)(I.h,{style:z.tableCell1,children:Object(R.jsx)(I.g,{style:z.h6,children:"Descri\xe7\xe3o"})}),Object(R.jsx)(I.h,{style:z.tableCellN}),Object(R.jsx)(I.h,{style:z.tableCellN,children:Object(R.jsx)(I.g,{style:[z.h6,z.alignRight],children:"Valor unit\xe1rio"})})]})}),Object(R.jsxs)(I.h,{style:z.tableBody,children:[t.items.map((function(e){return Object(R.jsxs)(I.h,{style:z.tableRow,children:[Object(R.jsx)(I.h,{style:z.tableCell1,children:Object(R.jsx)(I.g,{style:z.body2,children:"Certid\xe3o de Teste"})}),Object(R.jsx)(I.h,{style:z.tableCellN}),Object(R.jsx)(I.h,{style:z.tableCellN,children:Object(R.jsx)(I.g,{style:[z.body2,z.alignRight],children:j()(e.unitAmount).format("".concat(e.currency,"0,0.00"))})})]},e.id)})),Object(R.jsxs)(I.h,{style:z.tableRow,children:[Object(R.jsx)(I.h,{style:z.tableCell1}),Object(R.jsx)(I.h,{style:z.tableCellN,children:Object(R.jsx)(I.g,{style:z.body2,children:"Subtotal"})}),Object(R.jsx)(I.h,{style:z.tableCellN,children:Object(R.jsx)(I.g,{style:[z.body2,z.alignRight],children:j()(t.subtotalAmount).format("".concat(t.currency,"0,0.00"))})})]}),Object(R.jsxs)(I.h,{style:z.tableRow,children:[Object(R.jsx)(I.h,{style:z.tableCell1}),Object(R.jsx)(I.h,{style:z.tableCellN,children:Object(R.jsx)(I.g,{style:z.body2,children:"Taxas"})}),Object(R.jsx)(I.h,{style:z.tableCellN,children:Object(R.jsx)(I.g,{style:[z.body2,z.alignRight],children:j()(t.taxAmount).format("".concat(t.currency,"0,0.00"))})})]}),Object(R.jsxs)(I.h,{style:z.tableRow,children:[Object(R.jsx)(I.h,{style:z.tableCell1}),Object(R.jsx)(I.h,{style:z.tableCellN,children:Object(R.jsx)(I.g,{style:z.body2,children:"Total"})}),Object(R.jsx)(I.h,{style:z.tableCellN,children:Object(R.jsx)(I.g,{style:[z.body2,z.alignRight],children:j()(t.totalAmount).format("".concat(t.currency,"0,0.00"))})})]})]})]})}),Object(R.jsxs)(I.h,{style:z.notes,children:[Object(R.jsx)(I.g,{style:[z.h6,z.gutterBottom],children:"Notas"}),Object(R.jsx)(I.g,{style:z.body2,children:"Ao receber seu pedido apresentar esse documento para valida\xe7\xe3o"})]})]})})},H=a(500),L=a(497),V=a(34),K=function(e){var t=e.invoice,a=Object(i.a)(e,["invoice"]);return Object(R.jsx)(H.a,Object(r.a)(Object(r.a)({},a),{},{children:Object(R.jsx)(T.a,{children:Object(R.jsxs)(h.a,{sx:{minWidth:800,p:6},children:[Object(R.jsxs)(L.a,{container:!0,justifyContent:"space-between",children:[Object(R.jsxs)(L.a,{item:!0,children:[Object(R.jsx)(V.a,{}),Object(R.jsx)(P.a,{color:"textPrimary",variant:"h6",children:"www.admincert.com.br"})]}),Object(R.jsxs)(L.a,{item:!0,children:[Object(R.jsx)(P.a,{align:"right",color:"textPrimary",variant:"h4",children:"AdminCerti"}),Object(R.jsx)(P.a,{align:"right",color:"textPrimary",variant:"subtitle2",children:"Pedido Teste #000001"})]})]}),Object(R.jsx)(h.a,{sx:{my:4},children:Object(R.jsxs)(L.a,{container:!0,justifyContent:"space-between",children:[Object(R.jsx)(L.a,{item:!0,children:Object(R.jsxs)(P.a,{color:"textPrimary",variant:"body2",children:["Rua Teste",Object(R.jsx)("br",{}),"Number Teste",Object(R.jsx)("br",{}),"Brasil"]})}),Object(R.jsx)(L.a,{item:!0,children:Object(R.jsxs)(P.a,{color:"textPrimary",variant:"body2",children:["BRWORKS",Object(R.jsx)("br",{}),"CNPJ TESTE",Object(R.jsx)("br",{})]})}),Object(R.jsx)(L.a,{item:!0,children:Object(R.jsxs)(P.a,{align:"right",color:"textPrimary",variant:"body2",children:["teste@teste.com.br",Object(R.jsx)("br",{}),"11 1111-1111"]})})]})}),Object(R.jsx)(h.a,{sx:{my:4},children:Object(R.jsxs)(L.a,{container:!0,justifyContent:"space-between",children:[Object(R.jsxs)(L.a,{item:!0,children:[Object(R.jsx)(P.a,{color:"textPrimary",gutterBottom:!0,variant:"subtitle2",children:"Data do Pedido"}),Object(R.jsx)(P.a,{color:"textPrimary",variant:"body2",children:Object(o.a)(t.dueDate,"dd MMM yyyy")})]}),Object(R.jsxs)(L.a,{item:!0,children:[Object(R.jsx)(P.a,{color:"textPrimary",gutterBottom:!0,variant:"subtitle2",children:"Data de Sa\xedda"}),Object(R.jsx)(P.a,{color:"textPrimary",variant:"body2",children:Object(o.a)(t.issueDate,"dd MMM yyyy")})]}),Object(R.jsxs)(L.a,{item:!0,children:[Object(R.jsx)(P.a,{color:"textPrimary",gutterBottom:!0,variant:"subtitle2",children:"Id do Pedido"}),Object(R.jsx)(P.a,{color:"textPrimary",variant:"body2",children:"#000001"})]})]})}),Object(R.jsxs)(h.a,{sx:{my:4},children:[Object(R.jsx)(P.a,{color:"textPrimary",gutterBottom:!0,variant:"subtitle2",children:"Cobran\xe7a em nome de"}),Object(R.jsxs)(P.a,{color:"textPrimary",variant:"body2",children:["Matheus Bavaresco",Object(R.jsx)("br",{}),"Teste",Object(R.jsx)("br",{}),"Teste",Object(R.jsx)("br",{}),"Teste"]})]}),Object(R.jsxs)(m.a,{children:[Object(R.jsx)(y.a,{children:Object(R.jsxs)(g.a,{children:[Object(R.jsx)(f.a,{children:"Produtos do Pedido"}),Object(R.jsx)(f.a,{}),Object(R.jsx)(f.a,{align:"right",children:"Valor Unit\xe1rio"})]})}),Object(R.jsxs)(v.a,{children:[t.items.map((function(e){return Object(R.jsxs)(g.a,{children:[Object(R.jsx)(f.a,{children:"Certid\xe3o de Teste"}),Object(R.jsx)(f.a,{}),Object(R.jsx)(f.a,{align:"right",children:j()(e.unitAmount).format("".concat(e.currency,"0,0.00"))})]},e.id)})),Object(R.jsxs)(g.a,{children:[Object(R.jsx)(f.a,{}),Object(R.jsx)(f.a,{children:Object(R.jsx)(P.a,{color:"textPrimary",gutterBottom:!0,variant:"subtitle2",children:"Subtotal"})}),Object(R.jsx)(f.a,{align:"right",children:j()(t.subtotalAmount).format("".concat(t.currency,"0,0.00"))})]}),Object(R.jsxs)(g.a,{children:[Object(R.jsx)(f.a,{}),Object(R.jsx)(f.a,{children:Object(R.jsx)(P.a,{color:"textPrimary",gutterBottom:!0,variant:"subtitle2",children:"Taxas"})}),Object(R.jsx)(f.a,{align:"right",children:j()(t.taxAmount).format("".concat(t.currency,"0,0.00"))})]}),Object(R.jsxs)(g.a,{children:[Object(R.jsx)(f.a,{}),Object(R.jsx)(f.a,{children:Object(R.jsx)(P.a,{color:"textPrimary",gutterBottom:!0,variant:"subtitle2",children:"Total"})}),Object(R.jsx)(f.a,{align:"right",children:j()(t.totalAmount).format("".concat(t.currency,"0,0.00"))})]})]})]}),Object(R.jsxs)(h.a,{sx:{mt:2},children:[Object(R.jsx)(P.a,{color:"textPrimary",gutterBottom:!0,variant:"h6",children:"Notas"}),Object(R.jsx)(P.a,{color:"textSecondary",variant:"body2",children:"Ao receber seu pedido apresentar esse documento para valida\xe7\xe3o"})]})]})})}))}},953:function(e,t){},954:function(e,t){},965:function(e,t){},966:function(e,t){}}]);
//# sourceMappingURL=33.88d84e22.chunk.js.map