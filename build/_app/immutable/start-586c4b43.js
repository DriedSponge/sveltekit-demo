import{S as at,i as rt,s as it,a as ot,e as U,c as st,b as M,g as Z,t as D,d as Q,f as j,h as q,j as lt,o as Ie,k as ct,l as ft,m as ut,n as Ee,p as z,q as dt,r as pt,u as ht,v as G,w as H,x as oe,y as J,z as K,A as de}from"./chunks/index-2b26cad3.js";import{S as tt,I as W,g as Ke,f as ze,a as ke,b as pe,s as Y,i as We,c as he,P as Ye,d as _t,e as mt,h as gt}from"./chunks/singletons-073c6ff0.js";function wt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function yt(a){return a.split("%25").map(decodeURI).join("%25")}function vt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const bt=["href","pathname","search","searchParams","toString","toJSON"];function Et(a,e){const n=new URL(a);for(const i of bt){let r=n[i];Object.defineProperty(n,i,{get(){return e(),r},enumerable:!0,configurable:!0})}return kt(n),n}function kt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Rt="/__data.json";function $t(a){return a.replace(/\/$/,"")+Rt}function St(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const _e=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&re.delete(Ne(a)),_e(a,e));const re=new Map;function Lt(a,e){const n=Ne(a,e),i=document.querySelector(n);if(i!=null&&i.textContent){const{body:r,...d}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&re.set(n,{body:r,init:d,ttl:1e3*Number(t)}),Promise.resolve(new Response(r,d))}return _e(a,e)}function It(a,e,n){if(re.size>0){const i=Ne(a,n),r=re.get(i);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(r.body,r.init);re.delete(i)}}return _e(e,n)}function Ne(a,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${St(e.body)}"]`),i}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Nt(a).map(i=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(r)return e.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(d)return e.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/);return"/"+t.map((u,p)=>{if(p%2){if(u.startsWith("x+"))return Re(String.fromCharCode(parseInt(u.slice(2),16)));if(u.startsWith("u+"))return Re(String.fromCharCode(...u.slice(2).split("-").map(O=>parseInt(O,16))));const g=At.exec(u);if(!g)throw new Error(`Invalid param: ${u}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,y,N,k,B]=g;return e.push({name:k,matcher:B,optional:!!y,rest:!!N,chained:N?p===1&&t[0]==="":!1}),N?"(.*?)":y?"([^/]*)?":"([^/]+?)"}return Re(u)}).join("")}).join("")}/?$`),params:e}}function Pt(a){return!/^\([^)]+\)$/.test(a)}function Nt(a){return a.slice(1).split("/").filter(Pt)}function Tt(a,e,n){const i={},r=a.slice(1);let d="";for(let t=0;t<e.length;t+=1){const f=e[t];let u=r[t];if(f.chained&&f.rest&&d&&(u=u?d+"/"+u:d),d="",u===void 0)f.rest&&(i[f.name]="");else{if(f.matcher&&!n[f.matcher](u)){if(f.optional&&f.chained){let p=r.indexOf(void 0,t);if(p===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)d=u;else return}for(;p>=t;)r[p]=r[p-1],p-=1;continue}return}i[f.name]=u}}if(!d)return i}function Re(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ut(a,e,n,i){const r=new Set(e);return Object.entries(n).map(([f,[u,p,g]])=>{const{pattern:y,params:N}=Ot(f),k={id:f,exec:B=>{const O=y.exec(B);if(O)return Tt(O,N,i)},errors:[1,...g||[]].map(B=>a[B]),layouts:[0,...p||[]].map(t),leaf:d(u)};return k.errors.length=k.layouts.length=Math.max(k.errors.length,k.layouts.length),k});function d(f){const u=f<0;return u&&(f=~f),[u,a[f]]}function t(f){return f===void 0?f:[r.has(f),a[f]]}}function Dt(a){let e,n,i;var r=a[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return r&&(e=G(r,d(a))),{c(){e&&H(e.$$.fragment),n=U()},l(t){e&&oe(e.$$.fragment,t),n=U()},m(t,f){e&&J(e,t,f),M(t,n,f),i=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&2&&(u.form=t[1]),r!==(r=t[0][0])){if(e){Z();const p=e;D(p.$$.fragment,1,0,()=>{K(p,1)}),Q()}r?(e=G(r,d(t)),H(e.$$.fragment),j(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){i||(e&&j(e.$$.fragment,t),i=!0)},o(t){e&&D(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&K(e,t)}}}function jt(a){let e,n,i;var r=a[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[Bt]},$$scope:{ctx:t}}}}return r&&(e=G(r,d(a))),{c(){e&&H(e.$$.fragment),n=U()},l(t){e&&oe(e.$$.fragment,t),n=U()},m(t,f){e&&J(e,t,f),M(t,n,f),i=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&1051&&(u.$$scope={dirty:f,ctx:t}),r!==(r=t[0][0])){if(e){Z();const p=e;D(p.$$.fragment,1,0,()=>{K(p,1)}),Q()}r?(e=G(r,d(t)),H(e.$$.fragment),j(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){i||(e&&j(e.$$.fragment,t),i=!0)},o(t){e&&D(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&K(e,t)}}}function Vt(a){let e,n,i;var r=a[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return r&&(e=G(r,d(a))),{c(){e&&H(e.$$.fragment),n=U()},l(t){e&&oe(e.$$.fragment,t),n=U()},m(t,f){e&&J(e,t,f),M(t,n,f),i=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&2&&(u.form=t[1]),r!==(r=t[0][1])){if(e){Z();const p=e;D(p.$$.fragment,1,0,()=>{K(p,1)}),Q()}r?(e=G(r,d(t)),H(e.$$.fragment),j(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){i||(e&&j(e.$$.fragment,t),i=!0)},o(t){e&&D(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&K(e,t)}}}function Ct(a){let e,n,i;var r=a[0][1];function d(t){return{props:{data:t[3],$$slots:{default:[qt]},$$scope:{ctx:t}}}}return r&&(e=G(r,d(a))),{c(){e&&H(e.$$.fragment),n=U()},l(t){e&&oe(e.$$.fragment,t),n=U()},m(t,f){e&&J(e,t,f),M(t,n,f),i=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&1043&&(u.$$scope={dirty:f,ctx:t}),r!==(r=t[0][1])){if(e){Z();const p=e;D(p.$$.fragment,1,0,()=>{K(p,1)}),Q()}r?(e=G(r,d(t)),H(e.$$.fragment),j(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){i||(e&&j(e.$$.fragment,t),i=!0)},o(t){e&&D(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&K(e,t)}}}function qt(a){let e,n,i;var r=a[0][2];function d(t){return{props:{data:t[4],form:t[1]}}}return r&&(e=G(r,d(a))),{c(){e&&H(e.$$.fragment),n=U()},l(t){e&&oe(e.$$.fragment,t),n=U()},m(t,f){e&&J(e,t,f),M(t,n,f),i=!0},p(t,f){const u={};if(f&16&&(u.data=t[4]),f&2&&(u.form=t[1]),r!==(r=t[0][2])){if(e){Z();const p=e;D(p.$$.fragment,1,0,()=>{K(p,1)}),Q()}r?(e=G(r,d(t)),H(e.$$.fragment),j(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){i||(e&&j(e.$$.fragment,t),i=!0)},o(t){e&&D(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&K(e,t)}}}function Bt(a){let e,n,i,r;const d=[Ct,Vt],t=[];function f(u,p){return u[0][2]?0:1}return e=f(a),n=t[e]=d[e](a),{c(){n.c(),i=U()},l(u){n.l(u),i=U()},m(u,p){t[e].m(u,p),M(u,i,p),r=!0},p(u,p){let g=e;e=f(u),e===g?t[e].p(u,p):(Z(),D(t[g],1,1,()=>{t[g]=null}),Q(),n=t[e],n?n.p(u,p):(n=t[e]=d[e](u),n.c()),j(n,1),n.m(i.parentNode,i))},i(u){r||(j(n),r=!0)},o(u){D(n),r=!1},d(u){t[e].d(u),u&&q(i)}}}function Xe(a){let e,n=a[6]&&Ze(a);return{c(){e=ct("div"),n&&n.c(),this.h()},l(i){e=ft(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=ut(e);n&&n.l(r),r.forEach(q),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),z(e,"position","absolute"),z(e,"left","0"),z(e,"top","0"),z(e,"clip","rect(0 0 0 0)"),z(e,"clip-path","inset(50%)"),z(e,"overflow","hidden"),z(e,"white-space","nowrap"),z(e,"width","1px"),z(e,"height","1px")},m(i,r){M(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=Ze(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&q(e),n&&n.d()}}}function Ze(a){let e;return{c(){e=dt(a[7])},l(n){e=pt(n,a[7])},m(n,i){M(n,e,i)},p(n,i){i&128&&ht(e,n[7])},d(n){n&&q(e)}}}function Ft(a){let e,n,i,r,d;const t=[jt,Dt],f=[];function u(g,y){return g[0][1]?0:1}e=u(a),n=f[e]=t[e](a);let p=a[5]&&Xe(a);return{c(){n.c(),i=ot(),p&&p.c(),r=U()},l(g){n.l(g),i=st(g),p&&p.l(g),r=U()},m(g,y){f[e].m(g,y),M(g,i,y),p&&p.m(g,y),M(g,r,y),d=!0},p(g,[y]){let N=e;e=u(g),e===N?f[e].p(g,y):(Z(),D(f[N],1,1,()=>{f[N]=null}),Q(),n=f[e],n?n.p(g,y):(n=f[e]=t[e](g),n.c()),j(n,1),n.m(i.parentNode,i)),g[5]?p?p.p(g,y):(p=Xe(g),p.c(),p.m(r.parentNode,r)):p&&(p.d(1),p=null)},i(g){d||(j(n),d=!0)},o(g){D(n),d=!1},d(g){f[e].d(g),g&&q(i),p&&p.d(g),g&&q(r)}}}function Mt(a,e,n){let{stores:i}=e,{page:r}=e,{components:d}=e,{form:t}=e,{data_0:f=null}=e,{data_1:u=null}=e,{data_2:p=null}=e;lt(i.page.notify);let g=!1,y=!1,N=null;return Ie(()=>{const k=i.page.subscribe(()=>{g&&(n(6,y=!0),n(7,N=document.title||"untitled page"))});return n(5,g=!0),k}),a.$$set=k=>{"stores"in k&&n(8,i=k.stores),"page"in k&&n(9,r=k.page),"components"in k&&n(0,d=k.components),"form"in k&&n(1,t=k.form),"data_0"in k&&n(2,f=k.data_0),"data_1"in k&&n(3,u=k.data_1),"data_2"in k&&n(4,p=k.data_2)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[d,t,f,u,p,g,y,N,i,r]}class Gt extends at{constructor(e){super(),rt(this,e,Mt,Ft,it,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Ht="modulepreload",Jt=function(a,e){return new URL(a,e).href},Qe={},C=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(d=>{if(d=Jt(d,i),d in Qe)return;Qe[d]=!0;const t=d.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!i)for(let g=r.length-1;g>=0;g--){const y=r[g];if(y.href===d&&(!t||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${f}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":Ht,t||(p.as="script",p.crossOrigin=""),p.href=d,document.head.appendChild(p),t)return new Promise((g,y)=>{p.addEventListener("load",g),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${d}`)))})})).then(()=>e())},Kt={},me=[()=>C(()=>import("./chunks/0-066c27b3.js"),["./chunks\\0-066c27b3.js","./chunks\\_layout-da46b06b.js","./components\\pages\\_layout.svelte-0266ad6e.js","./chunks\\index-2b26cad3.js","./assets\\_layout-3a96fc91.css"],import.meta.url),()=>C(()=>import("./chunks/1-12ff2b19.js"),["./chunks\\1-12ff2b19.js","./components\\error.svelte-6d13240b.js","./chunks\\index-2b26cad3.js","./chunks\\stores-e1021328.js","./chunks\\singletons-073c6ff0.js"],import.meta.url),()=>C(()=>import("./chunks/2-c2894f08.js"),["./chunks\\2-c2894f08.js","./components\\pages\\slides\\_layout.svelte-c597b9a6.js","./chunks\\index-2b26cad3.js","./chunks\\stores-e1021328.js","./chunks\\singletons-073c6ff0.js"],import.meta.url),()=>C(()=>import("./chunks/3-dd175979.js"),["./chunks\\3-dd175979.js","./components\\pages\\_page.svelte-81da36f3.js","./chunks\\index-2b26cad3.js","./assets\\_page-5f1e411b.css"],import.meta.url),()=>C(()=>import("./chunks/4-0aa9c93a.js"),["./chunks\\4-0aa9c93a.js","./components\\pages\\slides\\1\\_page.svelte-802a5599.js","./chunks\\index-2b26cad3.js"],import.meta.url),()=>C(()=>import("./chunks/5-9257e315.js"),["./chunks\\5-9257e315.js","./components\\pages\\slides\\2\\_page.svelte-1ca34987.js","./chunks\\index-2b26cad3.js"],import.meta.url),()=>C(()=>import("./chunks/6-f475e89e.js"),["./chunks\\6-f475e89e.js","./components\\pages\\slides\\3\\_page.svelte-d15be1c8.js","./chunks\\index-2b26cad3.js"],import.meta.url),()=>C(()=>import("./chunks/7-9e63541c.js"),["./chunks\\7-9e63541c.js","./components\\pages\\slides\\4\\_page.svelte-bcf3e32f.js","./chunks\\index-2b26cad3.js"],import.meta.url),()=>C(()=>import("./chunks/8-c6484351.js"),["./chunks\\8-c6484351.js","./components\\pages\\slides\\5\\_page.svelte-2a3db818.js","./chunks\\index-2b26cad3.js"],import.meta.url),()=>C(()=>import("./chunks/9-908e8735.js"),["./chunks\\9-908e8735.js","./components\\pages\\slides\\6\\_page.svelte-e31649a3.js","./chunks\\index-2b26cad3.js"],import.meta.url),()=>C(()=>import("./chunks/10-33f20381.js"),["./chunks\\10-33f20381.js","./components\\pages\\slides\\7\\_page.svelte-1e2dc7fa.js","./chunks\\index-2b26cad3.js"],import.meta.url),()=>C(()=>import("./chunks/11-e49f32f3.js"),["./chunks\\11-e49f32f3.js","./components\\pages\\slides\\8\\_page.svelte-c68222dd.js","./chunks\\index-2b26cad3.js"],import.meta.url),()=>C(()=>import("./chunks/12-9edf07e5.js"),["./chunks\\12-9edf07e5.js","./components\\pages\\slides\\9\\_page.svelte-82bf6550.js","./chunks\\index-2b26cad3.js","./assets\\_page-5f1e411b.css"],import.meta.url)],zt=[],Wt={"/":[3],"/slides/1":[4,[2]],"/slides/2":[5,[2]],"/slides/3":[6,[2]],"/slides/4":[7,[2]],"/slides/5":[8,[2]],"/slides/6":[9,[2]],"/slides/7":[10,[2]],"/slides/8":[11,[2]],"/slides/9":[12,[2]]},Yt={handleError:({error:a})=>{console.error(a)}};let Ae=class{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},xe=class{constructor(e,n){this.status=e,this.location=n}};async function Xt(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([i,r])=>[i,await r])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Zt=-1,Qt=-2,xt=-3,en=-4,tn=-5,nn=-6;function an(a){if(typeof a=="number")return i(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const e=a,n=Array(e.length);function i(r,d=!1){if(r===Zt)return;if(r===xt)return NaN;if(r===en)return 1/0;if(r===tn)return-1/0;if(r===nn)return-0;if(d)throw new Error("Invalid input");if(r in n)return n[r];const t=e[r];if(!t||typeof t!="object")n[r]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[r]=new Date(t[1]);break;case"Set":const u=new Set;n[r]=u;for(let y=1;y<t.length;y+=1)u.add(i(t[y]));break;case"Map":const p=new Map;n[r]=p;for(let y=1;y<t.length;y+=2)p.set(i(t[y]),i(t[y+1]));break;case"RegExp":n[r]=new RegExp(t[1],t[2]);break;case"Object":n[r]=Object(t[1]);break;case"BigInt":n[r]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[r]=g;for(let y=1;y<t.length;y+=2)g[t[y]]=i(t[y+1]);break}else{const f=new Array(t.length);n[r]=f;for(let u=0;u<t.length;u+=1){const p=t[u];p!==Qt&&(f[u]=i(p))}}else{const f={};n[r]=f;for(const u in t){const p=t[u];f[u]=i(p)}}return n[r]}return i(0)}function rn(a){return a.filter(e=>e!=null)}const $e=Ut(me,zt,Wt,Kt),Oe=me[0],Pe=me[1];Oe();Pe();let ie={};try{ie=JSON.parse(sessionStorage[tt])}catch{}function Se(a){ie[a]=he()}function on({target:a,base:e}){var Ge;const n=document.documentElement,i=[];let r=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,u=!1,p=!0,g=!1,y=!1,N=!1,k=!1,B,O=(Ge=history.state)==null?void 0:Ge[W];O||(O=Date.now(),history.replaceState({...history.state,[W]:O},"",location.href));const ge=ie[O];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let X,Te,se;async function Ue(){se=se||Promise.resolve(),await se,se=null;const o=new URL(location.href),s=fe(o,!0);r=null,await je(s,o,[])}async function we(o,{noScroll:s=!1,replaceState:c=!1,keepFocus:l=!1,state:_={},invalidateAll:h=!1},m,b){return typeof o=="string"&&(o=new URL(o,Ke(document))),ue({url:o,scroll:s?he():null,keepfocus:l,redirect_chain:m,details:{state:_,replaceState:c},nav_token:b,accepted:()=>{h&&(k=!0)},blocked:()=>{},type:"goto"})}async function De(o){const s=fe(o,!1);if(!s)throw new Error(`Attempted to preload a URL that does not belong to this app: ${o}`);return r={id:s.id,promise:qe(s).then(c=>(c.type==="loaded"&&c.state.error&&(r=null),c))},r.promise}async function le(...o){const c=$e.filter(l=>o.some(_=>l.exec(_))).map(l=>Promise.all([...l.layouts,l.leaf].map(_=>_==null?void 0:_[1]())));await Promise.all(c)}async function je(o,s,c,l,_={},h){var b,v;Te=_;let m=o&&await qe(o);if(m||(m=await Me(s,{id:null},await ae(new Error(`Not found: ${s.pathname}`),{url:s,params:{},route:{id:null}}),404)),s=(o==null?void 0:o.url)||s,Te!==_)return!1;if(m.type==="redirect")if(c.length>10||c.includes(s.pathname))m=await ce({status:500,error:await ae(new Error("Redirect loop"),{url:s,params:{},route:{id:null}}),url:s,route:{id:null}});else return we(new URL(m.location,s).href,{},[...c,s.pathname],_),!1;else((v=(b=m.props)==null?void 0:b.page)==null?void 0:v.status)>=400&&await Y.updated.check()&&await ne(s);if(i.length=0,k=!1,g=!0,l&&l.details){const{details:w}=l,R=w.replaceState?0:1;w.state[W]=O+=R,history[w.replaceState?"replaceState":"pushState"](w.state,"",s)}if(r=null,u?(t=m.state,m.props.page&&(m.props.page.url=s),B.$set(m.props)):Ve(m),l){const{scroll:w,keepfocus:R}=l;if(R||Le(),await de(),p){const I=s.hash&&document.getElementById(s.hash.slice(1));w?scrollTo(w.x,w.y):I?I.scrollIntoView():scrollTo(0,0)}}else await de();p=!0,m.props.page&&(X=m.props.page),h&&h(),g=!1}function Ve(o){var l;t=o.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),X=o.props.page,B=new Gt({target:a,props:{...o.props,stores:Y},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};d.after_navigate.forEach(_=>_(c)),u=!0}async function te({url:o,params:s,branch:c,status:l,error:_,route:h,form:m}){let b="never";for(const S of c)(S==null?void 0:S.slash)!==void 0&&(b=S.slash);o.pathname=wt(o.pathname,b),o.search=o.search;const v={type:"loaded",state:{url:o,params:s,branch:c,error:_,route:h},props:{components:rn(c).map(S=>S.node.component)}};m!==void 0&&(v.props.form=m);let w={},R=!X,I=0;for(let S=0;S<Math.max(c.length,t.branch.length);S+=1){const E=c[S],P=t.branch[S];(E==null?void 0:E.data)!==(P==null?void 0:P.data)&&(R=!0),E&&(w={...w,...E.data},R&&(v.props[`data_${I}`]=w),I+=1)}return(!t.url||o.href!==t.url.href||t.error!==_||m!==void 0&&m!==X.form||R)&&(v.props.page={error:_,params:s,route:{id:(h==null?void 0:h.id)??null},status:l,url:new URL(o),form:m??null,data:R?w:X.data}),v}async function ye({loader:o,parent:s,url:c,params:l,route:_,server_data_node:h}){var w,R,I;let m=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await o();if((w=v.universal)!=null&&w.load){let F=function(...E){for(const P of E){const{href:V}=new URL(P,c);b.dependencies.add(V)}};const S={route:{get id(){return b.route=!0,_.id}},params:new Proxy(l,{get:(E,P)=>(b.params.add(P),E[P])}),data:(h==null?void 0:h.data)??null,url:Et(c,()=>{b.url=!0}),async fetch(E,P){let V;E instanceof Request?(V=E.url,P={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...P}):V=E;const $=new URL(V,c).href;return F($),u?It(V,$,P):Lt(V,P)},setHeaders:()=>{},depends:F,parent(){return b.parent=!0,s()}};m=await v.universal.load.call(null,S)??null,m=m?await Xt(m):null}return{node:v,loader:o,server:h,universal:(R=v.universal)!=null&&R.load?{type:"data",data:m,uses:b}:null,data:m??(h==null?void 0:h.data)??null,slash:((I=v.universal)==null?void 0:I.trailingSlash)??(h==null?void 0:h.slash)}}function Ce(o,s,c,l,_){if(k)return!0;if(!l)return!1;if(l.parent&&o||l.route&&s||l.url&&c)return!0;for(const h of l.params)if(_[h]!==t.params[h])return!0;for(const h of l.dependencies)if(i.some(m=>m(new URL(h))))return!0;return!1}function ve(o,s){return(o==null?void 0:o.type)==="data"?{type:"data",data:o.data,uses:{dependencies:new Set(o.uses.dependencies??[]),params:new Set(o.uses.params??[]),parent:!!o.uses.parent,route:!!o.uses.route,url:!!o.uses.url},slash:o.slash}:(o==null?void 0:o.type)==="skip"?s??null:null}async function qe({id:o,invalidating:s,url:c,params:l,route:_}){if((r==null?void 0:r.id)===o)return r.promise;const{errors:h,layouts:m,leaf:b}=_,v=[...m,b];h.forEach($=>$==null?void 0:$().catch(()=>{})),v.forEach($=>$==null?void 0:$[1]().catch(()=>{}));let w=null;const R=t.url?o!==t.url.pathname+t.url.search:!1,I=t.route?_.id!==t.route.id:!1,F=v.reduce(($,A,T)=>{var ee;const L=t.branch[T],x=!!(A!=null&&A[0])&&((L==null?void 0:L.loader)!==A[1]||Ce($.some(Boolean),I,R,(ee=L.server)==null?void 0:ee.uses,l));return $.push(x),$},[]);if(F.some(Boolean)){try{w=await et(c,F)}catch($){return ce({status:500,error:await ae($,{url:c,params:l,route:{id:_.id}}),url:c,route:_})}if(w.type==="redirect")return w}const S=w==null?void 0:w.nodes;let E=!1;const P=v.map(async($,A)=>{var ee;if(!$)return;const T=t.branch[A],L=S==null?void 0:S[A];if((!L||L.type==="skip")&&$[1]===(T==null?void 0:T.loader)&&!Ce(E,I,R,(ee=T.universal)==null?void 0:ee.uses,l))return T;if(E=!0,(L==null?void 0:L.type)==="error")throw L;return ye({loader:$[1],url:c,params:l,route:_,parent:async()=>{var Je;const He={};for(let be=0;be<A;be+=1)Object.assign(He,(Je=await P[be])==null?void 0:Je.data);return He},server_data_node:ve(L===void 0&&$[0]?{type:"skip"}:L??null,T==null?void 0:T.server)})});for(const $ of P)$.catch(()=>{});const V=[];for(let $=0;$<v.length;$+=1)if(v[$])try{V.push(await P[$])}catch(A){if(A instanceof xe)return{type:"redirect",location:A.location};let T=500,L;if(S!=null&&S.includes(A))T=A.status??T,L=A.error;else if(A instanceof Ae)T=A.status,L=A.body;else{if(await Y.updated.check())return await ne(c);L=await ae(A,{params:l,url:c,route:{id:_.id}})}const x=await Be($,V,h);return x?await te({url:c,params:l,branch:V.slice(0,x.idx).concat(x.node),status:T,error:L,route:_}):await Me(c,{id:_.id},L,T)}else V.push(void 0);return await te({url:c,params:l,branch:V,status:200,error:null,route:_,form:s?void 0:null})}async function Be(o,s,c){for(;o--;)if(c[o]){let l=o;for(;!s[l];)l-=1;try{return{idx:l+1,node:{node:await c[o](),loader:c[o],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:o,error:s,url:c,route:l}){const _={},h=await Oe();let m=null;if(h.has_server_load)try{const w=await et(c,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;m=w.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await ne(c)}const b=await ye({loader:Oe,url:c,params:_,route:l,parent:()=>Promise.resolve({}),server_data_node:ve(m)}),v={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await te({url:c,params:_,branch:[b,v],status:o,error:s,route:null})}function fe(o,s){if(We(o,e))return;const c=yt(o.pathname.slice(e.length)||"/");for(const l of $e){const _=l.exec(c);if(_)return{id:o.pathname+o.search,invalidating:s,route:l,params:vt(_),url:o}}}function Fe({url:o,type:s,intent:c,delta:l}){var b,v;let _=!1;const h={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((v=c==null?void 0:c.route)==null?void 0:v.id)??null},url:o},willUnload:!c,type:s};l!==void 0&&(h.delta=l);const m={...h,cancel:()=>{_=!0}};return y||d.before_navigate.forEach(w=>w(m)),_?null:h}async function ue({url:o,scroll:s,keepfocus:c,redirect_chain:l,details:_,type:h,delta:m,nav_token:b,accepted:v,blocked:w}){const R=fe(o,!1),I=Fe({url:o,type:h,delta:m,intent:R});if(!I){w();return}Se(O),v(),y=!0,u&&Y.navigating.set(I),await je(R,o,l,{scroll:s,keepfocus:c,details:_},b,()=>{y=!1,d.after_navigate.forEach(F=>F(I)),Y.navigating.set(null)})}async function Me(o,s,c,l){return o.origin===location.origin&&o.pathname===location.pathname&&!f?await ce({status:l,error:c,url:o,route:s}):await ne(o)}function ne(o){return location.href=o.href,new Promise(()=>{})}function nt(){let o;n.addEventListener("mousemove",h=>{const m=h.target;clearTimeout(o),o=setTimeout(()=>{l(m,2)},20)});function s(h){l(h.composedPath()[0],1)}n.addEventListener("mousedown",s),n.addEventListener("touchstart",s,{passive:!0});const c=new IntersectionObserver(h=>{for(const m of h)m.isIntersecting&&(le(new URL(m.target.href).pathname),c.unobserve(m.target))},{threshold:0});function l(h,m){const b=ze(h,n);if(!b)return;const{url:v,external:w}=ke(b,e);if(w)return;const R=pe(b);R.reload||(m<=R.preload_data?De(v):m<=R.preload_code&&le(v.pathname))}function _(){c.disconnect();for(const h of n.querySelectorAll("a")){const{url:m,external:b}=ke(h,e);if(b)continue;const v=pe(h);v.reload||(v.preload_code===Ye.viewport&&c.observe(h),v.preload_code===Ye.eager&&le(m.pathname))}}d.after_navigate.push(_),_()}return{after_navigate:o=>{Ie(()=>(d.after_navigate.push(o),()=>{const s=d.after_navigate.indexOf(o);d.after_navigate.splice(s,1)}))},before_navigate:o=>{Ie(()=>(d.before_navigate.push(o),()=>{const s=d.before_navigate.indexOf(o);d.before_navigate.splice(s,1)}))},disable_scroll_handling:()=>{(g||!u)&&(p=!1)},goto:(o,s={})=>we(o,s,[]),invalidate:o=>{if(typeof o=="function")i.push(o);else{const{href:s}=new URL(o,location.href);i.push(c=>c.href===s)}return Ue()},invalidateAll:()=>(k=!0,Ue()),preload_data:async o=>{const s=new URL(o,Ke(document));await De(s)},preload_code:le,apply_action:async o=>{if(o.type==="error"){const s=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const _=await Be(t.branch.length,c,l.errors);if(_){const h=await te({url:s,params:t.params,branch:c.slice(0,_.idx).concat(_.node),status:o.status??500,error:o.error,route:l});t=h.state,B.$set(h.props),de().then(Le)}}else if(o.type==="redirect")we(o.location,{invalidateAll:!0},[]);else{const s={form:o.data,page:{...X,form:o.data,status:o.status}};B.$set(s),o.type==="success"&&de().then(Le)}},_start_router:()=>{var o;history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var l;let c=!1;if(!y){const _={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};d.before_navigate.forEach(h=>h(_))}c?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se(O);try{sessionStorage[tt]=JSON.stringify(ie)}catch{}}}),(o=navigator.connection)!=null&&o.saveData||nt(),n.addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const c=ze(s.composedPath()[0],n);if(!c)return;const{url:l,external:_,target:h}=ke(c,e);if(!l)return;if(h==="_parent"||h==="_top"){if(window.parent!==window)return}else if(h&&h!=="_self")return;const m=pe(c);if(!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(_||m.reload){Fe({url:l,type:"link"})||s.preventDefault(),y=!0;return}const[v,w]=l.href.split("#");if(w!==void 0&&v===location.href.split("#")[0]){N=!0,Se(O),t.url=l,Y.page.set({...X,url:l}),Y.page.notify();return}ue({url:l,scroll:m.noscroll?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),n.addEventListener("submit",s=>{if(s.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(s.target),l=s.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const h=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(We(h,e))return;const m=s.target,{noscroll:b,reload:v}=pe(m);if(v)return;s.preventDefault(),s.stopPropagation();const w=new FormData(m),R=l==null?void 0:l.getAttribute("name");R&&w.append(R,(l==null?void 0:l.getAttribute("value"))??""),h.search=new URLSearchParams(w).toString(),ue({url:h,scroll:b?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",s=>{var c;if((c=s.state)!=null&&c[W]){if(s.state[W]===O)return;const l=s.state[W]-O;ue({url:new URL(location.href),scroll:ie[s.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=s.state[W]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{N&&(N=!1,history.replaceState({...history.state,[W]:++O},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&Y.navigating.set(null)})},_hydrate:async({status:o=200,error:s,node_ids:c,params:l,route:_,data:h,form:m})=>{f=!0;const b=new URL(location.href);({params:l={},route:_={id:null}}=fe(b,!1)||{});let v;try{const w=c.map(async(R,I)=>{const F=h[I];return ye({loader:me[R],url:b,params:l,route:_,parent:async()=>{const S={};for(let E=0;E<I;E+=1)Object.assign(S,(await w[E]).data);return S},server_data_node:ve(F)})});v=await te({url:b,params:l,branch:await Promise.all(w),status:o,error:s,form:m,route:$e.find(({id:R})=>R===_.id)??null})}catch(w){if(w instanceof xe){await ne(new URL(w.location,location.href));return}v=await ce({status:w instanceof Ae?w.status:500,error:await ae(w,{url:b,params:l,route:_}),url:b,route:_})}Ve(v)}}}async function et(a,e){var d;const n=new URL(a);n.pathname=$t(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await _e(n.href),r=await i.json();if(!i.ok)throw new Error(r);return(d=r.nodes)==null||d.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=an(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),r}function ae(a,e){return a instanceof Ae?a.body:Yt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var i;(i=getSelection())==null||i.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function un({env:a,hydrate:e,paths:n,target:i,version:r}){_t(n),gt(r);const d=on({target:i,base:n.base});mt({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{un as start};