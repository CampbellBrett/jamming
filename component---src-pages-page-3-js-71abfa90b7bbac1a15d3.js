(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{193:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(195),s=a(203),d=a(201),o=a(204),l=a(207);a(197);t.default=function(){return i.a.createElement(s.a,null,i.a.createElement(o.a,null),i.a.createElement("div",{style:{textAlign:"center",color:"white",display:"flex",justifyContent:"center",height:"100vh",alignItems:"center"}},i.a.createElement("div",null,i.a.createElement(d.a,{title:"page 2"}),i.a.createElement("p",{style:{color:"#506EDC",fontWeight:"bold"}},"This is page 2."),i.a.createElement(n.a,{to:"/",style:{color:"grey"}},"Go back to the homepage"),i.a.createElement("div",{style:{display:"flex",textAlign:"center",paddingLeft:"20px",width:"100%"}},i.a.createElement(l.a,null)))))}},195:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var r=a(0),i=a.n(r),n=a(66),s=a.n(n);a.d(t,"a",function(){return s.a});a(196),a(9).default.enqueue;var d=i.a.createContext({});function o(e){var t=e.staticQueryData,a=e.data,r=e.query,n=e.render,s=a?a.data:t[r]&&t[r].data;return i.a.createElement(i.a.Fragment,null,s&&n(s),!s&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(e){var t=e.data,a=e.query,r=e.render,n=e.children;return i.a.createElement(d.Consumer,null,function(e){return i.a.createElement(o,{data:t,query:a,render:r||n,staticQueryData:e})})}},196:function(e,t,a){var r;e.exports=(r=a(200))&&r.default||r},197:function(e,t,a){"use strict";a(29),a(30),a(13),a(91),a(132),a(198);var r=a(14);t.__esModule=!0,t.default=void 0;var i,n=r(a(68)),s=r(a(69)),d=r(a(133)),o=r(a(134)),l=r(a(0)),c=r(a(51)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=u(e),a=f(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function v(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function E(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})})}function A(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?A(e,!0):"")+A(e)}).join("")+"<img "+l+s+d+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=l.default.createElement(V,(0,o.default)({src:t},i));return a.length>1?l.default.createElement("picture",null,r(a),n):n},V=l.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});V.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&b&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,d=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,A=e.loading,L=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,o.default)({opacity:R?1:0,transition:O?"opacity "+b+"ms":"none"},d),C="boolean"==typeof h?"lightgray":h,z={transitionDelay:b+"ms"},T=(0,o.default)({opacity:this.state.imgLoaded?0:1},O&&z,d,f),k={title:t,alt:this.state.isVisible?"":a,style:T,className:g};if(p){var U=p,B=U[0];return l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(B.srcSet)},l.default.createElement(y,{style:{width:"100%",paddingBottom:100/B.aspectRatio+"%"}}),C&&l.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&z)}),B.base64&&l.default.createElement(I,{src:B.base64,spreadProps:k,imageVariants:U,generateSources:w}),B.tracedSVG&&l.default.createElement(I,{src:B.tracedSVG,spreadProps:k,imageVariants:U,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,S(U),l.default.createElement(V,{alt:a,title:t,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:A,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)({alt:a,title:t,loading:A},B,{imageVariants:U}))}}))}if(m){var q=m,N=q[0],W=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},n);return"inherit"===n.display&&delete W.display,l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},C&&l.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:C,width:N.width,opacity:this.state.imgLoaded?0:1,height:N.height},O&&z)}),N.base64&&l.default.createElement(I,{src:N.base64,spreadProps:k,imageVariants:q,generateSources:w}),N.tracedSVG&&l.default.createElement(I,{src:N.tracedSVG,spreadProps:k,imageVariants:q,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,S(q),l.default.createElement(V,{alt:a,title:t,width:N.width,height:N.height,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:A,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)({alt:a,title:t,loading:A},N,{imageVariants:q}))}}))}return null},t}(l.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),j=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});R.propTypes={resolutions:O,sizes:j,fixed:c.default.oneOfType([O,c.default.arrayOf(O)]),fluid:c.default.oneOfType([j,c.default.arrayOf(j)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var C=R;t.default=C},198:function(e,t,a){"use strict";a(206)("fixed",function(e){return function(){return e(this,"tt","","")}})},199:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},200:function(e,t,a){"use strict";a.r(t);a(23);var r=a(0),i=a.n(r),n=a(92);t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null}},201:function(e,t,a){"use strict";var r=a(202),i=a(0),n=a.n(i),s=a(210),d=a.n(s);function o(e){var t=e.description,a=e.lang,i=e.meta,s=e.title,o=r.data.site,l=t||o.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(i)})}o.defaultProps={lang:"en",meta:[],description:""},t.a=o},202:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},203:function(e,t,a){"use strict";var r=a(199),i=a(0),n=a.n(i),s=a(195),d=function(e){var t=e.siteTitle;return n.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},n.a.createElement("h1",{style:{margin:0}},n.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};d.defaultProps={siteTitle:""};a(209),t.a=function(e){var t=e.children;return n.a.createElement(s.b,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{margin:"0 auto",maxWidth:"100vw",paddingTop:0}},n.a.createElement("main",null,t)))},data:r})}},204:function(e,t,a){"use strict";var r=a(205),i=a(0),n=a.n(i),s=a(195),d=a(197),o=a.n(d);t.a=function(){return n.a.createElement("div",{style:{position:"relative",zIndex:"-1"}},n.a.createElement(s.b,{query:"571726591",render:function(e){return n.a.createElement(o.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:r}))}},205:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACRklEQVQ4y4WSXXPSQBiFd5yqF3pXspuEj4KBkITP1nH0hzhOKxQrxbYUkCrlS1oKltaffXx3d4hBLnpxJld55jnnXVZgC3hshBy7QsBu4D2fwI59RDz2CYnYIZKxz5QaUsYx9owvSBtfkTGalBbeGGdwjHO4Vhc53qH0wHwCeM9GBJ0QcIZg5xaJ3cMQlorVCdSIwE4J9E3D+AWy/BKu2YPLZfpgLpn57BeKbEVZwN+ZEuxIW8WOFSxtnGgYb8ER58oqy9sKluNdZZYXV/DMAZiqybRlid0j+6qHJD8iWGO7Il9btcOK0irPJewaQXwKJiFl9qhg+ZejSMWTjYoOJzNl1VZWbgj7AU8M4Itr+HwI5r0gOwI5ry9p+HqkYnMDFq3o8u8aJtawIQIxRkFMwJJyL4P24jVVc+uKGxVpL0ObeXygjDwuzUYEm6JoziSwRsA6UrsNOGaLhj9VMF3xImLVQ2ANsJ+aoZKY4n36AR8yf/B2b4lqYo6SeUOZg2XFGYrxIf14AT/VgWd31RUdQ8I6YUV5RQks2mPKBCV7irJN8PgcFXuOskUx78AOMkO8c2aopocoJPo4yExRSY/g2/3I8HRF8TOs6dNeAVUsCHpuYkbgJcEWqJi/wTK8qWrK95UzyUjoh5o3JWjzioEYUSYaRHuVzFvKHarxFSrWParmCkxd0Vg/ic6TV9QwvVfZklZLZVY1H7BvPYL9G/6/h0oV1dtSVmN9RapXVFbzsKK0qloaJqFs6209UVEOXw6tVqGZ/Mr8BRsw0rWB4CsdAAAAAElFTkSuQmCC",aspectRatio:1.4496717724288841,src:"/jamming/static/49dd0a96d56a2f6c95aac03600f01d55/67d8d/hero-bg.png",srcSet:"/jamming/static/49dd0a96d56a2f6c95aac03600f01d55/3ec5e/hero-bg.png 325w,\n/jamming/static/49dd0a96d56a2f6c95aac03600f01d55/9b0e0/hero-bg.png 650w,\n/jamming/static/49dd0a96d56a2f6c95aac03600f01d55/67d8d/hero-bg.png 1300w,\n/jamming/static/49dd0a96d56a2f6c95aac03600f01d55/341ac/hero-bg.png 1950w,\n/jamming/static/49dd0a96d56a2f6c95aac03600f01d55/03047/hero-bg.png 2600w,\n/jamming/static/49dd0a96d56a2f6c95aac03600f01d55/e14b7/hero-bg.png 2650w",sizes:"(max-width: 1300px) 100vw, 1300px"}}}}}},206:function(e,t,a){var r=a(1),i=a(7),n=a(31),s=/"/g,d=function(e,t,a,r){var i=String(n(e)),d="<"+t;return""!==a&&(d+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),d+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(d),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},207:function(e,t,a){"use strict";a(198);var r=a(208),i=a(0),n=a.n(i),s=a(195),d=a(197),o=a.n(d);t.a=function(){return n.a.createElement(s.b,{query:"2614720451",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{fixed:e.placeholderImage.childImageSharp.fixed}))},data:r})}},208:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACDElEQVQ4y42UwUsVURSH33M0N4HovFZSaJBBBUUt6mHzFI02QUStotqURbQwaNeiXeSmVUL43lOzNhpkRERQIC7qr4haRLUNJIoW0vSd8Rw7c32TDnzcM+fe+5tzz5xzS6WCJ04apZ7jdbPL0CY+mzN7S4/fiGhkfrH93JaEfFTOvw+OuPc2/UCxcHCcdmffgZ+wCvehU+faN43WT2B3QBLXZtK4Np1ip/HQYxnPm+imYu645+ArTOP7boLYEulL+AKXLS0tRS0vjAfjpJlWRuZFZBFeZIK1WXlfhreV4SdpFnnSOOb35h6+bokeFEHGPyz8DNdgEqZgHD5kx19bM+r3hhFa+Lvg044TixLBrNjwC1bgm0RdGVmQuY/QH1ZEEOW6aAwP4B5fX1nLYRbRb3x1uAs9Gl2RWL0ULmDTTviR5WxoTqKSNBx2e8p+b1ENSptFLLJaPACv4b39BO2YctiG2ejLpTD8/EnKJhLU7caFvs1gG+yHQ3ox7IVqi5/ZuSFCV4Nn4A08h9uwpO9X4ZVyS9f2QpeOUXhkE3xqlwDjHrgJl7QOj6r/nUYv3XQdTsZJvaMowjF4Bo+0Z8d10+msY5JGEyZgAK7ADTiLYJTLoxhd1Ydmn4KLavfBbue/oJdGrDmVJtie62lTrdSauXrqrk79S3yr1vrPTRXWofzRyNWkfd371+fCOvwLjS0o5c7j02AAAAAASUVORK5CYII=",width:160,height:160,src:"/jamming/static/61c0ddf27d3f0d2a8df0856bcb7d09a9/6cb10/cto-full-flat-blue-stack.png",srcSet:"/jamming/static/61c0ddf27d3f0d2a8df0856bcb7d09a9/6cb10/cto-full-flat-blue-stack.png 1x,\n/jamming/static/61c0ddf27d3f0d2a8df0856bcb7d09a9/698a6/cto-full-flat-blue-stack.png 1.5x,\n/jamming/static/61c0ddf27d3f0d2a8df0856bcb7d09a9/70e81/cto-full-flat-blue-stack.png 2x"}}}}}}}]);
//# sourceMappingURL=component---src-pages-page-3-js-71abfa90b7bbac1a15d3.js.map