(this["webpackJsonp@devias/material-kit-pro-react"]=this["webpackJsonp@devias/material-kit-pro-react"]||[]).push([[29],{1042:function(e,a,t){"use strict";var r=t(4),n=t(2),i=t(1),c=(t(10),t(9)),o=t(475),s=t(5),l=t(13),d=t(48),j=t(432),b=t(476);function m(e){return Object(j.a)("MuiListItemSecondaryAction",e)}Object(b.a)("MuiListItemSecondaryAction",["root","disableGutters"]);var u=t(0),O=Object(s.a)("div",{},{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,a){var t=e.styleProps;return Object(n.a)({},a.root,t.disableGutters&&a.disableGutters)}})((function(e){var a=e.styleProps;return Object(n.a)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},a.disableGutters&&{right:0})})),v=i.forwardRef((function(e,a){var t=Object(l.a)({props:e,name:"MuiListItemSecondaryAction"}),s=t.className,j=Object(r.a)(t,["className"]),b=i.useContext(d.a),v=Object(n.a)({},t,{disableGutters:b.disableGutters}),x=function(e){var a=e.disableGutters,t=e.classes,r={root:["root",a&&"disableGutters"]};return Object(o.a)(r,m,t)}(v);return Object(u.jsx)(O,Object(n.a)({className:Object(c.a)(x.root,s),styleProps:v,ref:a},j))}));v.muiName="ListItemSecondaryAction";a.a=v},1043:function(e,a,t){"use strict";var r=t(3),n=t(4),i=t(2),c=t(1),o=(t(10),t(170),t(9)),s=t(475),l=t(5),d=t(13),j=t(498),b=t(432),m=t(476);function u(e){return Object(b.a)("MuiAvatarGroup",e)}var O=Object(m.a)("MuiAvatarGroup",["root","avatar"]),v=t(0),x={small:-16,medium:null},p=Object(l.a)("div",{},{name:"MuiAvatarGroup",slot:"Root",overridesResolver:function(e,a){return Object(i.a)(Object(r.a)({},"& .".concat(O.avatar),a.avatar),a.root)}})((function(e){var a,t=e.theme;return a={},Object(r.a)(a,"& .MuiAvatar-root",{border:"2px solid ".concat(t.palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}),Object(r.a)(a,"display","flex"),Object(r.a)(a,"flexDirection","row-reverse"),a})),h=Object(l.a)(j.a,{},{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:function(e,a){return a.avatar}})((function(e){var a=e.theme;return{border:"2px solid ".concat(a.palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}})),g=c.forwardRef((function(e,a){var t=Object(d.a)({props:e,name:"MuiAvatarGroup"}),r=t.children,l=t.className,j=t.max,b=void 0===j?5:j,m=t.spacing,O=void 0===m?"medium":m,g=t.variant,f=void 0===g?"circular":g,y=Object(n.a)(t,["children","className","max","spacing","variant"]),w=b<2?2:b,k=Object(i.a)({},t,{max:b,spacing:O,variant:f}),S=function(e){var a=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"]},u,a)}(k),R=c.Children.toArray(r).filter((function(e){return c.isValidElement(e)})),P=R.length>w?R.length-w+1:0,C=O&&void 0!==x[O]?x[O]:-O;return Object(v.jsxs)(p,Object(i.a)({styleProps:k,className:Object(o.a)(S.root,l),ref:a},y,{children:[P?Object(v.jsxs)(h,{styleProps:k,className:S.avatar,style:{marginLeft:C},variant:f,children:["+",P]}):null,R.slice(0,R.length-P).reverse().map((function(e){return c.cloneElement(e,{className:Object(o.a)(e.props.className,S.avatar),style:Object(i.a)({marginLeft:C},e.props.style),variant:e.props.variant||f})}))]}))}));a.a=g},1574:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t(122),i=t(165),c=t(442),o=t(87),s=t(166),l=t(726),d=t(514),j=t(556),b=t(511),m=t(513),u=t(441),O=t(507),v=t(198),x=t(525),p=t(498),h=t(518),g=t(443),f=t(535),y=t(0),w=new Date,k=[{id:"5e89140bcc768199d1e0dc49",createdAt:Object(o.a)(w,23).getTime(),customer:{id:"5e887a62195cc5aef7e8ca5d",avatar:"/static/mock-images/avatars/avatar-marcus_finn.png",name:"Marcus Finn"},description:"Created account",type:"register"},{id:"5e891411b0290b175166cd32",createdAt:Object(o.a)(w,56).getTime(),customer:{id:"5e887ac47eed253091be10cb",avatar:"/static/mock-images/avatars/avatar-carson_darrin.png",name:"Carson Darrin"},description:"Subscription Purchase",type:"payment"},{id:"5e89141633dc5e52c923ef27",createdAt:Object(s.a)(w,2).getTime(),customer:{id:"5e887b209c28ac3dd97f6db5",avatar:"/static/mock-images/avatars/avatar-fran_perez.png",name:"Fran Perez"},description:"Submitted a ticket",type:"ticket_create"},{id:"5e89141bd975c7f33aee9f4b",createdAt:Object(o.a)(w,5).getTime(),customer:{id:"5e887b7602bdbc4dbb234b27",avatar:"/static/mock-images/avatars/avatar-jie_yan_song.png",name:"Jie Yan Song"},description:"Subscription Purchase",type:"payment"},{id:"5e891421d7945778863cf9ca",createdAt:Object(o.a)(w,5).getTime(),customer:{id:"5e86809283e28b96d2d38537",avatar:"/static/mock-images/avatars/avatar-jane_rotanson.png",name:"Jane Rotanson"},description:"Subscription Purchase",type:"payment"}],S=function(){return Object(y.jsx)(i.a,{sx:{backgroundColor:"background.default",p:3},children:Object(y.jsx)(c.a,{maxWidth:"sm",children:Object(y.jsxs)(d.a,{children:[Object(y.jsx)(j.a,{action:Object(y.jsx)(b.a,{children:Object(y.jsx)(f.a,{fontSize:"small"})}),title:"Activity"}),Object(y.jsx)(m.a,{}),Object(y.jsxs)(i.a,{sx:{display:"flex"},children:[Object(y.jsxs)(i.a,{sx:{p:3,flexGrow:1,"&:first-of-type":{borderRight:function(e){return"1px solid ".concat(e.palette.divider)}}},children:[Object(y.jsx)(u.a,{align:"center",color:"textPrimary",variant:"h5",children:"15,245"}),Object(y.jsx)(u.a,{align:"center",color:"textSecondary",component:"h4",variant:"overline",children:"Registered"})]}),Object(y.jsxs)(i.a,{sx:{p:3,flexGrow:1,"&:first-of-type":{borderRight:function(e){return"1px solid ".concat(e.palette.divider)}}},children:[Object(y.jsx)(u.a,{align:"center",color:"textPrimary",variant:"h5",children:"357"}),Object(y.jsx)(u.a,{align:"center",color:"textSecondary",component:"h4",variant:"overline",children:"Online"})]})]}),Object(y.jsx)(m.a,{}),Object(y.jsx)(O.a,{disablePadding:!0,children:k.map((function(e,a){return Object(y.jsxs)(v.b,{divider:a<k.length-1,children:[Object(y.jsx)(x.a,{children:Object(y.jsx)(p.a,{src:e.customer.avatar,sx:{cursor:"pointer"}})}),Object(y.jsx)(h.a,{disableTypography:!0,primary:Object(y.jsx)(g.a,{color:"textPrimary",sx:{cursor:"pointer"},underline:"none",variant:"subtitle2",children:e.customer.name}),secondary:Object(y.jsx)(u.a,{color:"textSecondary",variant:"body2",children:e.description})}),Object(y.jsxs)(u.a,{color:"textSecondary",noWrap:!0,variant:"caption",children:[Object(l.a)(e.createdAt)," ","ago"]})]},e.id)}))})]})})})},R=t(530),P=t.n(R),C=[{color:"#455a64",initials:"GT",name:"GitHub",value:53032},{color:"#00bcd4",initials:"TW",name:"Twitter",value:39551},{color:"#3949ab",initials:"HN",name:"Hacker News",value:23150},{color:"#f44336",initials:"SO",name:"Stack Overflow",value:14093},{color:"#e65100",initials:"RD",name:"Reddit.com",value:7251},{color:"#263238",initials:"DE",name:"Dev.to",value:5694},{color:"#0d47a1",initials:"FB",name:"Facebook",value:3643},{color:"#263238",initials:"MD",name:"Medium",value:1654}],z=function(){return Object(y.jsx)(i.a,{sx:{backgroundColor:"background.default",p:3},children:Object(y.jsx)(c.a,{maxWidth:"sm",children:Object(y.jsxs)(d.a,{sx:{display:"flex",flexDirection:"column"},children:[Object(y.jsx)(j.a,{action:Object(y.jsx)(b.a,{children:Object(y.jsx)(f.a,{fontSize:"small"})}),title:"Top Referrals"}),Object(y.jsx)(m.a,{}),Object(y.jsx)(O.a,{disablePadding:!0,children:C.map((function(e,a){return Object(y.jsxs)(v.b,{divider:a<C.length-1,children:[Object(y.jsx)(x.a,{children:Object(y.jsx)(p.a,{sx:{backgroundColor:e.color,color:"common.white",fontSize:14,fontWeight:600},children:e.initials})}),Object(y.jsx)(h.a,{primary:e.name,primaryTypographyProps:{color:"textPrimary",variant:"subtitle2"}}),Object(y.jsx)(u.a,{color:"textSecondary",variant:"body2",children:P()(e.value).format("0,0")})]},e.name)}))})]})})})},M=t(96),A=t(154),T=t(164),_=t(161),D=t(1043),B=t(167),G=t(125),L=new Date,N=[{id:"5eff24b501ba5281ddb5378c",deadline:Object(M.a)(Object(A.a)(L,1),1).getTime(),members:[{avatar:"/static/mock-images/avatars/avatar-marcus_finn.png",name:"Marcus Finn"},{avatar:"/static/mock-images/avatars/avatar-carson_darrin.png",name:"Carson Darrin"}],title:"Update the API for the project"},{id:"5eff24bb5bb3bd1beeddde78",deadline:Object(M.a)(Object(A.a)(L,1),2).getTime(),members:[{avatar:"/static/mock-images/avatars/avatar-penjani_inyene.png",name:"Penjani Inyene"},{avatar:"/static/mock-images/avatars/avatar-jane_rotanson.png",name:"Jane Rotanson"},{avatar:"/static/mock-images/avatars/avatar-nasimiyu_danai.png",name:"Nasimiyu Danai"}],title:"Redesign the landing page"},{id:"5eff24c019175119993fc1ff",deadline:L.getTime(),members:[{avatar:"/static/mock-images/avatars/avatar-miron_vitold.png",name:"Miron Vitold"}],title:"Solve the bug for the showState"},{id:"5eff24c52ce9fdadffa11959",deadline:null,members:[{avatar:"/static/mock-images/avatars/avatar-marcus_finn.png",name:"Marcus Finn"},{avatar:"/static/mock-images/avatars/avatar-siegbert_gottfried.png",name:"Siegbert Gottfried"}],title:"Release v1.0 Beta"},{id:"5eff24ca3ffab939b667258b",deadline:null,members:[{avatar:"/static/mock-images/avatars/avatar-jie_yan_song.png",name:"Jie Yan Song"},{avatar:"/static/mock-images/avatars/avatar-marcus_finn.png",name:"Marcus Finn"},{avatar:"/static/mock-images/avatars/avatar-jane_rotanson.png",name:"Jane Rotanson"}],title:"GDPR Compliance"},{id:"5eff24cf8740fc9faca4e463",deadline:null,members:[{avatar:"/static/mock-images/avatars/avatar-penjani_inyene.png",name:"Penjani Inyene"}],title:"Redesign Landing Page"}],F=function(e){var a="";if(e.deadline){var t=e.deadline;Object(T.a)(t,L)&&Object(_.a)(t,L)<3&&(a="".concat(Object(_.a)(t,L)," days remaining"))}return a},I=function(){return Object(y.jsx)(i.a,{sx:{backgroundColor:"background.default",p:3},children:Object(y.jsxs)(d.a,{children:[Object(y.jsx)(j.a,{action:Object(y.jsx)(b.a,{children:Object(y.jsx)(f.a,{fontSize:"small"})}),title:"Team Tasks"}),Object(y.jsx)(m.a,{}),Object(y.jsx)(G.a,{children:Object(y.jsx)(i.a,{sx:{minWidth:400},children:Object(y.jsx)(O.a,{children:N.map((function(e,a){return Object(y.jsxs)(v.b,{divider:a<N.length-1,children:[Object(y.jsx)(h.a,{primary:Object(y.jsx)(g.a,{color:"textPrimary",noWrap:!0,sx:{cursor:"pointer"},variant:"subtitle2",children:e.title}),secondary:F(e)}),Object(y.jsx)(D.a,{max:3,children:e.members.map((function(e){return Object(y.jsx)(B.a,{title:"View",children:Object(y.jsx)(p.a,{src:e.avatar})},e.name)}))})]},e.id)}))})})})]})})},W=t(517),H=t(1042),V=t(626),J=t.n(V),E=t(875),Y=t(585),$=t(199),Z=[{id:"5e8883a4f7877f898c408c27",message:"to send service quotes",type:"invite",value:6},{id:"5e8883aa34190e0457a6e2b9",message:"from clients",type:"message",value:2},{id:"5e8883af168cad3e1f4fe0ae",message:"that needs your confirmation",type:"payout",value:1}],U={invite:J.a,message:Y.a,payout:E.a},K=function(){return Object(y.jsx)(i.a,{sx:{backgroundColor:"background.default",p:3},children:Object(y.jsx)(d.a,{children:Object(y.jsx)(O.a,{children:Z.map((function(e,a){var t=U[e.type];return Object(y.jsxs)(v.b,{divider:a<Z.length-1,children:[Object(y.jsx)(W.a,{children:Object(y.jsx)(t,{fontSize:"small"})}),Object(y.jsx)(h.a,{children:Object(y.jsx)(u.a,{color:"textPrimary",variant:"subtitle2",children:"".concat(e.value," ").concat(e.type,"s ").concat(e.message)})}),Object(y.jsx)(H.a,{children:Object(y.jsx)(B.a,{title:"View",children:Object(y.jsx)(b.a,{edge:"end",children:Object(y.jsx)($.a,{fontSize:"small"})})})})]},e.id)}))})})})},q=t(1601),X=t(1602),Q=t(1603),ee=t(1604),ae=t(512),te=t(876),re=t(534),ne=[{id:"5eff2512c6f8737d08325676",conversionRate:93,currency:"$",image:"/static/mock-images/products/product_1.jpeg",name:"Charlie Tulip Dress",profit:53500,sales:13153},{id:"5eff2516247f9a6fcca9f151",conversionRate:76,currency:"$",image:"/static/mock-images/products/product_2.jpeg",name:"Kate Leopard Dress",profit:45763,sales:10300},{id:"5eff251a3bb9ab7290640f18",conversionRate:60,currency:"$",image:"/static/mock-images/products/product_3.jpeg",name:"Lounge Puff Fabric Slipper",profit:28700,sales:5300},{id:"5eff251e297fd17f0dc18a8b",conversionRate:46,currency:"$",image:"/static/mock-images/products/product_4.jpeg",name:"Flared Sleeve Floral Blouse",profit:20400,sales:1203},{id:"5eff2524ef813f061b3ea39f",conversionRate:41,currency:"$",image:"/static/mock-images/products/product_5.jpeg",name:"Soft Wrap Top",profit:15200,sales:254}],ie=function(){return Object(y.jsx)(i.a,{sx:{backgroundColor:"background.default",p:3},children:Object(y.jsxs)(d.a,{children:[Object(y.jsx)(j.a,{action:Object(y.jsx)(b.a,{children:Object(y.jsx)(f.a,{fontSize:"small"})}),title:"Profitable Products"}),Object(y.jsx)(G.a,{children:Object(y.jsx)(i.a,{sx:{minWidth:700},children:Object(y.jsx)(q.a,{children:Object(y.jsx)(X.a,{children:ne.map((function(e){return Object(y.jsxs)(Q.a,{hover:!0,children:[Object(y.jsx)(ee.a,{children:Object(y.jsxs)(i.a,{sx:{alignItems:"center",display:"flex","& > img":{flexShrink:0,height:56,width:56}},children:[Object(y.jsx)("img",{alt:"Product",src:e.image}),Object(y.jsxs)(i.a,{sx:{ml:2},children:[Object(y.jsx)(u.a,{color:"textPrimary",variant:"subtitle2",children:e.name}),Object(y.jsxs)(u.a,{color:"textSecondary",noWrap:!0,variant:"body2",children:[Object(y.jsx)(u.a,{color:"success.main",component:"span",variant:"subtitle2",children:P()(e.sales).format("0,0")})," ","Sales"]})]})]})}),Object(y.jsxs)(ee.a,{children:[Object(y.jsx)(u.a,{color:"textPrimary",variant:"subtitle2",children:"Profit"}),Object(y.jsx)(u.a,{color:"textSecondary",noWrap:!0,variant:"body2",children:P()(e.profit).format("".concat(e.currency,"0,0.00"))})]}),Object(y.jsx)(ee.a,{children:Object(y.jsxs)(i.a,{sx:{alignItems:"center",display:"flex",justifyContent:"flex-end"},children:[Object(y.jsxs)(i.a,{sx:{mr:2},children:[Object(y.jsxs)(u.a,{align:"right",color:"textPrimary",variant:"subtitle2",children:[e.conversionRate,"%"]}),Object(y.jsx)(u.a,{color:"textSecondary",variant:"body2",children:"Conversion Rate"})]}),Object(y.jsx)(te.a,{value:e.conversionRate})]})})]},e.id)}))})})})}),Object(y.jsx)(i.a,{sx:{display:"flex",justifyContent:"flex-end",p:2},children:Object(y.jsx)(ae.a,{color:"primary",endIcon:Object(y.jsx)(re.a,{fontSize:"small"}),size:"small",sx:{cursor:"pointer"},variant:"text",children:"See All"})})]})})},ce=t(439),oe=t(275),se=[{id:"d46800328cd510a668253b45",amount:25e3,currency:"usd",date:new Date,sender:"Devias",type:"receive"},{id:"b4b19b21656e44b487441c50",amount:6843,currency:"usd",date:Object(ce.a)(new Date,1),sender:"Zimbru",type:"send"},{id:"56c09ad91f6d44cb313397db",amount:91823,currency:"usd",date:Object(ce.a)(new Date,1),sender:"Vertical Jelly",type:"send"},{id:"aaeb96c5a131a55d9623f44d",amount:49550,currency:"usd",date:Object(ce.a)(new Date,3),sender:"Devias",type:"receive"}],le=function(){return Object(y.jsx)(i.a,{sx:{backgroundColor:"background.default",p:3},children:Object(y.jsxs)(d.a,{children:[Object(y.jsx)(j.a,{title:"Latest Transactions"}),Object(y.jsx)(q.a,{children:Object(y.jsx)(X.a,{children:se.map((function(e){return Object(y.jsxs)(Q.a,{sx:{"&:last-child td":{border:0}},children:[Object(y.jsx)(ee.a,{width:100,children:Object(y.jsxs)(i.a,{sx:{p:1},children:[Object(y.jsx)(u.a,{align:"center",color:"textSecondary",variant:"subtitle2",children:Object(oe.a)(e.date,"LLL").toUpperCase()}),Object(y.jsx)(u.a,{align:"center",color:"textSecondary",variant:"h6",children:Object(oe.a)(e.date,"d")})]})}),Object(y.jsx)(ee.a,{children:Object(y.jsxs)(i.a,{children:[Object(y.jsx)(u.a,{color:"textPrimary",variant:"subtitle2",children:e.sender}),Object(y.jsx)(u.a,{color:"textSecondary",variant:"body2",children:"receive"===e.type?"Payment received":"Payment sent"})]})}),Object(y.jsxs)(ee.a,{align:"right",children:[Object(y.jsxs)(u.a,{color:"receive"===e.type?"success.main":"error.main",variant:"subtitle2",children:["receive"===e.type?"+":"-"," ",P()(e.amount).format("$0,0.00")]}),Object(y.jsx)(u.a,{color:"textSecondary",variant:"body2",children:e.currency.toUpperCase()})]})]},e.id)}))})})]})})},de=t(929),je=t(630),be=[{id:"b91cbe81ee3efefba6b915a7",content:"Hello, we spoke earlier on the phone",date:Object(o.a)(new Date,2),senderAvatar:"/static/mock-images/avatars/avatar-alcides_antonio.png",senderName:"Alcides Antonio"},{id:"de0eb1ac517aae1aa57c0b7e",content:"Is the job still available?",date:Object(o.a)(new Date,56),senderAvatar:"/static/mock-images/avatars/avatar-marcus_finn.png",senderName:"Marcus Finn"},{id:"38e2b0942c90d0ad724e6f40",content:"What is a screening task? I\u2019d like to",date:Object(s.a)(Object(o.a)(new Date,23),3),senderAvatar:"/static/mock-images/avatars/avatar-carson_darrin.png",senderName:"Carson Darrin"},{id:"467505f3356f25a69f4c4890",content:"Still waiting for feedback",date:Object(s.a)(Object(o.a)(new Date,6),8),senderAvatar:"/static/mock-images/avatars/avatar-fran_perez.png",senderName:"Fran Perez"},{id:"7e6af808e801a8361ce4cf8b",content:"Need more information about current campaigns",date:Object(s.a)(Object(o.a)(new Date,18),10),senderAvatar:"/static/mock-images/avatars/avatar-jie_yan_song.png",senderName:"Jie Yan Song"}],me=function(){return Object(y.jsx)(i.a,{sx:{backgroundColor:"background.default",display:"flex",justifyContent:"center",minHeight:"100%",p:3},children:Object(y.jsxs)(d.a,{sx:{maxWidth:363},children:[Object(y.jsx)(j.a,{title:"Inbox"}),Object(y.jsx)(O.a,{disablePadding:!0,children:be.map((function(e,a){return Object(y.jsx)(i.a,{children:Object(y.jsxs)(v.b,{divider:a+1<be.length,children:[Object(y.jsx)(x.a,{children:Object(y.jsx)(p.a,{alt:e.senderName,src:e.senderAvatar})}),Object(y.jsx)(h.a,{disableTypography:!0,primary:0===a?Object(y.jsx)(de.a,{color:"primary",sx:{".MuiBadge-badge":{right:-16,top:11}},variant:"dot",children:Object(y.jsx)(u.a,{color:"textPrimary",variant:"subtitle2",children:e.senderName})}):Object(y.jsx)(u.a,{color:"textPrimary",variant:"subtitle2",children:e.senderName}),secondary:Object(y.jsxs)(i.a,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between"},children:[Object(y.jsx)(u.a,{color:"textSecondary",sx:{overflow:"hidden",pr:2,textOverflow:"ellipsis",whiteSpace:"nowrap"},variant:"body2",children:e.content}),Object(y.jsx)(u.a,{color:"textSecondary",variant:"caption",children:"".concat(Object(l.a)(e.date,{addSuffix:!0}))})]})})]})},e.id)}))}),Object(y.jsx)(je.a,{children:Object(y.jsx)(ae.a,{color:"primary",variant:"text",children:"Go to chat"})})]})})},ue=t(515),Oe=[{id:"5e887a62195cc5aef7e8ca5d",avatar:"/static/mock-images/avatars/avatar-marcus_finn.png",job:"Front End Developer",name:"Marcus Finn"},{id:"5e887ac47eed253091be10cb",avatar:"/static/mock-images/avatars/avatar-carson_darrin.png",job:"UX Designer",name:"Carson Darrin"},{id:"5e887b7602bdbc4dbb234b27",avatar:"/static/mock-images/avatars/avatar-jie_yan_song.png",job:"Copyright",name:"Jie Yan Song"}],ve=function(){return Object(y.jsx)(i.a,{sx:{backgroundColor:"background.default",minHeight:"100%",p:3},children:Object(y.jsx)(c.a,{maxWidth:"sm",children:Object(y.jsxs)(d.a,{children:[Object(y.jsx)(j.a,{sx:{pb:0},title:"Project members",titleTypographyProps:{variant:"overline"}}),Object(y.jsx)(ue.a,{sx:{pt:0},children:Object(y.jsx)(O.a,{children:Oe.map((function(e){return Object(y.jsxs)(v.b,{disableGutters:!0,children:[Object(y.jsx)(x.a,{children:Object(y.jsx)(p.a,{src:e.avatar})}),Object(y.jsx)(h.a,{primary:Object(y.jsx)(u.a,{color:"textPrimary",variant:"subtitle2",children:e.name}),secondary:Object(y.jsx)(u.a,{color:"textSecondary",variant:"body2",children:e.job})})]},e.id)}))})}),Object(y.jsx)(m.a,{}),Object(y.jsx)(je.a,{children:Object(y.jsx)(ae.a,{color:"primary",fullWidth:!0,variant:"text",children:"Manage members"})})]})})})},xe=t(928),pe=new Date,he=[{id:"5f0366cd843161f193ebadd4",author:{avatar:"/static/mock-images/avatars/avatar-marcus_finn.png",name:"Marcus Finn"},comment:"Great company, providing an awesome & easy to use product.",createdAt:Object(s.a)(pe,2).getTime(),value:5},{id:"to33twsyjphcfj55y3t07261",author:{avatar:"/static/mock-images/avatars/avatar-miron_vitold.png",name:"Miron Vitold"},comment:"Not the best people managers, poor management skills, poor career development programs. Communication from corporate & leadership isn't always clear and is sometime one-sided. Low pay compared to FANG.",createdAt:Object(s.a)(pe,2).getTime(),value:2},{id:"6z9dwxjzkqbmxuluxx2681jd",author:{avatar:"/static/mock-images/avatars/avatar-carson_darrin.png",name:"Carson Darrin"},comment:"I have been working with this company full-time. Great for the work life balance. Cons, decentralized decision making process across the organization.",createdAt:Object(s.a)(pe,2).getTime(),value:4}],ge=function(){return Object(y.jsx)(i.a,{sx:{backgroundColor:"background.default",minHeight:"100%",p:3},children:he.map((function(e){return Object(y.jsxs)(d.a,{sx:{"& + &":{mt:2}},children:[Object(y.jsx)(j.a,{avatar:Object(y.jsx)(p.a,{src:e.author.avatar}),disableTypography:!0,subheader:Object(y.jsxs)(i.a,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",mt:1},children:[Object(y.jsxs)(i.a,{sx:{alignItems:"center",display:"flex",mr:1},children:[Object(y.jsx)(xe.a,{readOnly:!0,value:5}),Object(y.jsx)(u.a,{color:"textPrimary",sx:{ml:1},variant:"subtitle2",children:e.value})]}),Object(y.jsxs)(u.a,{color:"textSecondary",variant:"body2",children:["| For"," ",Object(y.jsx)(g.a,{color:"textPrimary",variant:"subtitle2",children:"Low Budget"})," ","|"," ",Object(l.a)(e.createdAt)," ","ago"]})]}),title:Object(y.jsx)(g.a,{color:"textPrimary",variant:"subtitle2",children:e.author.name})}),Object(y.jsx)(i.a,{sx:{pb:2,px:3},children:Object(y.jsx)(u.a,{color:"textSecondary",variant:"body1",children:"Great company, providing an awesome & easy to use product."})})]},e.id)}))})},fe=t(541),ye=new Date,we=[{id:"5e8dd0828d628e6f40abdfe8",createdAt:Object(o.a)(ye,23).getTime(),description:"has uploaded a new file",subject:"Project author",type:"upload_file"},{id:"5e8dd0893a6725f2bb603617",createdAt:Object(s.a)(ye,2).getTime(),description:"joined team as a Front-End Developer",subject:"Adrian Stefan",type:"join_team"},{id:"5e8dd08f44603e3300b75cf1",createdAt:Object(s.a)(ye,9).getTime(),description:"joined team as a Full Stack Developer",subject:"Alexndru Robert",type:"join_team"}],ke=function(){return Object(y.jsx)(i.a,{sx:{backgroundColor:"background.default",minHeight:"100%",p:3},children:we.map((function(e){return Object(y.jsxs)(d.a,{sx:{alignItems:"center",display:"flex",p:2,"& + &":{mt:2}},children:[Object(y.jsx)(p.a,{sx:{backgroundColor:"primary.main",color:"common.white"},children:Object(y.jsx)(fe.a,{fontSize:"small"})}),Object(y.jsxs)(u.a,{color:"textPrimary",sx:{ml:2},variant:"body2",children:[Object(y.jsx)(g.a,{color:"textPrimary",variant:"subtitle2",children:e.subject})," ",e.description]}),Object(y.jsxs)(u.a,{color:"textPrimary",sx:{ml:"auto"},variant:"caption",children:[Object(l.a)(e.createdAt)," ","ago"]})]},e.id)}))})},Se=t(540),Re=[{id:"4be0679f811115c9d2d28497",clickRate:6.32,conversionRate:1.05,createdAt:"Jan 23 2021",name:"Summer Active Health",platform:"Google",status:"draft",target:"Men Group"},{id:"4e1cd375bfa59e4347404e20",clickRate:7.94,conversionRate:.31,createdAt:"Feb 1 2021",name:"New prospects blog",platform:"Facebook",status:"active",target:"Woman Married Group"},{id:"6b37fdf83195ca7e36622040",clickRate:20.15,conversionRate:2.1,createdAt:"Feb 5 2021",name:"Amazon Gift Cards",platform:"Facebook",status:"stopped",target:"Young Group"},{id:"e3651f8f9565cdbe8d2e5fea",clickRate:7.94,conversionRate:.5,createdAt:"Feb 1 2021",name:"Best Marketing Course Online",platform:"Bing",status:"draft",target:"Young Group"}],Pe={draft:"secondary",active:"success",stopped:"error"},Ce=function(){return Object(y.jsx)(i.a,{sx:{backgroundColor:"background.default",minHeight:"100%",p:3},children:Object(y.jsxs)(d.a,{children:[Object(y.jsx)(j.a,{title:"Campaigns Summary"}),Object(y.jsx)(m.a,{}),Object(y.jsx)(q.a,{children:Object(y.jsx)(X.a,{children:Re.map((function(e){return Object(y.jsxs)(Q.a,{sx:{"&:last-child td":{border:0}},children:[Object(y.jsxs)(ee.a,{children:[Object(y.jsx)(u.a,{color:"textPrimary",sx:{cursor:"pointer"},variant:"subtitle2",children:e.name}),Object(y.jsxs)(i.a,{sx:{alignItems:"center",display:"flex",mt:1},children:[Object(y.jsx)(u.a,{color:"textSecondary",variant:"body2",children:e.platform}),Object(y.jsx)(i.a,{sx:{height:4,width:4,borderRadius:4,backgroundColor:"text.secondary",mx:1}}),Object(y.jsx)(u.a,{color:"textSecondary",variant:"body2",children:"".concat(e.target,", ").concat(e.createdAt)})]})]}),Object(y.jsx)(ee.a,{children:Object(y.jsx)(Se.a,{color:Pe[e.status],children:e.status})}),Object(y.jsxs)(ee.a,{children:[Object(y.jsxs)(u.a,{color:"textPrimary",variant:"subtitle2",children:[e.clickRate,"%"]}),Object(y.jsx)(u.a,{color:"textSecondary",sx:{mt:1},variant:"body2",children:"Click Rate"})]}),Object(y.jsxs)(ee.a,{children:[Object(y.jsxs)(u.a,{color:"textPrimary",variant:"subtitle2",children:[e.conversionRate,"%"]}),Object(y.jsx)(u.a,{color:"textSecondary",sx:{mt:1},variant:"body2",children:"Conversions"})]}),Object(y.jsx)(ee.a,{align:"right",children:Object(y.jsx)(ae.a,{color:"primary",size:"small",variant:"outlined",children:"View"})})]},e.id)}))})})]})})},ze=t(545),Me=t(123);a.default=function(){return Object(r.useEffect)((function(){Me.a.push({event:"page_view"})}),[]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(n.a,{children:Object(y.jsx)("title",{children:"Browse: Grouped Lists | Material Kit Pro"})}),Object(y.jsx)(i.a,{sx:{backgroundColor:"background.paper",minHeight:"100%",py:8},children:Object(y.jsx)(c.a,{maxWidth:"lg",children:Object(y.jsxs)(i.a,{children:[Object(y.jsx)(ze.a,{element:Object(y.jsx)(S,{}),name:"List"}),Object(y.jsx)(ze.a,{element:Object(y.jsx)(z,{}),name:"Basic list"}),Object(y.jsx)(ze.a,{element:Object(y.jsx)(I,{}),name:"Basic list"}),Object(y.jsx)(ze.a,{element:Object(y.jsx)(K,{}),name:"Basic list"}),Object(y.jsx)(ze.a,{element:Object(y.jsx)(ie,{}),name:"Multiline list with donut chart"}),Object(y.jsx)(ze.a,{element:Object(y.jsx)(le,{}),name:"Basic list"}),Object(y.jsx)(ze.a,{element:Object(y.jsx)(me,{}),name:"Basic list with side avatars"}),Object(y.jsx)(ze.a,{element:Object(y.jsx)(ve,{}),name:"Basic list with side avatars"}),Object(y.jsx)(ze.a,{element:Object(y.jsx)(ge,{}),name:"Multiline list with rating bar"}),Object(y.jsx)(ze.a,{element:Object(y.jsx)(ke,{}),name:"Basic list with side icon"}),Object(y.jsx)(ze.a,{element:Object(y.jsx)(Ce,{}),name:"Basic multiline list"})]})})})]})}},534:function(e,a,t){"use strict";var r=t(20),n=t(0),i=Object(r.a)(Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),"ArrowRight");a.a=i},535:function(e,a,t){"use strict";var r=t(20),n=t(0),i=Object(r.a)(Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(n.jsx)("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})}),"DotsHorizontal");a.a=i},540:function(e,a,t){"use strict";var r=t(18),n=t(77),i=t(5),c=t(0),o=Object(i.a)("span")((function(e){var a=e.theme,t=e.styleProps,r=a.palette[t.color].main,n=a.palette[t.color].contrastText;return{alignItems:"center",backgroundColor:r,borderRadius:a.shape.borderRadius,color:n,cursor:"default",display:"inline-flex",flexGrow:0,flexShrink:0,fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(11),fontWeight:a.typography.fontWeightMedium,justifyContent:"center",letterSpacing:.5,minWidth:20,paddingBottom:a.spacing(.5),paddingLeft:a.spacing(1),paddingRight:a.spacing(1),paddingTop:a.spacing(.5),textTransform:"uppercase",whiteSpace:"nowrap"}}));a.a=function(e){var a=e.color,t=void 0===a?"primary":a,i=e.children,s=Object(n.a)(e,["color","children"]),l={color:t};return Object(c.jsx)(o,Object(r.a)(Object(r.a)({styleProps:l},s),{},{children:i}))}},541:function(e,a,t){"use strict";var r=t(20),n=t(0),i=Object(r.a)(Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Download");a.a=i},545:function(e,a,t){"use strict";var r=t(18),n=t(14),i=t(77),c=t(1),o=t(514),s=t(556),l=t(511),d=t(513),j=t(526),b=t(51),m=t(124),u=t(20),O=t(0),v=Object(u.a)(Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(O.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})}),"Moon"),x=Object(u.a)(Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(O.jsx)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})}),"Sun"),p=t(203);a.a=function(e){var a=e.element,t=e.name,u=Object(i.a)(e,["element","name"]),h=Object(m.a)().settings,g=Object(c.useState)(h.theme),f=Object(n.a)(g,2),y=f[0],w=f[1];Object(c.useEffect)((function(){w(h.theme)}),[h.theme]);var k=Object(p.a)(Object(r.a)(Object(r.a)({},h),{},{theme:y}));return Object(O.jsxs)(o.a,Object(r.a)(Object(r.a)({variant:"outlined",sx:{mb:8}},u),{},{children:[Object(O.jsx)(s.a,{action:Object(O.jsx)(l.a,{onClick:function(){return w((function(e){return e===b.a.LIGHT?h.theme===b.a.LIGHT?b.a.DARK:h.theme:b.a.LIGHT}))},children:"LIGHT"===y?Object(O.jsx)(v,{fontSize:"small"}):Object(O.jsx)(x,{fontSize:"small"})}),title:t}),Object(O.jsx)(d.a,{}),Object(O.jsx)(j.a,{theme:k,children:a})]}))}},585:function(e,a,t){"use strict";var r=t(20),n=t(0),i=Object(r.a)(Object(n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(n.jsx)("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),Object(n.jsx)("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),"Mail");a.a=i},626:function(e,a,t){"use strict";var r=t(283),n=t(282);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;n(t(1));var i=r(t(285)),c=t(0),o=(0,i.default)((0,c.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");a.default=o},875:function(e,a,t){"use strict";var r=t(20),n=t(0),i=Object(r.a)(Object(n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(n.jsx)("path",{d:"M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"}),Object(n.jsx)("path",{fillRule:"evenodd",d:"M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z",clipRule:"evenodd"})]}),"CreditCard");a.a=i},876:function(e,a,t){"use strict";var r=t(18),n=t(77),i=t(5),c=t(0),o=Object(i.a)("div")({height:56,width:56}),s=Object(i.a)("path")((function(e){return{fill:"none",stroke:"dark"===e.theme.palette.mode?"rgba(0,0,0,0.15)":"rgba(0,0,0,0.05)",strokeWidth:4}})),l=Object(i.a)("path")((function(e){return{animation:"$progress 1s ease-out forwards",fill:"none",stroke:e.theme.palette.primary.main,strokeWidth:4,"@keyframes progress":{"0%":{strokeDasharray:"0 100"}}}}));a.a=function(e){var a=e.value,t=Object(n.a)(e,["value"]);return Object(c.jsx)(o,Object(r.a)(Object(r.a)({},t),{},{children:Object(c.jsxs)("svg",{viewBox:"0 0 36 36",children:[Object(c.jsx)(s,{d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",strokeDasharray:"100, 100"}),Object(c.jsx)(l,{d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",strokeDasharray:"".concat(a,", 100")})]})}))}},929:function(e,a,t){"use strict";var r=t(3),n=t(4),i=t(2),c=t(1),o=(t(10),t(9)),s=function(e){var a=c.useRef({});return c.useEffect((function(){a.current=e})),a.current},l=t(476),d=t(131),j=t(432);function b(e){return Object(j.a)("MuiBadge",e)}var m=Object(l.a)("MuiBadge",["root","badge","dot","standard","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular","invisible"]),u=t(278),O=t(475),v=t(0),x=c.forwardRef((function(e,a){var t=e.anchorOrigin,r=void 0===t?{vertical:"top",horizontal:"right"}:t,c=e.classes,l=e.badgeContent,j=e.component,m=void 0===j?"span":j,x=e.children,p=e.className,h=e.components,g=void 0===h?{}:h,f=e.componentsProps,y=void 0===f?{}:f,w=e.invisible,k=e.max,S=void 0===k?99:k,R=e.overlap,P=void 0===R?"rectangular":R,C=e.showZero,z=void 0!==C&&C,M=e.variant,A=void 0===M?"standard":M,T=e.theme,_=Object(n.a)(e,["anchorOrigin","classes","badgeContent","component","children","className","components","componentsProps","invisible","max","overlap","showZero","variant","theme"]),D=s({anchorOrigin:r,badgeContent:l,max:S,overlap:P,variant:A}),B=w;null==w&&(0===l&&!z||null==l&&"dot"!==A)&&(B=!0);var G=B?D:e,L=G.anchorOrigin,N=void 0===L?r:L,F=G.badgeContent,I=G.max,W=void 0===I?S:I,H=G.overlap,V=void 0===H?P:H,J=G.variant,E=void 0===J?A:J,Y=Object(i.a)({},e,{anchorOrigin:N,badgeContent:F,classes:c,invisible:B,max:W,overlap:V,variant:E}),$="";"dot"!==E&&($=F>W?"".concat(W,"+"):F);var Z=function(e){var a=e.variant,t=e.anchorOrigin,r=e.overlap,n=e.invisible,i=e.classes,c={root:["root"],badge:["badge",a,"anchorOrigin".concat(Object(u.a)(t.vertical)).concat(Object(u.a)(t.horizontal)).concat(Object(u.a)(r)),n&&"invisible"]};return Object(O.a)(c,b,i)}(Y),U=g.Root||m,K=y.root||{},q=g.Badge||"span",X=y.badge||{};return Object(v.jsxs)(U,Object(i.a)({},K,!Object(d.a)(U)&&{as:m,styleProps:Object(i.a)({},Y,K.styleProps),theme:T},{ref:a},_,{className:Object(o.a)(Z.root,K.className,p),children:[x,Object(v.jsx)(q,Object(i.a)({},X,!Object(d.a)(q)&&{styleProps:Object(i.a)({},Y,X.styleProps),theme:T},{className:Object(o.a)(Z.badge,X.className),children:$}))]}))})),p=t(5),h=t(13),g=t(7),f=Object(i.a)({},m,Object(l.a)("MuiBadge",["colorError","colorPrimary","colorSecondary"])),y=Object(p.a)("span",{},{name:"MuiBadge",slot:"Root",overridesResolver:function(e,a){return a.root}})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),w=Object(p.a)("span",{},{name:"MuiBadge",slot:"Badge",overridesResolver:function(e,a){var t=e.styleProps;return Object(i.a)({},a.badge,a[t.variant],a["anchorOrigin".concat(Object(g.a)(t.anchorOrigin.vertical)).concat(Object(g.a)(t.anchorOrigin.horizontal)).concat(Object(g.a)(t.overlap))],"default"!==t.color&&a["color".concat(Object(g.a)(t.color))],t.invisible&&a.invisible)}})((function(e){var a=e.theme,t=e.styleProps;return Object(i.a)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:a.typography.fontFamily,fontWeight:a.typography.fontWeightMedium,fontSize:a.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:a.transitions.create("transform",{easing:a.transitions.easing.easeInOut,duration:a.transitions.duration.enteringScreen})},"default"!==t.color&&{backgroundColor:a.palette[t.color].main,color:a.palette[t.color].contrastText},"dot"===t.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&Object(r.a)({top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(f.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&Object(r.a)({bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(f.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&Object(r.a)({top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(f.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&Object(r.a)({bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(f.invisible),{transform:"scale(0) translate(-50%, 50%)"}),"top"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&Object(r.a)({top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(f.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&Object(r.a)({bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(f.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&Object(r.a)({top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(f.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&Object(r.a)({bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(f.invisible),{transform:"scale(0) translate(-50%, 50%)"}),t.invisible&&{transition:a.transitions.create("transform",{easing:a.transitions.easing.easeInOut,duration:a.transitions.duration.leavingScreen})})})),k=c.forwardRef((function(e,a){var t,r,c=Object(h.a)({props:e,name:"MuiBadge"}),l=Object(n.a)(c,["isRtl"]),j=l.components,m=void 0===j?{}:j,u=l.componentsProps,O=void 0===u?{}:u,p=l.color,f=void 0===p?"default":p,k=l.invisible,S=l.badgeContent,R=l.showZero,P=void 0!==R&&R,C=l.variant,z=void 0===C?"standard":C,M=Object(n.a)(l,["components","componentsProps","color","invisible","badgeContent","showZero","variant"]),A=s({color:f}),T=k;null==k&&(0===S&&!P||null==S&&"dot"!==z)&&(T=!0);var _=(T?A:l).color,D=void 0===_?f:_,B=function(e){var a=e.color,t=e.classes,r=void 0===t?{}:t;return Object(i.a)({},r,{badge:Object(o.a)(r.badge,"default"!==a&&[b("color".concat(Object(g.a)(a))),r["color".concat(Object(g.a)(a))]])})}(Object(i.a)({},l,{invisible:T,color:D}));return Object(v.jsx)(x,Object(i.a)({invisible:k,badgeContent:S,showZero:P,variant:z},M,{components:Object(i.a)({Root:y,Badge:w},m),componentsProps:{root:Object(i.a)({},O.root,(!m.Root||!Object(d.a)(m.Root))&&{styleProps:Object(i.a)({},null===(t=O.root)||void 0===t?void 0:t.styleProps,{color:D})}),badge:Object(i.a)({},O.badge,(!m.Thumb||!Object(d.a)(m.Thumb))&&{styleProps:Object(i.a)({},null===(r=O.badge)||void 0===r?void 0:r.styleProps,{color:D})})},classes:B,ref:a}))}));a.a=k}}]);
//# sourceMappingURL=29.74cd3fc0.chunk.js.map