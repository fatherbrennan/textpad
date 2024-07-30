import{c as V,i as X,e as ae,f as le,a as _,_ as h,b as ce,g as Y,F as N,j as m,h as de,k as ue,s as me,R as pe,l as fe,Q as we}from"./q-B9scdrD3.js";const he=()=>{const t=ae(),e=le();return _(N,{children:[h("title",null,null,t.title,1,null),h("link",null,{rel:"canonical",href:ce(n=>n.url.href,[e],"p0.url.href")},null,3,null),h("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),h("link",null,{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,3,null),t.meta.map(n=>Y("meta",{...n},null,0,n.key)),t.links.map(n=>Y("link",{...n},null,0,n.key))]},1,"DB_0")},be=V(X(he,"s_A2gdSLoQyX4"));/**
 * @license
 * @builder.io/qwik/server 1.7.1
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */var ye=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')}),ge="<sync>";function _e(t,e){const n=e==null?void 0:e.mapper,r=t.symbolMapper?t.symbolMapper:(o,a,i)=>{var l;if(n){const c=S(o),d=n[c];if(!d){if(c===ge)return[c,""];if((l=globalThis.__qwik_reg_symbols)==null?void 0:l.has(c))return[o,"_"];if(i)return[o,`${i}?qrl=${o}`];console.error("Cannot resolve symbol",o,"in",n,i)}return d}};return{isServer:!0,async importSymbol(o,a,i){var q;const l=S(i),c=(q=globalThis.__qwik_reg_symbols)==null?void 0:q.get(l);if(c)return c;let d=String(a);d.endsWith(".js")||(d+=".js");const b=ye(d);if(!(i in b))throw new Error(`Q-ERROR: missing symbol '${i}' in module '${d}'.`);return b[i]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:o=>new Promise(a=>{setTimeout(()=>{a(o())})}),chunkForSymbol(o,a,i){return r(o,n,i)}}}async function qe(t,e){const n=_e(t,e);me(n)}var S=t=>{const e=t.lastIndexOf("_");return e>-1?t.slice(e+1):t};function z(){if(typeof performance>"u")return()=>0;const t=performance.now();return()=>(performance.now()-t)/1e6}function G(t){let e=t.base;return typeof t.base=="function"&&(e=t.base(t)),typeof e=="string"?(e.endsWith("/")||(e+="/"),e):"/textpadbuild/"}var ve='(()=>{var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,s=(e,s)=>{for(var a in s||(s={}))r.call(s,a)&&n(e,a,s[a]);if(t)for(var a of t(s))o.call(s,a)&&n(e,a,s[a]);return e};((e,t)=>{const r="__q_context__",o=window,n=new Set,a=new Set([e]),c="replace",i="forEach",l="target",f="getAttribute",p="isConnected",b="qvisible",u="_qwikjson_",y=(e,t)=>Array.from(e.querySelectorAll(t)),h=e=>{const t=[];return a.forEach((r=>t.push(...y(r,e)))),t},d=e=>{S(e),y(e,"[q\\\\:shadowroot]").forEach((e=>{const t=e.shadowRoot;t&&d(t)}))},m=e=>e&&"function"==typeof e.then,w=(e,t,r=t.type)=>{h("[on"+e+"\\\\:"+r+"]")[i]((o=>E(o,e,t,r)))},q=t=>{if(void 0===t[u]){let r=(t===e.documentElement?e.body:t).lastElementChild;for(;r;){if("SCRIPT"===r.tagName&&"qwik/json"===r[f]("type")){t[u]=JSON.parse(r.textContent[c](/\\\\x3C(\\/?script)/gi,"<$1"));break}r=r.previousElementSibling}}},v=(e,t)=>new CustomEvent(e,{detail:t}),E=async(t,o,n,a=n.type)=>{const i="on"+o+":"+a;t.hasAttribute("preventdefault:"+a)&&n.preventDefault();const l=t._qc_,b=l&&l.li.filter((e=>e[0]===i));if(b&&b.length>0){for(const e of b){const r=e[1].getFn([t,n],(()=>t[p]))(n,t),o=n.cancelBubble;m(r)&&await r,o&&n.stopPropagation()}return}const u=t[f](i);if(u){const o=t.closest("[q\\\\:container]"),a=o[f]("q:base"),i=o[f]("q:version")||"unknown",l=o[f]("q:manifest-hash")||"dev",b=new URL(a,e.baseURI);for(const f of u.split("\\n")){const u=new URL(f,b),y=u.href,h=u.hash[c](/^#?([^?[|]*).*$/,"$1")||"default",d=performance.now();let w,v,E;const _=f.startsWith("#"),A={qBase:a,qManifest:l,qVersion:i,href:y,symbol:h,element:t,reqTime:d};if(_){const t=o.getAttribute("q:instance");w=(e["qFuncs_"+t]||[])[Number.parseInt(h)],w||(v="sync",E=Error("sync handler error for symbol: "+h))}else{const e=u.href.split("#")[0];try{const t=import(e);q(o),w=(await t)[h],w||(v="no-symbol",E=Error(`${h} not in ${e}`))}catch(e){v||(v="async"),E=e}}if(!w){g("qerror",s({importError:v,error:E},A)),console.error(E);break}const k=e[r];if(t[p])try{e[r]=[t,n,u],_||g("qsymbol",s({},A));const o=w(n,t);m(o)&&await o}catch(e){g("qerror",s({error:e},A))}finally{e[r]=k}}}},g=(t,r)=>{e.dispatchEvent(v(t,r))},_=e=>e[c](/([A-Z])/g,(e=>"-"+e.toLowerCase())),A=async e=>{let t=_(e.type),r=e[l];for(w("-document",e,t);r&&r[f];){const o=E(r,"",e,t);let n=e.cancelBubble;m(o)&&await o,n=n||e.cancelBubble||r.hasAttribute("stoppropagation:"+e.type),r=e.bubbles&&!0!==n?r.parentElement:null}},k=e=>{w("-window",e,_(e.type))},C=()=>{var r;const s=e.readyState;if(!t&&("interactive"==s||"complete"==s)&&(a.forEach(d),t=1,g("qinit"),(null!=(r=o.requestIdleCallback)?r:o.setTimeout).bind(o)((()=>g("qidle"))),n.has(b))){const e=h("[on\\\\:"+b+"]"),t=new IntersectionObserver((e=>{for(const r of e)r.isIntersecting&&(t.unobserve(r[l]),E(r[l],"",v(b,r)))}));e[i]((e=>t.observe(e)))}},O=(e,t,r,o=!1)=>e.addEventListener(t,r,{capture:o,passive:!1}),S=(...e)=>{for(const t of e)"string"==typeof t?n.has(t)||(a.forEach((e=>O(e,t,A,!0))),O(o,t,k,!0),n.add(t)):a.has(t)||(n.forEach((e=>O(t,e,A,!0))),a.add(t))};if(!(r in e)){e[r]=0;const t=o.qwikevents;Array.isArray(t)&&S(...t),o.qwikevents={events:n,roots:a,push:S},O(e,"readystatechange",C),C()}})(document)})()',ke=`(() => {
    var __defProp = Object.defineProperty;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: value
    }) : obj[key] = value;
    var __spreadValues = (a, b) => {
        for (var prop in b || (b = {})) {
            __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
        }
        if (__getOwnPropSymbols) {
            for (var prop of __getOwnPropSymbols(b)) {
                __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
            }
        }
        return a;
    };
    ((doc, hasInitialized) => {
        const Q_CONTEXT = "__q_context__";
        const win = window;
        const events =  new Set;
        const roots =  new Set([ doc ]);
        const nativeQuerySelectorAll = (root, selector) => Array.from(root.querySelectorAll(selector));
        const querySelectorAll = query => {
            const elements = [];
            roots.forEach((root => elements.push(...nativeQuerySelectorAll(root, query))));
            return elements;
        };
        const findShadowRoots = fragment => {
            processEventOrNode(fragment);
            nativeQuerySelectorAll(fragment, "[q\\\\:shadowroot]").forEach((parent => {
                const shadowRoot = parent.shadowRoot;
                shadowRoot && findShadowRoots(shadowRoot);
            }));
        };
        const isPromise = promise => promise && "function" == typeof promise.then;
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((el => dispatch(el, infix, ev, type)));
        };
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === script.getAttribute("type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/gi, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const relevantListeners = ctx && ctx.li.filter((li => li[0] === attrName));
            if (relevantListeners && relevantListeners.length > 0) {
                for (const listener of relevantListeners) {
                    const results = listener[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                    const cancelBubble = ev.cancelBubble;
                    isPromise(results) && await results;
                    cancelBubble && ev.stopPropagation();
                }
                return;
            }
            const attrValue = element.getAttribute(attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const qBase = container.getAttribute("q:base");
                const qVersion = container.getAttribute("q:version") || "unknown";
                const qManifest = container.getAttribute("q:manifest-hash") || "dev";
                const base = new URL(qBase, doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const href = url.href;
                    const symbol = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    let handler;
                    let importError;
                    let error;
                    const isSync = qrl.startsWith("#");
                    const eventData = {
                        qBase: qBase,
                        qManifest: qManifest,
                        qVersion: qVersion,
                        href: href,
                        symbol: symbol,
                        element: element,
                        reqTime: reqTime
                    };
                    if (isSync) {
                        const hash = container.getAttribute("q:instance");
                        handler = (doc["qFuncs_" + hash] || [])[Number.parseInt(symbol)];
                        if (!handler) {
                            importError = "sync";
                            error = new Error("sync handler error for symbol: " + symbol);
                        }
                    } else {
                        const uri = url.href.split("#")[0];
                        try {
                            const module = import(
                                                        uri);
                            resolveContainer(container);
                            handler = (await module)[symbol];
                            if (!handler) {
                                importError = "no-symbol";
                                error = new Error(\`\${symbol} not in \${uri}\`);
                            }
                        } catch (err) {
                            importError || (importError = "async");
                            error = err;
                        }
                    }
                    if (!handler) {
                        emitEvent("qerror", __spreadValues({
                            importError: importError,
                            error: error
                        }, eventData));
                        console.error(error);
                        break;
                    }
                    const previousCtx = doc[Q_CONTEXT];
                    if (element.isConnected) {
                        try {
                            doc[Q_CONTEXT] = [ element, ev, url ];
                            isSync || emitEvent("qsymbol", __spreadValues({}, eventData));
                            const results = handler(ev, element);
                            isPromise(results) && await results;
                        } catch (error2) {
                            emitEvent("qerror", __spreadValues({
                                error: error2
                            }, eventData));
                        } finally {
                            doc[Q_CONTEXT] = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                const results = dispatch(element, "", ev, type);
                let cancelBubble = ev.cancelBubble;
                isPromise(results) && await results;
                cancelBubble = cancelBubble || ev.cancelBubble || element.hasAttribute("stoppropagation:" + ev.type);
                element = ev.bubbles && !0 !== cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                roots.forEach(findShadowRoots);
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const processEventOrNode = (...eventNames) => {
            for (const eventNameOrNode of eventNames) {
                if ("string" == typeof eventNameOrNode) {
                    if (!events.has(eventNameOrNode)) {
                        roots.forEach((root => addEventListener(root, eventNameOrNode, processDocumentEvent, !0)));
                        addEventListener(win, eventNameOrNode, processWindowEvent, !0);
                        events.add(eventNameOrNode);
                    }
                } else if (!roots.has(eventNameOrNode)) {
                    events.forEach((eventName => addEventListener(eventNameOrNode, eventName, processDocumentEvent, !0)));
                    roots.add(eventNameOrNode);
                }
            }
        };
        if (!(Q_CONTEXT in doc)) {
            doc[Q_CONTEXT] = 0;
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && processEventOrNode(...qwikevents);
            win.qwikevents = {
                events: events,
                roots: roots,
                push: processEventOrNode
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})()`;function W(t={}){return t.debug?ke:ve}function xe(t,e,n){if(!n)return[];const r=e.prefetchStrategy,s=G(e);if(r!==null){if(!r||!r.symbolsToPrefetch||r.symbolsToPrefetch==="auto")return je(t,n,s);if(typeof r.symbolsToPrefetch=="function")try{return r.symbolsToPrefetch({manifest:n.manifest})}catch(o){console.error("getPrefetchUrls, symbolsToPrefetch()",o)}}return[]}function je(t,e,n){const r=[],s=t==null?void 0:t.qrls,{mapper:o,manifest:a}=e,i=new Map;if(Array.isArray(s))for(const l of s){const c=l.getHash(),d=o[c];d&&Z(a,i,r,n,d[1])}return r}function Z(t,e,n,r,s){const o=r+s;let a=e.get(o);if(!a){a={url:o,imports:[]},e.set(o,a);const i=t.bundles[s];if(i&&Array.isArray(i.imports))for(const l of i.imports)Z(t,e,a.imports,r,l)}n.push(a)}function ze(t){if(t!=null&&t.mapping!=null&&typeof t.mapping=="object"&&t.symbols!=null&&typeof t.symbols=="object"&&t.bundles!=null&&typeof t.bundles=="object")return t}function E(){let s=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return s+="w.postMessage(u.map(u=>new URL(u,origin)+''));",s+="w.onmessage=()=>{w.terminate()};",s}function Se(t,e){const n={bundles:v(e).map(s=>s.split("/").pop())};return`(window.qwikPrefetchSW||(window.qwikPrefetchSW=[])).push(${JSON.stringify(["prefetch",t,...n.bundles])});`}function v(t){const e=[],n=r=>{if(Array.isArray(r))for(const s of r)e.includes(s.url)||(e.push(s.url),n(s.imports))};return n(t),e}function Ee(t){const e=new Map;let n=0;const r=(i,l)=>{if(Array.isArray(i))for(const c of i){const d=e.get(c.url)||0;e.set(c.url,d+1),n++,l.has(c.url)||(l.add(c.url),r(c.imports,l))}},s=new Set;for(const i of t)s.clear(),r(i.imports,s);const o=n/e.size*2,a=Array.from(e.entries());return a.sort((i,l)=>l[1]-i[1]),a.slice(0,5).filter(i=>i[1]>o).map(i=>i[0])}function Ne(t,e,n,r){const s=Ae(e==null?void 0:e.implementation),o=[];return s.prefetchEvent==="always"&&Ce(t,o,n,r),s.linkInsert==="html-append"&&Oe(o,n,s),s.linkInsert==="js-append"?Te(o,n,s,r):s.workerFetchInsert==="always"&&Ie(o,n,r),o.length>0?m(N,{children:o}):null}function Ce(t,e,n,r){const s=Ee(n);for(const o of s)e.push(m("link",{rel:"modulepreload",href:o,nonce:r}));e.push(m("script",{"q:type":"prefetch-bundles",dangerouslySetInnerHTML:Se(t,n)+"document.dispatchEvent(new CustomEvent('qprefetch', {detail:{links: [location.pathname]}}))",nonce:r}))}function Oe(t,e,n){const r=v(e),s=n.linkRel||"prefetch";for(const o of r){const a={};a.href=o,a.rel=s,(s==="prefetch"||s==="preload")&&o.endsWith(".js")&&(a.as="script"),t.push(m("link",a))}}function Te(t,e,n,r){const s=n.linkRel||"prefetch";let o="";n.workerFetchInsert==="no-link-support"&&(o+="let supportsLinkRel = true;"),o+=`const u=${JSON.stringify(v(e))};`,o+="u.map((u,i)=>{",o+="const l=document.createElement('link');",o+='l.setAttribute("href",u);',o+=`l.setAttribute("rel","${s}");`,n.workerFetchInsert==="no-link-support"&&(o+="if(i===0){",o+="try{",o+=`supportsLinkRel=l.relList.supports("${s}");`,o+="}catch(e){}",o+="}"),o+="document.body.appendChild(l);",o+="});",n.workerFetchInsert==="no-link-support"&&(o+="if(!supportsLinkRel){",o+=E(),o+="}"),n.workerFetchInsert==="always"&&(o+=E()),t.push(m("script",{type:"module","q:type":"link-js",dangerouslySetInnerHTML:o,nonce:r}))}function Ie(t,e,n){let r=`const u=${JSON.stringify(v(e))};`;r+=E(),t.push(m("script",{type:"module","q:type":"prefetch-worker",dangerouslySetInnerHTML:r,nonce:n}))}function Ae(t){return{...Fe,...t}}var Fe={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},Le="q:instance",Pe="<!DOCTYPE html>";async function Re(t,e){var L,P,R;let n=e.stream,r=0,s=0,o=0,a=0,i="",l;const c=((L=e.streaming)==null?void 0:L.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},d=e.containerTagName??"html",b=e.containerAttributes??{},q=n,ee=z(),te=G(e),p=Me(e.manifest);function C(){i&&(q.write(i),i="",r=0,o++,o===1&&(a=ee()))}function O(u){const f=u.length;r+=f,s+=f,i+=u}switch(c.strategy){case"disabled":n={write:O};break;case"direct":n=q;break;case"auto":let u=0,f=!1;const H=c.maximunChunk??0,j=c.maximunInitialChunk??0;n={write(g){g==="<!--qkssr-f-->"?f||(f=!0):g==="<!--qkssr-pu-->"?u++:g==="<!--qkssr-po-->"?u--:O(g),u===0&&(f||r>=(o===0?j:H))&&(f=!1,C())}};break}d==="html"?n.write(Pe):(n.write("<!--cq-->"),e.qwikLoader?(e.qwikLoader.include===void 0&&(e.qwikLoader.include="never"),e.qwikLoader.position===void 0&&(e.qwikLoader.position="bottom")):e.qwikLoader={include:"never"},e.qwikPrefetchServiceWorker||(e.qwikPrefetchServiceWorker={}),e.qwikPrefetchServiceWorker.include||(e.qwikPrefetchServiceWorker.include=!1),e.qwikPrefetchServiceWorker.position||(e.qwikPrefetchServiceWorker.position="top")),e.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await qe(e,p);const T=p==null?void 0:p.manifest.injections,k=T?T.map(u=>m(u.tag,u.attributes??{})):[],x=((P=e.qwikLoader)==null?void 0:P.include)??"auto";if((((R=e.qwikLoader)==null?void 0:R.position)??"bottom")==="top"&&x!=="never"){const u=W({debug:e.debug});k.push(m("script",{id:"qwikloader",dangerouslySetInnerHTML:u})),k.push(m("script",{dangerouslySetInnerHTML:"window.qwikevents.push('click')"}))}const ne=z(),I=[];let A=0,F=0;await de(t,{stream:n,containerTagName:d,containerAttributes:b,serverData:e.serverData,base:te,beforeContent:k,beforeClose:async(u,f,H,j)=>{var D,B,K,J,Q;A=ne();const g=z();l=await ue(u,f,void 0,j);const y=[];if(e.prefetchStrategy!==null){const w=xe(l,e,p),ie=b["q:base"];if(w.length>0){const $=Ne(ie,e.prefetchStrategy,w,(D=e.serverData)==null?void 0:D.nonce);$&&y.push($)}}const re=JSON.stringify(l.state,void 0,void 0);if(y.push(m("script",{type:"qwik/json",dangerouslySetInnerHTML:Ue(re),nonce:(B=e.serverData)==null?void 0:B.nonce})),l.funcs.length>0){const w=b[Le];y.push(m("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:Ke(w,l.funcs),nonce:(K=e.serverData)==null?void 0:K.nonce}))}const se=!l||l.mode!=="static",M=x==="always"||x==="auto"&&se;if(M){const w=W({debug:e.debug});y.push(m("script",{id:"qwikloader",dangerouslySetInnerHTML:w,nonce:(J=e.serverData)==null?void 0:J.nonce}))}const U=Array.from(f.$events$,w=>JSON.stringify(w));if(U.length>0){const w=(M?"window.qwikevents":"(window.qwikevents||=[])")+`.push(${U.join(", ")})`;y.push(m("script",{dangerouslySetInnerHTML:w,nonce:(Q=e.serverData)==null?void 0:Q.nonce}))}return De(I,u),F=g(),m(N,{children:y})},manifestHash:(p==null?void 0:p.manifest.manifestHash)||"dev"+He()}),d!=="html"&&n.write("<!--/cq-->"),C();const oe=l.resources.some(u=>u._cache!==1/0);return{prefetchResources:void 0,snapshotResult:l,flushes:o,manifest:p==null?void 0:p.manifest,size:s,isStatic:!oe,timing:{render:A,snapshot:F,firstFlush:a},_symbols:I}}function He(){return Math.random().toString(36).slice(2)}function Me(t){if(t){if("mapper"in t)return t;if(t=ze(t),t){const e={};return Object.entries(t.mapping).forEach(([n,r])=>{e[S(n)]=[n,r]}),{mapper:e,manifest:t}}}}var Ue=t=>t.replace(/<(\/?script)/gi,"\\x3C$1");function De(t,e){var n;for(const r of e){const s=(n=r.$componentQrl$)==null?void 0:n.getSymbol();s&&!t.includes(s)&&t.push(s)}}var Be='document["qFuncs_HASH"]=';function Ke(t,e){return Be.replace("HASH",t)+`[${e.join(`,
`)}]`}const Je={manifestHash:"pefthm",symbols:{s_02wMImzEAbk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag",loc:[27637,36818]},s_8gdLBszqbaM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[38802,41462]},s_A2gdSLoQyX4:{origin:"components/RouterHead/index.tsx",displayName:"RouterHead_component",canonicalFilename:"s_a2gdsloqyx4",hash:"A2gdSLoQyX4",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[243,734]},s_F7HsD23UYJ8:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_f7hsd23uyj8",hash:"F7HsD23UYJ8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[238,763]},s_Nk9PlpjQm9Y:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[55155,56872]},s_TxCFOy819ag:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[24097,37105]},s_UGFgoIEVur8:{origin:"components/Footer/index.tsx",displayName:"Footer_component",canonicalFilename:"s_ugfgoievur8",hash:"UGFgoIEVur8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[82,364]},s_WmYC5H00wtI:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[37389,38683]},s_e0ssiDXoeAM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_e0ssidxoeam",hash:"e0ssiDXoeAM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[7865,8765]},s_m3VgqhIL0lw:{origin:"components/Header/index.tsx",displayName:"Header_component",canonicalFilename:"s_m3vgqhil0lw",hash:"m3VgqhIL0lw",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[82,296]},s_vbsShRolK2I:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_vbsshrolk2i",hash:"vbsShRolK2I",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[639,856]},s_w2hlKAJ1HvE:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_w2hlkaj1hve",hash:"w2hlKAJ1HvE",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[144,1765]},s_xTwcNUoFIFU:{origin:"components/Main/index.tsx",displayName:"Main_component",canonicalFilename:"s_xtwcnuofifu",hash:"xTwcNUoFIFU",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[86,191]},s_RPDJAz33WLA:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useStyles",canonicalFilename:"s_rpdjaz33wla",hash:"RPDJAz33WLA",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_TxCFOy819ag",loc:[24152,24186]},s_1RJPKHqF8AQ:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"spa_init_event",canonicalFilename:"s_1rjpkhqf8aq",hash:"1RJPKHqF8AQ",ctxKind:"function",ctxName:"event$",captures:!1,parent:null,loc:[1385,6788]},s_A5bZC7WO00A:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0,parent:null,loc:[42532,44199]},s_SGytLJ8uq8I:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"serverQrl_rpc",canonicalFilename:"s_sgytlj8uq8i",hash:"SGytLJ8uq8I",ctxKind:"function",ctxName:"rpc",captures:!0,parent:null,loc:[48928,51880]},s_uPHV2oGn4wc:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Form_form_onSubmit",canonicalFilename:"s_uphv2ogn4wc",hash:"uPHV2oGn4wc",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:null,loc:[54067,54216]},s_BUbtvTyvVRE:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component_goto",canonicalFilename:"s_bubtvtyvvre",hash:"BUbtvTyvVRE",ctxKind:"function",ctxName:"goto",captures:!1,parent:"s_WmYC5H00wtI",loc:[37804,37882]},s_KK5BfmKH4ZI:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit_1",canonicalFilename:"s_kk5bfmkh4zi",hash:"KK5BfmKH4ZI",ctxKind:"function",ctxName:"_jsxS",captures:!1,parent:"s_Nk9PlpjQm9Y",loc:[56261,56585]},s_Osdg8FnYTw4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_handlePrefetch",canonicalFilename:"s_osdg8fnytw4",hash:"Osdg8FnYTw4",ctxKind:"function",ctxName:"handlePrefetch",captures:!1,parent:"s_8gdLBszqbaM",loc:[39502,39833]},s_fX0bDjeJa0E:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag",loc:[25495,27025]},s_lwx6fvvLi7E:{origin:"routes/index.tsx",displayName:"routes_component_onCopy",canonicalFilename:"s_lwx6fvvli7e",hash:"lwx6fvvLi7E",ctxKind:"function",ctxName:"$",captures:!0,parent:"s_w2hlKAJ1HvE",loc:[303,523]},s_p9MSze0ojs4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:"s_Nk9PlpjQm9Y",loc:[55746,56155]},s_pIf0khHUxfY:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_handleClick",canonicalFilename:"s_pif0khhuxfy",hash:"pIf0khHUxfY",ctxKind:"function",ctxName:"handleClick",captures:!0,parent:"s_8gdLBszqbaM",loc:[40260,40780]},s_r0N5DJ5UVmw:{origin:"routes/index.tsx",displayName:"routes_component_onInput",canonicalFilename:"s_r0n5dj5uvmw",hash:"r0N5DJ5UVmw",ctxKind:"function",ctxName:"$",captures:!0,parent:"s_w2hlKAJ1HvE",loc:[585,654]}},mapping:{s_02wMImzEAbk:"q-9L0Bklg6.js",s_8gdLBszqbaM:"q-UmTebWgw.js",s_A2gdSLoQyX4:"q-Ca8TgXT6.js",s_F7HsD23UYJ8:"q-C-8RyahX.js",s_Nk9PlpjQm9Y:"q-BXzDtKy2.js",s_TxCFOy819ag:"q-9L0Bklg6.js",s_UGFgoIEVur8:"q-C6i6zo6Z.js",s_WmYC5H00wtI:"q-DaIqJV76.js",s_e0ssiDXoeAM:"q-D2xLHCbI.js",s_m3VgqhIL0lw:"q-Min1sv25.js",s_vbsShRolK2I:"q-URl0XW60.js",s_w2hlKAJ1HvE:"q-BfoyhEOM.js",s_xTwcNUoFIFU:"q-7EI3nnvw.js",s_RPDJAz33WLA:"q-9L0Bklg6.js",s_1RJPKHqF8AQ:"q-BGmpAaRo.js",s_A5bZC7WO00A:"q-C6PdCECi.js",s_SGytLJ8uq8I:"q-D8OCtV6b.js",s_uPHV2oGn4wc:"q-CdMO_fyB.js",s_BUbtvTyvVRE:"q-DaIqJV76.js",s_KK5BfmKH4ZI:"q-BXzDtKy2.js",s_Osdg8FnYTw4:"q-UmTebWgw.js",s_fX0bDjeJa0E:"q-9L0Bklg6.js",s_lwx6fvvLi7E:"q-BfoyhEOM.js",s_p9MSze0ojs4:"q-BXzDtKy2.js",s_pIf0khHUxfY:"q-UmTebWgw.js",s_r0N5DJ5UVmw:"q-BfoyhEOM.js"},bundles:{"q-7EI3nnvw.js":{size:177,imports:["q-CqTezyzO.js"],origins:["src/components/Main/index.tsx_entry_Main.js","src/components/Main/s_xtwcnuofifu.js"],symbols:["s_xTwcNUoFIFU"]},"q-9L0Bklg6.js":{size:5729,imports:["q-CqTezyzO.js","q-HvMOzJiG.js","q-YUskSNrc.js"],dynamicImports:["q-Bl6zFKlj.js","q-BxQDOaYR.js","q-DVp9-42l.js"],origins:["@qwik-city-plan","node_modules/@builder.io/qwik-city/index.qwik.mjs_entry_QwikCityProvider.js","node_modules/@builder.io/qwik-city/s_02wmimzeabk.js","node_modules/@builder.io/qwik-city/s_fx0bdjeja0e.js","node_modules/@builder.io/qwik-city/s_rpdjaz33wla.js","node_modules/@builder.io/qwik-city/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_RPDJAz33WLA","s_TxCFOy819ag"]},"q-BfoyhEOM.js":{size:1724,imports:["q-CqTezyzO.js","q-YUskSNrc.js"],origins:["src/routes/index.tsx_entry_routes.js","src/routes/s_lwx6fvvli7e.js","src/routes/s_r0n5dj5uvmw.js","src/routes/s_w2hlkaj1hve.js"],symbols:["s_lwx6fvvLi7E","s_r0N5DJ5UVmw","s_w2hlKAJ1HvE"]},"q-BGmpAaRo.js":{size:2253,origins:["node_modules/@builder.io/qwik-city/s_1rjpkhqf8aq.js"],symbols:["s_1RJPKHqF8AQ"]},"q-Bl6zFKlj.js":{size:125,imports:["q-YUskSNrc.js"],dynamicImports:["q-Bq36Wx9q.js"],origins:["@qwik-city-entries"]},"q-Bq36Wx9q.js":{size:2539,origins:["node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-BxQDOaYR.js":{size:171,imports:["q-CqTezyzO.js","q-YUskSNrc.js"],dynamicImports:["q-BfoyhEOM.js"],origins:["src/routes/index.tsx"]},"q-BXzDtKy2.js":{size:1299,imports:["q-CqTezyzO.js","q-HvMOzJiG.js","q-YUskSNrc.js"],origins:["node_modules/@builder.io/qwik-city/index.qwik.mjs_entry_GetForm.js","node_modules/@builder.io/qwik-city/s_kk5bfmkh4zi.js","node_modules/@builder.io/qwik-city/s_nk9plpjqm9y.js","node_modules/@builder.io/qwik-city/s_p9msze0ojs4.js"],symbols:["s_KK5BfmKH4ZI","s_Nk9PlpjQm9Y","s_p9MSze0ojs4"]},"q-C-8RyahX.js":{size:507,imports:["q-CqTezyzO.js","q-HvMOzJiG.js","q-YUskSNrc.js"],dynamicImports:["q-Ca8TgXT6.js"],origins:["src/components/RouterHead/index.tsx","src/root.tsx_entry_root.js","src/s_f7hsd23uyj8.js"],symbols:["s_F7HsD23UYJ8"]},"q-C6i6zo6Z.js":{size:363,imports:["q-CqTezyzO.js"],origins:["src/components/Footer/index.tsx_entry_Footer.js","src/components/Footer/s_ugfgoievur8.js"],symbols:["s_UGFgoIEVur8"]},"q-C6PdCECi.js":{size:761,imports:["q-CqTezyzO.js"],origins:["node_modules/@builder.io/qwik-city/index.qwik.mjs_entry_routeActionQrl.js","node_modules/@builder.io/qwik-city/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]},"q-Ca8TgXT6.js":{size:592,imports:["q-CqTezyzO.js","q-HvMOzJiG.js","q-YUskSNrc.js"],origins:["src/components/RouterHead/index.tsx_entry_RouterHead.js","src/components/RouterHead/s_a2gdsloqyx4.js"],symbols:["s_A2gdSLoQyX4"]},"q-CdMO_fyB.js":{size:125,imports:["q-CqTezyzO.js"],origins:["node_modules/@builder.io/qwik-city/index.qwik.mjs_entry_Form.js","node_modules/@builder.io/qwik-city/s_uphv2ogn4wc.js"],symbols:["s_uPHV2oGn4wc"]},"q-CqTezyzO.js":{size:63838,origins:["@builder.io/qwik/build","node_modules/@builder.io/qwik/core.prod.mjs"]},"q-D2xLHCbI.js":{size:624,imports:["q-CqTezyzO.js","q-HvMOzJiG.js","q-YUskSNrc.js"],origins:["node_modules/@builder.io/qwik-city/index.qwik.mjs_entry_RouterOutlet.js","node_modules/@builder.io/qwik-city/s_e0ssidxoeam.js"],symbols:["s_e0ssiDXoeAM"]},"q-D8OCtV6b.js":{size:1210,imports:["q-CqTezyzO.js","q-HvMOzJiG.js","q-YUskSNrc.js"],origins:["node_modules/@builder.io/qwik-city/index.qwik.mjs_entry_serverQrl.js","node_modules/@builder.io/qwik-city/s_sgytlj8uq8i.js"],symbols:["s_SGytLJ8uq8I"]},"q-DaIqJV76.js":{size:845,imports:["q-CqTezyzO.js","q-HvMOzJiG.js","q-YUskSNrc.js"],origins:["node_modules/@builder.io/qwik-city/index.qwik.mjs_entry_QwikCityMockProvider.js","node_modules/@builder.io/qwik-city/s_bubtvtyvvre.js","node_modules/@builder.io/qwik-city/s_wmyc5h00wti.js"],symbols:["s_BUbtvTyvVRE","s_WmYC5H00wtI"]},"q-DVp9-42l.js":{size:274,imports:["q-CqTezyzO.js","q-YUskSNrc.js"],dynamicImports:["q-URl0XW60.js"],origins:["src/routes/layout.tsx"]},"q-GbKzwiHF.js":{size:171,imports:["q-CqTezyzO.js","q-YUskSNrc.js"],dynamicImports:["q-C-8RyahX.js"],origins:["src/global.css","src/root.tsx"]},"q-HvMOzJiG.js":{size:7905,imports:["q-CqTezyzO.js","q-YUskSNrc.js"],dynamicImports:["q-9L0Bklg6.js","q-BGmpAaRo.js","q-D2xLHCbI.js"],origins:["@qwik-city-sw-register","node_modules/@builder.io/qwik-city/index.qwik.mjs"]},"q-Min1sv25.js":{size:275,imports:["q-CqTezyzO.js"],origins:["src/components/Header/index.tsx_entry_Header.js","src/components/Header/s_m3vgqhil0lw.js"],symbols:["s_m3VgqhIL0lw"]},"q-UmTebWgw.js":{size:1514,imports:["q-CqTezyzO.js","q-HvMOzJiG.js","q-YUskSNrc.js"],origins:["node_modules/@builder.io/qwik-city/index.qwik.mjs_entry_Link.js","node_modules/@builder.io/qwik-city/s_8gdlbszqbam.js","node_modules/@builder.io/qwik-city/s_osdg8fnytw4.js","node_modules/@builder.io/qwik-city/s_pif0khhuxfy.js"],symbols:["s_8gdLBszqbaM","s_Osdg8FnYTw4","s_pIf0khHUxfY"]},"q-URl0XW60.js":{size:532,imports:["q-CqTezyzO.js","q-YUskSNrc.js"],dynamicImports:["q-7EI3nnvw.js","q-C6i6zo6Z.js","q-Min1sv25.js"],origins:["src/components/Footer/index.tsx","src/components/Header/index.tsx","src/components/Main/index.tsx","src/routes/layout.tsx_entry_layout.js","src/routes/s_vbsshrolk2i.js"],symbols:["s_vbsShRolK2I"]},"q-YUskSNrc.js":{size:1085}},injections:[{tag:"style",location:"head",attributes:{"data-src":"/textpad/build/q-Bra74OSY.css",dangerouslySetInnerHTML:`/*! tailwindcss v3.4.7 | MIT License | https://tailwindcss.com
 */*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.absolute{position:absolute}.bottom-0{bottom:0}.top-0{top:0}.flex{display:flex}.size-6{width:1.5rem;height:1.5rem}.h-footer{height:2rem}.h-full{height:100%}.h-header{height:3rem}.h-screen{height:100vh;height:100dvh}.w-full{width:100%}.w-screen{width:100vw;width:100dvw}.flex-grow{flex-grow:1}.resize-none{resize:none}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.rounded-sm{border-radius:.125rem}.border-b-4{border-bottom-width:4px}.border-double{border-style:double}.bg-\\[\\#fdfdfc\\]{--tw-bg-opacity: 1;background-color:rgb(253 253 252 / var(--tw-bg-opacity))}.bg-paper{--tw-bg-opacity: 1;background-color:rgb(251 251 248 / var(--tw-bg-opacity))}.p-1{padding:.25rem}.p-2{padding:.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.pb-2{padding-bottom:.5rem}.pb-footer{padding-bottom:2rem}.pt-header{padding-top:3rem}.text-center{text-align:center}.font-serif{font-family:Times New Roman,Times,serif}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.text-ink{--tw-text-opacity: 1;color:rgb(77 77 77 / var(--tw-text-opacity))}.underline{text-decoration-line:underline}.outline-black{outline-color:#000}.hover\\:bg-\\[\\#ededeb\\]:hover{--tw-bg-opacity: 1;background-color:rgb(237 237 235 / var(--tw-bg-opacity))}
`}}],version:"1",options:{target:"client",buildMode:"production",entryStrategy:{type:"smart"}},platform:{qwik:"1.7.1",vite:"",rollup:"4.19.1",env:"node",os:"darwin",node:"22.2.0"}},Qe=()=>_(we,{children:[h("head",null,null,[h("meta",null,{charset:"utf-8"},null,3,null),h("link",null,{rel:"manifest",href:"/manifest.json"},null,3,null),_(be,null,3,"JM_0")],1,null),h("body",null,{lang:"en"},[_(pe,null,3,"JM_1"),_(fe,null,3,"JM_2")],1,null)]},1,"JM_3"),$e=V(X(Qe,"s_F7HsD23UYJ8"));function Xe(t){return Re(_($e,null,3,"H7_0"),{manifest:Je,...t,base:"/textpad",containerAttributes:{lang:"en-us",...t.containerAttributes},serverData:{...t.serverData}})}export{Xe as default};
