import{u as i,h as _,x as t,c,q as a,s as m}from"./q-CqTezyzO.js";import{_ as r}from"./q-YUskSNrc.js";const p=l=>{const[e]=i();e.value=l.replace(/\n/g," ")},g=async(l,{value:e})=>{const[o,s]=i();await s(e),await o()},f=async(l,{value:e})=>{const[o]=i();await o(e)},h=async()=>{const[l,e]=i();try{l.value=!0,console.log(e.value),await navigator.clipboard.writeText(e.value),setTimeout(()=>l.value=!1,1e3)}catch(o){console.log(o)}},w=()=>{const l=_(""),e=_(!1),o=a(()=>r(()=>Promise.resolve().then(()=>u),void 0),"s_DJ7B1fSOKKg",[e,l]),s=a(()=>r(()=>Promise.resolve().then(()=>u),void 0),"s_lHgzDFWmLgY",[l]),v=a(()=>r(()=>Promise.resolve().then(()=>u),void 0),"s_r0N5DJ5UVmw",[s]),d=a(()=>r(()=>Promise.resolve().then(()=>u),void 0),"s_0NmPgQmiBzw",[o,s]);return t("div",null,{class:"flex h-full flex-grow flex-col"},[t("div",null,{class:"flex flex-row-reverse pb-2 text-ink"},t("button",null,{type:"button",class:"rounded-sm p-1 outline-black hover:bg-[#ededeb]",title:c(n=>`Cop${n.value?"ied":"y"} to cliboard`,[e]),onClick$:o},t("svg",null,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"size-6"},t("g",null,{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[t("path",null,{d:"M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"},null,3,null),t("path",null,{d:c(n=>`M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2${n.value?"m0 9l2 2l4-4":""}`,[e])},null,3,null)],3,null),3,null),3,null),3,null),t("textarea",null,{name:"textpad",id:"textpad",title:"textpad",class:"h-full w-full resize-none rounded-sm bg-[#fdfdfc] p-2 outline-black",placeholder:"Lorem, ipsum...",fetchPriority:"high",value:c(n=>n.value,[l]),onInput$:v,onPaste$:d},null,3,null)],3,"Yk_0")},u=Object.freeze(Object.defineProperty({__proto__:null,_hW:m,s_0NmPgQmiBzw:g,s_DJ7B1fSOKKg:h,s_lHgzDFWmLgY:p,s_r0N5DJ5UVmw:f,s_w2hlKAJ1HvE:w},Symbol.toStringTag,{value:"Module"}));export{m as _hW,g as s_0NmPgQmiBzw,h as s_DJ7B1fSOKKg,p as s_lHgzDFWmLgY,f as s_r0N5DJ5UVmw,w as s_w2hlKAJ1HvE};
