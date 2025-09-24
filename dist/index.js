(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,W=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),et=new WeakMap;let dt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(W&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=et.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&et.set(e,t))}return t}toString(){return this.cssText}};const gt=r=>new dt(typeof r=="string"?r:r+"",void 0,Q),k=(r,...t)=>{const e=r.length===1?r[0]:t.reduce(((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1]),r[0]);return new dt(e,r,Q)},mt=(r,t)=>{if(W)r.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const i=document.createElement("style"),s=D.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},st=W?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return gt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:yt,defineProperty:_t,getOwnPropertyDescriptor:vt,getOwnPropertyNames:At,getOwnPropertySymbols:bt,getPrototypeOf:wt}=Object,z=globalThis,it=z.trustedTypes,St=it?it.emptyScript:"",Et=z.reactiveElementPolyfillSupport,O=(r,t)=>r,j={toAttribute(r,t){switch(t){case Boolean:r=r?St:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Z=(r,t)=>!yt(r,t),rt={attribute:!0,type:String,converter:j,reflect:!1,useDefault:!1,hasChanged:Z};Symbol.metadata??=Symbol("metadata"),z.litPropertyMetadata??=new WeakMap;let S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=rt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&_t(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=vt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){const l=s?.call(this);o?.call(this,n),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??rt}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const t=wt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const e=this.properties,i=[...At(e),...bt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(st(s))}else t!==void 0&&e.push(st(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return mt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:j).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:j;this._$Em=s;const l=n.fromAttribute(e,o.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){const s=this.constructor,o=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??Z)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,o]of i){const{wrapped:n}=o,l=this[s];n!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,o,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[O("elementProperties")]=new Map,S[O("finalized")]=new Map,Et?.({ReactiveElement:S}),(z.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=globalThis,R=J.trustedTypes,ot=R?R.createPolicy("lit-html",{createHTML:r=>r}):void 0,pt="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,ut="?"+y,xt=`<${ut}>`,b=document,T=()=>b.createComment(""),M=r=>r===null||typeof r!="object"&&typeof r!="function",K=Array.isArray,Pt=r=>K(r)||typeof r?.[Symbol.iterator]=="function",V=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,at=/>/g,v=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lt=/'/g,ht=/"/g,ft=/^(?:script|style|textarea|title)$/i,Ct=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),E=Ct(1),x=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),ct=new WeakMap,A=b.createTreeWalker(b,129);function $t(r,t){if(!K(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ot!==void 0?ot.createHTML(t):t}const Ot=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":t===3?"<math>":"",n=C;for(let l=0;l<e;l++){const a=r[l];let c,p,h=-1,$=0;for(;$<a.length&&(n.lastIndex=$,p=n.exec(a),p!==null);)$=n.lastIndex,n===C?p[1]==="!--"?n=nt:p[1]!==void 0?n=at:p[2]!==void 0?(ft.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=v):p[3]!==void 0&&(n=v):n===v?p[0]===">"?(n=s??C,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?v:p[3]==='"'?ht:lt):n===ht||n===lt?n=v:n===nt||n===at?n=C:(n=v,s=void 0);const m=n===v&&r[l+1].startsWith("/>")?" ":"";o+=n===C?a+xt:h>=0?(i.push(c),a.slice(0,h)+pt+a.slice(h)+y+m):a+y+(h===-2?l:m)}return[$t(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class U{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const l=t.length-1,a=this.parts,[c,p]=Ot(t,e);if(this.el=U.createElement(c,i),A.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=A.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(pt)){const $=p[n++],m=s.getAttribute(h).split(y),I=/([.?@])?(.*)/.exec($);a.push({type:1,index:o,name:I[2],strings:m,ctor:I[1]==="."?Mt:I[1]==="?"?Ut:I[1]==="@"?qt:F}),s.removeAttribute(h)}else h.startsWith(y)&&(a.push({type:6,index:o}),s.removeAttribute(h));if(ft.test(s.tagName)){const h=s.textContent.split(y),$=h.length-1;if($>0){s.textContent=R?R.emptyScript:"";for(let m=0;m<$;m++)s.append(h[m],T()),A.nextNode(),a.push({type:2,index:++o});s.append(h[$],T())}}}else if(s.nodeType===8)if(s.data===ut)a.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(y,h+1))!==-1;)a.push({type:7,index:o}),h+=y.length-1}o++}}static createElement(t,e){const i=b.createElement("template");return i.innerHTML=t,i}}function P(r,t,e=r,i){if(t===x)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl;const o=M(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=P(r,s._$AS(r,t.values),s,i)),t}class Tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??b).importNode(e,!0);A.currentNode=s;let o=A.nextNode(),n=0,l=0,a=i[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new L(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new Ht(o,this,t)),this._$AV.push(c),a=i[++l]}n!==a?.index&&(o=A.nextNode(),n++)}return A.currentNode=b,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class L{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),M(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Pt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=U.createElement($t(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const o=new Tt(s,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=ct.get(t.strings);return e===void 0&&ct.set(t.strings,e=new U(t)),e}k(t){K(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new L(this.O(T()),this.O(T()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class F{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=P(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else{const l=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=P(this,l[i+a],e,a),c===x&&(c=this._$AH[a]),n||=!M(c)||c!==this._$AH[a],c===d?t=d:t!==d&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Mt extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Ut extends F{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class qt extends F{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=P(this,t,e,0)??d)===x)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ht{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const Nt=J.litHtmlPolyfillSupport;Nt?.(U,L),(J.litHtmlVersions??=[]).push("3.3.1");const Lt=(r,t,e)=>{const i=e?.renderBefore??t;let s=i._$litPart$;if(s===void 0){const o=e?.renderBefore??null;i._$litPart$=s=new L(t.insertBefore(T(),o),o,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=globalThis;class _ extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Lt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return x}}_._$litElement$=!0,_.finalized=!0,X.litElementHydrateSupport?.({LitElement:_});const It=X.litElementPolyfillSupport;It?.({LitElement:_});(X.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=r=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(r,t)})):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:Z},jt=(r=Dt,t,e)=>{const{kind:i,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),i==="accessor"){const{name:n}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,r)},init(l){return l!==void 0&&this.C(n,void 0,r,l),l}}}if(i==="setter"){const{name:n}=e;return function(l){const a=this[n];t.call(this,l),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+i)};function g(r){return(t,e)=>typeof e=="object"?jt(r,t,e):((i,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,i),n?Object.getOwnPropertyDescriptor(s,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function w(r){return g({...r,state:!0,attribute:!1})}const Rt="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='25.6'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20320'%3e%3cpath%20fill='%2300E8FF'%20d='m64%20192l25.926-44.727l38.233-19.114l63.974%2063.974l10.833%2061.754L192%20320l-64-64l-38.074-25.615z'%3e%3c/path%3e%3cpath%20fill='%23283198'%20d='M128%20256V128l64-64v128l-64%2064ZM0%20256l64%2064l9.202-60.602L64%20192l-37.542%2023.71L0%20256Z'%3e%3c/path%3e%3cpath%20fill='%23324FFF'%20d='M64%20192V64l64-64v128l-64%2064Zm128%20128V192l64-64v128l-64%2064ZM0%20256V128l64%2064l-64%2064Z'%3e%3c/path%3e%3cpath%20fill='%230FF'%20d='M64%20320V192l64%2064z'%3e%3c/path%3e%3c/svg%3e",kt="/vite.svg";var zt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,G=(r,t,e,i)=>{for(var s=i>1?void 0:i?Ft(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&zt(t,e,s),s};let q=class extends _{constructor(){super(...arguments),this.docsHint="Click on the Vite and Lit logos to learn more",this.count=0}render(){return E`
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src=${kt} class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${Rt} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
    `}_onClick(){this.count++}};q.styles=k`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }

    ::slotted(h1) {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `;G([g()],q.prototype,"docsHint",2);G([g({type:Number})],q.prototype,"count",2);q=G([B("my-element")],q);var Bt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,Y=(r,t,e,i)=>{for(var s=i>1?void 0:i?Vt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Bt(t,e,s),s};let H=class extends _{constructor(){super(...arguments),this.myprop="My Property",this.mystate="My State"}changeValues(r){this.myprop=r,this.mystate="set by method"}render(){return E`
        <div>
            <h1>${this.myprop}</h1>
            <h2>${this.mystate}</h2>
            <input value=${this.myprop} @change=${r=>this.myprop=r.target.value}> 
            <input value=${this.mystate} @change=${r=>this.mystate=r.target.value}>
            <button @click=${this.changeValues.bind(this,"set by button")}>Call Method</button>
        </div>`}};H.styles=[k`
            :host {
                display: block;
            }
                        div{
                border:solid black 2px;
            }
            h1{
                color:blue;
            }
            h2{
                color:red;
            }
        `];Y([g()],H.prototype,"myprop",2);Y([w()],H.prototype,"mystate",2);H=Y([B("hello-world")],H);var Wt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,tt=(r,t,e,i)=>{for(var s=i>1?void 0:i?Qt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Wt(t,e,s),s};let N=class extends _{constructor(){super(...arguments),this.agentList=[]}async logOutAgent(r){const t=new Headers;t.append("Authorization",`Bearer ${this.token}`),t.append("Content-Type","application/json");const e=JSON.stringify({logoutReason:"Admin Logout",agentId:r.target.value}),i={method:"PUT",headers:t,body:e,redirect:"follow"};try{const o=await(await fetch("https://api.wxcc-us1.cisco.com/v1/agents/logout",i)).text();console.log(o)}catch(s){console.error(s)}}async getAgents(){const r=new Headers;r.append("Content-Type","application/json"),r.append("Accept","application/json"),r.append("Authorization",`Bearer ${this.token}`);const t=JSON.stringify({query:"query activeAgents($from:Long! $to:Long! $filter:AgentSessionFilters $extFilter:AgentSessionSpecificFilters $pagination:Pagination){agentSession(from:$from to:$to filter:$filter extFilter:$extFilter pagination:$pagination){agentSessions{agentId agentName startTime teamName channelInfo{currentState lastActivityTime}}pageInfo{endCursor hasNextPage}intervalInfo{interval timezone}}}",variables:{from:`${Date.now()-864e5}`,to:`${Date.now()}`,filter:{and:[{isActive:{equals:!0}},{channelInfo:{channelType:{equals:"telephony"}}}]},extFilter:{},pagination:{}}}),e={method:"POST",headers:r,body:t,redirect:"follow"};try{const s=await(await fetch("https://api.wxcc-us1.cisco.com/search",e)).json();this.agentList=s.data.agentSession.agentSessions,console.log(s)}catch(i){console.error(i)}}render(){return E`
        <h1 class="title">Admin Actions</h1>
        <div><button @click=${this.getAgents}>Refresh Agent List</button></div>
        <table>
            <thead>
                <th>Agent Name</th>
                <th>Team</th>
                <th>Log in Time</th>
                <th>Status</th>
                <th>Time in Status</th>
                <th>Action</th>
            </thead>
                ${this.agentList?.map(r=>E`
                <tbody>
                    <td>${r.agentName}</td>
                    <td>${r.teamName}</td>
                    <td>${new Date(r.startTime).toLocaleString()}</td>
                    <td>${r.channelInfo[0].currentState}</td>
                    <td>${new Date(Date.now()-r.channelInfo[0].lastActivityTime).toISOString().slice(11,-5)}</td>
                    <td><button value=${r.agentId} @click="${this.logOutAgent}">Log Out</button></td>
                </tbody>
                `)}
        </table>
        `}};N.styles=[k`
            :host{
            display: flex;
            flex-direction: column;
            border: solid 3px var(--md-primary-text-color);
            padding: 2em;
            color:var(--md-primary-text-color)
            }
            .title{
            text-align: center
            }
            table{
            display:table;
            border-collapse:collapse;
            border-spacing: 0;
            margin-top: 15px;
            }
            tr, th, td{
            border: solid 1px;
            text-align: center;
            }
            .hidden{
            display:none;
            }
        `];tt([g()],N.prototype,"token",2);tt([w()],N.prototype,"agentList",2);N=tt([B("admin-actions")],N);var Zt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,f=(r,t,e,i)=>{for(var s=i>1?void 0:i?Jt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Zt(t,e,s),s};let u=class extends _{constructor(){super(...arguments),this.queueStats=[],this.queueFilter=[]}connectedCallback(){super.connectedCallback(),this.getQueues(),this._timerInterval=setInterval(()=>this.getStats(),3e4),this.mapUpdate=setInterval(()=>this.updateTemplate(),1e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._timerInterval),clearInterval(this.mapUpdate)}async getQueues(){const r=new Headers;r.append("Authorization",`Bearer ${this.token}`),r.append("Accept","*/*");const t={method:"GET",headers:r,redirect:"follow"},e=[`/v2/contact-service-queue/by-user-id/${this.agentId}/agent-based-queues`,`/v2/contact-service-queue/by-user-id/${this.agentId}/skill-based-queues`,`/team/${this.teamId}/incoming-references`];this.queueFilter=[],e.forEach(async(i,s)=>{try{const n=await(await fetch(`https://api.wxcc-us1.cisco.com/organization/${this.orgId}${i}`,t)).json();n.data.forEach(l=>this.queueFilter.push({lastQueue:{id:{equals:l.id}}})),console.log(n)}catch(o){console.error(o)}s>=e.length-1&&this.getStats()})}async getStats(){const r=new Headers;r.append("Content-Type","application/json"),r.append("Accept","application/json"),r.append("Authorization",`Bearer ${this.token}`);const t=JSON.stringify({query:"query queueStats($from:Long! $to:Long! $timeComparator:QueryTimeType $filter:TaskFilters $aggregations:[TaskV2Aggregation]){task(from:$from to:$to timeComparator:$timeComparator filter:$filter aggregations:$aggregations){tasks{lastQueue{name}aggregation{name value}}}}",variables:{from:`${Date.now()-864e5}`,to:`${Date.now()}`,timeComparator:"createdTime",filter:{and:[{isActive:{equals:!0}},{status:{equals:"parked"}},{or:this.queueFilter}]},aggregations:[{field:"id",type:"count",name:"contacts"},{field:"createdTime",type:"min",name:"oldestStart"}]}}),e={method:"POST",headers:r,body:t,redirect:"follow"};try{const s=await(await fetch("https://api.wxcc-us1.cisco.com/search",e)).json();this.queueData=await s.data.task.tasks,console.log(s)}catch(i){console.error(i)}}updateTemplate(){this.queueStats=this.queueData.map(r=>E`<li> | Queue: ${r.lastQueue.name} Contacts: ${r.aggregation[1].value} Wait: ${new Date(Date.now()-r.aggregation[0].value).toISOString().slice(11,-5)} |</li>`)}render(){return E`
        <div class="marquee-container">
            <ul class="marquee" style="animation-duration: ${this.queueStats.length*10}s">
                ${this.queueStats}
                ${this.queueStats}
            </ul>
        </div>
        `}};u.styles=[k`
            :host {
            display: flex;
            }
            .marquee-container {
            width: 30vw;
            height: 50px; /* Set a fixed height for the container */
            overflow: hidden; 
            border:solid;
            border-radius:25px;
            }

            .marquee {
            list-style: none; /* Remove default list styles */
            display:flex;
            padding: 0;
            margin: 0;
            height:100%;
            width:max-content;
            animation: scroll linear infinite;
            animation-duration: 10s;
            align-items:center;
            }
            .marquee li {
            display:flex;
            align-self:center;
            align-items:center;
            justify-content:center;
            flex-shrink:0;
            font-size:2rem;
            white-space:nowrap;
            padding: 0 1rem 0 1rem;
            }
            .marquee:hover{
            animation-play-state: paused;

            }

            @keyframes scroll {
            0% {
                transform: translateX(0); /* Start position */
            }
            100% {
                transform: translateX(-50%); /* End position (fully scrolled) */
            }
            }
        `];f([g()],u.prototype,"token",2);f([g()],u.prototype,"orgId",2);f([g()],u.prototype,"teamId",2);f([g()],u.prototype,"agentId",2);f([w()],u.prototype,"queueStats",2);f([w()],u.prototype,"queueFilter",2);f([w()],u.prototype,"_timerInterval",2);f([w()],u.prototype,"queueData",2);f([w()],u.prototype,"mapUpdate",2);u=f([B("queue-scroll")],u);
