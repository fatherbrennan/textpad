import{u as P,e as f,f as y,a as S,d as k,q as _,S as g}from"./q-CqTezyzO.js";import{_ as u}from"./q-YUskSNrc.js";import{u as D,a as m,g as A,s as O,b as $,p as q,l as x}from"./q-HvMOzJiG.js";const C=async(o,e)=>{const[t,s,n,i]=P();o.defaultPrevented&&(e.hasAttribute("q:nbs")?await t(location.href,{type:"popstate"}):e.href&&(e.setAttribute("aria-pressed","true"),await t(e.href,{forceReload:s,replaceState:n,scroll:i}),e.removeAttribute("aria-pressed")))},L=o=>{const e=D(),t=m(),{onClick$:s,prefetch:n,reload:i,replaceState:p,scroll:v,...r}=o,a=f(()=>A({...r,reload:i},t));r.href=a||o.href;const h=f(()=>!!a&&n!==!1&&n!=="js"&&O(a,t)||void 0),l=f(()=>h||!!a&&n!==!1&&$(a,t))?_(()=>u(()=>Promise.resolve().then(()=>d),void 0),"s_Osdg8FnYTw4"):void 0,b=a?y((c,E)=>{c.metaKey||c.ctrlKey||c.shiftKey||c.altKey||c.preventDefault()}):void 0;return S("a",{"q:link":!!a,...r,"data-prefetch":h,children:k(g,null,3,"AD_0"),onClick$:[b,s,a?_(()=>u(()=>Promise.resolve().then(()=>d),void 0),"s_pIf0khHUxfY",[e,i,p,v]):void 0],onMouseOver$:[r.onMouseOver$,l],onFocus$:[r.onFocus$,l],onQVisible$:[r.onQVisible$,l]},null,0,"AD_1")},j=(o,e)=>{var t;if(!((t=navigator.connection)!=null&&t.saveData)&&e&&e.href){const s=new URL(e.href);q(s.pathname),e.hasAttribute("data-prefetch")&&x(s,e,{prefetchSymbols:!1,isPrefetch:!0})}},d=Object.freeze(Object.defineProperty({__proto__:null,s_8gdLBszqbaM:L,s_Osdg8FnYTw4:j,s_pIf0khHUxfY:C},Symbol.toStringTag,{value:"Module"}));export{L as s_8gdLBszqbaM,j as s_Osdg8FnYTw4,C as s_pIf0khHUxfY};
