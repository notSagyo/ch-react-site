var je=Object.defineProperty,He=Object.defineProperties;var Ke=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var _e=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var ge=(t,s,n)=>s in t?je(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,v=(t,s)=>{for(var n in s||(s={}))_e.call(s,n)&&ge(t,n,s[n]);if(V)for(var n of V(s))fe.call(s,n)&&ge(t,n,s[n]);return t},w=(t,s)=>He(t,Ke(s));var S=(t,s)=>{var n={};for(var o in t)_e.call(t,o)&&s.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&V)for(var o of V(t))s.indexOf(o)<0&&fe.call(t,o)&&(n[o]=t[o]);return n};import{i as Qe,P as Ye,G as Ve,g as ke,S as Xe,s as Ze,a as Je,b as et,c as tt,r as u,j as e,Z as nt,d as P,t as st,Y as he,e as pe,f as Ce,h as rt,v as Ne,D as $e,w as Q,k as re,u as Se,l as at,m as z,T as ot,n as L,o as it,p as ct,q as i,x,y as lt,C as ae,A as Ie,z as y,B as U,E as $,F as ue,H as me,L as Le,I as D,J as j,N as X,U as dt,R as ze,K as ht,M as pt,O as ut,Q as mt,V as ye,W as gt,X as _t,_ as B,$ as ft,a0 as ee,a1 as De,a2 as yt,a3 as oe,a4 as vt,a5 as ve,a6 as xt,a7 as bt,a8 as xe,a9 as J,aa as wt,ab as kt,ac as Ct,ad as Nt,ae as $t,af as St,ag as It,ah as We,ai as M,aj as Lt,ak as zt,al as Dt,am as Wt}from"./vendor.244119d9.js";const Tt=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}};Tt();const W="ch-react-site",ie="chat",Te=`${W}/${ie}`,Ae=`${W}/pricing`,At=`${W}/cart`,K=(t,s)=>`/${Ae}/${t}/details/${s}`,Ee=200,Et=t=>{if(t=t.trim(),t.length<1||t.length>Ee)throw Error("Message must be between 1 and 200 characters.");return t},ce={createdAt:Date.now(),updatedAt:Date.now(),email:"",id:"-1",photoURL:"",name:"Guest",occupation:"Frontend Deloper: JS / React",bannerURL:"https://picsum.photos/600/300"},Pt={createdAt:Date.now(),updatedAt:Date.now(),description:"",label:"none",messages:[],type:"user",membersIds:[],id:"0"},Rt={apiKey:"AIzaSyAXZbpwGIYAyEuU0maP2pBI4nh7QrtXmO0",authDomain:"portfolio-85693.firebaseapp.com",projectId:"portfolio-85693",storageBucket:"portfolio-85693.appspot.com",messagingSenderId:"20009869405",appId:"1:20009869405:web:929394e2e932096dd02db4"},Mt=Qe(Rt),I=Ye(Mt),Bt=new Ve,le=ke();Xe(I).catch(t=>{(t.code=="failed-precondition"||t.code=="unimplemented")&&console.error(t)});const Ft=async()=>{let t;return await Ze(le,tt),await Je(le,Bt).then(s=>(t=s.user,t)).catch(s=>{console.error(s)}),t},Ut=async()=>{await et(le)},Pe=u.exports.createContext({}),H=()=>u.exports.useContext(Pe);function Ot(n){var o=n,{children:t}=o,s=S(o,["children"]);const[r,a]=u.exports.useState(ce),[p,l]=u.exports.useState(),d=async()=>{let g;return p?console.warn("(Firebase): User already signed in"):g=await Ft(),g},c=async()=>{p?await Ut():console.warn("(Firebase): User is not signed in")},_=async g=>{let h=await nt(P(I,"users",g)).catch(()=>console.warn(`(Firestore): user '${g}' not found in cache`));return h||(h=await st(P(I,"users",g))),h==null?void 0:h.data()},f=async g=>(await he(P(I,"users",g.id))).exists()?(console.warn(`(Firestore): user ${g.id} already exists`),!1):(await pe(P(I,"users",g.id),g),g),k=async(g,h=!1)=>(Ce(P(I,"users",g.id),v({},g)).catch(m=>{m.code==="not-found"&&h&&(console.warn(`(Firestore): user ${g.id} not found, creating...`),f(g))}),ce);return u.exports.useEffect(()=>{const g=ke().onAuthStateChanged(h=>{if(h){const m=v(v(v(w(v({},r),{id:h.uid}),h.displayName&&{name:h.displayName}),h.email&&{email:h.email}),h.photoURL&&{photoURL:h.photoURL});k(m,!0),l(h),a(m)}});return()=>g()},[]),e(Pe.Provider,w(v({},s),{value:{activeUser:r,setActiveUser:a,authUser:p,setAuthUser:l,getUser:_,createUser:f,updateUser:k,signIn:d,signOut:c},children:t}))}const Re=u.exports.createContext({}),Y=()=>u.exports.useContext(Re);function Gt(n){var o=n,{children:t}=o,s=S(o,["children"]);const[r,a]=u.exports.useState(Pt),{activeUser:p}=H(),l=async h=>{const m=await he(P(I,"channels",h));if(!m.exists()){console.warn(`(Firestore): channel ${h} not found`);return}return m.data()},d=async h=>{var A;const m=Ne(Q(I,"channels"),$e("membersIds","==",h.sort())),b=await re(m),N=(A=b==null?void 0:b.docs[0])==null?void 0:A.data();return N||console.warn(`(Firestore): channel with members ${h} not found`),N},c=async(h=r.id)=>{if(h===r.id)return r.membersIds;const m=await l(h);return m==null?void 0:m.membersIds},_=async(h=r.id)=>{if(h===r.id)return r.messages;const m=await l(h);return m==null?void 0:m.messages},f=async h=>{const m=await d(h.membersIds);if(m)return console.warn("(Firestore): channel with same members already exists"),m;h.membersIds=h.membersIds.sort();const b=await Se(Q(I,"channels"),h);return h.id=b.id,await pe(P(I,"channels",h.id),h),h},k=async(h,m)=>{const b=await l(h);return b&&a(b),b},g=async h=>{const m=Et(h),b={id:at(),authorName:p.name,authorId:p.id,channelId:r.id,content:m,createdAt:Date.now(),updatedAt:Date.now()},N=await l(r.id);if(N)N.messages.push(b),Ce(P(I,"channels",N.id),{messages:N.messages});else{console.warn(`(Firestore): channel ${r.id} not found, creating...`);const A=await f(w(v({},r),{messages:[b]}));A&&a(A)}return b};return u.exports.useEffect(()=>{const h=rt(P(I,"channels",r.id),m=>m.exists()&&a(m.data()));return()=>{h()}},[r.id]),e(Re.Provider,w(v({},s),{value:{activeChannel:r,setActiveChannel:a,getChannel:l,getChannelByMembers:d,getMembersIds:c,getMessages:_,createDM:f,changeChannel:k,pushMessage:g},children:t}))}const qt=z(()=>({textInput:{fontWeight:500},inputInner:{maxHeight:"100%","&:focus, &:focus-within":{borderColor:"transparent !important"}},placeholderIcon:{fontWeight:100},form:{width:"100%",height:"fit-content"}}));function jt(t){const s=u.exports.useRef(null),[n,o]=u.exports.useState(null),{pushMessage:r}=Y(),{classes:a,cx:p}=qt();async function l(d){o(null),!(!(d.key==="Enter"&&!d.shiftKey)||!s.current)&&(d.preventDefault(),r(s.current.value).catch(c=>o(`*${c.message}`)),s.current.value="")}return e("form",{action:void 0,className:a.form,children:e(ot,{icon:e(L.Message,{className:a.placeholderIcon}),className:p(t.className,a.textInput),classNames:{input:a.inputInner},placeholder:"Write a message...",maxLength:Ee,onKeyDown:l,autoComplete:"off",error:n,ref:s,maxRows:10,minRows:1,autosize:!0,"aria-label":"Message bar"})})}const Ht=z(t=>({card:{backgroundColor:t.colorScheme==="dark"?t.colors.dark[7]:t.white,width:250},avatar:{border:`2px solid ${t.colorScheme==="dark"?t.colors.dark[7]:t.white}`}}));function Me(p){var l=p,{stats:t,parent:s,user:n,inline:o,clickTrigger:r}=l,a=S(l,["stats","parent","user","inline","clickTrigger"]);const[d,c]=u.exports.useState(!1),_=it(),{createDM:f}=Y(),{activeUser:k}=H();ct("wheel",()=>c(!1));const{classes:g,theme:h,cx:m}=Ht();function b(C){r!=="both"&&r!=="right"||(C.preventDefault(),C.stopPropagation(),c(!0))}function N(C){r!=="both"&&r!=="left"||(C.preventDefault(),C.stopPropagation(),c(!0))}async function A(C){if(C.preventDefault(),C.stopPropagation(),c(!1),!n)return;const qe=await f({type:"user",membersIds:[n.id,k.id],createdAt:Date.now(),updatedAt:Date.now(),id:"",label:"",description:"",messages:[]});_(`../${Te}/${qe.id}`)}const ne=t&&t.map(C=>i("div",{children:[e(x,{align:"center",size:"lg",weight:500,children:C.value}),e(x,{align:"center",size:"sm",color:"dimmed",children:C.label})]},C.label));return e(lt,w(v({styles:{inner:{padding:0},body:{border:"none"},root:{display:o?"":"block"}},position:"right",placement:"start",trapFocus:!1},a),{opened:d,onClose:()=>c(!1),target:e("div",{onContextMenu:b,onClick:N,children:s}),children:i(ae,{withBorder:!0,p:"xl",radius:"md",className:m(g.card,a.className),children:[e(ae.Section,{sx:{backgroundImage:`url(${n==null?void 0:n.bannerURL})`,height:140}}),e(Ie,{src:n==null?void 0:n.photoURL,size:80,radius:80,mx:"auto",mt:-30,className:g.avatar}),i(x,{align:"center",size:"lg",weight:500,mt:"sm",children:[" ",n==null?void 0:n.name," "]}),i(x,{align:"center",size:"sm",color:"dimmed",children:[" ",n==null?void 0:n.occupation]}),i(y,{mt:"md",position:"center",spacing:30,children:[" ",ne," "]}),e(U,{fullWidth:!0,radius:"md",mt:"xl",size:"md",color:h.colorScheme==="dark"?void 0:"dark",onClick:A,children:"Send message"})]})}))}const Kt=z(t=>({messageWrapper:{},timestamp:{color:t.colors.dark[3]},author:{color:"inherit",fontWeight:500},content:{whiteSpace:"pre-line"}}));function Qt(n){var o=n,{message:t}=o,s=S(o,["message"]);const[r,a]=u.exports.useState(),{getUser:p}=H(),{classes:l,cx:d}=Kt(),c=new Date(t.createdAt).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return u.exports.useEffect(()=>{p(t.authorId).then(_=>a(_))},[]),e("li",w(v({},s),{className:d(l.messageWrapper,s.className),children:i(x,{children:[i("span",{className:l.timestamp,children:[" [",c,"] "]}),e(Me,{clickTrigger:"both",inline:!0,user:r,parent:i($,{className:l.author,children:[t.authorName||"Guest",":"]})}),i("span",{className:l.content,children:[" ",s.children]})]})}))}const Yt=z(t=>({viewport:{color:t.colors.dark[0],["& > *"]:{height:"100%",paddingBottom:5}},messages:{display:"flex",flexDirection:"column",justifyContent:"flex-end",height:"100%"}}));function Vt(n){var o=n,{children:t}=o,s=S(o,["children"]);const[r,a]=u.exports.useState([]),p=u.exports.useRef(null),{activeChannel:l}=Y(),{classes:d}=Yt();return u.exports.useEffect(()=>{a(l.messages.map((c,_)=>e(Qt,{message:c,children:c.content},_)))},[l.messages]),u.exports.useEffect(()=>{var c;(c=p==null?void 0:p.current)==null||c.scrollTo({top:p.current.scrollHeight,behavior:"smooth"})},[r]),i(ue,w(v({},s),{viewportRef:p,classNames:{viewport:d.viewport},children:[t,e("ol",{className:d.messages,children:r.length>0?r:e("li",{children:"This is where I would put my messages... if I had any!!"})})]}))}const Xt=z(t=>{const s=t.spacing.md;return{channel:{flexDirection:"column",padding:s,height:"100%"},messagesWindow:{width:"100%",height:0,flexGrow:1,paddingRight:s},scrollRoot:{marginRight:-s}}});function Zt(t){const{changeChannel:s}=Y(),[n,o]=u.exports.useState(!1),{classes:r,cx:a}=Xt(),{id:p}=me();return u.exports.useEffect(()=>{p?(o(!0),s(p).catch(l=>console.error(l)).finally(()=>o(!1))):o(!1)},[p]),i(y,w(v({},t),{className:a(r.channel,t.className),children:[e(Vt,{className:r.messagesWindow,classNames:{root:r.scrollRoot},children:e(Le,{visible:n,radius:"sm"})}),e(jt,{})]}))}async function Jt(){return fetch("https://api.jsonbin.io/b/6244cf1ad96a510f028d0a38/5").then(s=>s.json()).then(s=>(s.USERS.forEach(n=>{Object.assign(n,{icon:L.User})}),s.TEAMS.forEach(n=>{Object.assign(n,{icon:L.Users})}),s))}const en=z((t,s,n)=>{const o=t.colorScheme==="dark",r=n("icon"),a=o?t.colors.dark[6]:t.colors.gray[0],p=o?t.fn.rgba(t.colors.dark[3],.25):t.colors[t.primaryColor][0],l=t.colors.brand[o?6:7];return{link:w(v({},t.fn.focusStyles()),{display:"flex",alignItems:"center",textDecoration:"none",fontSize:t.fontSizes.sm,color:o?t.colors.dark[1]:t.colors.gray[7],padding:`${t.spacing.xs}px ${t.spacing.sm}px`,margin:"4px 0",borderRadius:t.radius.sm,fontWeight:500,lineHeight:1.5,"&:hover":{backgroundColor:a,color:o?t.white:t.black,[`& .${r}`]:{color:o?t.white:t.black}}}),linkIcon:{ref:r,color:o?t.colors.dark[2]:t.colors.gray[6],marginRight:t.spacing.sm},linkActive:{backgroundColor:p,"&, &:hover":{color:o?t.white:t.colors.brand[7],[`& .${r}`]:{color:l}}},textWrapper:{whiteSpace:"nowrap",width:0,flexGrow:1,overflow:"hidden",textOverflow:"ellipsis"}}});function tn(l){var d=l,{linkId:t,children:s,activeLink:n,label:o,link:r="",icon:a}=d,p=S(d,["linkId","children","activeLink","label","link","icon"]);const{classes:c,cx:_}=en();return i(D,w(v({},p),{className:_(c.link,p.className,{[c.linkActive]:t===n}),to:r,children:[a&&e(a,{className:c.linkIcon}),e("div",{className:c.textWrapper,children:e("span",{children:s||o})})]}))}function nn(n){var o=n,{membersIds:t}=o,s=S(o,["membersIds"]);const{activeChannel:r}=Y(),{activeUser:a,getUser:p}=H(),l=`../${Te}/`;let d;if(r.type==="user"){const c=t.find(_=>_!==a.id)||a.id;c&&p(c).then(_=>d=_)}return e(j,{children:e(Me,{parent:e(tn,w(v({},s),{activeLink:r.id,link:l})),user:d||ce})})}let O,de,se;const sn=z(t=>{const s=t.colorScheme==="dark";return se=`1px solid ${s?t.colors.dark[4]:t.colors.gray[2]}`,O=t.spacing.md,de=-O*.85,{navbar:{backgroundColor:s?t.colors.dark[6]:t.white,padding:O,height:"100%",width:256},header:{paddingBottom:O,borderBottom:se,marginBottom:O},title:{textTransform:"uppercase",letterSpacing:-.25},footer:{paddingTop:O,marginTop:O,borderTop:se},scrollArea:{marginRight:de},scrollbar:{["&:hover"]:{backgroundColor:"transparent"}}}}),rn=z((t,s,n)=>({sidenav:{backgroundColor:t.colorScheme==="dark"?t.colors.dark[7]:t.colors.gray[0]},links:{marginRight:-de},controls:{ref:n("controls"),width:"100%"},controlsActive:{backgroundColor:t.fn.rgba(t.colors.brand[7],.9),color:t.black},controlsLabel:{padding:8,fontWeight:600}}));function an(a){var p=a,{footer:t,header:s,subheader:n,children:o}=p,r=S(p,["footer","header","subheader","children"]);const{classes:l,cx:d}=sn();return i(X,w(v({},r),{className:d(l.navbar,r.className),children:[i(X.Section,{children:[s&&i(y,{className:l.header,position:"apart",children:[" ",s," "]}),n]}),e(X.Section,{classNames:{scrollbar:l.scrollbar},className:l.scrollArea,component:ue,scrollbarSize:5,grow:!0,children:o}),t&&i(X.Section,{className:l.footer,children:[" ",t," "]})]}))}const on=z(t=>{const s=t.colorScheme==="dark";return{user:{display:"block",width:"100%",padding:t.spacing.md,color:s?t.colors.dark[0]:t.black,borderRadius:t.radius.sm,"&:hover":{backgroundColor:s?t.colors.dark[6]:t.colors.gray[0],color:s?t.white:t.black}}}});function cn(a){var p=a,{image:t,name:s,email:n,icon:o}=p,r=S(p,["image","name","email","icon"]);const{signIn:l,signOut:d,authUser:c}=H(),{classes:_}=on(),f=()=>{c?(d(),window.location.reload()):l()};return e(dt,w(v({className:_.user},r),{onClick:f,children:i(y,{style:{flexWrap:"nowrap"},children:[e(Ie,{src:c==null?void 0:c.photoURL,radius:"xl"}),i("div",{style:{flex:1},children:[e(x,{size:"sm",weight:500,className:"clampLine",children:(c==null?void 0:c.displayName)||"Log in"}),e(x,{color:"dimmed",size:"xs",className:"clampLine",children:(c==null?void 0:c.email)||"Guest"})]}),o||e(L.ChevronRight,{size:14})]})}))}function ln(t){const[s,n]=u.exports.useState({}),[o,r]=u.exports.useState([e(ze.Fragment,{},"")]),[a,p]=u.exports.useState([]),[l,d]=u.exports.useState(""),{classes:c,cx:_}=rn();return u.exports.useEffect(()=>{Jt().then(f=>n(f))},[]),u.exports.useEffect(()=>{const f=Object.keys(s);f.length<1||(p(f.map(k=>({label:k,value:k}))),d(f[0]))},[s]),u.exports.useEffect(()=>{l&&r(s[l].map((f,k)=>u.exports.createElement(nn,w(v({},f),{key:k,linkId:f.id,icon:f.icon,membersIds:[]}))))},[l]),e(an,w(v({},t),{className:_(c.sidenav,t.className),header:i(y,{children:[e(L.Messages,{}),"Inbox"]}),footer:e(cn,{}),subheader:a.length>1&&e(ht,{className:c.controls,classNames:{label:c.controlsLabel,active:c.controlsActive},transitionTimingFunction:"ease",onChange:d,value:l,data:a,fullWidth:!0}),children:i("div",{className:c.links,children:[" ",o," "]})}))}const dn=z(t=>{const s=t.colorScheme==="dark";return{header:{},root:{position:"relative",display:"flex",flexDirection:"column",height:"100vh",backgroundColor:s?t.colors.dark[6]:t.colors.gray[5]},body:{height:0,flexGrow:1},main:{padding:0},channel:{height:"100%",flexDirection:"column",alignContent:"start",justifyContent:"start"}}});function be(){const{classes:t}=dn(),s=e(pt,{className:t.header,height:32});return e(Gt,{children:e(ut,{navbar:e(ln,{}),header:s,classNames:{root:t.root,body:t.body,main:t.main},children:e(Zt,{})})})}function hn(n){var o=n,{textColor:t}=o,s=S(o,["textColor"]);const[r]=u.exports.useState(3),[a,p]=u.exports.useState(!0),l=r<1?"none":"";u.exports.useEffect(()=>{setTimeout(()=>{window.scrollBy(0,1),setTimeout(()=>{window.scrollBy(0,-1)},50)},50)},[]);const d=()=>{p(!a)};return e(j,{children:e(mt,w(v({label:i(y,{sx:{gap:1,alignItems:"flex-start"},children:[r," ",e(L.Message,{size:20})]}),color:"primary",position:"right",placement:"center",gutter:7.5,arrowSize:3,withArrow:!0,withinPortal:!1,opened:a,allowPointerEvents:!0,onClick:d,styles:{body:{color:t||"white",padding:"3px 6px",transform:"translateY(-10%)",display:l},arrow:{display:l}}},s),{children:s.children}))})}const pn="_h1_11c01_12",un="_h2_11c01_17",mn="_h3_11c01_22",gn="_h4_11c01_27",_n="_h5_11c01_32",fn="_h6_11c01_37",yn="_menuItemIcon_11c01_42",vn="_container_11c01_84",xn="_nav_11c01_84",bn="_link_11c01_114",wn="_muted_11c01_127",kn="_clampLine_11c01_131",Cn="_navWrapper_11c01_141",Nn="_burger_11c01_147",$n="_content_11c01_152",Sn="_logo_11c01_157",In="_linkList_11c01_161",Ln="_open_11c01_224",zn="_dropDownMenu_11c01_229",Dn="_itemListContainer_11c01_239",Wn="_itemList_11c01_239";var G={"page-title":"_page-title_11c01_7",h1:pn,h2:un,h3:mn,h4:gn,h5:_n,h6:fn,"material-icons":"_material-icons_11c01_42",menuItemIcon:yn,"hide-sm-up":"_hide-sm-up_11c01_73","hide-sm-down":"_hide-sm-down_11c01_79",container:vn,nav:xn,"light-hover-primary":"_light-hover-primary_11c01_114",link:bn,"v-center":"_v-center_11c01_121",muted:wn,clampLine:kn,navWrapper:Cn,burger:Nn,content:$n,logo:Sn,linkList:In,open:Ln,dropDownMenu:zn,itemListContainer:Dn,itemList:Wn};function Tn({title:t,items:s}){const n=s.map((r,a)=>e(ye.Item,{icon:r.materialIcon&&i("i",{className:G.menuItemIcon,children:[" ",r.materialIcon," "]}),component:D,to:r.link||"",children:r.content},a)),o=s.map((r,a)=>i("li",{children:[r.materialIcon?i("i",{className:"material-icons",children:[" ",r.materialIcon," "]}):"",e(D,{to:r.link||"",className:G.link,children:r.content})]},a));return i(j,{children:[e(ye,{className:G.dropDownMenu,trigger:"hover",delay:250,size:"sm",control:i($,{className:G.link,children:[t," ",e("i",{className:"material-icons",children:"arrow_drop_down"})]}),children:n}),i("div",{className:G.itemListContainer,children:[i($,{className:G.link,children:[" ",t," "]}),e("ul",{className:G.itemList,children:o})]})]})}const An="_h1_mtisy_12",En="_h2_mtisy_17",Pn="_h3_mtisy_22",Rn="_h4_mtisy_27",Mn="_h5_mtisy_32",Bn="_h6_mtisy_37",Fn="_container_mtisy_84",Un="_nav_mtisy_84",On="_link_mtisy_114",Gn="_muted_mtisy_127",qn="_clampLine_mtisy_131",jn="_navWrapper_mtisy_141",Hn="_burger_mtisy_147",Kn="_content_mtisy_152",Qn="_logo_mtisy_157",Yn="_linkList_mtisy_161",Vn="_open_mtisy_224";var R={"page-title":"_page-title_mtisy_7",h1:An,h2:En,h3:Pn,h4:Rn,h5:Mn,h6:Bn,"material-icons":"_material-icons_mtisy_42","hide-sm-up":"_hide-sm-up_mtisy_73","hide-sm-down":"_hide-sm-down_mtisy_79",container:Fn,nav:Un,"light-hover-primary":"_light-hover-primary_mtisy_114",link:On,"v-center":"_v-center_mtisy_121",muted:Gn,clampLine:qn,navWrapper:jn,burger:Hn,content:Kn,logo:Qn,linkList:Yn,open:Vn};function Xn({logo:t,className:s}){const[n,o]=u.exports.useState(!1),[,r]=gt(),a=_t(()=>d()),p=n?"Close navigation":"Open navigation";function l(){r(c=>!c),o(c=>!c)}function d(){n&&l()}return i("div",{className:B(R.navWrapper,s),ref:a,children:[e(ft,{className:R.burger,opened:n,onClick:()=>l(),title:p}),e("nav",{className:B(R.nav,n?R.open:"",t?R.withLogo:""),children:i(y,{className:R.content,children:[e("div",{className:R.logo,children:t}),i("ul",{className:R.linkList,children:[e("li",{children:e(hn,{children:e($,{className:R.link,children:e(D,{to:`/${W}/chat`,children:" Go to App "})})})}),e("li",{children:e(D,{to:`/${W}/pricing`,children:e(Tn,{title:"Pricing",items:[{content:"Free",materialIcon:"favorite",link:`${K("personal","0")}`},{content:"Pro",materialIcon:"star_rate",link:`${K("personal","1")}`},{content:"Pro+",materialIcon:"hotel_class",link:`${K("personal","2")}`}]})})}),e("li",{children:e($,{className:R.link,children:"About"})})]})]})})]})}const Zn="_h1_1t0zg_12",Jn="_h2_1t0zg_17",es="_h3_1t0zg_22",ts="_h4_1t0zg_27",ns="_h5_1t0zg_32",ss="_h6_1t0zg_37",rs="_container_1t0zg_84",as="_footer_1t0zg_114",os="_muted_1t0zg_127",is="_clampLine_1t0zg_131",cs="_contentWrapper_1t0zg_141",ls="_content_1t0zg_141",ds="_header_1t0zg_161",hs="_social_1t0zg_166",ps="_socialIcon_1t0zg_172",us="_links_1t0zg_176",ms="_author_1t0zg_196";var T={"page-title":"_page-title_1t0zg_7",h1:Zn,h2:Jn,h3:es,h4:ts,h5:ns,h6:ss,"material-icons":"_material-icons_1t0zg_42","hide-sm-up":"_hide-sm-up_1t0zg_73","hide-sm-down":"_hide-sm-down_1t0zg_79",container:rs,"light-hover-primary":"_light-hover-primary_1t0zg_114",footer:as,"v-center":"_v-center_1t0zg_121",muted:os,clampLine:is,contentWrapper:cs,content:ls,header:ds,social:hs,socialIcon:ps,links:us,author:ms};function gs(){return e("footer",{className:T.footer,children:e("div",{className:T.contentWrapper,children:i(ee,{className:B("container",T.content),children:[e(y,{className:T.author,align:"center",children:e($,{href:"https://github.com/notSagyo",children:"\xA9 Boris Stecko - 2022"})}),e(y,{className:T.social,align:"center",children:i("ul",{children:[e("li",{children:e($,{className:T.socialIcon,children:e(L.Mail,{})})}),e("li",{children:e($,{className:T.socialIcon,children:e(L.BrandTelegram,{})})}),e("li",{children:e($,{className:T.socialIcon,children:e(L.BrandTwitter,{})})}),e("li",{children:e($,{className:T.socialIcon,children:e(L.BrandFacebook,{})})}),e("li",{children:e($,{className:T.socialIcon,children:e(L.BrandInstagram,{})})})]})}),e(y,{className:T.links,align:"center",children:i(y,{align:"start",children:[i("ul",{children:[e("li",{children:e(x,{className:T.header,children:"Pricing"})}),e("li",{children:e(D,{to:`/${W}/pricing`,children:e($,{children:"Free"})})}),e("li",{children:e(D,{to:`/${W}/pricing`,children:e($,{children:"Pro"})})}),e("li",{children:e(D,{to:`/${W}/pricing`,children:e($,{children:"Pro+"})})})]}),i("ul",{children:[e("li",{children:e(x,{className:T.header,children:"Info"})}),e("li",{children:e($,{children:"Contact"})}),e("li",{children:e($,{children:"Legal"})}),e("li",{children:e($,{children:"About"})})]})]})})]})})})}const _s="_title_1qrp5_1",fs="_subtitle_1qrp5_1",ys="_info_1qrp5_26",vs="_fadeIn_1qrp5_38",xs="_buttons_1qrp5_51";var E={title:_s,subtitle:fs,info:ys,fadeIn:vs,"fade-in":"_fade-in_1qrp5_1",buttons:xs};function bs(){return i(y,{className:E.hero,direction:"column",sx:{gap:"2rem"},children:[i(y,{children:[i("h1",{className:B(E.title,E.fadeIn),children:["Welcome to",e(x,{component:"span",className:E.brand,variant:"gradient",gradient:{from:"primary",to:"pink",deg:135},inherit:!0,children:" portfol.io "})]}),e("h2",{className:B(E.subtitle,E.fadeIn),children:"Connect, create, practice, learn, grow."})]}),e(y,{children:i("h3",{className:B(E.info,E.fadeIn),children:["Connect with people",e("em",{className:E.infoStrong,children:" just like you"}),". Learn to work as part of a team.",e("br",{}),"Get first hand experience and show off the result in your portfolio."]})}),e(y,{className:B(E.buttons,E.fadeIn),children:e(D,{to:`/${W}/chat`,children:e(U,{size:"xl",variant:"gradient",radius:"md",gradient:{from:"brand",to:"pink",deg:135},children:"Open app"})})})]})}const ws="_hero_e9kzz_1";var ks={hero:ws};function Cs(t){return e("section",w(v({},t),{className:De(t.className,ks.hero),children:e(bs,{})}))}const Ns="_h1_8953y_12",$s="_h2_8953y_17",Ss="_h3_8953y_22",Is="_h4_8953y_27",Ls="_title_8953y_27",zs="_h5_8953y_32",Ds="_h6_8953y_37",Ws="_container_8953y_84",Ts="_muted_8953y_127",As="_clampLine_8953y_131",Es="_card_8953y_141",Ps="_contentWrapper_8953y_160",Rs="_features_8953y_169",Ms="_feature_8953y_169",Bs="_divider_8953y_183";var q={"page-title":"_page-title_8953y_7",h1:Ns,h2:$s,h3:Ss,h4:Is,title:Ls,h5:zs,h6:Ds,"material-icons":"_material-icons_8953y_42","hide-sm-up":"_hide-sm-up_8953y_73","hide-sm-down":"_hide-sm-down_8953y_79",container:Ws,"light-hover-primary":"_light-hover-primary_8953y_114","v-center":"_v-center_8953y_121",muted:Ts,clampLine:As,card:Es,contentWrapper:Ps,features:Rs,feature:Ms,divider:Bs};const Be=u.exports.createContext({}),te=()=>u.exports.useContext(Be);function Fs(n){var o=n,{children:t}=o,s=S(o,["children"]);const[r,a]=yt({key:"cart",defaultValue:[]});async function p(g){const h=_(g.id);h?h.quantity+=g.quantity:a([...r,g]),r.sort((m,b)=>m.category.localeCompare(b.category))}async function l(g){a(r.filter(h=>h.id!==g))}async function d(){a([])}function c(){return r.reduce((g,h)=>g+h.price*h.quantity,0)}function _(g){return r.find(h=>h.id===g)}async function f(g){const h=await Se(Q(I,"orders"),g);return console.log("Created order: ",h),v({id:h.id},g)}const k=(g,h)=>{const A=g,{description:m,features:b}=A,N=S(A,["description","features"]);return w(v({},N),{quantity:h})};return e(Be.Provider,w(v({},s),{value:{itemList:r,setItemList:a,addItem:p,removeItem:l,clearCart:d,getTotal:c,createOrder:f,productToCartItem:k},children:t}))}const Us=z(t=>({wrapper:{display:"flex",alignItems:"center"},controlWrapper:{display:"flex",flexBasis:"50%",maxWidth:144,alignItems:"center",justifyContent:"space-between",padding:4,height:40,borderRadius:t.radius.sm,border:`1px solid ${t.colorScheme==="dark"?"transparent":t.colors.gray[3]}`,backgroundColor:t.colorScheme==="dark"?t.colors.dark[5]:t.white,"&:focus-within":{borderColor:t.colors[t.primaryColor][6]}},control:{backgroundColor:t.colorScheme==="dark"?t.colors.brand[7]:t.white,color:t.white,border:`1px solid ${t.colorScheme==="dark"?"transparent":t.colors.gray[3]}`,"&:disabled":{borderColor:t.colorScheme==="dark"?"transparent":t.colors.gray[3],opacity:.8,backgroundColor:"transparent"}},input:{textAlign:"center",paddingRight:`${t.spacing.sm}px !important`,paddingLeft:`${t.spacing.sm}px !important`,height:28,flex:1},button:{height:40}}));function Fe(c){var _=c,{product:t,min:s=1,max:n=999,buttonLabel:o="Buy now >",buttonLink:r=`/${At}`,onButtonClick:a,inputStyles:p,onValueChange:l}=_,d=S(_,["product","min","max","buttonLabel","buttonLink","onButtonClick","inputStyles","onValueChange"]);const[f,k]=u.exports.useState(1),{productToCartItem:g,addItem:h}=te(),m=u.exports.useRef(),b=u.exports.useRef(null),{classes:N,cx:A}=Us();function ne(){!t||h(g(t,f))}return i(y,w(v({},d),{className:A(N.wrapper,d.className),children:[i("div",{className:N.controlWrapper,style:p,children:[e(oe,{size:28,variant:"transparent",onClick:()=>m.current&&m.current.decrement(),disabled:f===s,className:N.control,onMouseDown:C=>C.preventDefault(),children:e(L.Minus,{size:16})}),e(vt,{variant:"unstyled",min:s,max:n,handlersRef:m,value:f,ref:b,onChange:C=>{l&&C&&l(C),C&&k(C)},classNames:{input:N.input}}),e(oe,{size:28,variant:"transparent",onClick:()=>m.current&&m.current.increment(),disabled:f===n,className:N.control,onMouseDown:C=>C.preventDefault(),children:e(L.Plus,{size:16})})]}),e(D,{to:r,children:e(U,{color:"brand",className:N.button,onClick:a||ne,children:o})})]}))}const Os=z(t=>({pricetag:{fontWeight:600,fontSize:30,color:t.white}}));function Ue({price:t,quantity:s}){const{classes:n}=Os();return e(x,{className:n.pricetag,weight:600,children:t>0?i(j,{children:["$",(t*s).toFixed(2),i(x,{component:"span",color:"dimmed",children:[" ($",t,"/month)"]})]}):""})}function Gs(p){var l=p,{product:t,cardTitle:s=t.name,cardDescription:n=t.description,cardFeatures:o=t.features.map(d=>d.name),cardPrice:r=t.price}=l,a=S(l,["product","cardTitle","cardDescription","cardFeatures","cardPrice"]);const[d,c]=u.exports.useState(1),_=o.map((f,k)=>i(x,{className:q.feature,children:[e(L.Check,{color:"lightgreen"}),f]},k));return e(ae,w(v({},a),{className:B(a.className,q.card),children:i(y,{className:q.contentWrapper,children:[e(D,{to:`${K(t.category,String(t.id))}`,children:e(x,{className:q.title,children:s})}),e(ve,{className:q.divider}),i(x,{component:"p",children:[" ",n," "]}),e(y,{className:q.features,children:_}),e(ve,{className:q.divider}),e(Ue,{price:r,quantity:d}),e(y,{children:e(Fe,{product:t,onValueChange:c,buttonLabel:r==0?"Get it now >":void 0,inputStyles:r==0?{display:"none"}:void 0})})]})}))}const qs="_pricing_51t2e_1",js="_categoryTitle_51t2e_7",Hs="_cardsWrapper_51t2e_17";var Z={pricing:qs,categoryTitle:js,cardsWrapper:Hs};const Oe=u.exports.createContext({}),Ge=()=>u.exports.useContext(Oe);function Ks(n){var o=n,{children:t}=o,s=S(o,["children"]);const r=async d=>(await he(P(I,"products",d))).data(),a=async()=>{const d=Q(I,"products");return(await re(d)).docs.map(f=>f.data())},p=async d=>{const c=Ne(Q(I,"products"),$e("category","==",d));return(await re(c)).docs.map(k=>k.data())},l=async d=>(await pe(P(I,"products",d.id),d),d);return e(Oe.Provider,w(v({},s),{value:{getProducts:a,getProduct:r,getProductsByCategory:p,setProduct:l},children:e(Fs,{children:t})}))}function we(t){const[s,n]=u.exports.useState([]),{getProducts:o,getProductsByCategory:r}=Ge(),{productCategory:a}=me(),p=l=>{const d={},c=[];l.map((_,f)=>{!d[_.category]&&(d[_.category]=[]),d[_.category].push(e(Gs,{product:v({},_)},f))});for(const _ in d)c.push(i(y,{children:[e("div",{className:Z.categoryTitle,children:e(x,{className:Z.categoryTitle,children:_})}),e("div",{className:Z.cardsWrapper,children:d[_]})]},c.length+1));n(c)};return u.exports.useEffect(()=>{a?r(a).then(l=>l&&p(l)):o().then(p)},[]),o(),e("section",w(v({},t),{className:De(t.className,Z.pricing),children:s}))}const Qs="_h1_p4hmp_12",Ys="_h2_p4hmp_17",Vs="_logo_p4hmp_17",Xs="_h3_p4hmp_22",Zs="_h4_p4hmp_27",Js="_h5_p4hmp_32",er="_h6_p4hmp_37",tr="_home_p4hmp_48",nr="_main_p4hmp_48",sr="_nav_p4hmp_56",rr="_mainWrapper_p4hmp_60",ar="_mainSection_p4hmp_70";var F={"page-title":"_page-title_p4hmp_7",h1:Qs,h2:Ys,logo:Vs,h3:Xs,h4:Zs,h5:Js,h6:er,"material-icons":"_material-icons_p4hmp_42",home:tr,main:nr,nav:sr,mainWrapper:rr,mainSection:ar};const or=z(t=>({title:{fontFamily:`Greycliff CF, ${t.fontFamily}`,fontSize:36,fontWeight:600,lineHeight:1.1,marginBottom:t.spacing.md,color:t.colorScheme==="dark"?t.white:t.black},infoColumn:{display:"flex",flexDirection:"column",gap:t.spacing.md}}));function ir(){const[t,s]=u.exports.useState(1),[n,o]=u.exports.useState(),{getProduct:r}=Ge(),{classes:a}=or(),{productId:p}=me();u.exports.useEffect(()=>{p&&r(p).then(d=>{o(d)})},[p]);const l=n==null?void 0:n.features.map(d=>i("div",{children:[e(xt,{size:44,radius:"md",variant:"gradient",gradient:{deg:135,from:"primary",to:"pink"},children:e(L.Flame,{size:26})}),e(x,{size:"lg",mt:"sm",weight:500,children:d.name}),e(x,{color:"dimmed",size:"sm",children:d.description})]},d.name));return e("div",{children:n&&i(bt,{gutter:80,children:[i(xe,{span:12,md:5,className:a.infoColumn,children:[e(J,{className:a.title,order:2,children:n==null?void 0:n.name}),e(x,{color:"dimmed",children:n==null?void 0:n.description}),e(Ue,{price:(n==null?void 0:n.price)||0,quantity:t}),e(Fe,{product:n,onValueChange:s,buttonLabel:(n==null?void 0:n.price)==0?"Get it now >":void 0,inputStyles:(n==null?void 0:n.price)==0?{display:"none"}:void 0})]}),e(xe,{span:12,md:7,children:e(wt,{cols:2,spacing:30,breakpoints:[{maxWidth:"md",cols:1}],children:l})})]})})}const cr=z(t=>({wrapper:{display:"flex",flexDirection:"column",marginTop:t.spacing.xl,marginBottom:t.spacing.xl,flexGrow:1},checkoutBtn:{margin:`${t.spacing.xl}px 0 ${t.spacing.xl}px auto`,width:"fit-content"},emptyCartWrapper:{margin:"auto",paddingBottom:t.other.navbarHeight},emptyDescription:{color:t.colors.dark[1],maxWidth:375,textAlign:"center"},smallText:{color:t.colors.dark[1],maxWidth:375,textAlign:"end",margin:`auto 0 ${t.spacing.xl}px auto`}})),lr=z(()=>({table:{["tbody tr td"]:{border:"none"}}})),dr={personal:"red",education:"green"};function hr(t){const s=te(),{classes:n,cx:o}=lr(),r=s.itemList.map(a=>i("tr",{children:[e("td",{children:i(y,{spacing:"sm",children:[e(D,{to:K(a.category,String(a.id)),children:e(x,{size:"sm",weight:500,children:a.name})}),e(kt,{color:dr[a.category.toLowerCase()],variant:"light",children:a.category})]})}),e("td",{children:i(x,{size:"sm",children:["$",a.price]})}),e("td",{children:e(x,{size:"sm",children:a.quantity})}),e("td",{children:i(x,{size:"sm",color:"gray",children:["$",(a.price*a.quantity).toFixed(2)]})}),e("td",{children:e(y,{spacing:0,position:"right",children:e(oe,{variant:"filled",color:"red",onClick:()=>s.removeItem(a.id),children:e(L.Trash,{size:16})})})})]},a.name));return e(ue,{children:i(Ct,w(v({},t),{verticalSpacing:"sm",className:o(n.table,t.className),children:[e("thead",{children:i("tr",{children:[e("th",{children:"Item"}),e("th",{children:"Price"}),e("th",{children:"Quantity"}),e("th",{children:"Total"}),e("th",{})]})}),e("tbody",{children:r})]}))})}function pr({opened:t,setOpened:s}){const[n,o]=u.exports.useState(),[r,a]=u.exports.useState(!1),[p,l]=u.exports.useState(!1),{itemList:d,getTotal:c,createOrder:_,clearCart:f}=te(),{activeUser:k}=H(),g=d.map(m=>i(y,{position:"apart",children:[i("div",{children:[" ",m.quantity," x ",m.name," "]}),i("div",{children:[" $",(m.price*m.quantity).toFixed(2)," "]})]})),h=async()=>{a(!0);const m={products:d,total:c(),userName:k.name,userEmail:k.email,userId:k.id,createdAt:Date.now()},b=await _(m);b&&(f(),l(!0),o(b)),a(!1)};return i(Nt,{centered:!0,opened:t,title:e(x,{weight:600,children:"Your order"}),onClose:()=>s(!1),children:[e(Le,{visible:r}),e($t,{align:"stretch",mt:"lg",children:p?i(j,{children:[e(x,{weight:600,underline:!0,children:"Details:"}),i(y,{position:"apart",children:[e("div",{children:"Total:"}),i("div",{children:["$",n==null?void 0:n.total]})]}),i(y,{position:"apart",children:[e("div",{children:"Order ID:"}),e("div",{children:n==null?void 0:n.id})]}),i(y,{position:"apart",children:[e("div",{children:"Issue date:"}),e("div",{children:(n==null?void 0:n.createdAt)&&new Date(n.createdAt).toUTCString()})]}),e(x,{weight:600,mt:"sm",underline:!0,children:"To:"}),i(y,{position:"apart",children:[e("div",{children:"Name:"}),e("div",{children:n==null?void 0:n.userName})]}),i(y,{position:"apart",children:[e("div",{children:"Mail:"}),e("div",{children:n==null?void 0:n.userEmail})]}),i(y,{position:"apart",children:[e("div",{children:"User ID:"}),e("div",{children:n==null?void 0:n.userId})]}),e(y,{position:"center",mt:"sm",children:e(U,{color:"brand",onClick:()=>s(!1),children:"Close"})})]}):i(j,{children:[g,i(y,{position:"right",children:[e(x,{weight:600,children:"Total:"}),i(x,{weight:600,children:["$",c().toFixed(2)]})]}),e(y,{position:"center",mt:"lg",onClick:h,children:e(U,{color:"brand",children:"Confirm"})})]})})]})}function ur(n){var o=n,{children:t}=o,s=S(o,["children"]);const r=te(),[a,p]=u.exports.useState(!1),{authUser:l,signIn:d}=H(),{classes:c,cx:_}=cr(),f=async()=>{(l||await d())&&p(!0)};return i("div",w(v({},s),{className:_(s.className,c.wrapper),children:[e(pr,{opened:a,setOpened:p}),t,r.itemList.length>0?i(j,{children:[e(hr,{}),e(U,{color:"brand",className:c.checkoutBtn,onClick:f,children:"Checkout >"}),e(x,{className:c.smallText,children:"*if multiple plans are selected, they will be queued using the most expensive first."})]}):i(y,{position:"center",direction:"column",spacing:"xl",className:c.emptyCartWrapper,children:[e(J,{children:"The cart is empty..."}),e(x,{className:c.emptyDescription,children:"Try adding a plan to the cart and come back, we'll be waiting for you... :-)"}),e(D,{to:`/${Ae}`,children:e(U,{color:"brand",children:"Go back to pricing >"})})]})]}))}const mr=z(t=>({root:{paddingTop:80,paddingBottom:80},inner:{position:"relative"},backgroundText:{position:"absolute",top:"50%",left:"50%",zIndex:0,transform:"translate(-50%, -50%)",letterSpacing:"1vw",fontSize:["35vw","min(35vw, 500px)"],fontFamily:`Greycliff CF, ${t.fontFamily}`,color:t.colors.dark[6],opacity:.5},content:{paddingTop:220,position:"relative",zIndex:1,[t.fn.smallerThan("sm")]:{paddingTop:120}},title:{textAlign:"center",fontWeight:900,fontSize:38,[t.fn.smallerThan("sm")]:{fontSize:32}},description:{maxWidth:540,margin:"auto",marginTop:t.spacing.xl,marginBottom:t.spacing.xl*1.5}}));function gr(){const{classes:t}=mr();return e(ee,{className:t.root,children:i("div",{className:t.inner,children:[e(J,{order:2,className:t.backgroundText,children:"404"}),i("div",{className:t.content,children:[e(J,{className:t.title,children:"Nothing to see here"}),e(x,{color:"dimmed",size:"lg",align:"center",className:t.description,children:"Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to another URL. If you think this is an error contact support."}),e(y,{position:"center",children:e(D,{to:`/${W}`,children:e(U,{color:"brand",size:"md",children:"Take me back to home page"})})})]})]})})}function _r(){const t=St().pathname,s=e(D,{to:`../${W}`,children:e($,{className:F.logo,style:{visibility:It(t,`/${W}`)?"hidden":"visible"},color:"",variant:"gradient",gradient:{from:"primary",to:"pink",deg:135},children:"portfol.io"})});return i("div",{className:F.home,children:[e(Xn,{logo:s,className:F.nav}),e(ee,{className:F.mainWrapper,sx:n=>({background:n.colors.dark[7]}),px:0,fluid:!0,children:e("main",{className:B("container",F.main),children:i(We,{children:[e(M,{path:"/",element:e(Cs,{className:F.mainSection})}),e(M,{path:"cart",element:e(ur,{})}),e(M,{path:"pricing/",element:e(we,{className:F.mainSection})}),e(M,{path:"pricing/:productCategory",element:e(we,{className:F.mainSection})}),e(M,{path:"pricing/:productCategory/details/:productId",element:e(ir,{})}),e(M,{path:"*",element:e(gr,{})})]})})}),e(gs,{})]})}function fr(){const t=Lt();return e(zt,{theme:{colorScheme:"dark",colors:{primary:["#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E"],brand:t.colors.red},white:"#fafaff",black:"#101113",primaryColor:"primary",fontFamily:"Poppins, sans-serif",other:{navbarHeight:"8rem"}},withNormalizeCSS:!0,children:e(Ot,{children:e(Ks,{children:e(ee,{px:"0",fluid:!0,children:e(Dt,{children:i(We,{children:[e(M,{path:`${W}/*`,element:e(_r,{})}),e(M,{path:`${W}/${ie}`,element:e(be,{})}),e(M,{path:`${W}/${ie}/:id`,element:e(be,{})})]})})})})})})}Wt.render(e(ze.StrictMode,{children:e(fr,{})}),document.getElementById("root"));