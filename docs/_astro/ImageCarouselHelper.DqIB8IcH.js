import{r as te}from"./index.DhYZZe0J.js";var oe={exports:{}},N={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ue=te,pe=Symbol.for("react.element"),fe=Symbol.for("react.fragment"),be=Object.prototype.hasOwnProperty,ge=ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,me={key:!0,ref:!0,__self:!0,__source:!0};function ne(e,r,o){var t,s={},n=null,i=null;o!==void 0&&(n=""+o),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(i=r.ref);for(t in r)be.call(r,t)&&!me.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)s[t]===void 0&&(s[t]=r[t]);return{$$typeof:pe,type:e,key:n,ref:i,props:s,_owner:ge.current}}N.Fragment=fe;N.jsx=ne;N.jsxs=ne;oe.exports=N;var I=oe.exports;function se(e){var r,o,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(r=0;r<s;r++)e[r]&&(o=se(e[r]))&&(t&&(t+=" "),t+=o)}else for(o in e)e[o]&&(t&&(t+=" "),t+=o);return t}function he(){for(var e,r,o=0,t="",s=arguments.length;o<s;o++)(e=arguments[o])&&(r=se(e))&&(t&&(t+=" "),t+=r);return t}const U="-";function ye(e){const r=we(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:t}=e;function s(i){const l=i.split(U);return l[0]===""&&l.length!==1&&l.shift(),ie(l,r)||xe(i)}function n(i,l){const u=o[i]||[];return l&&t[i]?[...u,...t[i]]:u}return{getClassGroupId:s,getConflictingClassGroupIds:n}}function ie(e,r){if(e.length===0)return r.classGroupId;const o=e[0],t=r.nextPart.get(o),s=t?ie(e.slice(1),t):void 0;if(s)return s;if(r.validators.length===0)return;const n=e.join(U);return r.validators.find(({validator:i})=>i(n))?.classGroupId}const D=/^\[(.+)\]$/;function xe(e){if(D.test(e)){const r=D.exec(e)[1],o=r?.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}}function we(e){const{theme:r,prefix:o}=e,t={nextPart:new Map,validators:[]};return ke(Object.entries(e.classGroups),o).forEach(([n,i])=>{F(i,t,n,r)}),t}function F(e,r,o,t){e.forEach(s=>{if(typeof s=="string"){const n=s===""?r:ee(r,s);n.classGroupId=o;return}if(typeof s=="function"){if(ve(s)){F(s(t),r,o,t);return}r.validators.push({validator:s,classGroupId:o});return}Object.entries(s).forEach(([n,i])=>{F(i,ee(r,n),o,t)})})}function ee(e,r){let o=e;return r.split(U).forEach(t=>{o.nextPart.has(t)||o.nextPart.set(t,{nextPart:new Map,validators:[]}),o=o.nextPart.get(t)}),o}function ve(e){return e.isThemeGetter}function ke(e,r){return r?e.map(([o,t])=>{const s=t.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([i,l])=>[r+i,l])):n);return[o,s]}):e}function Ce(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,o=new Map,t=new Map;function s(n,i){o.set(n,i),r++,r>e&&(r=0,t=o,o=new Map)}return{get(n){let i=o.get(n);if(i!==void 0)return i;if((i=t.get(n))!==void 0)return s(n,i),i},set(n,i){o.has(n)?o.set(n,i):s(n,i)}}}const ae="!";function ze(e){const{separator:r,experimentalParseClassName:o}=e,t=r.length===1,s=r[0],n=r.length;function i(l){const u=[];let b=0,p=0,g;for(let f=0;f<l.length;f++){let m=l[f];if(b===0){if(m===s&&(t||l.slice(f,f+n)===r)){u.push(l.slice(p,f)),p=f+n;continue}if(m==="/"){g=f;continue}}m==="["?b++:m==="]"&&b--}const h=u.length===0?l:l.substring(p),x=h.startsWith(ae),S=x?h.substring(1):h,y=g&&g>p?g-p:void 0;return{modifiers:u,hasImportantModifier:x,baseClassName:S,maybePostfixModifierPosition:y}}return o?function(u){return o({className:u,parseClassName:i})}:i}function Se(e){if(e.length<=1)return e;const r=[];let o=[];return e.forEach(t=>{t[0]==="["?(r.push(...o.sort(),t),o=[]):o.push(t)}),r.push(...o.sort()),r}function Ae(e){return{cache:Ce(e.cacheSize),parseClassName:ze(e),...ye(e)}}const Re=/\s+/;function Me(e,r){const{parseClassName:o,getClassGroupId:t,getConflictingClassGroupIds:s}=r,n=new Set;return e.trim().split(Re).map(i=>{const{modifiers:l,hasImportantModifier:u,baseClassName:b,maybePostfixModifierPosition:p}=o(i);let g=!!p,h=t(g?b.substring(0,p):b);if(!h){if(!g)return{isTailwindClass:!1,originalClassName:i};if(h=t(b),!h)return{isTailwindClass:!1,originalClassName:i};g=!1}const x=Se(l).join(":");return{isTailwindClass:!0,modifierId:u?x+ae:x,classGroupId:h,originalClassName:i,hasPostfixModifier:g}}).reverse().filter(i=>{if(!i.isTailwindClass)return!0;const{modifierId:l,classGroupId:u,hasPostfixModifier:b}=i,p=l+u;return n.has(p)?!1:(n.add(p),s(u,b).forEach(g=>n.add(l+g)),!0)}).reverse().map(i=>i.originalClassName).join(" ")}function Ie(){let e=0,r,o,t="";for(;e<arguments.length;)(r=arguments[e++])&&(o=le(r))&&(t&&(t+=" "),t+=o);return t}function le(e){if(typeof e=="string")return e;let r,o="";for(let t=0;t<e.length;t++)e[t]&&(r=le(e[t]))&&(o&&(o+=" "),o+=r);return o}function je(e,...r){let o,t,s,n=i;function i(u){const b=r.reduce((p,g)=>g(p),e());return o=Ae(b),t=o.cache.get,s=o.cache.set,n=l,l(u)}function l(u){const b=t(u);if(b)return b;const p=Me(u,o);return s(u,p),p}return function(){return n(Ie.apply(null,arguments))}}function c(e){const r=o=>o[e]||[];return r.isThemeGetter=!0,r}const ce=/^\[(?:([a-z-]+):)?(.+)\]$/i,Pe=/^\d+\/\d+$/,Ee=new Set(["px","full","screen"]),_e=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ge=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Te=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Ne=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Le=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function v(e){return z(e)||Ee.has(e)||Pe.test(e)}function k(e){return A(e,"length",qe)}function z(e){return!!e&&!Number.isNaN(Number(e))}function T(e){return A(e,"number",z)}function j(e){return!!e&&Number.isInteger(Number(e))}function Oe(e){return e.endsWith("%")&&z(e.slice(0,-1))}function a(e){return ce.test(e)}function C(e){return _e.test(e)}const We=new Set(["length","size","percentage"]);function $e(e){return A(e,We,de)}function Ve(e){return A(e,"position",de)}const Fe=new Set(["image","url"]);function Ue(e){return A(e,Fe,He)}function Be(e){return A(e,"",Je)}function P(){return!0}function A(e,r,o){const t=ce.exec(e);return t?t[1]?typeof r=="string"?t[1]===r:r.has(t[1]):o(t[2]):!1}function qe(e){return Ge.test(e)&&!Te.test(e)}function de(){return!1}function Je(e){return Ne.test(e)}function He(e){return Le.test(e)}function Xe(){const e=c("colors"),r=c("spacing"),o=c("blur"),t=c("brightness"),s=c("borderColor"),n=c("borderRadius"),i=c("borderSpacing"),l=c("borderWidth"),u=c("contrast"),b=c("grayscale"),p=c("hueRotate"),g=c("invert"),h=c("gap"),x=c("gradientColorStops"),S=c("gradientColorStopPositions"),y=c("inset"),f=c("margin"),m=c("opacity"),w=c("padding"),B=c("saturate"),L=c("scale"),q=c("sepia"),J=c("skew"),H=c("space"),X=c("translate"),O=()=>["auto","contain","none"],W=()=>["auto","hidden","clip","visible","scroll"],$=()=>["auto",a,r],d=()=>[a,r],Y=()=>["",v,k],E=()=>["auto",z,a],Z=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],_=()=>["solid","dashed","dotted","double","none"],K=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],V=()=>["start","end","center","between","around","evenly","stretch"],R=()=>["","0",a],Q=()=>["auto","avoid","all","avoid-page","page","left","right","column"],M=()=>[z,T],G=()=>[z,a];return{cacheSize:500,separator:":",theme:{colors:[P],spacing:[v,k],blur:["none","",C,a],brightness:M(),borderColor:[e],borderRadius:["none","","full",C,a],borderSpacing:d(),borderWidth:Y(),contrast:M(),grayscale:R(),hueRotate:G(),invert:R(),gap:d(),gradientColorStops:[e],gradientColorStopPositions:[Oe,k],inset:$(),margin:$(),opacity:M(),padding:d(),saturate:M(),scale:M(),sepia:R(),skew:G(),space:d(),translate:d()},classGroups:{aspect:[{aspect:["auto","square","video",a]}],container:["container"],columns:[{columns:[C]}],"break-after":[{"break-after":Q()}],"break-before":[{"break-before":Q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Z(),a]}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",j,a]}],basis:[{basis:$()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",a]}],grow:[{grow:R()}],shrink:[{shrink:R()}],order:[{order:["first","last","none",j,a]}],"grid-cols":[{"grid-cols":[P]}],"col-start-end":[{col:["auto",{span:["full",j,a]},a]}],"col-start":[{"col-start":E()}],"col-end":[{"col-end":E()}],"grid-rows":[{"grid-rows":[P]}],"row-start-end":[{row:["auto",{span:[j,a]},a]}],"row-start":[{"row-start":E()}],"row-end":[{"row-end":E()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",a]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",a]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...V()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...V(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...V(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[f]}],mx:[{mx:[f]}],my:[{my:[f]}],ms:[{ms:[f]}],me:[{me:[f]}],mt:[{mt:[f]}],mr:[{mr:[f]}],mb:[{mb:[f]}],ml:[{ml:[f]}],"space-x":[{"space-x":[H]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[H]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",a,r]}],"min-w":[{"min-w":[a,r,"min","max","fit"]}],"max-w":[{"max-w":[a,r,"none","full","min","max","fit","prose",{screen:[C]},C]}],h:[{h:[a,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[a,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[a,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[a,r,"auto","min","max","fit"]}],"font-size":[{text:["base",C,k]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",T]}],"font-family":[{font:[P]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",a]}],"line-clamp":[{"line-clamp":["none",z,T]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",v,a]}],"list-image":[{"list-image":["none",a]}],"list-style-type":[{list:["none","disc","decimal",a]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[m]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[m]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[..._(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",v,k]}],"underline-offset":[{"underline-offset":["auto",v,a]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:d()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",a]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",a]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[m]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Z(),Ve]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",$e]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Ue]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[S]}],"gradient-via-pos":[{via:[S]}],"gradient-to-pos":[{to:[S]}],"gradient-from":[{from:[x]}],"gradient-via":[{via:[x]}],"gradient-to":[{to:[x]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[m]}],"border-style":[{border:[..._(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[m]}],"divide-style":[{divide:_()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",..._()]}],"outline-offset":[{"outline-offset":[v,a]}],"outline-w":[{outline:[v,k]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Y()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[m]}],"ring-offset-w":[{"ring-offset":[v,k]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",C,Be]}],"shadow-color":[{shadow:[P]}],opacity:[{opacity:[m]}],"mix-blend":[{"mix-blend":[...K(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":K()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",C,a]}],grayscale:[{grayscale:[b]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[g]}],saturate:[{saturate:[B]}],sepia:[{sepia:[q]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[b]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[m]}],"backdrop-saturate":[{"backdrop-saturate":[B]}],"backdrop-sepia":[{"backdrop-sepia":[q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",a]}],duration:[{duration:G()}],ease:[{ease:["linear","in","out","in-out",a]}],delay:[{delay:G()}],animate:[{animate:["none","spin","ping","pulse","bounce",a]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[L]}],"scale-x":[{"scale-x":[L]}],"scale-y":[{"scale-y":[L]}],rotate:[{rotate:[j,a]}],"translate-x":[{"translate-x":[X]}],"translate-y":[{"translate-y":[X]}],"skew-x":[{"skew-x":[J]}],"skew-y":[{"skew-y":[J]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",a]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",a]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":d()}],"scroll-mx":[{"scroll-mx":d()}],"scroll-my":[{"scroll-my":d()}],"scroll-ms":[{"scroll-ms":d()}],"scroll-me":[{"scroll-me":d()}],"scroll-mt":[{"scroll-mt":d()}],"scroll-mr":[{"scroll-mr":d()}],"scroll-mb":[{"scroll-mb":d()}],"scroll-ml":[{"scroll-ml":d()}],"scroll-p":[{"scroll-p":d()}],"scroll-px":[{"scroll-px":d()}],"scroll-py":[{"scroll-py":d()}],"scroll-ps":[{"scroll-ps":d()}],"scroll-pe":[{"scroll-pe":d()}],"scroll-pt":[{"scroll-pt":d()}],"scroll-pr":[{"scroll-pr":d()}],"scroll-pb":[{"scroll-pb":d()}],"scroll-pl":[{"scroll-pl":d()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",a]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[v,k,T]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const Ye=je(Xe);function re(...e){return Ye(he(e))}function Ke({images:e}){const[r,o]=te.useState(0);return console.log(e[r]),I.jsxs(I.Fragment,{children:[e.map((t,s)=>I.jsx("div",{className:re("bg-red-100 w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center transition-opacity duration-300 ease-in-out opacity-0",r===s&&"opacity-100"),style:{backgroundImage:`url(${t})`}})),I.jsx("div",{className:"flex gap-3 items-center justify-center pb-2",children:e.length>1&&e.map((t,s)=>I.jsx("button",{className:re("z-10 bg-accent/80 rounded-full w-4 h-4 transition-all border-[1px] border-foreground/20",r===s&&"bg-accent/50"),onClick:()=>o(s)}))})]})}export{Ke as default};
