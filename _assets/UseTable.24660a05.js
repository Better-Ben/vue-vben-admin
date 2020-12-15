import{a as e,h as t,i,o,j as s,k as n,w as a,p as c}from"./index.acbb87a5.js";import"./xlsx.a48e520c.js";import"./index.005d8637.js";import"./index.43cfa9a0.js";import"./Trigger.7e5aa3a2.js";import"./omit.e88f0464.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d8f26848.js";import"./CheckOutlined.3360de48.js";import"./index.9799a881.js";import"./colors.4e87fc28.js";import"./index.e51afa00.js";import"./RightOutlined.31cb4cc9.js";import"./index.4bc096ce.js";import"./types.1d435903.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.67f16270.js";import"./_baseFor.f4e5f03f.js";import"./index.1b763d8a.js";import"./index.a172b251.js";import"./index.428f9fc4.js";import"./index.6bcb6667.js";import"./UpOutlined.58a09ac3.js";import"./LeftOutlined.258c5f05.js";import"./index.f39ff197.js";import"./index.687a618a.js";import"./index.8eebb15a.js";import"./index.6ed5ccd9.js";import"./index.2d8f1145.js";import"./zh_CN.0242bd16.js";import"./TableAction.cfd8ad49.js";import"./index.cb9a9fbb.js";import"./CaretDownFilled.146c316e.js";import"./CheckOutlined.39e044e3.js";import"./CloseOutlined.c0e09c7a.js";import{s as l}from"./EditTableHeaderIcon.b9c127db.js";import"./DownOutlined.f6157dc5.js";import"./FullscreenOutlined.69bc28f3.js";import"./LeftOutlined.e2617435.js";import"./functional.cca96ab1.js";import"./RedoOutlined.c5f7fe05.js";import"./RightOutlined.0108934f.js";import"./SettingOutlined.05c63235.js";import"./useTimeout.4044af85.js";import"./useDebounce.c071ec0c.js";import"./useEventListener.e7c114de.js";import"./useBreakpoint.8d335e41.js";import"./index.771e6580.js";import"./tsxHelper.0159f1e5.js";import"./index.0c60de8b.js";import"./index.c0cb7618.js";import"./useForm.607168db.js";import"./index.33af1ccc.js";import"./useModalContext.a7741058.js";import"./domUtils.f125794f.js";import"./useFullScreen.dd6aaa77.js";import"./uuid.40269c00.js";import"./useWindowSizeFn.81260ba1.js";import"./useExpose.b65400cc.js";import"./index.257243b0.js";import{u as r}from"./useTable.76a970c6.js";import{getBasicColumns as m,getBasicShortColumns as d}from"./tableData.bd4b72e8.js";import{d as p}from"./table.d92cc99b.js";var u=e({components:{BasicTable:l},setup(){const{createMessage:e}=t(),[i,{setLoading:o,setColumns:s,getColumns:n,getDataSource:a,reload:c,getPaginationRef:l,setPagination:u,getSelectRows:f,getSelectRowKeys:j,setSelectedRowKeys:b,clearSelectedRowKeys:g}]=r({canResize:!1,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:p,columns:m(),rowKey:"id",rowSelection:{type:"checkbox"}});return{registerTable:i,changeLoading:function(){o(!0),setTimeout((()=>{o(!1)}),1e3)},changeColumns:function(){s(d())},reloadTable:function(){s(m()),c({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){u({current:2}),c()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){b(["0","1","2"])},clearSelect:function(){g()}}}});const f={class:"p-4"},j={class:"mb-4"},b=c("还原"),g=c("开启loading"),C=c("更改Columns"),x=c("获取Columns"),k=c("获取表格数据"),S=c("跳转到第2页"),w={class:"mb-4"},R=c("获取选中行"),T=c("获取选中行Key"),_=c("设置选中行"),O=c("清空选中行"),y=c("获取分页信息");u.render=function(e,t,c,l,r,m){const d=i("a-button"),p=i("BasicTable");return o(),s("div",f,[n("div",j,[n(d,{class:"mr-2",onClick:e.reloadTable},{default:a((()=>[b])),_:1},8,["onClick"]),n(d,{class:"mr-2",onClick:e.changeLoading},{default:a((()=>[g])),_:1},8,["onClick"]),n(d,{class:"mr-2",onClick:e.changeColumns},{default:a((()=>[C])),_:1},8,["onClick"]),n(d,{class:"mr-2",onClick:e.getColumn},{default:a((()=>[x])),_:1},8,["onClick"]),n(d,{class:"mr-2",onClick:e.getTableData},{default:a((()=>[k])),_:1},8,["onClick"]),n(d,{class:"mr-2",onClick:e.setPaginationInfo},{default:a((()=>[S])),_:1},8,["onClick"])]),n("div",w,[n(d,{class:"mr-2",onClick:e.getSelectRowList},{default:a((()=>[R])),_:1},8,["onClick"]),n(d,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:a((()=>[T])),_:1},8,["onClick"]),n(d,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:a((()=>[_])),_:1},8,["onClick"]),n(d,{class:"mr-2",onClick:e.clearSelect},{default:a((()=>[O])),_:1},8,["onClick"]),n(d,{class:"mr-2",onClick:e.getPagination},{default:a((()=>[y])),_:1},8,["onClick"])]),n(p,{onRegister:e.registerTable},null,8,["onRegister"])])};export default u;