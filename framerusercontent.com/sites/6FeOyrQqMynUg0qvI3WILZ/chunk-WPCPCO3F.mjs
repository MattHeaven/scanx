import{b as lt}from"./chunk-VO66NGHP.mjs";import{B as G,D as it,E as nt,F as M,J as X,K as rt,N as at,b as Ce,ba as Ve,d as Ze,f as qe,fa as t,g as et,ia as st,j as tt,l as R,o as xe,p as ot,r as le,s as b,v as d,w as J}from"./chunk-5MRFIFFE.mjs";var de=()=>typeof document=="object";function qt(){if(de()){if(typeof document.hidden<"u")return"visibilitychange";if(typeof document.msHidden<"u")return"msvisibilitychange";if(typeof document.webkitHidden<"u")return"webkitvisibilitychange"}}function eo(){if(de()){if(typeof document.hidden<"u")return"hidden";if(typeof document.msHidden<"u")return"msHidden";if(typeof document.webkitHidden<"u")return"webkitHidden"}}function dt(){if(de())return!document[eo()]}function ut(){if(!de())return;let[e,r]=b(dt()),f=()=>r(dt());return R(()=>{let s=qt();return document.addEventListener(s,f,!1),()=>{document.removeEventListener(s,f)}}),e}function c(e){let{slots:r,startFrom:f,direction:s,effectsOptions:D,autoPlayControl:B,dragControl:H,alignment:Y,gap:u,padding:a,paddingPerSide:S,paddingTop:w,paddingRight:Z,paddingBottom:k,paddingLeft:p,itemAmount:I,fadeOptions:N,intervalControl:T,transitionControl:v,arrowOptions:F,borderRadius:Oe,progressOptions:q,style:ue}=e,{effectsOpacity:P,effectsScale:ce,effectsRotate:ee,effectsPerspective:fe,effectsHover:te}=D,{fadeContent:A,overflow:oe,fadeWidth:C,fadeInset:Me,fadeAlpha:De}=N,{showMouseControls:Re,arrowSize:O,arrowRadius:Be,arrowFill:He,leftArrow:ft,rightArrow:pt,arrowShouldSpace:L=!0,arrowShouldFadeIn:ke=!1,arrowPosition:m,arrowPadding:K,arrowGap:mt,arrowPaddingTop:ht,arrowPaddingRight:gt,arrowPaddingBottom:yt,arrowPaddingLeft:wt}=F,{showProgressDots:bt,dotSize:Ne,dotsInset:Te,dotsRadius:St,dotsPadding:vt,dotsGap:Pt,dotsFill:Ct,dotsBackground:xt,dotsActiveOpacity:Vt,dotsOpacity:It,dotsBlur:Fe}=q,Ot=S?`${w}px ${Z}px ${k}px ${p}px`:`${a}px`,x=Ve.current()===Ve.canvas,W=Ce.count(r)>0,i=s==="left"||s==="right",ie=s==="right"||s==="bottom";if(!W)return J("section",{style:to,children:[d("div",{style:oo,children:"\u2B50\uFE0F"}),d("p",{style:io,children:"Connect to Content"}),d("p",{style:no,children:"Add layers or components to make infinite auto-playing slideshows."})]});let U=le(null),l=ot(()=>r.map(o=>qe()),[r]),pe=le(void 0),[n,Mt]=b({parent:null,children:null,item:null,itemWidth:null,itemHeight:null}),[Dt,Ae]=b(!1),[Rt,Le]=b(B),[Bt,We]=b(!1),[z,ze]=b(!1),me=[],$e=4;x&&($e=1);let Ee=tt(()=>{at.read(()=>{if(W&&U.current){let o=r.length-1,y=i?U.current.offsetWidth:U.current.offsetHeight,h=l[0].current?i?l[0].current.offsetLeft:l[0].current.offsetTop:0,j=(l[o].current?i?l[o].current.offsetLeft+l[o].current.offsetWidth:l[o].current.offsetTop+l[o].current.offsetHeight:0)-h+u,ae=l[0].current?i?l[0].current.offsetWidth:l[0].current.offsetHeight:0,ve=l[0].current?l[0].current.offsetWidth:0,Pe=l[0].current?l[0].current.offsetHeight:0;Mt({parent:y,children:j,item:ae,itemWidth:ve,itemHeight:Pe})}})},[W]);xe(()=>{W&&Ee()},[W,I]);let he=le(!0);R(()=>lt(U.current,({contentSize:o})=>{!he.current&&(o.width||o.height)&&(Ee(),ze(!0)),he.current=!1}),[]),R(()=>{if(z){let o=setTimeout(()=>ze(!1),500);return()=>clearTimeout(o)}},[z]);let $=r?.length,ne=x?0:n?.children,ge=n?.item+u,Ht=f*ge,[g,Q]=b(f+$),[kt,_e]=b(!1),je=ut(),Ge=ie?1:-1,E=nt(ne),Xe=i?-f*(n?.itemWidth+u):-f*(n?.itemHeight+u),ye=()=>Ge*g*ge,we=x?0:M(E,o=>{let y=X(-ne,-ne*2,o);return isNaN(y)?0:y}),Nt=X(0,$,g),Tt=X(0,-$,g);xe(()=>{n?.children!==null&&!he.current&&z&&E.set(ye())},[n,ne,Ge,Ht,g,ge,z]);let Ye=()=>{x||!W||!n.parent||kt||(E.get()!==ye()&&rt(E,ye(),v),B&&Rt&&(pe.current=setTimeout(()=>{Q(g+1),Ye()},T*1e3)))},_=o=>{Q(ie?g-o:g+o)},Ft=o=>{let y=X(0,$,g),h=X(0,-$,g),V=o-y,j=o-Math.abs(h);Q(ie?g-j:g+V)},At=()=>{_e(!0)},Lt=(o,{offset:y,velocity:h})=>{_e(!1);let V=i?y.x:y.y,j=200,ae=i?h.x:h.y,ve=V<-n.item/2,Pe=V>n.item/2,Ut=Math.abs(V),se=Math.round(Ut/n.item),Je=se===0?1:se;ae>j?_(-Je):ae<-j?_(Je):(ve&&_(se),Pe&&_(-se))};R(()=>{if(!(!je||z))return Ye(),()=>pe.current&&clearTimeout(pe.current)},[me,je,z]);let Wt=0,Ke=`calc(${100/I}% - ${u}px + ${u/I}px)`;for(let o=0;o<$e;o++)me.push(...Ce.map(r,(y,h)=>{let V;return h===0&&(V=l[0]),h===r.length-1&&(V=l[1]),d(so,{ref:l[h],slideKey:o+h+"lg",index:o,width:i&&I>1?Ke:"100%",height:i?"100%":I>1?Ke:"100%",size:n,child:y,numChildren:r?.length,wrappedValue:we,childCounter:Wt++,gap:u,isCanvas:x,isHorizontal:i,effectsOpacity:P,effectsScale:ce,effectsRotate:ee,children:o+h},o+h+"lg")}));let zt=i?"to right":"to bottom",Ue=C/2,$t=100-C/2,Et=ao(Me,0,Ue),_t=100-Me,be=`linear-gradient(${zt}, rgba(0, 0, 0, ${De}) ${Et}%, rgba(0, 0, 0, 1) ${Ue}%, rgba(0, 0, 0, 1) ${$t}%, rgba(0, 0, 0, ${De}) ${_t}%)`,Se=[],re={};if(bt){for(let o=0;o<r?.length;o++)Se.push(d(lo,{dotStyle:{...co,width:Ne,height:Ne,backgroundColor:Ct},buttonStyle:Ie,selectedOpacity:Vt,opacity:It,onClick:()=>Ft(o),wrappedIndex:Nt,wrappedIndexInverted:Tt,total:$,index:o,gap:Pt,padding:vt,isHorizontal:i,isInverted:ie},o));Fe>0&&(re.backdropFilter=re.WebkitBackdropFilter=re.MozBackdropFilter=`blur(${Fe}px)`)}let jt=H?{drag:i?"x":"y",onDragStart:At,onDragEnd:Lt,dragDirectionLock:!0,values:{x:E,y:E},dragMomentum:!1}:{},Gt=m==="top-left"||m==="top-mid"||m==="top-right",Xt=m==="bottom-left"||m==="bottom-mid"||m==="bottom-right",Yt=m==="top-left"||m==="bottom-left",Kt=m==="top-right"||m==="bottom-right",Qe=m==="top-mid"||m==="bottom-mid"||m==="auto";return J("section",{style:{...ct,padding:Ot,WebkitMaskImage:A?be:void 0,MozMaskImage:A?be:void 0,maskImage:A?be:void 0,opacity:n?.item!==null?1:0,userSelect:"none"},onMouseEnter:()=>{Ae(!0),te||Le(!1)},onMouseLeave:()=>{Ae(!1),te||Le(!0)},onMouseDown:o=>{o.preventDefault(),We(!0)},onMouseUp:()=>We(!1),children:[d("div",{style:{width:"100%",height:"100%",margin:0,padding:"inherit",position:"absolute",inset:0,overflow:oe?"visible":"hidden",borderRadius:Oe,userSelect:"none",perspective:x?"none":fe},children:d(G.ul,{ref:U,...jt,style:{...ct,gap:u,placeItems:Y,x:i?x?Xe:we:0,y:i?0:x?Xe:we,flexDirection:i?"row":"column",transformStyle:ee!==0&&!x?"preserve-3d":void 0,cursor:H?Bt?"grabbing":"grab":"auto",userSelect:"none",...ue},children:me})}),J("fieldset",{style:{...ro},"aria-label":"Slideshow pagination controls",className:"framer--slideshow-controls",children:[J(G.div,{style:{position:"absolute",display:"flex",flexDirection:i?"row":"column",justifyContent:L?"space-between":"center",gap:L?"unset":mt,opacity:ke?0:1,alignItems:"center",inset:K,top:L?K:Gt?ht:"unset",left:L?K:Yt?wt:Qe?0:"unset",right:L?K:Kt?gt:Qe?0:"unset",bottom:L?K:Xt?yt:"unset"},animate:ke&&{opacity:Dt?1:0},transition:v,children:[d(G.button,{type:"button",style:{...Ie,backgroundColor:He,width:O,height:O,borderRadius:Be,rotate:i?0:90,display:Re?"block":"none",pointerEvents:"auto"},onClick:()=>_(-1),"aria-label":"Previous",whileTap:{scale:.9},transition:{duration:.15},children:d("img",{width:O,height:O,src:ft||"https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg",alt:"Back Arrow"})}),d(G.button,{type:"button",style:{...Ie,backgroundColor:He,width:O,height:O,borderRadius:Be,rotate:i?0:90,display:Re?"block":"none",pointerEvents:"auto"},onClick:()=>_(1),"aria-label":"Next",whileTap:{scale:.9},transition:{duration:.15},children:d("img",{width:O,height:O,src:pt||"https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg",alt:"Next Arrow"})})]}),Se.length>1?d("div",{style:{...uo,left:i?"50%":Te,top:i?"unset":"50%",transform:i?"translateX(-50%)":"translateY(-50%)",flexDirection:i?"row":"column",bottom:i?Te:"unset",borderRadius:St,backgroundColor:xt,userSelect:"none",...re},children:Se}):null]})]})}c.defaultProps={direction:"left",dragControl:!1,startFrom:0,itemAmount:1,infinity:!0,gap:10,padding:10,autoPlayControl:!0,effectsOptions:{effectsOpacity:1,effectsScale:1,effectsRotate:0,effectsPerspective:1200,effectsHover:!0},transitionControl:{type:"spring",stiffness:200,damping:40},fadeOptions:{fadeContent:!1,overflow:!1,fadeWidth:25,fadeAlpha:0,fadeInset:0},arrowOptions:{showMouseControls:!0,arrowShouldFadeIn:!1,arrowShouldSpace:!0,arrowFill:"rgba(0,0,0,0.2)",arrowSize:40},progressOptions:{showProgressDots:!0}};st(c,{slots:{type:t.Array,title:"Content",control:{type:t.ComponentInstance}},direction:{type:t.Enum,title:"Direction",options:["left","right","top","bottom"],optionIcons:["direction-left","direction-right","direction-up","direction-down"],optionTitles:["Left","Right","Top","Bottom"],displaySegmentedControl:!0,defaultValue:c.defaultProps.direction},autoPlayControl:{type:t.Boolean,title:"Auto Play",defaultValue:!0},intervalControl:{type:t.Number,title:"Interval",defaultValue:1.5,min:.5,max:10,step:.1,displayStepper:!0,unit:"s",hidden:e=>!e.autoPlayControl},dragControl:{type:t.Boolean,title:"Draggable",defaultValue:!1},startFrom:{type:t.Number,title:"Current",min:0,max:10,displayStepper:!0,defaultValue:c.defaultProps.startFrom},effectsOptions:{type:t.Object,title:"Effects",controls:{effectsOpacity:{type:t.Number,title:"Opacity",defaultValue:c.defaultProps.effectsOptions.effectsOpacity,min:0,max:1,step:.01,displayStepper:!0},effectsScale:{type:t.Number,title:"Scale",defaultValue:c.defaultProps.effectsOptions.effectsScale,min:0,max:1,step:.01,displayStepper:!0},effectsPerspective:{type:t.Number,title:"Perspective",defaultValue:c.defaultProps.effectsOptions.effectsPerspective,min:200,max:2e3,step:1},effectsRotate:{type:t.Number,title:"Rotate",defaultValue:c.defaultProps.effectsOptions.effectsRotate,min:-180,max:180,step:1},effectsHover:{type:t.Boolean,title:"On Hover",enabledTitle:"Play",disabledTitle:"Pause",defaultValue:c.defaultProps.effectsOptions.effectsHover}}},alignment:{type:t.Enum,title:"Align",options:["flex-start","center","flex-end"],optionIcons:{direction:{right:["align-top","align-middle","align-bottom"],left:["align-top","align-middle","align-bottom"],top:["align-left","align-center","align-right"],bottom:["align-left","align-center","align-right"]}},defaultValue:"center",displaySegmentedControl:!0},itemAmount:{type:t.Number,title:"Items",min:1,max:10,displayStepper:!0,defaultValue:c.defaultProps.itemAmount},gap:{type:t.Number,title:"Gap",min:0},padding:{title:"Padding",type:t.FusedNumber,toggleKey:"paddingPerSide",toggleTitles:["Padding","Padding per side"],defaultValue:0,valueKeys:["paddingTop","paddingRight","paddingBottom","paddingLeft"],valueLabels:["T","R","B","L"],min:0},borderRadius:{type:t.Number,title:"Radius",min:0,max:500,displayStepper:!0,defaultValue:0},transitionControl:{type:t.Transition,defaultValue:c.defaultProps.transitionControl,title:"Transition"},fadeOptions:{type:t.Object,title:"Clipping",controls:{fadeContent:{type:t.Boolean,title:"Fade",defaultValue:!1},overflow:{type:t.Boolean,title:"Overflow",enabledTitle:"Show",disabledTitle:"Hide",defaultValue:!1,hidden(e){return e.fadeContent===!0}},fadeWidth:{type:t.Number,title:"Width",defaultValue:25,min:0,max:100,unit:"%",hidden(e){return e.fadeContent===!1}},fadeInset:{type:t.Number,title:"Inset",defaultValue:0,min:0,max:100,unit:"%",hidden(e){return e.fadeContent===!1}},fadeAlpha:{type:t.Number,title:"Opacity",defaultValue:0,min:0,max:1,step:.05,hidden(e){return e.fadeContent===!1}}}},arrowOptions:{type:t.Object,title:"Arrows",controls:{showMouseControls:{type:t.Boolean,title:"Show",defaultValue:c.defaultProps.arrowOptions.showMouseControls},arrowFill:{type:t.Color,title:"Fill",hidden:e=>!e.showMouseControls,defaultValue:c.defaultProps.arrowOptions.arrowFill},leftArrow:{type:t.Image,title:"Previous",hidden:e=>!e.showMouseControls},rightArrow:{type:t.Image,title:"Next",hidden:e=>!e.showMouseControls},arrowSize:{type:t.Number,title:"Size",min:0,max:200,displayStepper:!0,defaultValue:c.defaultProps.arrowOptions.arrowSize,hidden:e=>!e.showMouseControls},arrowRadius:{type:t.Number,title:"Radius",min:0,max:500,defaultValue:40,hidden:e=>!e.showMouseControls},arrowShouldFadeIn:{type:t.Boolean,title:"Fade In",defaultValue:!1,hidden:e=>!e.showMouseControls},arrowShouldSpace:{type:t.Boolean,title:"Distance",enabledTitle:"Space",disabledTitle:"Group",defaultValue:c.defaultProps.arrowOptions.arrowShouldSpace,hidden:e=>!e.showMouseControls},arrowPosition:{type:t.Enum,title:"Position",options:["auto","top-left","top-mid","top-right","bottom-left","bottom-mid","bottom-right"],optionTitles:["Center","Top Left","Top Middle","Top Right","Bottom Left","Bottom Middle","Bottom Right"],hidden:e=>!e.showMouseControls||e.arrowShouldSpace},arrowPadding:{type:t.Number,title:"Inset",min:-100,max:100,defaultValue:20,displayStepper:!0,hidden:e=>!e.showMouseControls||!e.arrowShouldSpace},arrowPaddingTop:{type:t.Number,title:"Top",min:-500,max:500,defaultValue:0,displayStepper:!0,hidden:e=>!e.showMouseControls||e.arrowShouldSpace||e.arrowPosition==="auto"||e.arrowPosition==="bottom-mid"||e.arrowPosition==="bottom-left"||e.arrowPosition==="bottom-right"},arrowPaddingBottom:{type:t.Number,title:"Bottom",min:-500,max:500,defaultValue:0,displayStepper:!0,hidden:e=>!e.showMouseControls||e.arrowShouldSpace||e.arrowPosition==="auto"||e.arrowPosition==="top-mid"||e.arrowPosition==="top-left"||e.arrowPosition==="top-right"},arrowPaddingRight:{type:t.Number,title:"Right",min:-500,max:500,defaultValue:0,displayStepper:!0,hidden:e=>!e.showMouseControls||e.arrowShouldSpace||e.arrowPosition==="auto"||e.arrowPosition==="top-left"||e.arrowPosition==="top-mid"||e.arrowPosition==="bottom-left"||e.arrowPosition==="bottom-mid"},arrowPaddingLeft:{type:t.Number,title:"Left",min:-500,max:500,defaultValue:0,displayStepper:!0,hidden:e=>!e.showMouseControls||e.arrowShouldSpace||e.arrowPosition==="auto"||e.arrowPosition==="top-right"||e.arrowPosition==="top-mid"||e.arrowPosition==="bottom-right"||e.arrowPosition==="bottom-mid"},arrowGap:{type:t.Number,title:"Gap",min:0,max:100,defaultValue:10,displayStepper:!0,hidden:e=>!e.showMouseControls||e.arrowShouldSpace}}},progressOptions:{type:t.Object,title:"Dots",controls:{showProgressDots:{type:t.Boolean,title:"Show",defaultValue:!1},dotSize:{type:t.Number,title:"Size",min:1,max:100,defaultValue:10,displayStepper:!0,hidden:e=>!e.showProgressDots||e.showScrollbar},dotsInset:{type:t.Number,title:"Inset",min:-100,max:100,defaultValue:10,displayStepper:!0,hidden:e=>!e.showProgressDots||e.showScrollbar},dotsGap:{type:t.Number,title:"Gap",min:0,max:100,defaultValue:10,displayStepper:!0,hidden:e=>!e.showProgressDots||e.showScrollbar},dotsPadding:{type:t.Number,title:"Padding",min:0,max:100,defaultValue:10,displayStepper:!0,hidden:e=>!e.showProgressDots||e.showScrollbar},dotsFill:{type:t.Color,title:"Fill",defaultValue:"#fff",hidden:e=>!e.showProgressDots||e.showScrollbar},dotsBackground:{type:t.Color,title:"Backdrop",defaultValue:"rgba(0,0,0,0.2)",hidden:e=>!e.showProgressDots||e.showScrollbar},dotsRadius:{type:t.Number,title:"Radius",min:0,max:200,defaultValue:50,hidden:e=>!e.showProgressDots||e.showScrollbar},dotsOpacity:{type:t.Number,title:"Opacity",min:0,max:1,defaultValue:.5,step:.1,displayStepper:!0,hidden:e=>!e.showProgressDots||e.showScrollbar},dotsActiveOpacity:{type:t.Number,title:"Current",min:0,max:1,defaultValue:1,step:.1,displayStepper:!0,hidden:e=>!e.showProgressDots||e.showScrollbar},dotsBlur:{type:t.Number,title:"Blur",min:0,max:50,defaultValue:0,step:1,hidden:e=>!e.showProgressDots||e.showScrollbar}}}});var ct={display:"flex",flexDirection:"row",width:"100%",height:"100%",maxWidth:"100%",maxHeight:"100%",placeItems:"center",margin:0,padding:0,listStyleType:"none",textIndent:"none"},to={display:"flex",width:"100%",height:"100%",placeContent:"center",placeItems:"center",flexDirection:"column",color:"#96F",background:"rgba(136, 85, 255, 0.1)",fontSize:11,overflow:"hidden",padding:"20px 20px 30px 20px"},oo={fontSize:32,marginBottom:10},io={margin:0,marginBottom:10,fontWeight:600,textAlign:"center"},no={margin:0,opacity:.7,maxWidth:180,lineHeight:1.5,textAlign:"center"},Ie={border:"none",display:"flex",placeContent:"center",placeItems:"center",overflow:"hidden",background:"transparent",cursor:"pointer",margin:0,padding:0},ro={display:"flex",justifyContent:"space-between",alignItems:"center",position:"absolute",pointerEvents:"none",userSelect:"none",top:0,left:0,right:0,bottom:0,border:0,padding:0,margin:0},ao=(e,r,f)=>Math.min(Math.max(e,r),f),so=et(function(r,f){var s,D;let{slideKey:B,width:H,height:Y,child:u,size:a,gap:S,wrappedValue:w,numChildren:Z,childCounter:k,isCanvas:p,effects:I,effectsOpacity:N,effectsScale:T,effectsRotate:v,isHorizontal:F,isLast:Oe,index:q}=r,ue=(a?.item+S)*k,P=[-a?.item,0,a?.parent-a?.item+S,a?.parent].map(C=>C-ue),ce=!p&&M(w,P,[-v,0,0,v]),ee=!p&&M(w,P,[v,0,0,-v]),fe=!p&&M(w,P,[N,1,1,N]),te=!p&&M(w,P,[T,1,1,T]),A=!p&&M(w,P,[1,1,0,0]),oe=!p&&M(w,C=>C>=P[1]&&C<=P[2]);return R(()=>{if(oe)return oe.onChange(C=>{f.current.setAttribute("aria-hidden",!C)})},[]),d(it,{inherit:"id",children:d("li",{style:{display:"contents"},"aria-hidden":q!==0,children:Ze(u,{ref:f,key:B+"child",style:{...(s=u.props)===null||s===void 0?void 0:s.style,flexShrink:0,userSelect:"none",width:H,height:Y,opacity:fe,scale:te,originX:F?A:.5,originY:F?.5:A,rotateY:F?ce:0,rotateX:F?0:ee},layoutId:u.props.layoutId?u.props.layoutId+"-original-"+q:void 0},(D=u.props)===null||D===void 0?void 0:D.children)})})});function lo({selectedOpacity:e,opacity:r,total:f,index:s,wrappedIndex:D,wrappedIndexInverted:B,dotStyle:H,buttonStyle:Y,gap:u,padding:a,isHorizontal:S,isInverted:w,...Z}){let k=D===s;w&&(k=Math.abs(B)===s);let p=u/2,I=!S&&s>0?p:a,N=!S&&s!==f-1?p:a,T=S&&s!==f-1?p:a,v=S&&s>0?p:a;return d("button",{"aria-label":`Scroll to page ${s+1}`,type:"button",...Z,style:{...Y,padding:`${I}px ${T}px ${N}px ${v}px`},children:d(G.div,{style:{...H},initial:!1,animate:{opacity:k?e:r},transition:{duration:.3}})})}var uo={display:"flex",placeContent:"center",placeItems:"center",overflow:"hidden",position:"absolute",pointerEvents:"auto"},co={borderRadius:"50%",background:"white",cursor:"pointer",border:"none",placeContent:"center",placeItems:"center",padding:0};export{c as a};
//# sourceMappingURL=chunk-WPCPCO3F.mjs.map
