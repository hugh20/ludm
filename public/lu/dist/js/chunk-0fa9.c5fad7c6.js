(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fa9"],{"1e5d":function(e,t,a){},2934:function(e,t,a){"use strict";a.d(t,"b",function(){return s}),a.d(t,"c",function(){return n}),a.d(t,"a",function(){return i});var o=a("66df"),s=function(e){return o["a"].request({url:"/api/common_get_table_status/"+e,method:"get"})},n=function(e,t,a){return o["a"].request({url:"/api/common_switch_enable",data:{id:e,table:t,value:a},method:"post"})},i=function(e){return o["a"].request({url:"/api/admin/attachments/"+e+"/force_destroy",method:"delete"})}},"6a8f":function(e,t,a){"use strict";var o=a("1e5d"),s=a.n(o);s.a},c13c:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._l(e.uploadList,function(t){return a("div",{staticClass:"demo-upload-list"},["finished"===t.status?[a("img",{attrs:{src:t.url}}),a("div",{staticClass:"demo-upload-list-cover"},[a("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(a){e.handleRemove(t)}}})],1)]:[t.showProgress?a("Progress",{attrs:{percent:t.percentage,"hide-info":""}}):e._e()]],2)}),a("Upload",{ref:"upload",staticStyle:{display:"inline-block",width:"58px"},attrs:{"show-upload-list":!1,"default-file-list":e.uploadConfig.default_list,"on-success":e.handleSuccess,headers:e.uploadConfig.headers,format:e.uploadConfig.format,"max-size":e.uploadConfig.max_size,"on-format-error":e.handleFormatError,"on-exceeded-size":e.handleMaxSize,"before-upload":e.handleBeforeUpload,multiple:e.uploadConfig.multiple,name:e.uploadConfig.file_name,type:"drag",action:e.uploadConfig.upload_url}},[a("div",{staticStyle:{width:"58px",height:"58px","line-height":"58px"}},[a("Icon",{attrs:{type:"ios-camera",size:"20"}})],1)]),e.formatFileList.length>0?a("Collapse",[a("Panel",{attrs:{name:"1"}},[e._v("\n      预览\n      "),a("p",{attrs:{slot:"content"},slot:"content"},e._l(e.formatFileList,function(e,t){return a("img",{staticStyle:{width:"100%"},attrs:{src:e.url,alt:e.name}})}))])],1):e._e()],2)},s=[],n=(a("7f7f"),a("ac6a"),a("2934")),i={props:{isDelete:{type:Boolean,default:!0},uploadConfig:{type:Object,default:{headers:{Authorization:window.access_token},format:["jpg","jpeg","png","gif"],max_size:800,upload_url:window.uploadUrl.uploadTmp,file_name:"file",multiple:!1,file_num:0,default_list:[{name:"",attachment_id:0,url:""},{name:"",attachment_id:0,url:""}]}}},data:function(){return{imgName:"",visible:!1,uploadList:[],formatFileList:[]}},methods:{handleRemove:function(e){var t=this,a=this.$refs.upload.fileList;e.attachment_id>0&&!0===this.isDelete&&Object(n["a"])(e.attachment_id).then(function(e){t.$Notice.success({title:"操作成功",desc:"文件删除成功"})}),this.$refs.upload.fileList.splice(a.indexOf(e),1);var o=this.fomatFile();this.$emit("input",o),this.$emit("on-upload-change",this.uploadList,o)},handleSuccess:function(e,t){t.url=e.data.url,t.name=e.data.original_name,t.attachment_id=e.data.attachment_id;var a=this.fomatFile();this.$emit("input",a),this.$emit("on-upload-change",this.uploadList,a)},fomatFile:function(){var e=[];return this.uploadList.forEach(function(t,a,o){e.push({attachment_id:t.attachment_id,url:t.url})}),this.formatFileList=e,1===this.uploadConfig.file_num&&(e=e[0]),e},handleFormatError:function(e){this.$Notice.warning({title:"文件格式不正确",desc:"文件 "+e.name+" 格式不正确。"})},handleMaxSize:function(e){this.$Notice.warning({title:"超出文件大小限制",desc:"文件 "+e.name+" 太大，不能超过 "+this.uploadConfig.max_size+"kb"})},handleBeforeUpload:function(){var e=this.uploadList.length<this.uploadConfig.file_num;return e||this.$Notice.warning({title:"数量限制",desc:"最多只能上传"+this.uploadConfig.file_num+"个文件"}),e}},mounted:function(){this.uploadList=this.$refs.upload.fileList;var e=this.fomatFile();"undefined"!=e&&(this.$emit("input",e),this.$emit("on-upload-change",this.uploadList,e))}},r=i,l=(a("6a8f"),a("66b7")),c=Object(l["a"])(r,o,s,!1,null,null,null);c.options.__file="upload.vue";t["a"]=c.exports},d28d:function(e,t,a){"use strict";a.d(t,"c",function(){return s}),a.d(t,"e",function(){return n}),a.d(t,"b",function(){return i}),a.d(t,"a",function(){return r}),a.d(t,"d",function(){return l});var o=a("66df"),s=function(e,t,a){return o["a"].request({url:"/api/admin/tags",params:{page:e,per_page:t,search_data:JSON.stringify(a)},method:"get"})},n=function(){return o["a"].request({url:"/api/admin/tags",method:"get"})},i=function(e){return o["a"].request({url:"/api/admin/tags/"+e,method:"delete"})},r=function(e){return o["a"].request({url:"/api/admin/tags",data:e,method:"post"})},l=function(e){return o["a"].request({url:"api/admin/tags/"+e,method:"get"})}},e6dc:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Row",{attrs:{gutter:24}},[a("Col",{attrs:{xs:6,lg:3}},[a("Button",{attrs:{type:"success",icon:"plus"},on:{click:function(t){e.addBtn()}}},[e._v("Add")])],1),a("Col",{staticClass:"hidden-mobile",attrs:{xs:3,lg:4}},[a("Input",{attrs:{icon:"search",placeholder:"请输入标题..."},model:{value:e.searchForm.title,callback:function(t){e.$set(e.searchForm,"title",t)},expression:"searchForm.title"}})],1),a("Col",{attrs:{xs:3,lg:3}},[a("Select",{attrs:{placeholder:"是否启用"},model:{value:e.searchForm.enable,callback:function(t){e.$set(e.searchForm,"enable",t)},expression:"searchForm.enable"}},[a("Option",{key:"",attrs:{value:""}},[e._v("全部")]),e._l(e.tableStatus.enable,function(t,o){return a("Option",{key:o,attrs:{value:o}},[e._v(e._s(t))])})],2)],1),a("Col",{staticClass:"hidden-mobile",attrs:{xs:3,lg:3}},[a("Select",{attrs:{placeholder:"分类",filterable:""},model:{value:e.searchForm.category_id,callback:function(t){e.$set(e.searchForm,"category_id",t)},expression:"searchForm.category_id"}},[a("Option",{key:"",attrs:{value:""}},[e._v("全部")]),e._l(e.articleCategories,function(t,o){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name)+" ")])})],2)],1),a("Col",{attrs:{xs:3,lg:3}},[a("Select",{attrs:{placeholder:"推荐",filterable:""},model:{value:e.searchForm.recommend,callback:function(t){e.$set(e.searchForm,"recommend",t)},expression:"searchForm.recommend"}},[a("Option",{key:"",attrs:{value:""}},[e._v("全部")]),e._l(e.tableStatus.recommend,function(t,o){return a("Option",{key:o,attrs:{value:o}},[e._v(e._s(t)+" ")])})],2)],1),a("Col",{attrs:{xs:3,lg:3}},[a("Select",{attrs:{placeholder:"置顶",filterable:""},model:{value:e.searchForm.top,callback:function(t){e.$set(e.searchForm,"top",t)},expression:"searchForm.top"}},[a("Option",{key:"",attrs:{value:""}},[e._v("全部")]),e._l(e.tableStatus.top,function(t,o){return a("Option",{key:o,attrs:{value:o}},[e._v(e._s(t)+" ")])})],2)],1),a("Col",{attrs:{xs:1,lg:3}},[a("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:function(t){e.getTableDataExcute(e.feeds.current_page)}}},[e._v("Search")])],1)],1),a("br"),a("Row",[e.tableLoading?a("div",{staticClass:"demo-spin-container"},[a("Spin",{attrs:{fix:""}},[a("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}}),a("div",[e._v("加载中...")])],1)],1):e._e(),a("Table",{attrs:{border:"",columns:e.columns,data:e.feeds.data},on:{"on-sort-change":e.onSortChange}}),a("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"right"}},[a("Page",{staticClass:"paging",attrs:{total:e.feeds.total,current:e.feeds.current_page,"page-size":e.feeds.per_page,"show-elevator":"","show-total":"","show-sizer":""},on:{"on-change":e.handleOnPageChange,"on-page-size-change":e.onPageSizeChange}})],1)])],1),!0===e.showInfoModal.show?a("show-info",{attrs:{info:e.showInfoModal.info},on:{"show-modal-close":e.showModalClose}}):e._e(),!0===e.addModal.show?a("add-component",{attrs:{"article-categories":e.articleCategories,"article-tags":e.articleTagList},on:{"on-add-modal-success":function(t){e.getTableDataExcute(e.feeds.current_page)},"on-add-modal-hide":e.addModalHide}}):e._e(),!0===e.editModal.show?a("edit-component",{attrs:{"modal-id":e.editModal.id,"article-categories":e.articleCategories,"article-tags":e.articleTagList},on:{"on-edit-modal-success":function(t){e.getTableDataExcute(e.feeds.current_page)},"on-edit-modal-hide":e.editModalHide}}):e._e()],1)},s=[],n=(a("7f7f"),a("cadf"),a("551c"),a("097d"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Modal",{attrs:{closable:!1,"mask-closable":!1,width:"1200"},model:{value:e.modalShow,callback:function(t){e.modalShow=t},expression:"modalShow"}},[a("p",{attrs:{slot:"header"},slot:"header"},[e._v("添加文章")]),a("Row",[a("Col",{attrs:{span:"24"}},[a("Form",{ref:"formData",attrs:{model:e.formData,rules:e.rules,"label-position":"left","label-width":100}},[a("FormItem",{attrs:{label:"标题：",prop:"title"}},[a("Input",{model:{value:e.formData.title,callback:function(t){e.$set(e.formData,"title",t)},expression:"formData.title"}})],1),a("FormItem",{attrs:{label:"封面："}},[a("upload",{attrs:{"upload-config":e.imguploadConfig},on:{"on-upload-change":e.uploadChange},model:{value:e.formData.cover_image,callback:function(t){e.$set(e.formData,"cover_image",t)},expression:"formData.cover_image"}})],1),a("FormItem",{attrs:{label:"是否启用："}},[a("RadioGroup",{model:{value:e.formData.enable,callback:function(t){e.$set(e.formData,"enable",t)},expression:"formData.enable"}},[a("Radio",{attrs:{label:"F"}},[e._v("禁用")]),a("Radio",{attrs:{label:"T"}},[e._v("启用")])],1)],1),a("FormItem",{attrs:{label:"关键词：",prop:"keywords"}},[a("Input",{attrs:{type:"textarea",placeholder:"以英文逗号隔开"},model:{value:e.formData.keywords,callback:function(t){e.$set(e.formData,"keywords",t)},expression:"formData.keywords"}}),a("input-helper",{attrs:{text:"以英文逗号隔开"}})],1),a("FormItem",{attrs:{label:"描述：",prop:"description"}},[a("Input",{attrs:{type:"textarea",placeholder:"请输入描述"},model:{value:e.formData.descriptions,callback:function(t){e.$set(e.formData,"descriptions",t)},expression:"formData.descriptions"}})],1),a("FormItem",{attrs:{label:"分类："}},[a("Select",{attrs:{filterable:"",placeholder:"请选择文章分类"},model:{value:e.formData.category_id,callback:function(t){e.$set(e.formData,"category_id",t)},expression:"formData.category_id"}},e._l(e.articleCategories,function(t,o){return a("Option",{key:o,attrs:{value:t.id}},[e._v(e._s(t.name)+" ")])}))],1),a("FormItem",{attrs:{label:"排序："}},[a("Input",{attrs:{placeholder:"请输入序号"},model:{value:e.formData.weight,callback:function(t){e.$set(e.formData,"weight",t)},expression:"formData.weight"}})],1),a("FormItem",{attrs:{label:"置顶："}},[a("Select",{staticStyle:{width:"20%"},attrs:{size:"small"},model:{value:e.formData.top,callback:function(t){e.$set(e.formData,"top",t)},expression:"formData.top"}},[a("Option",{attrs:{value:"F"}},[e._v("否")]),a("Option",{attrs:{value:"T"}},[e._v("是")])],1)],1),a("FormItem",{attrs:{label:"推荐："}},[a("Select",{staticStyle:{width:"20%"},attrs:{size:"small"},model:{value:e.formData.recommend,callback:function(t){e.$set(e.formData,"recommend",t)},expression:"formData.recommend"}},[a("Option",{attrs:{value:"F"}},[e._v("否")]),a("Option",{attrs:{value:"T"}},[e._v("是")])],1)],1),a("p",{staticClass:"margin-top-10"},[a("Icon",{attrs:{type:"eye"}}),e._v("  公开度： "),a("b",[e._v(e._s(e.Openness))]),a("Button",{directives:[{name:"show",rawName:"v-show",value:!e.editOpenness,expression:"!editOpenness"}],attrs:{size:"small",type:"text"},on:{click:e.handleEditOpenness}},[e._v("修改")]),a("transition",{attrs:{name:"openness-con"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.editOpenness,expression:"editOpenness"}],staticClass:"publish-time-picker-con"},[a("RadioGroup",{attrs:{vertical:""},model:{value:e.formData.access_type,callback:function(t){e.$set(e.formData,"access_type",t)},expression:"formData.access_type"}},[a("Radio",{attrs:{label:"PUB"}},[e._v(" 公开")]),a("Radio",{attrs:{label:"PWD"}},[e._v(" 密码\n                  "),a("Input",{directives:[{name:"show",rawName:"v-show",value:"PWD"===e.formData.access_type,expression:"formData.access_type === 'PWD'"}],staticStyle:{width:"50%"},attrs:{size:"small",placeholder:"请输入密码"},model:{value:e.formData.access_value,callback:function(t){e.$set(e.formData,"access_value",t)},expression:"formData.access_value"}})],1),a("Radio",{attrs:{label:"PRI"}},[e._v("私密")])],1),a("div",[a("Button",{attrs:{type:"primary"},on:{click:e.handleSaveOpenness}},[e._v("确认")])],1)],1)])],1),a("FormItem",{attrs:{label:"新建标签"}},[a("Input",{attrs:{search:"","enter-button":"新建",placeholder:"标签名字"},on:{"on-search":e.addEditTagExcute},model:{value:e.newTagName,callback:function(t){e.newTagName=t},expression:"newTagName"}})],1),a("FormItem",{attrs:{label:"标签："}},[a("Select",{attrs:{multiple:"",filterable:"",placeholder:"请选择文章标签"},model:{value:e.formData.tags,callback:function(t){e.$set(e.formData,"tags",t)},expression:"formData.tags"}},e._l(e.articleTags,function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name)+" ")])}))],1),a("FormItem",{attrs:{label:"文章内容："}},[a("markdown-editor",{attrs:{cache:!0},model:{value:e.formData.content,callback:function(t){e.$set(e.formData,"content",t)},expression:"formData.content"}})],1)],1)],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:e.cancel}},[e._v("取消")]),a("Button",{attrs:{type:"primary",loading:e.saveLoading},on:{click:e.addArticleExcute}},[e._v("保存 ")])],1),!0===e.spinLoading?a("div",{staticClass:"demo-spin-container"},[a("Spin",{attrs:{fix:""}},[a("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}}),a("div",[e._v("加载中...")])],1)],1):e._e()],1)],1)}),i=[],r=a("66df"),l=function(e,t,a){return r["a"].request({url:"/api/admin/articles",params:{page:e,per_page:t,search_data:JSON.stringify(a)},method:"get"})},c=function(){return r["a"].request({url:"/api/admin/categories/all",method:"get"})},d=function(e){return r["a"].request({url:"/api/admin/articles/"+e,method:"delete"})},u=function(e){return r["a"].request({url:"/api/admin/articles",data:e,method:"post"})},m=function(e,t){return r["a"].request({url:"/api/admin/articles/"+e,data:t,method:"patch"})},p=function(e){return r["a"].request({url:"api/admin/articles/"+e,method:"get"})},f=a("d28d"),h=a("c13c"),g=a("9f69"),v=a("5e53"),_={components:{Upload:h["a"],InputHelper:g["a"],MarkdownEditor:v["a"]},props:{articleCategories:{default:{}}},data:function(){return{modalShow:!0,saveLoading:!1,spinLoading:!0,formData:{title:"",cover_image:{attachment_id:0,url:""},enable:"F",keywords:"",descriptions:"",content:"",category_id:0,weight:20,top:"F",recommend:"F",access_type:"PUB",access_value:"",tags:0},editOpenness:!1,Openness:"公开",newTagName:"",articleTags:{},rules:{title:[{required:!0,message:"请填写文章标题",trigger:"blur"}]},imguploadConfig:{headers:{Authorization:window.access_token},format:["jpg","jpeg","png","gif"],max_size:800,upload_url:window.uploadUrl.uploadAdvertisement,file_name:"file",multiple:!1,file_num:1,default_list:[]}}},mounted:function(){this.spinLoading=!1,this.getTagListExcute()},methods:{getTagListExcute:function(){var e=this;Object(f["e"])().then(function(t){e.articleTags=t.data})},addArticleExcute:function(){var e=this;e.$refs.formData.validate(function(t){t&&(e.saveLoading=!0,u(e.formData).then(function(t){e.saveLoading=!1,e.modalShow=!1,e.$emit("on-add-modal-success"),e.$emit("on-add-modal-hide"),e.$Notice.success({title:t.message})},function(t){e.saveLoading=!1}))})},cancel:function(){this.modalShow=!1,this.$emit("on-add-modal-hide")},uploadChange:function(e,t){},handleEditOpenness:function(){this.editOpenness=!this.editOpenness},handleSaveOpenness:function(){var e=this.formData.access_type;this.passwordValidate()&&(this.Openness="PUB"===e?"公开":"PWD"===e?"密码":"私密",this.editOpenness=!1)},passwordValidate:function(){var e=this.formData.access_type,t=this.formData.access_value;if("PWD"===e){var a=/^[a-zA-Z0-9]{4,8}$/;if(!a.test(t))return this.$Notice.error({title:"出错了",desc:"密码只能是4到8位的数字与字母"}),!1}return!0},addEditTagExcute:function(){var e=this;Object(f["a"])({name:e.newTagName}).then(function(t){e.getTagListExcute(),e.$Notice.success({title:t.message})})}}},b=_,w=a("66b7"),y=Object(w["a"])(b,n,i,!1,null,null,null);y.options.__file="add-article.vue";var D=y.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Modal",{attrs:{closable:!1,"mask-closable":!1,fullscreen:""},model:{value:e.modalShow,callback:function(t){e.modalShow=t},expression:"modalShow"}},[a("p",{attrs:{slot:"header"},slot:"header"},[e._v("修改文章")]),a("Row",[a("Col",{attrs:{span:"16"}},[a("Form",{ref:"formData",attrs:{model:e.formData,rules:e.rules,"label-position":"left","label-width":100}},[a("FormItem",{attrs:{label:"标题：",prop:"title"}},[a("Input",{model:{value:e.formData.title,callback:function(t){e.$set(e.formData,"title",t)},expression:"formData.title"}})],1),a("FormItem",{attrs:{label:"封面："}},[e.formdataFinished?a("upload",{attrs:{"is-delete":!1,"upload-config":e.imguploadConfig},on:{"on-upload-change":e.uploadChange},model:{value:e.formData.cover_image,callback:function(t){e.$set(e.formData,"cover_image",t)},expression:"formData.cover_image"}}):e._e()],1),a("FormItem",{attrs:{label:"是否启用："}},[a("RadioGroup",{model:{value:e.formData.enable,callback:function(t){e.$set(e.formData,"enable",t)},expression:"formData.enable"}},[a("Radio",{attrs:{label:"F"}},[e._v("禁用")]),a("Radio",{attrs:{label:"T"}},[e._v("启用")])],1)],1),a("FormItem",{attrs:{label:"关键词：",prop:"keywords"}},[a("Input",{attrs:{type:"textarea",placeholder:"以英文逗号隔开"},model:{value:e.formData.keywords,callback:function(t){e.$set(e.formData,"keywords",t)},expression:"formData.keywords"}}),a("input-helper",{attrs:{text:"以英文逗号隔开"}})],1),a("FormItem",{attrs:{label:"描述：",prop:"description"}},[a("Input",{attrs:{type:"textarea",placeholder:"请输入描述"},model:{value:e.formData.descriptions,callback:function(t){e.$set(e.formData,"descriptions",t)},expression:"formData.descriptions"}})],1),a("FormItem",{attrs:{label:"文章内容："}},[e.formdataFinished?a("markdown-editor",{attrs:{value:e.formData.content,cache:!1},model:{value:e.formData.content,callback:function(t){e.$set(e.formData,"content",t)},expression:"formData.content"}}):e._e()],1)],1)],1),a("Col",{staticClass:"padding-left-20",attrs:{span:"8"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"paper-airplane"}}),e._v("\n          其它信息\n        ")],1),a("Form",{attrs:{"label-position":"right","label-width":80}},[a("FormItem",{attrs:{label:"分类："}},[a("Select",{attrs:{filterable:"",placeholder:"请选择文章分类"},model:{value:e.formData.category_id,callback:function(t){e.$set(e.formData,"category_id",t)},expression:"formData.category_id"}},e._l(e.articleCategories,function(t,o){return a("Option",{key:o,attrs:{value:t.id}},[e._v(e._s(t.name)+" ")])}))],1),a("FormItem",{attrs:{label:"排序："}},[a("Input",{attrs:{placeholder:"请输入序号"},model:{value:e.formData.weight,callback:function(t){e.$set(e.formData,"weight",t)},expression:"formData.weight"}})],1),a("FormItem",{attrs:{label:"置顶："}},[a("Select",{staticStyle:{width:"20%"},attrs:{size:"small"},model:{value:e.formData.top,callback:function(t){e.$set(e.formData,"top",t)},expression:"formData.top"}},[a("Option",{attrs:{value:"F"}},[e._v("否")]),a("Option",{attrs:{value:"T"}},[e._v("是")])],1)],1),a("FormItem",{attrs:{label:"推荐："}},[a("Select",{staticStyle:{width:"20%"},attrs:{size:"small"},model:{value:e.formData.recommend,callback:function(t){e.$set(e.formData,"recommend",t)},expression:"formData.recommend"}},[a("Option",{attrs:{value:"F"}},[e._v("否")]),a("Option",{attrs:{value:"T"}},[e._v("是")])],1)],1),a("p",{staticClass:"margin-top-10"},[a("Icon",{attrs:{type:"eye"}}),e._v("  公开度： "),a("b",[e._v(e._s(e.Openness))]),a("Button",{directives:[{name:"show",rawName:"v-show",value:!e.editOpenness,expression:"!editOpenness"}],attrs:{size:"small",type:"text"},on:{click:e.handleEditOpenness}},[e._v("修改")]),a("transition",{attrs:{name:"openness-con"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.editOpenness,expression:"editOpenness"}],staticClass:"publish-time-picker-con"},[a("RadioGroup",{attrs:{vertical:""},model:{value:e.formData.access_type,callback:function(t){e.$set(e.formData,"access_type",t)},expression:"formData.access_type"}},[a("Radio",{attrs:{label:"PUB"}},[e._v(" 公开")]),a("Radio",{attrs:{label:"PWD"}},[e._v(" 密码\n                    "),a("Input",{directives:[{name:"show",rawName:"v-show",value:"PWD"===e.formData.access_type,expression:"formData.access_type === 'PWD'"}],staticStyle:{width:"50%"},attrs:{size:"small",placeholder:"请输入密码"},model:{value:e.formData.access_value,callback:function(t){e.$set(e.formData,"access_value",t)},expression:"formData.access_value"}})],1),a("Radio",{attrs:{label:"PRI"}},[e._v("私密")])],1),a("div",[a("Button",{attrs:{type:"primary"},on:{click:e.handleSaveOpenness}},[e._v("确认")])],1)],1)])],1)],1)],1),a("div",{staticClass:"margin-top-10"},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"ios-pricetags-outline"}}),e._v("\n            标签\n          ")],1),a("Row",[a("Col",{attrs:{span:"18"}},[a("Select",{attrs:{multiple:"",filterable:"",placeholder:"请选择文章标签"},model:{value:e.formData.tags,callback:function(t){e.$set(e.formData,"tags",t)},expression:"formData.tags"}},e._l(e.articleTags,function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name)+" ")])}))],1),a("Col",{staticClass:"padding-left-10",attrs:{span:"6"}},[a("Input",{attrs:{search:"","enter-button":"新建",placeholder:"标签名字"},on:{"on-search":e.addEditTagExcute},model:{value:e.newTagName,callback:function(t){e.newTagName=t},expression:"newTagName"}})],1)],1)],1)],1)],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:e.cancel}},[e._v("取消")]),a("Button",{attrs:{type:"primary",loading:e.saveLoading},on:{click:e.editArticleExcute}},[e._v("保存 ")])],1),!0===e.spinLoading?a("div",{staticClass:"demo-spin-container"},[a("Spin",{attrs:{fix:""}},[a("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}}),a("div",[e._v("加载中...")])],1)],1):e._e()],1)],1)},k=[],C=(a("c5f6"),{components:{Upload:h["a"],InputHelper:g["a"],MarkdownEditor:v["a"]},props:{articleCategories:{default:{}},modalId:{type:Number,default:0}},data:function(){return{modalShow:!0,saveLoading:!1,spinLoading:!0,formData:{title:"",cover_image:{attachment_id:0,url:""},enable:"F",keywords:"",description:"",content:"",category_id:0,weight:20,top:"F",recommend:"F",access_type:"PUB",access_value:""},formdataFinished:!1,editOpenness:!1,Openness:"公开",newTagName:"",articleTags:{},rules:{title:[{required:!0,message:"请填写文章标题",trigger:"blur"}]},imguploadConfig:{headers:{Authorization:window.access_token},format:["jpg","jpeg","png","gif"],max_size:800,upload_url:window.uploadUrl.uploadAdvertisement,file_name:"file",multiple:!1,file_num:1,default_list:[]}}},mounted:function(){this.getTagListExcute(),this.getArticleInfoByIdExcute()},methods:{getTagListExcute:function(){var e=this;Object(f["e"])().then(function(t){e.articleTags=t.data})},getArticleInfoByIdExcute:function(){var e=this;p(e.modalId).then(function(t){var a=t.data;e.formData={id:a.id,title:a.title,cover_image:{attachment_id:a.cover_image.attachment_id,url:a.cover_image.url},enable:a.enable,keywords:a.keywords,descriptions:a.descriptions,category_id:a.category_id,weight:a.weight,top:a.top,recommend:a.recommend,access_type:a.access_type,access_value:a.access_value},e.handleSaveOpenness(),e.imguploadConfig.default_list=[e.formData.cover_image],e.formData.tags=a.tagids,e.formData.content=a.content.raw,e.formdataFinished=!0,e.spinLoading=!1})},editArticleExcute:function(){var e=this;e.$refs.formData.validate(function(t){t&&(e.saveLoading=!0,m(e.modalId,e.formData).then(function(t){e.saveLoading=!1,e.modalShow=!1,e.$emit("on-edit-modal-success"),e.$emit("on-edit-modal-hide"),e.$Notice.success({title:t.message})},function(t){e.saveLoading=!1}))})},cancel:function(){this.modalShow=!1,this.$emit("on-edit-modal-hide")},uploadChange:function(e,t){},handleEditOpenness:function(){this.editOpenness=!this.editOpenness},handleSaveOpenness:function(){var e=this.formData.access_type;this.passwordValidate()&&(this.Openness="PUB"===e?"公开":"PWD"===e?"密码":"私密",this.editOpenness=!1)},passwordValidate:function(){var e=this.formData.access_type,t=this.formData.access_value;if("PWD"===e){var a=/^[a-zA-Z0-9]{4,8}$/;if(!a.test(t))return this.$Notice.error({title:"出错了",desc:"密码只能是4到8位的数字与字母"}),!1}return!0},addEditTagExcute:function(){var e=this;Object(f["a"])({name:e.newTagName}).then(function(t){e.getTagListExcute(),e.$Notice.success({title:t.message})})}}}),F=C,O=Object(w["a"])(F,x,k,!1,null,null,null);O.options.__file="edit-article.vue";var $=O.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Drawer",{attrs:{closable:!0,width:"640",title:"用户信息："},on:{"on-close":e.closed},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("p",{staticClass:"drawer-title"},[e._v("基本资料：")]),a("div",{staticClass:"drawer-profile"},[a("Row",[a("Col",{attrs:{span:"12"}},[e._v(" Slug: "+e._s(e.info.slug)+" ")]),a("Col",{attrs:{span:"12"}},[e._v(" 作者： "+e._s(e.info.user.name)+" ")]),a("Col",{attrs:{span:"12"}},[e._v(" 访问方式：\n        "),"PUB"===e.info.access_type?a("span",{staticClass:"green-color"},[e._v(" 公开  ")]):"PWD"===e.info.access_type?a("span",{staticClass:"green-color"},[e._v("  密码访问： "+e._s(e.info.access_value)+"  ")]):a("span",{staticClass:"green-color"},[e._v("  私密  ")])])],1)],1)])],1)},S=[],E={props:{info:{type:Object,default:""}},data:function(){return{show:!0,agreement:"",spinLoading:!0}},created:function(){},methods:{closed:function(){this.show=!1,this.$emit("show-modal-close")}}},T=E,L=Object(w["a"])(T,I,S,!1,null,null,null);L.options.__file="show-info.vue";var z=L.exports,N=a("2934"),P={components:{AddComponent:D,EditComponent:$,ShowInfo:z},data:function(){var e=this;return{searchForm:{order_by:"id,desc"},tableLoading:!1,tableStatus:{enable:[],top:[],recommend:[]},feeds:{data:[],total:0,current_page:1,per_page:10},articleCategories:{},articleTagList:{},addModal:{show:!1},editModal:{show:!1,id:0},showInfoModal:{show:!1,info:""},columns:[{title:"ID",key:"id",sortable:"customer",minWidth:50},{title:"标题",key:"title",minWidth:150},{title:"封面",minWidth:150,render:function(t,a){var o=e;if(a.row.cover_image.url)return t("div",[t("img",{attrs:{src:a.row.cover_image.url},style:{width:"40px",height:"40px"},on:{click:function(e){o.modalHeadImage.show=!0,o.modalHeadImage.url=a.row.cover_image.url}}})])}},{title:"分类",minWidth:100,render:function(e,t){return e("div",t.row.category.name)}},{title:"标签",minWidth:100,render:function(e,t){var a=t.row.tags,o="";for(var s in a)o+=s<1?a[s].name:"、"+a[s].name;return e("div",o)}},{title:"置顶",minWidth:100,render:function(e,t){var a=t.row,o="green",s="置顶";return"F"===a.top&&(s="非置顶",o="default"),e("div",[e("Tag",{props:{color:o}},s)])}},{title:"推荐",minWidth:100,render:function(e,t){var a=t.row,o="green",s="推荐";return"F"===a.recommend&&(s="非推荐",o="default"),e("div",[e("Tag",{props:{color:o}},s)])}},{title:"启用状态",key:"enable",minWidth:100,render:function(t,a){return t("i-switch",{props:{slot:"open",type:"primary",value:"T"===a.row.enable},on:{"on-change":function(t){e.switchEnable(a.index)}}})}},{title:"创建时间",sortable:"customer",key:"created_at",minWidth:150},{title:"操作",minWidth:200,render:function(t,a){var o=e,s="";return s=t("Poptip",{props:{confirm:!0,title:"您确定要删除「"+a.row.name+"」？",transfer:!0},on:{"on-ok":function(){o.deleteArticleExcute(a.row.id,a.index)}}},[t("Button",{style:{margin:"0 5px"},props:{type:"error",size:"small",placement:"top"}},"删除")]),t("div",[t("Button",{style:{margin:"0 5px"},props:{type:"primary",size:"small"},on:{click:function(){e.showInfoModal.show=!0,e.showInfoModal.info=a.row}}},"详细"),t("Button",{props:{type:"success",size:"small"},on:{click:function(){e.editModal.show=!0,e.editModal.id=a.row.id}}},"Edit"),s])}}]}},mounted:function(){var e=this;e.getTableStatusExcute("articles"),e.getArticleCategoriesExcute(),e.getTableDataExcute(e.feeds.current_page)},methods:{handleOnPageChange:function(e){this.getTableDataExcute(e)},onPageSizeChange:function(e){this.feeds.per_page=e,this.getTableDataExcute(this.feeds.current_page)},getTableStatusExcute:function(e){var t=this;Object(N["b"])(e).then(function(e){var a=e.data;t.tableStatus.enable=a.enable,t.tableStatus.recommend=a.recommend,t.tableStatus.top=a.top})},getArticleCategoriesExcute:function(){var e=this;c().then(function(t){e.articleCategories=t.data})},getTableDataExcute:function(e){var t=this;t.tableLoading=!0,t.feeds.current_page=e,l(e,t.feeds.per_page,t.searchForm).then(function(e){t.feeds.data=e.data,t.feeds.total=e.meta.total,t.tableLoading=!1},function(e){t.tableLoading=!1})},onSortChange:function(e){var t=e.column.key+","+e.order;this.searchForm.order_by=t,this.getTableDataExcute(this.feeds.current_page)},switchEnableExcute:function(e){var t=this,a="T";"T"===t.feeds.data[e].enable&&(a="F"),Object(N["c"])(t.feeds.data[e].id,"articles",a).then(function(o){t.feeds.data[e].enable=a,t.$Notice.success({title:o.message})})},deleteArticleExcute:function(e,t){var a=this;d(e).then(function(e){a.feeds.data.splice(t,1),a.$Notice.success({title:e.message})})},addBtn:function(){this.addModal.show=!0},addModalHide:function(){this.addModal.show=!1},editModalHide:function(){this.editModal.show=!1},showModalClose:function(){this.showInfoModal.show=!1}}},M=P,B=Object(w["a"])(M,o,s,!1,null,null,null);B.options.__file="list.vue";t["default"]=B.exports}}]);