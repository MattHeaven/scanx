// Generated by Framer (d1ef57f)
import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{addFonts,Container,cx,GeneratedComponentContext,getFonts,Image,Link,PathVariablesContext,PropertyOverrides,removeHiddenBreakpointLayers,resolveLink,RichText,useHydratedBreakpointVariants,useLocaleInfo,useQueryData,useRouter,withCSS,withFX}from"framer";import{LayoutGroup,motion}from"framer-motion";import*as React from"react";import BlogFeaturedArticle from"#framer/local/canvasComponent/kjgkLRRw2/kjgkLRRw2.js";import TextElementsHorizontalRule from"#framer/local/canvasComponent/Rxf3HrBHV/Rxf3HrBHV.js";import FooterFooterDark from"#framer/local/canvasComponent/uMBtiI7N2/uMBtiI7N2.js";import NavigationNavbar from"#framer/local/canvasComponent/yV5mtLeiG/yV5mtLeiG.js";import BlogFilters from"#framer/local/canvasComponent/YWN0Df6z3/YWN0Df6z3.js";import BlogCategories from"#framer/local/collection/L2LZ4mmr0/L2LZ4mmr0.js";import Blog from"#framer/local/collection/vndjQ0vUm/vndjQ0vUm.js";import*as sharedStyle from"#framer/local/css/J9JehOXfs/J9JehOXfs.js";import*as sharedStyle1 from"#framer/local/css/N8DTKq_C4/N8DTKq_C4.js";import*as sharedStyle4 from"#framer/local/css/q25tsjqS7/q25tsjqS7.js";import*as sharedStyle3 from"#framer/local/css/xZndidUCt/xZndidUCt.js";import*as sharedStyle2 from"#framer/local/css/yreUs2sCT/yreUs2sCT.js";import metadataProvider from"#framer/local/webPageMetadata/M81GEfmDX/M81GEfmDX.js";const NavigationNavbarFonts=getFonts(NavigationNavbar);const ContainerWithFX=withFX(Container);const TextElementsHorizontalRuleFonts=getFonts(TextElementsHorizontalRule);const BlogFiltersFonts=getFonts(BlogFilters);const BlogFeaturedArticleFonts=getFonts(BlogFeaturedArticle);const FooterFooterDarkFonts=getFonts(FooterFooterDark);const cycleOrder=["aiB7n1nFj","xqcem8lts","MRVCQVG2N"];const breakpoints={aiB7n1nFj:"(min-width: 1400px)",MRVCQVG2N:"(max-width: 767px)",xqcem8lts:"(min-width: 768px) and (max-width: 1399px)"};const isBrowser=()=>typeof document!=="undefined";const serializationHash="framer-yPLI2";const variantClassNames={aiB7n1nFj:"framer-v-hh1hne",MRVCQVG2N:"framer-v-66tnyg",xqcem8lts:"framer-v-2tf5os"};if(isBrowser()){removeHiddenBreakpointLayers("aiB7n1nFj",breakpoints,variantClassNames);}const transitions={default:{duration:0}};const transition1={damping:50,delay:0,mass:1,stiffness:400,type:"spring"};const animation={opacity:1,rotate:0,scale:1,x:0,y:-120};const transformTemplate=(_,t)=>`perspective(1200px) translateX(-50%) ${t}`;const transformTemplate1=(_,t)=>`translateX(-50%) ${t}`;const toResponsiveImage=value=>{if(typeof value==="object"&&value!==null&&typeof value.src==="string"){return value;}return typeof value==="string"?{src:value}:undefined;};const QueryData=({query,children})=>{const data=useQueryData(query);return children(data);};const metadata=metadataProvider();const humanReadableVariantMap={Desktop:"aiB7n1nFj",Phone:"MRVCQVG2N",Tablet:"xqcem8lts"};const getProps=({height,id,width,...props})=>{var _humanReadableVariantMap_props_variant,_ref;return{...props,variant:(_ref=(_humanReadableVariantMap_props_variant=humanReadableVariantMap[props.variant])!==null&&_humanReadableVariantMap_props_variant!==void 0?_humanReadableVariantMap_props_variant:props.variant)!==null&&_ref!==void 0?_ref:"aiB7n1nFj"};};const Component=/*#__PURE__*/React.forwardRef(function(props,ref){const{activeLocale}=useLocaleInfo();const{style,className,layoutId,variant,wDEYtmRYUNVyxmClHe,OiT4e5aSzNVyxmClHe,QkImt0hPONVyxmClHe,RVXMLEhDiNVyxmClHe,KaAiQ44AjNVyxmClHe,idNVyxmClHe,wDEYtmRYURbN2qvjhz,OiT4e5aSzRbN2qvjhz,SlttfO9MMJlnyUQo6h,cz7flEfsVJlnyUQo6h,idJlnyUQo6h,a_wIc4j8LRbN2qvjhz,QkImt0hPORbN2qvjhz,RVXMLEhDiRbN2qvjhz,idRbN2qvjhz,...restProps}=getProps(props);React.useLayoutEffect(()=>{const metadata1=metadataProvider(undefined,activeLocale);document.title=metadata1.title||"";if(metadata1.viewport){var _document_querySelector;(_document_querySelector=document.querySelector('meta[name="viewport"]'))===null||_document_querySelector===void 0?void 0:_document_querySelector.setAttribute("content",metadata1.viewport);}if(metadata1.bodyClassName){Array.from(document.body.classList).filter(c=>c.startsWith("framer-body-")).map(c=>document.body.classList.remove(c));document.body.classList.add(`${metadata1.bodyClassName}-framer-yPLI2`);return()=>{document.body.classList.remove(`${metadata1.bodyClassName}-framer-yPLI2`);};}},[undefined,activeLocale]);const[baseVariant,hydratedBaseVariant]=useHydratedBreakpointVariants(variant,breakpoints,false);const gestureVariant=undefined;const transition=transitions.default;const ref1=React.useRef(null);const router=useRouter();const defaultLayoutId=React.useId();const sharedStyleClassNames=[sharedStyle.className,sharedStyle1.className,sharedStyle2.className,sharedStyle3.className,sharedStyle4.className];return /*#__PURE__*/_jsx(GeneratedComponentContext.Provider,{value:{primaryVariantId:"aiB7n1nFj",variantClassNames},children:/*#__PURE__*/_jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/_jsxs(motion.div,{className:cx("framer-yPLI2",...sharedStyleClassNames),style:{display:"contents"},children:[/*#__PURE__*/_jsxs(motion.div,{...restProps,className:cx("framer-hh1hne",className),ref:ref!==null&&ref!==void 0?ref:ref1,style:{...style},children:[/*#__PURE__*/_jsx(PropertyOverrides,{breakpoint:baseVariant,overrides:{MRVCQVG2N:{__framer__styleAppearEffectEnabled:undefined,transformTemplate:transformTemplate1},xqcem8lts:{__framer__styleAppearEffectEnabled:undefined,transformTemplate:transformTemplate1}},children:/*#__PURE__*/_jsx(ContainerWithFX,{__framer__animate:{transition:transition1},__framer__animateOnce:false,__framer__scrollDirection:{direction:"down",target:animation},__framer__styleAppearEffectEnabled:true,__framer__threshold:.5,__perspectiveFX:false,__targetOpacity:1,className:"framer-16gkxtr-container",layoutScroll:true,transformTemplate:transformTemplate,children:/*#__PURE__*/_jsx(PropertyOverrides,{breakpoint:baseVariant,overrides:{MRVCQVG2N:{ALZ9lb7se:"SXVsIv8Is",c0j1IzVuD:"LV_tiQkPf",FPAFN8zto:"SXVsIv8Is",gUKNwvgnw:"SXVsIv8Is",Hz1S1UYo1:"SXVsIv8Is",variant:"Ef3JoPhg3",WGQh_bUle:"SXVsIv8Is"},xqcem8lts:{ALZ9lb7se:"SXVsIv8Is",c0j1IzVuD:"LV_tiQkPf",FPAFN8zto:"SXVsIv8Is",gUKNwvgnw:"SXVsIv8Is",Hz1S1UYo1:"SXVsIv8Is",variant:"Ef3JoPhg3",WGQh_bUle:"SXVsIv8Is"}},children:/*#__PURE__*/_jsx(NavigationNavbar,{ALZ9lb7se:"y52P5iTYu",c0j1IzVuD:"IzoPwElbx",FPAFN8zto:"y52P5iTYu",gUKNwvgnw:"y52P5iTYu",height:"100%",Hz1S1UYo1:"y52P5iTYu",id:"qdTIr3Tzz",layoutId:"qdTIr3Tzz",style:{width:"100%"},variant:"noUCCV746",WGQh_bUle:"y52P5iTYu",width:"100%"})})})}),/*#__PURE__*/_jsxs("div",{className:"framer-1w76axd","data-framer-name":"Sections",name:"Sections",children:[/*#__PURE__*/_jsxs("div",{className:"framer-16j99r6","data-framer-name":"Heading",name:"Heading",children:[/*#__PURE__*/_jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/_jsx(React.Fragment,{children:/*#__PURE__*/_jsx("h1",{className:"framer-styles-preset-xfk91q","data-styles-preset":"J9JehOXfs",style:{"--framer-text-alignment":"left","--framer-text-color":"var(--token-0eef268c-cc20-46f7-971d-6a56d5980be1, rgb(9, 10, 12))"},children:"Welcome to the TestCard Blog"})}),className:"framer-6dtv1a",verticalAlignment:"top",withExternalLayout:true}),/*#__PURE__*/_jsx(Container,{className:"framer-8ecwd0-container",children:/*#__PURE__*/_jsx(TextElementsHorizontalRule,{colour:"var(--token-0eef268c-cc20-46f7-971d-6a56d5980be1, rgb(9, 10, 12))",height:"100%",id:"Cp5t_unBC",layoutId:"Cp5t_unBC",style:{height:"100%",width:"100%"},variant:"uKsg6ffxk",width:"100%"})})]}),/*#__PURE__*/_jsx(Container,{className:"framer-1m3ws91-container",children:/*#__PURE__*/_jsx(BlogFilters,{baEOt7CzF:"Categories",height:"100%",id:"cQUPWdjxi",layoutId:"cQUPWdjxi",style:{width:"100%"},variant:"JIjN5eXsi",width:"100%"})}),/*#__PURE__*/_jsx(PropertyOverrides,{breakpoint:baseVariant,overrides:{MRVCQVG2N:{background:{alt:"",fit:"fill",intrinsicHeight:1620,intrinsicWidth:2880,pixelHeight:1620,pixelWidth:2880,sizes:"calc(min(100vw, 540px) - 32px)",src:"https://framerusercontent.com/images/A5GQfuIs6Wh6vJ96pNCG5bi8zOg.png",srcSet:"https://framerusercontent.com/images/A5GQfuIs6Wh6vJ96pNCG5bi8zOg.png?scale-down-to=512 512w, https://framerusercontent.com/images/A5GQfuIs6Wh6vJ96pNCG5bi8zOg.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/A5GQfuIs6Wh6vJ96pNCG5bi8zOg.png?scale-down-to=2048 2048w, https://framerusercontent.com/images/A5GQfuIs6Wh6vJ96pNCG5bi8zOg.png 2880w"}},xqcem8lts:{background:{alt:"",fit:"fill",intrinsicHeight:1620,intrinsicWidth:2880,pixelHeight:1620,pixelWidth:2880,sizes:"calc(min(100vw, 960px) - 48px)",src:"https://framerusercontent.com/images/A5GQfuIs6Wh6vJ96pNCG5bi8zOg.png",srcSet:"https://framerusercontent.com/images/A5GQfuIs6Wh6vJ96pNCG5bi8zOg.png?scale-down-to=512 512w, https://framerusercontent.com/images/A5GQfuIs6Wh6vJ96pNCG5bi8zOg.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/A5GQfuIs6Wh6vJ96pNCG5bi8zOg.png?scale-down-to=2048 2048w, https://framerusercontent.com/images/A5GQfuIs6Wh6vJ96pNCG5bi8zOg.png 2880w"}}},children:/*#__PURE__*/_jsx("div",{background:{alt:"",fit:"fill",intrinsicHeight:1620,intrinsicWidth:2880,pixelHeight:1620,pixelWidth:2880,sizes:"min(100vw, 1120px)",src:"https://framerusercontent.com/images/A5GQfuIs6Wh6vJ96pNCG5bi8zOg.png",srcSet:"https://framerusercontent.com/images/A5GQfuIs6Wh6vJ96pNCG5bi8zOg.png?scale-down-to=512 512w, https://framerusercontent.com/images/A5GQfuIs6Wh6vJ96pNCG5bi8zOg.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/A5GQfuIs6Wh6vJ96pNCG5bi8zOg.png?scale-down-to=2048 2048w, https://framerusercontent.com/images/A5GQfuIs6Wh6vJ96pNCG5bi8zOg.png 2880w"},className:"framer-17yemts","data-framer-name":"Hero",name:"Hero",children:/*#__PURE__*/_jsx("div",{className:"framer-1fdv6k3","data-framer-name":"Container",name:"Container",children:/*#__PURE__*/_jsx("div",{className:"framer-1c3gint","data-framer-name":"Featured",name:"Featured",children:/*#__PURE__*/_jsx("div",{className:"framer-x268wz","data-framer-name":"Latest Article",name:"Latest Article",children:/*#__PURE__*/_jsx(QueryData,{query:{from:{data:Blog,type:"Collection"},limit:{type:"LiteralValue",value:1},select:[{name:"wDEYtmRYU",type:"Identifier"},{name:"OiT4e5aSz",type:"Identifier"},{name:"QkImt0hPO",type:"Identifier"},{name:"RVXMLEhDi",type:"Identifier"},{name:"KaAiQ44Aj",type:"Identifier"},{name:"id",type:"Identifier"}]},children:collection=>collection.map(({wDEYtmRYU:wDEYtmRYUNVyxmClHe,OiT4e5aSz:OiT4e5aSzNVyxmClHe,QkImt0hPO:QkImt0hPONVyxmClHe,RVXMLEhDi:RVXMLEhDiNVyxmClHe,KaAiQ44Aj:KaAiQ44AjNVyxmClHe,id:idNVyxmClHe},i)=>/*#__PURE__*/_jsx(LayoutGroup,{id:`NVyxmClHe-${idNVyxmClHe}`,children:/*#__PURE__*/_jsx(PathVariablesContext.Provider,{value:{wDEYtmRYU:wDEYtmRYUNVyxmClHe},children:/*#__PURE__*/_jsx(Container,{className:"framer-1jff12u-container",children:/*#__PURE__*/_jsx(PropertyOverrides,{breakpoint:baseVariant,overrides:{MRVCQVG2N:{style:{width:"100%"},variant:"pC3wn4X2S"}},children:/*#__PURE__*/_jsx(BlogFeaturedArticle,{d6PTqDv5g:toResponsiveImage(OiT4e5aSzNVyxmClHe),FIBp3itFL:QkImt0hPONVyxmClHe,height:"100%",id:"b8NmUUsUh",layoutId:"b8NmUUsUh",mhKE53tTn:KaAiQ44AjNVyxmClHe,piAOccoLs:resolveLink({pathVariables:{wDEYtmRYU:wDEYtmRYUNVyxmClHe},webPageId:"asxNLoHzW"},router),style:{height:"100%",width:"100%"},variant:"B34zkjOAP",width:"100%",XaS7w9cKv:RVXMLEhDiNVyxmClHe})})})})},idNVyxmClHe))})})})})})}),/*#__PURE__*/_jsx("div",{className:"framer-1j5tclg","data-framer-name":"All Articles",name:"All Articles",children:/*#__PURE__*/_jsx("div",{className:"framer-no1io8","data-framer-name":"All Articles",name:"All Articles",children:/*#__PURE__*/_jsx(QueryData,{query:{from:{data:Blog,type:"Collection"},offset:{type:"LiteralValue",value:1},select:[{name:"wDEYtmRYU",type:"Identifier"},{name:"OiT4e5aSz",type:"Identifier"},{name:"a_wIc4j8L",type:"Identifier"},{name:"QkImt0hPO",type:"Identifier"},{name:"RVXMLEhDi",type:"Identifier"},{name:"id",type:"Identifier"}]},children:collection2=>collection2.map(({wDEYtmRYU:wDEYtmRYURbN2qvjhz,OiT4e5aSz:OiT4e5aSzRbN2qvjhz,a_wIc4j8L:a_wIc4j8LRbN2qvjhz,QkImt0hPO:QkImt0hPORbN2qvjhz,RVXMLEhDi:RVXMLEhDiRbN2qvjhz,id:idRbN2qvjhz},i)=>/*#__PURE__*/_jsx(LayoutGroup,{id:`RbN2qvjhz-${idRbN2qvjhz}`,children:/*#__PURE__*/_jsx(PathVariablesContext.Provider,{value:{wDEYtmRYU:wDEYtmRYURbN2qvjhz},children:/*#__PURE__*/_jsx(Link,{href:{pathVariables:{wDEYtmRYU:wDEYtmRYURbN2qvjhz},webPageId:"asxNLoHzW"},children:/*#__PURE__*/_jsxs("a",{className:"framer-14cllhb framer-1uh66hf","data-framer-name":"Blog Card",name:"Blog Card",children:[/*#__PURE__*/_jsxs("div",{className:"framer-wggveg","data-border":true,"data-framer-name":"Top",name:"Top",children:[/*#__PURE__*/_jsx(PropertyOverrides,{breakpoint:baseVariant,overrides:{MRVCQVG2N:{background:{alt:"",fit:"fill",intrinsicHeight:1037,intrinsicWidth:1163,pixelHeight:1037,pixelWidth:1163,sizes:"min(min(100vw, 540px) - 32px, 540px)",...toResponsiveImage(OiT4e5aSzRbN2qvjhz)}}},children:/*#__PURE__*/_jsx(Image,{background:{alt:"",fit:"fill",intrinsicHeight:1037,intrinsicWidth:1163,pixelHeight:1037,pixelWidth:1163,...toResponsiveImage(OiT4e5aSzRbN2qvjhz)},className:"framer-1aqntaa","data-framer-name":"Image",name:"Image"})}),/*#__PURE__*/_jsx("div",{className:"framer-1ytq6x4","data-framer-name":"Blog Category",name:"Blog Category",children:/*#__PURE__*/_jsx(QueryData,{query:{from:{data:BlogCategories,type:"Collection"},limit:{type:"LiteralValue",value:1},select:[{name:"SlttfO9MM",type:"Identifier"},{name:"cz7flEfsV",type:"Identifier"},{name:"id",type:"Identifier"}],where:{left:{name:"SlttfO9MM",type:"Identifier"},operator:"==",right:{type:"LiteralValue",value:a_wIc4j8LRbN2qvjhz},type:"BinaryOperation"}},children:collection1=>collection1.map(({SlttfO9MM:SlttfO9MMJlnyUQo6h,cz7flEfsV:cz7flEfsVJlnyUQo6h,id:idJlnyUQo6h},i)=>/*#__PURE__*/_jsx(LayoutGroup,{id:`JlnyUQo6h-${idJlnyUQo6h}`,children:/*#__PURE__*/_jsx(PathVariablesContext.Provider,{value:{cz7flEfsV:cz7flEfsVJlnyUQo6h},children:/*#__PURE__*/_jsx("div",{className:"framer-q71jmc","data-framer-name":"Tag",name:"Tag",children:/*#__PURE__*/_jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/_jsx(React.Fragment,{children:/*#__PURE__*/_jsx("h2",{className:"framer-styles-preset-155q2tn","data-styles-preset":"N8DTKq_C4",style:{"--framer-text-color":"var(--token-7f8e6694-a13c-412d-addc-e5a0a4b62326, rgb(255, 255, 255))"},children:"Diabetes"})}),className:"framer-14ro5ir","data-framer-name":"Blog Category",name:"Blog Category",text:SlttfO9MMJlnyUQo6h,verticalAlignment:"top",withExternalLayout:true})})})},idJlnyUQo6h))})})]}),/*#__PURE__*/_jsxs("div",{className:"framer-ahnp4f","data-framer-name":"Card Body",name:"Card Body",children:[/*#__PURE__*/_jsx("div",{className:"framer-ufi5e2","data-framer-name":"Content",name:"Content",children:/*#__PURE__*/_jsxs("div",{className:"framer-1m809lv","data-framer-name":"Text",name:"Text",children:[/*#__PURE__*/_jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/_jsx(React.Fragment,{children:/*#__PURE__*/_jsx("h4",{className:"framer-styles-preset-15ux4bw","data-styles-preset":"yreUs2sCT",style:{"--framer-text-color":"var(--token-0eef268c-cc20-46f7-971d-6a56d5980be1, rgb(9, 10, 12))"},children:"World Diabetes Day"})}),className:"framer-v3scyz",text:QkImt0hPORbN2qvjhz,verticalAlignment:"top",withExternalLayout:true}),/*#__PURE__*/_jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/_jsx(React.Fragment,{children:/*#__PURE__*/_jsx("p",{className:"framer-styles-preset-21ogod","data-styles-preset":"xZndidUCt",style:{"--framer-text-color":"var(--token-0eef268c-cc20-46f7-971d-6a56d5980be1, rgb(9, 10, 12))"},children:"Is your partner prone to UTIs? Are you looking for ways to support them?"})}),className:"framer-1sxqk7q",text:RVXMLEhDiRbN2qvjhz,verticalAlignment:"top",withExternalLayout:true})]})}),/*#__PURE__*/_jsxs("div",{className:"framer-w0msmd","data-framer-name":"Footer",name:"Footer",children:[/*#__PURE__*/_jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/_jsx(React.Fragment,{children:/*#__PURE__*/_jsx("p",{className:"framer-styles-preset-ravzn5","data-styles-preset":"q25tsjqS7",style:{"--framer-text-color":"var(--token-0eef268c-cc20-46f7-971d-6a56d5980be1, rgb(9, 10, 12))"},children:"Read "})}),className:"framer-1273kgc",verticalAlignment:"top",withExternalLayout:true}),/*#__PURE__*/_jsx(PropertyOverrides,{breakpoint:baseVariant,overrides:{MRVCQVG2N:{children:/*#__PURE__*/_jsx(React.Fragment,{children:/*#__PURE__*/_jsx("p",{style:{"--font-selector":"Q1VTVE9NO0ZvbnQgQXdlc29tZSA2IFBybyBMaWdodA==","--framer-font-family":'"Font Awesome 6 Pro Light", sans-serif',"--framer-font-size":"18px","--framer-line-height":"100%","--framer-text-alignment":"right","--framer-text-color":"var(--token-0eef268c-cc20-46f7-971d-6a56d5980be1, rgb(9, 10, 12))"},children:""})})},xqcem8lts:{children:/*#__PURE__*/_jsx(React.Fragment,{children:/*#__PURE__*/_jsx("p",{style:{"--font-selector":"Q1VTVE9NO0ZvbnQgQXdlc29tZSA2IFBybyBMaWdodA==","--framer-font-family":'"Font Awesome 6 Pro Light", sans-serif',"--framer-font-size":"18px","--framer-line-height":"100%","--framer-text-alignment":"right","--framer-text-color":"var(--token-0eef268c-cc20-46f7-971d-6a56d5980be1, rgb(9, 10, 12))"},children:""})})}},children:/*#__PURE__*/_jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/_jsx(React.Fragment,{children:/*#__PURE__*/_jsx("p",{style:{"--font-selector":"Q1VTVE9NO0ZvbnQgQXdlc29tZSA2IFBybyBMaWdodA==","--framer-font-family":'"Font Awesome 6 Pro Light", sans-serif',"--framer-font-size":"24px","--framer-line-height":"100%","--framer-text-alignment":"right","--framer-text-color":"var(--token-0eef268c-cc20-46f7-971d-6a56d5980be1, rgb(9, 10, 12))"},children:""})}),className:"framer-1dzrici",fonts:["CUSTOM;Font Awesome 6 Pro Light"],verticalAlignment:"top",withExternalLayout:true})})]})]})]})})})},idRbN2qvjhz))})})})]}),/*#__PURE__*/_jsx(Container,{className:"framer-1slts4i-container",children:/*#__PURE__*/_jsx(PropertyOverrides,{breakpoint:baseVariant,overrides:{MRVCQVG2N:{variant:"HriCB6SAc"},xqcem8lts:{variant:"vrnlHvyKD"}},children:/*#__PURE__*/_jsx(FooterFooterDark,{height:"100%",id:"bUYDkwXSr",layoutId:"bUYDkwXSr",style:{width:"100%"},variant:"xy5tmqfDJ",width:"100%"})})})]}),/*#__PURE__*/_jsx("div",{id:"overlay"})]})})});});const css=['.framer-yPLI2 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",`.${metadata.bodyClassName}-framer-yPLI2 { background: var(--token-f680b2ff-ea8c-4310-a29d-0ba30f483143, rgb(247, 248, 249)); }`,".framer-yPLI2 .framer-1uh66hf { display: block; }",".framer-yPLI2 .framer-hh1hne { align-content: center; align-items: center; background-color: var(--token-f680b2ff-ea8c-4310-a29d-0ba30f483143, #f7f8f9); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1400px; }",".framer-yPLI2 .framer-16gkxtr-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: perspective(1200px) translateX(-50%); width: 1400px; z-index: 1; }",".framer-yPLI2 .framer-1w76axd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; max-width: 1120px; overflow: hidden; padding: 144px 0px 0px 0px; position: relative; width: 100%; }",".framer-yPLI2 .framer-16j99r6 { align-content: start; align-items: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",".framer-yPLI2 .framer-6dtv1a, .framer-yPLI2 .framer-v3scyz, .framer-yPLI2 .framer-1sxqk7q { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",".framer-yPLI2 .framer-8ecwd0-container { flex: none; height: 4px; position: relative; width: 48px; }",".framer-yPLI2 .framer-1m3ws91-container, .framer-yPLI2 .framer-1slts4i-container { flex: none; height: auto; position: relative; width: 100%; }",".framer-yPLI2 .framer-17yemts { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",".framer-yPLI2 .framer-1fdv6k3 { align-content: start; align-items: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 1120px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",".framer-yPLI2 .framer-1c3gint { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",".framer-yPLI2 .framer-x268wz { align-content: start; align-items: start; box-shadow: 0px 0.6021873017743928px 3.010936508871964px 0px rgba(0, 0, 0, 0), 0px 2.288533303243457px 11.442666516217285px 0px rgba(0, 0, 0, 0.01144), 0px 10px 50px 0px rgba(0, 0, 0, 0.05); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",".framer-yPLI2 .framer-1jff12u-container { flex: none; height: 560px; position: relative; width: 1120px; }",".framer-yPLI2 .framer-1j5tclg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",".framer-yPLI2 .framer-no1io8 { display: grid; flex: none; gap: 24px; grid-auto-rows: min-content; grid-template-columns: repeat(auto-fill, minmax(370px, 1fr)); height: min-content; justify-content: start; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",".framer-yPLI2 .framer-14cllhb { align-self: start; aspect-ratio: 1 / 1; background-color: #ffffff; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; box-shadow: 0px 0.6021873017743928px 3.010936508871964px 0px rgba(0, 0, 0, 0), 0px 2.288533303243457px 11.442666516217285px 0px rgba(0, 0, 0, 0.01144), 0px 10px 50px 0px rgba(0, 0, 0, 0.05); display: grid; flex: none; gap: 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(1, minmax(200px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: var(--framer-aspect-ratio-supported, 200px); justify-content: center; justify-self: start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: 100%; will-change: var(--framer-will-change-override, transform); }",".framer-yPLI2 .framer-wggveg { --border-bottom-width: 2px; --border-color: var(--token-0eef268c-cc20-46f7-971d-6a56d5980be1, #090a0c); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-self: start; flex: none; height: 100%; justify-self: start; overflow: hidden; position: relative; width: 100%; }",".framer-yPLI2 .framer-1aqntaa { flex: none; height: 100%; left: 0px; overflow: hidden; position: absolute; top: 0px; width: 100%; }",".framer-yPLI2 .framer-1ytq6x4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 0px; padding: 0px 0px 0px 0px; position: absolute; top: 226px; width: min-content; }",".framer-yPLI2 .framer-q71jmc { align-content: center; align-items: center; background-color: var(--token-0eef268c-cc20-46f7-971d-6a56d5980be1, #090a0c); border-top-right-radius: 4px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 12px 8px 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",".framer-yPLI2 .framer-14ro5ir { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",".framer-yPLI2 .framer-ahnp4f { align-content: start; align-items: start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; justify-self: start; overflow: visible; padding: 32px 32px 32px 32px; position: relative; width: 100%; }",".framer-yPLI2 .framer-ufi5e2 { align-content: start; align-items: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",".framer-yPLI2 .framer-1m809lv { align-content: start; align-items: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",".framer-yPLI2 .framer-w0msmd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",".framer-yPLI2 .framer-1273kgc, .framer-yPLI2 .framer-1dzrici { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }","@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-yPLI2 .framer-hh1hne, .framer-yPLI2 .framer-1w76axd, .framer-yPLI2 .framer-16j99r6, .framer-yPLI2 .framer-17yemts, .framer-yPLI2 .framer-1fdv6k3, .framer-yPLI2 .framer-1c3gint, .framer-yPLI2 .framer-x268wz, .framer-yPLI2 .framer-1j5tclg, .framer-yPLI2 .framer-1ytq6x4, .framer-yPLI2 .framer-q71jmc, .framer-yPLI2 .framer-ufi5e2, .framer-yPLI2 .framer-1m809lv, .framer-yPLI2 .framer-w0msmd { gap: 0px; } .framer-yPLI2 .framer-hh1hne > * { margin: 0px; margin-bottom: calc(64px / 2); margin-top: calc(64px / 2); } .framer-yPLI2 .framer-hh1hne > :first-child, .framer-yPLI2 .framer-1w76axd > :first-child, .framer-yPLI2 .framer-16j99r6 > :first-child, .framer-yPLI2 .framer-17yemts > :first-child, .framer-yPLI2 .framer-1fdv6k3 > :first-child, .framer-yPLI2 .framer-x268wz > :first-child, .framer-yPLI2 .framer-1j5tclg > :first-child, .framer-yPLI2 .framer-1ytq6x4 > :first-child, .framer-yPLI2 .framer-q71jmc > :first-child, .framer-yPLI2 .framer-ufi5e2 > :first-child, .framer-yPLI2 .framer-1m809lv > :first-child { margin-top: 0px; } .framer-yPLI2 .framer-hh1hne > :last-child, .framer-yPLI2 .framer-1w76axd > :last-child, .framer-yPLI2 .framer-16j99r6 > :last-child, .framer-yPLI2 .framer-17yemts > :last-child, .framer-yPLI2 .framer-1fdv6k3 > :last-child, .framer-yPLI2 .framer-x268wz > :last-child, .framer-yPLI2 .framer-1j5tclg > :last-child, .framer-yPLI2 .framer-1ytq6x4 > :last-child, .framer-yPLI2 .framer-q71jmc > :last-child, .framer-yPLI2 .framer-ufi5e2 > :last-child, .framer-yPLI2 .framer-1m809lv > :last-child { margin-bottom: 0px; } .framer-yPLI2 .framer-1w76axd > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-yPLI2 .framer-16j99r6 > *, .framer-yPLI2 .framer-1fdv6k3 > *, .framer-yPLI2 .framer-1j5tclg > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-yPLI2 .framer-17yemts > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-yPLI2 .framer-1c3gint > *, .framer-yPLI2 .framer-w0msmd > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-yPLI2 .framer-1c3gint > :first-child, .framer-yPLI2 .framer-w0msmd > :first-child { margin-left: 0px; } .framer-yPLI2 .framer-1c3gint > :last-child, .framer-yPLI2 .framer-w0msmd > :last-child { margin-right: 0px; } .framer-yPLI2 .framer-x268wz > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-yPLI2 .framer-1ytq6x4 > *, .framer-yPLI2 .framer-q71jmc > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-yPLI2 .framer-ufi5e2 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-yPLI2 .framer-1m809lv > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } }","@media (min-width: 1400px) { .framer-yPLI2 .hidden-hh1hne { display: none !important; } }",`@media (min-width: 768px) and (max-width: 1399px) { .framer-yPLI2 .hidden-2tf5os { display: none !important; } .${metadata.bodyClassName}-framer-yPLI2 { background: var(--token-f680b2ff-ea8c-4310-a29d-0ba30f483143, rgb(247, 248, 249)); } .framer-yPLI2 .framer-hh1hne { width: 768px; } .framer-yPLI2 .framer-16gkxtr-container { transform: translateX(-50%); width: 100%; } .framer-yPLI2 .framer-1w76axd { max-width: 960px; padding: 112px 24px 0px 24px; } .framer-yPLI2 .framer-1fdv6k3, .framer-yPLI2 .framer-1j5tclg { max-width: 960px; } .framer-yPLI2 .framer-1jff12u-container { aspect-ratio: 1.7777777777777777 / 1; height: var(--framer-aspect-ratio-supported, 113px); width: 100%; } .framer-yPLI2 .framer-no1io8 { grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); } .framer-yPLI2 .framer-14cllhb { align-content: start; align-items: start; aspect-ratio: unset; display: flex; flex-direction: column; flex-wrap: nowrap; height: 422px; justify-content: flex-start; min-height: 422px; } .framer-yPLI2 .framer-wggveg { align-self: unset; flex: 1 0 0px; height: 1px; } .framer-yPLI2 .framer-1ytq6x4 { top: 163px; } .framer-yPLI2 .framer-ahnp4f { align-self: unset; flex: 1 0 0px; height: 1px; padding: 16px 16px 16px 16px; } .framer-yPLI2 .framer-1sxqk7q { height: 48px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-yPLI2 .framer-14cllhb { gap: 0px; } .framer-yPLI2 .framer-14cllhb > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-yPLI2 .framer-14cllhb > :first-child { margin-top: 0px; } .framer-yPLI2 .framer-14cllhb > :last-child { margin-bottom: 0px; } }}`,`@media (max-width: 767px) { .framer-yPLI2 .hidden-66tnyg { display: none !important; } .${metadata.bodyClassName}-framer-yPLI2 { background: var(--token-f680b2ff-ea8c-4310-a29d-0ba30f483143, rgb(247, 248, 249)); } .framer-yPLI2 .framer-hh1hne { gap: 32px; width: 375px; } .framer-yPLI2 .framer-16gkxtr-container { transform: translateX(-50%); width: 100%; } .framer-yPLI2 .framer-1w76axd { gap: 32px; max-width: 540px; padding: 96px 16px 0px 16px; } .framer-yPLI2 .framer-1fdv6k3, .framer-yPLI2 .framer-1j5tclg { max-width: 540px; } .framer-yPLI2 .framer-1jff12u-container { height: auto; width: 100%; } .framer-yPLI2 .framer-no1io8 { align-content: start; align-items: start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; justify-content: flex-start; } .framer-yPLI2 .framer-14cllhb { align-content: start; align-items: start; align-self: unset; aspect-ratio: unset; display: flex; flex-direction: column; flex-wrap: nowrap; height: min-content; justify-content: flex-start; } .framer-yPLI2 .framer-wggveg { align-self: unset; aspect-ratio: 1.7772020725388602 / 1; height: var(--framer-aspect-ratio-supported, 113px); } .framer-yPLI2 .framer-1aqntaa { aspect-ratio: 1.7772020725388602 / 1; height: var(--framer-aspect-ratio-supported, 113px); } .framer-yPLI2 .framer-1ytq6x4 { bottom: 0px; top: unset; } .framer-yPLI2 .framer-ahnp4f { align-self: unset; gap: 32px; height: auto; justify-content: center; padding: 16px 16px 16px 16px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-yPLI2 .framer-hh1hne, .framer-yPLI2 .framer-1w76axd, .framer-yPLI2 .framer-no1io8, .framer-yPLI2 .framer-14cllhb, .framer-yPLI2 .framer-ahnp4f { gap: 0px; } .framer-yPLI2 .framer-hh1hne > *, .framer-yPLI2 .framer-1w76axd > *, .framer-yPLI2 .framer-ahnp4f > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-yPLI2 .framer-hh1hne > :first-child, .framer-yPLI2 .framer-1w76axd > :first-child, .framer-yPLI2 .framer-no1io8 > :first-child, .framer-yPLI2 .framer-14cllhb > :first-child, .framer-yPLI2 .framer-ahnp4f > :first-child { margin-top: 0px; } .framer-yPLI2 .framer-hh1hne > :last-child, .framer-yPLI2 .framer-1w76axd > :last-child, .framer-yPLI2 .framer-no1io8 > :last-child, .framer-yPLI2 .framer-14cllhb > :last-child, .framer-yPLI2 .framer-ahnp4f > :last-child { margin-bottom: 0px; } .framer-yPLI2 .framer-no1io8 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-yPLI2 .framer-14cllhb > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }}`,...sharedStyle.css,...sharedStyle1.css,...sharedStyle2.css,...sharedStyle3.css,...sharedStyle4.css];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 9903
 * @framerIntrinsicWidth 1400
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"xqcem8lts":{"layout":["fixed","auto"]},"MRVCQVG2N":{"layout":["fixed","auto"]}}}
 * @framerImmutableVariables true
 * @framerResponsiveScreen
 */const FramerM81GEfmDX=withCSS(Component,css,"framer-yPLI2");export default FramerM81GEfmDX;FramerM81GEfmDX.displayName="Blog";FramerM81GEfmDX.defaultProps={height:9903,width:1400};addFonts(FramerM81GEfmDX,[{family:"Font Awesome 6 Pro Light",url:"https://framerusercontent.com/assets/3vdgiVN1MozNz2KyubkAGiGUes0.woff2"},...NavigationNavbarFonts,...TextElementsHorizontalRuleFonts,...BlogFiltersFonts,...BlogFeaturedArticleFonts,...FooterFooterDarkFonts,...sharedStyle.fonts,...sharedStyle1.fonts,...sharedStyle2.fonts,...sharedStyle3.fonts,...sharedStyle4.fonts]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramerM81GEfmDX","slots":[],"annotations":{"framerIntrinsicWidth":"1400","framerContractVersion":"1","framerImmutableVariables":"true","framerIntrinsicHeight":"9903","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"fixed\",\"auto\"]},\"xqcem8lts\":{\"layout\":[\"fixed\",\"auto\"]},\"MRVCQVG2N\":{\"layout\":[\"fixed\",\"auto\"]}}}","framerResponsiveScreen":""}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}