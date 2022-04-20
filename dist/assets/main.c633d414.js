var Ue=Object.defineProperty,Ge=Object.defineProperties;var Oe=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var pe=(e,n,s)=>n in e?Ue(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,_=(e,n)=>{for(var s in n||(n={}))ue.call(n,s)&&pe(e,s,n[s]);if(K)for(var s of K(n))me.call(n,s)&&pe(e,s,n[s]);return e},y=(e,n)=>Ge(e,Oe(n));var N=(e,n)=>{var s={};for(var a in e)ue.call(e,a)&&n.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&K)for(var a of K(e))n.indexOf(a)<0&&me.call(e,a)&&(s[a]=e[a]);return s};import{i as qe,P as je,G as ne,g as Ne,s as He,a as Ke,b as Qe,r as h,j as t,Y as X,c as A,d as ce,e as Ce,f as Ye,v as Xe,h as S,T as Je,k as C,u as Ve,l as i,m as v,n as Ze,C as re,A as $e,o as b,L as $,B as q,p as k,S as ie,q as le,t as et,F as H,N as Q,U as tt,R as Se,w as nt,H as rt,x as st,y as ot,M as ge,z as at,D as ct,E as M,I as it,J as V,K as Ie,O as se,Q as lt,V as _e,W as fe,X as ye,Z as dt,_ as ht,$ as pt,a0 as ut,a1 as ve,a2 as J,a3 as mt,a4 as gt,a5 as _t,a6 as ft,a7 as yt,a8 as Le,a9 as T,aa as vt,ab as xt,ac as bt,ad as kt}from"./vendor.fdbdc6aa.js";const wt=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}};wt();const I="ch-react-site",oe="chat",Nt=`${I}/${oe}`,ze=`${I}/pricing`,Ct=`${I}/cart`,j=(e,n)=>`/${ze}/${e}/details/${n}`,We=200,$t=e=>{if(e=e.trim(),e.length<1||e.length>We)throw Error("Message must be between 1 and 200 characters.");return e},ee={createdAt:Date.now(),updatedAt:Date.now(),email:"",id:"-1",avatarURL:"",name:"Guest",occupation:"Frontend Deloper: JS / React",bannerURL:"https://picsum.photos/600/300"},xe={createdAt:Date.now(),updatedAt:Date.now(),description:"",label:"none",messages:[],type:"user",members:[],id:"0"},St={apiKey:"AIzaSyAXZbpwGIYAyEuU0maP2pBI4nh7QrtXmO0",authDomain:"portfolio-85693.firebaseapp.com",projectId:"portfolio-85693",storageBucket:"portfolio-85693.appspot.com",messagingSenderId:"20009869405",appId:"1:20009869405:web:929394e2e932096dd02db4"},It=qe(St),z=je(It),Lt=new ne,be=Ne(),zt=async()=>{let e;return await He(be,Qe),await Ke(be,Lt).then(n=>{const s=ne.credentialFromResult(n);return s==null||s.accessToken,e=n.user,e}).catch(n=>{n.code,n.message,n.email,ne.credentialFromError(n)}),e},Pe=h.exports.createContext({}),Ee=()=>h.exports.useContext(Pe);function Wt(s){var a=s,{children:e}=a,n=N(a,["children"]);const[r,o]=h.exports.useState(ee),[l,d]=h.exports.useState(),c=async()=>{l||await zt()},p=async f=>(console.log("getUser not implemented"),ee),u=async f=>(await X(A(z,"users",f.id))).exists()?(console.warn(`(Firestore): user ${f.id} already exists`),!1):(await ce(A(z,"users",f.id),f),f),m=async(f,g=!1)=>(Ce(A(z,"users",f.id),_({},f)).catch(x=>{x.code==="not-found"&&g&&(console.warn(`(Firestore): user ${f.id} not found, creating...`),u(f))}),ee);return h.exports.useEffect(()=>{const f=Ne().onAuthStateChanged(g=>{if(g){const x=_(_(_(y(_({},r),{id:g.uid}),g.displayName&&{name:g.displayName}),g.email&&{email:g.email}),g.photoURL&&{photoURL:g.photoURL});m(x,!0),d(g),o(x)}});return()=>f()},[]),t(Pe.Provider,y(_({},n),{value:{activeUser:r,setActiveUser:o,authUser:l,setAuthUser:d,getUser:p,createUser:u,updateUser:m,signIn:c},children:e}))}const Ae=h.exports.createContext({}),de=()=>h.exports.useContext(Ae);function Pt(s){var a=s,{children:e}=a,n=N(a,["children"]);const[r,o]=h.exports.useState(xe),{activeUser:l}=Ee(),d=async g=>{const x=await X(A(z,"channels",g));if(!x.exists()){console.warn(`(Firestore): channel ${g} not found`);return}return x.data()},c=async g=>(console.log("getUsers not implemented"),[]),p=async g=>{if(g===r.id)return r.messages;const x=await d(g);return x==null?void 0:x.messages},u=async g=>(await X(A(z,"channels",g.id))).exists()?(console.warn(`(Firestore): channel ${g.id} already exists`),!1):(await ce(A(z,"channels",g.id),g),g),m=async g=>xe,f=async g=>{const x=$t(g),D={id:Xe(),authorName:l.name,authorId:l.id,channelId:r.id,content:x,createdAt:Date.now(),updatedAt:Date.now()},w=await d(r.id);if(w)w.messages.push(D),Ce(A(z,"channels",w.id),{messages:w.messages});else{console.warn(`(Firestore): channel ${r.id} not found, creating...`);const O=await u(y(_({},r),{messages:[D]}));O&&o(O)}return D};return h.exports.useEffect(()=>{const g=Ye(A(z,"channels",r.id),x=>x.exists()&&o(x.data()));return()=>{g()}},[r.id]),t(Ae.Provider,y(_({},n),{value:{activeChannel:r,setActiveChannel:o,getChannel:d,getMembers:c,getMessages:p,createChannel:u,changeChannel:m,pushMessage:f},children:e}))}const Et=S(()=>({textInput:{fontWeight:500},inputInner:{maxHeight:"100%","&:focus, &:focus-within":{borderColor:"transparent !important"}},placeholderIcon:{fontWeight:100},form:{width:"100%",height:"fit-content"}}));function At(e){const n=h.exports.useRef(null),[s,a]=h.exports.useState(null),{pushMessage:r}=de(),{classes:o,cx:l}=Et();async function d(c){a(null),!(!(c.key==="Enter"&&!c.shiftKey)||!n.current)&&(c.preventDefault(),r(n.current.value).catch(p=>a(`*${p.message}`)),n.current.value="")}return t("form",{action:void 0,className:o.form,children:t(Je,{icon:t(C.Message,{className:o.placeholderIcon}),className:l(e.className,o.textInput),classNames:{input:o.inputInner},placeholder:"Write a message...",maxLength:We,onKeyDown:d,autoComplete:"off",error:s,ref:n,maxRows:10,minRows:1,autosize:!0,"aria-label":"Message bar"})})}const Dt=S(e=>({card:{backgroundColor:e.colorScheme==="dark"?e.colors.dark[7]:e.white,width:250},avatar:{border:`2px solid ${e.colorScheme==="dark"?e.colors.dark[7]:e.white}`}}));function De(u){var m=u,{avatar:e,banner:n,name:s,occupation:a,stats:r,parent:o,link:l,inline:d,clickTrigger:c}=m,p=N(m,["avatar","banner","name","occupation","stats","parent","link","inline","clickTrigger"]);const{classes:f,theme:g,cx:x}=Dt(),[D,w]=h.exports.useState(!1);Ve("wheel",()=>w(!1));function O(R){c!=="both"&&c!=="right"||(R.preventDefault(),R.stopPropagation(),w(!0))}function Z(R){c!=="both"&&c!=="left"||(R.preventDefault(),R.stopPropagation(),w(!0))}const P=r&&r.map(R=>i("div",{children:[t(v,{align:"center",size:"lg",weight:500,children:R.value}),t(v,{align:"center",size:"sm",color:"dimmed",children:R.label})]},R.label));return t(Ze,y(_({styles:{inner:{padding:0},body:{border:"none"},root:{display:d?"":"block"}},position:"right",placement:"start"},p),{opened:D,onClose:()=>w(!1),target:t("div",{onContextMenu:O,onClick:Z,children:o}),children:i(re,{withBorder:!0,p:"xl",radius:"md",className:x(f.card,p.className),children:[t(re.Section,{sx:{backgroundImage:`url(${n})`,height:140}}),t($e,{src:e,size:80,radius:80,mx:"auto",mt:-30,className:f.avatar}),i(v,{align:"center",size:"lg",weight:500,mt:"sm",children:[" ",s," "]}),i(v,{align:"center",size:"sm",color:"dimmed",children:[" ",a," "]}),i(b,{mt:"md",position:"center",spacing:30,children:[" ",P," "]}),t($,{to:`${l}`,children:t(q,{fullWidth:!0,radius:"md",mt:"xl",size:"md",color:g.colorScheme==="dark"?void 0:"dark",onClick:()=>w(!1),children:"Send message"})})]})}))}const Rt=S(e=>({messageWrapper:{},timestamp:{color:e.colors.dark[3]},author:{color:"inherit",fontWeight:500},content:{whiteSpace:"pre-line"}}));function Tt(s){var a=s,{message:e}=a,n=N(a,["message"]);const{classes:r,cx:o}=Rt(),l=new Date(e.createdAt).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return t("li",y(_({},n),{className:o(r.messageWrapper,n.className),children:i(v,{children:[i("span",{className:r.timestamp,children:[" [",l,"] "]}),t(De,{clickTrigger:"both",inline:!0,parent:i(k,{className:r.author,children:[e.authorName||"Guest",":"]})}),i("span",{className:r.content,children:[" ",n.children]})]})}))}const Mt=S(e=>({viewport:{color:e.colors.dark[0],["& > *"]:{height:"100%",paddingBottom:5}},messages:{display:"flex",flexDirection:"column",justifyContent:"flex-end",height:"100%"}}));function Bt(s){var a=s,{children:e}=a,n=N(a,["children"]);const[r,o]=h.exports.useState([]),l=h.exports.useRef(null),{activeChannel:d}=de(),{classes:c}=Mt();return h.exports.useEffect(()=>{o(d.messages.map((p,u)=>t(Tt,{message:p,children:p.content},u)))},[d.messages]),h.exports.useEffect(()=>{var p;(p=l==null?void 0:l.current)==null||p.scrollTo({top:l.current.scrollHeight,behavior:"smooth"})},[r]),i(ie,y(_({},n),{viewportRef:l,classNames:{viewport:c.viewport},children:[e,t("ol",{className:c.messages,children:r.length>0?r:t("li",{children:"This is where I would put my messages... if I had any!!"})})]}))}const Ft=S(e=>{const n=e.spacing.md;return{channel:{flexDirection:"column",padding:n,height:"100%"},messagesWindow:{width:"100%",height:0,flexGrow:1,paddingRight:n},scrollRoot:{marginRight:-n}}});function Ut(e){const[n,s]=h.exports.useState(!0),{classes:a,cx:r}=Ft(),{id:o}=le();return h.exports.useEffect(()=>{s(!1)},[o]),i(b,y(_({},e),{className:r(a.channel,e.className),children:[t(Bt,{className:a.messagesWindow,classNames:{root:a.scrollRoot},children:t(et,{visible:n,radius:"sm"})}),t(At,{})]}))}async function Gt(){return fetch("https://api.jsonbin.io/b/6244cf1ad96a510f028d0a38/5").then(n=>n.json()).then(n=>(n.USERS.forEach(s=>{Object.assign(s,{icon:C.User})}),n.TEAMS.forEach(s=>{Object.assign(s,{icon:C.Users})}),n))}const Ot=S((e,n,s)=>{const a=e.colorScheme==="dark",r=s("icon"),o=a?e.colors.dark[6]:e.colors.gray[0],l=a?e.fn.rgba(e.colors.dark[3],.25):e.colors[e.primaryColor][0],d=e.colors.brand[a?6:7];return{link:y(_({},e.fn.focusStyles()),{display:"flex",alignItems:"center",textDecoration:"none",fontSize:e.fontSizes.sm,color:a?e.colors.dark[1]:e.colors.gray[7],padding:`${e.spacing.xs}px ${e.spacing.sm}px`,margin:"4px 0",borderRadius:e.radius.sm,fontWeight:500,lineHeight:1.5,"&:hover":{backgroundColor:o,color:a?e.white:e.black,[`& .${r}`]:{color:a?e.white:e.black}}}),linkIcon:{ref:r,color:a?e.colors.dark[2]:e.colors.gray[6],marginRight:e.spacing.sm},linkActive:{backgroundColor:l,"&, &:hover":{color:a?e.white:e.colors.brand[7],[`& .${r}`]:{color:d}}},textWrapper:{whiteSpace:"nowrap",width:0,flexGrow:1,overflow:"hidden",textOverflow:"ellipsis"}}});function qt(d){var c=d,{linkId:e,children:n,activeLink:s,label:a,link:r="",icon:o}=c,l=N(c,["linkId","children","activeLink","label","link","icon"]);const{classes:p,cx:u}=Ot();return i($,y(_({},l),{className:u(p.link,l.className,{[p.linkActive]:e===s}),to:r,children:[o&&t(o,{className:p.linkIcon}),t("div",{className:p.textWrapper,children:t("span",{children:n||a})})]}))}function jt(s){var a=s,{membersId:e}=a,n=N(a,["membersId"]);const{activeChannel:r}=de(),o=`../${Nt}/`;return t(H,{children:t(De,{parent:t(qt,y(_({},n),{activeLink:r.id,link:o}))})})}let F,ae,te;const Ht=S(e=>{const n=e.colorScheme==="dark";return te=`1px solid ${n?e.colors.dark[4]:e.colors.gray[2]}`,F=e.spacing.md,ae=-F*.85,{navbar:{backgroundColor:n?e.colors.dark[6]:e.white,padding:F,height:"100%",width:256},header:{paddingBottom:F,borderBottom:te,marginBottom:F},title:{textTransform:"uppercase",letterSpacing:-.25},footer:{paddingTop:F,marginTop:F,borderTop:te},scrollArea:{marginRight:ae},scrollbar:{["&:hover"]:{backgroundColor:"transparent"}}}}),Kt=S((e,n,s)=>({sidenav:{backgroundColor:e.colorScheme==="dark"?e.colors.dark[7]:e.colors.gray[0]},links:{marginRight:-ae},controls:{ref:s("controls"),width:"100%"},controlsActive:{backgroundColor:e.fn.rgba(e.colors.brand[7],.9),color:e.black},controlsLabel:{padding:8,fontWeight:600}}));function Qt(o){var l=o,{footer:e,header:n,subheader:s,children:a}=l,r=N(l,["footer","header","subheader","children"]);const{classes:d,cx:c}=Ht();return i(Q,y(_({},r),{className:c(d.navbar,r.className),children:[i(Q.Section,{children:[n&&i(b,{className:d.header,position:"apart",children:[" ",n," "]}),s]}),t(Q.Section,{classNames:{scrollbar:d.scrollbar},className:d.scrollArea,component:ie,scrollbarSize:5,grow:!0,children:a}),e&&i(Q.Section,{className:d.footer,children:[" ",e," "]})]}))}const Yt=S(e=>{const n=e.colorScheme==="dark";return{user:{display:"block",width:"100%",padding:e.spacing.md,color:n?e.colors.dark[0]:e.black,borderRadius:e.radius.sm,"&:hover":{backgroundColor:n?e.colors.dark[6]:e.colors.gray[0],color:n?e.white:e.black}}}});function Xt(o){var l=o,{image:e,name:n,email:s,icon:a}=l,r=N(l,["image","name","email","icon"]);const{signIn:d,authUser:c}=Ee(),{classes:p}=Yt();return t(tt,y(_({className:p.user},r),{onClick:d,children:i(b,{style:{flexWrap:"nowrap"},children:[t($e,{src:c==null?void 0:c.photoURL,radius:"xl"}),i("div",{style:{flex:1},children:[t(v,{size:"sm",weight:500,className:"clampLine",children:(c==null?void 0:c.displayName)||"Log in"}),t(v,{color:"dimmed",size:"xs",className:"clampLine",children:(c==null?void 0:c.email)||"Guest"})]}),a||t(C.ChevronRight,{size:14})]})}))}function Jt(e){const[n,s]=h.exports.useState({}),[a,r]=h.exports.useState([t(Se.Fragment,{},"")]),[o,l]=h.exports.useState([]),[d,c]=h.exports.useState(""),{classes:p,cx:u}=Kt();return h.exports.useEffect(()=>{Gt().then(m=>s(m))},[]),h.exports.useEffect(()=>{const m=Object.keys(n);m.length<1||(l(m.map(f=>({label:f,value:f}))),c(m[0]))},[n]),h.exports.useEffect(()=>{d&&r(n[d].map((m,f)=>h.exports.createElement(jt,y(_({},m),{key:f,linkId:m.id,icon:m.icon,membersId:[]}))))},[d]),t(Qt,y(_({},e),{className:u(p.sidenav,e.className),header:i(b,{children:[t(C.Messages,{}),"Inbox"]}),footer:t(Xt,{}),subheader:o.length>1&&t(nt,{className:p.controls,classNames:{label:p.controlsLabel,active:p.controlsActive},transitionTimingFunction:"ease",onChange:c,value:d,data:o,fullWidth:!0}),children:i("div",{className:p.links,children:[" ",a," "]})}))}const Vt=h.exports.createContext({});function Zt(s){var a=s,{children:e}=a,n=N(a,["children"]);return t(Wt,{children:t(Pt,{children:t(Vt.Provider,y(_({},n),{value:{},children:e}))})})}const en=S(e=>{const n=e.colorScheme==="dark";return{header:{},root:{position:"relative",display:"flex",flexDirection:"column",height:"100vh",backgroundColor:n?e.colors.dark[6]:e.colors.gray[5]},body:{height:0,flexGrow:1},main:{padding:0},channel:{height:"100%",flexDirection:"column",alignContent:"start",justifyContent:"start"}}});function ke(){const{classes:e}=en(),n=t(rt,{className:e.header,height:32});return t(Zt,{children:t(st,{navbar:t(Jt,{}),header:n,classNames:{root:e.root,body:e.body,main:e.main},children:t(Ut,{})})})}function tn(s){var a=s,{textColor:e}=a,n=N(a,["textColor"]);const[r]=h.exports.useState(3),[o,l]=h.exports.useState(!0),d=r<1?"none":"";h.exports.useEffect(()=>{setTimeout(()=>{window.scrollBy(0,1),setTimeout(()=>{window.scrollBy(0,-1)},50)},50)},[]);const c=()=>{l(!o)};return t(H,{children:t(ot,y(_({label:i(b,{sx:{gap:1,alignItems:"flex-start"},children:[r," ",t(C.Message,{size:20})]}),color:"primary",position:"right",placement:"center",gutter:7.5,arrowSize:3,withArrow:!0,withinPortal:!1,opened:o,allowPointerEvents:!0,onClick:c,styles:{body:{color:e||"white",padding:"3px 6px",transform:"translateY(-10%)",display:d},arrow:{display:d}}},n),{children:n.children}))})}const nn="_h1_11c01_12",rn="_h2_11c01_17",sn="_h3_11c01_22",on="_h4_11c01_27",an="_h5_11c01_32",cn="_h6_11c01_37",ln="_menuItemIcon_11c01_42",dn="_container_11c01_84",hn="_nav_11c01_84",pn="_link_11c01_114",un="_muted_11c01_127",mn="_clampLine_11c01_131",gn="_navWrapper_11c01_141",_n="_burger_11c01_147",fn="_content_11c01_152",yn="_logo_11c01_157",vn="_linkList_11c01_161",xn="_open_11c01_224",bn="_dropDownMenu_11c01_229",kn="_itemListContainer_11c01_239",wn="_itemList_11c01_239";var U={"page-title":"_page-title_11c01_7",h1:nn,h2:rn,h3:sn,h4:on,h5:an,h6:cn,"material-icons":"_material-icons_11c01_42",menuItemIcon:ln,"hide-sm-up":"_hide-sm-up_11c01_73","hide-sm-down":"_hide-sm-down_11c01_79",container:dn,nav:hn,"light-hover-primary":"_light-hover-primary_11c01_114",link:pn,"v-center":"_v-center_11c01_121",muted:un,clampLine:mn,navWrapper:gn,burger:_n,content:fn,logo:yn,linkList:vn,open:xn,dropDownMenu:bn,itemListContainer:kn,itemList:wn};function Nn({title:e,items:n}){const s=n.map((r,o)=>t(ge.Item,{icon:r.materialIcon&&i("i",{className:U.menuItemIcon,children:[" ",r.materialIcon," "]}),component:$,to:r.link||"",children:r.content},o)),a=n.map((r,o)=>i("li",{children:[r.materialIcon?i("i",{className:"material-icons",children:[" ",r.materialIcon," "]}):"",t($,{to:r.link||"",className:U.link,children:r.content})]},o));return i(H,{children:[t(ge,{className:U.dropDownMenu,trigger:"hover",delay:250,size:"sm",control:i(k,{className:U.link,children:[e," ",t("i",{className:"material-icons",children:"arrow_drop_down"})]}),children:s}),i("div",{className:U.itemListContainer,children:[i(k,{className:U.link,children:[" ",e," "]}),t("ul",{className:U.itemList,children:a})]})]})}const Cn="_h1_mtisy_12",$n="_h2_mtisy_17",Sn="_h3_mtisy_22",In="_h4_mtisy_27",Ln="_h5_mtisy_32",zn="_h6_mtisy_37",Wn="_container_mtisy_84",Pn="_nav_mtisy_84",En="_link_mtisy_114",An="_muted_mtisy_127",Dn="_clampLine_mtisy_131",Rn="_navWrapper_mtisy_141",Tn="_burger_mtisy_147",Mn="_content_mtisy_152",Bn="_logo_mtisy_157",Fn="_linkList_mtisy_161",Un="_open_mtisy_224";var E={"page-title":"_page-title_mtisy_7",h1:Cn,h2:$n,h3:Sn,h4:In,h5:Ln,h6:zn,"material-icons":"_material-icons_mtisy_42","hide-sm-up":"_hide-sm-up_mtisy_73","hide-sm-down":"_hide-sm-down_mtisy_79",container:Wn,nav:Pn,"light-hover-primary":"_light-hover-primary_mtisy_114",link:En,"v-center":"_v-center_mtisy_121",muted:An,clampLine:Dn,navWrapper:Rn,burger:Tn,content:Mn,logo:Bn,linkList:Fn,open:Un};function Gn({logo:e,className:n}){const[s,a]=h.exports.useState(!1),[,r]=at(),o=ct(()=>c()),l=s?"Close navigation":"Open navigation";function d(){r(p=>!p),a(p=>!p)}function c(){s&&d()}return i("div",{className:M(E.navWrapper,n),ref:o,children:[t(it,{className:E.burger,opened:s,onClick:()=>d(),title:l}),t("nav",{className:M(E.nav,s?E.open:"",e?E.withLogo:""),children:i(b,{className:E.content,children:[t("div",{className:E.logo,children:e}),i("ul",{className:E.linkList,children:[t("li",{children:t(tn,{children:t(k,{className:E.link,children:t($,{to:`/${I}/chat`,children:" Go to App "})})})}),t("li",{children:t($,{to:`/${I}/pricing`,children:t(Nn,{title:"Pricing",items:[{content:"Free",materialIcon:"favorite",link:`${j("personal","0")}`},{content:"Pro",materialIcon:"star_rate",link:`${j("personal","1")}`},{content:"Pro+",materialIcon:"hotel_class",link:`${j("personal","2")}`}]})})}),t("li",{children:t(k,{className:E.link,children:"About"})})]})]})})]})}const On="_h1_1t0zg_12",qn="_h2_1t0zg_17",jn="_h3_1t0zg_22",Hn="_h4_1t0zg_27",Kn="_h5_1t0zg_32",Qn="_h6_1t0zg_37",Yn="_container_1t0zg_84",Xn="_footer_1t0zg_114",Jn="_muted_1t0zg_127",Vn="_clampLine_1t0zg_131",Zn="_contentWrapper_1t0zg_141",er="_content_1t0zg_141",tr="_header_1t0zg_161",nr="_social_1t0zg_166",rr="_socialIcon_1t0zg_172",sr="_links_1t0zg_176",or="_author_1t0zg_196";var L={"page-title":"_page-title_1t0zg_7",h1:On,h2:qn,h3:jn,h4:Hn,h5:Kn,h6:Qn,"material-icons":"_material-icons_1t0zg_42","hide-sm-up":"_hide-sm-up_1t0zg_73","hide-sm-down":"_hide-sm-down_1t0zg_79",container:Yn,"light-hover-primary":"_light-hover-primary_1t0zg_114",footer:Xn,"v-center":"_v-center_1t0zg_121",muted:Jn,clampLine:Vn,contentWrapper:Zn,content:er,header:tr,social:nr,socialIcon:rr,links:sr,author:or};function ar(){return t("footer",{className:L.footer,children:t("div",{className:L.contentWrapper,children:i(V,{className:M("container",L.content),children:[t(b,{className:L.author,align:"center",children:t(k,{href:"https://github.com/notSagyo",children:"\xA9 Boris Stecko - 2022"})}),t(b,{className:L.social,align:"center",children:i("ul",{children:[t("li",{children:t(k,{className:L.socialIcon,children:t(C.Mail,{})})}),t("li",{children:t(k,{className:L.socialIcon,children:t(C.BrandTelegram,{})})}),t("li",{children:t(k,{className:L.socialIcon,children:t(C.BrandTwitter,{})})}),t("li",{children:t(k,{className:L.socialIcon,children:t(C.BrandFacebook,{})})}),t("li",{children:t(k,{className:L.socialIcon,children:t(C.BrandInstagram,{})})})]})}),t(b,{className:L.links,align:"center",children:i(b,{align:"start",children:[i("ul",{children:[t("li",{children:t(v,{className:L.header,children:"Pricing"})}),t("li",{children:t($,{to:`/${I}/pricing`,children:t(k,{children:"Free"})})}),t("li",{children:t($,{to:`/${I}/pricing`,children:t(k,{children:"Pro"})})}),t("li",{children:t($,{to:`/${I}/pricing`,children:t(k,{children:"Pro+"})})})]}),i("ul",{children:[t("li",{children:t(v,{className:L.header,children:"Info"})}),t("li",{children:t(k,{children:"Contact"})}),t("li",{children:t(k,{children:"Legal"})}),t("li",{children:t(k,{children:"About"})})]})]})})]})})})}const cr="_title_1qrp5_1",ir="_subtitle_1qrp5_1",lr="_info_1qrp5_26",dr="_fadeIn_1qrp5_38",hr="_buttons_1qrp5_51";var W={title:cr,subtitle:ir,info:lr,fadeIn:dr,"fade-in":"_fade-in_1qrp5_1",buttons:hr};function pr(){return i(b,{className:W.hero,direction:"column",sx:{gap:"2rem"},children:[i(b,{children:[i("h1",{className:M(W.title,W.fadeIn),children:["Welcome to",t(v,{component:"span",className:W.brand,variant:"gradient",gradient:{from:"primary",to:"pink",deg:135},inherit:!0,children:" portfol.io "})]}),t("h2",{className:M(W.subtitle,W.fadeIn),children:"Connect, create, practice, learn, grow."})]}),t(b,{children:i("h3",{className:M(W.info,W.fadeIn),children:["Connect with people",t("em",{className:W.infoStrong,children:" just like you"}),". Learn to work as part of a team.",t("br",{}),"Get first hand experience and show off the result in your portfolio."]})}),t(b,{className:M(W.buttons,W.fadeIn),children:t($,{to:`/${I}/chat`,children:t(q,{size:"xl",variant:"gradient",radius:"lg",gradient:{from:"base",to:"pink",deg:135},children:"Open app"})})})]})}const ur="_hero_e9kzz_1";var mr={hero:ur};function gr(e){return t("section",y(_({},e),{className:Ie(e.className,mr.hero),children:t(pr,{})}))}const _r="_h1_8953y_12",fr="_h2_8953y_17",yr="_h3_8953y_22",vr="_h4_8953y_27",xr="_title_8953y_27",br="_h5_8953y_32",kr="_h6_8953y_37",wr="_container_8953y_84",Nr="_muted_8953y_127",Cr="_clampLine_8953y_131",$r="_card_8953y_141",Sr="_contentWrapper_8953y_160",Ir="_features_8953y_169",Lr="_feature_8953y_169",zr="_divider_8953y_183";var G={"page-title":"_page-title_8953y_7",h1:_r,h2:fr,h3:yr,h4:vr,title:xr,h5:br,h6:kr,"material-icons":"_material-icons_8953y_42","hide-sm-up":"_hide-sm-up_8953y_73","hide-sm-down":"_hide-sm-down_8953y_79",container:wr,"light-hover-primary":"_light-hover-primary_8953y_114","v-center":"_v-center_8953y_121",muted:Nr,clampLine:Cr,card:$r,contentWrapper:Sr,features:Ir,feature:Lr,divider:zr};const Re=h.exports.createContext({}),he=()=>h.exports.useContext(Re);function Wr(s){var a=s,{children:e}=a,n=N(a,["children"]);const[r,o]=h.exports.useState([]);function l(u){const m=p(u.id);m?m.quantity+=u.quantity:o([...r,u]),r.sort((f,g)=>f.category.localeCompare(g.category))}function d(u){o(r.filter(m=>m.id!==u))}function c(){o([])}function p(u){return r.find(m=>m.id===u)}return t(Re.Provider,y(_({},n),{value:{itemList:r,setItemList:o,addItem:l,removeItem:d,clearCart:c},children:e}))}const Pr=S(e=>({wrapper:{display:"flex",alignItems:"center"},controlWrapper:{display:"flex",flexBasis:"50%",maxWidth:144,alignItems:"center",justifyContent:"space-between",padding:4,height:40,borderRadius:e.radius.sm,border:`1px solid ${e.colorScheme==="dark"?"transparent":e.colors.gray[3]}`,backgroundColor:e.colorScheme==="dark"?e.colors.dark[5]:e.white,"&:focus-within":{borderColor:e.colors[e.primaryColor][6]}},control:{backgroundColor:e.colorScheme==="dark"?e.colors.brand[7]:e.white,color:e.white,border:`1px solid ${e.colorScheme==="dark"?"transparent":e.colors.gray[3]}`,"&:disabled":{borderColor:e.colorScheme==="dark"?"transparent":e.colors.gray[3],opacity:.8,backgroundColor:"transparent"}},input:{textAlign:"center",paddingRight:`${e.spacing.sm}px !important`,paddingLeft:`${e.spacing.sm}px !important`,height:28,flex:1},button:{height:40}}));function Te(p){var u=p,{product:e,min:n=1,max:s=999,buttonLabel:a="Buy now >",buttonLink:r=`/${Ct}`,onButtonClick:o,inputStyles:l,onValueChange:d}=u,c=N(u,["product","min","max","buttonLabel","buttonLink","onButtonClick","inputStyles","onValueChange"]);const[m,f]=h.exports.useState(1),g=he(),x=h.exports.useRef(),D=h.exports.useRef(null),{classes:w,cx:O}=Pr();function Z(){!e||g.addItem(y(_({},e),{quantity:m}))}return i(b,y(_({},c),{className:O(w.wrapper,c.className),children:[i("div",{className:w.controlWrapper,style:l,children:[t(se,{size:28,variant:"transparent",onClick:()=>x.current&&x.current.decrement(),disabled:m===n,className:w.control,onMouseDown:P=>P.preventDefault(),children:t(C.Minus,{size:16})}),t(lt,{variant:"unstyled",min:n,max:s,handlersRef:x,value:m,ref:D,onChange:P=>{d&&P&&d(P),P&&f(P)},classNames:{input:w.input}}),t(se,{size:28,variant:"transparent",onClick:()=>x.current&&x.current.increment(),disabled:m===s,className:w.control,onMouseDown:P=>P.preventDefault(),children:t(C.Plus,{size:16})})]}),t($,{to:r,children:t(q,{color:"brand",className:w.button,onClick:o||Z,children:a})})]}))}const Er=S(e=>({pricetag:{fontWeight:600,fontSize:30,color:e.white}}));function Me({price:e,quantity:n}){const{classes:s}=Er();return t(v,{className:s.pricetag,weight:600,children:e>0?i(H,{children:["$",(e*n).toFixed(2),i(v,{component:"span",color:"dimmed",children:[" ($",e,"/month)"]})]}):""})}function Ar(l){var d=l,{product:e,cardTitle:n=e.name,cardDescription:s=e.description,cardFeatures:a=e.features.map(c=>c.name),cardPrice:r=e.price}=d,o=N(d,["product","cardTitle","cardDescription","cardFeatures","cardPrice"]);const[c,p]=h.exports.useState(1),u=a.map((m,f)=>i(v,{className:G.feature,children:[t(C.Check,{color:"lightgreen"}),m]},f));return t(re,y(_({},o),{className:M(o.className,G.card),children:i(b,{className:G.contentWrapper,children:[t($,{to:`${j(e.category,String(e.id))}`,children:t(v,{className:G.title,children:n})}),t(_e,{className:G.divider}),i(v,{component:"p",children:[" ",s," "]}),t(b,{className:G.features,children:u}),t(_e,{className:G.divider}),t(Me,{price:r,quantity:c}),t(b,{children:t(Te,{product:e,onValueChange:p,buttonLabel:r==0?"Get it now >":void 0,inputStyles:r==0?{display:"none"}:void 0})})]})}))}const Dr="_pricing_51t2e_1",Rr="_categoryTitle_51t2e_7",Tr="_cardsWrapper_51t2e_17";var Y={pricing:Dr,categoryTitle:Rr,cardsWrapper:Tr};const Be=h.exports.createContext({}),Fe=()=>h.exports.useContext(Be);function Mr(s){var a=s,{children:e}=a,n=N(a,["children"]);const r=async c=>(await X(A(z,"products",c))).data(),o=async()=>{const c=fe(z,"products");return(await ye(c)).docs.map(m=>m.data())},l=async c=>{const p=dt(fe(z,"products"),ht("category","==",c));return(await ye(p)).docs.map(f=>f.data())},d=async c=>{ce(A(z,"products",c.id),c)};return t(Be.Provider,y(_({},n),{value:{getProducts:o,getProduct:r,getProductsByCategory:l,setProduct:d},children:t(Wr,{children:e})}))}function we(e){const[n,s]=h.exports.useState([]),{getProducts:a,getProductsByCategory:r}=Fe(),{productCategory:o}=le(),l=d=>{const c={},p=[];d.map((u,m)=>{!c[u.category]&&(c[u.category]=[]),c[u.category].push(t(Ar,{product:_({},u)},m))});for(const u in c)p.push(i(b,{children:[t("div",{className:Y.categoryTitle,children:t(v,{className:Y.categoryTitle,children:u})}),t("div",{className:Y.cardsWrapper,children:c[u]})]},p.length+1));s(p)};return h.exports.useEffect(()=>{o?r(o).then(d=>d&&l(d)):a().then(l)},[]),a(),t("section",y(_({},e),{className:Ie(e.className,Y.pricing),children:n}))}const Br="_h1_p4hmp_12",Fr="_h2_p4hmp_17",Ur="_logo_p4hmp_17",Gr="_h3_p4hmp_22",Or="_h4_p4hmp_27",qr="_h5_p4hmp_32",jr="_h6_p4hmp_37",Hr="_home_p4hmp_48",Kr="_main_p4hmp_48",Qr="_nav_p4hmp_56",Yr="_mainWrapper_p4hmp_60",Xr="_mainSection_p4hmp_70";var B={"page-title":"_page-title_p4hmp_7",h1:Br,h2:Fr,logo:Ur,h3:Gr,h4:Or,h5:qr,h6:jr,"material-icons":"_material-icons_p4hmp_42",home:Hr,main:Kr,nav:Qr,mainWrapper:Yr,mainSection:Xr};const Jr=S(e=>({title:{fontFamily:`Greycliff CF, ${e.fontFamily}`,fontSize:36,fontWeight:600,lineHeight:1.1,marginBottom:e.spacing.md,color:e.colorScheme==="dark"?e.white:e.black},infoColumn:{display:"flex",flexDirection:"column",gap:e.spacing.md}}));function Vr(){const[e,n]=h.exports.useState(1),[s,a]=h.exports.useState(),{getProduct:r}=Fe(),{classes:o}=Jr(),{productId:l}=le();h.exports.useEffect(()=>{l&&r(l).then(c=>{a(c)})},[l]);const d=s==null?void 0:s.features.map(c=>i("div",{children:[t(pt,{size:44,radius:"md",variant:"gradient",gradient:{deg:135,from:"primary",to:"pink"},children:t(C.Flame,{size:26})}),t(v,{size:"lg",mt:"sm",weight:500,children:c.name}),t(v,{color:"dimmed",size:"sm",children:c.description})]},c.name));return t("div",{children:s&&i(ut,{gutter:80,children:[i(ve,{span:12,md:5,className:o.infoColumn,children:[t(J,{className:o.title,order:2,children:s==null?void 0:s.name}),t(v,{color:"dimmed",children:s==null?void 0:s.description}),t(Me,{price:(s==null?void 0:s.price)||0,quantity:e}),t(Te,{product:s,onValueChange:n,buttonLabel:(s==null?void 0:s.price)==0?"Get it now >":void 0,inputStyles:(s==null?void 0:s.price)==0?{display:"none"}:void 0})]}),t(ve,{span:12,md:7,children:t(mt,{cols:2,spacing:30,breakpoints:[{maxWidth:"md",cols:1}],children:d})})]})})}const Zr=S(e=>({wrapper:{display:"flex",flexDirection:"column",marginTop:e.spacing.xl,marginBottom:e.spacing.xl,flexGrow:1},checkoutBtn:{margin:`${e.spacing.xl}px 0 ${e.spacing.xl}px auto`,width:"fit-content"},emptyCartWrapper:{margin:"auto",paddingBottom:e.other.navbarHeight},emptyDescription:{color:e.colors.dark[1],maxWidth:375,textAlign:"center"},smallText:{color:e.colors.dark[1],maxWidth:375,textAlign:"end",margin:`auto 0 ${e.spacing.xl}px auto`}})),es=S(()=>({table:{["tbody tr td"]:{border:"none"}}})),ts={personal:"red",education:"green"};function ns(e){const n=he(),{classes:s,cx:a}=es(),r=n.itemList.map(o=>i("tr",{children:[t("td",{children:i(b,{spacing:"sm",children:[t($,{to:j(o.category,String(o.id)),children:t(v,{size:"sm",weight:500,children:o.name})}),t(gt,{color:ts[o.category.toLowerCase()],variant:"light",children:o.category})]})}),t("td",{children:i(v,{size:"sm",children:["$",o.price]})}),t("td",{children:t(v,{size:"sm",children:o.quantity})}),t("td",{children:i(v,{size:"sm",color:"gray",children:["$",(o.price*o.quantity).toFixed(2)]})}),t("td",{children:t(b,{spacing:0,position:"right",children:t(se,{variant:"filled",color:"red",onClick:()=>n.removeItem(o.id),children:t(C.Trash,{size:16})})})})]},o.name));return t(ie,{children:i(_t,y(_({},e),{verticalSpacing:"sm",className:a(s.table,e.className),children:[t("thead",{children:i("tr",{children:[t("th",{children:"Item"}),t("th",{children:"Price"}),t("th",{children:"Quantity"}),t("th",{children:"Total"}),t("th",{})]})}),t("tbody",{children:r})]}))})}function rs(s){var a=s,{children:e}=a,n=N(a,["children"]);const r=he(),{classes:o,cx:l}=Zr();return i("div",y(_({},n),{className:l(n.className,o.wrapper),children:[e,r.itemList.length>0?i(H,{children:[t(ns,{}),t(q,{color:"brand",className:o.checkoutBtn,children:"Checkout >"}),t(v,{className:o.smallText,children:"*if multiple plans are selected, they will be queued using the most expensive first."})]}):i(b,{position:"center",direction:"column",spacing:"xl",className:o.emptyCartWrapper,children:[t(J,{children:"The cart is empty..."}),t(v,{className:o.emptyDescription,children:"Try adding a plan to the cart and come back, we'll be waiting for you... :-)"}),t($,{to:`/${ze}`,children:t(q,{color:"brand",children:"Go back to pricing >"})})]})]}))}const ss=S(e=>({root:{paddingTop:80,paddingBottom:80},inner:{position:"relative"},backgroundText:{position:"absolute",top:"50%",left:"50%",zIndex:0,transform:"translate(-50%, -50%)",letterSpacing:"1vw",fontSize:["35vw","min(35vw, 500px)"],fontFamily:`Greycliff CF, ${e.fontFamily}`,color:e.colors.dark[6],opacity:.5},content:{paddingTop:220,position:"relative",zIndex:1,[e.fn.smallerThan("sm")]:{paddingTop:120}},title:{textAlign:"center",fontWeight:900,fontSize:38,[e.fn.smallerThan("sm")]:{fontSize:32}},description:{maxWidth:540,margin:"auto",marginTop:e.spacing.xl,marginBottom:e.spacing.xl*1.5}}));function os(){const{classes:e}=ss();return t(V,{className:e.root,children:i("div",{className:e.inner,children:[t(J,{order:2,className:e.backgroundText,children:"404"}),i("div",{className:e.content,children:[t(J,{className:e.title,children:"Nothing to see here"}),t(v,{color:"dimmed",size:"lg",align:"center",className:e.description,children:"Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to another URL. If you think this is an error contact support."}),t(b,{position:"center",children:t($,{to:`/${I}`,children:t(q,{color:"brand",size:"md",children:"Take me back to home page"})})})]})]})})}function as(){const e=ft().pathname,n=t($,{to:`../${I}`,children:t(k,{className:B.logo,style:{visibility:yt(e,`/${I}`)?"hidden":"visible"},color:"",variant:"gradient",gradient:{from:"primary",to:"pink",deg:135},children:"portfol.io"})});return i("div",{className:B.home,children:[t(Gn,{logo:n,className:B.nav}),t(V,{className:B.mainWrapper,sx:s=>({background:s.colors.dark[7]}),px:0,fluid:!0,children:t("main",{className:M("container",B.main),children:i(Le,{children:[t(T,{path:"/",element:t(gr,{className:B.mainSection})}),t(T,{path:"cart",element:t(rs,{})}),t(T,{path:"pricing/",element:t(we,{className:B.mainSection})}),t(T,{path:"pricing/:productCategory",element:t(we,{className:B.mainSection})}),t(T,{path:"pricing/:productCategory/details/:productId",element:t(Vr,{})}),t(T,{path:"*",element:t(os,{})})]})})}),t(ar,{})]})}function cs(){const e=vt();return t(xt,{theme:{colorScheme:"dark",colors:{primary:["#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E"],brand:e.colors.red},white:"#fafaff",black:"#101113",primaryColor:"primary",fontFamily:"Poppins, sans-serif",other:{navbarHeight:"8rem"}},withNormalizeCSS:!0,children:t(Mr,{children:t(V,{px:"0",fluid:!0,children:t(bt,{children:i(Le,{children:[t(T,{path:`${I}/*`,element:t(as,{})}),t(T,{path:`${I}/${oe}`,element:t(ke,{})}),t(T,{path:`${I}/${oe}/:id`,element:t(ke,{})})]})})})})})}kt.render(t(Se.StrictMode,{children:t(cs,{})}),document.getElementById("root"));