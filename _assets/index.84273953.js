let e=document.createElement("style");e.innerHTML=".account-setting{margin:12px;background:#fff}.account-setting .base-title{padding-left:0}.account-setting .ant-tabs-tab-active{background-color:#e6f7ff}",document.head.appendChild(e);import{a as t,i,o as s,j as a,w as r,k as o,ad as n,aH as p,cW as m}from"./index.741c7e80.js";import"./xlsx.a48e520c.js";import"./index.0140268b.js";import"./Trigger.9624f24b.js";import"./omit.2ac92ce2.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.2d33f44f.js";import"./CheckOutlined.fa54ab74.js";import"./index.e028f2ec.js";import"./colors.11c2fe2a.js";import"./RightOutlined.346767f2.js";import"./types.3a4c305e.js";import"./index.b7622738.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.2638ac3e.js";import"./_baseFor.f4e5f03f.js";import"./index.b89b2489.js";import"./index.a172b251.js";import"./index.dd15aaf5.js";import"./index.71d835da.js";import{T as d}from"./index.76ca49a2.js";import"./UpOutlined.8fbbe575.js";import"./LeftOutlined.3bbf91ca.js";import"./index.fe81ccfa.js";import"./index.b3c5c07d.js";import"./index.ced671f3.js";import"./index.fce9afc1.js";import"./zh_CN.0242bd16.js";import"./index.6d596f56.js";import"./index.fe07bf52.js";import"./index.03e0e622.js";import"./FileOutlined.1226a997.js";import"./useDebounce.87ee1be2.js";import"./useEventListener.3f9fc979.js";import"./useBreakpoint.7d12f99a.js";import{S as c}from"./index.8390a561.js";import"./header.0299ae16.js";import"./index.504b6a3c.js";import"./tsxHelper.1229783e.js";import"./index.266c5a87.js";import"./index.58cbc055.js";import"./useForm.8e6b95f4.js";import{s as f}from"./data.8adaf682.js";import j from"./AccountBind.27a2ee68.js";import b from"./BaseSetting.f2724563.js";import l from"./SecureSetting.4cf28bba.js";import u from"./MsgNotify.eed72cb4.js";var x=t({components:{ScrollContainer:c,Tabs:d,TabPane:d.TabPane,BaseSetting:b,SecureSetting:l,AccountBind:j,MsgNotify:u},setup:()=>({prefixCls:"account-setting",settingList:f,tabBarStyle:{width:"220px"}})});x.render=function(e,t,d,c,f,j){const b=i("TabPane"),l=i("Tabs"),u=i("ScrollContainer");return s(),a(u,null,{default:r((()=>[o("div",{ref:"wrapperRef",class:e.prefixCls},[o(l,{"tab-position":"left",tabBarStyle:e.tabBarStyle},{default:r((()=>[(s(!0),a(n,null,p(e.settingList,(e=>(s(),a(b,{key:e.key,tab:e.name},{default:r((()=>[(s(),a(m(e.component)))])),_:2},1032,["tab"])))),128))])),_:1},8,["tabBarStyle"])],2)])),_:1})};export default x;