(this["webpackJsonp@devias/material-kit-pro-react"]=this["webpackJsonp@devias/material-kit-pro-react"]||[]).push([[41],{1523:function(e,t,a){"use strict";var r=a(3),o=a(4),n=a(2),i=a(1),c=(a(170),a(10),a(9)),l=a(475),d=a(7),s=a(21),u=a(5),b=a(13),j=a(432),p=a(476);function v(e){return Object(j.a)("MuiButtonGroup",e)}var h=Object(p.a)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]),O=a(0),m=Object(u.a)("div",{},{name:"MuiButtonGroup",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return Object(n.a)(Object(r.a)({},"& .".concat(h.grouped),Object(n.a)({},t.grouped,t["grouped".concat(Object(d.a)(a.orientation))],t["grouped".concat(Object(d.a)(a.variant))],t["grouped".concat(Object(d.a)(a.variant)).concat(Object(d.a)(a.orientation))],t["grouped".concat(Object(d.a)(a.variant)).concat(Object(d.a)(a.color))])),t.root,t[a.variant],!0===a.disableElevation&&t.disableElevation,a.fullWidth&&t.fullWidth,"vertical"===a.orientation&&t.vertical)}})((function(e){var t=e.theme,a=e.styleProps;return Object(n.a)({display:"inline-flex",borderRadius:t.shape.borderRadius},"contained"===a.variant&&{boxShadow:t.shadows[2]},a.disableElevation&&{boxShadow:"none"},a.fullWidth&&{width:"100%"},"vertical"===a.orientation&&{flexDirection:"column"},Object(r.a)({},"& .".concat(h.grouped),Object(n.a)({minWidth:40,"&:not(:first-of-type)":Object(n.a)({},"horizontal"===a.orientation&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},"vertical"===a.orientation&&{borderTopRightRadius:0,borderTopLeftRadius:0},"outlined"===a.variant&&"horizontal"===a.orientation&&{marginLeft:-1},"outlined"===a.variant&&"vertical"===a.orientation&&{marginTop:-1}),"&:not(:last-of-type)":Object(n.a)({},"horizontal"===a.orientation&&{borderTopRightRadius:0,borderBottomRightRadius:0},"vertical"===a.orientation&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},"text"===a.variant&&"horizontal"===a.orientation&&{borderRight:"1px solid ".concat("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"text"===a.variant&&"vertical"===a.orientation&&{borderBottom:"1px solid ".concat("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"text"===a.variant&&"inherit"!==a.color&&{borderColor:Object(s.a)(t.palette[a.color].main,.5)},"outlined"===a.variant&&"horizontal"===a.orientation&&{borderRightColor:"transparent"},"outlined"===a.variant&&"vertical"===a.orientation&&{borderBottomColor:"transparent"},"contained"===a.variant&&"horizontal"===a.orientation&&Object(r.a)({borderRight:"1px solid ".concat(t.palette.grey[400])},"&.".concat(h.disabled),{borderRight:"1px solid ".concat(t.palette.action.disabled)}),"contained"===a.variant&&"vertical"===a.orientation&&Object(r.a)({borderBottom:"1px solid ".concat(t.palette.grey[400])},"&.".concat(h.disabled),{borderBottom:"1px solid ".concat(t.palette.action.disabled)}),"contained"===a.variant&&"inherit"!==a.color&&{borderColor:t.palette[a.color].dark}),"&:hover":Object(n.a)({},"outlined"===a.variant&&"inherit"!==a.color&&{borderColor:t.palette[a.color].main},"contained"===a.variant&&{boxShadow:"none"})},"contained"===a.variant&&{boxShadow:"none"})))})),f=i.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiButtonGroup"}),r=a.children,s=a.className,u=a.color,j=void 0===u?"primary":u,p=a.component,h=void 0===p?"div":p,f=a.disabled,x=void 0!==f&&f,g=a.disableElevation,y=void 0!==g&&g,R=a.disableFocusRipple,z=void 0!==R&&R,w=a.disableRipple,C=void 0!==w&&w,E=a.fullWidth,T=void 0!==E&&E,k=a.orientation,M=void 0===k?"horizontal":k,B=a.size,H=void 0===B?"medium":B,P=a.variant,L=void 0===P?"outlined":P,S=Object(o.a)(a,["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"]),N=Object(n.a)({},a,{color:j,component:h,disabled:x,disableElevation:y,disableFocusRipple:z,disableRipple:C,fullWidth:T,orientation:M,size:H,variant:L}),W=function(e){var t=e.classes,a=e.color,r=e.disabled,o=e.disableElevation,n=e.fullWidth,i=e.orientation,c=e.variant,s={root:["root",c,"vertical"===i&&"vertical",n&&"fullWidth",o&&"disableElevation"],grouped:["grouped","grouped".concat(Object(d.a)(i)),"grouped".concat(Object(d.a)(c)),"grouped".concat(Object(d.a)(c)).concat(Object(d.a)(i)),"default"!==a&&"grouped".concat(Object(d.a)(c)).concat(Object(d.a)(a)),r&&"disabled"]};return Object(l.a)(s,v,t)}(N);return Object(O.jsx)(m,Object(n.a)({as:h,role:"group",className:Object(c.a)(W.root,s),ref:t,styleProps:N},S,{children:i.Children.map(r,(function(e){return i.isValidElement(e)?i.cloneElement(e,{className:Object(c.a)(W.grouped,e.props.className),color:e.props.color||j,disabled:e.props.disabled||x,disableElevation:e.props.disableElevation||y,disableFocusRipple:z,disableRipple:C,fullWidth:T,size:e.props.size||H,variant:e.props.variant||L}):null}))}))}));t.a=f},1588:function(e,t,a){"use strict";a.r(t);var r=a(1),o=a(122),n=a(165),i=a(442),c=a(512),l=a(0),d=function(){return Object(l.jsxs)(n.a,{sx:{backgroundColor:"background.paper",p:3},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(c.a,{color:"primary",size:"large",sx:{mr:3},variant:"contained",children:"Default"}),Object(l.jsx)(c.a,{color:"primary",disabled:!0,size:"large",variant:"contained",children:"Disabled"})]}),Object(l.jsxs)(n.a,{sx:{py:3},children:[Object(l.jsx)(c.a,{color:"primary",size:"large",sx:{mr:3},variant:"outlined",children:"Default"}),Object(l.jsx)(c.a,{color:"primary",disabled:!0,size:"large",variant:"outlined",children:"Disabled"})]}),Object(l.jsxs)(n.a,{children:[Object(l.jsx)(c.a,{color:"primary",size:"large",sx:{mr:3},variant:"text",children:"Default"}),Object(l.jsx)(c.a,{color:"primary",disabled:!0,size:"large",variant:"text",children:"Disabled"})]})]})},s=a(534),u=a(547),b=function(){return Object(l.jsxs)(n.a,{sx:{backgroundColor:"background.paper",p:3},children:[Object(l.jsx)(c.a,{sx:{backgroundColor:"error.main",mr:3,"&:hover":{backgroundColor:"error.dark"}},size:"small",startIcon:Object(l.jsx)(u.a,{}),variant:"contained",children:"Delete Account"}),Object(l.jsx)(c.a,{color:"primary",endIcon:Object(l.jsx)(s.a,{}),size:"small",variant:"contained",children:"Next Page"})]})},j=a(18),p=a(14),v=a(1523),h=a(487),O=a(478),m=a(500),f=a(939),x=a(506),g=a(516),y=a(636),R=a.n(y),z=["Create a merge commit","Squash and merge","Rebase and merge"],w=function(){var e=Object(r.useRef)(null),t=Object(r.useState)(!1),a=Object(p.a)(t,2),o=a[0],i=a[1],d=Object(r.useState)(1),s=Object(p.a)(d,2),u=s[0],b=s[1],y=function(t){e.current&&e.current.contains(t.target)||i(!1)};return Object(l.jsxs)(n.a,{sx:{backgroundColor:"background.paper",p:3},children:[Object(l.jsxs)(v.a,{ref:e,variant:"contained",children:[Object(l.jsx)(c.a,{children:z[u]}),Object(l.jsx)(c.a,{onClick:function(){i((function(e){return!e}))},size:"small",sx:{backgroundColor:"primary.dark"},children:Object(l.jsx)(R.a,{})})]}),Object(l.jsx)(h.a,{anchorEl:e.current,open:o,transition:!0,children:function(e){var t=e.TransitionProps,a=e.placement;return Object(l.jsx)(O.a,Object(j.a)(Object(j.a)({},t),{},{style:{transformOrigin:"bottom"===a?"center top":"center bottom"},children:Object(l.jsx)(m.a,{children:Object(l.jsx)(f.a,{onClickAway:y,children:Object(l.jsx)(x.a,{id:"split-button-menu",children:z.map((function(e,t){return Object(l.jsx)(g.a,{disabled:2===t,onClick:function(){return function(e){b(e),i(!1)}(t)},selected:t===u,children:e},e)}))})})})}))}})]})},C=a(545),E=a(123);t.default=function(){return Object(r.useEffect)((function(){E.a.push({event:"page_view"})}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.a,{children:Object(l.jsx)("title",{children:"Browse: Buttons | Material Kit Pro"})}),Object(l.jsx)(n.a,{sx:{backgroundColor:"background.paper",pb:15,pt:8},children:Object(l.jsxs)(i.a,{maxWidth:"lg",children:[Object(l.jsx)(C.a,{element:Object(l.jsx)(d,{}),name:"Simple buttons"}),Object(l.jsx)(C.a,{element:Object(l.jsx)(b,{}),name:"Buttons with text and icon"}),Object(l.jsx)(C.a,{element:Object(l.jsx)(w,{}),name:"Button groups"})]})})]})}},534:function(e,t,a){"use strict";var r=a(20),o=a(0),n=Object(r.a)(Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),"ArrowRight");t.a=n},545:function(e,t,a){"use strict";var r=a(18),o=a(14),n=a(77),i=a(1),c=a(514),l=a(556),d=a(511),s=a(513),u=a(526),b=a(51),j=a(124),p=a(20),v=a(0),h=Object(p.a)(Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(v.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})}),"Moon"),O=Object(p.a)(Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})}),"Sun"),m=a(203);t.a=function(e){var t=e.element,a=e.name,p=Object(n.a)(e,["element","name"]),f=Object(j.a)().settings,x=Object(i.useState)(f.theme),g=Object(o.a)(x,2),y=g[0],R=g[1];Object(i.useEffect)((function(){R(f.theme)}),[f.theme]);var z=Object(m.a)(Object(r.a)(Object(r.a)({},f),{},{theme:y}));return Object(v.jsxs)(c.a,Object(r.a)(Object(r.a)({variant:"outlined",sx:{mb:8}},p),{},{children:[Object(v.jsx)(l.a,{action:Object(v.jsx)(d.a,{onClick:function(){return R((function(e){return e===b.a.LIGHT?f.theme===b.a.LIGHT?b.a.DARK:f.theme:b.a.LIGHT}))},children:"LIGHT"===y?Object(v.jsx)(h,{fontSize:"small"}):Object(v.jsx)(O,{fontSize:"small"})}),title:a}),Object(v.jsx)(s.a,{}),Object(v.jsx)(u.a,{theme:z,children:t})]}))}},547:function(e,t,a){"use strict";var r=a(20),o=a(0),n=Object(r.a)(Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})}),"Trash");t.a=n},556:function(e,t,a){"use strict";var r=a(3),o=a(4),n=a(2),i=a(1),c=(a(10),a(9)),l=a(475),d=a(441),s=a(13),u=a(5),b=a(432),j=a(476);function p(e){return Object(b.a)("MuiCardHeader",e)}var v=Object(j.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=a(0),O=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(n.a)((a={},Object(r.a)(a,"& .".concat(v.title),t.title),Object(r.a)(a,"& .".concat(v.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),m=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),f=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),x=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),g=i.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiCardHeader"}),r=a.action,i=a.avatar,u=a.className,b=a.component,j=void 0===b?"div":b,v=a.disableTypography,g=void 0!==v&&v,y=a.subheader,R=a.subheaderTypographyProps,z=a.title,w=a.titleTypographyProps,C=Object(o.a)(a,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),E=Object(n.a)({},a,{component:j,disableTypography:g}),T=function(e){var t=e.classes;return Object(l.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)}(E),k=z;null==k||k.type===d.a||g||(k=Object(h.jsx)(d.a,Object(n.a)({variant:i?"body2":"h5",className:T.title,component:"span",display:"block"},w,{children:k})));var M=y;return null==M||M.type===d.a||g||(M=Object(h.jsx)(d.a,Object(n.a)({variant:i?"body2":"body1",className:T.subheader,color:"text.secondary",component:"span",display:"block"},R,{children:M}))),Object(h.jsxs)(O,Object(n.a)({className:Object(c.a)(T.root,u),as:j,ref:t,styleProps:E},C,{children:[i&&Object(h.jsx)(m,{className:T.avatar,styleProps:E,children:i}),Object(h.jsxs)(x,{className:T.content,styleProps:E,children:[k,M]}),r&&Object(h.jsx)(f,{className:T.action,styleProps:E,children:r})]}))}));t.a=g},636:function(e,t,a){"use strict";var r=a(283),o=a(282);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(a(1));var n=r(a(285)),i=a(0),c=(0,n.default)((0,i.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown");t.default=c},939:function(e,t,a){"use strict";var r=a(1),o=(a(10),a(47)),n=a(26),i=a(52),c=a(0);function l(e){return e.substring(2).toLowerCase()}t.a=function(e){var t=e.children,a=e.disableReactTree,d=void 0!==a&&a,s=e.mouseEvent,u=void 0===s?"onClick":s,b=e.onClickAway,j=e.touchEvent,p=void 0===j?"onTouchEnd":j,v=r.useRef(!1),h=r.useRef(null),O=r.useRef(!1),m=r.useRef(!1);r.useEffect((function(){return setTimeout((function(){O.current=!0}),0),function(){O.current=!1}}),[]);var f=Object(n.a)(t.ref,h),x=Object(i.a)((function(e){var t=m.current;m.current=!1;var a=Object(o.a)(h.current);!O.current||!h.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,a)||(v.current?v.current=!1:(e.composedPath?e.composedPath().indexOf(h.current)>-1:!a.documentElement.contains(e.target)||h.current.contains(e.target))||!d&&t||b(e))})),g=function(e){return function(a){m.current=!0;var r=t.props[e];r&&r(a)}},y={ref:f};return!1!==p&&(y[p]=g(p)),r.useEffect((function(){if(!1!==p){var e=l(p),t=Object(o.a)(h.current),a=function(){v.current=!0};return t.addEventListener(e,x),t.addEventListener("touchmove",a),function(){t.removeEventListener(e,x),t.removeEventListener("touchmove",a)}}}),[x,p]),!1!==u&&(y[u]=g(u)),r.useEffect((function(){if(!1!==u){var e=l(u),t=Object(o.a)(h.current);return t.addEventListener(e,x),function(){t.removeEventListener(e,x)}}}),[x,u]),Object(c.jsx)(r.Fragment,{children:r.cloneElement(t,y)})}}}]);
//# sourceMappingURL=41.73e70ef2.chunk.js.map