(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9459)}])},6541:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let i=n(8754),r=n(1757),o=n(5893),s=r._(n(7294)),a=i._(n(3935)),l=i._(n(7828)),u=n(7367),c=n(7903),d=n(4938);n(1997);let f=n(9953),g=i._(n(6663)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/banner/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e,t,n,i,r,o,s){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&r(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,r=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function h(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}let _=(0,s.forwardRef)((e,t)=>{let{src:n,srcSet:i,sizes:r,height:a,width:l,decoding:u,className:c,style:d,fetchPriority:f,placeholder:g,loading:m,unoptimized:_,fill:v,onLoadRef:b,onLoadingCompleteRef:x,setBlurComplete:j,setShowAltText:w,sizesInput:C,onLoad:y,onError:S,...E}=e;return(0,o.jsx)("img",{...E,...h(f),loading:m,width:l,height:a,decoding:u,"data-nimg":v?"fill":"1",className:c,style:d,sizes:r,srcSet:i,src:n,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&p(e,g,b,x,j,_,C))},[n,g,b,x,j,S,_,C,t]),onLoad:e=>{p(e.currentTarget,g,b,x,j,_,C)},onError:e=>{w(!0),"empty"!==g&&j(!0),S&&S(e)}})});function v(e){let{isAppRouter:t,imgAttributes:n}=e,i={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...h(n.fetchPriority)};return t&&a.default.preload?(a.default.preload(n.src,i),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...i},"__nimg-"+n.src+n.srcSet+n.sizes)})}let b=(0,s.forwardRef)((e,t)=>{let n=(0,s.useContext)(f.RouterContext),i=(0,s.useContext)(d.ImageConfigContext),r=(0,s.useMemo)(()=>{let e=m||i||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[i]),{onLoad:a,onLoadingComplete:l}=e,p=(0,s.useRef)(a);(0,s.useEffect)(()=>{p.current=a},[a]);let h=(0,s.useRef)(l);(0,s.useEffect)(()=>{h.current=l},[l]);let[b,x]=(0,s.useState)(!1),[j,w]=(0,s.useState)(!1),{props:C,meta:y}=(0,u.getImgProps)(e,{defaultLoader:g.default,imgConf:r,blurComplete:b,showAltText:j});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(_,{...C,unoptimized:y.unoptimized,placeholder:y.placeholder,fill:y.fill,onLoadRef:p,onLoadingCompleteRef:h,setBlurComplete:x,setShowAltText:w,sizesInput:e.sizes,ref:t}),y.priority?(0,o.jsx)(v,{isAppRouter:!n,imgAttributes:C}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7367:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),n(1997);let i=n(9919),r=n(7903);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var n;let a,l,u,{src:c,sizes:d,unoptimized:f=!1,priority:g=!1,loading:m,className:p,quality:h,width:_,height:v,fill:b=!1,style:x,overrideSrc:j,onLoad:w,onLoadingComplete:C,placeholder:y="empty",blurDataURL:S,fetchPriority:E,layout:z,objectFit:P,objectPosition:B,lazyBoundary:I,lazyRoot:N,...k}=e,{imgConf:O,showAltText:R,blurComplete:M,defaultLoader:A}=t,D=O||r.imageConfigDefault;if("allSizes"in D)a=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);a={...D,allSizes:e,deviceSizes:t}}if(void 0===A)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let G=k.loader||A;delete k.loader,delete k.srcSet;let T="__next_img_default"in G;if(T){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=G;G=t=>{let{config:n,...i}=t;return e(i)}}if(z){"fill"===z&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(x={...x,...e});let t={responsive:"100vw",fill:"100vw"}[z];t&&!d&&(d=t)}let F="",L=s(_),W=s(v);if("object"==typeof(n=c)&&(o(n)||void 0!==n.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,u=e.blurHeight,S=S||e.blurDataURL,F=e.src,!b){if(L||W){if(L&&!W){let t=L/e.width;W=Math.round(e.height*t)}else if(!L&&W){let t=W/e.height;L=Math.round(e.width*t)}}else L=e.width,W=e.height}}let U=!g&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:F)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,U=!1),a.unoptimized&&(f=!0),T&&c.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),g&&(E="high");let V=s(h),H=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:B}:{},R?{}:{color:"transparent"},x),J=M||"empty"===y?null:"blur"===y?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:L,heightInt:W,blurWidth:l,blurHeight:u,blurDataURL:S||"",objectFit:H.objectFit})+'")':'url("'+y+'")',Y=J?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},q=function(e){let{config:t,src:n,unoptimized:i,width:r,quality:o,sizes:s,loader:a}=e;if(i)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(e,t,n){let{deviceSizes:i,allSizes:r}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(n);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:r,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))],kind:"x"}}(t,r,s),c=l.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:l.map((e,i)=>a({config:t,src:n,quality:o,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:a({config:t,src:n,quality:o,width:l[c]})}}({config:a,src:c,unoptimized:f,width:L,quality:V,sizes:d,loader:G});return{props:{...k,loading:U?"lazy":m,fetchPriority:E,width:L,height:W,decoding:"async",className:p,style:{...H,...Y},sizes:q.sizes,srcSet:q.srcSet,src:j||q.src},meta:{unoptimized:f,priority:g,placeholder:y,fill:b}}}},9919:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:i,blurHeight:r,blurDataURL:o,objectFit:s}=e,a=i?40*i:t,l=r?40*r:n,u=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},5666:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return l},getImageProps:function(){return a}});let i=n(8754),r=n(7367),o=n(6541),s=i._(n(6663));function a(e){let{props:t}=(0,r.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/banner/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let l=o.Image},6663:function(e,t){"use strict";function n(e){let{config:t,src:n,width:i,quality:r}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+i+"&q="+(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),n.__next_img_default=!0;let i=n},9459:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return _},default:function(){return v}});var i=n(5893),r=n(7294),o=n(9008),s=n.n(o),a=n(5675),l=n.n(a),u=n(7810),c=n.n(u),d=e=>{let{title:t,description:n,cta:r,image:o,background:s,onEdit:a}=e;return(0,i.jsxs)("div",{className:c().banner,style:{background:s},children:[(0,i.jsx)(l(),{src:o,alt:t,layout:"responsive",width:500,height:300,className:c().image}),(0,i.jsxs)("div",{className:c().content,children:[(0,i.jsx)("h2",{className:c().title,children:t}),(0,i.jsx)("p",{className:c().description,children:n}),(0,i.jsx)("button",{className:c().cta,children:r})]}),(0,i.jsx)("button",{onClick:a,className:c().editButton,children:"✏️"})]})},f=n(3497),g=n.n(f),m=e=>{let{ad:t,onSave:n,onClose:o}=e,[s,a]=(0,r.useState)(t),l=e=>{let{name:t,value:n}=e.target;a({...s,[t]:n})};return(0,i.jsx)("div",{className:g().bottomSheet,children:(0,i.jsxs)("div",{className:g().content,children:[(0,i.jsx)("h2",{children:"Edit Ad Banner"}),(0,i.jsx)("input",{name:"title",value:s.title,onChange:l,placeholder:"Title"}),(0,i.jsx)("textarea",{name:"description",value:s.description,onChange:l,placeholder:"Description"}),(0,i.jsx)("input",{name:"cta",value:s.cta,onChange:l,placeholder:"CTA"}),(0,i.jsx)("input",{name:"image",value:s.image,onChange:l,placeholder:"Image URL"}),(0,i.jsx)("input",{name:"background",value:s.background,onChange:l,placeholder:"Background Color"}),(0,i.jsx)("button",{onClick:()=>{n(s),o()},children:"Save"}),(0,i.jsx)("button",{onClick:o,children:"Cancel"})]})})},p=n(2003),h=n.n(p),_=!0,v=e=>{let{ads:t}=e,[n,o]=(0,r.useState)(t),[a,l]=(0,r.useState)(null),u=e=>{l({...n[e],index:e})};return(0,i.jsxs)("div",{className:h().container,children:[(0,i.jsxs)(s(),{children:[(0,i.jsx)("title",{children:"Ad-Banner"}),(0,i.jsx)("link",{rel:"icon",href:"/images/favicon.jpg"})]}),(0,i.jsx)("h1",{className:h().title,children:"Ad Banners"}),n.map((e,t)=>(0,i.jsx)(d,{title:e.title,description:e.description,cta:e.cta,image:e.image,background:e.background,onEdit:()=>u(t)},t)),a&&(0,i.jsx)(m,{ad:a,onSave:e=>{let t=[...n];t[a.index]=e,o(t),l(null)},onClose:()=>l(null)})]})}},7810:function(e){e.exports={banner:"BannerImageComp_banner__7ux7G",image:"BannerImageComp_image__6HVj1",content:"BannerImageComp_content__F9Ij1",title:"BannerImageComp_title__K_4AE",description:"BannerImageComp_description__PdcGx",cta:"BannerImageComp_cta__ZsdMP",editButton:"BannerImageComp_editButton__72iJW"}},3497:function(e){e.exports={bottomSheet:"EditBannerTemplateBs_bottomSheet__nUBgJ",content:"EditBannerTemplateBs_content__hIR3V"}},2003:function(e){e.exports={container:"Home_container__9OuOz",title:"Home_title__YEn0u"}},9008:function(e,t,n){e.exports=n(7828)},5675:function(e,t,n){e.exports=n(5666)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);