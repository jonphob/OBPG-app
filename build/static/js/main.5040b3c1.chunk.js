(this["webpackJsonpobpg-app"]=this["webpackJsonpobpg-app"]||[]).push([[0],{53:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(26),s=n.n(a),i=(n(53),n(19)),u=n(9),l=n(3),o=n(11),j=n(25);n(95),n(55),n(94);j.a.initializeApp({apiKey:"AIzaSyDyGjhXm_Hie8Zv5_XOA82hU7AuksN9l0c",authDomain:"obpg-app.firebaseapp.com",projectId:"obpg-app",storageBucket:"obpg-app.appspot.com",messagingSenderId:"130951808681",appId:"1:130951808681:web:2d6894969c853bbfca4bb8",measurementId:"G-YQRVNEED1N"});var d=j.a.firestore(),b=j.a.auth(),O=(j.a.storage(),j.a.firestore.Timestamp),p=n(0),h=Object(c.createContext)(),m=function(e,t){switch(t.type){case"LOGIN":return Object(o.a)(Object(o.a)({},e),{},{user:t.payload});case"LOGOUT":return Object(o.a)(Object(o.a)({},e),{},{user:null});case"AUTH_IS_READY":return{user:t.payload,authIsReady:!0};default:return e}},x=function(e){var t=e.children,n=Object(c.useReducer)(m,{user:null,authIsReady:!1}),r=Object(l.a)(n,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){var e=b.onAuthStateChanged((function(t){s({type:"AUTH_IS_READY",payload:t}),e()}))}),[]),console.log("AuthContext state:",a),Object(p.jsx)(h.Provider,{value:Object(o.a)(Object(o.a)({},a),{},{dispatch:s}),children:t})},f=function(){var e=Object(c.useContext)(h);if(!e)throw Error("useAuthContext must be used inside an AuthContextProvider");return e},v=(n(58),n(31)),g=function(e,t,n,r){var a=Object(c.useState)(null),s=Object(l.a)(a,2),i=s[0],u=s[1],j=Object(c.useState)(null),b=Object(l.a)(j,2),O=b[0],p=b[1],h=Object(c.useState)(!1),m=Object(l.a)(h,2),x=m[0],f=m[1],g=Object(c.useRef)(t).current,N=Object(c.useRef)(n).current,y=Object(c.useRef)(r).current;return Object(c.useEffect)((function(){f(!0);var t,n,c=d.collection(e);N&&(c=(t=c).where.apply(t,Object(v.a)(N)));y&&(c=(n=c).where.apply(n,Object(v.a)(y)));g&&(c=c.orderBy(g));var r=c.onSnapshot((function(e){var t=[];e.docs.forEach((function(e){t.push(Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id}))})),u(t),p(null),f(!1)}),(function(e){console.log(e),f(!1),p("could not fetch the data")}));return function(){return r()}}),[e,g,N,y]),{documents:i,error:O,isPending:x}},N=["all","mine","development","sales","marketing","design"];function y(e){var t=e.currentFilter,n=e.changeFilter;return Object(p.jsx)("div",{className:"project-filter",children:Object(p.jsxs)("nav",{children:[Object(p.jsx)("p",{children:"Filter by: "}),N.map((function(e){return Object(p.jsx)("button",{className:t===e?"active":"",onClick:function(){n(e)},children:e},e)}))]})})}n(59);function F(e){var t=e.src;return Object(p.jsx)("div",{className:"avatar",children:Object(p.jsx)("img",{src:t,alt:"user avatar"})})}n(60);function S(e){var t=e.projects;return Object(p.jsxs)("div",{className:"project-list",children:[0===t.length&&Object(p.jsx)("p",{children:"No projects to show"}),t.map((function(e){return Object(p.jsxs)(i.b,{to:"/project/".concat(e.id),children:[Object(p.jsx)("h4",{children:e.name}),Object(p.jsxs)("p",{children:["due by ",e.dueDate.toDate().toDateString()]}),Object(p.jsx)("div",{className:"assigned-to",children:Object(p.jsx)("ul",{children:e.assignedUsersList.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(F,{src:e.photoURL})},e.photoURL)}))})})]},e.id)}))]})}n(61);function P(){var e=f().user,t=Object(c.useState)("all"),n=Object(l.a)(t,2),r=n[0],a=n[1],s=g("projects"),i=s.documents,u=s.error,o=i?i.filter((function(t){switch(r){case"all":return!0;case"mine":var n=!1;return t.assignedUsersList.forEach((function(t){e.uid===t.id&&(n=!0)})),n;case"development":case"design":case"sales":case"marketing":return t.category===r;default:return!0}})):null;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{className:"title",children:"Dashboard"}),u&&Object(p.jsx)("p",{className:"error",children:u}),i&&Object(p.jsx)(y,{currentFilter:r,changeFilter:function(e){a(e)}}),o&&Object(p.jsx)(S,{projects:o})]})}var C=n(12),D=n.n(C),w=n(14),E=n(21),I={document:null,isPending:!1,error:null,success:null},A=function(e,t){switch(t.type){case"IS_PENDING":return{isPending:!0,document:null,success:!1,error:null};case"ADDED_DOCUMENT":return{isPending:!1,document:t.payload,success:!0,error:null};case"DELETED_DOCUMENT":return{isPending:!1,document:null,success:!0,error:null};case"UPDATED_DOCUMENT":return{isPending:!1,document:t.payload,success:!0,error:null};case"ERROR":return{isPending:!1,document:null,success:!1,error:t.payload};default:return e}},k=function(e){var t=Object(c.useReducer)(A,I),n=Object(l.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(!1),i=Object(l.a)(s,2),u=i[0],j=i[1],b=d.collection(e),p=function(e){u||a(e)},h=function(){var e=Object(w.a)(D.a.mark((function e(t){var n,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"IS_PENDING"}),e.prev=1,n=O.fromDate(new Date),e.next=5,b.add(Object(o.a)(Object(o.a)({},t),{},{createdAt:n}));case 5:c=e.sent,p({type:"ADDED_DOCUMENT",payload:c}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),p({type:"ERROR",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(w.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"IS_PENDING"}),e.prev=1,e.next=4,b.doc(t).delete();case 4:p({type:"DELETED_DOCUMENT"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),p({type:"ERROR",payload:"could not delete"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(w.a)(D.a.mark((function e(t,n){var c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"IS_PENDING"}),e.prev=1,e.next=4,b.doc(t).update(n);case 4:return c=e.sent,p({type:"UPDATED_DOCUMENT",payload:c}),e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),p({type:"ERROR",payload:e.t0.message}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return j(!0)}}),[]),{addDocument:h,deleteDocument:m,updateDocument:x,response:r}},R=(n(63),[{value:"development",label:"Development"},{value:"design",label:"Design"},{value:"sales",label:"Sales"},{value:"marketing",label:"Marketing"}]);function U(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(l.a)(a,2),i=s[0],j=s[1],d=Object(c.useState)(""),b=Object(l.a)(d,2),h=b[0],m=b[1],x=Object(c.useState)(""),v=Object(l.a)(x,2),N=v[0],y=v[1],F=Object(c.useState)([]),S=Object(l.a)(F,2),P=S[0],C=(S[1],Object(c.useState)(null)),I=Object(l.a)(C,2),A=I[0],U=I[1],L=k("projects"),M=L.addDocument,T=L.response,_=g("users").documents,B=Object(c.useState)([]),G=Object(l.a)(B,2),q=(G[0],G[1]),H=f().user,W=Object(u.g)();Object(c.useEffect)((function(){_&&q(_.map((function(e){return{value:Object(o.a)(Object(o.a)({},e),{},{id:e.id}),label:e.displayName}})))}),[_]);var Y=function(){var e=Object(w.a)(D.a.mark((function e(t){var c,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),U(null),N){e.next=5;break}return U("Please select a Project Category"),e.abrupt("return");case 5:if(!(P.length<1)){e.next=8;break}return U("Please assign at least one user to the project"),e.abrupt("return");case 8:return c={displayName:H.displayName,photoURL:H.photoURL,id:H.uid},r={name:n,details:i,category:N.value,dueDate:O.fromDate(new Date(h)),comments:[],createdBy:c},e.next=12,M(r);case 12:T.error||W("/");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"create-form",children:[Object(p.jsx)("h2",{className:"title",children:"Add CPD Record"}),Object(p.jsxs)("form",{onSubmit:Y,children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"CPD Learning Title:"}),Object(p.jsx)("input",{required:!0,type:"text",onChange:function(e){return r(e.target.value)},value:n})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"What did you learn and how did you learn?"}),Object(p.jsx)("textarea",{required:!0,type:"text",onChange:function(e){return j(e.target.value)},value:i})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"Date completed"}),Object(p.jsx)("input",{required:!0,type:"date",onChange:function(e){return m(e.target.value)},value:h})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"Learning Category:"}),Object(p.jsx)(E.a,{onChange:function(e){return y(e)},options:R})]}),Object(p.jsx)("button",{className:"btn",children:"Add Project"}),A&&Object(p.jsx)("p",{className:"error",children:A})]})]})}n(80);function L(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(l.a)(a,2),i=s[0],o=s[1],j=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),s=Object(l.a)(a,2),i=s[0],o=s[1],j=Object(c.useState)(!1),O=Object(l.a)(j,2),p=O[0],h=O[1],m=f().dispatch,x=Object(u.g)(),v=function(){var e=Object(w.a)(D.a.mark((function e(t,c){var r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(null),h(!0),e.prev=2,e.next=5,b.signInWithEmailAndPassword(t,c);case 5:return r=e.sent,e.next=8,d.collection("users").doc(r.user.uid).update({online:!0});case 8:m({type:"LOGIN",payload:r.user}),n||(h(!1),o(null),x("/")),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),n||(o(e.t0.message),h(!1));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return r(!0)}}),[]),{login:v,isPending:p,error:i}}(),O=j.login,h=j.isPending,m=j.error;return Object(p.jsxs)("form",{className:"login-form",onSubmit:function(e){e.preventDefault(),O(n,i)},children:[Object(p.jsx)("h2",{children:"Log in"}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"email:"}),Object(p.jsx)("input",{required:!0,type:"email",onChange:function(e){return r(e.target.value)},value:n})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"password:"}),Object(p.jsx)("input",{required:!0,type:"password",onChange:function(e){return o(e.target.value)},value:i}),Object(p.jsx)("span",{className:"forgot-pwd",children:"Forgot Password?"})]}),!h&&Object(p.jsx)("button",{className:"btn",children:"Log in"}),h&&Object(p.jsx)("button",{disabled:!0,className:"btn",children:"Loading..."}),m&&Object(p.jsx)("div",{className:"error",children:m})]})}n(81);var M={option:function(e,t){return Object(o.a)(Object(o.a)({},e),{},{color:t.isSelected?"white":"#inherit",backgroundColor:t.isSelected?"#4CAA3C":"white",":hover":{backgroundColor:"#4caa3c2b",color:"inherit"}})},valueContainer:function(e,t){return Object(o.a)(Object(o.a)({},e),{},{":focusVisible":{outline:"#4caa3c 3px solid"},padding:"0px 8px"})},control:function(e,t){return Object(o.a)(Object(o.a)({},e),{},{":hover":{borderColor:"#4CAA3C"}})}},T=[{value:"Albert Wilde",label:"Albert Wilde Pharmacy"},{value:"Bispham",label:"Bispham Pharmacy"},{value:"Burscough",label:"Burscough Pharmacy"},{value:"Cleveleys",label:"Cleveleys Pharmacy"},{value:"CleveleysHC",label:"Cleveleys HC Pharmacy"},{value:"FleetwoodHC",label:"Fleetwood HC Pharmacy"},{value:"HeadOffice",label:"Head Office"},{value:"MillLane",label:"Mill Lane Pharmacy"},{value:"Riverside",label:"Riverside Pharmacy"},{value:"Warburtons",label:"Warburtons Chemists"}];function _(){var e=f().user,t=g("roles","id").documents,n=Object(c.useState)(""),r=Object(l.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(""),u=Object(l.a)(i,2),o=u[0],j=u[1],h=Object(c.useState)(""),m=Object(l.a)(h,2),x=m[0],v=m[1],N=Object(c.useState)(""),y=Object(l.a)(N,2),F=y[0],S=y[1],P=Object(c.useState)(""),C=Object(l.a)(P,2),I=C[0],A=C[1],k=Object(c.useState)([]),R=Object(l.a)(k,2),U=R[0],L=R[1],_=Object(c.useState)(""),B=Object(l.a)(_,2),G=B[0],q=B[1],H=Object(c.useState)(null),W=Object(l.a)(H,2),Y=W[0],V=W[1],z=Object(c.useState)(!0),J=Object(l.a)(z,2),X=J[0],K=J[1],Q=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),s=Object(l.a)(a,2),i=s[0],u=s[1],o=Object(c.useState)(!1),j=Object(l.a)(o,2),O=j[0],p=j[1],h=function(){var e=Object(w.a)(D.a.mark((function e(t,c,r,a,s,i,l,o){var j;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(null),p(!0),e.prev=2,e.next=5,b.createUserWithEmailAndPassword(t,c);case 5:if(j=e.sent){e.next=8;break}throw new Error("Could not create user, please try again");case 8:return e.next=10,j.user.updateProfile({displayName:r});case 10:return e.next=12,d.collection("users").doc(j.user.uid).set({online:!1,firstName:r,lastName:a,branch:s,role:i,createdBy:l,isActive:o});case 12:n||(p(!1),u(null)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),n||(u(e.t0.message),p(!1));case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t,n,c,r,a,s,i,u){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return r(!0)}}),[]),{createUser:h,error:i,isPending:O}}(),Z=Q.createUser,$=Q.isPending,ee=Q.error;Object(c.useEffect)((function(){t&&L(t.map((function(e){return{value:e.name,label:e.name}})))}),[t]);var te=function(){var t=Object(w.a)(D.a.mark((function t(n){var c;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),V(null),G){t.next=5;break}return V("Please select a branch"),t.abrupt("return");case 5:if(I){t.next=8;break}return V("Please select a role"),t.abrupt("return");case 8:return c={name:e.displayName,id:e.uid,createdAt:O.fromDate(new Date)},t.next=11,Z(x,F,a,o,G,I,c,X);case 11:ee||(s(""),j(""),v(""),S(""),A(null),q(null),K(!1));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsxs)("form",{className:"auth-form",onSubmit:te,children:[Object(p.jsx)("h2",{children:"Create New User"}),Object(p.jsxs)("div",{className:"form-container",children:[Object(p.jsxs)("div",{className:"form-column",children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"first name:"}),Object(p.jsx)("input",{required:!0,type:"text",onChange:function(e){return s(e.target.value)},value:a})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"last name:"}),Object(p.jsx)("input",{required:!0,type:"text",onChange:function(e){return j(e.target.value)},value:o})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"email:"}),Object(p.jsx)("input",{autoComplete:"new-password",name:"email",required:!0,type:"email",onChange:function(e){return v(e.target.value)},value:x})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"temporary password:"}),Object(p.jsx)("input",{autoComplete:"new-password",name:"password",required:!0,type:"password",onChange:function(e){return S(e.target.value)},value:F})]})]}),Object(p.jsxs)("div",{className:"form-column",children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"branch:"}),Object(p.jsx)(E.a,{styles:M,options:T,onChange:function(e){return q(e.label)}})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"role:"}),Object(p.jsx)(E.a,{styles:M,options:U,onChange:function(e){return A(e.value)}})]})]})]}),!$&&Object(p.jsx)("button",{className:"btn",children:"Create User"}),$&&Object(p.jsx)("button",{disabled:!0,className:"btn",children:"Loading"}),Y&&Object(p.jsx)("p",{className:"error",children:Y}),ee&&Object(p.jsx)("div",{className:"error",children:ee})]})}n(82);function B(e){var t=e.project,n=k("projects").deleteDocument,c=f().user,r=Object(u.g)();return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"project-summary",children:[Object(p.jsx)("h2",{className:"page-title",children:t.name}),Object(p.jsxs)("p",{children:["Created by: ",t.createdBy.displayName," "]}),Object(p.jsxs)("p",{className:"due-date",children:["Project due by: ",t.dueDate.toDate().toDateString()]}),Object(p.jsx)("p",{className:"details",children:t.details}),Object(p.jsx)("h4",{children:"Project is assigned to:"}),Object(p.jsx)("div",{className:"assigned-users",children:t.assignedUsersList.map((function(e){return Object(p.jsx)("div",{children:Object(p.jsx)(F,{src:e.photoURL})},e.id)}))})]}),c.uid===t.createdBy.id&&Object(p.jsx)("button",{onClick:function(e){n(t.id),r("/")},className:"btn",children:"Mark as complete"})]})}var G=n(47);function q(e){var t=e.project,n=k("projects"),r=n.updateDocument,a=n.response,s=Object(c.useState)(""),i=Object(l.a)(s,2),u=i[0],o=i[1],j=f().user,d=function(){var e=Object(w.a)(D.a.mark((function e(n){var c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c={displayName:j.displayName,photoURL:j.photoURL,content:u,createdAt:O.fromDate(new Date),id:Math.random()},e.next=4,r(t.id,{comments:[].concat(Object(v.a)(t.comments),[c])});case 4:a.error||o("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"project-comments",children:[Object(p.jsx)("h4",{children:"Project Comments"}),Object(p.jsx)("div",{className:"comments-section",children:Object(p.jsx)("ul",{children:t.comments.length>0&&t.comments.map((function(e){return Object(p.jsxs)("li",{children:[Object(p.jsxs)("div",{className:"comment-author",children:[Object(p.jsx)(F,{src:e.photoURL}),Object(p.jsx)("p",{children:e.displayName})]}),Object(p.jsx)("div",{className:"comment-dates",children:Object(p.jsx)("p",{children:Object(G.a)(e.createdAt.toDate(),{addSuffix:!0})})}),Object(p.jsx)("div",{className:"comments-content",children:e.content})]},e.content)}))})}),Object(p.jsxs)("form",{className:"add-comments",onSubmit:d,children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"Add new comment"}),Object(p.jsx)("textarea",{required:!0,onChange:function(e){return o(e.target.value)},value:u})]}),Object(p.jsx)("button",{className:"btn",children:"Add Comment"})]})]})}function H(){var e=function(e,t){var n=Object(c.useState)(null),r=Object(l.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(null),u=Object(l.a)(i,2),j=u[0],b=u[1];return Object(c.useEffect)((function(){var n=d.collection(e).doc(t).onSnapshot((function(e){e.data()?(s(Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id})),b(null)):b("No such document exists")}),(function(e){console.log(e),b("failed to get document")}));return function(){return n()}}),[e,t]),{document:a,error:j}}("projects",Object(u.h)().id),t=e.error,n=e.document;return t?Object(p.jsx)("div",{className:"error",children:t}):n?Object(p.jsxs)("div",{className:"project-details",children:[Object(p.jsx)(B,{project:n}),Object(p.jsx)(q,{project:n})]}):Object(p.jsx)("div",{className:"loading",children:"Loading..."})}n(83);var W=n.p+"static/media/OBP.82a5e5be.svg";function Y(){var e=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),s=Object(l.a)(a,2),i=s[0],u=s[1],o=Object(c.useState)(!1),j=Object(l.a)(o,2),O=j[0],p=j[1],h=f(),m=h.dispatch,x=h.user,v=function(){var e=Object(w.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(null),p(!0),e.prev=2,t=x.uid,e.next=6,d.collection("users").doc(t).update({online:!1});case 6:return e.next=8,b.signOut();case 8:m({type:"LOGOUT"}),n||(p(!1),u(null)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),n||(u(e.t0.message),p(!1));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return r(!0)}}),[]),{logout:v,error:i,isPending:O}}(),t=e.logout,n=e.isPending,r=f().user;return Object(p.jsx)("div",{className:"navbar",children:Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{className:"logo",children:[Object(p.jsx)("img",{src:W,alt:"logo"}),Object(p.jsx)("span",{children:"O'Briens Pharmacy Group"})]}),!r&&Object(p.jsx)(p.Fragment,{}),r&&Object(p.jsxs)("li",{children:[!n&&Object(p.jsx)("button",{className:"btn",onClick:t,children:"Log Out"}),n&&Object(p.jsx)("button",{className:"btn",disabled:!0,children:"Logging Out..."})]})]})})}n(84);var V=n.p+"static/media/viewFigs.dda2c4b3.svg",z=n.p+"static/media/add_icon.376e9b6a.svg",J=n.p+"static/media/dashboard_icon.bc800f3b.svg",X=n.p+"static/media/personIcon.a296afc6.svg";function K(){var e=function(){var e=parseInt("".concat((new Date).getHours()));return e<12?"Good Morning":e<18?"Good Afternoon":"Good Evening"}(),t=f().user;return Object(p.jsx)("div",{className:"sidebar",children:Object(p.jsxs)("div",{className:"sidebar-content",children:[Object(p.jsxs)("div",{className:"user",children:[Object(p.jsx)(F,{src:X}),Object(p.jsxs)("p",{children:[e,", ",t.displayName]})]}),Object(p.jsx)("nav",{className:"links",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsxs)(i.c,{to:"/",children:[Object(p.jsx)("img",{src:J,alt:"dashboard icon"}),Object(p.jsx)("span",{children:"Dashboard"})]})}),Object(p.jsx)("li",{children:Object(p.jsxs)(i.c,{to:"/create",children:[Object(p.jsx)("img",{src:z,alt:"add project icon"}),Object(p.jsx)("span",{children:"Add New Learning"})]})}),Object(p.jsx)("li",{children:Object(p.jsxs)(i.c,{to:"/addRxFigures",children:[Object(p.jsx)("img",{src:z,alt:"add project icon"}),Object(p.jsx)("span",{children:"Add Rx Figures"})]})}),Object(p.jsx)("li",{children:Object(p.jsxs)(i.c,{to:"/viewRxFigures",children:[Object(p.jsx)("img",{src:V,alt:"view figures icon"}),Object(p.jsx)("span",{children:"View Rx Figures"})]})}),Object(p.jsx)("li",{children:Object(p.jsxs)(i.c,{to:"/addServiceFigures",children:[Object(p.jsx)("img",{src:z,alt:"add project icon"}),Object(p.jsx)("span",{children:"Add Service Figures"})]})})]})})]})})}n(85);function Q(){var e=g("users"),t=e.documents,n=e.error;return Object(p.jsxs)("div",{className:"user-list",children:[Object(p.jsx)("h2",{children:"All Users"}),n&&Object(p.jsx)("div",{className:"error",children:n}),t&&t.map((function(e){return Object(p.jsxs)("div",{className:"user-list-item",children:[Object(p.jsx)("span",{className:e.online?"online-user":"offline-user"}),Object(p.jsx)("span",{children:e.firstName}),Object(p.jsx)(F,{src:X})]},e.id)}))]})}var Z=n(32);var $=function(){return Object(p.jsx)(Z.a,{position:"bottom-center",reverseOrder:!1,gutter:8,containerClassName:"",containerStyle:{position:"absolute",bottom:"100px"},toastOptions:{className:"",duration:5e3,style:{background:"#fff",color:"black",height:"50px",borderRadius:"10px"},success:{iconTheme:{primary:"white",secondary:"#4CAA3C"},duration:5e3,style:{background:"#4CAA3C",color:"#fff"},theme:{primary:"",secondary:"white"}},error:{iconTheme:{primary:"white",secondary:"#FF6B47"},duration:5e3,style:{background:"#FF6B47",color:"#fff"}}}})};function ee(e){var t=e.inputName,n=e.onChangeFn,c=e.value;return Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:t}),Object(p.jsx)("input",{required:!0,min:"0",type:"number",onChange:n,value:c})]})}n(86);var te={option:function(e,t){return Object(o.a)(Object(o.a)({},e),{},{color:t.isSelected?"white":"#inherit",backgroundColor:t.isSelected?"#4CAA3C":"white",":hover":{backgroundColor:"#4caa3c2b",color:"inherit"}})},valueContainer:function(e,t){return Object(o.a)(Object(o.a)({},e),{},{":focusVisible":{outline:"#4caa3c 3px solid"},padding:"0px 8px"})},control:function(e,t){return Object(o.a)(Object(o.a)({},e),{},{width:"300px",":hover":{borderColor:"#4CAA3C"}})}};function ne(){var e=k("rxFigures"),t=e.addDocument,n=e.response,r=g("branches","name").documents,a=Object(c.useState)(""),s=Object(l.a)(a,2),i=s[0],o=s[1],j=f().user,d=Object(u.g)(),b=Object(c.useState)(""),h=Object(l.a)(b,2),m=h[0],x=h[1],v=Object(c.useState)([]),N=Object(l.a)(v,2),y=N[0],F=N[1],S=Object(c.useState)(""),P=Object(l.a)(S,2),C=P[0],I=P[1],A=Object(c.useState)(""),R=Object(l.a)(A,2),U=R[0],L=R[1],M=Object(c.useState)(""),T=Object(l.a)(M,2),_=T[0],B=T[1],G=Object(c.useState)(""),q=Object(l.a)(G,2),H=q[0],W=q[1],Y=Object(c.useState)(""),V=Object(l.a)(Y,2),z=V[0],J=V[1],X=Object(c.useState)(""),K=Object(l.a)(X,2),Q=K[0],ne=K[1],ce=Object(c.useState)(""),re=Object(l.a)(ce,2),ae=re[0],se=re[1],ie=Object(c.useState)(""),ue=Object(l.a)(ie,2),le=ue[0],oe=ue[1],je=Object(c.useState)(""),de=Object(l.a)(je,2),be=de[0],Oe=de[1],pe=Object(c.useState)(""),he=Object(l.a)(pe,2),me=he[0],xe=he[1],fe=Object(c.useState)(""),ve=Object(l.a)(fe,2),ge=ve[0],Ne=ve[1],ye=Object(c.useState)(""),Fe=Object(l.a)(ye,2),Se=Fe[0],Pe=Fe[1],Ce=function(){var e=Object(w.a)(D.a.mark((function e(c){var r,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(c),r={displayName:j.displayName,id:j.uid},a={addedBy:r,branch:m,dateForFigures:O.fromDate(new Date(i)),figures:{paidForms:{paperPdForms:_,epsPdForms:ae,mdaPdForms:ge},paidItems:{paperPdItems:H,epsPdItems:le,mdaPdItems:Se},exemptForms:{paperExForms:C,epsExForms:z,mdaExForms:be},exemptItems:{paperExItems:U,epsExItems:Q,mdaExItems:me}}},e.next=5,t(a);case 5:n.error?Z.b.error("There was an error, please try again"):(Z.b.success("Rx Figures Added"),x(""),o(""),I(""),L(""),B(""),W(""),J(""),ne(""),se(""),oe(""),Oe(""),xe(""),Ne(""),Pe(""));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){r&&F(r.map((function(e){return{value:e.name,label:e.name}})))}),[r]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)($,{}),Object(p.jsx)("h2",{children:"Add Prescription Figures"}),Object(p.jsx)("div",{className:"add-figures-form",children:Object(p.jsxs)("form",{onSubmit:Ce,children:[Object(p.jsxs)("div",{className:"branch-div",children:[Object(p.jsx)("label",{className:"date-label",children:Object(p.jsx)("span",{children:"Please select a branch for the figures you are entering:"})}),Object(p.jsx)(E.a,{required:!0,styles:te,options:y,onChange:function(e){return x(e.value)}})]}),Object(p.jsxs)("div",{className:"date-div",children:[Object(p.jsx)("label",{htmlFor:"dateInput",className:"date-label",children:Object(p.jsx)("span",{children:"Please select a date for the figures you are entering:"})}),Object(p.jsx)("input",{id:"dateInput",required:!0,type:"date",onChange:function(e){return o(e.target.value)},value:i})]}),Object(p.jsxs)("div",{className:"rx-container",children:[Object(p.jsxs)("fieldset",{children:[Object(p.jsx)("legend",{className:"fp10paper",children:"FP10 Paper"}),Object(p.jsxs)("div",{className:"input-container",children:[Object(p.jsx)(ee,{inputName:"Exempt Forms",value:C,onChangeFn:function(e){return I(parseInt(e.target.value))}}),Object(p.jsx)(ee,{inputName:"Exempt Items",value:U,onChangeFn:function(e){return L(parseInt(e.target.value))}})]}),Object(p.jsxs)("div",{className:"input-container",children:[Object(p.jsx)(ee,{inputName:"Paid Forms",value:_,onChangeFn:function(e){return B(parseInt(e.target.value))}}),Object(p.jsx)(ee,{inputName:"Paid Items",value:H,onChangeFn:function(e){return W(parseInt(e.target.value))}})]})]}),Object(p.jsxs)("fieldset",{children:[Object(p.jsx)("legend",{className:"token",children:"EPS"}),Object(p.jsxs)("div",{className:"input-container",children:[Object(p.jsx)(ee,{inputName:"Exempt Tokens",value:z,onChangeFn:function(e){return J(parseInt(e.target.value))}}),Object(p.jsx)(ee,{inputName:"Exempt Items",value:Q,onChangeFn:function(e){return ne(parseInt(e.target.value))}})]}),Object(p.jsxs)("div",{className:"input-container",children:[Object(p.jsx)(ee,{inputName:"Paid Tokens",value:ae,onChangeFn:function(e){return se(parseInt(e.target.value))}}),Object(p.jsx)(ee,{inputName:"Paid Items",value:le,onChangeFn:function(e){return oe(parseInt(e.target.value))}})]})]}),Object(p.jsxs)("fieldset",{children:[Object(p.jsx)("legend",{className:"fp10mda",children:"FP10MDA"}),Object(p.jsxs)("div",{className:"input-container",children:[Object(p.jsx)(ee,{inputName:"Exempt Forms",value:be,onChangeFn:function(e){return Oe(parseInt(e.target.value))}}),Object(p.jsx)(ee,{inputName:"Exempt Items",value:me,onChangeFn:function(e){return xe(parseInt(e.target.value))}})]}),Object(p.jsxs)("div",{className:"input-container",children:[Object(p.jsx)(ee,{inputName:"Paid Forms",value:ge,onChangeFn:function(e){return Ne(parseInt(e.target.value))}}),Object(p.jsx)(ee,{inputName:"Paid Items",value:Se,onChangeFn:function(e){return Pe(parseInt(e.target.value))}})]})]})]}),Object(p.jsxs)("div",{className:"btn-container",children:[Object(p.jsx)("button",{className:"btn submit-figures-btn",children:"Submit Figures"}),Object(p.jsx)("button",{className:"btn submit-figures-btn",onClick:function(e){e.preventDefault(),d("/viewrxfigures")},children:"View figures"})]})]})})]})}n(87);function ce(){return Object(p.jsx)("div",{children:Object(p.jsx)("h2",{children:"Add Service Figures"})})}var re=n(45),ae=n(46),se=n.n(ae),ie=n(96);n(88);function ue(e){var t=e.documents,n=e.results,r=Object(c.useState)(),a=Object(l.a)(r,2),s=a[0],i=a[1];return Object(c.useEffect)((function(){t&&i(t.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(ie.a)(e.dateForFigures.toDate(),"E do MMM")}),Object(p.jsx)("td",{children:e.figures.exemptForms.epsExForms}),Object(p.jsx)("td",{children:e.figures.exemptItems.epsExItems}),Object(p.jsx)("td",{children:e.figures.exemptForms.paperExForms}),Object(p.jsx)("td",{children:e.figures.exemptItems.paperExItems}),Object(p.jsx)("td",{children:e.figures.exemptForms.mdaExForms}),Object(p.jsx)("td",{children:e.figures.exemptItems.mdaExItems}),Object(p.jsx)("td",{children:e.figures.paidForms.epsPdForms}),Object(p.jsx)("td",{children:e.figures.paidItems.epsPdItems}),Object(p.jsx)("td",{children:e.figures.paidForms.paperPdForms}),Object(p.jsx)("td",{children:e.figures.paidItems.paperPdItems}),Object(p.jsx)("td",{children:e.figures.paidForms.mdaPdForms}),Object(p.jsx)("td",{children:e.figures.paidItems.mdaPdItems})]},e.id)}))),n||(i(null),i(Object(p.jsx)("tr",{children:Object(p.jsx)("td",{colSpan:"13",className:"td-noData",children:"No Data Available"})})))}),[t,n]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{className:"rxFigures-th",children:[Object(p.jsx)("th",{className:"th-date",children:"Date"}),Object(p.jsx)("th",{children:"Ex EPS Forms"}),Object(p.jsx)("th",{children:"Ex EPS Items"}),Object(p.jsx)("th",{children:"Ex FP10 Forms"}),Object(p.jsx)("th",{children:"Ex FP10 Items"}),Object(p.jsx)("th",{children:"Ex FP10MDA Forms"}),Object(p.jsx)("th",{children:"Ex FP10MDA Items"}),Object(p.jsx)("th",{children:"Pd EPS Forms"}),Object(p.jsx)("th",{children:"Pd EPS Items"}),Object(p.jsx)("th",{children:"Pd FP10 Forms"}),Object(p.jsx)("th",{children:"Pd FP10 Items"}),Object(p.jsx)("th",{children:"Pd FP10MDA Forms"}),Object(p.jsx)("th",{children:"Pd FP10MDA Items"})]})}),Object(p.jsx)("tbody",{children:s})]})})}n(89);var le,oe=n(4),je=Object(oe.css)(le||(le=Object(re.a)(["\n  position: absolute;\n  color: #4caa3c;\n  top: 45%;\n  left: 50%;\n  display: block;\n  margin: 0 auto;\n"])));function de(){var e=new Date,t=((new Date).getFullYear(),new Date(e.getFullYear(),e.getMonth(),1)),n=new Date(e.getFullYear(),e.getMonth()+1,0),r=Object(c.useState)(null),a=Object(l.a)(r,2),s=a[0],i=a[1],u=Object(c.useState)(null),j=Object(l.a)(u,2),b=j[0],O=j[1],h=Object(c.useState)(!1),m=Object(l.a)(h,2),x=m[0],f=m[1],v=Object(c.useState)(t),g=Object(l.a)(v,2),N=g[0],y=g[1],F=Object(c.useState)(n),S=Object(l.a)(F,2),P=S[0],C=S[1],D=Object(c.useState)(),w=Object(l.a)(D,2),E=w[0],I=w[1];Object(c.useEffect)((function(){f(!0);var e=d.collection("rxFigures").where("dateForFigures",">=",N).where("dateForFigures","<=",P).where("branch","==","Albert Wilde").orderBy("dateForFigures").onSnapshot((function(e){var t=[];e.docs.forEach((function(e){t.push(Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id}))})),t.length>0?I(!0):I(!1),i(t),O(null),f(!1)}),(function(e){console.log(e),f(!1),O("could not fetch the data")}));return function(){return e()}}),[N,P]);return Object(p.jsxs)("div",{className:"rx-figures-table",children:[Object(p.jsx)("h2",{children:"Rx Figures "}),Object(p.jsx)("div",{className:"nav-div",children:Object(p.jsx)("input",{type:"month",min:"2018-01",max:"2021-12",value:Object(ie.a)(N,"yyyy-MM"),onChange:function(e){return function(e){var t=new Date(e),n=t.getFullYear(),c=t.getMonth(),r=new Date(n,c,1),a=new Date(n,c+1,0);y(r),C(a)}(e.target.value)}})}),Object(p.jsx)(se.a,{color:"#4caa3c",loading:x,css:je,size:10,speedMultiplier:.7,margin:7}),s&&Object(p.jsx)(ue,{documents:s,results:E}),b&&Object(p.jsx)("div",{className:"error",children:b})]})}var be=function(){var e=f(),t=e.user,n=e.authIsReady;return Object(p.jsx)("div",{className:"App",children:n&&Object(p.jsxs)(i.a,{children:[t&&Object(p.jsx)(K,{}),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(Y,{}),Object(p.jsxs)(u.d,{children:[Object(p.jsx)(u.b,{path:"/",element:t&&Object(p.jsx)(P,{})||!t&&Object(p.jsx)(u.a,{to:"/login"})}),Object(p.jsx)(u.b,{path:"/create",element:t&&Object(p.jsx)(U,{})||!t&&Object(p.jsx)(u.a,{to:"/login"})}),Object(p.jsx)(u.b,{path:"/login",element:!t&&Object(p.jsx)(L,{})||t&&Object(p.jsx)(u.a,{to:"/"})}),Object(p.jsx)(u.b,{path:"/createuser",element:t&&Object(p.jsx)(_,{})||!t&&Object(p.jsx)(u.a,{to:"/"})}),Object(p.jsx)(u.b,{path:"/project/:id",element:t&&Object(p.jsx)(H,{})||!t&&Object(p.jsx)(u.a,{to:"/login"})}),Object(p.jsx)(u.b,{path:"/addRxFigures",element:t&&Object(p.jsx)(ne,{})||!t&&Object(p.jsx)(u.a,{to:"/login"})}),Object(p.jsx)(u.b,{path:"/addServiceFigures",element:t&&Object(p.jsx)(ce,{})||!t&&Object(p.jsx)(u.a,{to:"/login"})}),Object(p.jsx)(u.b,{path:"/viewrxfigures",element:t&&Object(p.jsx)(de,{})||!t&&Object(p.jsx)(u.a,{to:"/login"})})]})]}),t&&Object(p.jsx)(Q,{})]})})};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(x,{children:Object(p.jsx)(be,{})})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.5040b3c1.chunk.js.map