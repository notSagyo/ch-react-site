var de=Object.defineProperty,he=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var Q=(e,t,a)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))V.call(t,a)&&Q(e,a,t[a]);if(W)for(var a of W(t))X.call(t,a)&&Q(e,a,t[a]);return e},f=(e,t)=>he(e,pe(t));var N=(e,t)=>{var a={};for(var o in e)V.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&W)for(var o of W(e))t.indexOf(o)<0&&X.call(e,o)&&(a[o]=e[o]);return a};import{d as b,R as te,a as ue,b as B,c as $,r as u,j as n,T as me,e as i,f as x,S as ae,u as _e,G as _,L as ge,g as C,h as fe,P as ve,C as z,A as ke,B as J,F as q,N as F,i as re,k as be,H as xe,l as ye,m as we,n as Ne,M as Y,o as m,p as Se,q as Le,s as R,t as $e,v as K,w as oe,x as Z,y as Re,D as ee,z as Ce,E as Ie,I as se,J as A,K as Ue,O as je,Q as Me,U as Ee}from"./vendor.c51d37eb.js";const Ae=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}};Ae();const y="ch-react-site",G="chat",We=`${y}/${G}`,Fe="cart";function Be(e){return!(Object.keys(e).length>0)}var De=[{created:1648747436063,email:"",id:0,avatarURL:"",name:"Savlian Matius",occupation:"UI / UX",bannerURL:"https://picsum.photos/seed/0/600/300"},{created:1648747436063,email:"",id:1,avatarURL:"",name:"Mannimarco",occupation:"Frontend",bannerURL:"https://picsum.photos/seed/1/600/300"},{created:1648747436063,email:"",id:2,avatarURL:"",name:"Mankar Camoran",occupation:"Backend",bannerURL:"https://picsum.photos/seed/2/600/300"},{created:1648747436063,email:"",id:3,avatarURL:"",name:"Sheogorath",occupation:"Graphic Design",bannerURL:"https://picsum.photos/seed/3/600/300"},{created:1648747436063,email:"",id:4,avatarURL:"",name:"Pelinal Whitestrake",occupation:"UI",bannerURL:"https://picsum.photos/seed/4/600/300"},{created:1648747436063,email:"",id:5,avatarURL:"",name:"St. Alessia",occupation:"UX",bannerURL:"https://picsum.photos/seed/5/600/300"},{created:1648747436063,email:"",id:6,avatarURL:"",name:"Hermaeus Mora",occupation:"Frontend JS / React",bannerURL:"https://picsum.photos/seed/6/600/300"},{created:1648747436063,email:"",id:7,avatarURL:"",name:"Adoring Fan",occupation:"Frontend JS / VUE",bannerURL:"https://picsum.photos/seed/7/600/300"},{created:1648747436063,email:"",id:8,avatarURL:"",name:"Vanus Galerion",occupation:"Frontend JS / Angular",bannerURL:"https://picsum.photos/seed/8/600/300"},{created:1648747436063,email:"",id:9,avatarURL:"",name:"Lucien Lachance",occupation:"Devops",bannerURL:"https://picsum.photos/seed/9/600/300"},{created:1648747436063,email:"",id:10,avatarURL:"",name:"Vicente Valtieri",occupation:"Backend JS / Node",bannerURL:"https://picsum.photos/seed/10/600/300"},{created:1648747436063,email:"",id:11,avatarURL:"",name:"Uriel Septim",occupation:"Backend Go",bannerURL:"https://picsum.photos/seed/11/600/300"},{created:1648747436063,email:"",id:12,avatarURL:"",name:"Baurus",occupation:"Frontend HTML / CSS",bannerURL:"https://picsum.photos/seed/12/600/300"},{created:1648747436063,email:"",id:13,avatarURL:"",name:"Macaulay Culkin",occupation:"Copywriting",bannerURL:"https://picsum.photos/seed/13/600/300"},{created:1648747436063,email:"",id:14,avatarURL:"",name:"Chanandler Bong",occupation:"Branding",bannerURL:"https://picsum.photos/seed/14/600/300"},{created:1648747436063,email:"",id:15,avatarURL:"",name:"Marito Baracus",occupation:"Graphic Design / Illustration",bannerURL:"https://picsum.photos/seed/15/600/300"},{created:1648747436063,email:"",id:16,avatarURL:"",name:"Gaspi",occupation:"Frontend JS / Svelte",bannerURL:"https://picsum.photos/seed/16/600/300"},{created:1648747436063,email:"",id:17,avatarURL:"",name:"july3p",occupation:"Frontend HTML / CSS / Tailwind",bannerURL:"https://picsum.photos/seed/17/600/300"},{created:1648747436063,email:"",id:18,avatarURL:"",name:"El Maestruli",occupation:"Frontend Bootstrap",bannerURL:"https://picsum.photos/seed/18/600/300"},{created:1648747436063,email:"",id:19,avatarURL:"",name:"Princess Consuela Banana-Hammock",occupation:"Backend Django",bannerURL:"https://picsum.photos/seed/19/600/300"}];async function ie(){return fetch("https://api.jsonbin.io/b/6244cf1ad96a510f028d0a38/5").then(t=>t.json()).then(t=>(t.USERS.forEach(a=>{Object.assign(a,{icon:b.User})}),t.TEAMS.forEach(a=>{Object.assign(a,{icon:b.Users})}),t))}async function Pe(e){const t=await ie();let a;for(const o in t){const r=t[o];if(Array.isArray(r)&&(a=r.find(s=>(s==null?void 0:s.id)==e)),a)break}return a}const Te=te({key:"CurrentUser",default:{created:Date.now(),email:"",id:-10,avatarURL:"",name:"",occupation:"Frontend Deloper: JS / React",bannerURL:"https://picsum.photos/600/300"}}),D=te({key:"ActiveChannel",default:{created:Date.now(),updated:Date.now(),description:"",label:"none",messages:[],type:"user",members:[],id:"-1"},effects:[({onSet:e})=>{e(t=>{localStorage.setItem(t.id,JSON.stringify(t))})}]});function Oe(){const[e,t]=B(D);return function(a){if(!a)return;const o={channelId:e.id,id:Date.now().toString(),created:Date.now(),content:a,userId:"User"};t(r=>f(g({},r),{messages:[...r.messages,o]}))}}function ze(){const e=ue(D);return async function(t){const a=await Pe(t);if(a){e(a);const o=JSON.parse(localStorage.getItem(t)||"{}");Be(o)||e(o)}}}function Ge(e){return De.find(a=>a.id===e)}const He=$(()=>({textInput:{fontWeight:500},inputInner:{maxHeight:"100%","&:focus, &:focus-within":{borderColor:"transparent !important"}},placeholderIcon:{fontWeight:100},form:{width:"100%",height:"fit-content"}})),Je=e=>(e=e.trim(),e.length<1||e.length>200?(alert("Message must be between 1 and 200 characters."),!1):e);function qe(e){const t=u.exports.useRef(null),a=Oe(),{classes:o,cx:r}=He();function s(c){if(!(c.key==="Enter"&&!c.shiftKey)||!t.current)return;const l=Je(t.current.value);l&&a(l),t.current.value="",c.preventDefault()}return n("form",{action:void 0,className:o.form,children:n(me,{icon:n(b.Message,{className:o.placeholderIcon}),className:r(e.className,o.textInput),classNames:{input:o.inputInner},placeholder:"Write a message...",onKeyDown:s,autoComplete:"off",ref:t,minRows:1,maxRows:10,autosize:!0})})}const Ke=$(e=>({messageWrapper:{},timestamp:{color:e.colors.dark[3]}}));function Qe(a){var o=a,{message:e}=o,t=N(o,["message"]);const{classes:r,cx:s}=Ke(),c=new Date(e.created).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return n("li",f(g({},t),{className:s(r.messageWrapper,t.className),children:i(x,{children:[i("span",{className:r.timestamp,children:[" [",c,"] "]}),e.userId,": ",t.children]})}))}const Ve=$(e=>({viewport:{color:e.colors.dark[0],["& > *"]:{height:"100%",paddingBottom:5}},messages:{display:"flex",flexDirection:"column",justifyContent:"flex-end",height:"100%"}}));function Xe(a){var o=a,{children:e}=o,t=N(o,["children"]);const[r]=B(D),s=u.exports.useRef(null),{classes:c}=Ve();u.exports.useEffect(()=>{s.current&&s.current.scrollBy(0,999)},[r]);const l=r.messages.map((p,d)=>n(Qe,{message:p,children:p.content},d));return i(ae,f(g({},t),{viewportRef:s,classNames:{viewport:c.viewport},children:[e,n("ol",{className:c.messages,children:l.length>0?l:n("li",{children:"This is where I would put my messages... if I had any!!"})})]}))}const Ye=$(e=>{const t=e.spacing.md;return{channel:{flexDirection:"column",padding:t,height:"100%"},messagesWindow:{width:"100%",height:0,flexGrow:1,paddingRight:t},scrollRoot:{marginRight:-t}}});function Ze(e){const[t,a]=u.exports.useState(!0),o=ze(),{classes:r,cx:s}=Ye(),{id:c}=_e();return u.exports.useEffect(()=>{c?(a(!0),o(c).then(()=>a(!1))):a(!1)},[c]),i(_,f(g({},e),{className:s(r.channel,e.className),children:[n(Xe,{className:r.messagesWindow,classNames:{root:r.scrollRoot},children:n(ge,{visible:t,radius:"sm"})}),n(qe,{})]}))}const en=$((e,t,a)=>{const o=e.colorScheme==="dark",r=a("icon"),s=o?e.colors.dark[6]:e.colors.gray[0],c=o?e.fn.rgba(e.colors.dark[3],.25):e.colors[e.primaryColor][0],l=e.colors.brand[o?6:7];return{link:f(g({},e.fn.focusStyles()),{display:"flex",alignItems:"center",textDecoration:"none",fontSize:e.fontSizes.sm,color:o?e.colors.dark[1]:e.colors.gray[7],padding:`${e.spacing.xs}px ${e.spacing.sm}px`,margin:"4px 0",borderRadius:e.radius.sm,fontWeight:500,lineHeight:1.5,"&:hover":{backgroundColor:s,color:o?e.white:e.black,[`& .${r}`]:{color:o?e.white:e.black}}}),linkIcon:{ref:r,color:o?e.colors.dark[2]:e.colors.gray[6],marginRight:e.spacing.sm},linkActive:{backgroundColor:c,"&, &:hover":{color:o?e.white:e.colors.brand[7],[`& .${r}`]:{color:l}}},textWrapper:{whiteSpace:"nowrap",width:0,flexGrow:1,overflow:"hidden",textOverflow:"ellipsis"}}});function nn(l){var p=l,{linkId:e,children:t,activeLink:a,label:o,link:r="",icon:s}=p,c=N(p,["linkId","children","activeLink","label","link","icon"]);const{classes:d,cx:v}=en();return i(C,f(g({},c),{className:v(d.link,c.className,{[d.linkActive]:e===a}),to:r,children:[s&&n(s,{className:d.linkIcon}),n("div",{className:d.textWrapper,children:n("span",{children:t||o})})]}))}const tn=$(e=>({card:{backgroundColor:e.colorScheme==="dark"?e.colors.dark[7]:e.white,width:250},avatar:{border:`2px solid ${e.colorScheme==="dark"?e.colors.dark[7]:e.white}`}}));function an(l){var p=l,{avatar:e,banner:t,name:a,occupation:o,stats:r,parent:s}=p,c=N(p,["avatar","banner","name","occupation","stats","parent"]);const{classes:d,theme:v,cx:h}=tn(),[I,P]=u.exports.useState(!1);fe("wheel",()=>P(!1));function ce(E){E.preventDefault(),E.stopPropagation(),P(!0)}const le=r&&r.map(E=>i("div",{children:[n(x,{align:"center",size:"lg",weight:500,children:E.value}),n(x,{align:"center",size:"sm",color:"dimmed",children:E.label})]},E.label));return n(ve,{opened:I,target:n("div",{onContextMenu:ce,children:s}),position:"right",placement:"end",styles:{inner:{padding:0},body:{border:"none"},root:{display:"block"}},onClose:()=>P(!1),children:i(z,f(g({},c),{withBorder:!0,p:"xl",radius:"md",className:h(d.card,c.className),children:[n(z.Section,{sx:{backgroundImage:`url(${t})`,height:140}}),n(ke,{src:e,size:80,radius:80,mx:"auto",mt:-30,className:d.avatar}),i(x,{align:"center",size:"lg",weight:500,mt:"sm",children:[" ",a," "]}),i(x,{align:"center",size:"sm",color:"dimmed",children:[" ",o," "]}),i(_,{mt:"md",position:"center",spacing:30,children:[" ",le," "]}),n(J,{fullWidth:!0,radius:"md",mt:"xl",size:"md",color:v.colorScheme==="dark"?void 0:"dark",children:"Send message"})]}))})}function rn(a){var o=a,{membersId:e}=o,t=N(o,["membersId"]);var p;const[r]=B(Te),[s]=B(D),c=(p=e.find(d=>d!==r.id))!=null?p:r.id,l=Ge(c);return n(q,{children:n(an,{parent:n(nn,f(g({},t),{activeLink:s.id,link:`../${We}/${l&&l.id}`})),avatar:l==null?void 0:l.avatarURL,banner:l==null?void 0:l.bannerURL,name:l==null?void 0:l.name,occupation:l==null?void 0:l.occupation})})}let U,H,T;const on=$(e=>{const t=e.colorScheme==="dark";return T=`1px solid ${t?e.colors.dark[4]:e.colors.gray[2]}`,U=e.spacing.md,H=-U*.85,{navbar:{backgroundColor:t?e.colors.dark[6]:e.white,padding:U,height:"100%",width:256},header:{paddingBottom:U,borderBottom:T,marginBottom:U},title:{textTransform:"uppercase",letterSpacing:-.25},footer:{paddingTop:U,marginTop:U,borderTop:T},scrollArea:{marginRight:H},scrollbar:{["&:hover"]:{backgroundColor:"transparent"}}}}),sn=$((e,t,a)=>({sidenav:{backgroundColor:e.colorScheme==="dark"?e.colors.dark[7]:e.colors.gray[0]},links:{marginRight:-H},controls:{ref:a("controls"),width:"100%"},controlsActive:{backgroundColor:e.fn.rgba(e.colors.brand[7],.9),color:e.black},controlsLabel:{padding:8,fontWeight:600}}));function cn(s){var c=s,{footer:e,header:t,subheader:a,children:o}=c,r=N(c,["footer","header","subheader","children"]);const{classes:l,cx:p}=on();return i(F,f(g({},r),{className:p(l.navbar,r.className),children:[i(F.Section,{children:[t&&i(_,{className:l.header,position:"apart",children:[" ",t," "]}),a]}),n(F.Section,{classNames:{scrollbar:l.scrollbar},className:l.scrollArea,component:ae,scrollbarSize:5,grow:!0,children:o}),e&&i(F.Section,{className:l.footer,children:[" ",e," "]})]}))}function ln(e){const[t,a]=u.exports.useState({}),[o,r]=u.exports.useState([n(re.Fragment,{},"")]),[s,c]=u.exports.useState([]),[l,p]=u.exports.useState(""),{classes:d,cx:v}=sn();return u.exports.useEffect(()=>{ie().then(h=>a(h))},[]),u.exports.useEffect(()=>{const h=Object.keys(t);h.length<1||(c(h.map(I=>({label:I,value:I}))),p(h[0]))},[t]),u.exports.useEffect(()=>{l&&r(t[l].map((h,I)=>u.exports.createElement(rn,f(g({},h),{key:I,linkId:h.id,icon:h.icon,membersId:h.members}))))},[l]),n(cn,f(g({},e),{className:v(d.sidenav,e.className),header:i(_,{children:[n(b.Messages,{}),"Inbox"]}),subheader:s.length>1&&n(be,{className:d.controls,classNames:{label:d.controlsLabel,active:d.controlsActive},transitionTimingFunction:"ease",onChange:p,value:l,data:s,fullWidth:!0}),children:i("div",{className:d.links,children:[" ",o," "]})}))}const dn=$(e=>{const t=e.colorScheme==="dark";return{header:{},root:{position:"relative",display:"flex",flexDirection:"column",height:"100vh",backgroundColor:t?e.colors.dark[6]:e.colors.gray[5]},body:{height:0,flexGrow:1},main:{padding:0},channel:{height:"100%",flexDirection:"column",alignContent:"start",justifyContent:"start"}}});function ne(){const{classes:e}=dn(),t=n(xe,{className:e.header,height:32});return n(ye,{children:n(we,{navbar:n(ln,{}),header:t,classNames:{root:e.root,body:e.body,main:e.main},children:n(Ze,{})})})}function hn(a){var o=a,{textColor:e}=o,t=N(o,["textColor"]);const[r]=u.exports.useState(3),s=r<1?"none":"";return u.exports.useEffect(()=>{setTimeout(()=>{window.scrollBy(0,1)},0)},[]),n(Ne,f(g({label:i(_,{sx:{gap:1,alignItems:"flex-start"},children:[r," ",n(b.Message,{size:20})]}),color:"primary",position:"right",placement:"center",gutter:7.5,arrowSize:3,withArrow:!0,withinPortal:!1,opened:!0,styles:{body:{color:e||"white",padding:"3px 6px",transform:"translateY(-10%)",display:s},arrow:{display:s}}},t),{children:t.children}))}const pn="_h1_1doph_12",un="_h2_1doph_17",mn="_h3_1doph_22",_n="_h4_1doph_27",gn="_h5_1doph_32",fn="_h6_1doph_37",vn="_menuItemIcon_1doph_42",kn="_container_1doph_84",bn="_nav_1doph_84",xn="_link_1doph_114",yn="_muted_1doph_127",wn="_navWrapper_1doph_131",Nn="_burger_1doph_137",Sn="_content_1doph_142",Ln="_logo_1doph_147",$n="_linkList_1doph_151",Rn="_open_1doph_214",Cn="_dropDownMenu_1doph_219",In="_itemListContainer_1doph_229",Un="_itemList_1doph_229";var j={"page-title":"_page-title_1doph_7",h1:pn,h2:un,h3:mn,h4:_n,h5:gn,h6:fn,"material-icons":"_material-icons_1doph_42",menuItemIcon:vn,"hide-sm-up":"_hide-sm-up_1doph_73","hide-sm-down":"_hide-sm-down_1doph_79",container:kn,nav:bn,"light-hover-primary":"_light-hover-primary_1doph_114",link:xn,"v-center":"_v-center_1doph_121",muted:yn,navWrapper:wn,burger:Nn,content:Sn,logo:Ln,linkList:$n,open:Rn,dropDownMenu:Cn,itemListContainer:In,itemList:Un};function jn({title:e,items:t}){const a=t.map((r,s)=>n(Y.Item,{icon:r.materialIcon?i("i",{className:j.menuItemIcon,children:[" ",r.materialIcon," "]}):"",component:"a",href:r.href||"#!",children:r.content},s)),o=t.map((r,s)=>i("li",{children:[r.materialIcon?i("i",{className:"material-icons",children:[" ",r.materialIcon," "]}):"",n(m,{className:j.link,children:r.content||"#!"})]},s));return i(q,{children:[n(Y,{className:j.dropDownMenu,trigger:"hover",delay:250,size:"sm",control:i(m,{className:j.link,children:[e," ",n("i",{className:"material-icons",children:"arrow_drop_down"})]}),children:a}),i("div",{className:j.itemListContainer,children:[n(m,{className:j.link,children:e}),n("ul",{className:j.itemList,children:o})]})]})}const Mn="_h1_wi3he_12",En="_h2_wi3he_17",An="_h3_wi3he_22",Wn="_h4_wi3he_27",Fn="_h5_wi3he_32",Bn="_h6_wi3he_37",Dn="_container_wi3he_84",Pn="_nav_wi3he_84",Tn="_link_wi3he_114",On="_muted_wi3he_127",zn="_navWrapper_wi3he_131",Gn="_burger_wi3he_137",Hn="_content_wi3he_142",Jn="_logo_wi3he_147",qn="_linkList_wi3he_151",Kn="_open_wi3he_214";var S={"page-title":"_page-title_wi3he_7",h1:Mn,h2:En,h3:An,h4:Wn,h5:Fn,h6:Bn,"material-icons":"_material-icons_wi3he_42","hide-sm-up":"_hide-sm-up_wi3he_73","hide-sm-down":"_hide-sm-down_wi3he_79",container:Dn,nav:Pn,"light-hover-primary":"_light-hover-primary_wi3he_114",link:Tn,"v-center":"_v-center_wi3he_121",muted:On,navWrapper:zn,burger:Gn,content:Hn,logo:Jn,linkList:qn,open:Kn};function Qn({logo:e,className:t}){const[a,o]=u.exports.useState(!1),[,r]=Se(),s=Le(()=>p()),c=a?"Close navigation":"Open navigation";function l(){r(d=>!d),o(d=>!d)}function p(){a&&l()}return i("div",{className:R(S.navWrapper,t),ref:s,children:[n($e,{className:S.burger,opened:a,onClick:()=>l(),title:c}),n("nav",{className:R(S.nav,a?S.open:"",e?S.withLogo:""),children:i(_,{className:S.content,children:[n("div",{className:S.logo,children:e}),i("ul",{className:S.linkList,children:[n("li",{children:n(hn,{children:n(m,{className:S.link,children:n(C,{to:`/${y}/chat`,children:" Go to App "})})})}),n("li",{children:n(C,{to:`/${y}/pricing`,children:n(jn,{title:"Pricing",items:[{content:"Free",materialIcon:"favorite"},{content:"Pro",materialIcon:"star_rate"},{content:"Pro+",materialIcon:"hotel_class"}]})})}),n("li",{children:n(m,{className:S.link,children:"About"})})]})]})})]})}const Vn="_h1_15jpk_12",Xn="_h2_15jpk_17",Yn="_h3_15jpk_22",Zn="_h4_15jpk_27",et="_h5_15jpk_32",nt="_h6_15jpk_37",tt="_container_15jpk_84",at="_footer_15jpk_114",rt="_muted_15jpk_127",ot="_contentWrapper_15jpk_131",st="_content_15jpk_131",it="_header_15jpk_151",ct="_social_15jpk_156",lt="_socialIcon_15jpk_162",dt="_links_15jpk_166",ht="_author_15jpk_186";var k={"page-title":"_page-title_15jpk_7",h1:Vn,h2:Xn,h3:Yn,h4:Zn,h5:et,h6:nt,"material-icons":"_material-icons_15jpk_42","hide-sm-up":"_hide-sm-up_15jpk_73","hide-sm-down":"_hide-sm-down_15jpk_79",container:tt,"light-hover-primary":"_light-hover-primary_15jpk_114",footer:at,"v-center":"_v-center_15jpk_121",muted:rt,contentWrapper:ot,content:st,header:it,social:ct,socialIcon:lt,links:dt,author:ht};function pt(){return n("footer",{className:k.footer,children:n("div",{className:k.contentWrapper,children:i(K,{className:R("container",k.content),children:[n(_,{className:k.author,align:"center",children:n(m,{href:"https://github.com/notSagyo",children:"\xA9 Boris Stecko - 2022"})}),n(_,{className:k.social,align:"center",children:i("ul",{children:[n("li",{children:n(m,{className:k.socialIcon,children:n(b.Mail,{})})}),n("li",{children:n(m,{className:k.socialIcon,children:n(b.BrandTelegram,{})})}),n("li",{children:n(m,{className:k.socialIcon,children:n(b.BrandTwitter,{})})}),n("li",{children:n(m,{className:k.socialIcon,children:n(b.BrandFacebook,{})})}),n("li",{children:n(m,{className:k.socialIcon,children:n(b.BrandInstagram,{})})})]})}),n(_,{className:k.links,align:"center",children:i(_,{align:"start",children:[i("ul",{children:[n("li",{children:n(x,{className:k.header,children:"Pricing"})}),n("li",{children:n(C,{to:`/${y}/pricing`,children:n(m,{children:"Free"})})}),n("li",{children:n(C,{to:`/${y}/pricing`,children:n(m,{children:"Pro"})})}),n("li",{children:n(C,{to:`/${y}/pricing`,children:n(m,{children:"Pro+"})})})]}),i("ul",{children:[n("li",{children:n(x,{className:k.header,children:"Info"})}),n("li",{children:n(m,{children:"Contact"})}),n("li",{children:n(m,{children:"Legal"})}),n("li",{children:n(m,{children:"About"})})]})]})})]})})})}const ut="_title_1oh9x_1",mt="_subtitle_1oh9x_1",_t="_info_1oh9x_26",gt="_fadeIn_1oh9x_38",ft="_buttons_1oh9x_51";var w={title:ut,subtitle:mt,info:_t,fadeIn:gt,"fade-in":"_fade-in_1oh9x_1",buttons:ft};function vt(){return i(_,{className:w.hero,direction:"column",sx:{gap:"2rem"},children:[i(_,{children:[i("h1",{className:R(w.title,w.fadeIn),children:["Welcome to",n(x,{component:"span",className:w.brand,variant:"gradient",gradient:{from:"primary",to:"pink",deg:135},inherit:!0,children:" portfol.io "})]}),n("h2",{className:R(w.subtitle,w.fadeIn),children:"Connect, create, practice, learn, grow."})]}),n(_,{children:i("h3",{className:R(w.info,w.fadeIn),children:["Connect with people",n("em",{className:w.infoStrong,children:" just like you"}),". Learn to work as part of a team.",n("br",{}),"Get first hand experience and show off the result in your portfolio."]})}),n(_,{className:R(w.buttons,w.fadeIn),children:n(C,{to:`/${y}/chat`,children:n(J,{size:"xl",variant:"gradient",radius:"lg",gradient:{from:"base",to:"pink",deg:135},children:"Open app"})})})]})}const kt="_hero_e9kzz_1";var bt={hero:kt};function xt(e){return n("section",f(g({},e),{className:oe(e.className,bt.hero),children:n(vt,{})}))}const yt="_h1_j4xud_12",wt="_h2_j4xud_17",Nt="_h3_j4xud_22",St="_h4_j4xud_27",Lt="_title_j4xud_27",$t="_price_j4xud_27",Rt="_h5_j4xud_32",Ct="_h6_j4xud_37",It="_container_j4xud_84",Ut="_muted_j4xud_127",jt="_priceMuted_j4xud_127",Mt="_card_j4xud_131",Et="_contentWrapper_j4xud_150",At="_features_j4xud_163",Wt="_feature_j4xud_163",Ft="_divider_j4xud_177";var L={"page-title":"_page-title_j4xud_7",h1:yt,h2:wt,h3:Nt,h4:St,title:Lt,price:$t,h5:Rt,h6:Ct,"material-icons":"_material-icons_j4xud_42","hide-sm-up":"_hide-sm-up_j4xud_73","hide-sm-down":"_hide-sm-down_j4xud_79",container:It,"light-hover-primary":"_light-hover-primary_j4xud_114","v-center":"_v-center_j4xud_121",muted:Ut,priceMuted:jt,card:Mt,contentWrapper:Et,features:At,feature:Wt,divider:Ft};const Bt=$(e=>({wrapper:{display:"flex",alignItems:"center"},controlWrapper:{display:"flex",flexBasis:"50%",alignItems:"center",justifyContent:"space-between",padding:4,height:40,borderRadius:e.radius.sm,border:`1px solid ${e.colorScheme==="dark"?"transparent":e.colors.gray[3]}`,backgroundColor:e.colorScheme==="dark"?e.colors.dark[5]:e.white,"&:focus-within":{borderColor:e.colors[e.primaryColor][6]}},control:{backgroundColor:e.colorScheme==="dark"?e.colors.brand[7]:e.white,color:e.white,border:`1px solid ${e.colorScheme==="dark"?"transparent":e.colors.gray[3]}`,"&:disabled":{borderColor:e.colorScheme==="dark"?"transparent":e.colors.gray[3],opacity:.8,backgroundColor:"transparent"}},input:{textAlign:"center",paddingRight:`${e.spacing.sm}px !important`,paddingLeft:`${e.spacing.sm}px !important`,height:28,flex:1},button:{height:40}}));function Dt(r){var s=r,{min:e=0,max:t=12,onChange:a}=s,o=N(s,["min","max","onChange"]);const c=u.exports.useRef(),l=u.exports.useRef(null),[p,d]=u.exports.useState(1),{classes:v}=Bt();return i(_,{className:v.wrapper,children:[i("div",{className:v.controlWrapper,children:[n(Z,{size:28,variant:"transparent",onClick:()=>c.current&&c.current.decrement(),disabled:p===e,className:v.control,onMouseDown:h=>h.preventDefault(),children:n(b.Minus,{size:16})}),n(Re,{variant:"unstyled",min:e,max:t,handlersRef:c,value:p,ref:l,onChange:h=>{a&&h&&a(h),h&&d(h)},classNames:{input:v.input}}),n(Z,{size:28,variant:"transparent",onClick:()=>c.current&&c.current.increment(),disabled:p===t,className:v.control,onMouseDown:h=>h.preventDefault(),children:n(b.Plus,{size:16})})]}),n(C,{to:`${y}/${Fe}`,children:n(J,{className:v.button,children:"Buy now >"})})]})}function O(s){var c=s,{cardTitle:e,cardDescription:t,cardFeatures:a,cardPrice:o}=c,r=N(c,["cardTitle","cardDescription","cardFeatures","cardPrice"]);const[l,p]=u.exports.useState(1);function d(h){console.log("Quantity changed!"),p(h)}const v=a.map((h,I)=>i(x,{className:L.feature,children:[n(b.Check,{color:"lightgreen"}),h]},I));return n(z,f(g({},r),{className:R(r.className,L.card),children:i(_,{className:L.contentWrapper,children:[n(x,{className:L.title,children:e}),n(ee,{className:L.divider}),i(x,{className:L.description,component:"p",children:[" ",t," "]}),n(_,{className:L.features,children:v}),n(ee,{className:L.divider}),n(x,{className:L.price,children:o>0?i(q,{children:["$",(o*l).toFixed(2),i(x,{className:L.priceMuted,component:"span",children:[" ($",o,"/month)"]})]}):""}),o>0&&n(_,{children:n(Dt,{min:1,max:999,onChange:d})})]})}))}const Pt="_pricing_v6spx_1";var Tt={pricing:Pt};function Ot(e){return i("section",f(g({},e),{className:oe(e.className,Tt.pricing),children:[n(O,{cardTitle:"Free",cardDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu odio congue, egestas est ac, eleifend urna.",cardFeatures:["Is free","Costs no money","Free x 100 = Free"],cardPrice:0}),n(O,{cardTitle:"Pro",cardDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu odio congue, egestas est ac, eleifend urna. Aenean scelerisque luctus faucibus.",cardFeatures:["Has good stuff","Stuff is good","You're a good person"],cardPrice:9.99}),n(O,{cardTitle:"Pro+",cardDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu odio congue, egestas est ac, eleifend urna. Aenean scelerisque luctus faucibus. Integer rutrum tellus in eros efficitur.",cardFeatures:["Goated","Best stuff no cap","Walks your dog","Loved by Jennifer Aniston"],cardPrice:19.99})]}))}const zt="_h1_p4hmp_12",Gt="_h2_p4hmp_17",Ht="_logo_p4hmp_17",Jt="_h3_p4hmp_22",qt="_h4_p4hmp_27",Kt="_h5_p4hmp_32",Qt="_h6_p4hmp_37",Vt="_home_p4hmp_48",Xt="_main_p4hmp_48",Yt="_nav_p4hmp_56",Zt="_mainWrapper_p4hmp_60",ea="_mainSection_p4hmp_70";var M={"page-title":"_page-title_p4hmp_7",h1:zt,h2:Gt,logo:Ht,h3:Jt,h4:qt,h5:Kt,h6:Qt,"material-icons":"_material-icons_p4hmp_42",home:Vt,main:Xt,nav:Yt,mainWrapper:Zt,mainSection:ea};function na(){const e=Ce().pathname,t=n(C,{to:`../${y}`,children:n(m,{className:M.logo,style:{visibility:Ie(e,`/${y}`)?"hidden":"visible"},color:"",variant:"gradient",gradient:{from:"primary",to:"pink",deg:135},children:"portfol.io"})});return i("div",{className:M.home,children:[n(Qn,{logo:t,className:M.nav}),n(K,{className:M.mainWrapper,sx:a=>({background:a.colors.dark[7]}),px:0,fluid:!0,children:n("main",{className:R("container",M.main),children:i(se,{children:[n(A,{path:"/",element:n(xt,{className:M.mainSection})}),n(A,{path:"pricing",element:n(Ot,{className:M.mainSection})})]})})}),n(pt,{})]})}function ta(){const e=Ue();return n(je,{theme:{colorScheme:"dark",colors:{primary:["#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E"],brand:e.colors.red},white:"#fafaff",black:"#101113",primaryColor:"primary",fontFamily:"Poppins, sans-serif"},withNormalizeCSS:!0,children:n(K,{px:"0",fluid:!0,children:n(Me,{children:i(se,{children:[n(A,{path:`${y}/*`,element:n(na,{})}),n(A,{path:`${y}/${G}`,element:n(ne,{})}),n(A,{path:`${y}/${G}/:id`,element:n(ne,{})})]})})})})}Ee.render(n(re.StrictMode,{children:n(ta,{})}),document.getElementById("root"));
