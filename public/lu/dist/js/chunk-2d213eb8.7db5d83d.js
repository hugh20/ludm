(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213eb8"],{af74:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"privileges-users-list"}},[e("Row",{attrs:{gutter:24}},[e("Col",{attrs:{xs:8,lg:16}},[e("Button",{attrs:{type:"success",icon:"plus"},on:{click:function(a){t.addBtn()}}},[t._v("添加")])],1),e("Col",{staticClass:"hidden-mobile",attrs:{xs:12,lg:4}},[e("Input",{attrs:{icon:"search",placeholder:"请输入权限名称..."},model:{value:t.searchForm.name,callback:function(a){t.$set(t.searchForm,"name",a)},expression:"searchForm.name"}})],1),e("Col",{staticClass:"hidden-mobile",attrs:{xs:3,lg:2}},[e("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:function(a){t.getTableDataExcute()}}},[t._v("Search")])],1)],1),e("br"),e("Row",[t.tableLoading?e("div",{staticClass:"demo-spin-container"},[e("Spin",{attrs:{fix:""}},[e("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}}),e("div",[t._v("加载中...")])],1)],1):t._e(),e("Table",{attrs:{border:"",columns:t.columns,data:t.dataList},on:{"on-sort-change":t.onSortChange}})],1),t.addModal.show?e("add-component",{on:{"on-add-modal-success":t.getTableDataExcute,"on-add-modal-hide":t.addModalHide}}):t._e(),t.editModal.show?e("edit-component",{attrs:{"modal-id":t.editModal.id},on:{"on-edit-modal-success":t.getTableDataExcute,"on-edit-modal-hide":t.editModalHide}}):t._e()],1)},n=[],i=(e("7f7f"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Modal",{attrs:{closable:!1,"mask-closable":!1,width:"600"},model:{value:t.modalShow,callback:function(a){t.modalShow=a},expression:"modalShow"}},[e("p",{attrs:{slot:"header"},slot:"header"},[t._v("添加")]),e("Form",{ref:"formData",attrs:{model:t.formData,rules:t.rules,"label-position":"left","label-width":100}},[e("FormItem",{attrs:{label:"权限名称",prop:"name"}},[e("Input",{attrs:{placeholder:"请输入"},model:{value:t.formData.name,callback:function(a){t.$set(t.formData,"name",a)},expression:"formData.name"}})],1),e("FormItem",{attrs:{label:"看守器",prop:"guard_name"}},[e("Input",{attrs:{placeholder:"请输入"},model:{value:t.formData.guard_name,callback:function(a){t.$set(t.formData,"guard_name",a)},expression:"formData.guard_name"}})],1),e("FormItem",{attrs:{label:"权限描述",prop:"description"}},[e("Input",{attrs:{type:"textarea",rows:3,placeholder:"请输入"},model:{value:t.formData.description,callback:function(a){t.$set(t.formData,"description",a)},expression:"formData.description"}})],1)],1),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),e("Button",{attrs:{type:"primary",loading:t.saveLoading},on:{click:t.addEditExcute}},[t._v("保存 ")])],1)],1)],1)}),r=[],s=e("66df"),d=function(t){return s["a"].request({url:"/api/admin/permissions",params:{search_data:JSON.stringify(t)},method:"get"})},l=function(t){return s["a"].request({url:"/api/admin/permissions",data:t,method:"post"})},c=function(t){return s["a"].request({url:"/api/admin/permissions/"+t,method:"delete"})},m=function(t){return s["a"].request({url:"/api/admin/permissions/"+t,method:"get"})},u={data:function(){return{modalShow:!0,saveLoading:!1,formData:{name:"",guard_name:"",description:""},rules:{name:[{required:!0,message:"请填写权限名称",trigger:"blur"}],guard_name:[{required:!0,message:"请填写看守器",trigger:"blur"}]}}},methods:{addEditExcute:function(){var t=this;t.$refs.formData.validate(function(a){a&&(t.saveLoading=!0,l(t.formData).then(function(a){t.saveLoading=!1,t.modalShow=!1,t.$emit("on-add-modal-success"),t.$emit("on-add-modal-hide"),t.$Notice.success({title:a.message})},function(a){t.saveLoading=!1}))})},cancel:function(){this.modalShow=!1,this.$emit("on-add-modal-hide")}}},p=u,f=e("2877"),h=Object(f["a"])(p,i,r,!1,null,null,null),g=h.exports,v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Modal",{attrs:{closable:!1,"mask-closable":!1,width:"600"},model:{value:t.modalShow,callback:function(a){t.modalShow=a},expression:"modalShow"}},[e("p",{attrs:{slot:"header"},slot:"header"},[t._v("修改")]),e("Form",{ref:"formData",attrs:{model:t.formData,rules:t.rules,"label-position":"left","label-width":100}},[e("FormItem",{attrs:{label:"权限名称",prop:"name"}},[e("Input",{attrs:{placeholder:"请输入"},model:{value:t.formData.name,callback:function(a){t.$set(t.formData,"name",a)},expression:"formData.name"}})],1),e("FormItem",{attrs:{label:"看守器",prop:"guard_name"}},[e("Input",{attrs:{placeholder:"请输入"},model:{value:t.formData.guard_name,callback:function(a){t.$set(t.formData,"guard_name",a)},expression:"formData.guard_name"}})],1),e("FormItem",{attrs:{label:"权限描述",prop:"description"}},[e("Input",{attrs:{type:"textarea",rows:3,placeholder:"请输入"},model:{value:t.formData.description,callback:function(a){t.$set(t.formData,"description",a)},expression:"formData.description"}})],1)],1),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),e("Button",{attrs:{type:"primary",loading:t.saveLoading},on:{click:t.addEditExcute}},[t._v("保存 ")])],1),!0===t.spinLoading?e("div",{staticClass:"demo-spin-container"},[e("Spin",{attrs:{fix:""}},[e("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}}),e("div",[t._v("加载中...")])],1)],1):t._e()],1)],1)},b=[],_=(e("c5f6"),{props:{modalId:{type:Number,default:0}},data:function(){return{modalShow:!0,saveLoading:!1,spinLoading:!0,formData:{name:"",guard_name:"",description:""},rules:{name:[{required:!0,message:"请填写权限名称",trigger:"blur"}],guard_name:[{required:!0,message:"请填写看守器",trigger:"blur"}]}}},mounted:function(){this.modalId>0&&this.getInfoByIdExcute()},methods:{getInfoByIdExcute:function(){var t=this;m(t.modalId).then(function(a){var e=a.data;t.formData={id:e.id,name:e.name,guard_name:e.guard_name,description:e.description},t.spinLoading=!1})},addEditExcute:function(){var t=this;t.$refs.formData.validate(function(a){a&&(t.saveLoading=!0,l(t.formData).then(function(a){t.saveLoading=!1,t.modalShow=!1,t.$emit("on-edit-modal-success"),t.$emit("on-edit-modal-hide"),t.$Notice.success({title:a.message})},function(a){t.saveLoading=!1}))})},cancel:function(){this.modalShow=!1,this.$emit("on-edit-modal-hide")}}}),w=_,x=Object(f["a"])(w,v,b,!1,null,null,null),D=x.exports,y={components:{AddComponent:g,EditComponent:D},data:function(){var t=this;return{searchForm:{order_by:"id,desc"},tableLoading:!1,dataList:[],modalHeadImage:{show:!1,url:null},addModal:{show:!1},editModal:{show:!1,id:0},columns:[{title:"ID",key:"id",sortable:"customer",minWidth:100},{title:"权限名称",key:"name",minWidth:150},{title:"看守器",key:"guard_name",minWidth:150},{title:"权限描述",key:"description",minWidth:150},{title:"创建时间",key:"created_at",minWidth:150},{title:"更新时间",key:"created_at",minWidth:150},{title:"操作",minWidth:200,render:function(a,e){var o=t;return a("div",[a("Button",{props:{type:"success",size:"small"},on:{click:function(){t.editModal.show=!0,t.editModal.id=e.row.id}}},"修改"),a("Poptip",{props:{confirm:!0,title:"您确定要删除「"+e.row.name+"」权限？",transfer:!0},on:{"on-ok":function(){o.destroyExcute(e.row.id,e.index)}}},[a("Button",{style:{margin:"0 5px"},props:{type:"error",size:"small",placement:"top"}},"删除")])])}}]}},mounted:function(){this.getTableDataExcute()},methods:{getTableDataExcute:function(){var t=this;t.loading=!0,d(t.searchForm).then(function(a){var e=a.data;t.dataList=e,t.tableLoading=!1},function(a){t.tableLoading=!1})},onSortChange:function(t){var a=t.column.key+","+t.order;this.searchForm.order_by=a,this.getTableDataExcute()},destroyExcute:function(t,a){var e=this;c(t).then(function(t){e.dataList.splice(a,1),e.$Notice.success({title:t.message})})},addBtn:function(){this.addModal.show=!0},addModalHide:function(){this.addModal.show=!1},editModalHide:function(){this.editModal.show=!1}}},k=y,I=Object(f["a"])(k,o,n,!1,null,null,null);a["default"]=I.exports}}]);