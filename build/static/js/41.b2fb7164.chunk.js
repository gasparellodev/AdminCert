(this["webpackJsonp@devias/material-kit-pro-react"]=this["webpackJsonp@devias/material-kit-pro-react"]||[]).push([[41],{1050:function(e,t,a){"use strict";var n=a(3),r=a(4),c=a(2),i=a(1),s=(a(10),a(171),a(9)),o=a(476),l=a(5),j=a(13),d=a(499),u=a(433),b=a(477);function x(e){return Object(u.a)("MuiAvatarGroup",e)}var h=Object(b.a)("MuiAvatarGroup",["root","avatar"]),p=a(0),O={small:-16,medium:null},f=Object(l.a)("div",{},{name:"MuiAvatarGroup",slot:"Root",overridesResolver:function(e,t){return Object(c.a)(Object(n.a)({},"& .".concat(h.avatar),t.avatar),t.root)}})((function(e){var t,a=e.theme;return t={},Object(n.a)(t,"& .MuiAvatar-root",{border:"2px solid ".concat(a.palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}),Object(n.a)(t,"display","flex"),Object(n.a)(t,"flexDirection","row-reverse"),t})),v=Object(l.a)(d.a,{},{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})((function(e){var t=e.theme;return{border:"2px solid ".concat(t.palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}})),m=i.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiAvatarGroup"}),n=a.children,l=a.className,d=a.max,u=void 0===d?5:d,b=a.spacing,h=void 0===b?"medium":b,m=a.variant,g=void 0===m?"circular":m,y=Object(r.a)(a,["children","className","max","spacing","variant"]),w=u<2?2:u,k=Object(c.a)({},a,{max:u,spacing:h,variant:g}),C=function(e){var t=e.classes;return Object(o.a)({root:["root"],avatar:["avatar"]},x,t)}(k),S=i.Children.toArray(n).filter((function(e){return i.isValidElement(e)})),A=S.length>w?S.length-w+1:0,R=h&&void 0!==O[h]?O[h]:-h;return Object(p.jsxs)(f,Object(c.a)({styleProps:k,className:Object(s.a)(C.root,l),ref:t},y,{children:[A?Object(p.jsxs)(v,{styleProps:k,className:C.avatar,style:{marginLeft:R},variant:g,children:["+",A]}):null,S.slice(0,S.length-A).reverse().map((function(e){return i.cloneElement(e,{className:Object(s.a)(e.props.className,C.avatar),style:Object(c.a)({marginLeft:R},e.props.style),variant:e.props.variant||g})}))]}))}));t.a=m},1594:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(124),c=a(166),i=a(18),s=a(78),o=a(948),l=a(503),j=a(442),d=a(508),u=a(199),b=a(526),x=a(499),h=a(519),p=a(172),O=a(0),f=["isFocused","onChange","onClickAway","onFocus","onSelect","query","results"],v=Object(n.forwardRef)((function(e,t){var a=e.isFocused,n=e.onChange,r=e.onClickAway,v=e.onFocus,m=e.onSelect,g=e.query,y=e.results,w=Object(s.a)(e,f),k=g&&a;return Object(O.jsx)(o.a,{onClickAway:r,children:Object(O.jsxs)(c.a,Object(i.a)(Object(i.a)({ref:t,sx:{px:1}},w),{},{children:[Object(O.jsxs)(c.a,{sx:{alignItems:"center",backgroundColor:"background.default",borderRadius:22,display:"flex",height:44,px:2},children:[Object(O.jsx)(p.a,{color:"action",fontSize:"small"}),Object(O.jsx)(c.a,{sx:{flexGrow:1,ml:2},children:Object(O.jsx)(l.a,{fullWidth:!0,disableUnderline:!0,onChange:n,onFocus:v,placeholder:"Search contacts",value:g})})]}),k&&Object(O.jsxs)(c.a,{sx:{mt:2},children:[Object(O.jsx)(j.a,{color:"textSecondary",variant:"subtitle2",children:"Contacts"}),Object(O.jsx)(d.a,{children:y.map((function(e){return Object(O.jsxs)(u.b,{button:!0,onClick:function(){return function(e){m&&m(e)}(e)},children:[Object(O.jsx)(b.a,{children:Object(O.jsx)(x.a,{src:e.avatar,sx:{height:32,width:32}})}),Object(O.jsx)(h.a,{primary:e.name,primaryTypographyProps:{color:"textPrimary",noWrap:!0,variant:"subtitle2"}})]},e.id)}))})]})]}))})}));v.defaultProps={isFocused:!1,query:"",results:[]};var m=v,g=a(14),y=a(22),w=a(732),k=a(1044),C=a(444),S=["body","contentType","createdAt","senderAvatar","senderName","senderType"],A=function(e){var t=e.body,a=e.contentType,r=e.createdAt,o=e.senderAvatar,l=e.senderName,d=e.senderType,u=Object(s.a)(e,S),b=Object(n.useState)(!1),h=Object(g.a)(b,2),p=h[0],f=h[1];return Object(O.jsxs)(c.a,Object(i.a)(Object(i.a)({sx:{display:"flex",mb:2}},u),{},{children:[Object(O.jsxs)(c.a,{sx:{display:"flex",flexDirection:"user"===d?"row-reverse":"row",maxWidth:500,ml:"user"===d?"auto":0},children:[Object(O.jsx)(x.a,{src:o,sx:{height:32,ml:"user"===d?2:0,mr:"user"===d?0:2,width:32}}),Object(O.jsxs)("div",{children:[Object(O.jsxs)(c.a,{sx:{backgroundColor:"user"===d?"primary.main":"background.paper",borderRadius:1,boxShadow:1,color:"user"===d?"primary.contrastText":"text.primary",px:2,py:1},children:[Object(O.jsx)(C.a,{color:"inherit",component:y.b,to:"#",variant:"subtitle2",children:l}),Object(O.jsx)(c.a,{sx:{mt:1},children:"image"===a?Object(O.jsx)(c.a,{onClick:function(){return f(!0)},sx:{mt:2,"& img":{cursor:"pointer",height:"auto",maxWidth:"100%",width:380}},children:Object(O.jsx)("img",{alt:"Attachment",src:t})}):Object(O.jsx)(j.a,{color:"inherit",variant:"body1",children:t})})]}),Object(O.jsx)(c.a,{sx:{display:"flex",justifyContent:"user"===d?"flex-end":"flex-start",mt:1,px:2},children:Object(O.jsxs)(j.a,{color:"textSecondary",noWrap:!0,variant:"caption",children:[Object(w.a)(r)," ","ago"]})})]})]}),p&&Object(O.jsx)(k.a,{large:t,onClose:function(){return f(!0)}})]}))},R=a(502),z=a(168),M=a(512),E=a(514),P=a(630),T=a.n(P),I=a(637),L=a.n(I),B=a(629),W=a.n(B),F=a(33),H=["disabled","onSend"],N=function(e){var t=e.disabled,a=e.onSend,r=Object(s.a)(e,H),o=Object(n.useRef)(null),l=Object(F.a)().user,j=Object(n.useState)(""),d=Object(g.a)(j,2),u=d[0],b=d[1],h=function(){o.current.click()},p=function(){u&&(null===a||void 0===a||a(u),b(""))};return Object(O.jsxs)(c.a,Object(i.a)(Object(i.a)({sx:{alignItems:"center",backgroundColor:"background.paper",display:"flex",flexShrink:0,px:2,py:1}},r),{},{children:[Object(O.jsx)(x.a,{sx:{display:{xs:"none",sm:"inline"},mr:2},src:l.avatar}),Object(O.jsx)(R.a,{disabled:t,fullWidth:!0,onChange:function(e){b(e.target.value)},onKeyUp:function(e){"ENTER"===e.code&&p()},placeholder:"Leave a message",value:u,size:"small",variant:"outlined"}),Object(O.jsx)(z.a,{title:"Send",children:Object(O.jsx)("span",{children:Object(O.jsx)(M.a,{color:"primary",disabled:!u||t,onClick:p,children:Object(O.jsx)(W.a,{fontSize:"small"})})})}),Object(O.jsxs)(c.a,{sx:{alignItems:"center",display:{xs:"none",sm:"flex"}},children:[Object(O.jsx)(E.a,{orientation:"vertical",sx:{height:24}}),Object(O.jsx)(z.a,{title:"Attach photo",children:Object(O.jsx)("span",{children:Object(O.jsx)(M.a,{disabled:t,edge:"end",onClick:h,children:Object(O.jsx)(T.a,{fontSize:"small"})})})}),Object(O.jsx)(z.a,{title:"Attach file",children:Object(O.jsx)("span",{children:Object(O.jsx)(M.a,{disabled:t,edge:"end",onClick:h,children:Object(O.jsx)(L.a,{fontSize:"small"})})})})]}),Object(O.jsx)("input",{hidden:!0,ref:o,type:"file"})]}))};N.defaultProps={disabled:!1};var D=N,G=a(127),V=["messages","participants"],q=function(e){var t=e.messages,a=e.participants,r=Object(s.a)(e,V),o=Object(n.useRef)(null),l=Object(F.a)().user,j=function(){var e;(null===o||void 0===o||null===(e=o.current)||void 0===e?void 0:e._container)&&(o.current._container.scrollTop=o.current._container.scrollHeight)};return Object(n.useEffect)((function(){j()}),[t,j]),Object(O.jsx)(G.a,Object(i.a)(Object(i.a)({options:{suppressScrollX:!0},ref:o},r),{},{children:Object(O.jsx)(c.a,{sx:{p:2},children:t.map((function(e){var t,n,r,c=a.find((function(t){return t.id===e.senderId}));return"5e86809283e28b96d2d38537"===e.senderId?(t=l.avatar,n="Me",r="user"):(t=c.avatar,n=c.name,r="contact"),Object(O.jsx)(A,{body:e.body,contentType:e.contentType,createdAt:e.createdAt,senderAvatar:t,senderName:n,senderType:r},e.id)}))})}))},U=a(11),X=a.n(U),_=a(19),K=a(27),J=a(107),Y=a(219),Q=a(542),Z=a(200),$=a(29),ee=a(1050),te=a(441),ae=["active","thread","onSelect"],ne=function(e){var t=e.active,a=e.thread,n=e.onSelect,r=Object(s.a)(e,ae),o=function(e,t){var a=e.participants.filter((function(e){return e.id!==t})),n=a.reduce((function(e,t){return[].concat(Object($.a)(e),[t.name])}),[]).join(", "),r="",c=e.messages[e.messages.length-1];if(c){var i=c.senderId===t?"Me: ":"",s="image"===c.contentType?"Sent a photo":c.body;r="".concat(i).concat(s)}return{otherParticipants:a,displayNames:n,displayText:r}}(a,"5e86809283e28b96d2d38537");return Object(O.jsxs)(u.b,Object(i.a)(Object(i.a)({button:!0,onClick:n,sx:{backgroundColor:t&&"action.selected",boxShadow:function(e){return t&&"inset 4px 0px 0px ".concat(e.palette.primary.main)}}},r),{},{children:[Object(O.jsx)(b.a,{sx:{display:"flex",justifyContent:{sm:"flex-start",xs:"center"}},children:Object(O.jsx)(ee.a,{max:2,sx:{"& .MuiAvatar-root":o.otherParticipants.length>1?{height:26,width:26,"&:nth-of-type(2)":{mt:"10px"}}:{height:36,width:36}},children:o.otherParticipants.map((function(e){return Object(O.jsx)(x.a,{src:e.avatar},e.id)}))})}),Object(O.jsx)(h.a,{primary:o.displayNames,primaryTypographyProps:{color:"textPrimary",noWrap:!0,variant:"subtitle2"},secondary:o.displayText,secondaryTypographyProps:{color:"textSecondary",noWrap:!0,variant:"body2"},sx:{display:{sm:"block",xs:"none"}}}),Object(O.jsx)(c.a,{sx:{alignItems:"flex-end",display:{sm:"flex",xs:"none"},flexDirection:"column",ml:2},children:a.unreadCount>0&&Object(O.jsx)(te.a,{color:"primary",label:a.unreadCount,size:"small",sx:{height:18,mt:"2px",minWidth:18,p:"2px"}})})]}))};ne.defaultProps={active:!1};var re=ne,ce=function(e){var t=Object(Z.c)((function(e){return e.chat})),a=t.threads,n=t.activeThreadId,r=Object(K.h)();return Object(O.jsx)(d.a,Object(i.a)(Object(i.a)({},e),{},{children:a.allIds.map((function(e){return Object(O.jsx)(re,{active:n===e,onSelect:function(){return function(e){var t,n=a.byId[e];t="GROUP"===n.type?n.id:n.participants.find((function(e){return"5e86809283e28b96d2d38537"!==e.id})).username,r("/dashboard/chat/".concat(t))}(e)},thread:a.byId[e]},e)}))}))},ie=function(){var e=Object(K.h)(),t=Object(n.useState)(!1),a=Object(g.a)(t,2),r=a[0],i=a[1],s=Object(n.useState)(""),o=Object(g.a)(s,2),l=o[0],d=o[1],u=Object(n.useState)([]),b=Object(g.a)(u,2),x=b[0],h=b[1],p=function(){var e=Object(_.a)(X.a.mark((function e(t){var a,n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=t.target.value,d(a),!a){e.next=10;break}return e.next=6,J.a.searchContacts(a);case 6:n=e.sent,h(n),e.next=11;break;case 10:h([]);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)(c.a,{sx:{backgroundColor:"background.paper",borderRight:1,borderColor:"divider",display:"flex",flexDirection:"column",maxWidth:"100%",width:300},children:[Object(O.jsxs)(c.a,{sx:{alignItems:"center",display:"flex",flexShrink:0,height:64,px:2},children:[Object(O.jsx)(j.a,{color:"textPrimary",variant:"h5",children:"Chats"}),Object(O.jsx)(c.a,{sx:{flexGrow:1}}),Object(O.jsx)(M.a,{children:Object(O.jsx)(Y.a,{fontSize:"small"})}),Object(O.jsx)(M.a,{component:y.b,to:"/dashboard/chat/new",children:Object(O.jsx)(Q.a,{fontSize:"small"})})]}),Object(O.jsx)(c.a,{sx:{display:{sm:"block",xs:"none"}},children:Object(O.jsx)(m,{isFocused:r,onChange:p,onClickAway:function(){i(!1),d("")},onFocus:function(){i(!0)},onSelect:function(t){i(!1),d(""),e("/dashboard/chat/".concat(t.username))},query:l,results:x})}),Object(O.jsx)(G.a,{options:{suppressScrollX:!0},children:Object(O.jsx)(c.a,{sx:{display:r?"none":void 0},children:Object(O.jsx)(ce,{})})})]})},se=a(226),oe=a(488),le=a(501),je=["onAddRecipient","onRemoveRecipient","recipients"],de=function(e){var t=e.onAddRecipient,a=e.onRemoveRecipient,r=e.recipients,p=Object(s.a)(e,je),f=Object(n.useRef)(null),v=Object(n.useState)(""),m=Object(g.a)(v,2),y=m[0],w=m[1],k=Object(n.useState)(!0),C=Object(g.a)(k,2),S=C[0],A=C[1],R=Object(n.useState)([]),z=Object(g.a)(R,2),M=z[0],E=z[1],P=function(e,t){var a=t.reduce((function(e,t){return[].concat(Object($.a)(e),[t.id])}),[]);return e.filter((function(e){return!a.includes(e.id)}))}(M,r),T=y&&S,I=function(){var e=Object(_.a)(X.a.mark((function e(t){var a,n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=t.target.value,w(a),!a){e.next=10;break}return e.next=6,J.a.searchContacts(a);case 6:n=e.sent,E(n),e.next=11;break;case 10:E([]);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)(c.a,Object(i.a)(Object(i.a)({sx:{alignItems:"center",display:"flex",p:2}},p),{},{children:[Object(O.jsx)(j.a,{variant:"body1",color:"textSecondary",children:"To:"}),Object(O.jsxs)(c.a,{ref:f,sx:{ml:1,"& .MuiInputBase-root":{backgroundColor:"background.paper",borderRadius:16,height:32,maxWidth:r.length>0?120:"auto",px:2}},children:[r.map((function(e){return Object(O.jsx)(c.a,{component:"span",sx:{mr:2},children:Object(O.jsx)(te.a,{color:"primary",label:e.name,onDelete:function(){return t=e.id,void(a&&a(t));var t},size:"small"})},e.id)})),Object(O.jsx)(l.a,{disableUnderline:!0,onBlur:function(){T||A(!1)},onChange:I,onFocus:function(){A(!0)},placeholder:0===r.length?"Search contacts":"",value:y})]}),T&&Object(O.jsx)(o.a,{onClickAway:function(){A(!1)},children:Object(O.jsx)(oe.a,{anchorEl:f.current,open:S,placement:"bottom-start",children:Object(O.jsx)(le.a,{sx:{mt:1,maxWidth:"100%",width:320},children:0===P.length?Object(O.jsxs)(c.a,{sx:{p:2,textAlign:"center"},children:[Object(O.jsx)(j.a,{color:"textPrimary",gutterBottom:!0,variant:"h6",children:"Nothing Found"}),Object(O.jsxs)(j.a,{color:"textSecondary",variant:"body2",children:["We couldn't find any matches for \"",y,'". Try checking for typos or using complete words.']})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(c.a,{sx:{px:2,pt:2},children:Object(O.jsx)(j.a,{color:"textSecondary",variant:"subtitle2",children:"Contacts"})}),Object(O.jsx)(d.a,{children:P.map((function(e){return Object(O.jsxs)(u.b,{button:!0,onClick:function(){return a=e,w(""),void(t&&t(a));var a},children:[Object(O.jsx)(b.a,{children:Object(O.jsx)(x.a,{src:e.avatar})}),Object(O.jsx)(h.a,{primary:e.name,primaryTypographyProps:{color:"textPrimary",noWrap:!0,variant:"subtitle2"}})]},e.id)}))})]})})})})]}))};de.defaultProps={recipients:[]};var ue=de,be=a(277),xe=a(517),he=a(518),pe=a(5),Oe=a(563),fe=a(20),ve=Object(fe.a)(Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(O.jsx)("path",{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"})}),"Bell"),me=Object(fe.a)(Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(O.jsx)("path",{fillRule:"evenodd",d:"M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z",clipRule:"evenodd"})}),"Ban"),ge=Object(fe.a)(Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(O.jsx)("path",{fillRule:"evenodd",d:"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"})}),"Camera"),ye=Object(fe.a)(Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(O.jsx)("path",{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"})}),"Phone"),we=a(536),ke=a(549),Ce=["participants"],Se=Object(pe.a)(x.a)((function(e){return e.styleProps.small?{height:30,width:30,"&:nth-of-type(2)":{mt:"10px"}}:{}})),Ae=function(e){var t=e.participants,a=Object(s.a)(e,Ce),r=Object(n.useRef)(null),o=Object(n.useState)(!1),l=Object(g.a)(o,2),d=l[0],u=l[1],b=t.filter((function(e){return"5e86809283e28b96d2d38537"!==e.id})),x=b.reduce((function(e,t){return[].concat(Object($.a)(e),[t.name])}),[]).join(", ");return Object(O.jsxs)(c.a,Object(i.a)(Object(i.a)({sx:{alignItems:"center",backgroundColor:"background.paper",borderBottom:function(e){return"1px solid ".concat(e.palette.divider)},display:"flex",flexShrink:0,minHeight:64,px:2,py:1}},a),{},{children:[Object(O.jsxs)(c.a,{sx:{alignItems:"center",display:"flex","& .MuiAvatar-root":b.length>1&&{height:30,width:30,"&:nth-of-type(2)":{mt:"10px"}}},children:[Object(O.jsx)(ee.a,{max:2,children:b.map((function(e){return Object(O.jsx)(Se,{src:e.avatar,styleProps:{small:b.length>1}},e.id)}))}),Object(O.jsx)(j.a,{color:"textPrimary",sx:{ml:2},variant:"subtitle2",children:x})]}),Object(O.jsx)(c.a,{sx:{flexGrow:1}}),Object(O.jsx)(M.a,{children:Object(O.jsx)(ye,{fontSize:"small"})}),Object(O.jsx)(M.a,{children:Object(O.jsx)(ge,{fontSize:"small"})}),Object(O.jsx)(z.a,{title:"More options",children:Object(O.jsx)(M.a,{onClick:function(){u(!0)},ref:r,children:Object(O.jsx)(we.a,{fontSize:"small"})})}),Object(O.jsxs)(be.a,{anchorEl:r.current,keepMounted:!0,elevation:1,onClose:function(){u(!1)},open:d,children:[Object(O.jsxs)(xe.a,{children:[Object(O.jsx)(he.a,{children:Object(O.jsx)(me,{fontSize:"small"})}),Object(O.jsx)(h.a,{primary:"Block contact"})]}),Object(O.jsxs)(xe.a,{children:[Object(O.jsx)(he.a,{children:Object(O.jsx)(ke.a,{fontSize:"small"})}),Object(O.jsx)(h.a,{primary:"Delete thread"})]}),Object(O.jsxs)(xe.a,{children:[Object(O.jsx)(he.a,{children:Object(O.jsx)(Oe.a,{fontSize:"small"})}),Object(O.jsx)(h.a,{primary:"Archive thread"})]}),Object(O.jsxs)(xe.a,{children:[Object(O.jsx)(he.a,{children:Object(O.jsx)(ve,{fontSize:"small"})}),Object(O.jsx)(h.a,{primary:"Mute notifications"})]})]})]}))};Ae.defaultProps={participants:[]};var Re=Ae,ze=function(){var e=Object(Z.b)(),t=Object(K.h)(),a=Object(K.i)().threadKey,r=Object(Z.c)((function(e){return e.chat})),i=r.activeThreadId,s=r.participants,o=r.recipients,l=Object(Z.c)((function(e){return function(e){var t=e.chat,a=t.threads,n=t.activeThreadId;return a.byId[n]||{id:null,messages:[],participants:[],unreadMessages:0}}(e)})),j=function(){var n=Object(_.a)(X.a.mark((function n(){return X.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(Object(se.b)(a)),n.prev=1,n.next=4,e(Object(se.c)(a));case 4:n.next=11;break;case 6:n.prev=6,n.t0=n.catch(1),e(Object(se.h)()),console.error(n.t0),t("/dashboard/chat/new");case 11:case"end":return n.stop()}}),n,null,[[1,6]])})));return function(){return n.apply(this,arguments)}}();Object(n.useEffect)((function(){a&&j()}),[a]),Object(n.useEffect)((function(){i&&e(Object(se.e)(i))}),[i]);var d=a?"DETAIL":"COMPOSE",u=function(){var e=Object(_.a)(X.a.mark((function e(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)(c.a,{sx:{backgroundColor:"background.default",display:"flex",flexDirection:"column",flexGrow:1},children:["DETAIL"===d&&Object(O.jsx)(Re,{participants:s}),"COMPOSE"===d&&Object(O.jsx)(ue,{onAddRecipient:function(t){e(Object(se.a)(t))},onRemoveRecipient:function(t){e(Object(se.g)(t))},recipients:o}),Object(O.jsx)(c.a,{sx:{flexGrow:1,overflow:"auto"},children:Object(O.jsx)(q,{messages:l.messages,participants:l.participants})}),Object(O.jsx)(E.a,{}),Object(O.jsx)(D,{disabled:!1,onSend:u})]})},Me=a(125);t.default=function(){var e=Object(Z.b)();return Object(n.useEffect)((function(){Me.a.push({event:"page_view"})}),[]),Object(n.useEffect)((function(){e(Object(se.d)())}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(r.a,{children:Object(O.jsx)("title",{children:"Dashboard: Chat | Material Kit Pro"})}),Object(O.jsxs)(c.a,{sx:{backgroundColor:"background.default",display:"flex",height:"100%"},children:[Object(O.jsx)(ie,{}),Object(O.jsx)(ze,{})]})]})}},536:function(e,t,a){"use strict";var n=a(20),r=a(0),c=Object(n.a)(Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})}),"DotsHorizontal");t.a=c},542:function(e,t,a){"use strict";var n=a(20),r=a(0),c=Object(n.a)(Object(r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(r.jsx)("path",{d:"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"}),Object(r.jsx)("path",{fillRule:"evenodd",d:"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",clipRule:"evenodd"})]}),"PencilAlt");t.a=c},549:function(e,t,a){"use strict";var n=a(20),r=a(0),c=Object(n.a)(Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})}),"Trash");t.a=c},563:function(e,t,a){"use strict";var n=a(20),r=a(0),c=Object(n.a)(Object(r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(r.jsx)("path",{d:"M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"}),Object(r.jsx)("path",{fillRule:"evenodd",d:"M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z",clipRule:"evenodd"})]}),"Archive");t.a=c},948:function(e,t,a){"use strict";var n=a(1),r=(a(10),a(48)),c=a(28),i=a(53),s=a(0);function o(e){return e.substring(2).toLowerCase()}t.a=function(e){var t=e.children,a=e.disableReactTree,l=void 0!==a&&a,j=e.mouseEvent,d=void 0===j?"onClick":j,u=e.onClickAway,b=e.touchEvent,x=void 0===b?"onTouchEnd":b,h=n.useRef(!1),p=n.useRef(null),O=n.useRef(!1),f=n.useRef(!1);n.useEffect((function(){return setTimeout((function(){O.current=!0}),0),function(){O.current=!1}}),[]);var v=Object(c.a)(t.ref,p),m=Object(i.a)((function(e){var t=f.current;f.current=!1;var a=Object(r.a)(p.current);!O.current||!p.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,a)||(h.current?h.current=!1:(e.composedPath?e.composedPath().indexOf(p.current)>-1:!a.documentElement.contains(e.target)||p.current.contains(e.target))||!l&&t||u(e))})),g=function(e){return function(a){f.current=!0;var n=t.props[e];n&&n(a)}},y={ref:v};return!1!==x&&(y[x]=g(x)),n.useEffect((function(){if(!1!==x){var e=o(x),t=Object(r.a)(p.current),a=function(){h.current=!0};return t.addEventListener(e,m),t.addEventListener("touchmove",a),function(){t.removeEventListener(e,m),t.removeEventListener("touchmove",a)}}}),[m,x]),!1!==d&&(y[d]=g(d)),n.useEffect((function(){if(!1!==d){var e=o(d),t=Object(r.a)(p.current);return t.addEventListener(e,m),function(){t.removeEventListener(e,m)}}}),[m,d]),Object(s.jsx)(n.Fragment,{children:n.cloneElement(t,y)})}}}]);
//# sourceMappingURL=41.b2fb7164.chunk.js.map