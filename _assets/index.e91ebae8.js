import{a as t,P as e,_ as a,I as r,M as s,F as i,$ as n,k as o,L as c,am as l}from"./index.741c7e80.js";function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t}).apply(this,arguments)}function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function h(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!c(t)}var u=l(t({name:"AAvatar",props:{prefixCls:e.string,shape:e.oneOf(a("circle","square")),size:{type:[Number,String],default:"default"},src:e.string,srcset:e.string,srcSet:e.string,icon:e.VNodeChild,alt:e.string,loadError:{type:Function}},setup:function(){return{configProvider:r("configProvider",s)}},data:function(){return{isImgExist:!0,isMounted:!1,scale:1,lastChildrenWidth:void 0,lastNodeWidth:void 0}},watch:{src:function(){var t=this;i((function(){t.isImgExist=!0,t.scale=1,t.$forceUpdate()}))}},mounted:function(){var t=this;i((function(){t.setScale(),t.isMounted=!0}))},updated:function(){var t=this;i((function(){t.setScale()}))},methods:{setScale:function(){if(this.$refs.avatarChildren&&this.$refs.avatarNode){var t=this.$refs.avatarChildren.offsetWidth,e=this.$refs.avatarNode.offsetWidth;0===t||0===e||this.lastChildrenWidth===t&&this.lastNodeWidth===e||(this.lastChildrenWidth=t,this.lastNodeWidth=e,this.scale=e-8<t?(e-8)/t:1)}},handleImgLoadError:function(){var t=this.$props.loadError;!1!==(t?t():void 0)&&(this.isImgExist=!1)}},render:function(){var t,e,a,r,s=this.$props,i=s.prefixCls,c=s.shape,l=s.size,u=s.src,p=s.alt,v=s.srcset,g=s.srcSet,m=n(this,"icon"),x=(0,this.configProvider.getPrefixCls)("avatar",i),y=this.$data,b=y.isImgExist,C=y.scale,$=(y.isMounted,d(t={},"".concat(x,"-lg"),"large"===l),d(t,"".concat(x,"-sm"),"small"===l),t),E=f(f(d({},x,!0),$),(d(e={},"".concat(x,"-").concat(c),c),d(e,"".concat(x,"-image"),u&&b),d(e,"".concat(x,"-icon"),m),e)),W="number"==typeof l?{width:"".concat(l,"px"),height:"".concat(l,"px"),lineHeight:"".concat(l,"px"),fontSize:m?"".concat(l/2,"px"):"18px"}:{},N=null===(r=(a=this.$slots).default)||void 0===r?void 0:r.call(a);if(u&&b)N=o("img",{src:u,srcset:v||g,onError:this.handleImgLoadError,alt:p},null);else if(m)N=m;else{if(this.$refs.avatarChildren||1!==C){var S="scale(".concat(C,") translateX(-50%)"),j={msTransform:S,WebkitTransform:S,transform:S},I="number"==typeof l?{lineHeight:"".concat(l,"px")}:{},O=N;N=o("span",{class:"".concat(x,"-string"),ref:"avatarChildren",style:f(f({},I),j)},h(N)?N:{default:function(){return[O]}})}else{var P=N;N=o("span",{class:"".concat(x,"-string"),ref:"avatarChildren",style:{opacity:0}},h(N)?N:{default:function(){return[P]}})}}return o("span",{ref:"avatarNode",class:E,style:W},h(N)?N:{default:function(){return[N]}})}}));export{u as A};