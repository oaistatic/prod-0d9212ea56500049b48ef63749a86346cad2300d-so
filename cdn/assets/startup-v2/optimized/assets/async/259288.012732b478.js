export const __rspack_esm_ids=[259288];export const __webpack_modules__={l4HN(e,t,n){n.d(t,{a:()=>u});var r=n("ABep"),i=n("Me4D"),a=n("X09v"),o=n("Y8kU"),l=n("zd8w"),s="A29dc9wq",d="gTEVaofw",c=n("FIwD");function u(e){let{activeKey:t,ariaLabel:n,backFace:a,children:s,disabled:u=!1,dismissDirection:g,faceBackground:v,flipped:y=!1,hint:x,isMobile:b=!1,onboardingStep:w,onInteractionChange:k,onSwipeProgress:j,onSwipeLeft:C,onSwipeRight:E,reducedMotion:N=!1,restoreDirection:I,shuffleKey:S,swipeLeftColor:A="#ee7c37",swipeRightColor:R="#53b559"}=e,L=l.Children.toArray(s),M=(0,l.useContext)(i.k),T=v?.[M],F=(0,l.useRef)(null),z=(0,l.useRef)(null),P=(0,l.useRef)(null),D=(0,l.useRef)(!1),O=(0,l.useRef)(0),$=(0,l.useRef)(null),H=(0,l.useRef)(S),W=(0,l.useRef)({activeKey:t,flipped:y}),q=(0,l.useRef)(null),V=(0,l.useRef)(null),_=(0,l.useRef)({drag:!1,motion:!1,flip:!1}),[B,U]=(0,l.useState)(null),G=B?.kind==="outgoing"?B:null,[K,Z]=(0,l.useState)(!1),Y=(0,o.a)(k),J=(0,o.a)(j),X=(0,l.useRef)(0),Q=(0,i.B)(),ee=(0,l.useCallback)((e,t)=>{if(_.current[e]===t)return;let n=Object.values(_.current).some(Boolean);_.current[e]=t,"flip"===e&&Z(t);let r=Object.values(_.current).some(Boolean);n!==r&&z.current&&Y.current?.(r)},[Y]),et=(0,l.useCallback)(e=>{X.current!==e&&(X.current=e,z.current&&J.current?.(e))},[J]),en=(0,l.useCallback)(()=>{P.current=null,z.current?.removeAttribute("data-d-dragging"),z.current?.removeAttribute("data-d-swipe-direction"),z.current?.style.removeProperty("--swipe-progress"),F.current?.style.removeProperty("transform"),et(0)},[et]);(0,l.useLayoutEffect)(()=>{let e=$.current,n=H.current;if(H.current=S,$.current={key:t,front:L[0],backFace:a,flipped:y,hint:x},!e||e.key===t)return;null!==q.current&&clearTimeout(q.current);let r=N||f(),i=void 0!==S&&void 0!==n&&S!==n&&L.length>1,o=i?"shuffle":g;if((I||o)&&!r){let t=((I??o)==="left"?-1:1)*(p(z.current)?-1:1);I?U({kind:"restoring",exitSign:t}):o&&U({...e,kind:"outgoing",direction:o,exitSign:t,x:P.current?.x??0,rotation:P.current?.rotation??0,progress:P.current?.progress??0}),ee("motion",!0),q.current=setTimeout(()=>{q.current=null,D.current=!1,U(null),ee("motion",!1)},i||I?300:240)}else U(null),D.current=!1,ee("motion",!1);ee("drag",!1),en()},[t,a,L,g,y,x,N,I,S,en,ee]),(0,l.useLayoutEffect)(()=>{let e=W.current;if(W.current={activeKey:t,flipped:y},e.activeKey!==t||e.flipped!==y||N){if(null!==V.current&&clearTimeout(V.current),e.activeKey!==t||N||f())return void ee("flip",!1);ee("flip",!0),V.current=setTimeout(()=>{V.current=null,ee("flip",!1)},300)}},[t,y,N,ee]),(0,l.useEffect)(()=>()=>{null!==q.current&&clearTimeout(q.current),null!==V.current&&clearTimeout(V.current)},[]),(0,l.useEffect)(()=>{let e=F.current;if(!e||u)return;let t=e=>{e.cancelable&&P.current&&e.preventDefault()};return e.addEventListener("touchmove",t,{passive:!1}),()=>e.removeEventListener("touchmove",t)},[u]);let er={key:t,front:L[0],backFace:a,flipped:y,hint:x};return(0,r.jsxs)("div",{"aria-label":n,className:"zOo8EwC1","data-d-component":"swipe-stack","data-d-disabled":u?"":void 0,"data-d-dismissing":G&&"shuffle"!==G.direction?"":void 0,"data-d-flipping":K?"":void 0,"data-d-mobile":b?"":void 0,"data-d-onboarding-step":u||y||null!==B||K?void 0:w,"data-d-reduced-motion":N?"":void 0,"data-d-restoring":B?.kind==="restoring"?"":void 0,"data-d-shuffling":G?.direction==="shuffle"?"":void 0,onClickCapture:e=>{0===e.detail||Date.now()>=O.current||(e.preventDefault(),e.stopPropagation())},ref:z,role:n?"group":void 0,style:{"--swipe-left-color":(0,c.c)((0,c.j)(M,A),M),"--swipe-right-color":(0,c.c)((0,c.j)(M,R),M),"--swipe-release-progress":G?.progress??0,"--swipe-exit-sign":B?.exitSign},children:[(0,r.jsx)(m,{options:{disabled:u||null!==B||K,enabled:!!(C||E),interactive:!0,targetRef:F,onDragStart:()=>{D.current||(z.current?.setAttribute("data-d-dragging",""),ee("drag",!0))},onDragMove:e=>{if(D.current)return;P.current=e;let t=p(z.current)?"left"===e.direction?"right":"left":e.direction;if(z.current?.setAttribute("data-d-swipe-direction",t),z.current?.style.setProperty("--swipe-progress",String(e.progress)),et(("left"===t?-1:1)*Math.round(16*e.progress)),F.current){let t=N||f()?0:e.rotation;F.current.style.transform=`translateX(${e.x}px) rotate(${t}deg)`}},onDragEnd:()=>{O.current=Date.now()+350,D.current||(en(),ee("drag",!1))},onSwipe:e=>{if(D.current)return;let t=p(z.current)?1!==e:1===e,n=t?C:E;n&&(D.current=!0,q.current=setTimeout(()=>{q.current=null,D.current=!1,en(),ee("drag",!1)},240),Q({target:"swipe_stack",value:t?"left":"right"},(0,i.q)(n)))}}},t),L.slice(1,3).map((e,t)=>(0,r.jsx)("div",{"aria-hidden":!0,className:"KxQyqUCs","data-d-stack-depth":t+1,inert:!0,style:{"--stack-depth":t+1,backgroundColor:T},children:e},t)),(0,r.jsxs)("div",{className:"EPqlrjHt",inert:u||null!==B,ref:F,children:[(0,r.jsx)(h,{card:er,backgroundColor:T},t),(0,r.jsx)("div",{"aria-hidden":!0,className:d})]}),G&&(0,r.jsxs)("div",{"aria-hidden":!0,className:"dE535ZUx","data-d-swipe-direction":G.direction,inert:!0,style:{"--swipe-from-x":`${G.x}px`,"--swipe-from-rotation":`${G.rotation}deg`},children:[(0,r.jsx)(h,{card:G,backgroundColor:T}),(0,r.jsx)("div",{className:d})]},G.key)]})}function m(e){let{options:t}=e;return(0,a.a)(t),null}function h(e){let{card:t,backgroundColor:n}=e;return(0,r.jsx)("div",{className:"qPcV_UkB",children:(0,r.jsx)("div",{className:"T0dpn8wY",children:(0,r.jsxs)("div",{className:"vwLguvFJ","data-d-flipped":t.flipped?"":void 0,children:[(0,r.jsxs)("div",{"aria-hidden":t.flipped,className:"mxzZafKZ",inert:t.flipped,style:{backgroundColor:n},children:[t.front,!t.flipped&&t.hint&&(0,r.jsx)("div",{className:s,children:t.hint})]}),t.backFace&&(0,r.jsxs)("div",{"aria-hidden":!t.flipped,className:"F0cksAP6",inert:!t.flipped,style:{backgroundColor:n},children:[t.backFace,t.flipped&&t.hint&&(0,r.jsx)("div",{className:s,children:t.hint})]})]})})})}function p(e){return null!==e&&"rtl"===window.getComputedStyle(e).direction}function f(){return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0}},TZvG(e,t,n){let r;n.d(t,{a:()=>el.a,b:()=>nr,c:()=>ey.a,d:()=>eE.a,e:()=>e6,f:()=>tv,g:()=>tS.a,h:()=>k,i:()=>nn.b});var i=n("ABep"),a=n("Me4D"),o=n("Exc7"),l=n("IFpk"),s=n("zd8w");function d(e){return{dimension:e.dimension,enter:c(e.enter),exit:c(e.exit),forceCompositeLayer:e.forceCompositeLayer,hideOverflow:e.hideOverflow,initial:c(e.initial),insertMethod:e.insertMethod,itemAnchor:e.itemAnchor,layoutEnter:e.layoutEnter,layoutExit:e.layoutExit,layoutMove:e.layoutMove,preventInitialTransition:e.preventInitialTransition}}function c(e){if(!e)return;let{translateX:t,translateY:n,...r}=e;return{...r,x:t,y:n}}var u=n("SRgp"),m=n("FIwD");function h(e){let{children:t,color:n,label:r,maxWidth:o,onHover:l,padding:d,pill:c=!0,size:h,variant:p,weight:f="medium"}=e,g=(0,s.useContext)(a.k),v=function(e){switch(e){case"secondary":return"secondary";case"success":return"success";case"danger":return"danger";case"warning":return"warning";case"info":return"info";case"discovery":return"discovery";default:return}}(n),y=null==v?n:void 0,x="number"==typeof d||"string"==typeof d||d?.bottom!=null||d?.top!=null||d?.y!=null,b={className:"v4RzAbcs",color:v,"data-d-component":"badge","data-d-hoverable":l?"":void 0,"data-d-weight":f,pill:c,size:h,style:{...(0,m.g)(d),maxWidth:o,...null==y?{}:{backgroundColor:(0,m.c)((0,m.j)(g,y),g)},...x?{height:"auto"}:{}},variant:p,...null==l?{}:{onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1)}},w=u.a;return(0,i.jsx)(w,{className:b.className,color:b.color,"data-d-component":b["data-d-component"],"data-d-hoverable":b["data-d-hoverable"],"data-d-weight":b["data-d-weight"],onMouseEnter:b.onMouseEnter,onMouseLeave:b.onMouseLeave,pill:b.pill,size:b.size,style:b.style,variant:b.variant,children:t??r??null})}var p=n("afoa"),f=n("TQDJ"),g=n("zsAy"),v=n("BnEr"),y=n("BNR2"),x=n("ZpWd");let b=(0,s.createContext)(void 0),w=(0,s.createContext)(function(e){let{children:t,content:n}=e;return(0,i.jsx)(x.a,{compact:!0,content:n,children:t})});function k(e){let{children:t,component:n}=e;return(0,i.jsx)(w.Provider,{value:n,children:t})}function j(e){let{children:t,content:n,disabled:r,theme:o}=e,l=(0,s.useContext)(b),d=(0,s.useContext)(a.k),c=(0,s.useContext)(w),u=n??(r?void 0:l);return(0,i.jsx)(b.Provider,{value:void 0,children:u?(0,i.jsx)(c,{content:u,theme:o??d,children:t}):t})}var C=n("InHZ");function E(e){let{block:t,children:n,color:r="primary",disabled:o,label:l,loading:s,onClick:d,pill:c=!0,size:u="lg",submit:m,uniform:h,variant:p="solid"}=e,f=(0,a.B)(),g=(0,i.jsx)(y.a,{"aria-label":null!=n?l:void 0,block:t,color:r,className:"MC8eGfK6",disabled:o,loading:s,onClick:e=>{e.stopPropagation(),f(C.a.button,(0,a.q)(d))},pill:c,size:u,type:m?"submit":"button",uniform:h,variant:p,"data-d-component":"button","data-d-block":t?"":void 0,children:n??l});return(0,i.jsx)(j,{disabled:o,children:g})}var N=n("kpww"),I=n("LpLF"),S=n("y1Va"),A=n("McuO"),R=n("on57"),L=n("eZy0"),M="YDDGoOdU",T="elEPbhEu",F="qWugKcZ9";let z=["class","style","dir","data-d-column-sizing","data-d-direction","data-d-scrollable"];function P(e){let{viewportRef:t}=e,[n,r]=(0,s.useState)();return(0,s.useEffect)(()=>{let e=t.current;if(null==e)return;let n=()=>{let t=getComputedStyle(e),n="auto"===t.overflowX||"scroll"===t.overflowX,i=Math.max(0,e.scrollWidth-e.clientWidth),a="rtl"===t.direction,o=Math.min(i,Math.max(0,a?-e.scrollLeft:e.scrollLeft)),l=n&&o>1,s=n&&i-o>1,d={left:a?s:l,right:a?l:s,x:e.offsetLeft+e.clientLeft,y:e.offsetTop+e.clientTop,width:e.clientWidth,height:e.clientHeight};r(e=>e?.left===d.left&&e.right===d.right&&e.x===d.x&&e.y===d.y&&e.width===d.width&&e.height===d.height?e:d)},i="u"<typeof ResizeObserver?null:new ResizeObserver(n),a=()=>{i?.disconnect(),i?.observe(e),Array.from(e.children).forEach(e=>i?.observe(e))},o="u"<typeof ResizeObserver?null:new ResizeObserver(n);o?.observe(e,{box:"border-box"});let l="u"<typeof MutationObserver?null:new MutationObserver(()=>{a(),n()});l?.observe(e,{attributes:!0,attributeFilter:z,childList:!0,characterData:!0,subtree:!0});for(let t=e.parentElement;null!=t;t=t.parentElement)l?.observe(t,{attributes:!0,attributeFilter:z});return a(),n(),e.addEventListener("scroll",n,{passive:!0}),e.addEventListener("load",n,!0),window.addEventListener("resize",n),()=>{i?.disconnect(),o?.disconnect(),l?.disconnect(),e.removeEventListener("scroll",n),e.removeEventListener("load",n,!0),window.removeEventListener("resize",n)}},[t]),(0,i.jsx)("div",{"aria-hidden":"true",className:"nCUHEits","data-d-overflow-left":n?.left?"":void 0,"data-d-overflow-right":n?.right?"":void 0,style:null==n?void 0:{left:n.x,top:n.y,width:n.width,height:n.height}})}let D={lg:"220px",sm:"140px"},O=(0,s.createContext)({});function $(e){let{aspectRatio:t,background:n,border:r,children:a,component:o,gap:l,height:d,maxHeight:c,maxWidth:u,minHeight:m,minWidth:h,padding:p,radius:f,variant:g="none",width:v}=e,{itemWidth:y,snapAlign:x="start"}=(0,s.useContext)(O),b="outline"===g||"elevated"===g,w=v??y,k=h??w;return(0,i.jsx)(L.a,{aspectRatio:t,as:"div",background:n??("soft"===g?"surface-elevated-secondary":"elevated"===g?"surface":void 0),border:r??(b?{color:"default",size:1}:void 0),className:"NS27Bq4C",clip:"none"!==g,component:o,flex:"0 0 auto",gap:l,height:d,maxHeight:c,maxWidth:u,minHeight:m,minWidth:k,padding:p??("none"===g?void 0:4),radius:f??("none"===g?void 0:"xl"),role:"listitem",snapAlign:x,variant:g,width:w,children:a})}function H(e){return Array.from(e.children).filter(e=>e instanceof HTMLElement)}function W(e,t,n){return"rtl"===n?t.right-e.right:e.left-t.left}function q(e){let t=Number.parseFloat(e);return Number.isFinite(t)?t:0}function V(e){return{textDirection:"rtl"===getComputedStyle(e).direction?"rtl":"ltr",carouselRect:e.getBoundingClientRect(),alignedInlineStart:q(getComputedStyle(e).scrollPaddingInlineStart),items:H(e)}}function _(e){let t=V(e),n=t.items.at(0);if(null==n)return{...t,currentOffset:0,itemOffsets:[],maxScrollOffset:0};let r=W(n.getBoundingClientRect(),t.carouselRect,t.textDirection),i=t.items.map(e=>Math.abs(W(e.getBoundingClientRect(),t.carouselRect,t.textDirection)-r));return{...t,currentOffset:t.alignedInlineStart-r,itemOffsets:i,maxScrollOffset:Math.max(0,e.scrollWidth-e.clientWidth)}}function B(e,t){let n,r=1/0;return e.forEach((e,i)=>{let a=Math.abs(e-t);a<r&&(n=i,r=a)}),n}function U(){return"u">typeof window&&window.matchMedia?.("(prefers-reduced-motion: reduce)").matches===!0}var G=n("TxZP"),K=n("f8Zl"),Z=n("TE73"),Y=n("mQlD"),J=n("GdAf"),X="S6ohsd1n";function Q(e){let{alt:t,frame:n=!1,inline:r=!1,size:o,url:l}=e,d=(0,s.useContext)(a.d),c=(0,Z.b)(l??"",32),u=o??(r?"1em":12);return c?(0,i.jsxs)(L.a,{as:"div",className:"doeXm2bD",component:"favicon",height:u,inline:r,role:"presentation",width:u,children:[d?(0,i.jsx)(Y.default,{"aria-hidden":!t||void 0,"aria-label":t,className:X,role:t?"img":void 0,style:{color:"var(--color-text-secondary)"}}):(0,i.jsx)(J.a,{alt:t,className:X,forceRenderAfterLoadFail:!0,src:c}),n?(0,i.jsx)("div",{"aria-hidden":"true",className:"cpg5w_ZW"}):null]}):null}var ee=n("gcGr");let et=u.a,en=[{left:83,top:6.7,color:"blue-400",size:7,vx:-138.7,vy:-234.1,ax:85.9,ay:376.3,flip:5.1,phase:0,life:3.9},{left:129.4,top:7.2,color:"blue-400",size:8,vx:78.3,vy:-363.2,ax:-60.4,ay:431.9,flip:7.4,phase:.71,life:3.55},{left:123.6,top:27.9,color:"blue-400",size:7,vx:-175.6,vy:-173,ax:137.5,ay:346.5,flip:6.2,phase:1.42,life:3.65},{left:138,top:38.7,color:"blue-400",size:6,vx:80.9,vy:-183.2,ax:-38.7,ay:347.2,flip:8.5,phase:2.13,life:3.4},{left:103.3,top:46.4,color:"blue-400",size:8,vx:27,vy:-301.7,ax:-27.9,ay:422.8,flip:4.8,phase:2.84,life:3.75},{left:100.8,top:52.6,color:"blue-400",size:7,vx:141.9,vy:-302.1,ax:-100.4,ay:349.2,flip:7.8,phase:3.55,life:3.95},{left:78.1,top:58.5,color:"blue-400",size:6,vx:29.1,vy:-302.5,ax:-44.6,ay:400.4,flip:9.1,phase:4.26,life:3.35},{left:120.6,top:60.3,color:"blue-400",size:8,vx:-70.8,vy:-286.8,ax:57.6,ay:412.7,flip:5.5,phase:4.97,life:3.8},{left:92.5,top:66.3,color:"blue-400",size:6,vx:-139.9,vy:-295,ax:102,ay:371.9,flip:8.8,phase:5.68,life:3.6},{left:93.2,top:-4.3,color:"pink-400",size:6,vx:79.3,vy:-246.3,ax:-38.9,ay:393.3,flip:6.6,phase:.11,life:3.5},{left:110.1,top:13.1,color:"pink-400",size:7,vx:-59.8,vy:-270.3,ax:64.8,ay:404.3,flip:7.2,phase:.82,life:3.7},{left:75.3,top:14.5,color:"pink-400",size:6,vx:143.3,vy:-228,ax:-110.8,ay:377.5,flip:8.1,phase:1.53,life:3.85},{left:88.5,top:25.9,color:"pink-400",size:7,vx:58.1,vy:-251.3,ax:-50,ay:395.6,flip:5.9,phase:2.24,life:3.45},{left:92.4,top:48.9,color:"pink-400",size:8,vx:150.1,vy:-330.9,ax:-91.5,ay:406.9,flip:9,phase:2.95,life:4},{left:93.2,top:73.6,color:"pink-400",size:7,vx:203.1,vy:-122.5,ax:-133.9,ay:171.6,flip:4.7,phase:3.66,life:3.65},{left:115.1,top:-13,color:"yellow-400",size:6,vx:-187.1,vy:-234.5,ax:130.9,ay:323.5,flip:7.6,phase:4.37,life:3.75},{left:81.8,top:-9.8,color:"yellow-400",size:6,vx:-39.2,vy:-290.4,ax:-1.6,ay:415.9,flip:6,phase:5.08,life:3.55},{left:142.3,top:-7.4,color:"yellow-400",size:8,vx:192.5,vy:-338,ax:-123.6,ay:446.3,flip:8.7,phase:5.79,life:3.85},{left:121.9,top:7.2,color:"yellow-400",size:7,vx:21.9,vy:-203.2,ax:-22.1,ay:268.8,flip:5.3,phase:.21,life:3.95},{left:69.7,top:26,color:"yellow-400",size:8,vx:-152.3,vy:-231.4,ax:82.9,ay:383.3,flip:9.3,phase:.92,life:3.4},{left:102.4,top:34.1,color:"yellow-400",size:6,vx:-1.3,vy:-254.7,ax:-.5,ay:378.9,flip:6.8,phase:1.63,life:3.65},{left:80.1,top:47.2,color:"yellow-400",size:8,vx:-53.7,vy:-248.9,ax:33.9,ay:387.6,flip:7,phase:2.34,life:3.9},{left:71.9,top:54.1,color:"yellow-400",size:7,vx:-77.3,vy:-272.5,ax:24.3,ay:394.1,flip:8.3,phase:3.05,life:3.5},{left:111.2,top:66.2,color:"yellow-400",size:7,vx:-23.2,vy:-217.5,ax:15.9,ay:375.6,flip:5.7,phase:3.76,life:4}],er={0:{start:.58,end:2.45,top:-1,gravity:260},1:{start:.82,end:2.65,top:-9,gravity:245},9:{start:.6,end:2.8,top:-9,gravity:240},12:{start:.48,end:2.55,top:-9,gravity:250},15:{start:.76,end:2.95,top:-9,gravity:235},17:{start:.77,end:3.1,top:-9,gravity:230}};function ei(){let[e,t]=(0,s.useState)(0);return((0,s.useEffect)(()=>{let e=window.matchMedia("(prefers-reduced-motion: reduce)");if(e.matches)return;let n=Date.now(),r=window.setInterval(()=>{let e=Date.now()-n;t(e),e>=5200&&window.clearInterval(r)},50),i=()=>{e.matches&&(window.clearInterval(r),t(5200))};return e.addEventListener("change",i),()=>{window.clearInterval(r),e.removeEventListener("change",i)}},[]),e<160||e>=5200)?null:(0,i.jsx)("div",{className:"v38rbC9B","aria-hidden":"true","data-celebration-confetti":"true",children:en.map((t,n)=>{let r,a,o,l,s,d,c,u,m,h;return(0,i.jsx)("span",{className:"xcMzYeFM","data-celebration-piece":"true",style:(r=en[n],o=(a=(e-160)/1e3)<=1?a:1+(a-1)*.6,d=(s=(l=er[n])&&a>=l.start?a<l.end?l.start:a-(l.end-l.start):a)<=1?s:1+(s-1)/(1+4*(s-1)),c=1.5*(r.left-106+r.vx*d+r.ax*d*d),u=l&&a>=l.start?a<l.end?l.top:l.top+l.gravity*(a-l.end)**2:-38+1.25*(r.top+r.vy*o+r.ay*o*o)+(o>.25&&o<1?42*Math.sin((o-.25)*4.18879):0),m=Math.abs(Math.cos(s*r.flip+r.phase)),h=a<=r.life-.55?1:a>=r.life?0:(r.life-a)/.55,{width:r.size,height:r.size,background:`var(--${r.color})`,left:`calc(50% + ${c}px)`,top:u,transform:`translate(-50%, -50%) rotate(${57.2958*r.phase+s*r.flip*18}deg) ${n%2==0?"scaleX":"scaleY"}(${.12+.88*m})`,opacity:(.65+.35*m)*h})},n)})})}var ea=n("krfl"),eo=n("Ymsa"),el=n("Ufhb"),es=n("TiFH"),ed=n("a0Bm"),ec=n("l4HN");let eu={light:"#fff",dark:"#212121"};var em=n("xUWq"),eh=n("GQ93"),ep="cIEClfI1",ef="WHuLyMFa";class eg{options;isChildReady=!1;isListening=!1;pendingRequests=new Map;queuedMessages=[];teardownTimer;unregisterTransport;constructor(e){this.options=e}matches(e){return this.options.channelId===e.channelId&&this.options.iframe===e.iframe&&this.options.srcDoc===e.srcDoc&&this.options.token===e.token}updateOptions(e){this.options=e}listen(){this.teardownTimer&&(clearTimeout(this.teardownTimer),this.teardownTimer=void 0),this.isListening||(window.addEventListener("message",this.handleMessage),this.unregisterTransport=this.options.messenger?.registerTransport({command:this.sendCommand,event:this.emitEvent}),this.isListening=!0)}teardown=()=>{this.isListening&&(window.removeEventListener("message",this.handleMessage),this.unregisterTransport?.(),this.unregisterTransport=void 0,this.isListening=!1,this.teardownTimer=setTimeout(()=>{this.teardownTimer=void 0,this.queuedMessages.length=0,this.rejectPending(Error("DIL html-view was unmounted"))},0))};sendToFrame=e=>this.isChildReady?this.postToFrame(e):(this.queuedMessages.push(e),!0);postToFrame(e){let t=this.options.iframe.contentWindow;return!!t&&(t.postMessage({__dilHtmlView:"dil-html-view",channelId:this.options.channelId,token:this.options.token,...e},"*"),!0)}sendCommand=(e,t)=>{let n=ev();return new Promise((r,i)=>{this.pendingRequests.set(n,{reject:i,resolve:r}),this.sendToFrame({data:t,id:n,kind:"command",type:e})||(this.pendingRequests.delete(n),i(Error("DIL html-view is not ready")))})};emitEvent=(e,t)=>{this.sendToFrame({data:t,kind:"event",type:e})};handleMessage=e=>{if(e.source!==this.options.iframe.contentWindow)return;let t=e.data;if("dil-html-view"===t.__dilHtmlView&&t.channelId===this.options.channelId&&t.token===this.options.token)switch(t.kind){case"response":this.markChildReady(),function(e,t){if(!e.id)return;let n=t.get(e.id);if(n){if(t.delete(e.id),e.error)return n.reject(Error(e.error.message??"DIL command failed"));n.resolve(e.result)}}(t,this.pendingRequests);return;case"command":this.markChildReady(),async function(e,t,n){if(!e.id||"string"!=typeof e.type)return;let r=t?.commands[e.type];if(!r)return void n({error:{message:`Unknown DILMessenger command "${e.type}"`},id:e.id,kind:"response"});try{let t=await r(e.data);n({id:e.id,kind:"response",result:t})}catch(t){n({error:{message:t instanceof Error?t.message:String(t)},id:e.id,kind:"response"})}}(t,this.options.messenger,this.sendToFrame);return;case"event":this.markChildReady(),"string"==typeof t.type&&this.options.messenger?.onEvent(t.type,t.data);return;case"bridge-ready":this.markChildReady();return;case void 0:return;default:throw Error(`Unknown DIL html-view message kind "${String(t.kind)}"`)}};markChildReady(){this.isChildReady||(this.isChildReady=!0,this.flushQueuedMessages())}flushQueuedMessages(){for(;this.queuedMessages.length>0;){let e=this.queuedMessages.shift();if(!e)return;if(!this.postToFrame(e))return void this.queuedMessages.unshift(e)}}rejectPending(e){for(let t of this.pendingRequests.values())t.reject(e);this.pendingRequests.clear()}}function ev(){return globalThis.crypto?.randomUUID?.()??Math.random().toString(36).slice(2)}var ey=n("en2n"),ex=n("cO2G"),eb="BcA3fIZv",ew="yeaWuk8v",ek="ljDyDDAK",ej="Ira_zuNk";function eC(e){let{background:t="surface-tertiary",children:n,duration:r=1500,label:a,reducedMotion:o=!1,...l}=e;return(0,i.jsx)(L.a,{as:"div",ariaLabel:a,className:(0,R.b)("B3O2RR2x",null!=n&&"UXHFczZi",o&&"H_W0IuNI"),component:"loading-block",layout:{...l,background:null==n?t:void 0,children:null==n?n:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(L.a,{as:"div",ariaHidden:!0,className:"ENb3OyB0",layout:{background:t}}),n]})},role:a?"status":void 0,style:(0,Z.g)({"loading-block-duration":(0,Z.i)(r)})})}var eE=n("qKzV");let eN=(0,s.createContext)(!1),eI=(0,s.forwardRef)(function(e,t){let{layout:n,...r}=e;return(0,i.jsx)(L.a,{ariaLabel:r.ariaLabel,as:"button",boxRef:t,className:r.className,component:"pressable",gap:r.gap,hostProps:r,inline:r.inline,layout:n,style:r.style})}),eS=(0,s.forwardRef)(function(e,t){let{layout:n,...r}=e;return(0,i.jsx)(L.a,{ariaLabel:r.ariaLabel,as:"span",boxRef:t,className:r.className,component:"pressable",gap:r.gap,hostProps:r,inline:r.inline,layout:n,role:r.role,style:r.style})});function eA(e){let{ariaLabel:t,ariaPressed:n,capture:r=!1,disabled:o,dimWhenDisabled:l,focusStyle:d,gap:c,hoverBackground:u,inline:h=!1,insetBorder:p=!1,variant:f,onClick:g,onHover:v,revealOnHover:y=!1,tooltip:x,...b}=e,w=(0,a.B)(),k=(0,s.useContext)(eN),E=(0,s.useContext)(a.k),N=b.theme??E;if(k){let e=(0,i.jsx)(L.a,{as:"span",component:"pressable",gap:h?c??0:c,inline:h,layout:b,role:void 0,style:h?{display:"inline"}:void 0});return h?(0,i.jsx)(eE.a.Provider,{value:!0,children:e}):e}let I=()=>w(C.a.pressable,(0,a.q)(g)),S=e=>{e.stopPropagation(),r&&e.preventDefault(),o||I()},A=e=>{("Enter"===e.key||" "===e.key&&"link"!==b.role)&&(e.target===e.currentTarget||r)&&(!o||r)&&(e.preventDefault(),e.stopPropagation(),o||I())},M=r?{...b,children:(0,i.jsx)(eN.Provider,{value:!0,children:b.children})}:b,T="link"===b.role,F=h||T,z=(0,i.jsx)(F?eS:eI,{ariaLabel:t,"aria-pressed":n,className:(0,R.b)("QEXFz7ri",y&&"k7I1urTc","ghost"===f&&"xEEOGKOF","inset"===d&&"bnOhkkF2",!1===l&&"Z4s8VHIx"),disabled:o,gap:h?c??0:c,inline:h,layout:M,onClick:r?void 0:S,onClickCapture:r?S:void 0,onKeyDown:F&&!r?A:void 0,onKeyDownCapture:F&&r?A:void 0,onMouseEnter:o?void 0:()=>v?.(!0),onMouseLeave:()=>v?.(!1),style:{...(0,Z.g)({"pressable-hover-background":(0,m.c)((0,m.j)(N,u),N)}),...h?{display:"inline"}:{},...p?{boxShadow:"inset 0 0 0 1px currentColor"}:{}},role:b.role??(h?"button":void 0),tabIndex:F&&!o?0:void 0,type:"button"}),P=(0,i.jsx)(j,{content:x,disabled:o,theme:b.theme,children:z});return h?(0,i.jsx)(eE.a.Provider,{value:!0,children:P}):P}function eR(e){let{actionOverlay:t,alt:n,aspectRatio:r,background:o,bitmapBlendMode:l,children:d,containOutsideAspectRatio:c,contentCrop:u,contentCropFit:h,fallback:p,fit:f,frame:g,height:v,hideOnFailure:y=!1,hoverZoom:x,maxHeight:b,maxWidth:w,minHeight:k,minWidth:j,onImageError:C,onImageLoad:E,imageRef:N,imageFrameRef:I,imageFrameComponent:S,imageContentComponent:A,loadedOverlay:R,position:L,radius:M,secondaryAction:T,size:F,src:z,width:P}=e,D=(0,s.useContext)(a.i),O=(0,s.useContext)(a.k),$=(0,s.useContext)(eN),[H]=(0,s.useState)(D),[W,q]=(0,s.useState)(null),[V,_]=(0,s.useState)(),B=(0,s.useRef)(void 0),U=null!=R,G=V?.src===z?V?.aspectRatio:void 0,K=c&&void 0!==G&&(G<=c.min||G>=c.max)?"contain":f,Z=x&&S&&A,Y=Z?A:null,X=(0,s.useRef)(null),[Q,ee]=(0,s.useState)(),et=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"contain";if(!e)return;let r=e.aspect_ratio,i=e.placement,a=t??r;if(!Number.isFinite(r)||r<=0||!Number.isFinite(a)||a<=0||!i||!Number.isFinite(i.left)||!Number.isFinite(i.top)||!Number.isFinite(i.width)||i.width<=0||!Number.isFinite(i.height)||i.height<=0)return;let o="cover"===n?Math.max:Math.min,l=100*o(1,r/a),s=100*o(1,a/r);return{viewport:{left:(100-l)/2,top:(100-s)/2,width:l,height:s},image:i}}(u,Q,h),en=null!=et,er=(0,s.useCallback)(e=>{if(X.current=e,"function"==typeof I)return I(e);I&&(I.current=e)},[I]);(0,s.useLayoutEffect)(()=>{let e=X.current;if(!en||!e)return;let t=()=>{let t=e.getBoundingClientRect();t.width>0&&t.height>0&&ee(t.width/t.height)};if(t(),"u"<typeof ResizeObserver)return;let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[en,z,W]);let ei=v??F,ea=P??F,eo={...(0,m.f)(M),aspectRatio:(0,m.b)(r)??(en?u?.aspect_ratio:void 0),height:ei,maxHeight:b,maxWidth:w,minHeight:k,minWidth:j,width:ea},el=(0,ex.a)((0,m.c)((0,m.j)(O,o),O)),es={...eo,...el,overflow:"hidden"};if((0,s.useEffect)(()=>{q(null)},[z]),(0,s.useEffect)(()=>{(c||T||t||U)&&B.current?.src===z&&_(B.current)},[t,c,T,U,z]),W===z&&null!=p)return(0,i.jsxs)("div",{ref:er,className:`${eb} ${ew} fiDrounZ`,"data-d-component":"image","data-d-image-fallback":"","data-d-frame":g?"":void 0,style:es,children:[p,null==d?null:(0,i.jsx)("div",{className:ej,children:d})]});if(W===z&&y)return null;let ed=z?(0,i.jsx)(J.a,{ref:N,alt:n,className:`${eb} GUJwJttL`,forceRenderAfterLoadFail:!y&&null==p,onError:e=>{q(z),C?.(e)},onLoad:e=>{q(null);let n=e.currentTarget;if(n.getAttribute("src")===z&&Number.isFinite(n.naturalWidth)&&Number.isFinite(n.naturalHeight)&&n.naturalWidth>0&&n.naturalHeight>0){let e={aspectRatio:n.naturalWidth/n.naturalHeight,src:z};B.current=e,(c||T||t||U)&&_(e)}E?.(e)},referrerPolicy:"no-referrer",src:z,style:{...eo,mixBlendMode:l,objectFit:K,objectPosition:L,...Z&&!et?{width:null!=ea?"100%":void 0,height:null!=ei?"100%":void 0,maxWidth:"none",maxHeight:"none",minWidth:0,minHeight:0}:{},...et?{position:"absolute",left:`${et.image.left}%`,top:`${et.image.top}%`,width:`${et.image.width}%`,height:`${et.image.height}%`,aspectRatio:void 0,maxWidth:"none",maxHeight:"none",minWidth:0,minHeight:0,objectFit:"fill"}:{}}},z):null,ec=Y?(0,i.jsx)(Y,{className:"tzdYPRew",style:l?el:void 0,children:ed}):ed,eu=!$&&null!=V&&V.src===z&&null!=t;return(0,i.jsxs)(Z?S:"div",{ref:er,className:`${eb} ${ew} ${ek}${t?" group/search-image":""}`,"data-d-component":"image","data-d-stream-media":H?"":void 0,"data-d-frame":g?"":void 0,"data-d-hover-zoom":x&&!Z?"":void 0,"data-d-host-hover":Z?"":void 0,style:es,children:[et?(0,i.jsx)("div",{className:"pc1qo_Vy","data-d-image-crop":"",style:{left:`${et.viewport.left}%`,top:`${et.viewport.top}%`,width:`${et.viewport.width}%`,height:`${et.viewport.height}%`},children:ec}):ec,(0,i.jsx)("div",{className:"OjqK7X0k","data-d-image-loading":"",children:(0,i.jsx)(eC,{background:"light-dark(var(--dil-image-loading-light-bg, var(--theme-user-msg-bg, var(--color-background-info-surface))), var(--theme-user-msg-bg, var(--color-background-info-surface)))",duration:1e3,height:"100%",width:"100%"})}),null==d?null:(0,i.jsx)("div",{className:ej,children:d}),T&&V?.src===z?(0,i.jsx)("div",{className:"E0EAcWdm",children:(0,i.jsx)(eA,{ariaLabel:T.label,onClick:T.onClick,children:T.icon?(0,i.jsx)(ey.a,{inline:!0,name:T.icon,size:"sm"}):T.label})}):null,eu?(0,i.jsx)(eL,{children:t}):null,g?(0,i.jsx)("div",{"aria-hidden":"true",className:"UCrMGpxn"}):null,V?.src===z&&W!==z&&U?R:null]})}function eL(e){let{children:t}=e;return(0,i.jsx)("div",{className:"A1skHNN8",children:(0,i.jsx)("div",{className:"e4zhB5m5",children:t})})}var eM=n("Z8P7"),eT=n("sCki"),eF=n("H9jZ"),ez=n("SXlx"),eP=n("yoJG"),eD=n("qF9g");let eO=(0,s.createContext)("none"),e$=(0,s.createContext)({inheritedMarker:"none",nativeMarker:null}),eH=["md","lg","xl"],eW=(0,s.createContext)({maxMarkerSize:"md",reserveMarkerLane:!1});function eq(e){var t,n;let{children:r,description:a,disabled:o,label:l,marker:d,markerSize:c}=e,u=(0,s.useContext)(eO),m=(0,s.useContext)(e$),h=d??m.inheritedMarker??"none",p=null==d&&h===m.nativeMarker,f=(0,s.useContext)(eW),v=(t=e_(c,f.maxMarkerSize),n=f.maxMarkerSize,eH[Math.min(eH.indexOf(t),eH.indexOf(n))]),y="string"!=typeof h,x=y?"rich":h,b=eB(u,h),w=(0,s.useContext)(eD.a),k=b&&!w;return(0,i.jsxs)("li",{className:eP.a.Item,"data-d-component":"list-item","data-d-connector":"solid"===u?u:void 0,"data-d-marker":"solid"===u?x:void 0,"data-d-marker-layout":p?"native":"custom","data-d-rich-marker-size":y?v:void 0,"data-d-rich-marker-lane":y&&f.reserveMarkerLane?f.maxMarkerSize:void 0,children:[p?null:(0,i.jsx)(eV,{marker:h,markerSize:v,maxMarkerSize:f.maxMarkerSize,reserveMarkerLane:f.reserveMarkerLane}),(0,i.jsxs)("div",{className:eP.a.Content,children:[(0,i.jsx)("div",{className:eP.a.Label,"data-d-disabled":o?"":void 0,"data-d-list-item-content":k?"connected":b?void 0:"",children:(0,g.a)(r??l,{markInlineText:k})}),a?(0,i.jsx)("div",{className:eP.a.Description,children:(0,g.a)(a)}):null]})]})}function eV(e){let{marker:t,markerSize:n,maxMarkerSize:r,reserveMarkerLane:a}=e;return"none"===t?null:"string"!=typeof t?(0,i.jsx)("span",{"aria-hidden":"true",inert:!0,className:eP.a.Marker,"data-d-marker":"rich","data-d-max-marker-size":a?r:void 0,children:(0,i.jsx)("span",{className:eP.a.RichMarker,"data-d-marker-size":n,children:t})}):(0,i.jsx)("span",{"aria-hidden":"true",className:eP.a.Marker,"data-d-marker":t})}function e_(e,t){return eH.find(t=>t===e)??t}function eB(e,t){return"solid"===e&&(eU(t)||"string"!=typeof t)}function eU(e){return"bullet"===e||"number"===e}var eG=n("AxvA");let eK={sm:16,md:20,lg:24};var eZ=n("wKck");function eY(e){let{advanceRate:t=0,animationEndTime:n=0,animationStartTime:r=0,currentTime:a=0,data:o,fit:l="contain",loop:d=!1,player:c}=e,u=(0,s.useRef)(null),[m,h]=(0,s.useState)();(0,s.useEffect)(()=>{let e,t=u.current;if(!t)return;let n=!0,r=t=>{n&&(console.warn("Failed to load Lottie animation",t),n=!1,e?.destroy(),h(void 0))};try{c.setIDPrefix("dil-");let i=e=c.loadAnimation({autoloadSegments:!1,autoplay:!1,container:t,loop:!1,renderer:"svg",rendererSettings:{preserveAspectRatio:"xMidYMid meet",runExpressions:!1}});i.addEventListener("DOMLoaded",()=>{n&&h(i)}),i.addEventListener("data_failed",r),i.addEventListener("error",r),i.setupAnimation(structuredClone(o))}catch(e){r(e)}return()=>{n&&(n=!1,e?.destroy())}},[o,c]);let p=m?.frameRate??0,f="number"==typeof o?.ip?o.ip:0,g="number"==typeof o?.op&&p>0?Math.max(0,(o.op-f)/p):0,v=Math.max(0,Math.min(r,g)),y=Math.max(v,Math.min(n>0?n:g,g)),x=y-v;(0,s.useEffect)(()=>{m?.setLoop(d)},[m,d]),(0,s.useEffect)(()=>{g>0&&m?.setSegment(f+(x>0?v*p:0),f+(x>0?y:g)*p)},[m,g,y,p,f,v,x]),(0,s.useEffect)(()=>{if(!m||g<=0)return;let e=x<=0?Math.max(0,Math.min(v*p,g*p-1)):m.loop?(a%x+x)%x*p:Math.max(0,Math.min(a*p,x*p-1));m.goToAndStop(e,!0)},[m,a,g,p,v,x]),(0,s.useEffect)(()=>{m&&(0===t||x*p<=1?m.pause():(m.setSpeed(t),m.play()))},[t,m,a,p,d,v,x]),(0,s.useEffect)(()=>{let e=u.current?.querySelector("svg");e&&e.setAttribute("preserveAspectRatio","fill"===l?"none":"cover"===l?"xMidYMid slice":"xMidYMid meet")},[m,l]);let b="number"==typeof o?.w&&o.w>0?o.w:void 0,w="number"==typeof o?.h&&o.h>0?o.h:void 0,k="none"===l&&null!=b&&null!=w;return(0,i.jsx)("div",{"aria-hidden":"true",ref:u,style:k?{height:w,left:"50%",position:"absolute",top:"50%",transform:"translate(-50%, -50%)",width:b}:{height:"100%",width:"100%"}})}let eJ=/^data:image\/(?:avif|jpeg|png|webp);base64,/i,eX=/^[^?#]*\.(?:apng|avif|bmp|gif|ico|jpe?g|png|svg|webp)(?:[?#].*)?$/i;function eQ(e){return/^data:application\/(?:json|[^;,]+\+json|octet-stream)(?:[;,]|$)/i.test(e)}function e0(e){return"string"==typeof e&&e.length<=2097152&&eJ.test(e)}function e1(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function e2(e){let t,{advanceRate:r,alt:o,animationEndTime:l,animationStartTime:d,aspectRatio:c,assetUrlGate:u,currentTime:h,fit:p="contain",height:f,loop:g,maxHeight:v,maxWidth:y,minHeight:x,minWidth:b,radius:w,source:k,width:j}=e,C=(0,s.useContext)(a.d),E=(0,s.useMemo)(()=>JSON.stringify(k),[k]),N="string"==typeof k&&(/^data:/i.test(k)?!eQ(k):eX.test(k)),I="string"==typeof k&&(/^data:/i.test(k)?!eQ(k)&&!e0(k):C),[S,A]=(0,s.useState)(),R=I||S?.serializedSource!==E?void 0:S;(0,s.useEffect)(()=>{if(A(void 0),I||N)return;let e=new AbortController;return(async()=>{let t=JSON.parse(E),[r,i]=await Promise.all([async function(e,t){if("string"!=typeof e)return e;let n=await fetch(e,{redirect:"error",referrerPolicy:"no-referrer",signal:t});if(!n.ok)throw Error(`Animation request failed with ${n.status}`);return n.json()}(t,e.signal),n.e(747352).then(n.t.bind(n,"nWIu",23))]);e.signal.aborted||A({...function(e,t){if(!e1(e)||!Array.isArray(e.layers))throw Error("Invalid Lottie animation data");if(null!=e.segments&&(!Array.isArray(e.segments)||e.segments.length>0))throw Error("External Lottie animation segments are not supported");if(null!=e.slots&&(!e1(e.slots)||Object.keys(e.slots).length>0))throw Error("Lottie asset slots are not supported");if(null!=e.assets&&!Array.isArray(e.assets))throw Error("Invalid Lottie assets");let n="string"!=typeof t||eQ(t)?document.baseURI:new URL(t,document.baseURI).href,r=new Set,i=e.assets?.map(e=>{if(!e1(e))throw Error("Invalid Lottie asset");if(Array.isArray(e.layers)&&null==e.p&&null==e.u&&null==e.sid)return e;if("string"!=typeof e.p||null!=e.u&&"string"!=typeof e.u||null!=e.sid)throw Error("Invalid Lottie image source");let t=e.e?e.p:`${e.u??""}${e.p}`,i=t;if(!e0(t)){let e=new URL(t,n);if("https:"!==e.protocol&&"http:"!==e.protocol)throw Error("Unsupported Lottie image URL protocol");i=e.href,r.add(i)}return{...e,e:1,p:i,u:""}});if(null!=e.fonts&&(!e1(e.fonts)||null!=e.fonts.list&&!Array.isArray(e.fonts.list)||!(e.fonts.list??[]).every(e=>e1(e)&&(null==e.fPath||""===e.fPath))))throw Error("External or invalid Lottie fonts are not supported");return{data:void 0===i?e:{...e,assets:i},imageUrls:[...r]}}(r,t),player:i.default,serializedSource:E})})().catch(t=>{e.signal.aborted||console.warn("Failed to load Lottie animation",t)}),()=>e.abort()},[I,N,E]);let L=function(e,t){let{width:n,height:r,aspectRatio:i}=e,a={width:n,height:r,aspectRatio:(0,m.b)(i)};if(void 0!==n&&void 0!==r||(void 0!==n||void 0!==r)&&void 0!==a.aspectRatio)return a;let o=t?.w,l=t?.h;return"number"!=typeof o||!Number.isFinite(o)||o<=0||"number"!=typeof l||!Number.isFinite(l)||l<=0||(void 0!==n||void 0!==r?a.aspectRatio=o/l:(a.width=o,void 0===a.aspectRatio&&(a.height=l))),a}({width:j,height:f,aspectRatio:c},"string"==typeof k?R?.data:k);return N&&"string"==typeof k&&!I?t=(0,i.jsx)("img",{alt:"","aria-hidden":"true",referrerPolicy:"no-referrer",src:k,style:{height:"100%",objectFit:p,width:"100%"}}):R&&!(C&&R.imageUrls.length>0)&&(t=(0,i.jsx)(eY,{advanceRate:r,animationEndTime:l,animationStartTime:d,currentTime:h,data:R.data,fit:p,loop:g,player:R.player}),u&&R.imageUrls.length>0&&(t=(0,i.jsx)(u,{urls:R.imageUrls,children:t}))),(0,i.jsx)("div",{"aria-label":o,"data-d-component":"lottie",role:o?"img":void 0,style:{...(0,m.f)(w),...L,maxHeight:v,maxWidth:y,minHeight:x,minWidth:b,overflow:"hidden",position:"relative"},children:t})}var e3=n("geVp"),e5=n("D5Ha"),e4=n("SEkw");function e6(e){let{align:t,children:n,side:r,sideOffset:a,width:o}=e;return(0,i.jsx)(e4.a.Content,{align:t,"data-d-component":"popover-content",minWidth:"auto",side:r,sideOffset:a,width:o,children:n})}var e8=n("zc1D"),e9="gjV40UlK",e7="qGIRDv43",te=n("Q6bS");function tt(e){let{"aria-label":t,children:n,disabled:r,id:a,hideIndicator:o,required:l,value:s}=e;return(0,i.jsx)(te.a.Item,{"aria-label":t,"data-d-component":"radio",disabled:r,id:a,hideIndicator:o,required:l,value:s,children:n})}function tn(e){let t,n=!(arguments.length>1)||void 0===arguments[1]||arguments[1],r=e.target;if(e.defaultPrevented||!(r instanceof HTMLButtonElement)||"radio"!==r.getAttribute("role")||r.disabled||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return;let i=r.closest('[data-d-component="radio-group"], [data-d-component="segmented-control"]');if(i!==e.currentTarget||i.closest('[role="toolbar"]'))return;let a=i.matches('[role="radiogroup"]')?i:i.querySelector('[role="radiogroup"], [role="group"]');if(!a)return;let o="rtl"===getComputedStyle(a).direction;switch(e.key){case"ArrowLeft":t=o?1:-1;break;case"ArrowRight":t=o?-1:1;break;case"ArrowUp":t=-1;break;case"ArrowDown":t=1;break;default:return}let l=Array.from(a.querySelectorAll('button[role="radio"]:not([disabled])')).filter(e=>e.closest('[data-d-component="radio-group"], [data-d-component="segmented-control"]')===i),s=l.indexOf(r)+t,d=l[n?(s+l.length)%l.length:s];e.preventDefault(),e.stopPropagation(),d&&(d.focus(),"true"!==d.getAttribute("aria-checked")&&d.click())}var tr=n("BJV4");let ti="'sha256-0qPQ8TbRMhIKuxrQHW6yy8DsXNh2it03McoHfWW1F7w='",ta="'sha256-imuDaJTFRRz5n5LmzTCR6fKNDVbyBMuRlkVtFY4dBK8='",to=e=>e.replaceAll("&","&amp;").replaceAll('"',"&quot;").replaceAll("<","&lt;").replaceAll(">","&gt;"),tl=e=>e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;"),ts=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=r?n:[],a=JSON.stringify(i);return`<!doctype html><html><head><meta http-equiv="Content-Security-Policy" content="${to(["default-src 'none'","base-uri 'none'","form-action 'none'","object-src 'none'","frame-src 'none'","child-src 'none'","connect-src 'none'","font-src 'none'",0===i.length?"img-src 'none'":"img-src https:","media-src 'none'","worker-src 'none'","manifest-src 'none'",`script-src ${ti}`,`script-src-elem ${ti}`,"script-src-attr 'none'",`style-src ${ta}`,`style-src-elem ${ta}`,"style-src-attr 'unsafe-inline'"].join("; "))}"><meta name="referrer" content="no-referrer"><meta name="oai-email-html-channel-token" content="${to(e)}"><style>html{color-scheme:light dark}body{margin:0;padding:0;overflow-wrap:anywhere;font:14px/1.5 ui-sans-serif,system-ui,sans-serif}a[data-oai-link-token]{cursor:pointer;text-decoration:underline;text-underline-offset:2px}</style></head><body><template id="email-html-source">${tl(t)}</template><template id="email-html-images">${tl(a)}</template><div id="email-html-content"></div><script>// @ts-check

(() => {
  "use strict";
  const maxFragmentBytes = 256 * 1024;
  const maxDomNodes = 5000;
  const maxDomDepth = 128;
  const maxImages = 256;
  const version = 1;
  const metadata = document.querySelector(
    'meta[name="oai-email-html-channel-token"]',
  );
  const channelToken =
    metadata instanceof HTMLMetaElement ? metadata.content : undefined;
  if (!channelToken) return;
  const source = document.getElementById("email-html-source");
  const content = document.getElementById("email-html-content");
  if (!(source instanceof HTMLTemplateElement) || !content) return;
  const fragmentSource = source.content.textContent || "";
  const imageSource = document.getElementById("email-html-images");
  /** @type {Map<string, string>} */
  const imagesByToken = new Map();
  if (imageSource instanceof HTMLTemplateElement) {
    try {
      const imageEntries = JSON.parse(imageSource.content.textContent || "[]");
      if (Array.isArray(imageEntries) && imageEntries.length <= maxImages) {
        imageEntries.forEach((entry, index) => {
          if (
            !entry ||
            typeof entry !== "object" ||
            Object.keys(entry).length !== 2 ||
            entry.token !== \`i$\{index}\` ||
            typeof entry.url !== "string"
          ) {
            return;
          }
          try {
            const url = new URL(entry.url);
            if (url.protocol === "https:" && !url.username && !url.password) {
              imagesByToken.set(entry.token, entry.url);
            }
          } catch {}
        });
      }
    } catch {}
  }
  source.remove();
  imageSource?.remove();
  content.replaceChildren();
  if (new TextEncoder().encode(fragmentSource).byteLength > maxFragmentBytes)
    return;
  const allowedTags = new Set([
    "a",
    "abbr",
    "acronym",
    "address",
    "article",
    "aside",
    "b",
    "bdi",
    "bdo",
    "blockquote",
    "br",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "figcaption",
    "figure",
    "footer",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "i",
    "img",
    "ins",
    "kbd",
    "li",
    "main",
    "mark",
    "nav",
    "ol",
    "p",
    "pre",
    "q",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "section",
    "small",
    "span",
    "strike",
    "strong",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "tt",
    "u",
    "ul",
    "var",
    "wbr",
  ]);
  const dropSubtreeTags = new Set([
    "frame",
    "frameset",
    "head",
    "iframe",
    "math",
    "noscript",
    "script",
    "style",
    "svg",
    "template",
    "title",
  ]);
  const allowedAttributes = new Set([
    "style",
    "lang",
    "dir",
    "data-oai-link-token",
    "data-oai-image-token",
    "data-oai-image-fallback-token",
    "alt",
    "colspan",
    "rowspan",
    "scope",
    "align",
    "valign",
    "width",
    "height",
    "cellpadding",
    "cellspacing",
    "border",
    "bgcolor",
    "role",
    "hidden",
    "open",
  ]);
  const allowedCssProperties = new Set([
    "background",
    "background-color",
    "border",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-style",
    "border-top-width",
    "border-width",
    "box-shadow",
    "box-sizing",
    "color",
    "display",
    "font",
    "font-family",
    "font-size",
    "font-style",
    "font-weight",
    "height",
    "letter-spacing",
    "line-height",
    "margin",
    "margin-bottom",
    "margin-left",
    "margin-right",
    "margin-top",
    "max-height",
    "max-width",
    "min-height",
    "min-width",
    "opacity",
    "padding",
    "padding-bottom",
    "padding-left",
    "padding-right",
    "padding-top",
    "overflow-wrap",
    "table-layout",
    "text-align",
    "text-decoration",
    "text-indent",
    "text-transform",
    "vertical-align",
    "visibility",
    "white-space",
    "width",
    "word-break",
    "word-spacing",
    "word-wrap",
  ]);
  const allowedCssFunctions = new Set(["rgb", "rgba", "hsl", "hsla"]);
  const allowedCssDimensionUnits = new Set([
    "deg",
    "grad",
    "px",
    "rad",
    "turn",
  ]);
  const allowedDisplayValues = new Set([
    "block",
    "inline",
    "inline-block",
    "table",
    "table-row",
    "table-cell",
    "table-column",
    "table-column-group",
    "table-header-group",
    "table-footer-group",
    "table-row-group",
    "flex",
    "inline-flex",
    "grid",
    "list-item",
    "none",
  ]);
  const allowedAlignValues = new Set(["left", "right", "center", "justify"]);
  const allowedValignValues = new Set(["top", "middle", "bottom", "baseline"]);
  const allowedRoleValues = new Set(["presentation", "none"]);
  const allowedVisibilityValues = new Set(["visible", "hidden", "collapse"]);
  const tableLayoutTags = new Set([
    "table",
    "thead",
    "tbody",
    "tfoot",
    "tr",
    "td",
    "th",
  ]);
  const dimensionAttributeTags = new Set([
    "table",
    "td",
    "th",
    "tr",
    "col",
    "colgroup",
    "img",
  ]);
  /** @param {string} value */
  const containsUnsafeStyleFunction = (value) => {
    const compact = [...value]
      .filter((character) => character.trim())
      .join("")
      .toLowerCase();
    for (const match of compact.matchAll(/([a-z0-9_-]+)\\(/g)) {
      const functionName = match[1];
      if (!allowedCssFunctions.has(functionName)) return true;
    }
    return false;
  };
  /** @param {string | undefined} character */
  const isCssDigit = (character) =>
    character !== undefined && character >= "0" && character <= "9";
  /** @param {string | undefined} character */
  const isCssHexDigit = (character) =>
    isCssDigit(character) ||
    (character !== undefined &&
      ((character >= "a" && character <= "f") ||
        (character >= "A" && character <= "F")));
  /** @param {string | undefined} character */
  const isCssNameStart = (character) =>
    character !== undefined &&
    ((character >= "a" && character <= "z") ||
      (character >= "A" && character <= "Z") ||
      character === "_" ||
      character.charCodeAt(0) >= 0x80);
  /** @param {string | undefined} character */
  const isCssName = (character) =>
    isCssNameStart(character) || isCssDigit(character) || character === "-";
  /** @param {string} value @param {number} index */
  const isValidCssEscape = (value, index) =>
    value[index] === "\\\\" &&
    index + 1 < value.length &&
    !["\\n", "\\r", "\\f"].includes(value[index + 1]);
  /** @param {string} value @param {number} index */
  const cssIdentifierStartsAt = (value, index) => {
    if (isCssNameStart(value[index])) return true;
    if (value[index] === "-") {
      return (
        isCssNameStart(value[index + 1]) ||
        value[index + 1] === "-" ||
        isValidCssEscape(value, index + 1)
      );
    }
    return isValidCssEscape(value, index);
  };
  /** @param {string} value @param {number} index */
  const consumeCssEscape = (value, index) => {
    let nextIndex = index + 1;
    if (!isCssHexDigit(value[nextIndex])) return nextIndex + 1;
    let hexDigits = 0;
    while (hexDigits < 6 && isCssHexDigit(value[nextIndex])) {
      nextIndex += 1;
      hexDigits += 1;
    }
    if (/\\s/.test(value[nextIndex] || "")) nextIndex += 1;
    return nextIndex;
  };
  /** @param {string} value @param {number} index */
  const consumeCssName = (value, index) => {
    let nextIndex = index;
    while (nextIndex < value.length) {
      if (isCssName(value[nextIndex])) {
        nextIndex += 1;
      } else if (isValidCssEscape(value, nextIndex)) {
        nextIndex = consumeCssEscape(value, nextIndex);
      } else {
        break;
      }
    }
    return nextIndex;
  };
  /** @param {string} value @param {number} index */
  const cssNumberStartsAt = (value, index) => {
    const first = value[index];
    const second = value[index + 1];
    const third = value[index + 2];
    return (
      isCssDigit(first) ||
      (first === "." && isCssDigit(second)) ||
      ((first === "+" || first === "-") &&
        (isCssDigit(second) || (second === "." && isCssDigit(third))))
    );
  };
  /** @param {string} value @param {number} index */
  const consumeCssNumber = (value, index) => {
    let nextIndex = index;
    if (value[nextIndex] === "+" || value[nextIndex] === "-") nextIndex += 1;
    while (isCssDigit(value[nextIndex])) nextIndex += 1;
    if (value[nextIndex] === "." && isCssDigit(value[nextIndex + 1])) {
      nextIndex += 1;
      while (isCssDigit(value[nextIndex])) nextIndex += 1;
    }
    if (
      (value[nextIndex] === "e" || value[nextIndex] === "E") &&
      (isCssDigit(value[nextIndex + 1]) ||
        ((value[nextIndex + 1] === "+" || value[nextIndex + 1] === "-") &&
          isCssDigit(value[nextIndex + 2])))
    ) {
      nextIndex += 1;
      if (value[nextIndex] === "+" || value[nextIndex] === "-") nextIndex += 1;
      while (isCssDigit(value[nextIndex])) nextIndex += 1;
    }
    return nextIndex;
  };
  /** @param {string} value */
  const sanitizeStyle = (value) => {
    const probe = document.createElement("div");
    value.split(";").forEach((declaration) => {
      const separatorIndex = declaration.indexOf(":");
      if (separatorIndex < 0) return;
      const property = declaration.slice(0, separatorIndex).trim();
      const rawPropertyValue = declaration.slice(separatorIndex + 1).trim();
      const importantMatch = rawPropertyValue.match(/!\\s*important\\s*$/i);
      const propertyValue = importantMatch
        ? rawPropertyValue.slice(0, importantMatch.index).trim()
        : rawPropertyValue;
      /** @type {[string, string][]} */
      const existingImportantDeclarations = [];
      if (!importantMatch) {
        Array.from({ length: probe.style.length }, (_, index) =>
          probe.style.item(index),
        ).forEach((existingProperty) => {
          if (
            probe.style.getPropertyPriority(existingProperty) === "important"
          ) {
            existingImportantDeclarations.push([
              existingProperty,
              probe.style.getPropertyValue(existingProperty),
            ]);
          }
        });
      }
      probe.style.setProperty(
        property,
        propertyValue,
        importantMatch ? "important" : "",
      );
      existingImportantDeclarations.forEach(
        ([importantProperty, importantValue]) =>
          probe.style.setProperty(
            importantProperty,
            importantValue,
            "important",
          ),
      );
    });
    /** @type {string[]} */
    const sanitizedNormalDeclarations = [];
    /** @type {string[]} */
    const sanitizedImportantDeclarations = [];
    Array.from({ length: probe.style.length }, (_, index) =>
      probe.style.item(index),
    ).forEach((property) => {
      const normalizedProperty = property.toLowerCase();
      const propertyValue = probe.style.getPropertyValue(property);
      const propertyPriority = probe.style.getPropertyPriority(property);
      if (!allowedCssProperties.has(normalizedProperty)) return;
      if (
        normalizedProperty === "display" &&
        !allowedDisplayValues.has(propertyValue.trim().toLowerCase())
      ) {
        return;
      }
      if (
        normalizedProperty === "opacity" &&
        !opacityValueIsSafe(propertyValue)
      )
        return;
      if (
        normalizedProperty === "visibility" &&
        !allowedVisibilityValues.has(propertyValue.trim().toLowerCase())
      ) {
        return;
      }
      if (containsUnsafeStyleFunction(propertyValue)) return;
      if (!cssNumericValuesAreSafe(propertyValue)) return;
      const serializedDeclaration = \`$\{normalizedProperty}: $\{propertyValue}$\{propertyPriority ? " !important" : ""}\`;
      const declarations = propertyPriority
        ? sanitizedImportantDeclarations
        : sanitizedNormalDeclarations;
      declarations.push(serializedDeclaration);
    });
    return sanitizedNormalDeclarations
      .concat(sanitizedImportantDeclarations)
      .join("; ");
  };
  /** @param {string} value */
  const opacityValueIsSafe = (value) => {
    const trimmed = value.trim().toLowerCase();
    const percentage = trimmed.match(/^(\\d+(?:\\.\\d+)?|\\.\\d+)%$/);
    if (percentage) {
      return Number(percentage[1]) <= 100;
    }
    if (!/^(\\d+(?:\\.\\d+)?|\\.\\d+)$/.test(trimmed)) return false;
    return Number(trimmed) <= 1;
  };
  /** @param {string} value */
  const cssNumericValuesAreSafe = (value) => {
    // Walk CSS tokens so digits in strings, hashes, and identifiers are not
    // mistaken for numeric values with layout-affecting bounds.
    let index = 0;
    while (index < value.length) {
      if (value[index] === '"' || value[index] === "'") {
        const quote = value[index];
        index += 1;
        while (index < value.length && value[index] !== quote) {
          index += value[index] === "\\\\" ? 2 : 1;
        }
        index += 1;
        continue;
      }
      if (value[index] === "#" && isCssName(value[index + 1])) {
        index = consumeCssName(value, index + 1);
        continue;
      }
      if (cssIdentifierStartsAt(value, index)) {
        index = consumeCssName(value, index);
        continue;
      }
      if (!cssNumberStartsAt(value, index)) {
        index += 1;
        continue;
      }
      const numberEnd = consumeCssNumber(value, index);
      const numeric = Number(value.slice(index, numberEnd));
      index = numberEnd;
      let unit;
      if (value[index] === "%") {
        unit = "%";
        index += 1;
      } else if (cssIdentifierStartsAt(value, index)) {
        const unitEnd = consumeCssName(value, index);
        unit = value.slice(index, unitEnd).toLowerCase();
        index = unitEnd;
      }
      if (!Number.isFinite(numeric) || numeric < 0) return false;
      if (unit === "%") {
        if (numeric > 100) return false;
      } else if (
        (unit && !allowedCssDimensionUnits.has(unit)) ||
        numeric > 2000
      ) {
        return false;
      }
    }
    return true;
  };
  /** @param {string} value @param {number} maximum */
  const integerAttributeIsSafe = (value, maximum) => {
    const trimmed = value.trim();
    if (!/^\\d+$/.test(trimmed)) return false;
    return Number(trimmed) <= maximum;
  };
  /** @param {string} value @param {number} maximum */
  const positiveIntegerAttributeIsSafe = (value, maximum) => {
    return integerAttributeIsSafe(value, maximum) && Number(value.trim()) > 0;
  };
  /** @param {string} value */
  const dimensionAttributeIsSafe = (value) => {
    const trimmed = value.trim();
    if (trimmed.endsWith("%")) {
      const percentage = trimmed.slice(0, -1);
      return /^\\d+$/.test(percentage) && Number(percentage) <= 100;
    }
    return integerAttributeIsSafe(trimmed, 2000);
  };
  /** @param {string} value */
  const colorAttributeIsSafe = (value) => {
    if (containsUnsafeStyleFunction(value)) return false;
    const probe = document.createElement("div");
    probe.style.color = value.trim();
    return probe.style.color !== "";
  };
  /** @param {Element} element @param {string} name @param {string} value */
  const attributeIsAllowed = (element, name, value) => {
    if (!allowedAttributes.has(name)) return false;
    if (name === "data-oai-link-token") return element.localName === "a";
    if (name === "data-oai-image-token" || name === "alt") {
      return element.localName === "img";
    }
    if (name === "data-oai-image-fallback-token") {
      return element.localName === "span";
    }
    if (name === "style") return sanitizeStyle(value) !== "";
    if (name === "hidden") return true;
    if (name === "open") return element.localName === "details";
    if (name === "align")
      return allowedAlignValues.has(value.trim().toLowerCase());
    if (name === "role") {
      return (
        element.localName === "table" &&
        allowedRoleValues.has(value.trim().toLowerCase())
      );
    }
    if (name === "valign") {
      return (
        tableLayoutTags.has(element.localName) &&
        allowedValignValues.has(value.trim().toLowerCase())
      );
    }
    if (name === "bgcolor") {
      return (
        tableLayoutTags.has(element.localName) && colorAttributeIsSafe(value)
      );
    }
    if (name === "width" || name === "height") {
      return (
        dimensionAttributeTags.has(element.localName) &&
        dimensionAttributeIsSafe(value)
      );
    }
    if (name === "cellpadding" || name === "cellspacing" || name === "border") {
      return (
        element.localName === "table" && integerAttributeIsSafe(value, 1000)
      );
    }
    if (name === "colspan" || name === "rowspan") {
      return (
        (element.localName === "td" || element.localName === "th") &&
        positiveIntegerAttributeIsSafe(value, 1000)
      );
    }
    if (name === "scope") {
      return (
        (element.localName === "td" || element.localName === "th") &&
        ["col", "colgroup", "row", "rowgroup"].includes(value)
      );
    }
    return true;
  };
  /** @param {string} name @param {string} value */
  const canonicalAttributeValue = (name, value) => {
    if (name === "hidden") {
      return value.trim().toLowerCase() === "until-found" ? "until-found" : "";
    }
    if (name === "open") return "";
    if (name === "style") return sanitizeStyle(value);
    return value;
  };
  /** @param {HTMLImageElement} image */
  const replaceImageWithFallback = (image) => {
    const fallback = document.createElement("span");
    const hidden = image.getAttribute("hidden");
    const style = image.getAttribute("style");
    if (hidden != null) fallback.setAttribute("hidden", hidden);
    if (style != null) fallback.setAttribute("style", style);
    fallback.textContent = image.getAttribute("alt") || "";
    image.replaceWith(fallback);
  };
  /** @param {Element} element */
  const unwrapElement = (element) => {
    const parent = element.parentNode;
    if (!parent) {
      element.remove();
      return;
    }
    while (element.firstChild) {
      parent.insertBefore(element.firstChild, element);
    }
    element.remove();
  };
  /** @param {DocumentFragment} root */
  const enforceDomLimits = (root) => {
    let nodeCount = 0;
    /** @type {{ node: Node; depth: number }[]} */
    const stack = [{ node: root, depth: 0 }];
    while (stack.length > 0) {
      const current = stack.pop();
      if (!current) break;
      nodeCount += 1;
      if (nodeCount > maxDomNodes || current.depth > maxDomDepth) return false;
      for (
        let index = current.node.childNodes.length - 1;
        index >= 0;
        index -= 1
      ) {
        const child = current.node.childNodes.item(index);
        if (child) stack.push({ node: child, depth: current.depth + 1 });
      }
    }
    return true;
  };
  /** @param {string} fragment */
  const sanitizeFragment = (fragment) => {
    const template = document.createElement("template");
    template.innerHTML = fragment;
    if (!enforceDomLimits(template.content)) return null;
    template.content.querySelectorAll("*").forEach((element) => {
      if (dropSubtreeTags.has(element.localName)) {
        element.remove();
        return;
      }
      if (!allowedTags.has(element.localName)) {
        unwrapElement(element);
        return;
      }
      [...element.attributes].forEach(({ name, value }) => {
        const normalizedName = name.toLowerCase();
        if (!attributeIsAllowed(element, normalizedName, value)) {
          element.removeAttribute(name);
          return;
        }
        element.setAttribute(
          name,
          canonicalAttributeValue(normalizedName, value),
        );
      });
    });
    return template.content;
  };
  let sanitizedFragment;
  try {
    sanitizedFragment = sanitizeFragment(fragmentSource);
  } catch {
    return;
  }
  if (!sanitizedFragment) return;
  content.replaceChildren(sanitizedFragment);
  content.querySelectorAll("img").forEach((image) => {
    const token = image.getAttribute("data-oai-image-token");
    const fallback = image.nextSibling;
    if (
      !token ||
      !(fallback instanceof HTMLSpanElement) ||
      fallback.getAttribute("data-oai-image-fallback-token") !== token
    ) {
      replaceImageWithFallback(image);
      return;
    }
    const url = imagesByToken.get(token);
    if (!url) {
      image.remove();
      return;
    }
    image.setAttribute("referrerpolicy", "no-referrer");
    image.setAttribute("src", url);
    fallback.remove();
  });
  /** @type {string | null} */
  let suppressedKeyboardToken = null;
  content.querySelectorAll("a[data-oai-link-token]").forEach((link) => {
    link.setAttribute("role", "link");
    link.setAttribute("tabindex", "0");
  });
  /** @param {Event} event */
  const getLink = (event) =>
    event.target instanceof Element
      ? event.target.closest("a[data-oai-link-token]")
      : null;
  /** @param {Event} event @param {Element | null} link */
  const activateLink = (event, link) => {
    const token = link?.getAttribute("data-oai-link-token");
    if (!token) return;
    event.preventDefault();
    window.parent.postMessage(
      { type: "link.activate", version, channelToken, token },
      "*",
    );
  };
  document.addEventListener("click", (event) => {
    const link = getLink(event);
    const token = link?.getAttribute("data-oai-link-token");
    if (token && token === suppressedKeyboardToken && event.detail === 0) {
      suppressedKeyboardToken = null;
      event.preventDefault();
      return;
    }
    suppressedKeyboardToken = null;
    activateLink(event, link);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || event.repeat) return;
    const link = getLink(event);
    suppressedKeyboardToken = link?.getAttribute("data-oai-link-token") ?? null;
    queueMicrotask(() => {
      suppressedKeyboardToken = null;
    });
    activateLink(event, link);
  });
})();
<\/script></body></html>`},td=/^https?:\/\/([^/?#]+)/i,tc=/\s/;function tu(e){return null!=e&&"object"==typeof e}function tm(e,t){return Object.keys(e).length===t.length&&t.every(t=>Object.prototype.hasOwnProperty.call(e,t))}function th(e,t){if("string"!=typeof e||!tg(e,2048))return!1;let n=td.exec(e);if(function(e){if(tc.test(e))return!0;for(let t=0;t<e.length;t+=1){let n=e.charCodeAt(t);if(n<=31||n>=127&&n<=159)return!0}return!1}(e)||null==n||n[1].includes("@"))return!1;try{let n=new URL(e);return t.has(n.protocol)&&0===n.username.length&&0===n.password.length}catch{return!1}}let tp=new Set(["http:","https:"]),tf=new Set(["https:"]);function tg(e,t){return e.length<=t&&function(e){if("u">typeof TextEncoder)return new TextEncoder().encode(e).byteLength;let t=0;for(let n=0;n<e.length;n+=1){let r=e.charCodeAt(n);if(r<128)t+=1;else if(r<2048)t+=2;else if(r>=55296&&r<=56319){let r=e.charCodeAt(n+1);r>=56320&&r<=57343?(t+=4,n+=1):t+=3}else t+=3}return t}(e)<=t}function tv(e){let{preview:t,labels:n,...r}=e,a=(0,s.useMemo)(()=>(function(e){try{if(!tu(e)||!tm(e,["fragment","links"])&&!tm(e,["fragment","links","images"])||"string"!=typeof e.fragment||!tg(e.fragment,262144)||0===e.fragment.trim().length||!Array.isArray(e.links)||e.links.length>256||Object.hasOwn(e,"images")&&(!Array.isArray(e.images)||e.images.length>256))return;let t=[];for(let[n,r]of e.links.entries()){if(!tu(r)||!tm(r,["token","url"])||r.token!==`l${n}`||!th(r.url,tp))return;t.push({token:r.token,url:r.url})}if(!function(e,t){if("u"<typeof document)return!1;try{let n=document.createElement("template");n.innerHTML=e;let r=n.content.querySelectorAll("[data-oai-link-token]");return r.length===t.length&&t.every((e,t)=>{let n=r.item(t);return n?.localName==="a"&&n.getAttribute("data-oai-link-token")===e.token})}catch{return!1}}(e.fragment,t))return;let n=[];for(let[t,r]of(Array.isArray(e.images)?e.images:[]).entries()){if(!tu(r)||!tm(r,["token","url"])||r.token!==`i${t}`||!th(r.url,tf))return;n.push({token:r.token,url:r.url})}let r={fragment:e.fragment,links:t,images:n};return!function(e){try{return tg(JSON.stringify(e),786432)}catch{return!1}}(e)?void 0:r}catch{return}})(t),[t]);return a?(0,i.jsx)(ty,{viewProps:{...r,labels:n,preview:a}}):(0,i.jsx)(ee.a,{color:"secondary",children:void 0===t?n.loading:n.unavailable})}function ty(e){let{viewProps:t}=e,{preview:n,labels:r,onOpenLink:a,contentScale:o=1,title:l="HTML preview",height:d=360,width:c="100%",...u}=t,m=(0,s.useRef)(null),[h,p]=(0,s.useState)(!1),f=Number.isFinite(o)&&o>0?o:1;return(0,s.useLayoutEffect)(()=>{let e=m.current;if(!e)return;let t=crypto.randomUUID(),r=new AbortController;if(a&&n.links.length>0){let i=new Map(n.links.map(e=>{let{token:t,url:n}=e;return[t,n]}));window.addEventListener("message",n=>{if(n.source!==e.contentWindow||"null"!==n.origin)return;let o=n.data;if(null==o||"object"!=typeof o||"link.activate"!==o.type||1!==o.version||o.channelToken!==t||"string"!=typeof o.token)return;let l=i.get(o.token);null!=l&&a(l,r.signal)},{signal:r.signal})}return e.srcdoc=ts(t,n.fragment,n.images,h),()=>{r.abort(),e.removeAttribute("srcdoc")}},[h,a,n]),(0,i.jsxs)(eo.a,{gap:2,width:c,children:[n.images.length>0&&!h&&(0,i.jsx)(tr.a,{justify:"center",children:(0,i.jsx)(E,{size:"sm",color:"secondary",variant:"outline",onClick:()=>p(!0),children:r.showImages})}),(0,i.jsx)(L.a,{as:"div",className:ep,component:"read-only-html-view",height:d,width:"100%",layout:u,children:(0,i.jsx)("iframe",{ref:m,title:l,className:ef,sandbox:"allow-scripts",referrerPolicy:"no-referrer",style:{width:`${100/f}%`,maxWidth:"none",height:`${100/f}%`,transform:`scale(${f})`,transformOrigin:"top left"}})})]})}var tx=n("RdWu"),tb="vcwMsmGx";let tw={};function tk(e){let{actionOverlay:t,alt:n,aspectRatio:r,background:a,bitmapBlendMode:o,children:l,containOutsideAspectRatio:d,contentCropFit:c,fallback:u,fit:m="cover",frame:h,height:p,hideOnFailure:f,hoverZoom:g,maxHeight:v,maxWidth:y,minHeight:x,minWidth:b,onLoad:w,onError:k,onImageLoad:j,onImageError:C,onImageFallback:E,imageFrameRef:N,imageFrameComponent:I,imageContentComponent:S,loadedOverlay:A,position:R,radius:L,searchImage:M,sourcePending:T=!1,sourceIdentity:F,secondaryAction:z,width:P}=e,D=null!=M&&"object"==typeof M,O=D?M:tw,$=O.content_url??"",H=O.thumbnail_url??"",W=$||H,q=$&&H&&$!==H?H:"",[V,_]=(0,s.useState)(),B=W===V&&q?q:W,U=(0,s.useRef)(null),G=(0,s.useRef)(!0),K=(0,s.useRef)(null),Z=(0,s.useRef)(null),Y=F??JSON.stringify([W,q]);(0,s.useLayoutEffect)(()=>(G.current=!0,()=>{G.current=!1}),[]),(0,s.useLayoutEffect)(()=>{Z.current!==Y&&(Z.current=Y,K.current=null)},[Y]);let J=(0,tx.a)(e=>{G.current&&null==K.current&&(K.current=e,"loaded"===e?w?.():k?.())});(0,s.useEffect)(()=>{!D||T||W&&(V!==W||q)||J("error")},[V,q,D,W,J,Y,T]),(0,s.useEffect)(()=>{_(void 0)},[W]);let X=(0,s.useMemo)(()=>(function(e){if("number"==typeof e)return Number.isFinite(e)&&e>0?{height:1,width:e}:void 0;if("string"!=typeof e)return;let t=e.trim().match(/^([0-9]+(?:\.[0-9]+)?)\s*[:/]\s*([0-9]+(?:\.[0-9]+)?)$/);if(!t)return;let n=Number(t[1]),r=Number(t[2]);return tE(n)&&tE(r)?{height:r,width:n}:void 0})(r),[r]),[Q,ee]=(0,s.useState)(),[et,en]=(0,s.useState)(null);(0,s.useEffect)(()=>{let e=U.current;e?.getAttribute("src")===B&&e.complete&&e.naturalWidth>0&&J("loaded")},[B,J,Y]),(0,s.useLayoutEffect)(()=>{let e=U.current;if("cover"!==m||X||!e||e.getAttribute("src")!==B)return void ee(void 0);let t=()=>{var t;let n,r=(t=e,(n=t?.getBoundingClientRect())&&tE(n.width)&&tE(n.height)?{height:n.height,width:n.width}:void 0);ee(e=>e?.width===r?.width&&e?.height===r?.height?e:r)};if(t(),"u"<typeof ResizeObserver)return;let n=new ResizeObserver(t);return n.observe(e),()=>{n.disconnect()}},[X,m,et,B]);let er=(0,s.useCallback)(e=>{if(G.current&&e.currentTarget.getAttribute("src")===B){if(B===W&&(_(W),q))return void E?.();B===W&&T||J("error"),C?.(e)}},[q,E,C,W,J,T,B]),ei=O.thumbnail_size??O.content_size,ea=R??("cover"===m?function(e,t,n){if(!e||!t||!n||!tE(t.width)||!tE(t.height)||!tE(n.width)||!tE(n.height)||!Number.isFinite(e.center_x_percent)||!Number.isFinite(e.center_y_percent))return;let r=t.width/t.height,i=n.width/n.height;if(1e-6>Math.abs(r-i))return;let a=tN(e.center_x_percent),o=tN(e.center_y_percent),l=50,s=50;if(r>i)l=tI((a*r-i/2)/(r-i)*100,0,100);else{let e=1/r,t=1/i;s=tI((o*e-t/2)/(e-t)*100,0,100)}return`${l.toFixed(1)}% ${s.toFixed(1)}%`}(O.thumbnail_crop_info,ei,X??Q):void 0);return(0,i.jsx)(eR,{actionOverlay:"function"==typeof t?t(B):t,imageFrameComponent:I,imageContentComponent:S,alt:n??O.title??"",aspectRatio:r,background:a,bitmapBlendMode:o,containOutsideAspectRatio:d,contentCropFit:c,contentCrop:(B===$?O.content_presentation:O.thumbnail_presentation)??void 0,fallback:u,fit:m,frame:h,height:p,hideOnFailure:f,hoverZoom:g,maxHeight:v,maxWidth:y,minHeight:x,minWidth:b,imageFrameRef:N,loadedOverlay:A,imageRef:U,onImageError:er,onImageLoad:e=>{G.current&&e.currentTarget.getAttribute("src")===B&&(en(e.currentTarget),J("loaded"),j?.(e))},position:ea,radius:L,src:B,secondaryAction:z,width:P,children:l})}function tj(e){let{sourceIdentity:t,children:n,imageFrameRef:r,...o}=e,l=(0,s.useContext)(a.d),d=(0,s.useContext)(eN),c=o.searchImage,u=t??JSON.stringify([c?.content_url,c?.thumbnail_url]),h=o.hoverZoom&&o.imageFrameComponent&&o.imageContentComponent,p=h?o.imageFrameComponent:"div";return l?null==n?null:(0,i.jsx)(v.a,{height:o.height,width:o.width,minHeight:o.minHeight,minWidth:o.minWidth,maxHeight:o.maxHeight,maxWidth:o.maxWidth,aspectRatio:o.aspectRatio,radius:o.radius,background:o.background,children:n}):(0,i.jsxs)(p,{ref:r,className:`${eb} ${ek} ezNDuWad${o.actionOverlay?" group/search-image":""}`,"data-d-component":"image","data-d-frame":o.frame?"":void 0,"data-d-hover-zoom":o.hoverZoom&&!h?"":void 0,"data-d-host-hover":h?"":void 0,style:{...(0,m.f)(o.radius),aspectRatio:(0,m.b)(o.aspectRatio),width:o.width,height:o.height,minWidth:o.minWidth,minHeight:o.minHeight,maxWidth:o.maxWidth,maxHeight:o.maxHeight},children:[(0,i.jsx)("div",{className:"JQ1C0R0P",children:(0,i.jsx)(eC,{height:"100%",width:"100%"})}),(0,i.jsx)(tC,{actionOverlay:d?void 0:o.actionOverlay,alt:o.alt,aspectRatio:o.aspectRatio,background:o.background,bitmapBlendMode:o.bitmapBlendMode,containOutsideAspectRatio:o.containOutsideAspectRatio,contentCropFit:o.contentCropFit,fallback:o.fallback,fit:o.fit,frame:o.frame,height:o.height,hideOnFailure:o.hideOnFailure,maxHeight:o.maxHeight,maxWidth:o.maxWidth,minHeight:o.minHeight,minWidth:o.minWidth,onLoad:o.onLoad,onError:o.onError,onImageLoad:o.onImageLoad,onImageError:o.onImageError,onImageFallback:o.onImageFallback,loadedOverlay:o.loadedOverlay,imageContentComponent:h?o.imageContentComponent:void 0,position:o.position,radius:o.radius,searchImage:o.searchImage,secondaryAction:o.secondaryAction,width:o.width,sourcePending:o.sourcePending,children:n},u)]})}function tC(e){let{actionOverlay:t,children:n,searchImage:r,loadedOverlay:a,imageContentComponent:o,fallback:l,sourcePending:d,onLoad:c,onError:u,onImageLoad:m,onImageError:h,onImageFallback:p,...f}=e,g=null!=r&&"object"==typeof r,v=g?r:void 0,y=v?.thumbnail_url||"",x=v?.content_url||"",b=y||x,[w,k]=(0,s.useState)(),[j,C]=(0,s.useState)(),E=w?.src===b?w.state:"pending",N=j?.src===x?j.state:"pending",I=(0,s.useRef)(!0),S=(0,s.useRef)(null),A=(0,s.useRef)(!1),R=(0,s.useRef)(void 0),L=!!(y&&x&&x!==y),M=g&&(!b||"failed"===E)&&!d&&(!L||"failed"===N);(0,s.useLayoutEffect)(()=>(I.current=!0,()=>{I.current=!1}),[]);let T=(0,tx.a)(e=>{I.current&&null==S.current&&(S.current=e,"loaded"===e?c?.():u?.())});function F(e){A.current||(A.current=!0,m?.(e))}(0,s.useEffect)(()=>{M&&(T("error"),R.current&&!A.current&&"loaded"!==S.current&&(A.current=!0,h?.(R.current)))},[M,h,T]);let z={...f,frame:!1,height:"100%",width:"100%",minHeight:0,minWidth:0,maxHeight:void 0,maxWidth:void 0,radius:"none",hideOnFailure:!M||null!=l||f.hideOnFailure};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o??"div",{className:"MXF1L4J2",children:[(0,i.jsx)("div",{className:"vBnEbDN5","aria-hidden":"loaded"===N||M||void 0,"data-d-progressive-settled":"loaded"===E||"loaded"===N||M?"":void 0,style:{visibility:"loaded"===N?"hidden":void 0},children:(0,i.jsx)(tk,{alt:z.alt,aspectRatio:z.aspectRatio,background:z.background,bitmapBlendMode:z.bitmapBlendMode,containOutsideAspectRatio:z.containOutsideAspectRatio,contentCropFit:z.contentCropFit,fit:z.fit,frame:z.frame,height:z.height,hideOnFailure:z.hideOnFailure,maxHeight:z.maxHeight,maxWidth:z.maxWidth,minHeight:z.minHeight,minWidth:z.minWidth,position:z.position,radius:z.radius,secondaryAction:z.secondaryAction,width:z.width,searchImage:{...v,content_url:b,content_presentation:y?v?.thumbnail_presentation:v?.content_presentation,thumbnail_url:""},onLoad:()=>{I.current&&(k({src:b,state:"loaded"}),T("loaded"))},onError:()=>{I.current&&k({src:b,state:"failed"})},onImageLoad:e=>{I.current&&F(e)},onImageError:e=>{I.current&&(R.current={...e,currentTarget:e.currentTarget},(L||d)&&p?.())}},b)}),L&&"pending"!==E?(0,i.jsx)("div",{className:tb,"data-d-progressive-full":"",style:{opacity:+("loaded"===N)},"aria-hidden":"loaded"!==N||void 0,children:(0,i.jsx)(tk,{alt:z.alt,aspectRatio:z.aspectRatio,background:z.background,bitmapBlendMode:z.bitmapBlendMode,containOutsideAspectRatio:z.containOutsideAspectRatio,contentCropFit:z.contentCropFit,fit:z.fit,frame:z.frame,height:z.height,hideOnFailure:z.hideOnFailure,maxHeight:z.maxHeight,maxWidth:z.maxWidth,minHeight:z.minHeight,minWidth:z.minWidth,position:z.position,radius:z.radius,secondaryAction:z.secondaryAction,width:z.width,searchImage:{...v,content_url:x,thumbnail_url:""},onLoad:()=>{I.current&&(C({src:x,state:"loaded"}),T("loaded"))},onError:()=>{I.current&&C({src:x,state:"failed"})},onImageLoad:e=>{I.current&&F(e)},onImageError:e=>{I.current&&(R.current={...e,currentTarget:e.currentTarget})}},x)}):null]}),M&&null!=l?(0,i.jsx)("div",{className:tb,children:l}):null,null!=a&&("loaded"===E||"loaded"===N)?a:null,null==n?null:(0,i.jsx)("div",{className:ej,children:n}),null!=t&&("loaded"===N||"loaded"===E)?(0,i.jsx)(eL,{children:"function"==typeof t?t("loaded"===N?x:b):t}):null]})}function tE(e){return Number.isFinite(e)&&e>0}function tN(e){return tI(e>1?e/100:e,0,1)}function tI(e,t,n){return Math.min(Math.max(e,t),n)}var tS=n("fZ05"),tA=n("O9zu"),tR=n("gWf7"),tL=n("XvPX");let tM="http://www.w3.org/2000/svg",tT=new Set(["animate","animateMotion","animateTransform","set"]),tF={alignmentBaseline:"alignment-baseline",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",dominantBaseline:"dominant-baseline",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontStyle:"font-style",fontWeight:"font-weight",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",pointerEvents:"pointer-events",stopColor:"stop-color",stopOpacity:"stop-opacity",strokeDasharray:"stroke-dasharray",strokeDashoffset:"stroke-dashoffset",strokeLinecap:"stroke-linecap",strokeLinejoin:"stroke-linejoin",strokeMiterlimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",vectorEffect:"vector-effect",wordSpacing:"word-spacing",xlinkHref:"xlink:href"};function tz(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,a=document.implementation.createHTMLDocument("").createElementNS(tM,"svg"),o=e.props;return a.setAttribute("font-family",n?.fontFamily||"sans-serif"),a.setAttribute("font-weight",n?.fontWeight||"normal"),t$(a,o,t,n?.color),function e(t,n,r,i){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",o=0;tD(n,n=>{let l,d,c,u,m=o++;if("string"==typeof n||"number"==typeof n)return void t.append(t.ownerDocument.createTextNode(String(n)));if(tO(n))l=n.type,d=n.props,c=n.children,u=n.key;else{if(!(0,s.isValidElement)(n)||"string"!=typeof n.type)return;l=n.type,c=(d=n.props).children,u=n.key}let h=t.ownerDocument.createElementNS(tM,l),p=`${a}/${JSON.stringify([l,null!=u?["key",u]:null!=d.id?["id",d.id]:m])}`;t$(h,d,r),e(h,c,r,i?.visitChildren(l)?i:void 0,p),i?.visit(h,p),t.append(h)})}(a,o.children,t,r),r?.finish(a),i?.finish(a),new XMLSerializer().serializeToString(a)}function tP(e){let t="";return tD(e,e=>{"string"==typeof e||"number"==typeof e?t+=String(e):tO(e)?t+=tP(e.children):(0,s.isValidElement)(e)&&(t+=tP(e.props.children))}),t}function tD(e,t){if(Array.isArray(e)){for(let n of e)tD(n,t);return}(0,s.isValidElement)(e)&&e.type===s.Fragment?tD(e.props.children,t):null!=e&&"boolean"!=typeof e&&t(e)}function tO(e){return!(null==e||"object"!=typeof e||Array.isArray(e))&&"string"==typeof e.type&&null!=e.props&&"object"==typeof e.props&&!Array.isArray(e.props)&&Array.isArray(e.children)}function t$(e,t,n,r){for(let[i,a]of Object.entries(t)){if("children"===i||"dangerouslySetInnerHTML"===i||"ref"===i||i.startsWith("on")||null==a||!1===a)continue;if("style"===i&&"object"==typeof a){let t=Object.entries(a).filter(e=>{let[,t]=e;return"number"==typeof t||"string"==typeof t}).map(e=>{let[t,n]=e,i=t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),a="color"===t&&r?r:String(n);return`${i}:${a}`});t.length&&e.setAttribute("style",t.join(";"));continue}if("boolean"!=typeof a&&"number"!=typeof a&&"string"!=typeof a)continue;let t=tF[i]??i;if("xlink:href"===t){e.setAttributeNS("http://www.w3.org/1999/xlink",t,String(a));continue}if("begin"===i&&tT.has(e.localName)){e.setAttribute(t,function(e,t){return String(e).split(";").map(e=>{let n=e.trim().match(/^([+-]?(?:\d+(?:\.\d*)?|\.\d+))(ms|s)?$/);if(!n)return e;let r=Number(n[1])/("ms"===n[2]?1e3:1);return`${r-t}s`}).join(";")}(a,n));continue}e.setAttribute(t,String(a))}n>0&&tT.has(e.localName)&&!e.hasAttribute("begin")&&e.setAttribute("begin",`${-n}s`)}let tH=new Set(["circle","ellipse","foreignObject","image","line","path","polygon","polyline","rect","text","use"]),tW=new Set(["clipPath","defs","desc","filter","linearGradient","marker","mask","pattern","radialGradient","script","style","symbol","title"]);class tq{previous;animateNewElements;now;mode;starts=new Map;newKeys=new Set;hasReveals=!1;constructor(e,t,n,r="active"){this.previous=e,this.animateNewElements=t,this.now=n,this.mode=r}visit(e,t){if(!tH.has(e.localName)||"text"===e.localName&&!e.textContent?.trim()||"path"===e.localName&&!e.getAttribute("d")?.trim())return;let n=this.previous.has(t),r="disabled"===this.mode?null:n?this.previous.get(t):this.animateNewElements?this.now:null;this.starts.set(t,r),n||null===r||this.newKeys.add(t),null===r||this.now-r>=250||(this.hasReveals=!0,e.setAttribute("data-d-svg-reveal",""),e.style.setProperty("--d-svg-reveal-delay",`${-Math.max(0,this.now-r)}ms`))}visitChildren(e){return!tW.has(e)&&!tH.has(e)}finish(e){if(!this.hasReveals||"active"!==this.mode)return;let t=e.ownerDocument.createElementNS(e.namespaceURI,"style");t.textContent=`
@keyframes d-svg-enter { from { opacity: 0; } }
:where([data-d-svg-reveal]) {
  animation: d-svg-enter 250ms ease-out var(--d-svg-reveal-delay) backwards;
}`,e.prepend(t)}commit(e){for(let t of this.newKeys)this.starts.set(t,e);return this.starts}}let tV=/^translate\(\s*([+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?)\s*(?:[,\s]\s*([+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?))?\s*\)$/i;class t_{previous;active;positions=new Map;hasChanges=!1;constructor(e,t){this.previous=e,this.active=t}finish(e){let t=e.querySelectorAll("g[id][transform]"),n=new Set,r=new Set;for(let e of t)n.has(e.id)&&r.add(e.id),n.add(e.id);for(let n of t){if(r.has(n.id))continue;let t=tV.exec(n.getAttribute("transform")??"");if(!t||n.querySelector("animateTransform"))continue;let i=Number(t[1]),a=Number(t[2]??0);if(!Number.isFinite(i)||!Number.isFinite(a))continue;let o=`${i} ${a}`;this.positions.set(n.id,o);let l=this.previous.get(n.id);if(null==l||l===o||(this.hasChanges=!0,!this.active))continue;let s=e.ownerDocument.createElementNS(e.namespaceURI,"animateTransform");s.setAttribute("attributeName","transform"),s.setAttribute("type","translate"),s.setAttribute("from",l),s.setAttribute("to",o),s.setAttribute("dur","0.22s"),s.setAttribute("calcMode","spline"),s.setAttribute("keyTimes","0;1"),s.setAttribute("keySplines","0.42 0 0.58 1"),s.setAttribute("fill","freeze"),n.append(s)}}}function tB(e){let{svg:t}=e,n=(0,s.useContext)(a.i),r=(0,s.useContext)(a.l),o=(0,s.useRef)(new Map),l=(0,s.useSyncExternalStore)(tY,tJ,()=>!0),[d]=(0,s.useState)(n),c=(0,s.useRef)(new Map),u=(0,s.useRef)(null),m=(0,s.useRef)(null),h=(0,s.useRef)(!0),p=(0,s.useRef)(null),f=(0,s.useRef)(null),[g,v]=(0,s.useState)(()=>tU(t));(0,s.useEffect)(()=>(h.current=!0,()=>{h.current=!1,f.current=null,p.current=null}),[]);let y=(0,s.useCallback)(function e(){if(!h.current||p.current||!f.current)return;let{svg:t,animateNewElements:n}=f.current;f.current=null;let i=null===u.current?0:(performance.now()-u.current)/1e3,a=m.current?getComputedStyle(m.current):void 0,l=new tq(c.current,n,performance.now(),tJ()?"disabled":"preload"),s=r?new t_(o.current,!1):void 0,d=tK(tz(t,i,a,l,s)),g=new Image;p.current=g,g.decoding="async",g.src=d,("function"==typeof g.decode?g.decode():Promise.resolve()).then(()=>{if(!h.current||p.current!==g)return;p.current=null;let r=performance.now(),i=d;(l.hasReveals||s?.hasChanges&&!tJ())&&(l=new tq(c.current,n,r,tJ()?"disabled":"active"),i=tK(tz(t,null===u.current?0:(r-u.current)/1e3,a,l,s?new t_(o.current,!tJ()):void 0))),s?o.current=s.positions:o.current.clear(),u.current??=r,c.current=l.commit(r),v(tU(t,i)),e()},()=>{p.current===g&&(p.current=null,e())})},[r]);(0,s.useEffect)(()=>{f.current={svg:t,animateNewElements:!l&&(n||f.current?.animateNewElements===!0||d&&null===u.current)},y()},[n,y,l,t,d]);let x=t.props,{source:b,aspectRatio:w,width:k,height:j,alt:C}=g,E=null==k||"auto"===k,N=null==j||"auto"===j;return(0,i.jsx)("img",{ref:m,alt:C,"data-d-component":"svg",decoding:"async",src:b,style:{aspectRatio:w?`auto ${w}`:void 0,color:x.style?.color,height:j,width:w&&E&&N?"100%":k}})}function tU(e,t){let{viewBox:n,width:r,height:i}=e.props;return{source:t,width:r,height:i,aspectRatio:function(e){if("string"!=typeof e)return;let t=e.replace(/^[\t\n\r ]+|[\t\n\r ]+$/g,"").split(/[\t\n\r ]*,[\t\n\r ]*|[\t\n\r ]+/);if(4!==t.length||!t.every(e=>tG.test(e)))return;let n=t.map(Number),[,,r,i]=n;if(n.every(Number.isFinite)&&!(r<=0)&&!(i<=0))return`${r} / ${i}`}(n),alt:function(e){let t=e.props;if(!0===t["aria-hidden"]||"true"===t["aria-hidden"]||"presentation"===t.role||"none"===t.role)return"";if("string"==typeof t["aria-label"])return t["aria-label"];let n="";return tD(t.children,e=>{!n&&(tO(e)&&"title"===e.type?n=tP(e.children):(0,s.isValidElement)(e)&&"title"===e.type&&(n=tP(e.props.children)))}),n}(e)}}let tG=/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/;function tK(e){return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`}let tZ="(prefers-reduced-motion: reduce), (forced-colors: active)";function tY(e){let t=window.matchMedia?.(tZ);return t?.addEventListener("change",e),()=>t?.removeEventListener("change",e)}function tJ(){return window.matchMedia?.(tZ).matches===!0}function tX(e){let{children:t,color:n="prose",fill:r="currentColor",height:o,preserveAspectRatio:l,size:d,stroke:c,strokeLinecap:u,strokeLinejoin:h,strokeWidth:p,viewBox:f,width:g}=e,v=(0,s.useContext)(a.k),y=(0,m.i)((0,m.j)(v,n));return(0,i.jsx)(tB,{svg:(0,i.jsx)("svg",{"data-d-component":"svg",fill:r,height:o??d,preserveAspectRatio:l,stroke:c,strokeLinecap:u,strokeLinejoin:h,strokeWidth:p,style:{color:y},viewBox:f,width:g??d,xmlns:"http://www.w3.org/2000/svg",children:t})})}tX.childHandling="opaque";var tQ=n("YNuJ");let t0=(0,s.createContext)(!1),t1=/\S{25,}/u;function t2(e){let{children:t,header:n=!1,rowDivider:r}=e,o=(0,s.useContext)(a.k);return(0,i.jsx)(n?"thead":"tbody",{"data-d-component":"table-section","data-d-row-divider":null==r?void 0:"",style:null==r?void 0:(0,Z.g)({"table-section-row-divider":(0,m.d)(o,r).border}),children:t})}function t3(e){let{align:t,children:n,colSpan:r,header:a=!1,padding:o,rowSpan:l,vAlign:d="start",width:c}=e,u=(0,s.useContext)(t0),h=a||u,p=!h&&t5(n);return(0,i.jsx)(h?"th":"td",{"data-d-align":t,"data-d-break-long-token":p?"":void 0,"data-d-component":"table-cell","data-d-has-width":null!=c?"":void 0,"data-d-valign":d,colSpan:r,rowSpan:l,scope:h?"col":void 0,style:{...(0,m.g)(o),width:c},children:n})}function t5(e){for(let t of s.Children.toArray(e))if(("string"==typeof t||"number"==typeof t)&&t1.test(String(t))||(0,s.isValidElement)(t)&&t5(t.props.children))return!0;return!1}function t4(e){return(0,a.v)(e)?.type===t2}var t6=n("kBis"),t8=n("vZCo"),t9=n("YWbN");let t7="https://www.youtube.com/iframe_api";function ne(e){return"object"==typeof e&&null!==e&&"Player"in e&&"function"==typeof e.Player}function nt(e){let{hoverToPlay:t,onHover:n,onPlayerError:a,onThumbnailError:o,scriptNonce:l,showDurationBadge:d,showThumbnail:c,title:u,videoId:m}=e,[p,f]=(0,s.useState)(()=>"u">typeof window&&(!window.matchMedia("(hover: hover) and (pointer: fine)").matches||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1));(0,s.useEffect)(()=>{let e=window.matchMedia("(hover: hover) and (pointer: fine)"),t=()=>{f(!e.matches||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)};return t(),e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]);let g=t&&!p,v=c||t,y=(0,s.useRef)(null),x=(0,s.useRef)(null),b=(0,s.useRef)(!1),[w,k]=(0,s.useState)(!1),[j,C]=(0,s.useState)(!0),[E,N]=(0,s.useState)(null),[I,S]=(0,s.useState)("maxresdefault"),[A,R]=(0,s.useState)(!1),L=(0,tx.a)(e=>a?.(e)),M=(0,tx.a)(e=>{e.title=u,v&&(e.tabIndex=-1),e.referrerPolicy="strict-origin-when-cross-origin"}),T=(0,tx.a)(()=>{b.current=!1,x.current?.pauseVideo(),k(!1)});(0,s.useEffect)(()=>{let e,t,n,i,a=y.current;if(!a)return;k(!1);let o=!1,s=!1,c=!1,u=()=>{window.clearInterval(t),window.clearTimeout(n)},h=e=>{if(!d)return!0;let t=e.getDuration();return!!Number.isFinite(t)&&!(t<=0)&&(N(Math.round(t)),u(),!0)},p=document.createElement("iframe"),f=new URLSearchParams({autoplay:"0",controls:g?"0":"1",enablejsapi:"1",playsinline:"1",origin:window.location.origin});g&&f.set("mute","1"),p.src=`https://www.youtube.com/embed/${m}?${f}`,p.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",p.allowFullscreen=!0,M(p),a.appendChild(p),(ne((i=window).YT)?Promise.resolve(i.YT):r||(r=new Promise((e,t)=>{let n=document.querySelector(`script[src="${t7}"]`),r=n??document.createElement("script"),a=i.onYouTubeIframeAPIReady,o=()=>{window.clearTimeout(c),r.removeEventListener("error",s),i.onYouTubeIframeAPIReady===d&&(i.onYouTubeIframeAPIReady=a)},s=()=>{o(),n||r.remove(),t(Error("YouTube IFrame Player API could not load"))},d=()=>{try{a?.()}finally{ne(i.YT)&&(o(),e(i.YT))}},c=window.setTimeout(s,15e3);i.onYouTubeIframeAPIReady=d,r.addEventListener("error",s,{once:!0}),n||(r.src=t7,r.async=!0,l&&(r.nonce=l),document.head.appendChild(r))}).catch(e=>{throw r=void 0,e}))).then(r=>{o||(d&&(n=window.setTimeout(()=>{c=!0,u(),C(!1)},1e4)),M((e=new r.Player(p,{videoId:m,width:"100%",height:"100%",playerVars:{autoplay:0,controls:+!g,playsinline:1,origin:window.location.origin},events:{onReady:e=>{let{target:n}=e;o||s||x.current||(x.current=n,g&&n.mute(),h(n)||c||(t=window.setInterval(()=>{h(n)},250)),g&&b.current&&n.playVideo())},onStateChange:e=>{let{target:t,data:n}=e;o||s||(h(t),g&&(1!==n||b.current||t.pauseVideo(),k(1===n&&b.current)))},onError:e=>{let{data:t}=e;o||s||(s=!0,u(),C(!1),g&&T(),L(t))},onAutoplayBlocked:()=>{!o&&g&&T()}}})).getIframe()))}).catch(()=>{o||(u(),C(!1))});let v=()=>{"hidden"===document.visibilityState&&T()};return g&&(document.addEventListener("visibilitychange",v),window.addEventListener("blur",T)),()=>{o=!0,u(),document.removeEventListener("visibilitychange",v),window.removeEventListener("blur",T),b.current=!1,x.current=null,e?.destroy(),a.replaceChildren()}},[g,T,M,L,l,d,m]),(0,s.useEffect)(()=>{let e=y.current?.querySelector("iframe");e&&(e.title=u)},[u]);let F=e=>{let t=e.currentTarget;if("error"===e.type||120===t.naturalWidth&&90===t.naturalHeight){if("maxresdefault"===I)return void S("hqdefault");S(null),o?.()}R(!0)},z=null===E?null:`${Math.floor(E/60)}:${String(E%60).padStart(2,"0")}`;return(0,i.jsxs)("div",{className:"yJZhIINb","aria-label":v?u:void 0,role:v?"img":void 0,"data-d-click-through":v?"":void 0,"data-d-compact":p?"":void 0,onClickCapture:g?T:void 0,onPointerEnter:g||n?e=>{"touch"===e.pointerType||(n?.(),g&&(b.current=!0,x.current?.mute(),x.current?.playVideo()))}:void 0,onPointerLeave:g?T:void 0,children:[(0,i.jsx)("div",{"aria-hidden":v||void 0,className:"FGyoMQHc",ref:y}),c&&(0,i.jsxs)("div",{"aria-hidden":!0,className:"CGGqG8Yi",hidden:w,children:[I&&(0,i.jsx)("img",{alt:"",className:"SmBGDHGD",draggable:!1,onError:F,onLoad:F,referrerPolicy:"no-referrer",src:`https://img.youtube.com/vi/${m}/${I}.jpg`}),!p&&!A&&(0,i.jsx)("div",{className:"EwiAvKrl",children:(0,i.jsx)(eC,{width:"100%",height:"100%",duration:1e3})})]}),d&&(0,i.jsx)("div",{"aria-hidden":!0,className:"uaAC63SW",hidden:w,children:(0,i.jsxs)(h,{color:"secondary",variant:"solid",size:p?"sm":"lg",children:[(0,i.jsx)(t9.default,{className:"ck53xJTr"}),(0,i.jsx)("span",{className:"AAbEFenE",children:z?(0,i.jsx)("span",{children:z}):j?(0,i.jsx)("span",{className:"Es3Yie9u"}):null})]})})]})}var nn=n("vCpP");let nr={...{animate:function(e){let{children:t}=e;return(0,i.jsx)(o.a,{...d(e),children:t})},"animate-group":function(e){let{children:t}=e;return(0,i.jsx)(l.a,{...d(e),children:t})},"animate-item":function(e){let{children:t}=e;return(0,i.jsx)(a.e,{children:t})},badge:h,bento:function(e){let{children:t,overflow:n="hidden"}=e,r=function e(t){return s.Children.toArray(s.Children.map(t,t=>(0,s.isValidElement)(t)&&t.type===s.Fragment?e(t.props.children):t))}(t),a="scroll"===n,{ref:o,bleed:l}=function(e){let t=(0,s.useRef)(null),[n,r]=(0,s.useState)(null);return(0,s.useLayoutEffect)(()=>{let n=t.current;if(!e||!n)return;let i=n.closest('[data-d-direction="col"]:not([data-d-component])');if(!i)return;let a=[];for(let e=n.parentElement;e&&(a.push(e),e!==i);e=e.parentElement);let o=()=>{let e=n.getBoundingClientRect();if(!e.width||!n.offsetWidth)return;let t=e.width/n.offsetWidth,o=n;for(let e of a){let n=getComputedStyle(e);if("contents"===n.display)continue;let a=e.clientWidth-parseFloat(n.paddingLeft)-parseFloat(n.paddingRight);if(Math.abs(o.getBoundingClientRect().width/t-a)>1||e!==i&&"visible"!==n.overflowX)return void r(null);o=e}let l=i.getBoundingClientRect(),s=Math.max(0,(e.left-l.left)/t),d=Math.max(0,(l.right-e.right)/t);r(e=>e?.left===s&&e.right===d?e:{left:s,right:d})};o();let l="u"<typeof ResizeObserver?null:new ResizeObserver(o);return l?.observe(n),a.forEach(e=>l?.observe(e)),()=>l?.disconnect()},[e]),{ref:t,bleed:e?n:null}}(a&&r.length>0);if(!r.length)return null;let d=a?r:r.slice(0,3),c=r.length-d.length;return(0,i.jsxs)("div",{ref:o,className:"SMr1Fv15","data-d-component":"bento","data-d-full-width":null!==l||void 0,style:l?{"--bento-bleed-left":`${l.left}px`,"--bento-bleed-right":`${l.right}px`}:void 0,children:[(0,i.jsx)("div",{className:"mrC_BsU0","data-d-overflow":n,"data-d-count":d.length,role:"region","aria-label":"Bento",tabIndex:a&&r.length>3?0:void 0,children:d.map((e,t)=>(0,i.jsx)("div",{className:"SnqTaU3_",children:e},(0,s.isValidElement)(e)?e.key??t:t))}),c>0&&(0,i.jsxs)("span",{className:"uytytyBC",children:[(0,i.jsx)(p.default,{"aria-hidden":!0,width:16,height:16}),`+${c}`]})]})},blockquote:function(e){let{children:t}=e;return(0,i.jsx)("blockquote",{className:f.a.Blockquote,"data-d-component":"blockquote",children:(0,g.a)(t)})},bold:ed.a,box:v.a,button:E,card:I.a,carousel:function(e){var t;let{activeIndex:n,ariaLabel:r="Carousel",children:a,flush:o=!1,gap:l=2,onChange:d,previousLabel:c="Previous carousel items",nextLabel:u="Next carousel items",showArrows:h=!0,snap:p="proximity",snapAlign:f="start",visibleItems:g}=e,v=(0,s.useId)(),x=(0,s.useRef)(null),b=(0,s.useRef)(void 0),w=(0,s.useRef)(void 0),k=(0,s.useRef)(void 0),j=(0,s.useRef)(void 0),C=(0,s.useRef)(!1),E=(0,s.useRef)(!1),N="number"==typeof(t=n)&&Number.isInteger(t)?t:void 0;E.current=void 0!==N;let I=void 0!==n||void 0!==d,L=I?"start":f,z=function(e){if(null!=e&&Number.isFinite(e)&&!(e<1))return Math.floor(e)}(g),[D,$]=(0,s.useState)(),[G,K]=(0,s.useState)(0),[Z,Y]=(0,s.useState)("ltr"),[J,X]=(0,s.useState)({previous:!1,next:!1}),Q=(0,s.useCallback)(()=>{let e=x.current;if(null==e)return;let{textDirection:t,carouselRect:n,alignedInlineStart:r,items:i}=V(e),a=i.at(0),o=i.at(-1);if(Y(t),null==a||null==o)return void X({previous:!1,next:!1});let l=W(a.getBoundingClientRect(),n,t),s=o.getBoundingClientRect();X({previous:l<r-1,next:W(s,n,t)+s.width>e.clientWidth+1})},[]),ee=(0,s.useCallback)(()=>{let e=x.current;null!=e&&$(function(e,t){if(null==t)return;let n=getComputedStyle(e),r=e.clientWidth-q(n.paddingInlineStart)-q(n.paddingInlineEnd),i=q(n.columnGap),a=Number(n.getPropertyValue("--carousel-continuation-cue-ratio")),o=H(e).length>t&&a>0;return Math.max(0,Math.round(1e3*((r-i*(o?t:t-1)-(o?r*a:0))/t))/1e3)}(e,z))},[z]),et=(0,s.useCallback)(()=>{let e=x.current;if(!I||null==e||void 0!==w.current)return;let{currentOffset:t,itemOffsets:n}=_(e);w.current=B(n,t)},[I]),en=(0,s.useCallback)(()=>{let e=x.current;if(null==e)return;let{currentOffset:t,itemOffsets:n}=_(e),r=B(n,t);if(void 0===r)return;let i=k.current;k.current=void 0,void 0!==i&&1>=Math.abs(t-i)||r!==w.current&&(w.current=r,r!==N&&d?.(r))},[N,d]),er=(0,s.useCallback)(()=>{void 0!==b.current&&window.clearTimeout(b.current),b.current=window.setTimeout(()=>{b.current=void 0,en()},120)},[en]);(0,s.useEffect)(()=>{let e=x.current;if(null==e)return;let t=()=>{ee(),Q(),et(),E.current&&K(e=>e+1)},n="u"<typeof ResizeObserver?null:new ResizeObserver(t),r=()=>{H(e).forEach(e=>n?.observe(e))};t(),e.addEventListener("scroll",Q,{passive:!0}),n?.observe(e),r();let i="u"<typeof MutationObserver?null:new MutationObserver(()=>{r(),t()});return i?.observe(e,{childList:!0}),()=>{e.removeEventListener("scroll",Q),i?.disconnect(),n?.disconnect()}},[o,l,et,ee,Q]),(0,s.useEffect)(()=>()=>{void 0!==b.current&&(window.clearTimeout(b.current),b.current=void 0)},[]),(0,s.useEffect)(()=>{ee(),Q()},[a,ee,Q]),(0,s.useEffect)(()=>{Q()},[D,Q]);let ei=(0,s.useCallback)(e=>{let t=x.current;if(null==t||void 0===N)return;let{currentOffset:n,itemOffsets:r,items:i,maxScrollOffset:a}=_(t),o=r[N],l=i[N];if(void 0===o||null==l){k.current=void 0;return}let s=Math.min(o,a);if(w.current=N,1>=Math.abs(n-s)){let e=k.current;void 0!==e&&Math.abs(e-s)>1&&(k.current=void 0);return}k.current=s,l.scrollIntoView({behavior:e&&!U()?"smooth":"instant",block:"nearest",inline:"start"})},[N]);(0,s.useEffect)(()=>{let e=C.current&&j.current!==N;j.current=N,C.current=!0,ei(e)},[N,G,ei]),(0,s.useEffect)(()=>{void 0!==D&&ei(!1)},[D,ei]),(0,s.useEffect)(()=>{let e=x.current,t=e?.closest("[dir]");if(null==t||"u"<typeof MutationObserver)return;let n=new MutationObserver(Q);return n.observe(t,{attributes:!0,attributeFilter:["dir"]}),()=>n.disconnect()},[Q]);let ea=e=>{let t=x.current;if(null==t)return;let{textDirection:n,carouselRect:r,alignedInlineStart:i,items:a}=V(t),o=("previous"===e?a.slice().reverse():a).find(t=>{let a=W(t.getBoundingClientRect(),r,n);return"previous"===e?a<i-1:a>i+1});o?.scrollIntoView({behavior:U()?"auto":"smooth",block:"nearest",inline:"start"})},eo=J.previous||J.next,el=(0,R.b)(M,"rtl"===Z?F:T),es=(0,R.b)(M,"rtl"===Z?T:F),ed="rtl"===Z?(0,i.jsx)(A.default,{height:16,width:16}):(0,i.jsx)(S.default,{height:16,width:16}),ec="rtl"===Z?(0,i.jsx)(S.default,{height:16,width:16}):(0,i.jsx)(A.default,{height:16,width:16});return(0,i.jsxs)("div",{className:"YuKWAuwt",children:[(0,i.jsx)("div",{"aria-label":r,className:"Ccokajb0","data-d-component":"carousel","data-d-flush":o?"":void 0,"data-d-snap":p,id:v,onScroll:I?er:void 0,ref:x,role:"list",style:{gap:(0,m.h)(l)},tabIndex:eo?0:void 0,children:(0,i.jsx)(O.Provider,{value:{itemWidth:D,snapAlign:L},children:a})}),(0,i.jsx)(P,{viewportRef:x}),h&&eo?(0,i.jsx)("div",{className:el,children:(0,i.jsx)(y.a,{"aria-controls":v,"aria-disabled":!J.previous,"aria-label":c,color:"secondary",onClick:()=>{J.previous&&ea("previous")},tabIndex:J.previous?0:-1,pill:!0,size:"sm",uniform:!0,variant:"outline",children:ed})}):null,h&&eo?(0,i.jsx)("div",{className:es,children:(0,i.jsx)(y.a,{"aria-controls":v,"aria-disabled":!J.next,"aria-label":u,color:"secondary",onClick:()=>{J.next&&ea("next")},tabIndex:J.next?0:-1,pill:!0,size:"sm",uniform:!0,variant:"outline",children:ec})}):null]})},"carousel-item":function(e){let{aspectRatio:t,background:n,border:r,children:a,gap:o,height:l,maxHeight:s,maxWidth:d,minHeight:c,minWidth:u,padding:m,radius:h,variant:p,width:f}=e;return(0,i.jsx)($,{aspectRatio:t,background:n,border:r,component:"carousel-item",gap:o,height:l,maxHeight:s,maxWidth:d,minHeight:c,minWidth:u,padding:m,radius:h,variant:p,width:f,children:a})},"carousel-media-item":function(e){let{aspectRatio:t,background:n,border:r,children:o,gap:l,height:d,maxHeight:c,maxWidth:u,media:m,minHeight:h,minWidth:p,padding:f,radius:g,size:v="sm",variant:y,width:x}=e,{itemWidth:b}=(0,s.useContext)(O),w=x??(null==b&&null==p?"min-content":void 0),k=null!=b||null!=w||null!=p,j=(0,a.v)(m),C=null!=j&&null!=j.props.radius;return(0,i.jsxs)($,{aspectRatio:t,background:n,border:r,component:"carousel-media-item",gap:l,height:d,maxHeight:c,maxWidth:u,minHeight:h,minWidth:p,padding:f,radius:g,variant:y,width:w,children:[(0,i.jsx)(L.a,{align:"stretch",as:"div",className:"oaVCCWaI",clip:!0,direction:"row",height:D[v],radius:C?void 0:"xl",width:k?"100%":"fit-content",children:m}),(0,i.jsx)(L.a,{as:"div",gap:l??1,padding:{x:1},width:"100%",children:o})]})},caption:N.a,checkbox:function(e){let{checked:t,children:n,defaultChecked:r=!1,disabled:o,label:l,lineThrough:d=!1,name:c,onChange:u,required:m,shape:h="round",value:p="on"}=e,f=(0,a.B)(),[v,y]=(0,s.useState)(r),x=null!=t,b=x?t:v,w=n??l;return(0,i.jsx)(G.a,{checked:b,className:"round"===h?"hHfb6xfS":void 0,"data-d-component":"checkbox",disabled:o,label:null==w?void 0:(0,i.jsx)("span",{children:(0,g.a)(w)}),labelClassName:(0,R.b)("round"===h&&"zdjApaRA",b&&d&&"aYji5o3d"),name:c,onCheckedChange:e=>{x||y(e),f({...C.a.checkbox,value:e?"checked":"unchecked"},(0,a.q)(u,e))},required:m,value:p})},"chip-input":K.a,code:function(e){let{children:t=""}=e,n=(0,s.useContext)(a.j);return(0,i.jsx)("code",{className:ea.a.Code,"data-d-component":"code",children:(0,i.jsx)(a.j.Provider,{value:{...n,bold:!1},children:(0,g.a)(t,{reveal:"string"==typeof t||"number"==typeof t})})})},col:eo.a,"date-picker":el.a,divider:es.a,favicon:Q,flow:em.a,"flow-item":em.b,form:function(e){let{onSubmit:t,...n}=e;return(0,i.jsx)(L.a,{as:"form",component:"form",hostProps:{onSubmit(e){e.preventDefault(),e.stopPropagation(),t?.()}},layout:n})},grid:eh.a,"grid-item":eh.b,"html-view":function(e){let{height:t=360,html:n,messenger:r,title:a="DIL HTML view",width:o="100%",...l}=e,d=(0,s.useRef)(null),c=(0,s.useRef)(null),u=(0,s.useRef)(null);null===u.current&&(u.current=ev());let m=r?.channelId??"html-view",h=u.current,[p,f]=(0,s.useState)(void 0),[g,v]=(0,s.useState)(void 0),y=function(e){let t,{channelId:n,html:r,token:i}=e;return`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="Content-Security-Policy" content="${"default-src 'none'; base-uri 'none'; object-src 'none'; form-action 'none'; frame-src 'none'; script-src 'unsafe-inline' https://cdn.jsdelivr.net https://unpkg.com https://esm.sh https://cdn.skypack.dev https://cdnjs.cloudflare.com https://cdn.tailwindcss.com; style-src 'unsafe-inline' https://cdn.jsdelivr.net https://unpkg.com https://cdnjs.cloudflare.com https://fonts.googleapis.com; img-src data: blob: https:; font-src data: https://fonts.gstatic.com https://cdn.jsdelivr.net https://cdnjs.cloudflare.com; connect-src https://cdn.jsdelivr.net https://unpkg.com https://esm.sh https://cdn.skypack.dev https://cdnjs.cloudflare.com; media-src data: blob: https:; worker-src blob:".replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")}" />
    <script>
      ${t=JSON.stringify({channelId:n,token:i}).replace(/</g,"\\u003c"),String.raw`
(() => {
  const PROTOCOL = "dil-html-view";
  const { channelId, token } = ${t};
  let messenger = null;
  const pendingRequests = Object.create(null);
  const queuedCommands = [];
  const queuedEvents = [];

  const randomId = () =>
    globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);

  const post = (message) => {
    globalThis.parent.postMessage(
      {
        __dilHtmlView: PROTOCOL,
        channelId,
        token,
        ...message,
      },
      "*",
    );
  };

  const isMessageForThisView = (event) => {
    const { data } = event;
    return Boolean(
      data &&
        data.__dilHtmlView === PROTOCOL &&
        data.channelId === channelId &&
        data.token === token,
    );
  };

  const requestCommand = (type, data) => {
    const id = randomId();

    return new Promise((resolve, reject) => {
      pendingRequests[id] = {
        reject,
        resolve,
      };

      post({
        data,
        id,
        kind: "command",
        type,
      });
    });
  };

  const respondToCommand = (id, result, error) => {
    post({
      error,
      id,
      kind: "response",
      result,
    });
  };

  const runCommand = (message) => {
    if (!messenger) {
      queuedCommands.push(message);
      return;
    }

    const handler = messenger._commands[message.type];
    if (typeof handler !== "function") {
      respondToCommand(message.id, undefined, {
        message: 'Unknown DILMessenger command "' + message.type + '"',
      });
      return;
    }

    Promise.resolve()
      .then(() => handler(message.data))
      .then(
        (result) => {
          respondToCommand(message.id, result, undefined);
        },
        (error) => {
          respondToCommand(message.id, undefined, {
            message: error && error.message ? String(error.message) : String(error),
          });
        },
      );
  };

  const emitEvent = (message) => {
    if (!messenger) {
      queuedEvents.push(message);
      return;
    }

    const handlers = messenger._eventHandlers[message.type] ?? [];
    handlers.slice().forEach((handler) => handler(message.data));
  };

  const handleResponse = (message) => {
    const pending = pendingRequests[message.id];
    if (!pending) {
      return;
    }

    delete pendingRequests[message.id];

    if (message.error) {
      pending.reject(new Error(message.error.message || "DIL command failed"));
      return;
    }

    pending.resolve(message.result);
  };

  const handleMessage = (event) => {
    if (!isMessageForThisView(event)) {
      return;
    }

    const { data: message } = event;
    switch (message.kind) {
      case "command":
        runCommand(message);
        return;
      case "event":
        emitEvent(message);
        return;
      case "response":
        handleResponse(message);
        return;
      default:
        return;
    }
  };

  const createCommandsProxy = () =>
    new Proxy(Object.create(null), {
      get(_target, property) {
        if (typeof property !== "string" || property === "then") {
          return undefined;
        }

        return (data) => requestCommand(property, data);
      },
    });

  class DILMessenger {
    constructor(options) {
      this._commands = options?.commands ?? {};
      this._eventHandlers = Object.create(null);
      this.commands = createCommandsProxy();
      messenger = this;

      while (queuedCommands.length > 0) {
        runCommand(queuedCommands.shift());
      }

      Promise.resolve().then(() => {
        while (queuedEvents.length > 0) {
          emitEvent(queuedEvents.shift());
        }
      });
    }

    emit(type, data) {
      post({
        data,
        kind: "event",
        type,
      });
    }

    on(type, handler) {
      const handlers = this._eventHandlers[type] ?? [];
      handlers.push(handler);
      this._eventHandlers[type] = handlers;

      return () => {
        const index = handlers.indexOf(handler);
        if (index !== -1) {
          handlers.splice(index, 1);
        }
      };
    }
  }

  globalThis.addEventListener("message", handleMessage);
  globalThis.DILMessenger = DILMessenger;
  post({ kind: "bridge-ready" });
})();
`}
    <\/script>
  </head>
  <body>
${r}
  </body>
</html>`}({channelId:m,html:n,token:h});return(0,s.useLayoutEffect)(()=>{let e=d.current;if(!e)return;let t={channelId:m,iframe:e,messenger:r,srcDoc:y,token:h},n=c.current;return n?.matches(t)?n.updateOptions(t):c.current=n=new eg(t),n.listen(),f(e=>e===y?e:y),n.teardown},[m,r,y,h]),(0,i.jsx)(L.a,{as:"div",className:ep,component:"html-view",height:t,layout:l,width:o,children:(0,i.jsx)("iframe",{ref:d,className:ef,"data-loaded":p&&g===p?"":void 0,onLoad:()=>v(p),sandbox:"allow-scripts",srcDoc:p,title:a})})},icon:ey.a,image:eR,input:eM.a,label:eT.a,link:function(e){let{children:t,href:n,onClick:r,onVisible:o,onVisibleWhen:l,onVisibleKey:d,title:c,anchorComponent:u}=e,m=u??"a",h=(0,a.B)(),p=function(e){let t=e.trim();if(!t)return null;if(!/^[a-z][a-z\d+.-]*:/i.test(t)){if(t.startsWith("//")||!t.includes("."))return null;t=`https://${t}`}try{let e=new URL(t);if("http:"!==e.protocol&&"https:"!==e.protocol)return null}catch{return null}return t}(n),f=(0,eF.a)({onVisible:o,onVisibleKey:d,onVisibleWhen:!1!==l&&null!==p},m);if(!p)return(0,i.jsx)(a.e,{children:t});let v=s.Children.toArray(t),y=v.some(e=>"string"!=typeof e||e.trim())?v:[c?.trim()||new URL(p).hostname],x=y.pop(),b=0===y.length&&"string"==typeof x&&!/\s/u.test(x.trim());if("string"==typeof x){let e=x.trimEnd();y.push(e),x=x.slice(e.length)}return(0,i.jsx)(m,{ref:f,className:b?ez.a.NoWrap:void 0,"data-d-component":"link",href:p,onClick:r?e=>{e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||(e.preventDefault(),e.stopPropagation(),h(C.a.link,(0,a.q)(r)))}:void 0,rel:"noopener noreferrer",target:"_blank",title:c,children:(0,i.jsxs)(ee.a,{color:"inherit",inline:!0,underline:"dotted",children:[y,(0,i.jsxs)("span",{className:ez.a.Tail,children:[(0,g.a)(x),(0,i.jsx)("span",{"aria-hidden":"true",children:(0,i.jsx)(ey.a,{inline:!0,name:"arrow-up-right-link"})})]})]})})},list:function(e){var t;let n,r,{children:o,connector:l="none",gap:d,items:c,marker:u="bullet",maxMarkerSize:h,start:p}=e,f=e_(h,"md"),g="none"===l&&"md"===f&&eU(u)?u:null,v="number"===u?"ol":"ul",y="number"===u&&null!=p&&Number.isFinite(p)?p:void 0,x="md"!==f||eB(l,u??"none")?4:0,b=(0,m.h)(d??x);return(0,i.jsx)(eO.Provider,{value:l,children:(0,i.jsx)(e$.Provider,{value:{inheritedMarker:u,nativeMarker:g},children:(0,i.jsx)(eW.Provider,{value:{maxMarkerSize:f,reserveMarkerLane:"md"!==f},children:(0,i.jsxs)(v,{className:eP.a.List,"data-d-component":"list","data-d-connector":"solid"===l?l:void 0,"data-d-marker":"string"==typeof u?u:"rich","data-d-marker-layout":null==g?"custom":"native",start:y,style:{"--d-list-row-gap":b.includes("(")?b:b.split(/\s+/)[0],counterReset:null==y?void 0:"d-list-item "+(y-1),gap:b},children:[(c??[]).map((e,t)=>(0,i.jsx)(eq,{disabled:"string"==typeof e?void 0:e.disabled,label:"string"==typeof e?e:e.label,description:"string"==typeof e?void 0:e.description,children:"string"==typeof e?e:e.children},t)),(t=o,n=[],(r=e=>{s.Children.forEach(e,e=>{(0,s.isValidElement)(e)&&e.type===s.Fragment?r(e.props.children):n.push(e)})})(t),n.map((e,t)=>(0,s.isValidElement)(e)&&null==e.key?(0,s.cloneElement)(e,{key:t}):e)).map((e,t)=>{var n;return(n=e,(0,a.v)(n)?.type===eq)?e:(0,i.jsx)(eq,{children:e},t)})]})})})})},"list-item":eq,loading:function(e){let{label:t="Loading",size:n="md"}=e;return(0,i.jsx)("div",{"aria-label":t,className:"lQpe5aOM","data-d-component":"loading",role:"status",children:(0,i.jsx)(eG.a,{size:eK[n]})})},"loading-indicator":function(e){let{color:t="prose",size:n="md"}=e,r=(0,s.useContext)(a.k);return(0,i.jsx)(eZ.a,{className:(0,R.b)("wKSQOExE",{"text-xs":"xs"===n,"text-sm":"sm"===n,"text-base":"md"===n,"text-lg":"lg"===n,"text-xl":"xl"===n,"text-2xl":"2xl"===n,"text-3xl":"3xl"===n}),"data-d-component":"loading-indicator",name:"empty-circle",style:{color:(0,m.i)((0,m.j)(r,t))}})},lottie:function(e){let{sourceUrlGate:t,src:n,...r}=e,o=(0,s.useContext)(a.k),l="string"!=typeof n&&!("layers"in n&&Array.isArray(n.layers))&&"light"in n&&"dark"in n?n[o]:n,d=(0,i.jsx)(e2,{advanceRate:r.advanceRate,alt:r.alt,animationEndTime:r.animationEndTime,animationStartTime:r.animationStartTime,aspectRatio:r.aspectRatio,assetUrlGate:r.assetUrlGate,currentTime:r.currentTime,fit:r.fit,height:r.height,loop:r.loop,maxHeight:r.maxHeight,maxWidth:r.maxWidth,minHeight:r.minHeight,minWidth:r.minWidth,radius:r.radius,source:l,width:r.width});return t&&"string"==typeof l&&!/^data:/i.test(l)?(0,i.jsx)(t,{url:l,children:d}):d},italic:ed.b,markdown:function(e){let{children:t,streaming:n=!1}=e;return(0,i.jsx)("div",{"data-d-component":"markdown",children:(0,i.jsx)(e3.a,{animateHeight:!0,includeMath:!0,streaming:n,children:t??""})})},math:function(e){let{block:t=!1,value:n}=e;return(0,i.jsx)(e5.a,{block:t,className:"c_BmHAIV","data-d-block":t?"":void 0,"data-d-component":"math",value:n})},popover:function(e){let{children:t,hoverOpenDelay:n,open:r,showOnHover:a}=e;return(0,i.jsx)(e4.a,{hoverOpenDelay:n,open:r,showOnHover:a,children:t})},"popover-content":e6,"popover-trigger":function(e){let{block:t=!1,children:n,onClick:r,role:o="button"}=e,l=(0,a.B)(),d=(0,s.useContext)(eE.a);return(0,i.jsx)(e4.a.Trigger,{children:(0,i.jsx)(t?"div":"span",{className:(0,R.b)("y4ejT1nB",t&&"VOSjY9lf"),"data-d-component":"popover-trigger","data-d-inline":t?void 0:"","data-d-inline-text":!t&&d?"":void 0,onClick:e=>{e.stopPropagation(),l(C.a["popover-trigger"],(0,a.q)(r))},onKeyDown:"presentation"===o?void 0:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),e.stopPropagation(),e.currentTarget.click())},role:o,tabIndex:"presentation"===o?void 0:0,children:n})})},"pulse-indicator":function(e){let{color:t,duration:n,endScale:r,pulseColor:o,size:l=12,startOpacity:d}=e,c=(0,s.useContext)(a.k);return(0,i.jsx)("span",{className:"hg0Z4uKZ","data-d-component":"pulse-indicator",style:(0,Z.g)({"pulse-color":(0,m.i)((0,m.j)(c,t)),"pulse-duration":n?`${n}ms`:void 0,"pulse-end-scale":r?String(r):void 0,"pulse-size":l,"pulse-start-opacity":null==d?void 0:String(d),"pulse-wave-color":(0,m.i)((0,m.j)(c,o??t))})})},pressable:eA,reveal:function(e){let t,n,r,{children:a,targetId:o}=e;return(0,i.jsxs)("div",{className:e9,"data-d-reveal-for":o,children:[a,(0,e8.k)(o)&&!o.includes("\0")&&(0,i.jsx)("style",{children:(t=o.replace(/[^a-zA-Z0-9_-]/gu,e=>`\\${e.codePointAt(0).toString(16)} `),n=`[data-id~="${t}"]:not(template, :scope [data-dil-response] *)`,r=`.${e9}[data-d-reveal-for="${t}"]:not(:hover, :focus-within)`,`
    @media (hover: hover) and (pointer: fine) {
      @scope ([data-dil-response]) to ([data-dil-response]) {
        :scope:has(${n}):not(:has(${n}:is(:hover, :focus-within))) {
          ${r} {
            opacity: 0;
            pointer-events: none;
          }
          .${e7}:has(> ${r}) {
            pointer-events: none;
          }
        }
      }
    }
  `)})]})},radio:tt,"read-only-html-view":tv,"radio-group":function(e){var t;let{captureInteraction:n,runInteraction:r}=(0,a.z)(),[o,l]=(0,s.useState)(null),[d,c]=(0,s.useState)("ltr");(0,s.useLayoutEffect)(()=>{let e=o?.parentElement;if(!e)return;let t=()=>{c("rtl"===getComputedStyle(e).direction?"rtl":"ltr")};t();let n=new MutationObserver(t);return n.observe(e.closest("[dir]")??e,{attributes:!0,attributeFilter:["dir"],characterData:!0,childList:!0,subtree:!0}),()=>n.disconnect()},[o]);let{children:u,defaultValue:m,disabled:h,direction:p="row",label:f,name:g,onChange:v,options:y,required:x,spacing:b,value:w}=e,k=m??("defaultValue"in e?void 0:y?.[0]?.value??""),j="vertical"===(t=p)||"col"===t?"col":"row";return(0,i.jsx)(te.a,{ref:l,"aria-label":f??g??"Options",asChild:!0,className:"nex2Yal0","data-d-component":"radio-group",defaultValue:null==w?k:void 0,disabled:h,dir:d,direction:j,name:g,onChange:e=>r({...C.a["radio-group"],value:e},(0,a.q)(v,e)),onClickCapture:e=>{h||(0,a.w)(e)||n({...C.a["radio-group"],value:(0,a.t)(e,y)??w??m})},required:x,spacing:b,value:w,children:(0,i.jsx)("div",{dir:void 0,onKeyDownCapture:tn,children:y?.map(e=>(0,i.jsx)(tt,{disabled:e.disabled,value:e.value,children:e.description?(0,i.jsxs)("span",{children:[(0,i.jsx)("span",{children:e.label}),(0,i.jsx)(N.a,{color:"secondary",size:"sm",children:e.description})]}):e.label},e.value))??u})})},row:tr.a,stack:function(e){let{children:t}=e;return(0,i.jsx)("div",{className:"brnxnH09","data-d-component":"stack",children:t})},"stack-item":function(e){let{children:t,placement:n="center-center",inset:r=0,decorative:a=!1}=e,[o,l]=n.split("-");return(0,i.jsx)("div",{"aria-hidden":a||void 0,className:"FkqXW9n5","data-d-component":"stack-item","data-horizontal":l,"data-vertical":o,inert:a||void 0,style:{inset:(0,m.h)(Number.isFinite(Number(r))?Number(r):r)},children:(0,i.jsx)("div",{className:e7,children:t})})},"search-image":function(e){let{upgradeToFullRes:t=!1,sourceIdentity:n,sourcePending:r,...a}=e;return t?(0,i.jsx)(tj,{actionOverlay:a.actionOverlay,imageFrameComponent:a.imageFrameComponent,imageContentComponent:a.imageContentComponent,alt:a.alt,aspectRatio:a.aspectRatio,background:a.background,bitmapBlendMode:a.bitmapBlendMode,containOutsideAspectRatio:a.containOutsideAspectRatio,contentCropFit:a.contentCropFit,fallback:a.fallback,fit:a.fit,frame:a.frame,height:a.height,hideOnFailure:a.hideOnFailure,hoverZoom:a.hoverZoom,maxHeight:a.maxHeight,maxWidth:a.maxWidth,minHeight:a.minHeight,minWidth:a.minWidth,onLoad:a.onLoad,onError:a.onError,onImageLoad:a.onImageLoad,onImageError:a.onImageError,onImageFallback:a.onImageFallback,imageFrameRef:a.imageFrameRef,loadedOverlay:a.loadedOverlay,position:a.position,radius:a.radius,searchImage:a.searchImage,secondaryAction:a.secondaryAction,width:a.width,sourceIdentity:n,sourcePending:r,children:a.children}):(0,i.jsx)(tk,{actionOverlay:a.actionOverlay,imageFrameComponent:a.imageFrameComponent,imageContentComponent:a.imageContentComponent,alt:a.alt,aspectRatio:a.aspectRatio,background:a.background,bitmapBlendMode:a.bitmapBlendMode,containOutsideAspectRatio:a.containOutsideAspectRatio,contentCropFit:a.contentCropFit,fallback:a.fallback,fit:a.fit,frame:a.frame,height:a.height,hideOnFailure:a.hideOnFailure,hoverZoom:a.hoverZoom,maxHeight:a.maxHeight,maxWidth:a.maxWidth,minHeight:a.minHeight,minWidth:a.minWidth,onLoad:a.onLoad,onError:a.onError,onImageLoad:a.onImageLoad,onImageError:a.onImageError,onImageFallback:a.onImageFallback,imageFrameRef:a.imageFrameRef,loadedOverlay:a.loadedOverlay,position:a.position,radius:a.radius,searchImage:a.searchImage,sourceIdentity:n,sourcePending:r,secondaryAction:a.secondaryAction,width:a.width,children:a.children})},select:tS.a,"segmented-control":function(e){let{block:t,defaultValue:n,disabled:r,label:o,onChange:l,options:d,pill:c=!0,size:u="lg",value:m,variant:h="ghost"}=e,{captureInteraction:p,runInteraction:f}=(0,a.z)(),g=n??d[0]?.value??"",[v,y]=(0,s.useState)(g),x=null!=m,b=x?m:v;return(0,i.jsx)("div",{className:"QNgUzhzH","data-d-component":"segmented-control",onKeyDownCapture:e=>tn(e,!1),onClickCapture:e=>{r||(0,a.w)(e)||p({...C.a["segmented-control"],value:(0,a.t)(e,d)??m??n})},children:(0,i.jsx)(tA.a,{"aria-label":o??"Options",block:t,disabled:r,onChange:e=>{x||y(e),f({...C.a["segmented-control"],value:e},(0,a.q)(l,e))},pill:c,size:u,value:b,variant:h,children:d.map(e=>(0,i.jsx)(tA.a.Option,{"aria-label":e.label,disabled:e.disabled,value:e.value,children:e.label},e.value))})})},"shimmer-text":function(e){let{children:t,color:n,italic:r,lineThrough:a,maxLines:o,minLines:l,size:s="md",tabularNums:d,textAlign:c,truncate:u,weight:m,width:h}=e;return(0,i.jsx)(tR.a,{as:"span",className:"tjrk87F4",color:n,"data-d-component":"shimmer-text",fontStyle:r?"italic":void 0,maxLines:o,minLines:l,size:s,tabularNums:d,textAlign:c,textDecoration:a?"line-through":void 0,truncate:u,weight:m,width:h,children:t})},slider:tL.a,spacer:function(e){let{minSize:t}=e;return(0,i.jsx)("div",{className:"wealNOM2","data-d-component":"spacer",style:(0,Z.g)({"w-spacer-min-size":t})})},strikethrough:ed.c,svg:tX,table:function(e){let{columnSizing:t="auto",columns:n=[],children:r,dividers:a=!0,emptyLabel:o="No rows",rows:l=[],stickyHeader:d=!1}=e,c=s.Children.count(r)>0,u=(0,s.useRef)(null);return(0,i.jsxs)("div",{className:tQ.a.TableFrame,"data-d-column-sizing":t,"data-d-component":"table",children:[(0,i.jsx)("div",{className:tQ.a.TableViewport,"data-d-table-viewport":!0,ref:u,children:(0,i.jsx)("table",{className:tQ.a.Table,"data-d-column-sizing":t,"data-d-dividers":a?"":void 0,"data-d-sticky-header":d?"":void 0,style:{tableLayout:"equal"===t?"fixed":"auto"},children:c?function(e){let t=s.Children.toArray(e);if(t.some(t4)){let e=[],n=[],r=()=>{0!==n.length&&(e.push((0,i.jsx)("tbody",{children:n},`loose-rows-${e.length}`)),n=[])};return t.forEach(t=>{if(t4(t)){r(),e.push(t);return}n.push(t)}),r(),e}return(0,i.jsx)("tbody",{children:e})}(r):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:n.map(e=>(0,i.jsx)("th",{"data-d-align":e.align,"data-d-component":"table-cell","data-d-has-width":null!=e.width?"":void 0,scope:"col",style:{width:e.width},children:e.label},e.key))})}),(0,i.jsx)("tbody",{children:0===l.length?(0,i.jsx)("tr",{children:(0,i.jsx)("td",{className:tQ.a.EmptyCell,colSpan:n.length||1,children:o})}):l.map((e,t)=>(0,i.jsx)("tr",{children:n.map(t=>{var n;let r=null==(n=e[t.key])?"":"boolean"==typeof n?n?"Yes":"No":String(n);return(0,i.jsx)("td",{"data-d-align":t.align,"data-d-break-long-token":t5(r)?"":void 0,"data-d-component":"table-cell",children:r},t.key)})},t))})]})})}),(0,i.jsx)(P,{viewportRef:u})]})},"table-cell":t3,"table-row":function(e){let{children:t,header:n=!1,label:r,labelColSpan:o}=e,l=(0,s.useContext)(t0),d=(0,i.jsx)(t0.Provider,{value:n||l,children:(0,i.jsx)("tr",{className:tQ.a.Row,"data-d-component":"table-row",children:t})});if(!r)return d;let c=o??function(e){let t=0;for(let n of s.Children.toArray(e)){let e=(0,a.v)(n);(0,s.isValidElement)(e)&&e.type===t3&&(t+=function(e){let t=Number(e??1);return Number.isFinite(t)&&t>0?t:1}(e.props.colSpan))}return Math.max(t,1)}(t);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("tr",{className:tQ.a.Row,"data-d-component":"table-row-label",children:(0,i.jsx)("td",{className:tQ.a.RowLabelCell,colSpan:c,children:(0,i.jsx)("div",{className:tQ.a.RowLabelContent,children:(0,i.jsx)("span",{className:tQ.a.RowLabelText,children:r})})})}),d]})},"table-section":t2,text:ee.a,textarea:t6.a,title:t8.a,tooltip:function(e){let{content:t,children:n}=e;return(0,i.jsx)(b.Provider,{value:t,children:(0,i.jsx)(a.e,{children:n})})},transition:function(e){let{children:t}=e,n=(0,s.useMemo)(()=>"string"==typeof t||"number"==typeof t?(0,i.jsx)(s.Fragment,{children:t},"transition-child"):(0,s.isValidElement)(t)?null==t.key?(0,s.cloneElement)(t,{key:"transition-child"}):t:s.Children.toArray(t),[t]);return(0,i.jsx)(o.a,{...d(e),children:n})},underline:ed.d},celebration:function(e){let{trigger:t,children:n}=e;return(0,i.jsxs)("div",{className:"DHyihX73","data-d-component":"celebration",children:[n,null!=t&&(0,i.jsx)(ei,{},t)]})},"citation-pill":function(e){let{color:t,count:n,label:r,onHover:o,url:l}=e,d=(0,s.useContext)(a.k);return(0,i.jsxs)(et,{className:"vMH1qoGM",color:"secondary","data-d-component":"badge","data-d-hoverable":o?"":void 0,onMouseEnter:o?()=>o(!0):void 0,onMouseLeave:o?()=>o(!1):void 0,pill:!0,size:"sm",style:{background:(0,m.c)((0,m.j)(d,t),d)},variant:"soft",children:[l?(0,i.jsx)("span",{className:"gpdrW0fG",children:(0,i.jsx)(Q,{size:12,url:l})}):null,(0,i.jsx)("span",{className:"f1ZlTdQm",children:(0,i.jsx)(ee.a,{color:"secondary",inline:!0,maxLines:1,size:"3xs",truncate:!0,children:r})}),n>1?(0,i.jsx)("span",{className:"sWqf87Gx",children:(0,i.jsxs)(ee.a,{color:"tertiary",inline:!0,size:"3xs",children:["+",n-1]})}):null]})},"flashcard-flip":function(e){let{children:t,...n}=e,[r,i,...a]=s.Children.toArray(t);if(void 0===r||void 0===i)throw Error("DIL flashcard-flip requires question and answer children.");return(0,s.createElement)(ec.a,{...n,backFace:i,faceBackground:eu},[r,...a])},"loading-block":eC,youtube:function(e){let{aspectRatio:t="16 / 9",hoverToPlay:n=!1,maxWidth:r="100%",onHover:o,onPlayerError:l,onThumbnailError:d,scriptNonce:c,showDurationBadge:u=!1,showThumbnail:m=!1,title:h="YouTube video player",videoId:p,width:f="100%"}=e,g=(0,s.useContext)(a.d),[v,y]=(0,s.useState)(null);return"string"==typeof p&&/^[A-Za-z0-9_-]{11}$/.test(p)?(0,i.jsx)("div",{className:"anNc3lq8","data-d-component":"youtube",style:{aspectRatio:t,maxWidth:r,width:f},children:g?(0,i.jsx)("div",{"aria-label":h,role:"img",style:{alignItems:"center",backgroundColor:"var(--color-surface-secondary)",color:"var(--color-text-secondary)",display:"flex",height:"100%",justifyContent:"center",width:"100%"},children:(0,i.jsx)("span",{"aria-hidden":"true",style:{fontSize:"2.5rem"},children:"▶"})}):m||u||n||o||l?(0,i.jsx)(nt,{hoverToPlay:n,onHover:o,onPlayerError:l,onThumbnailError:d,scriptNonce:c,showDurationBadge:u,showThumbnail:m,title:h,videoId:p},`${p}:${m}:${u}:${n}`):(0,i.jsx)("iframe",{className:"lhSyVMpP","data-loaded":v===p?"":void 0,onLoad:()=>y(p),allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,referrerPolicy:"strict-origin-when-cross-origin",src:`https://www.youtube.com/embed/${p}`,title:h})}):null}}},K2hS(e,t,n){n.d(t,{a:()=>S,b:()=>x});var r=n("zd8w"),i=n("zWxU"),a=n("Fc3g"),o=n("XDr4"),l=n("kUVq"),s=n("Hj0L"),d=n("ABep"),c=Object.defineProperty,u=r.forwardRef(c(function(e,t){let{pressed:n,defaultPressed:r,onPressedChange:i,...o}=e,[c,u]=(0,s.a)({prop:n,onChange:i,defaultProp:r??!1,caller:"Toggle"});return(0,d.jsx)(a.a.button,{type:"button","aria-pressed":c,"data-state":c?"on":"off","data-disabled":e.disabled?"":void 0,...o,ref:t,onClick:(0,l.a)(e.onClick,()=>{e.disabled||u(!c)})})},"name",{value:"Toggle",configurable:!0})),m=n("k5JT"),h=Object.defineProperty,p=(e,t)=>h(e,"name",{value:t,configurable:!0}),f="ToggleGroup",[g,v]=(0,i.a)(f,[o.c]),y=(0,o.c)(),x=r.forwardRef(p(function(e,t){let{type:n,...r}=e;if("single"===n)return(0,d.jsx)(k,{role:"radiogroup",...r,ref:t});if("multiple"===n)return(0,d.jsx)(j,{role:"toolbar",...r,ref:t});throw Error(`Missing prop \`type\` expected on \`${f}\``)},"ToggleGroup")),[b,w]=g(f),k=r.forwardRef(p(function(e,t){let{value:n,defaultValue:i,onValueChange:a=p(()=>{},"onValueChange"),...o}=e,[l,c]=(0,s.a)({prop:n,defaultProp:i??"",onChange:a,caller:f});return(0,d.jsx)(b,{scope:e.__scopeToggleGroup,type:"single",value:r.useMemo(()=>l?[l]:[],[l]),onItemActivate:c,onItemDeactivate:r.useCallback(()=>c(""),[c]),children:(0,d.jsx)(N,{...o,ref:t})})},"ToggleGroupImplSingle")),j=r.forwardRef(p(function(e,t){let{value:n,defaultValue:i,onValueChange:a=p(()=>{},"onValueChange"),...o}=e,[l,c]=(0,s.a)({prop:n,defaultProp:i??[],onChange:a,caller:f}),u=r.useCallback(e=>c((t=[])=>[...t,e]),[c]),m=r.useCallback(e=>c((t=[])=>t.filter(t=>t!==e)),[c]);return(0,d.jsx)(b,{scope:e.__scopeToggleGroup,type:"multiple",value:l,onItemActivate:u,onItemDeactivate:m,children:(0,d.jsx)(N,{...o,ref:t})})},"ToggleGroupImplMultiple")),[C,E]=g(f),N=r.forwardRef(p(function(e,t){let{__scopeToggleGroup:n,disabled:r=!1,rovingFocus:i=!0,orientation:l,dir:s,loop:c=!0,...u}=e,h=y(n),p=(0,m.useDirection)(s),f={dir:p,...u};return(0,d.jsx)(C,{scope:n,rovingFocus:i,disabled:r,children:i?(0,d.jsx)(o.b,{asChild:!0,...h,orientation:l,dir:p,loop:c,children:(0,d.jsx)(a.a.div,{...f,ref:t})}):(0,d.jsx)(a.a.div,{...f,ref:t})})},"ToggleGroupImpl")),I="ToggleGroupItem",S=r.forwardRef(p(function(e,t){let n=w(I,e.__scopeToggleGroup),i=E(I,e.__scopeToggleGroup),a=y(e.__scopeToggleGroup),l=n.value.includes(e.value),s=i.disabled||e.disabled,c={...e,pressed:l,disabled:s},u=r.useRef(null);return i.rovingFocus?(0,d.jsx)(o.a,{asChild:!0,...a,focusable:!s,active:l,ref:u,children:(0,d.jsx)(A,{...c,ref:t})}):(0,d.jsx)(A,{...c,ref:t})},"ToggleGroupItem")),A=r.forwardRef(p(function(e,t){let{__scopeToggleGroup:n,value:r,...i}=e,a=w(I,n),o={role:"radio","aria-checked":e.pressed,"aria-pressed":void 0},l="single"===a.type?o:void 0;return(0,d.jsx)(u,{...l,...i,ref:t,onPressedChange:e=>{e?a.onItemActivate(r):a.onItemDeactivate(r)}})},"ToggleGroupItemImpl"))},jqtP(e,t,n){var r=n("pJUL");n.d(t,{},{a:function(e,t){return e&&"run"in e?async function(n,i){let a=(0,r.a)(n,{file:i,...t});await e.run(a,i)}:function(n,i){return(0,r.a)(n,{file:i,...e||t})}}})}};