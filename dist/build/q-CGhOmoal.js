import{_ as v}from"./q-uemlvruI.js";import{z as F,v as D,n as x,o as U,B as y,C as z,D as R,A as H,q,x as Y,E as J}from"./q-CqTezyzO.js";const G='((i,r,a,o)=>{a=e=>{const t=document.querySelector("[q\\\\:base]");t&&r.active&&r.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;r?a(t):i.push(t)}),"serviceWorker"in navigator?navigator.serviceWorker.register("/service-worker.js").then(e=>{o=()=>{r=e,i.forEach(a),a({bundles:i})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&o()}):e.active&&o()}).catch(e=>console.error(e)):console.log("Service worker not supported in this browser.")})([])',me=y("qc-s"),Ce=y("qc-c"),_e=y("qc-ic"),X=y("qc-h"),Z=y("qc-l"),$=y("qc-n"),Ee=y("qc-a"),Se=y("qc-ir"),Ae=z(q(()=>v(()=>import("./q-BGmpAaRo.js"),[]),"s_1RJPKHqF8AQ")),we=e=>{},ve=H(q(()=>v(()=>import("./q-YH_JNRDZ.js"),[]),"s_e0ssiDXoeAM")),k=new WeakMap,_=new Map,b=new Set,p="qaction",De="qfunc",qe="qdata",S=e=>e.pathname+e.search+e.hash,C=(e,t)=>new URL(e,t.href),ee=(e,t)=>e.origin===t.origin,N=e=>e.endsWith("/")?e:e+"/",K=({pathname:e},{pathname:t})=>{const n=Math.abs(e.length-t.length);return n===0?e===t:n===1&&N(e)===N(t)},te=(e,t)=>e.search===t.search,T=(e,t)=>te(e,t)&&K(e,t),ne=(e,t,n)=>{let s=t??"";return n&&(s+=(s?"&":"?")+p+"="+encodeURIComponent(n.id)),e+(e.endsWith("/")?"":"/")+"q-data.json"+s},Te=(e,t)=>{const n=e.href;if(typeof n=="string"&&typeof e.target!="string"&&!e.reload)try{const s=C(n.trim(),t.url),r=C("",t.url);if(ee(s,r))return S(s)}catch(s){console.error(s)}else if(e.reload)return S(C("",t.url));return null},Oe=(e,t)=>{if(e){const n=C(e,t.url),s=C("",t.url);return!T(n,s)}return!1},Pe=(e,t)=>{if(e){const n=C(e,t.url),s=C("",t.url);return!K(n,s)}return!1},se=e=>e&&typeof e.then=="function",Re=(e,t,n,s)=>{const r=re(),c={head:r,withLocale:a=>R(s,a),resolveValue:a=>{const i=a.__id;if(a.__brand==="server_loader"&&!(i in e.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const l=e.loaders[i];if(se(l))throw new Error("Loaders returning a promise can not be resolved for the head function.");return l},...t};for(let a=n.length-1;a>=0;a--){const i=n[a]&&n[a].head;i&&(typeof i=="function"?I(r,R(s,()=>i(c))):typeof i=="object"&&I(r,i))}return c.head},I=(e,t)=>{typeof t.title=="string"&&(e.title=t.title),E(e.meta,t.meta),E(e.links,t.links),E(e.styles,t.styles),E(e.scripts,t.scripts),Object.assign(e.frontmatter,t.frontmatter)},E=(e,t)=>{if(Array.isArray(t))for(const n of t){if(typeof n.key=="string"){const s=e.findIndex(r=>r.key===n.key);if(s>-1){e[s]=n;continue}}e.push(n)}},re=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}});function oe(e,t){const n=Q(e),s=L(e),r=Q(t),o=L(t);return V(e,n,s,t,r,o)}function V(e,t,n,s,r,o){let c=null;for(;t<n;){const a=e.charCodeAt(t++),i=s.charCodeAt(r++);if(a===91){const l=B(e,t),f=t+(l?3:0),d=w(e,f,n,93),u=e.substring(f,d),h=w(e,d+1,n,47),g=e.substring(d+1,h);t=d+1;const m=r-1;if(l){const P=ae(u,g,s,m,o,e,t+g.length+1,n);if(P)return Object.assign(c||(c={}),P)}const A=w(s,m,o,47,g);if(A==-1)return null;const O=s.substring(m,A);if(!l&&!g&&!O)return null;r=A,(c||(c={}))[u]=decodeURIComponent(O)}else if(a!==i&&!(isNaN(i)&&ce(e,t)))return null}return W(e,t)&&W(s,r)?c||{}:null}function ce(e,t){return e.charCodeAt(t)===91&&B(e,t+1)}function L(e){const t=e.length;return t>1&&e.charCodeAt(t-1)===47?t-1:t}function W(e,t){const n=e.length;return t>=n||t==n-1&&e.charCodeAt(t)===47}function Q(e){return e.charCodeAt(0)===47?1:0}function B(e,t){return e.charCodeAt(t)===46&&e.charCodeAt(t+1)===46&&e.charCodeAt(t+2)===46}function w(e,t,n,s,r=""){for(;t<n&&e.charCodeAt(t)!==s;)t++;const o=r.length;for(let c=0;c<o;c++)if(e.charCodeAt(t-o+c)!==r.charCodeAt(c))return-1;return t-o}let M;(function(e){e[e.EOL=0]="EOL",e[e.OPEN_BRACKET=91]="OPEN_BRACKET",e[e.CLOSE_BRACKET=93]="CLOSE_BRACKET",e[e.DOT=46]="DOT",e[e.SLASH=47]="SLASH"})(M||(M={}));function ae(e,t,n,s,r,o,c,a){n.charCodeAt(s)===47&&s++;let i=r;const l=t+"/";for(;i>=s;){const f=V(o,c,a,n,i,r);if(f){let u=n.substring(s,Math.min(i,r));return u.endsWith(l)&&(u=u.substring(0,u.length-l.length)),f[e]=decodeURIComponent(u),f}const d=ie(n,s,l,i,s-1)+l.length;if(i===d)break;i=d}return null}function ie(e,t,n,s,r){let o=e.lastIndexOf(n,s);return o==s-n.length&&(o=e.lastIndexOf(n,s-n.length-1)),o>t?o:r}const ke=async(e,t,n,s)=>{if(!Array.isArray(e))return null;for(const r of e){const o=r[0],c=oe(o,s);if(!c)continue;const a=r[1],i=r[3],l=new Array(a.length),f=[];a.forEach((h,g)=>{j(h,f,m=>l[g]=m)});const d=le(t,s);let u;return j(d,f,h=>u=h==null?void 0:h.default),f.length>0&&await Promise.all(f),[o,c,l,u,i]}return null},j=(e,t,n,s)=>{if(typeof e=="function"){const r=k.get(e);if(r)n(r);else{const o=e();typeof o.then=="function"?t.push(o.then(c=>{k.set(e,c),n(c)})):o&&n(o)}}},le=(e,t)=>{if(e){t=t.endsWith("/")?t:t+"/";const n=e.find(s=>s[0]===t||t.startsWith(s[0]+(t.endsWith("/")?"":"/")));if(n)return n[1]}},be=(e,t,n,s,r=!1)=>{if(t!=="popstate"){const o=T(n,s),c=n.hash===s.hash;if(!o||!c){const a={_qCityScroll:fe()};r?e.history.replaceState(a,"",S(s)):e.history.pushState(a,"",S(s))}}},fe=()=>({x:0,y:0,w:0,h:0}),ue=e=>{e=e.endsWith("/")?e:e+"/",b.has(e)||(b.add(e),document.dispatchEvent(new CustomEvent("qprefetch",{detail:{links:[e]}})))},Ne=async(e,t,n)=>{const s=e.pathname,r=e.search,o=ne(s,r,n==null?void 0:n.action);let c;n!=null&&n.action||(c=_.get(o)),(n==null?void 0:n.prefetchSymbols)!==!1&&ue(s);let a;if(!c){const i=he(n==null?void 0:n.action);n!=null&&n.action&&(n.action.data=void 0),c=fetch(o,i).then(l=>{const f=new URL(l.url),d=f.pathname.endsWith("/q-data.json");if(f.origin!==location.origin||!d){location.href=f.href;return}if((l.headers.get("content-type")||"").includes("json"))return l.text().then(u=>{const h=F(u,t);if(!h){location.href=e.href;return}if(n!=null&&n.clearCache&&_.delete(o),h.redirect)location.href=h.redirect;else if(n!=null&&n.action){const{action:g}=n,m=h.loaders[g.id];a=()=>{g.resolve({status:l.status,result:m})}}return h});(n==null?void 0:n.isPrefetch)!==!0&&(location.href=e.href)}),n!=null&&n.action||_.set(o,c)}return c.then(i=>(i||_.delete(o),a&&a(),i))},he=e=>{const t=e==null?void 0:e.data;if(t)return t instanceof FormData?{method:"POST",body:t}:{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json, charset=UTF-8"}}},Ie=()=>D(X),Le=()=>D(Z),We=()=>D($),Qe=()=>x(U("qwikcity")),Me=(e,t,n,s,r)=>{e==="popstate"&&r?s.scrollTo(r.x,r.y):(e==="link"||e==="form")&&(de(t,n)||s.scrollTo(0,0))},de=(e,t)=>{const n=e.hash.slice(1),s=n&&document.getElementById(n);return s?(s.scrollIntoView(),!0):!!(!s&&e.hash&&T(e,t))},je=e=>({x:e.scrollLeft,y:e.scrollTop,w:Math.max(e.scrollWidth,e.clientWidth),h:Math.max(e.scrollHeight,e.clientHeight)}),Fe=()=>{const e=history.state;return e==null?void 0:e._qCityScroll},He=e=>{const t=history.state||{};t._qCityScroll=e,history.replaceState(t,"")},Ke="_qCityScroller",Ve=H(q(()=>v(()=>import("./q-DvmkRqi_.js"),[]),"s_TxCFOy819ag"));function Be(e){for(;e&&e.nodeType!==Node.ELEMENT_NODE;)e=e.parentElement;return e.closest("[q\\:container]")}const xe=e=>Y("script",{nonce:J(e,"nonce")},{dangerouslySetInnerHTML:G},null,3,"1Z_0"),Ue=async function*(e,t,n){const s=e.getReader();try{let r="";const o=new TextDecoder;for(;!(n!=null&&n.aborted);){const c=await s.read();if(c.done)break;r+=o.decode(c.value,{stream:!0});const a=r.split(/\n/);r=a.pop();for(const i of a)yield await F(i,t)}}finally{s.releaseLock()}};export{Qe as A,we as B,Ce as C,X as D,De as E,Ue as F,qe as G,Ie as H,Ve as I,ve as J,Ke as Q,Z as R,xe as S,Le as a,Pe as b,re as c,_e as d,$ as e,me as f,Te as g,Ee as h,Se as i,ee as j,T as k,Ne as l,Fe as m,ke as n,Re as o,ue as p,_ as q,Me as r,Oe as s,C as t,We as u,He as v,je as w,Ae as x,be as y,Be as z};