var le=Object.defineProperty,de=Object.defineProperties;var he=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var V=(n,t,a)=>t in n?le(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,u=(n,t)=>{for(var a in t||(t={}))X.call(t,a)&&V(n,a,t[a]);if(F)for(var a of F(t))Y.call(t,a)&&V(n,a,t[a]);return n},_=(n,t)=>de(n,he(t));var I=(n,t)=>{var a={};for(var o in n)X.call(n,o)&&t.indexOf(o)<0&&(a[o]=n[o]);if(n!=null&&F)for(var o of F(n))t.indexOf(o)<0&&Y.call(n,o)&&(a[o]=n[o]);return a};import{R as H,a as Q,b as Z,c as $,r as d,j as e,T as pe,d as N,e as i,f as b,g as me,S as re,G as p,N as A,u as ue,P as _e,C as z,A as ge,B as J,F as q,h as oe,i as fe,k as ve,H as be,l as ke,m as we,n as Ne,M as ee,o as h,p as ye,q as xe,s as S,t as Le,L as B,v as K,w as se,D as ne,x as te,y as Se,z as ie,E as j,I as Re,J as $e,K as Ie,O as Ce}from"./vendor.9e06e9d6.js";const Ue=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}};Ue();const C="ch-react-site";var Me=[{created:1648747436063,email:"",id:"0",avatarURL:"",name:"Savlian Matius",occupation:"UI / UX",bannerURL:"https://picsum.photos/seed/0/600/300"},{created:1648747436063,email:"",id:"1",avatarURL:"",name:"Mannimarco",occupation:"Frontend",bannerURL:"https://picsum.photos/seed/1/600/300"},{created:1648747436063,email:"",id:"2",avatarURL:"",name:"Mankar Camoran",occupation:"Backend",bannerURL:"https://picsum.photos/seed/2/600/300"},{created:1648747436063,email:"",id:"3",avatarURL:"",name:"Sheogorath",occupation:"Graphic Design",bannerURL:"https://picsum.photos/seed/3/600/300"},{created:1648747436063,email:"",id:"4",avatarURL:"",name:"Pelinal Whitestrake",occupation:"UI",bannerURL:"https://picsum.photos/seed/4/600/300"},{created:1648747436063,email:"",id:"5",avatarURL:"",name:"St. Alessia",occupation:"UX",bannerURL:"https://picsum.photos/seed/5/600/300"},{created:1648747436063,email:"",id:"6",avatarURL:"",name:"Hermaeus Mora",occupation:"Frontend JS / React",bannerURL:"https://picsum.photos/seed/6/600/300"},{created:1648747436063,email:"",id:"7",avatarURL:"",name:"Adoring Fan",occupation:"Frontend JS / VUE",bannerURL:"https://picsum.photos/seed/7/600/300"},{created:1648747436063,email:"",id:"8",avatarURL:"",name:"Vanus Galerion",occupation:"Frontend JS / Angular",bannerURL:"https://picsum.photos/seed/8/600/300"},{created:1648747436063,email:"",id:"9",avatarURL:"",name:"Lucien Lachance",occupation:"Devops",bannerURL:"https://picsum.photos/seed/9/600/300"},{created:1648747436063,email:"",id:"10",avatarURL:"",name:"Vicente Valtieri",occupation:"Backend JS / Node",bannerURL:"https://picsum.photos/seed/10/600/300"},{created:1648747436063,email:"",id:"11",avatarURL:"",name:"Uriel Septim",occupation:"Backend Go",bannerURL:"https://picsum.photos/seed/11/600/300"},{created:1648747436063,email:"",id:"12",avatarURL:"",name:"Baurus",occupation:"Frontend HTML / CSS",bannerURL:"https://picsum.photos/seed/12/600/300"},{created:1648747436063,email:"",id:"13",avatarURL:"",name:"Macaulay Culkin",occupation:"Copywriting",bannerURL:"https://picsum.photos/seed/13/600/300"},{created:1648747436063,email:"",id:"14",avatarURL:"",name:"Chanandler Bong",occupation:"Branding",bannerURL:"https://picsum.photos/seed/14/600/300"},{created:1648747436063,email:"",id:"15",avatarURL:"",name:"Marito Baracus",occupation:"Graphic Design / Illustration",bannerURL:"https://picsum.photos/seed/15/600/300"},{created:1648747436063,email:"",id:"16",avatarURL:"",name:"Gaspi",occupation:"Frontend JS / Svelte",bannerURL:"https://picsum.photos/seed/16/600/300"},{created:1648747436063,email:"",id:"17",avatarURL:"",name:"july3p",occupation:"Frontend HTML / CSS / Tailwind",bannerURL:"https://picsum.photos/seed/17/600/300"},{created:1648747436063,email:"",id:"18",avatarURL:"",name:"El Maestruli",occupation:"Frontend Bootstrap",bannerURL:"https://picsum.photos/seed/18/600/300"},{created:1648747436063,email:"",id:"19",avatarURL:"",name:"Princess Consuela Banana-Hammock",occupation:"Backend Django",bannerURL:"https://picsum.photos/seed/19/600/300"}];H({key:"CurrentUser",default:{created:Date.now(),email:"",id:"-1",avatarURL:"",name:"",occupation:"Frontend Deloper: JS / React",bannerURL:"https://picsum.photos/600/300"}});const ae=H({key:"ActiveChannel",default:{created:Date.now(),updated:Date.now(),description:"",label:"none",messages:[],type:"user",members:[],id:"-1"}}),O=H({key:"MessageList",default:[]});function Ee(){const n=Q(O),t=Q(ae),a=Z(O),o=Z(ae);return function(r){!r||(a(s=>[...s,{channelId:t.id,id:Date.now().toString(),created:Date.now(),content:r,userId:"User"}]),o(s=>_(u({},s),{messages:n})))}}function We(n){return Me.find(a=>a.id==n)}const Be=$((n,t,a)=>({textInput:{fontWeight:500},inputInner:{maxHeight:"100%","&:focus, &:focus-within":{borderColor:"transparent !important"}},placeholderIcon:{fontWeight:100},form:{width:"100%",height:"fit-content"}})),Fe=n=>(n=n.trim(),n.length<1||n.length>200?(alert("Message must be between 1 and 200 characters."),!1):n);function Ae(n){const t=d.exports.useRef(null),a=Ee(),{classes:o,cx:r}=Be();function s(c){if(!(c.key==="Enter"&&!c.shiftKey)||!t.current)return;const l=Fe(t.current.value);l&&a(l),t.current.value="",c.preventDefault()}return e("form",{action:void 0,className:o.form,children:e(pe,{icon:e(N.Message,{className:o.placeholderIcon}),className:r(n.className,o.textInput),classNames:{input:o.inputInner},placeholder:"Write a message...",onKeyDown:s,autoComplete:"off",ref:t,minRows:1,maxRows:10,autosize:!0})})}const je=$((n,t,a)=>(n.colorScheme,{messageWrapper:{},timestamp:{color:n.colors.dark[3]}}));function De(a){var o=a,{message:n}=o,t=I(o,["message"]);const{classes:r,cx:s}=je(),c=new Date(n.created).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return e("li",_(u({},t),{className:s(r.messageWrapper,t.className),children:i(b,{children:[i("span",{className:r.timestamp,children:[" [",c,"] "]}),n.userId,": ",t.children]})}))}const Te=$((n,t,a)=>({viewport:{color:n.colors.dark[0],["& > *"]:{height:"100%",paddingBottom:5}},messages:{display:"flex",flexDirection:"column",justifyContent:"flex-end",height:"100%"}}));function Pe(n){const[t]=me(O),a=d.exports.useRef(null),{classes:o}=Te();d.exports.useEffect(()=>{a.current&&a.current.scrollBy(0,999)},[t]);const r=t.map((s,c)=>e(De,{message:s,children:s.content},c));return e(re,_(u({},n),{viewportRef:a,classNames:{viewport:o.viewport},children:e("ol",{className:o.messages,children:r.length>0?r:e("li",{children:"This is where I would put my messages... if I had any!!"})})}))}const ze=$(n=>{const t=n.spacing.md;return{channel:{flexDirection:"column",padding:t,height:"100%"},messagesWindow:{width:"100%",height:0,flexGrow:1,paddingRight:t},scrollRoot:{marginRight:-t}}});function Oe(n){const{classes:t,cx:a}=ze();return i(p,_(u({},n),{className:a(t.channel,n.className),children:[e(Pe,{classNames:{root:t.scrollRoot},className:t.messagesWindow}),e(Ae,{})]}))}async function Ge(){return fetch("https://api.jsonbin.io/b/6244cf1ad96a510f028d0a38/3").then(t=>t.json()).then(t=>(t.USERS.forEach(a=>{Object.assign(a,{icon:N.User})}),t.TEAMS.forEach(a=>{Object.assign(a,{icon:N.Users})}),t))}let U,G,T;const He=$(n=>{const t=n.colorScheme==="dark";return T=`1px solid ${t?n.colors.dark[4]:n.colors.gray[2]}`,U=n.spacing.md,G=-U*.85,{navbar:{backgroundColor:t?n.colors.dark[6]:n.white,padding:U,height:"100%",width:256},header:{paddingBottom:U,borderBottom:T,marginBottom:U},title:{textTransform:"uppercase",letterSpacing:-.25},footer:{paddingTop:U,marginTop:U,borderTop:T},scrollArea:{marginRight:G},scrollbar:{["&:hover"]:{backgroundColor:"transparent"}}}});function Je(s){var c=s,{footer:n,header:t,subheader:a,children:o}=c,r=I(c,["footer","header","subheader","children"]);const{classes:l,cx:m}=He();return i(A,_(u({},r),{className:m(l.navbar,r.className),children:[i(A.Section,{children:[t&&i(p,{className:l.header,position:"apart",children:[" ",t," "]}),a]}),e(A.Section,{classNames:{scrollbar:l.scrollbar},className:l.scrollArea,component:re,scrollbarSize:5,grow:!0,children:o}),n&&i(A.Section,{className:l.footer,children:[" ",n," "]})]}))}const qe=$((n,t,a)=>({sidenav:{backgroundColor:n.colorScheme==="dark"?n.colors.dark[7]:n.colors.gray[0]},links:{marginRight:-G},controls:{ref:a("controls"),width:"100%"},controlsActive:{backgroundColor:n.fn.rgba(n.colors.brand[7],.9),color:n.black},controlsLabel:{padding:8,fontWeight:600}})),Ke=$((n,t,a)=>{const o=n.colorScheme==="dark",r=a("icon"),s=o?n.colors.dark[6]:n.colors.gray[0],c=o?n.fn.rgba(n.colors.dark[3],.25):n.colors[n.primaryColor][0],l=n.colors.brand[o?6:7];return{link:_(u({},n.fn.focusStyles()),{display:"flex",alignItems:"center",textDecoration:"none",fontSize:n.fontSizes.sm,color:o?n.colors.dark[1]:n.colors.gray[7],padding:`${n.spacing.xs}px ${n.spacing.sm}px`,margin:"4px 0",borderRadius:n.radius.sm,fontWeight:500,lineHeight:1.5,"&:hover":{backgroundColor:s,color:o?n.white:n.black,[`& .${r}`]:{color:o?n.white:n.black}}}),linkIcon:{ref:r,color:o?n.colors.dark[2]:n.colors.gray[6],marginRight:n.spacing.sm},linkActive:{backgroundColor:c,"&, &:hover":{color:o?n.white:n.colors.brand[7],[`& .${r}`]:{color:l}}},textWrapper:{whiteSpace:"nowrap",width:0,flexGrow:1,overflow:"hidden",textOverflow:"ellipsis"}}});function Ve(c){var l=c,{children:n,activeLink:t,label:a,link:o="#!",icon:r}=l,s=I(l,["children","activeLink","label","link","icon"]);const{classes:m,cx:g}=Ke();return i("a",_(u({},s),{className:g(m.link,s.className,{[m.linkActive]:a===t}),href:o,children:[r&&e(r,{className:m.linkIcon}),e("div",{className:m.textWrapper,children:e("span",{children:n||a})})]}))}const Xe=$(n=>({card:{backgroundColor:n.colorScheme==="dark"?n.colors.dark[7]:n.white,width:250},avatar:{border:`2px solid ${n.colorScheme==="dark"?n.colors.dark[7]:n.white}`}}));function Ye(l){var m=l,{avatar:n,banner:t,name:a,occupation:o,stats:r,parent:s}=m,c=I(m,["avatar","banner","name","occupation","stats","parent"]);const{classes:g,theme:R,cx:y}=Xe(),[f,k]=d.exports.useState(!1);ue("wheel",()=>k(!1));function D(W){W.preventDefault(),W.stopPropagation(),k(!0)}const ce=r&&r.map(W=>i("div",{children:[e(b,{align:"center",size:"lg",weight:500,children:W.value}),e(b,{align:"center",size:"sm",color:"dimmed",children:W.label})]},W.label));return e(_e,{opened:f,target:e("div",{onContextMenu:D,children:s}),position:"right",placement:"end",styles:{inner:{padding:0},body:{border:"none"},root:{display:"block"}},onClose:()=>k(!1),children:i(z,_(u({},c),{withBorder:!0,p:"xl",radius:"md",className:y(g.card,c.className),children:[e(z.Section,{sx:{backgroundImage:`url(${t})`,height:140}}),e(ge,{src:n,size:80,radius:80,mx:"auto",mt:-30,className:g.avatar}),i(b,{align:"center",size:"lg",weight:500,mt:"sm",children:[" ",a," "]}),i(b,{align:"center",size:"sm",color:"dimmed",children:[" ",o," "]}),i(p,{mt:"md",position:"center",spacing:30,children:[" ",ce," "]}),e(J,{fullWidth:!0,radius:"md",mt:"xl",size:"md",color:R.colorScheme==="dark"?void 0:"dark",children:"Send message"})]}))})}function Qe(o){var r=o,{membersId:n,label:t}=r,a=I(r,["membersId","label"]);const s=We(n[0]);return e(q,{children:e(Ye,{parent:e(Ve,_(u({},a),{label:t})),avatar:s==null?void 0:s.avatarURL,banner:s==null?void 0:s.bannerURL,name:s==null?void 0:s.name,occupation:s==null?void 0:s.occupation})})}function Ze(n){const{classes:t,cx:a}=qe(),[o,r]=d.exports.useState({}),[s]=d.exports.useState(""),[c,l]=d.exports.useState([]),[m,g]=d.exports.useState([e(oe.Fragment,{},"")]),[R,y]=d.exports.useState("");return d.exports.useEffect(()=>{setTimeout(()=>{Ge().then(f=>{r(f)})},2e3)},[]),d.exports.useEffect(()=>{const f=Object.keys(o);f.length<1||(l(f.map(k=>({label:k,value:k}))),y(f[0]))},[o]),d.exports.useEffect(()=>{R&&g(o[R].map((f,k)=>d.exports.createElement(Qe,_(u({},f),{key:k,activeLink:s,icon:f.icon,membersId:f.members}))))},[R]),e(Je,_(u({},n),{className:a(t.sidenav,n.className),header:i(p,{children:[e(N.Messages,{}),"Inbox"]}),subheader:c.length>1&&e(fe,{className:t.controls,children:e(ve,{classNames:{label:t.controlsLabel,active:t.controlsActive},transitionTimingFunction:"ease",onChange:y,value:R,data:c,fullWidth:!0})}),children:i("div",{className:t.links,children:[" ",m," "]})}))}const en=$((n,t,a)=>{const o=n.colorScheme==="dark";return{header:{},root:{position:"relative",display:"flex",flexDirection:"column",height:"100vh",backgroundColor:o?n.colors.dark[6]:n.colors.gray[5]},body:{height:0,flexGrow:1},main:{padding:0},channel:{height:"100%",flexDirection:"column",alignContent:"start",justifyContent:"start"}}});function nn(){const{classes:n}=en(),t=e(be,{className:n.header,height:32});return e(ke,{children:e(we,{navbar:e(Ze,{}),header:t,classNames:{root:n.root,body:n.body,main:n.main},children:e(Oe,{})})})}function tn(a){var o=a,{textColor:n}=o,t=I(o,["textColor"]);const[r]=d.exports.useState(3),s=r<1?"none":"";return d.exports.useEffect(()=>{setTimeout(()=>{window.scrollBy(0,1)},0)},[]),e(Ne,_(u({label:i(p,{sx:{gap:1,alignItems:"flex-start"},children:[r," ",e(N.Message,{size:20})]}),color:"primary",position:"right",placement:"center",gutter:7.5,arrowSize:3,withArrow:!0,withinPortal:!1,opened:!0,styles:{body:{color:n||"white",padding:"3px 6px",transform:"translateY(-10%)",display:s},arrow:{display:s}}},t),{children:t.children}))}const an="_h1_1doph_12",rn="_h2_1doph_17",on="_h3_1doph_22",sn="_h4_1doph_27",cn="_h5_1doph_32",ln="_h6_1doph_37",dn="_menuItemIcon_1doph_42",hn="_container_1doph_84",pn="_nav_1doph_84",mn="_link_1doph_114",un="_muted_1doph_127",_n="_navWrapper_1doph_131",gn="_burger_1doph_137",fn="_content_1doph_142",vn="_logo_1doph_147",bn="_linkList_1doph_151",kn="_open_1doph_214",wn="_dropDownMenu_1doph_219",Nn="_itemListContainer_1doph_229",yn="_itemList_1doph_229";var M={"page-title":"_page-title_1doph_7",h1:an,h2:rn,h3:on,h4:sn,h5:cn,h6:ln,"material-icons":"_material-icons_1doph_42",menuItemIcon:dn,"hide-sm-up":"_hide-sm-up_1doph_73","hide-sm-down":"_hide-sm-down_1doph_79",container:hn,nav:pn,"light-hover-primary":"_light-hover-primary_1doph_114",link:mn,"v-center":"_v-center_1doph_121",muted:un,navWrapper:_n,burger:gn,content:fn,logo:vn,linkList:bn,open:kn,dropDownMenu:wn,itemListContainer:Nn,itemList:yn};function xn({title:n,items:t}){const a=t.map((r,s)=>e(ee.Item,{icon:r.materialIcon?i("i",{className:M.menuItemIcon,children:[" ",r.materialIcon," "]}):"",component:"a",href:r.href||"#!",children:r.content},s)),o=t.map((r,s)=>i("li",{children:[r.materialIcon?i("i",{className:"material-icons",children:[" ",r.materialIcon," "]}):"",e(h,{className:M.link,children:r.content||"#!"})]},s));return i(q,{children:[e(ee,{className:M.dropDownMenu,trigger:"hover",delay:250,size:"sm",control:i(h,{className:M.link,children:[n," ",e("i",{className:"material-icons",children:"arrow_drop_down"})]}),children:a}),i("div",{className:M.itemListContainer,children:[e(h,{className:M.link,children:n}),e("ul",{className:M.itemList,children:o})]})]})}const Ln="_h1_wi3he_12",Sn="_h2_wi3he_17",Rn="_h3_wi3he_22",$n="_h4_wi3he_27",In="_h5_wi3he_32",Cn="_h6_wi3he_37",Un="_container_wi3he_84",Mn="_nav_wi3he_84",En="_link_wi3he_114",Wn="_muted_wi3he_127",Bn="_navWrapper_wi3he_131",Fn="_burger_wi3he_137",An="_content_wi3he_142",jn="_logo_wi3he_147",Dn="_linkList_wi3he_151",Tn="_open_wi3he_214";var x={"page-title":"_page-title_wi3he_7",h1:Ln,h2:Sn,h3:Rn,h4:$n,h5:In,h6:Cn,"material-icons":"_material-icons_wi3he_42","hide-sm-up":"_hide-sm-up_wi3he_73","hide-sm-down":"_hide-sm-down_wi3he_79",container:Un,nav:Mn,"light-hover-primary":"_light-hover-primary_wi3he_114",link:En,"v-center":"_v-center_wi3he_121",muted:Wn,navWrapper:Bn,burger:Fn,content:An,logo:jn,linkList:Dn,open:Tn};function Pn({logo:n,className:t}){const[a,o]=d.exports.useState(!1),[,r]=ye(),s=xe(()=>m()),c=a?"Close navigation":"Open navigation";function l(){r(g=>!g),o(g=>!g)}function m(){a&&l()}return i("div",{className:S(x.navWrapper,t),ref:s,children:[e(Le,{className:x.burger,opened:a,onClick:()=>l(),title:c}),e("nav",{className:S(x.nav,a?x.open:"",n?x.withLogo:""),children:i(p,{className:x.content,children:[e("div",{className:x.logo,children:n}),i("ul",{className:x.linkList,children:[e("li",{children:e(tn,{children:e(h,{className:x.link,children:e(B,{to:`/${C}/chat`,children:" Go to App "})})})}),e("li",{children:e(B,{to:`/${C}/pricing`,children:e(xn,{title:"Pricing",items:[{content:"Free",materialIcon:"favorite"},{content:"Pro",materialIcon:"star_rate"},{content:"Pro+",materialIcon:"hotel_class"}]})})}),e("li",{children:e(h,{className:x.link,children:"About"})})]})]})})]})}const zn="_h1_15jpk_12",On="_h2_15jpk_17",Gn="_h3_15jpk_22",Hn="_h4_15jpk_27",Jn="_h5_15jpk_32",qn="_h6_15jpk_37",Kn="_container_15jpk_84",Vn="_footer_15jpk_114",Xn="_muted_15jpk_127",Yn="_contentWrapper_15jpk_131",Qn="_content_15jpk_131",Zn="_header_15jpk_151",et="_social_15jpk_156",nt="_socialIcon_15jpk_162",tt="_links_15jpk_166",at="_author_15jpk_186";var v={"page-title":"_page-title_15jpk_7",h1:zn,h2:On,h3:Gn,h4:Hn,h5:Jn,h6:qn,"material-icons":"_material-icons_15jpk_42","hide-sm-up":"_hide-sm-up_15jpk_73","hide-sm-down":"_hide-sm-down_15jpk_79",container:Kn,"light-hover-primary":"_light-hover-primary_15jpk_114",footer:Vn,"v-center":"_v-center_15jpk_121",muted:Xn,contentWrapper:Yn,content:Qn,header:Zn,social:et,socialIcon:nt,links:tt,author:at};function rt(){return e("footer",{className:v.footer,children:e("div",{className:v.contentWrapper,children:i(K,{className:S("container",v.content),children:[e(p,{className:v.author,align:"center",children:e(h,{href:"https://github.com/notSagyo",children:"\xA9 Boris Stecko - 2022"})}),e(p,{className:v.social,align:"center",children:i("ul",{children:[e("li",{children:e(h,{className:v.socialIcon,children:e(N.Mail,{})})}),e("li",{children:e(h,{className:v.socialIcon,children:e(N.BrandTelegram,{})})}),e("li",{children:e(h,{className:v.socialIcon,children:e(N.BrandTwitter,{})})}),e("li",{children:e(h,{className:v.socialIcon,children:e(N.BrandFacebook,{})})}),e("li",{children:e(h,{className:v.socialIcon,children:e(N.BrandInstagram,{})})})]})}),e(p,{className:v.links,align:"center",children:i(p,{align:"start",children:[i("ul",{children:[e("li",{children:e(b,{className:v.header,children:"Pricing"})}),e("li",{children:e(B,{to:`/${C}/pricing`,children:e(h,{children:"Free"})})}),e("li",{children:e(B,{to:`/${C}/pricing`,children:e(h,{children:"Pro"})})}),e("li",{children:e(B,{to:`/${C}/pricing`,children:e(h,{children:"Pro+"})})})]}),i("ul",{children:[e("li",{children:e(b,{className:v.header,children:"Info"})}),e("li",{children:e(h,{children:"Contact"})}),e("li",{children:e(h,{children:"Legal"})}),e("li",{children:e(h,{children:"About"})})]})]})})]})})})}const ot="_title_1oh9x_1",st="_subtitle_1oh9x_1",it="_info_1oh9x_26",ct="_fadeIn_1oh9x_38",lt="_buttons_1oh9x_51";var w={title:ot,subtitle:st,info:it,fadeIn:ct,"fade-in":"_fade-in_1oh9x_1",buttons:lt};function dt(){return i(p,{className:w.hero,direction:"column",sx:{gap:"2rem"},children:[i(p,{children:[i("h1",{className:S(w.title,w.fadeIn),children:["Welcome to",e(b,{component:"span",className:w.brand,variant:"gradient",gradient:{from:"primary",to:"pink",deg:135},inherit:!0,children:" portfol.io "})]}),e("h2",{className:S(w.subtitle,w.fadeIn),children:"Connect, create, practice, learn, grow."})]}),e(p,{children:i("h3",{className:S(w.info,w.fadeIn),children:["Connect with people",e("em",{className:w.infoStrong,children:" just like you"}),". Learn to work as part of a team.",e("br",{}),"Get first hand experience and show off the result in your portfolio."]})}),e(p,{className:S(w.buttons,w.fadeIn),children:e(B,{to:`/${C}/chat`,children:e(J,{size:"xl",variant:"gradient",radius:"lg",gradient:{from:"base",to:"pink",deg:135},children:"Open app"})})})]})}const ht="_hero_e9kzz_1";var pt={hero:ht};function mt(n){return e("section",_(u({},n),{className:se(n.className,pt.hero),children:e(dt,{})}))}const ut="_h1_2tdb9_12",_t="_h2_2tdb9_17",gt="_h3_2tdb9_22",ft="_h4_2tdb9_27",vt="_title_2tdb9_27",bt="_price_2tdb9_27",kt="_h5_2tdb9_32",wt="_h6_2tdb9_37",Nt="_container_2tdb9_84",yt="_muted_2tdb9_127",xt="_priceInterval_2tdb9_127",Lt="_card_2tdb9_131",St="_contentWrapper_2tdb9_150",Rt="_features_2tdb9_163",$t="_feature_2tdb9_163",It="_divider_2tdb9_177";var L={"page-title":"_page-title_2tdb9_7",h1:ut,h2:_t,h3:gt,h4:ft,title:vt,price:bt,h5:kt,h6:wt,"material-icons":"_material-icons_2tdb9_42","hide-sm-up":"_hide-sm-up_2tdb9_73","hide-sm-down":"_hide-sm-down_2tdb9_79",container:Nt,"light-hover-primary":"_light-hover-primary_2tdb9_114","v-center":"_v-center_2tdb9_121",muted:yt,priceInterval:xt,card:Lt,contentWrapper:St,features:Rt,feature:$t,divider:It};function P(s){var c=s,{cardTitle:n,cardDescription:t,cardFeatures:a,cardPrice:o}=c,r=I(c,["cardTitle","cardDescription","cardFeatures","cardPrice"]);const[l,m]=d.exports.useState(1),[g,R]=d.exports.useState("month"),y=d.exports.useRef(),f=a.map((k,D)=>i(b,{className:L.feature,children:[e(N.Check,{color:"lightgreen"}),k]},D));return d.exports.useEffect(()=>{l>=12?(R("year"),g==="month"&&m(1)):l==0&&g==="year"&&(R("month"),m(11))},[l]),e(z,_(u({},r),{className:S(r.className,L.card),children:i(p,{className:L.contentWrapper,children:[e(b,{className:L.title,children:n}),e(ne,{className:L.divider}),i(b,{className:L.description,component:"p",children:[" ",t," "]}),e(p,{className:L.features,children:f}),e(ne,{className:L.divider}),e(b,{className:L.price,children:o>0?i(q,{children:["$"+(g==="month"?o:o*12),i(b,{className:L.priceInterval,component:"span",children:[" /",g]})]}):""}),o>0&&i(p,{children:[i(p,{children:[e(te,{size:36,variant:"default",onClick:()=>y.current&&y.current.decrement(),children:" \u2013 "}),e(Se,{hideControls:!0,value:l,onChange:k=>m(k),handlersRef:y,min:0,step:1,styles:{input:{width:54,textAlign:"center"}}}),e(te,{size:36,variant:"default",onClick:()=>y.current&&y.current.increment(),children:" + "})]}),e(J,{children:"Buy now >"})]})]})}))}const Ct="_pricing_v6spx_1";var Ut={pricing:Ct};function Mt(n){return i("section",_(u({},n),{className:se(n.className,Ut.pricing),children:[e(P,{cardTitle:"Free",cardDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu odio congue, egestas est ac, eleifend urna.",cardFeatures:["Is free","Costs no money","Free x 100 = Free"],cardPrice:0}),e(P,{cardTitle:"Pro",cardDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu odio congue, egestas est ac, eleifend urna. Aenean scelerisque luctus faucibus.",cardFeatures:["Has good stuff","Stuff is good","You're a good person"],cardPrice:9.99}),e(P,{cardTitle:"Pro+",cardDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu odio congue, egestas est ac, eleifend urna. Aenean scelerisque luctus faucibus. Integer rutrum tellus in eros efficitur.",cardFeatures:["Goated","Best stuff no cap","Walks your dog","Loved by Jennifer Aniston"],cardPrice:19.99})]}))}const Et="_h1_p4hmp_12",Wt="_h2_p4hmp_17",Bt="_logo_p4hmp_17",Ft="_h3_p4hmp_22",At="_h4_p4hmp_27",jt="_h5_p4hmp_32",Dt="_h6_p4hmp_37",Tt="_home_p4hmp_48",Pt="_main_p4hmp_48",zt="_nav_p4hmp_56",Ot="_mainWrapper_p4hmp_60",Gt="_mainSection_p4hmp_70";var E={"page-title":"_page-title_p4hmp_7",h1:Et,h2:Wt,logo:Bt,h3:Ft,h4:At,h5:jt,h6:Dt,"material-icons":"_material-icons_p4hmp_42",home:Tt,main:Pt,nav:zt,mainWrapper:Ot,mainSection:Gt};function Ht(){const n=e(h,{className:S("hide-sm-up",E.logo),color:"",variant:"gradient",gradient:{from:"primary",to:"pink",deg:135},children:"portfol.io"});return i("div",{className:E.home,children:[e(Pn,{logo:n,className:E.nav}),e(K,{className:E.mainWrapper,sx:t=>({background:t.colors.dark[7]}),px:0,fluid:!0,children:e("main",{className:S("container",E.main),children:i(ie,{children:[e(j,{path:"/",element:e(mt,{className:E.mainSection})}),e(j,{path:"pricing",element:e(Mt,{className:E.mainSection})})]})})}),e(rt,{})]})}function Jt(){const n=Re();return e($e,{theme:{colorScheme:"dark",colors:{primary:["#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E"],brand:n.colors.red},white:"#fafaff",black:"#101113",primaryColor:"primary",fontFamily:"Poppins, sans-serif"},withNormalizeCSS:!0,children:e(K,{px:"0",fluid:!0,children:e(Ie,{children:i(ie,{children:[e(j,{path:`${C}/*`,element:e(Ht,{})}),e(j,{path:`${C}/chat`,element:e(nn,{})})]})})})})}Ce.render(e(oe.StrictMode,{children:e(Jt,{})}),document.getElementById("root"));
