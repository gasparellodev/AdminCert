(this["webpackJsonp@devias/material-kit-pro-react"]=this["webpackJsonp@devias/material-kit-pro-react"]||[]).push([[67],{1586:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(22),i=a(122),c=a(165),o=a(442),s=a(514),l=a(515),d=a(441),m=a(513),u=a(443),j=a(215),b=a(18),h=a(11),p=a.n(h),x=a(19),O=a(28),v=a(50),f=a(99),y=a(501),g=a(589),w=a(508),k=a(512),S=a(32),C=a(78),B=a(0),z=function(e){var t=Object(C.a)(),a=Object(O.h)(),r=Object(S.a)().register;return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(f.a,{initialValues:{email:"",password:"",policy:!0,submit:null},validationSchema:v.f().shape({email:v.h().email("Must be a valid email").max(255).required("Email is required"),password:v.h().min(7).max(255).required("Password is required"),policy:v.c().oneOf([!0],"This field must be checked")}),onSubmit:function(){var e=Object(x.a)(p.a.mark((function e(n,i){var c,o,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=i.setErrors,o=i.setStatus,s=i.setSubmitting,e.prev=1,e.next=4,r(n.email,n.password);case 4:a("/authentication/verify-code",{state:{username:n.email}}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),t.current&&(o({success:!1}),c({submit:e.t0.message}),s(!1));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,a){return e.apply(this,arguments)}}(),children:function(t){var a=t.errors,r=t.handleBlur,n=t.handleChange,i=t.handleSubmit,o=t.isSubmitting,s=t.touched,l=t.values;return Object(B.jsxs)("form",Object(b.a)(Object(b.a)({noValidate:!0,onSubmit:i},e),{},{children:[Object(B.jsx)(y.a,{error:Boolean(s.email&&a.email),fullWidth:!0,helperText:s.email&&a.email,label:"Email Address",margin:"normal",name:"email",onBlur:r,onChange:n,type:"email",value:l.email,variant:"outlined"}),Object(B.jsx)(y.a,{error:Boolean(s.password&&a.password),fullWidth:!0,helperText:s.password&&a.password,label:"Password",margin:"normal",name:"password",onBlur:r,onChange:n,type:"password",value:l.password,variant:"outlined"}),Object(B.jsxs)(c.a,{sx:{alignItems:"center",display:"flex",ml:-1,mt:2},children:[Object(B.jsx)(g.a,{checked:l.policy,color:"primary",name:"policy",onChange:n}),Object(B.jsxs)(d.a,{color:"textSecondary",variant:"body2",children:["I have read the"," ",Object(B.jsx)(u.a,{color:"primary",component:"a",href:"#",children:"Terms and Conditions"})]})]}),Boolean(s.policy&&a.policy)&&Object(B.jsx)(w.a,{error:!0,children:a.policy}),a.submit&&Object(B.jsx)(c.a,{sx:{mt:3},children:Object(B.jsx)(w.a,{error:!0,children:a.submit})}),Object(B.jsx)(c.a,{sx:{mt:2},children:Object(B.jsx)(k.a,{color:"primary",disabled:o,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Register"})})]}))}})})},P=a(14),W=function(e){var t=Object(C.a)(),a=Object(S.a)().loginWithPopup,n=Object(r.useState)(null),i=Object(P.a)(n,2),o=i[0],s=i[1],l=function(){var e=Object(x.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a();case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0),t.current&&s(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(B.jsxs)("div",Object(b.a)(Object(b.a)({},e),{},{children:[o&&Object(B.jsx)(c.a,{sx:{my:3},children:Object(B.jsx)(w.a,{error:!0,children:o})}),Object(B.jsx)(c.a,{sx:{display:"flex",justifyContent:"center"},children:Object(B.jsx)(k.a,{color:"primary",onClick:l,variant:"contained",children:"Register"})})]}))},I=function(e){var t=Object(C.a)(),a=Object(S.a)(),r=a.createUserWithEmailAndPassword,n=a.signInWithGoogle,i=function(){var e=Object(x.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)(k.a,{fullWidth:!0,onClick:i,size:"large",sx:{backgroundColor:"common.white",color:"common.black","&:hover":{backgroundColor:"common.white",color:"common.black"}},variant:"contained",children:[Object(B.jsx)(c.a,{alt:"Google",component:"img",src:"/static/icons/google.svg",sx:{mr:1}}),"Google"]}),Object(B.jsxs)(c.a,{sx:{alignItems:"center",display:"flex",mt:2},children:[Object(B.jsx)(c.a,{sx:{flexGrow:1},children:Object(B.jsx)(m.a,{orientation:"horizontal"})}),Object(B.jsx)(d.a,{color:"textSecondary",sx:{m:2},variant:"body1",children:"OR"}),Object(B.jsx)(c.a,{sx:{flexGrow:1},children:Object(B.jsx)(m.a,{orientation:"horizontal"})})]}),Object(B.jsx)(f.a,{initialValues:{email:"",password:"",policy:!0,submit:null},validationSchema:v.f().shape({email:v.h().email("Must be a valid email").max(255).required("Email is required"),password:v.h().min(7).max(255).required("Password is required"),policy:v.c().oneOf([!0],"This field must be checked")}),onSubmit:function(){var e=Object(x.a)(p.a.mark((function e(a,n){var i,c,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.setErrors,c=n.setStatus,o=n.setSubmitting,e.prev=1,e.next=4,r(a.email,a.password);case 4:t.current&&(c({success:!0}),o(!1)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),t.current&&(c({success:!1}),i({submit:e.t0.message}),o(!1));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,a){return e.apply(this,arguments)}}(),children:function(t){var a=t.errors,r=t.handleBlur,n=t.handleChange,i=t.handleSubmit,o=t.isSubmitting,s=t.touched,l=t.values;return Object(B.jsxs)("form",Object(b.a)(Object(b.a)({noValidate:!0,onSubmit:i},e),{},{children:[Object(B.jsx)(y.a,{error:Boolean(s.email&&a.email),fullWidth:!0,helperText:s.email&&a.email,label:"Email Address",margin:"normal",name:"email",onBlur:r,onChange:n,type:"email",value:l.email,variant:"outlined"}),Object(B.jsx)(y.a,{error:Boolean(s.password&&a.password),fullWidth:!0,helperText:s.password&&a.password,label:"Password",margin:"normal",name:"password",onBlur:r,onChange:n,type:"password",value:l.password,variant:"outlined"}),Object(B.jsxs)(c.a,{sx:{alignItems:"center",display:"flex",ml:-1,mt:2},children:[Object(B.jsx)(g.a,{checked:l.policy,color:"primary",name:"policy",onChange:n}),Object(B.jsxs)(d.a,{color:"textSecondary",variant:"body2",children:["I have read the"," ",Object(B.jsx)(u.a,{color:"primary",component:"a",href:"#",children:"Terms and Conditions"})]})]}),Boolean(s.policy&&a.policy)&&Object(B.jsx)(w.a,{error:!0,children:a.policy}),a.submit&&Object(B.jsx)(c.a,{sx:{mt:3},children:Object(B.jsx)(w.a,{error:!0,children:a.submit})}),Object(B.jsx)(c.a,{sx:{mt:2},children:Object(B.jsx)(k.a,{color:"primary",disabled:o,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Register"})})]}))}})]})},T=function(e){var t=Object(C.a)(),a=Object(S.a)().register;return Object(B.jsx)(f.a,{initialValues:{email:"",name:"",password:"",policy:!1,submit:null},validationSchema:v.f().shape({email:v.h().email("Must be a valid email").max(255).required("Email is required"),name:v.h().max(255).required("Name is required"),password:v.h().min(7).max(255).required("Password is required"),policy:v.c().oneOf([!0],"This field must be checked")}),onSubmit:function(){var e=Object(x.a)(p.a.mark((function e(r,n){var i,c,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.setErrors,c=n.setStatus,o=n.setSubmitting,e.prev=1,e.next=4,a(r.email,r.name,r.password);case 4:t.current&&(c({success:!0}),o(!1)),e.next=13;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),c({success:!1}),i({submit:e.t0.message}),o(!1);case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,a){return e.apply(this,arguments)}}(),children:function(t){var a=t.errors,r=t.handleBlur,n=t.handleChange,i=t.handleSubmit,o=t.isSubmitting,s=t.touched,l=t.values;return Object(B.jsxs)("form",Object(b.a)(Object(b.a)({noValidate:!0,onSubmit:i},e),{},{children:[Object(B.jsx)(y.a,{error:Boolean(s.name&&a.name),fullWidth:!0,helperText:s.name&&a.name,label:"Name",margin:"normal",name:"name",onBlur:r,onChange:n,value:l.name,variant:"outlined"}),Object(B.jsx)(y.a,{error:Boolean(s.email&&a.email),fullWidth:!0,helperText:s.email&&a.email,label:"Email Address",margin:"normal",name:"email",onBlur:r,onChange:n,type:"email",value:l.email,variant:"outlined"}),Object(B.jsx)(y.a,{error:Boolean(s.password&&a.password),fullWidth:!0,helperText:s.password&&a.password,label:"Password",margin:"normal",name:"password",onBlur:r,onChange:n,type:"password",value:l.password,variant:"outlined"}),Object(B.jsxs)(c.a,{sx:{alignItems:"center",display:"flex",ml:-1,mt:2},children:[Object(B.jsx)(g.a,{checked:l.policy,color:"primary",name:"policy",onChange:n}),Object(B.jsxs)(d.a,{color:"textSecondary",variant:"body2",children:["I have read the"," ",Object(B.jsx)(u.a,{color:"primary",component:"a",href:"#",children:"Terms and Conditions"})]})]}),Boolean(s.policy&&a.policy)&&Object(B.jsx)(w.a,{error:!0,children:a.policy}),a.submit&&Object(B.jsx)(c.a,{sx:{mt:3},children:Object(B.jsx)(w.a,{error:!0,children:a.submit})}),Object(B.jsx)(c.a,{sx:{mt:2},children:Object(B.jsx)(k.a,{color:"primary",disabled:o,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Register"})})]}))}})},q=a(34),E=a(123),M={Amplify:"/static/icons/amplify.svg",Auth0:"/static/icons/auth0.svg",Firebase:"/static/icons/firebase.svg",JWT:"/static/icons/jwt.svg"};t.default=function(){var e=Object(S.a)().platform;return Object(r.useEffect)((function(){E.a.push({event:"page_view"})}),[]),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(i.a,{children:Object(B.jsx)("title",{children:"Register | Material Kit Pro"})}),Object(B.jsxs)(c.a,{sx:{backgroundColor:"background.default",display:"flex",flexDirection:"column",minHeight:"100vh"},children:[Object(B.jsx)(j.a,{}),Object(B.jsxs)(o.a,{maxWidth:"sm",sx:{py:"80px"},children:[Object(B.jsx)(c.a,{sx:{mb:8,display:"flex",justifyContent:"center"},children:Object(B.jsx)(n.b,{to:"/",children:Object(B.jsx)(q.a,{sx:{height:40,width:40}})})}),Object(B.jsx)(s.a,{children:Object(B.jsxs)(l.a,{sx:{display:"flex",flexDirection:"column",p:4},children:[Object(B.jsxs)(c.a,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between",mb:3},children:[Object(B.jsxs)("div",{children:[Object(B.jsx)(d.a,{color:"textPrimary",gutterBottom:!0,variant:"h4",children:"Register"}),Object(B.jsx)(d.a,{color:"textSecondary",variant:"body2",children:"Register on the internal platform"})]}),Object(B.jsx)(c.a,{sx:{height:32,"& > img":{maxHeight:"100%",width:"auto"}},children:Object(B.jsx)("img",{alt:"Auth platform",src:M[e]})})]}),Object(B.jsxs)(c.a,{sx:{flexGrow:1,mt:3},children:["Amplify"===e&&Object(B.jsx)(z,{}),"Auth0"===e&&Object(B.jsx)(W,{}),"Firebase"===e&&Object(B.jsx)(I,{}),"JWT"===e&&Object(B.jsx)(T,{})]}),Object(B.jsx)(m.a,{sx:{my:3}}),Object(B.jsx)(u.a,{color:"textSecondary",component:n.b,to:"/authentication/login",variant:"body2",children:"Having an account"})]})})]})]})]})}},589:function(e,t,a){"use strict";var r=a(3),n=a(4),i=a(2),c=a(1),o=(a(10),a(475)),s=a(201),l=a(20),d=a(0),m=Object(l.a)(Object(d.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),u=Object(l.a)(Object(d.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),j=a(21),b=Object(l.a)(Object(d.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),h=a(7),p=a(13),x=a(5),O=a(432),v=a(476);function f(e){return Object(O.a)("MuiCheckbox",e)}var y=Object(v.a)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),g=Object(x.a)(s.a,{shouldForwardProp:function(e){return Object(x.b)(e)||"classes"===e}},{name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return Object(i.a)({},t.root,a.indeterminate&&t.indeterminate,"default"!==a.color&&t["color".concat(Object(h.a)(a.color))])}})((function(e){var t,a=e.theme,n=e.styleProps;return Object(i.a)({color:a.palette.text.secondary},"default"!==n.color&&(t={},Object(r.a)(t,"&.".concat(y.checked,", &.").concat(y.indeterminate),{color:a.palette[n.color].main,"&:hover":{backgroundColor:Object(j.a)(a.palette[n.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),Object(r.a)(t,"&.".concat(y.disabled),{color:a.palette.action.disabled}),t))})),w=Object(d.jsx)(u,{}),k=Object(d.jsx)(m,{}),S=Object(d.jsx)(b,{}),C=c.forwardRef((function(e,t){var a=Object(p.a)({props:e,name:"MuiCheckbox"}),r=a.checkedIcon,s=void 0===r?w:r,l=a.color,m=void 0===l?"primary":l,u=a.icon,j=void 0===u?k:u,b=a.indeterminate,x=void 0!==b&&b,O=a.indeterminateIcon,v=void 0===O?S:O,y=a.inputProps,C=a.size,B=void 0===C?"medium":C,z=Object(n.a)(a,["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),P=x?v:j,W=x?v:s,I=Object(i.a)({},a,{color:m,indeterminate:x,size:B}),T=function(e){var t=e.classes,a=e.indeterminate,r=e.color,n={root:["root",a&&"indeterminate","color".concat(Object(h.a)(r))]},c=Object(o.a)(n,f,t);return Object(i.a)({},t,c)}(I);return Object(d.jsx)(g,Object(i.a)({type:"checkbox",color:m,inputProps:Object(i.a)({"data-indeterminate":x},y),icon:c.cloneElement(P,{fontSize:void 0===P.props.fontSize&&"medium"!==B?B:P.props.fontSize}),checkedIcon:c.cloneElement(W,{fontSize:void 0===W.props.fontSize&&"medium"!==B?B:W.props.fontSize}),styleProps:I,ref:t},z,{classes:T}))}));t.a=C}}]);
//# sourceMappingURL=67.ea76872c.chunk.js.map