import{p as ue,d as S,M as ce,C as fe,q as ee,u as pe,a4 as de,a5 as ve,a6 as _e,k as C,B as N,U as me,Y as ge,o as M,e as x,r as T,a as L,g as ye}from"./app-efdfa947.js";import{_ as Oe}from"./_plugin-vue_export-helper-c27b6911.js";var B;const te=typeof window<"u",he=e=>typeof e=="function",we=e=>typeof e=="string",Pe=()=>{};te&&((B=window==null?void 0:window.navigator)!=null&&B.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function j(e){return typeof e=="function"?e():pe(e)}function be(e,t){function r(...n){return new Promise((a,o)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(a).catch(o)})}return r}const re=e=>e();function Se(e=re){const t=S(!0);function r(){t.value=!1}function n(){t.value=!0}const a=(...o)=>{t.value&&e(...o)};return{isActive:_e(t),pause:r,resume:n,eventFilter:a}}function $e(e){return e}function ne(e){return de()?(ve(e),!0):!1}function Ee(e){return typeof e=="function"?C(e):S(e)}function ae(e,t=!0){ce()?fe(e):t?e():ee(e)}function Ot(e=!1,t={}){const{truthyValue:r=!0,falsyValue:n=!1}=t,a=ue(e),o=S(e);function l(i){if(arguments.length)return o.value=i,o.value;{const p=j(r);return o.value=o.value===p?j(n):p,o.value}}return a?l:[o,l]}var V=Object.getOwnPropertySymbols,Ie=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,Ce=(e,t)=>{var r={};for(var n in e)Ie.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&V)for(var n of V(e))t.indexOf(n)<0&&je.call(e,n)&&(r[n]=e[n]);return r};function Ne(e,t,r={}){const n=r,{eventFilter:a=re}=n,o=Ce(n,["eventFilter"]);return N(e,be(a,t),o)}var Ae=Object.defineProperty,ke=Object.defineProperties,De=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,Q=(e,t,r)=>t in e?Ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Fe=(e,t)=>{for(var r in t||(t={}))oe.call(t,r)&&Q(e,r,t[r]);if(A)for(var r of A(t))se.call(t,r)&&Q(e,r,t[r]);return e},Le=(e,t)=>ke(e,De(t)),Me=(e,t)=>{var r={};for(var n in e)oe.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&A)for(var n of A(e))t.indexOf(n)<0&&se.call(e,n)&&(r[n]=e[n]);return r};function xe(e,t,r={}){const n=r,{eventFilter:a}=n,o=Me(n,["eventFilter"]),{eventFilter:l,pause:i,resume:p,isActive:u}=Se(a);return{stop:Ne(e,t,Le(Fe({},o),{eventFilter:l})),pause:i,resume:p,isActive:u}}function Te(e){var t;const r=j(e);return(t=r==null?void 0:r.$el)!=null?t:r}const E=te?window:void 0;function R(...e){let t,r,n,a;if(we(e[0])||Array.isArray(e[0])?([r,n,a]=e,t=E):[t,r,n,a]=e,!t)return Pe;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const o=[],l=()=>{o.forEach(c=>c()),o.length=0},i=(c,d,g,v)=>(c.addEventListener(d,g,v),()=>c.removeEventListener(d,g,v)),p=N(()=>[Te(t),j(a)],([c,d])=>{l(),c&&o.push(...r.flatMap(g=>n.map(v=>i(c,g,v,d))))},{immediate:!0,flush:"post"}),u=()=>{p(),l()};return ne(u),u}function Be(e,t=!1){const r=S(),n=()=>r.value=Boolean(e());return n(),ae(n,t),r}function Ve(e,t={}){const{window:r=E}=t,n=Be(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let a;const o=S(!1),l=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",i):a.removeListener(i))},i=()=>{n.value&&(l(),a=r.matchMedia(Ee(e).value),o.value=a.matches,"addEventListener"in a?a.addEventListener("change",i):a.addListener(i))};return me(i),ne(()=>l()),o}const D=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F="__vueuse_ssr_handlers__";D[F]=D[F]||{};const Qe=D[F];function ie(e,t){return Qe[e]||t}function Re(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var We=Object.defineProperty,W=Object.getOwnPropertySymbols,Je=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable,J=(e,t,r)=>t in e?We(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,z=(e,t)=>{for(var r in t||(t={}))Je.call(t,r)&&J(e,r,t[r]);if(W)for(var r of W(t))ze.call(t,r)&&J(e,r,t[r]);return e};const He={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},H="vueuse-storage";function Ue(e,t,r,n={}){var a;const{flush:o="pre",deep:l=!0,listenToStorageChanges:i=!0,writeDefaults:p=!0,mergeDefaults:u=!1,shallow:c,window:d=E,eventFilter:g,onError:v=s=>{console.error(s)}}=n,_=(c?ge:S)(t);if(!r)try{r=ie("getDefaultStorage",()=>{var s;return(s=E)==null?void 0:s.localStorage})()}catch(s){v(s)}if(!r)return _;const y=j(t),I=Re(y),h=(a=n.serializer)!=null?a:He[I],{pause:m,resume:w}=xe(_,()=>P(_.value),{flush:o,deep:l,eventFilter:g});return d&&i&&(R(d,"storage",O),R(d,H,k)),O(),_;function P(s){try{if(s==null)r.removeItem(e);else{const f=h.write(s),b=r.getItem(e);b!==f&&(r.setItem(e,f),d&&d.dispatchEvent(new CustomEvent(H,{detail:{key:e,oldValue:b,newValue:f,storageArea:r}})))}}catch(f){v(f)}}function $(s){const f=s?s.newValue:r.getItem(e);if(f==null)return p&&y!==null&&r.setItem(e,h.write(y)),y;if(!s&&u){const b=h.read(f);return he(u)?u(b,y):I==="object"&&!Array.isArray(b)?z(z({},y),b):b}else return typeof f!="string"?f:h.read(f)}function k(s){O(s.detail)}function O(s){if(!(s&&s.storageArea!==r)){if(s&&s.key==null){_.value=y;return}if(!(s&&s.key!==e)){m();try{_.value=$(s)}catch(f){v(f)}finally{s?ee(w):w()}}}}}function le(e){return Ve("(prefers-color-scheme: dark)",e)}var qe=Object.defineProperty,U=Object.getOwnPropertySymbols,Ge=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable,q=(e,t,r)=>t in e?qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ye=(e,t)=>{for(var r in t||(t={}))Ge.call(t,r)&&q(e,r,t[r]);if(U)for(var r of U(t))Ke.call(t,r)&&q(e,r,t[r]);return e};function Xe(e={}){const{selector:t="html",attribute:r="class",initialValue:n="auto",window:a=E,storage:o,storageKey:l="vueuse-color-scheme",listenToStorageChanges:i=!0,storageRef:p,emitAuto:u}=e,c=Ye({auto:"",light:"light",dark:"dark"},e.modes||{}),d=le({window:a}),g=C(()=>d.value?"dark":"light"),v=p||(l==null?S(n):Ue(l,n,o,{window:a,listenToStorageChanges:i})),_=C({get(){return v.value==="auto"&&!u?g.value:v.value},set(m){v.value=m}}),y=ie("updateHTMLAttrs",(m,w,P)=>{const $=a==null?void 0:a.document.querySelector(m);if($)if(w==="class"){const k=P.split(/\s/g);Object.values(c).flatMap(O=>(O||"").split(/\s/g)).filter(Boolean).forEach(O=>{k.includes(O)?$.classList.add(O):$.classList.remove(O)})}else $.setAttribute(w,P)});function I(m){var w;const P=m==="auto"?g.value:m;y(t,r,(w=c[P])!=null?w:P)}function h(m){e.onChanged?e.onChanged(m,I):I(m)}return N(_,h,{flush:"post",immediate:!0}),u&&N(g,()=>h(_.value),{flush:"post"}),ae(()=>h(_.value)),_}var Ze=Object.defineProperty,et=Object.defineProperties,tt=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,rt=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable,K=(e,t,r)=>t in e?Ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,at=(e,t)=>{for(var r in t||(t={}))rt.call(t,r)&&K(e,r,t[r]);if(G)for(var r of G(t))nt.call(t,r)&&K(e,r,t[r]);return e},ot=(e,t)=>et(e,tt(t));function ht(e={}){const{valueDark:t="dark",valueLight:r="",window:n=E}=e,a=Xe(ot(at({},e),{onChanged:(i,p)=>{var u;e.onChanged?(u=e.onChanged)==null||u.call(e,i==="dark"):p(i)},modes:{dark:t,light:r}})),o=le({window:n});return C({get(){return a.value==="dark"},set(i){i===o.value?a.value="auto":a.value=i?"dark":"light"}})}var Y;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Y||(Y={}));var st=Object.defineProperty,X=Object.getOwnPropertySymbols,it=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable,Z=(e,t,r)=>t in e?st(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ut=(e,t)=>{for(var r in t||(t={}))it.call(t,r)&&Z(e,r,t[r]);if(X)for(var r of X(t))lt.call(t,r)&&Z(e,r,t[r]);return e};const ct={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ut({linear:$e},ct);const ft={},pt={class:"inline-flex items-center rounded-full bg-indigo-100 py-0.5 pl-2.5 pr-1 text-sm font-medium text-gray-700"},dt=L("span",{class:"sr-only"},"Close",-1),vt={class:"h-2 w-2",stroke:"currentColor",fill:"none",viewBox:"0 0 8 8"},_t=L("path",{"stroke-linecap":"round","stroke-width":"1.5",d:"M1 1l6 6m0-6L1 7"},null,-1);function mt(e,t){return M(),x("span",pt,[T(e.$slots,"label",{},()=>[ye(" Fermer ")]),L("button",{type:"button",onClick:t[0]||(t[0]=r=>e.$emit("clickOnBadge")),class:"ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-indigo-200 hover:text-gray-500 focus:bg-gray-500 focus:text-white focus:outline-none"},[dt,(M(),x("svg",vt,[T(e.$slots,"icone",{},()=>[_t])]))])])}const wt=Oe(ft,[["render",mt]]);export{wt as B,Xe as a,Ot as b,ht as u};