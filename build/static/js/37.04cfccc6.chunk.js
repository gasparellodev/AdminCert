(this["webpackJsonp@devias/material-kit-pro-react"]=this["webpackJsonp@devias/material-kit-pro-react"]||[]).push([[37],{1595:function(e,t,n){"use strict";n.r(t);var r=n(11),c=n.n(r),a=n(19),s=n(1),i=n(22),l=n(124),o=n(1043),d=n(129),j=n(166),u=n(442),b=n(618),x=n(444),h=n(14),O=n(78),p=n(18),m=n(515),f=n(768),v=n(516),g=n(1050),w=n(499),k=n(613),C=n(882),y=n(565),S=n(20),I=n(0),z=Object(S.a)(Object(I.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(I.jsx)("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),Object(I.jsx)("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"})]}),"Eye"),M=n(200),R=n(1237),A=n.n(R),H=n(1047),E=n(498),P=n(502),V=n(514),W=n(919),B=n.n(W),D=n(563),G=n(535),L=n(578),T=Object(S.a)(Object(I.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(I.jsx)("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",clipRule:"evenodd"}),Object(I.jsx)("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})]}),"EyeOff"),U=n(632),K=n(211),N=n(206),F=n(513),Y=["icon","children"],J=function(e){var t=e.icon,n=e.children,r=Object(O.a)(e,Y);return Object(I.jsx)(F.a,Object(p.a)(Object(p.a)({color:"primary",fullWidth:!0,startIcon:t,sx:{justifyContent:"flex-start","& + &":{mt:2}},variant:"contained"},r),{},{children:n}))},X=n(42),q=n(1051),_=n(5),Q=n(246),Z=n(590),$=n(512),ee=n(549),te=["cardId","checkItem","checklistId","editing","onEditCancel","onEditComplete","onEditInit"],ne=Object(_.a)("div")((function(e){var t=e.theme;return{alignItems:"flex-start",borderRadius:t.shape.borderRadius,display:"flex",padding:t.spacing(1),"&:hover":{backgroundColor:t.palette.background.default,"& button":{visibility:"visible"}}}})),re=function(e){var t=e.cardId,n=e.checkItem,r=e.checklistId,i=e.editing,l=e.onEditCancel,o=e.onEditComplete,b=e.onEditInit,x=Object(O.a)(e,te),m=Object(M.b)(),f=Object(s.useState)(n.name),v=Object(h.a)(f,2),g=v[0],w=v[1],k=function(){var e=Object(a.a)(c.a.mark((function e(a){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=a.target.checked?"complete":"incomplete",e.next=4,m(Object(N.o)(t,r,n.id,{state:s}));case 4:d.b.success("Check item updated!"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),d.b.error("Something went wrong!");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m(Object(N.o)(t,r,n.id,{name:g}));case 3:d.b.success("Check item updated!"),o&&o(),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),d.b.error("Something went wrong!");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m(Object(N.h)(t,r,n.id));case 3:d.b.success("Check item deleted!"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),d.b.error("Something went wrong!");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(I.jsxs)(ne,Object(p.a)(Object(p.a)({},x),{},{children:[Object(I.jsx)(Z.a,{checked:"complete"===n.state,color:"primary",onChange:k,sx:{ml:-1,mr:1}}),i?Object(I.jsxs)(j.a,{sx:{flexGrow:1},children:[Object(I.jsx)(P.a,{fullWidth:!0,onChange:function(e){w(e.target.value)},value:g,variant:"outlined"}),Object(I.jsxs)(j.a,{sx:{mt:1},children:[Object(I.jsx)(F.a,{color:"primary",onClick:C,size:"small",variant:"contained",children:"Save"}),Object(I.jsx)(F.a,{color:"primary",onClick:function(){w(n.name),l&&l()},size:"small",variant:"text",children:"Cancel"})]})]}):Object(I.jsxs)(j.a,{sx:{alignItems:"center",display:"flex",flexGrow:1},children:[Object(I.jsx)(u.a,{color:"textPrimary",onClick:b,sx:{flexGrow:1,cursor:"pointer",minHeight:32},variant:"body1",children:n.name}),Object(I.jsx)($.a,{onClick:y,sx:{visibility:"hidden"},children:Object(I.jsx)(ee.a,{fontSize:"small"})})]})]}))};re.defaultProps={editing:!1};var ce,ae=re,se=["cardId","checklistId"],ie=function(e){var t=e.cardId,n=e.checklistId,r=Object(O.a)(e,se),i=Object(M.b)(),l=Object(s.useState)(""),o=Object(h.a)(l,2),u=o[0],b=o[1],x=Object(s.useState)(!1),m=Object(h.a)(x,2),f=m[0],v=m[1],g=function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,u){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,i(Object(N.a)(t,n,u));case 5:v(!1),b(""),d.b.success("Check item added!"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),d.b.error("Something went wrong!");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(I.jsx)("div",Object(p.a)(Object(p.a)({},r),{},{children:f?Object(I.jsxs)("div",{children:[Object(I.jsx)(P.a,{fullWidth:!0,onChange:function(e){b(e.target.value)},placeholder:"Add an item",value:u,variant:"outlined"}),Object(I.jsxs)(j.a,{sx:{display:"flex",justifyContent:"flex-end",mt:2},children:[Object(I.jsx)(F.a,{color:"primary",onClick:function(){v(!1),b("")},size:"small",variant:"text",children:"Cancel"}),Object(I.jsx)(F.a,{color:"primary",onClick:g,size:"small",sx:{ml:2},variant:"contained",children:"Save"})]})]}):Object(I.jsx)(F.a,{color:"primary",onClick:function(){v(!0)},size:"small",variant:"outlined",children:"Add Item"})}))},le=["card","checklist"],oe=Object(_.a)("div")(ce||(ce=Object(X.a)([""]))),de=function(e){var t=e.card,n=e.checklist,r=Object(O.a)(e,le),i=Object(M.b)(),l=Object(s.useState)(n.name),o=Object(h.a)(l,2),b=o[0],x=o[1],m=Object(s.useState)(!1),f=Object(h.a)(m,2),v=f[0],g=f[1],w=Object(s.useState)(null),k=Object(h.a)(w,2),C=k[0],y=k[1],S=function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,b&&b!==n.name){e.next=5;break}return g(!1),x(n.name),e.abrupt("return");case 5:return g(!1),e.next=8,i(Object(N.p)(t.id,n.id,{name:b}));case 8:d.b.success("Checklist updated!"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0),d.b.error("Something went wrong!");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i(Object(N.i)(t.id,n.id));case 3:d.b.success("Checklist deleted!"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),d.b.error("Something went wrong!");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),R=function(){y(null)},A=function(){y(null)},H=n.checkItems.length,E=n.checkItems.filter((function(e){return"complete"===e.state})).length,V=0===H?100:E/H*100;return Object(I.jsxs)(oe,Object(p.a)(Object(p.a)({},r),{},{children:[Object(I.jsxs)(j.a,{sx:{alignItems:"center",display:"flex"},children:[Object(I.jsx)(j.a,{sx:{mr:3},children:Object(I.jsx)(Q.a,{fontSize:"small"})}),v?Object(I.jsxs)(j.a,{sx:{flexGrow:1},children:[Object(I.jsx)(P.a,{fullWidth:!0,onChange:function(e){x(e.target.value)},value:b,variant:"outlined"}),Object(I.jsxs)(j.a,{sx:{mt:1},children:[Object(I.jsx)(F.a,{color:"primary",onClick:S,size:"small",variant:"contained",children:"Save"}),Object(I.jsx)(F.a,{color:"primary",onClick:function(){g(!1),x(n.name)},size:"small",variant:"text",children:"Cancel"})]})]}):Object(I.jsxs)(j.a,{sx:{alignItems:"center",display:"flex",flexGrow:1},children:[Object(I.jsx)(u.a,{color:"textPrimary",onClick:function(){g(!0)},variant:"h6",children:n.name}),Object(I.jsx)(j.a,{sx:{flexGrow:1}}),Object(I.jsx)(F.a,{color:"primary",onClick:z,size:"small",variant:"text",children:"Delete"})]})]}),Object(I.jsxs)(j.a,{sx:{alignItems:"center",display:"flex",mt:1},children:[Object(I.jsxs)(u.a,{color:"textSecondary",variant:"caption",children:[Math.round(V),"%"]}),Object(I.jsx)(j.a,{sx:{flexGrow:1,ml:2},children:Object(I.jsx)(q.a,{color:"primary",value:V,variant:"determinate"})})]}),n.checkItems.map((function(e){return Object(I.jsx)(ae,{cardId:t.id,checkItem:e,checklistId:n.id,editing:C===e.id,onEditCancel:R,onEditComplete:A,onEditInit:function(){return t=e.id,void y(t);var t}},e.id)})),Object(I.jsx)(j.a,{sx:{ml:6,mt:1},children:Object(I.jsx)(ie,{cardId:t.id,checklistId:n.id})})]}))},je=n(276),ue=n(501),be=["createdAt","memberId","message"],xe=function(e){var t=e.createdAt,n=e.memberId,r=e.message,c=Object(O.a)(e,be),a=Object(M.c)((function(e){return function(e,t){return e.kanban.members.byId[t]}(e,n)}));return Object(I.jsxs)(j.a,Object(p.a)(Object(p.a)({sx:{display:"flex",mb:2}},c),{},{children:[Object(I.jsx)(w.a,{src:a.avatar}),Object(I.jsxs)(j.a,{sx:{ml:2,flexGrow:1},children:[Object(I.jsx)(u.a,{color:"textPrimary",variant:"subtitle2",children:a.name}),Object(I.jsx)(ue.a,{sx:{backgroundColor:"background.default",mt:1,p:2},variant:"outlined",children:Object(I.jsx)(u.a,{color:"textPrimary",variant:"body2",children:r})}),Object(I.jsx)(u.a,{color:"textSecondary",component:"p",sx:{mt:1},variant:"caption",children:Object(je.a)(t,"MMM dd, yyyy 'at' hh:mm a")})]})]}))},he=n(33),Oe=["cardId"],pe=function(e){var t=e.cardId,n=Object(O.a)(e,Oe),r=Object(M.b)(),i=Object(he.a)().user,l=Object(s.useState)(""),o=Object(h.a)(l,2),u=o[0],b=o[1],x=function(){var e=Object(a.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"ENTER"!==n.code||!u){e.next=6;break}return e.next=4,r(Object(N.c)(t,u));case 4:b(""),d.b.success("Comment added!");case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),d.b.error("Something went wrong!");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsxs)(j.a,Object(p.a)(Object(p.a)({sx:{alignItems:"center",display:"flex"}},n),{},{children:[Object(I.jsx)(w.a,{src:i.avatar,sx:{mr:2}}),Object(I.jsx)(P.a,{fullWidth:!0,onChange:function(e){b(e.target.value)},onKeyUp:x,placeholder:"Write a comment...",size:"small",value:u,variant:"outlined"})]}))},me=["card","column","onClose","open"],fe=function(e){var t=e.card,n=(e.column,e.onClose),r=e.open,s=Object(O.a)(e,me),i=Object(M.b)(),l=A()(function(){var e=Object(a.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i(Object(N.n)(t.id,n));case 3:d.b.success("Card updated!"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),d.b.error("Something went wrong!");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),1e3),o=function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i(Object(N.n)(t.id,{isSubscribed:!0}));case 3:d.b.success("Unsubscribed!"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),d.b.error("Something went wrong!");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i(Object(N.n)(t.id,{isSubscribed:!1}));case 3:d.b.success("Subscribed!"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),d.b.error("Something went wrong!");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i(Object(N.g)(t.id));case 3:d.b.success("Card archived!"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),d.b.error("Something went wrong!");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i(Object(N.b)(t.id,"Untitled Checklist"));case 3:d.b.success("Checklist added!"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),d.b.error("Something went wrong!");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(I.jsx)(H.a,Object(p.a)(Object(p.a)({fullWidth:!0,maxWidth:"md",onClose:n,open:r},s),{},{children:Object(I.jsx)(j.a,{sx:{p:3},children:Object(I.jsxs)(E.a,{container:!0,spacing:5,children:[Object(I.jsxs)(E.a,{item:!0,sm:8,xs:12,children:[Object(I.jsx)(P.a,{defaultValue:t.name,fullWidth:!0,label:"Title",onChange:function(e){return l({name:e.target.value})},variant:"outlined"}),Object(I.jsx)(j.a,{sx:{mt:3},children:Object(I.jsx)(P.a,{defaultValue:t.description,fullWidth:!0,multiline:!0,onChange:function(e){return l({description:e.target.value})},placeholder:"Leave a message",label:"Description",rows:6,variant:"outlined"})}),t.checklists.length>0&&Object(I.jsx)(j.a,{sx:{mt:5},children:t.checklists.map((function(e){return Object(I.jsx)(de,{card:t,checklist:e,sx:{mb:3}},e.id)}))}),Object(I.jsxs)(j.a,{sx:{mt:3},children:[Object(I.jsx)(u.a,{color:"textPrimary",variant:"h6",children:"Activity"}),Object(I.jsxs)(j.a,{sx:{mt:2},children:[Object(I.jsx)(pe,{cardId:t.id}),t.comments.length>0&&Object(I.jsx)(j.a,{sx:{mt:3},children:t.comments.map((function(e){return Object(I.jsx)(xe,{createdAt:e.createdAt,memberId:e.memberId,message:e.message},e.id)}))})]})]})]}),Object(I.jsxs)(E.a,{item:!0,xs:12,sm:4,children:[Object(I.jsx)(u.a,{color:"textPrimary",component:"h4",sx:{fontWeight:600,mb:2},variant:"overline",children:"Add to card"}),Object(I.jsx)(J,{icon:Object(I.jsx)(k.a,{fontSize:"small"}),onClick:h,children:"Checklist"}),Object(I.jsx)(J,{disabled:!0,icon:Object(I.jsx)(K.a,{fontSize:"small"}),children:"Members"}),Object(I.jsx)(J,{disabled:!0,icon:Object(I.jsx)(B.a,{fontSize:"small"}),children:"Labels"}),Object(I.jsx)(J,{disabled:!0,icon:Object(I.jsx)(y.a,{fontSize:"small"}),children:"Attachments"}),Object(I.jsxs)(j.a,{sx:{mt:3},children:[Object(I.jsx)(u.a,{color:"textPrimary",component:"h4",sx:{fontWeight:600,mb:2},variant:"overline",children:"Actions"}),Object(I.jsx)(J,{disabled:!0,icon:Object(I.jsx)(G.a,{fontSize:"small"}),children:"Move"}),Object(I.jsx)(J,{disabled:!0,icon:Object(I.jsx)(L.a,{fontSize:"small"}),children:"Copy"}),Object(I.jsx)(J,{disabled:!0,icon:Object(I.jsx)(U.a,{fontSize:"small"}),children:"Make Template"}),Object(I.jsx)(V.a,{sx:{my:2}}),t.isSubscribed?Object(I.jsx)(J,{icon:Object(I.jsx)(T,{fontSize:"small"}),onClick:b,children:"Unwatch"}):Object(I.jsx)(J,{icon:Object(I.jsx)(z,{fontSize:"small"}),onClick:o,children:"Watch"}),Object(I.jsx)(J,{icon:Object(I.jsx)(D.a,{fontSize:"small"}),onClick:x,children:"Archive"})]})]})]})})}))};fe.defaultProps={open:!1};var ve=fe,ge=["cardId","dragging","column"],we=Object(s.forwardRef)((function(e,t){var n=e.cardId,r=e.dragging,c=e.column,a=Object(O.a)(e,ge),i=Object(M.c)((function(e){return function(e,t){var n=e.kanban,r=n.cards,c=n.members,a=r.byId[t];return Object(p.a)(Object(p.a)({},a),{},{members:a.memberIds.map((function(e){return c.byId[e]}))})}(e,n)})),l=Object(s.useState)(!1),o=Object(h.a)(l,2),d=o[0],b=o[1];return Object(I.jsxs)(j.a,Object(p.a)(Object(p.a)({ref:t,sx:{outline:"none",py:1}},a),{},{children:[Object(I.jsxs)(m.a,{onClick:function(){b(!0)},raised:r,sx:Object(p.a)(Object(p.a)({},r&&{backgroundColor:"background.paper"}),{},{"&:hover":{backgroundColor:"background.default"}}),variant:r?"elevation":"outlined",children:[i.cover&&Object(I.jsx)(f.a,{image:i.cover,sx:{height:200}}),Object(I.jsxs)(v.a,{children:[Object(I.jsx)(u.a,{color:"textPrimary",variant:"subtitle2",children:i.name}),Object(I.jsxs)(j.a,{sx:{alignItems:"center",display:"flex",mt:2,"& svg:not(:first-of-type)":{ml:2}},children:[i.isSubscribed&&Object(I.jsx)(z,{fontSize:"small"}),i.attachments.length>0&&Object(I.jsx)(y.a,{fontSize:"small"}),i.checklists.length>0&&Object(I.jsx)(k.a,{fontSize:"small"}),i.comments.length>0&&Object(I.jsx)(C.a,{fontSize:"small"}),Object(I.jsx)(j.a,{sx:{flexGrow:1}}),i.members.length>0&&Object(I.jsx)(g.a,{max:5,children:i.members.map((function(e){return Object(I.jsx)(w.a,{src:e.avatar},e.id)}))})]})]})]}),Object(I.jsx)(ve,{card:i,column:c,onClose:function(){b(!1)},open:d})]}))}));we.defaultProps={dragging:!1};var ke=we,Ce=["columnId"],ye=function(e){var t=e.columnId,n=Object(O.a)(e,Ce),r=Object(M.b)(),i=Object(s.useState)(!1),l=Object(h.a)(i,2),o=l[0],u=l[1],b=Object(s.useState)(""),x=Object(h.a)(b,2),m=x[0],f=x[1],v=function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r(Object(N.e)(t,m||"Untitled Card"));case 3:u(!1),f(""),d.b.success("Card created!"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),d.b.error("Something went wrong!");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(I.jsx)("div",Object(p.a)(Object(p.a)({},n),{},{children:o?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(P.a,{fullWidth:!0,label:"Title",name:"cardName",onChange:function(e){f(e.target.value)},value:m,variant:"outlined"}),Object(I.jsxs)(j.a,{sx:{display:"flex",justifyContent:"space-between",mt:2},children:[Object(I.jsx)(F.a,{color:"primary",onClick:function(){u(!1),f("")},variant:"text",children:"Cancel"}),Object(I.jsx)(F.a,{color:"primary",onClick:v,variant:"contained",children:"Add"})]})]}):Object(I.jsx)(j.a,{sx:{display:"flex",justifyContent:"center"},children:Object(I.jsx)(F.a,{color:"primary",onClick:function(){u(!0)},variant:"text",children:"Add Card"})})}))},Se=n(948),Ie=n(277),ze=n(517),Me=n(536),Re=["columnId"],Ae=function(e){var t=e.columnId,n=Object(O.a)(e,Re),r=Object(M.b)(),i=Object(s.useRef)(null),l=Object(M.c)((function(e){return function(e,t){return e.kanban.columns.byId[t]}(e,t)})),b=Object(s.useState)(!1),x=Object(h.a)(b,2),m=x[0],f=x[1],v=Object(s.useState)(l.name),g=Object(h.a)(v,2),w=g[0],k=g[1],C=Object(s.useState)(!1),y=Object(h.a)(C,2),S=y[0],z=y[1],R=function(){z(!0),f(!1)},A=function(){var e=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,w){e.next=5;break}return k(l.name),z(!1),e.abrupt("return");case 5:return t={name:w},z(!1),e.next=9,r(Object(N.q)(l.id,t));case 9:d.b.success("Column updated!"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0),d.b.error("Something went wrong!");case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(!1),e.next=4,r(Object(N.j)(l.id));case 4:d.b.success("Column deleted!"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),d.b.error("Something went wrong!");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(!1),e.next=4,r(Object(N.d)(l.id));case 4:d.b.success("Column cleared!"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),d.b.error("Something went wrong!");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(I.jsx)("div",Object(p.a)(Object(p.a)({},n),{},{children:Object(I.jsxs)(ue.a,{sx:{display:"flex",flexDirection:"column",maxHeight:"100%",mx:1,overflowX:"hidden",overflowY:"hidden",width:{xs:300,sm:380}},children:[Object(I.jsxs)(j.a,{sx:{alignItems:"center",display:"flex",px:2,py:1},children:[S?Object(I.jsx)(Se.a,{onClickAway:A,children:Object(I.jsx)(P.a,{margin:"dense",onBlur:A,onChange:function(e){k(e.target.value)},value:w,variant:"outlined"})}):Object(I.jsx)(u.a,{color:"inherit",onClick:R,variant:"h6",children:l.name}),Object(I.jsx)(j.a,{sx:{flexGrow:1}}),Object(I.jsx)($.a,{color:"inherit",edge:"end",onClick:function(){f(!0)},ref:i,children:Object(I.jsx)(Me.a,{fontSize:"small"})})]}),Object(I.jsx)(V.a,{}),Object(I.jsx)(o.c,{droppableId:l.id,type:"card",children:function(e){return Object(I.jsxs)(j.a,{ref:e.innerRef,sx:{flexGrow:1,minHeight:80,overflowY:"auto",px:2,py:1},children:[l.cardIds.map((function(e,t){return Object(I.jsx)(o.b,{draggableId:e,index:t,children:function(n,r){return Object(I.jsx)(ke,Object(p.a)(Object(p.a)({cardId:e,dragging:r.isDragging,index:t,column:l,ref:n.innerRef,style:Object(p.a)({},n.draggableProps.style)},n.draggableProps),n.dragHandleProps),e)}},e)})),e.placeholder]})}}),Object(I.jsx)(V.a,{}),Object(I.jsx)(j.a,{sx:{p:2},children:Object(I.jsx)(ye,{columnId:l.id})}),Object(I.jsxs)(Ie.a,{anchorEl:i.current,anchorOrigin:{horizontal:"center",vertical:"bottom"},keepMounted:!0,onClose:function(){f(!1)},open:m,children:[Object(I.jsx)(ze.a,{onClick:R,children:"Rename"}),Object(I.jsx)(ze.a,{onClick:E,children:"Clear"}),Object(I.jsx)(ze.a,{onClick:H,children:"Delete"})]})]})}))},He=function(e){var t=Object(M.b)(),n=Object(s.useState)(!1),r=Object(h.a)(n,2),i=r[0],l=r[1],o=Object(s.useState)(""),u=Object(h.a)(o,2),b=u[0],x=u[1],O=function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(Object(N.f)(b||"Untitled column"));case 3:l(!1),x(""),d.b.success("Column created!"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),d.b.error("Something went wrong!");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(I.jsx)("div",Object(p.a)(Object(p.a)({},e),{},{children:Object(I.jsx)(m.a,{sx:{mx:1,width:{sm:380,xs:300}},children:Object(I.jsx)(j.a,{sx:{p:2},children:i?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(P.a,{fullWidth:!0,label:"Name",name:"listName",onChange:function(e){x(e.target.value)},value:b,variant:"outlined"}),Object(I.jsxs)(j.a,{sx:{display:"flex",justifyContent:"space-between",mt:2},children:[Object(I.jsx)(F.a,{color:"primary",onClick:function(){l(!1),x("")},variant:"text",children:"Cancel"}),Object(I.jsx)(F.a,{color:"primary",onClick:O,variant:"contained",children:"Add"})]})]}):Object(I.jsx)(j.a,{sx:{display:"flex",justifyContent:"center"},children:Object(I.jsx)(F.a,{color:"primary",onClick:function(){l(!0)},variant:"text",children:"Add Column"})})})})}))},Ee=n(201),Pe=n(125);t.default=function(){var e=Object(M.b)(),t=Object(M.c)((function(e){return e.kanban})).columns;Object(s.useEffect)((function(){Pe.a.push({event:"page_view"})}),[]),Object(s.useEffect)((function(){e(Object(N.k)())}),[]);var n=function(){var t=Object(a.a)(c.a.mark((function t(n){var r,a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.source,a=n.destination,s=n.draggableId,t.prev=1,a){t.next=4;break}return t.abrupt("return");case 4:if(r.droppableId!==a.droppableId||r.index!==a.index){t.next=6;break}return t.abrupt("return");case 6:if(r.droppableId!==a.droppableId){t.next=11;break}return t.next=9,e(Object(N.l)(s,a.index));case 9:t.next=13;break;case 11:return t.next=13,e(Object(N.l)(s,a.index,a.droppableId));case 13:d.b.success("Card moved!"),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(1),console.error(t.t0),d.b.error("Something went wrong!");case 20:case"end":return t.stop()}}),t,null,[[1,16]])})));return function(e){return t.apply(this,arguments)}}();return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(l.a,{children:Object(I.jsx)("title",{children:"Dashboard: Kanban | Material Kit Pro"})}),Object(I.jsxs)(j.a,{sx:{backgroundColor:"background.default",display:"flex",flexDirection:"column",height:"100%",overflow:"hidden"},children:[Object(I.jsxs)(j.a,{sx:{p:3},children:[Object(I.jsx)(u.a,{color:"textPrimary",variant:"h5",children:"Kanban"}),Object(I.jsxs)(b.a,{"aria-label":"breadcrumb",separator:Object(I.jsx)(Ee.a,{fontSize:"small"}),sx:{mt:1},children:[Object(I.jsx)(x.a,{color:"textPrimary",component:i.b,to:"/dashboard",variant:"subtitle2",children:"Dashboard"}),Object(I.jsx)(u.a,{color:"textSecondary",variant:"subtitle2",children:"Kanban"})]})]}),Object(I.jsx)(o.a,{onDragEnd:n,children:Object(I.jsx)(j.a,{sx:{display:"flex",flexGrow:1,flexShrink:1,overflowX:"auto",overflowY:"hidden"},children:Object(I.jsxs)(j.a,{sx:{display:"flex",px:1,py:3},children:[t.allIds.map((function(e){return Object(I.jsx)(Ae,{columnId:e},e)})),Object(I.jsx)(He,{})]})})})]})]})}},535:function(e,t,n){"use strict";var r=n(20),c=n(0),a=Object(r.a)(Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),"ArrowRight");t.a=a},536:function(e,t,n){"use strict";var r=n(20),c=n(0),a=Object(r.a)(Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(c.jsx)("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})}),"DotsHorizontal");t.a=a},549:function(e,t,n){"use strict";var r=n(20),c=n(0),a=Object(r.a)(Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})}),"Trash");t.a=a},563:function(e,t,n){"use strict";var r=n(20),c=n(0),a=Object(r.a)(Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(c.jsx)("path",{d:"M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"}),Object(c.jsx)("path",{fillRule:"evenodd",d:"M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z",clipRule:"evenodd"})]}),"Archive");t.a=a},565:function(e,t,n){"use strict";var r=n(20),c=n(0),a=Object(r.a)(Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",clipRule:"evenodd"})}),"DocumentText");t.a=a},578:function(e,t,n){"use strict";var r=n(20),c=n(0),a=Object(r.a)(Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(c.jsx)("path",{d:"M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"}),Object(c.jsx)("path",{d:"M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"})]}),"Duplicate");t.a=a},613:function(e,t,n){"use strict";var r=n(20),c=n(0),a=Object(r.a)(Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),"Check");t.a=a},632:function(e,t,n){"use strict";var r=n(20),c=n(0),a=Object(r.a)(Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(c.jsx)("path",{d:"M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"})}),"Template");t.a=a},882:function(e,t,n){"use strict";var r=n(20),c=n(0),a=Object(r.a)(Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z",clipRule:"evenodd"})}),"ChatAlt");t.a=a}}]);
//# sourceMappingURL=37.04cfccc6.chunk.js.map