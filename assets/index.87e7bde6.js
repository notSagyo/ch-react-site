var le=Object.defineProperty,de=Object.defineProperties;var he=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var H=(e,t,r)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))U.call(t,r)&&H(e,r,t[r]);if(F)for(var r of F(t))K.call(t,r)&&H(e,r,t[r]);return e},m=(e,t)=>de(e,he(t));var j=(e,t)=>{var r={};for(var o in e)U.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&F)for(var o of F(e))t.indexOf(o)<0&&K.call(e,o)&&(r[o]=e[o]);return r};import{R as ee,a as J,b as Y,c as S,r as d,j as n,T as _e,d as k,e as c,f as x,g as pe,S as ne,G as _,F as z,N as B,B as me,h as ue,H as ge,i as fe,A as ve,k as ke,M as Q,l,u as be,m as Ne,n as w,o as we,L as E,C as q,p as te,q as oe,s as ye,D as V,t as X,v as xe,w as re,x as D,y as $e,z as Se,E as Ie,I as Ce,J as Le}from"./vendor.44a5571f.js";const je=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}};je();const $="ch-react-site",Z=ee({key:"ActiveChannel",default:{created:Date.now(),updated:Date.now(),description:"",label:"none",messages:[],type:"user",members:[],id:"-1"}}),P=ee({key:"MessageList",default:[]});function Ee(){const e=J(P),t=J(Z),r=Y(P),o=Y(Z);return function(s){!s||(r(a=>[...a,{channelId:t.id,id:Date.now().toString(),created:Date.now(),content:s,userId:"User"}]),o(a=>m(p({},a),{messages:e})))}}const Re=S((e,t,r)=>({textInput:{fontWeight:500},inputInner:{maxHeight:"100%","&:focus, &:focus-within":{borderColor:"transparent !important"}},placeholderIcon:{fontWeight:100},form:{width:"100%",height:"fit-content"}})),We=e=>(e=e.trim(),e.length<1||e.length>200?(alert("Message must be between 1 and 200 characters."),!1):e);function Me(e){const t=d.exports.useRef(null),r=Ee(),{classes:o,cx:s}=Re();function a(i){if(!(i.key==="Enter"&&!i.shiftKey)||!t.current)return;const h=We(t.current.value);h&&r(h),t.current.value="",i.preventDefault()}return n("form",{action:void 0,className:o.form,children:n(_e,{icon:n(k.Message,{className:o.placeholderIcon}),className:s(e.className,o.textInput),classNames:{input:o.inputInner},placeholder:"Write a message...",onKeyDown:a,autoComplete:"off",ref:t,minRows:1,maxRows:10,autosize:!0})})}const Ae=S((e,t,r)=>(e.colorScheme,{messageWrapper:{},timestamp:{color:e.colors.dark[3]}}));function Fe(r){var o=r,{message:e}=o,t=j(o,["message"]);const{classes:s,cx:a}=Ae(),i=new Date(e.created).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return n("li",m(p({},t),{className:a(s.messageWrapper,t.className),children:c(x,{children:[c("span",{className:s.timestamp,children:[" [",i,"] "]}),e.userId,": ",t.children]})}))}const Be=S((e,t,r)=>({viewport:{color:e.colors.dark[0],["& > *"]:{height:"100%",paddingBottom:5}},messages:{display:"flex",flexDirection:"column",justifyContent:"flex-end",height:"100%"}}));function De(e){const[t]=pe(P),r=d.exports.useRef(null),{classes:o}=Be();d.exports.useEffect(()=>{r.current&&r.current.scrollBy(0,999)},[t]);const s=t.map((a,i)=>n(Fe,{message:a,children:a.content},i));return n(ne,m(p({},e),{viewportRef:r,classNames:{viewport:o.viewport},children:n("ol",{className:o.messages,children:s.length>0?s:n("li",{children:"This is where I would put my messages... if I had any!!"})})}))}const Te=S(e=>{const t=e.spacing.md;return{channel:{flexDirection:"column",padding:t,height:"100%"},messagesWindow:{width:"100%",height:0,flexGrow:1,paddingRight:t},scrollRoot:{marginRight:-t}}});function Oe(e){const{classes:t,cx:r}=Te();return c(_,m(p({},e),{className:r(t.channel,e.className),children:[n(De,{classNames:{root:t.scrollRoot},className:t.messagesWindow}),n(Me,{})]}))}async function Pe(){return fetch("https://api.npoint.io/b9709844c16d16fbd3bc").then(t=>t.json()).then(t=>{console.log(t);const r=t;return r.USERS.forEach(o=>{Object.assign(o,{icon:k.User})}),r.TEAMS.forEach(o=>{Object.assign(o,{icon:k.Users})}),r})}const ze=S((e,t,r)=>{const o=e.colorScheme==="dark",s=`1px solid ${o?e.colors.dark[4]:e.colors.gray[2]}`,a=e.spacing.md,i=-a*.85;return{navbar:{backgroundColor:o?e.colors.dark[6]:e.white,padding:a,height:"100%",width:256},header:{paddingBottom:a,borderBottom:s,[`& ~ .${r("controls")}`]:{marginTop:a}},title:{textTransform:"uppercase",letterSpacing:-.25},links:{marginRight:-i},footer:{paddingTop:a,marginTop:a,borderTop:s},controls:{ref:r("controls"),marginBottom:a*.5},controlsActive:{backgroundColor:e.fn.rgba(e.colors.brand[7],.9),color:e.black},controlsLabel:{padding:8,fontWeight:600},scrollArea:{marginRight:i},scrollbar:{["&:hover"]:{backgroundColor:"transparent"}}}}),qe=S((e,t,r)=>{const o=e.colorScheme==="dark",s=r("icon"),a=o?e.colors.dark[6]:e.colors.gray[0],i=o?e.fn.rgba(e.colors.dark[3],.25):e.colors[e.primaryColor][0],h=e.colors.brand[o?6:7];return{link:m(p({},e.fn.focusStyles()),{display:"flex",alignItems:"center",textDecoration:"none",fontSize:e.fontSizes.sm,color:o?e.colors.dark[1]:e.colors.gray[7],padding:`${e.spacing.xs}px ${e.spacing.sm}px`,margin:"4px 0",borderRadius:e.radius.sm,fontWeight:500,lineHeight:1.5,"&:hover":{backgroundColor:a,color:o?e.white:e.black,[`& .${s}`]:{color:o?e.white:e.black}}}),linkIcon:{ref:s,color:o?e.colors.dark[2]:e.colors.gray[6],marginRight:e.spacing.sm},linkActive:{backgroundColor:i,"&, &:hover":{color:o?e.white:e.colors.brand[7],[`& .${s}`]:{color:h}}},textWrapper:{whiteSpace:"nowrap",width:0,flexGrow:1,overflow:"hidden",textOverflow:"ellipsis"}}});function Ge(i){var h=i,{children:e,activeLink:t,label:r,link:o="#!",icon:s}=h,a=j(h,["children","activeLink","label","link","icon"]);const{classes:u,cx:f}=qe();return c("a",m(p({},a),{className:f(u.link,a.className,{[u.linkActive]:r===t}),href:o,children:[s&&n(s,{className:u.linkIcon}),n("div",{className:u.textWrapper,children:n("span",{children:e||r})})]}))}function He(f){var R=f,{tabs:e,color:t,footer:r,header:o,defaultLink:s,onLinkClick:a,preventSelect:i,defaultSection:h=Object.keys(e)[0]}=R,u=j(R,["tabs","color","footer","header","defaultLink","onLinkClick","preventSelect","defaultSection"]);const[I]=d.exports.useState(s),[A,W]=d.exports.useState([]),[T,se]=d.exports.useState([n(z,{})]),[ae,G]=d.exports.useState(h),{classes:y,cx:ce}=ze();return d.exports.useEffect(()=>{Object.keys(e).length>1&&(G(Object.keys(e)[1]),W(Object.keys(e).map(M=>({label:M,value:M}))),se(e[Object.keys(e)[1]].map((M,ie)=>d.exports.createElement(Ge,m(p({},M),{key:ie,activeLink:I,icon:M.icon})))))},[e]),c(B,m(p({},u),{className:ce(y.navbar,u.className),children:[c(B.Section,{children:[o&&c(_,{className:y.header,position:"apart",children:[" ",o," "]}),A.length>1&&n(me,{className:y.controls,children:n(ue,{classNames:{label:y.controlsLabel,active:y.controlsActive},transitionTimingFunction:"ease",onChange:G,value:ae,data:A,fullWidth:!0})})]}),n(B.Section,{classNames:{scrollbar:y.scrollbar},className:y.scrollArea,component:ne,scrollbarSize:5,grow:!0,children:c("div",{className:y.links,children:[" ",T," "]})}),r&&c(B.Section,{className:y.footer,children:[" ",r," "]})]}))}const Ue=S((e,t,r)=>({sidenav:{backgroundColor:e.colorScheme==="dark"?e.colors.dark[7]:e.colors.gray[0]}}));function Ke(e){const{classes:t,cx:r}=Ue(),[o,s]=d.exports.useState({tab:[]}),a=c(_,{children:[n(k.Messages,{}),"Inbox"]});return d.exports.useEffect(()=>{Pe().then(i=>{s(i)})},[]),n(He,m(p({},e),{className:r(t.sidenav,e.className),tabs:o,header:a}))}const Je=S((e,t,r)=>{const o=e.colorScheme==="dark";return{header:{},root:{position:"relative",display:"flex",flexDirection:"column",height:"100vh",backgroundColor:o?e.colors.dark[6]:e.colors.gray[5]},body:{height:0,flexGrow:1},main:{padding:0},channel:{height:"100%",flexDirection:"column",alignContent:"start",justifyContent:"start"}}});function Ye(){const{classes:e}=Je(),t=n(ge,{className:e.header,height:32});return n(fe,{children:n(ve,{navbar:n(Ke,{}),header:t,classNames:{root:e.root,body:e.body,main:e.main},children:n(Oe,{})})})}function Qe(r){var o=r,{textColor:e}=o,t=j(o,["textColor"]);const[s]=d.exports.useState(3),a=s<1?"none":"";return d.exports.useEffect(()=>{setTimeout(()=>{window.scrollBy(0,1)},0)},[]),n(ke,m(p({label:c(_,{sx:{gap:1,alignItems:"flex-start"},children:[s," ",n(k.Message,{size:20})]}),color:"primary",position:"right",placement:"center",gutter:7.5,arrowSize:3,withArrow:!0,withinPortal:!1,opened:!0,styles:{body:{color:e||"white",padding:"3px 6px",transform:"translateY(-10%)",display:a},arrow:{display:a}}},t),{children:t.children}))}const Ve="_h1_1doph_12",Xe="_h2_1doph_17",Ze="_h3_1doph_22",en="_h4_1doph_27",nn="_h5_1doph_32",tn="_h6_1doph_37",on="_menuItemIcon_1doph_42",rn="_container_1doph_84",sn="_nav_1doph_84",an="_link_1doph_114",cn="_muted_1doph_127",ln="_navWrapper_1doph_131",dn="_burger_1doph_137",hn="_content_1doph_142",_n="_logo_1doph_147",pn="_linkList_1doph_151",mn="_open_1doph_214",un="_dropDownMenu_1doph_219",gn="_itemListContainer_1doph_229",fn="_itemList_1doph_229";var C={"page-title":"_page-title_1doph_7",h1:Ve,h2:Xe,h3:Ze,h4:en,h5:nn,h6:tn,"material-icons":"_material-icons_1doph_42",menuItemIcon:on,"hide-sm-up":"_hide-sm-up_1doph_73","hide-sm-down":"_hide-sm-down_1doph_79",container:rn,nav:sn,"light-hover-primary":"_light-hover-primary_1doph_114",link:an,"v-center":"_v-center_1doph_121",muted:cn,navWrapper:ln,burger:dn,content:hn,logo:_n,linkList:pn,open:mn,dropDownMenu:un,itemListContainer:gn,itemList:fn};function vn({title:e,items:t}){const r=t.map((s,a)=>n(Q.Item,{icon:s.materialIcon?c("i",{className:C.menuItemIcon,children:[" ",s.materialIcon," "]}):"",component:"a",href:s.href||"#!",children:s.content},a)),o=t.map((s,a)=>c("li",{children:[s.materialIcon?c("i",{className:"material-icons",children:[" ",s.materialIcon," "]}):"",n(l,{className:C.link,children:s.content||"#!"})]},a));return c(z,{children:[n(Q,{className:C.dropDownMenu,trigger:"hover",delay:250,size:"sm",control:c(l,{className:C.link,children:[e," ",n("i",{className:"material-icons",children:"arrow_drop_down"})]}),children:r}),c("div",{className:C.itemListContainer,children:[n(l,{className:C.link,children:e}),n("ul",{className:C.itemList,children:o})]})]})}const kn="_h1_wi3he_12",bn="_h2_wi3he_17",Nn="_h3_wi3he_22",wn="_h4_wi3he_27",yn="_h5_wi3he_32",xn="_h6_wi3he_37",$n="_container_wi3he_84",Sn="_nav_wi3he_84",In="_link_wi3he_114",Cn="_muted_wi3he_127",Ln="_navWrapper_wi3he_131",jn="_burger_wi3he_137",En="_content_wi3he_142",Rn="_logo_wi3he_147",Wn="_linkList_wi3he_151",Mn="_open_wi3he_214";var b={"page-title":"_page-title_wi3he_7",h1:kn,h2:bn,h3:Nn,h4:wn,h5:yn,h6:xn,"material-icons":"_material-icons_wi3he_42","hide-sm-up":"_hide-sm-up_wi3he_73","hide-sm-down":"_hide-sm-down_wi3he_79",container:$n,nav:Sn,"light-hover-primary":"_light-hover-primary_wi3he_114",link:In,"v-center":"_v-center_wi3he_121",muted:Cn,navWrapper:Ln,burger:jn,content:En,logo:Rn,linkList:Wn,open:Mn};function An({logo:e,className:t}){const[r,o]=d.exports.useState(!1),[,s]=be(),a=Ne(()=>u()),i=r?"Close navigation":"Open navigation";function h(){s(f=>!f),o(f=>!f)}function u(){r&&h()}return c("div",{className:w(b.navWrapper,t),ref:a,children:[n(we,{className:b.burger,opened:r,onClick:()=>h(),title:i}),n("nav",{className:w(b.nav,r?b.open:"",e?b.withLogo:""),children:c(_,{className:b.content,children:[n("div",{className:b.logo,children:e}),c("ul",{className:b.linkList,children:[n("li",{children:n(Qe,{children:n(l,{className:b.link,children:n(E,{to:`/${$}/chat`,children:" Go to App "})})})}),n("li",{children:n(E,{to:`/${$}/pricing`,children:n(vn,{title:"Pricing",items:[{content:"Free",materialIcon:"favorite"},{content:"Pro",materialIcon:"star_rate"},{content:"Pro+",materialIcon:"hotel_class"}]})})}),n("li",{children:n(l,{className:b.link,children:"About"})})]})]})})]})}const Fn="_h1_15jpk_12",Bn="_h2_15jpk_17",Dn="_h3_15jpk_22",Tn="_h4_15jpk_27",On="_h5_15jpk_32",Pn="_h6_15jpk_37",zn="_container_15jpk_84",qn="_footer_15jpk_114",Gn="_muted_15jpk_127",Hn="_contentWrapper_15jpk_131",Un="_content_15jpk_131",Kn="_header_15jpk_151",Jn="_social_15jpk_156",Yn="_socialIcon_15jpk_162",Qn="_links_15jpk_166",Vn="_author_15jpk_186";var g={"page-title":"_page-title_15jpk_7",h1:Fn,h2:Bn,h3:Dn,h4:Tn,h5:On,h6:Pn,"material-icons":"_material-icons_15jpk_42","hide-sm-up":"_hide-sm-up_15jpk_73","hide-sm-down":"_hide-sm-down_15jpk_79",container:zn,"light-hover-primary":"_light-hover-primary_15jpk_114",footer:qn,"v-center":"_v-center_15jpk_121",muted:Gn,contentWrapper:Hn,content:Un,header:Kn,social:Jn,socialIcon:Yn,links:Qn,author:Vn};function Xn(){return n("footer",{className:g.footer,children:n("div",{className:g.contentWrapper,children:c(q,{className:w("container",g.content),children:[n(_,{className:g.author,align:"center",children:n(l,{href:"https://github.com/notSagyo",children:"\xA9 Boris Stecko - 2022"})}),n(_,{className:g.social,align:"center",children:c("ul",{children:[n("li",{children:n(l,{className:g.socialIcon,children:n(k.Mail,{})})}),n("li",{children:n(l,{className:g.socialIcon,children:n(k.BrandTelegram,{})})}),n("li",{children:n(l,{className:g.socialIcon,children:n(k.BrandTwitter,{})})}),n("li",{children:n(l,{className:g.socialIcon,children:n(k.BrandFacebook,{})})}),n("li",{children:n(l,{className:g.socialIcon,children:n(k.BrandInstagram,{})})})]})}),n(_,{className:g.links,align:"center",children:c(_,{align:"start",children:[c("ul",{children:[n("li",{children:n(x,{className:g.header,children:"Pricing"})}),n("li",{children:n(E,{to:`/${$}/pricing`,children:n(l,{children:"Free"})})}),n("li",{children:n(E,{to:`/${$}/pricing`,children:n(l,{children:"Pro"})})}),n("li",{children:n(E,{to:`/${$}/pricing`,children:n(l,{children:"Pro+"})})})]}),c("ul",{children:[n("li",{children:n(x,{className:g.header,children:"Info"})}),n("li",{children:n(l,{children:"Contact"})}),n("li",{children:n(l,{children:"Legal"})}),n("li",{children:n(l,{children:"About"})})]})]})})]})})})}const Zn="_title_1oh9x_1",et="_subtitle_1oh9x_1",nt="_info_1oh9x_26",tt="_fadeIn_1oh9x_38",ot="_buttons_1oh9x_51";var v={title:Zn,subtitle:et,info:nt,fadeIn:tt,"fade-in":"_fade-in_1oh9x_1",buttons:ot};function rt(){return c(_,{className:v.hero,direction:"column",sx:{gap:"2rem"},children:[c(_,{children:[c("h1",{className:w(v.title,v.fadeIn),children:["Welcome to",n(x,{component:"span",className:v.brand,variant:"gradient",gradient:{from:"primary",to:"pink",deg:135},inherit:!0,children:" portfol.io "})]}),n("h2",{className:w(v.subtitle,v.fadeIn),children:"Connect, create, practice, learn, grow."})]}),n(_,{children:c("h3",{className:w(v.info,v.fadeIn),children:["Connect with people",n("em",{className:v.infoStrong,children:" just like you"}),". Learn to work as part of a team.",n("br",{}),"Get first hand experience and show off the result in your portfolio."]})}),n(_,{className:w(v.buttons,v.fadeIn),children:n(E,{to:`/${$}/chat`,children:n(te,{size:"xl",variant:"gradient",radius:"lg",gradient:{from:"base",to:"pink",deg:135},children:"Open app"})})})]})}const st="_hero_e9kzz_1";var at={hero:st};function ct(e){return n("section",m(p({},e),{className:oe(e.className,at.hero),children:n(rt,{})}))}const it="_h1_2tdb9_12",lt="_h2_2tdb9_17",dt="_h3_2tdb9_22",ht="_h4_2tdb9_27",_t="_title_2tdb9_27",pt="_price_2tdb9_27",mt="_h5_2tdb9_32",ut="_h6_2tdb9_37",gt="_container_2tdb9_84",ft="_muted_2tdb9_127",vt="_priceInterval_2tdb9_127",kt="_card_2tdb9_131",bt="_contentWrapper_2tdb9_150",Nt="_features_2tdb9_163",wt="_feature_2tdb9_163",yt="_divider_2tdb9_177";var N={"page-title":"_page-title_2tdb9_7",h1:it,h2:lt,h3:dt,h4:ht,title:_t,price:pt,h5:mt,h6:ut,"material-icons":"_material-icons_2tdb9_42","hide-sm-up":"_hide-sm-up_2tdb9_73","hide-sm-down":"_hide-sm-down_2tdb9_79",container:gt,"light-hover-primary":"_light-hover-primary_2tdb9_114","v-center":"_v-center_2tdb9_121",muted:ft,priceInterval:vt,card:kt,contentWrapper:bt,features:Nt,feature:wt,divider:yt};function O(a){var i=a,{cardTitle:e,cardDescription:t,cardFeatures:r,cardPrice:o}=i,s=j(i,["cardTitle","cardDescription","cardFeatures","cardPrice"]);const[h,u]=d.exports.useState(1),[f,R]=d.exports.useState("month"),I=d.exports.useRef(),A=r.map((W,T)=>c(x,{className:N.feature,children:[n(k.Check,{color:"lightgreen"}),W]},T));return d.exports.useEffect(()=>{h>=12?(R("year"),f==="month"&&u(1)):h==0&&f==="year"&&(R("month"),u(11))},[h]),n(ye,m(p({},s),{className:w(s.className,N.card),children:c(_,{className:N.contentWrapper,children:[n(x,{className:N.title,children:e}),n(V,{className:N.divider}),c(x,{className:N.description,component:"p",children:[" ",t," "]}),n(_,{className:N.features,children:A}),n(V,{className:N.divider}),n(x,{className:N.price,children:o>0?c(z,{children:["$"+(f==="month"?o:o*12),c(x,{className:N.priceInterval,component:"span",children:[" /",f]})]}):""}),o>0&&c(_,{children:[c(_,{children:[n(X,{size:36,variant:"default",onClick:()=>I.current&&I.current.decrement(),children:" \u2013 "}),n(xe,{hideControls:!0,value:h,onChange:W=>u(W),handlersRef:I,min:0,step:1,styles:{input:{width:54,textAlign:"center"}}}),n(X,{size:36,variant:"default",onClick:()=>I.current&&I.current.increment(),children:" + "})]}),n(te,{children:"Buy now >"})]})]})}))}const xt="_pricing_v6spx_1";var $t={pricing:xt};function St(e){return c("section",m(p({},e),{className:oe(e.className,$t.pricing),children:[n(O,{cardTitle:"Free",cardDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu odio congue, egestas est ac, eleifend urna.",cardFeatures:["Is free","Costs no money","Free x 100 = Free"],cardPrice:0}),n(O,{cardTitle:"Pro",cardDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu odio congue, egestas est ac, eleifend urna. Aenean scelerisque luctus faucibus.",cardFeatures:["Has good stuff","Stuff is good","You're a good person"],cardPrice:9.99}),n(O,{cardTitle:"Pro+",cardDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu odio congue, egestas est ac, eleifend urna. Aenean scelerisque luctus faucibus. Integer rutrum tellus in eros efficitur.",cardFeatures:["Goated","Best stuff no cap","Walks your dog","Loved by Jennifer Aniston"],cardPrice:19.99})]}))}const It="_h1_p4hmp_12",Ct="_h2_p4hmp_17",Lt="_logo_p4hmp_17",jt="_h3_p4hmp_22",Et="_h4_p4hmp_27",Rt="_h5_p4hmp_32",Wt="_h6_p4hmp_37",Mt="_home_p4hmp_48",At="_main_p4hmp_48",Ft="_nav_p4hmp_56",Bt="_mainWrapper_p4hmp_60",Dt="_mainSection_p4hmp_70";var L={"page-title":"_page-title_p4hmp_7",h1:It,h2:Ct,logo:Lt,h3:jt,h4:Et,h5:Rt,h6:Wt,"material-icons":"_material-icons_p4hmp_42",home:Mt,main:At,nav:Ft,mainWrapper:Bt,mainSection:Dt};function Tt(){const e=n(l,{className:w("hide-sm-up",L.logo),color:"",variant:"gradient",gradient:{from:"primary",to:"pink",deg:135},children:"portfol.io"});return c("div",{className:L.home,children:[n(An,{logo:e,className:L.nav}),n(q,{className:L.mainWrapper,sx:t=>({background:t.colors.dark[7]}),px:0,fluid:!0,children:n("main",{className:w("container",L.main),children:c(re,{children:[n(D,{path:"/",element:n(ct,{className:L.mainSection})}),n(D,{path:"pricing",element:n(St,{className:L.mainSection})})]})})}),n(Xn,{})]})}function Ot(){const e=$e();return n(Se,{theme:{colorScheme:"dark",colors:{primary:["#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E","#F03E3E"],brand:e.colors.red},white:"#fafaff",black:"#101113",primaryColor:"primary",fontFamily:"Poppins, sans-serif"},withNormalizeCSS:!0,children:n(q,{px:"0",fluid:!0,children:n(Ie,{children:c(re,{children:[n(D,{path:`${$}/*`,element:n(Tt,{})}),n(D,{path:`${$}/chat`,element:n(Ye,{})})]})})})})}Ce.render(n(Le.StrictMode,{children:n(Ot,{})}),document.getElementById("root"));
