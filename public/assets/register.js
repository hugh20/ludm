(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{100:function(e,n,t){var r=t(101);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(6)(r,i);r.locals&&(e.exports=r.locals)},101:function(e,n,t){(e.exports=t(5)(!1)).push([e.i,'@charset "UTF-8";\n.header_div {\n  height: 2.2rem;\n  line-height: 2.2rem;\n  position: relative;\n}\n\n.login {\n  background-color: #fff;\n  height: -webkit-fill-available;\n}\n\n.header_jiantou_div {\n  margin: 0 auto !important;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  z-index: 30;\n}\n\n#app, .container, .rel {\n  position: relative;\n}\n\n.to_back_div {\n  position: absolute;\n  display: table-cell;\n  color: #666 !important;\n  width: 2.2rem;\n  height: 2.2rem;\n  line-height: 2.2rem;\n  text-align: center;\n  padding-left: 0.466667rem;\n  font-size: 1.2rem;\n  vertical-align: middle;\n}\n\n.to_back_div i {\n  vertical-align: middle;\n  color: #969696;\n}\n\n.icon-jiantou:before {\n  content: "\\E60D";\n}\n\n.page_title {\n  color: #000 !important;\n  font-size: 1rem;\n  vertical-align: middle;\n}\n\n.login_title span {\n  color: #ff4a60;\n  padding: 0.16rem 0.32rem;\n  border-bottom: 0.08rem solid #ff4a60;\n}\n\n.set-plack {\n  background-color: transparent;\n  vertical-align: middle;\n  width: 85%;\n}\n\n.login_account {\n  text-align: center;\n  color: #555;\n  margin: 1.8rem 0;\n  font-size: 0.8rem;\n}\n\n.change_login {\n  color: #48a0f8;\n}\n\n.login_fields__submit {\n  text-align: center;\n}\n\n.login_fields__submit input {\n  width: 8rem;\n  height: 2rem;\n  text-align: center;\n  line-height: 2rem;\n  background: #f1794e;\n  color: #fff;\n  border-radius: 1rem;\n  margin-left: 0;\n  border-width: 0;\n}\n\n.login_fields__submit input:focus {\n  outline: 0;\n}',""])},246:function(e,n,t){"use strict";t.r(n);t(100),t(1);var r=t(4),i=t(2),o={data:function(){var e=this;return{form:{phone:"",password:"",checkPass:""},rules:{phone:[{required:!0,message:"请输账号",trigger:"blur"},{min:11,message:"请输正确手机号",trigger:"blur"}],password:[{required:!0,validator:function(n,t,r){""===t?r(new Error("请输入密码")):(""!==e.form.checkPass&&e.$refs.registerForm.validateField("checkPass"),r())},trigger:"blur"},{min:6,message:"请输入6-16位密码",trigger:"blur"}],checkPass:[{required:!0,validator:function(n,t,r){""===t?r(new Error("请再次输入密码")):t!==e.form.password?r(new Error("两次输入密码不一致!")):r()},trigger:"blur"}]}}},methods:{handleSubmit:function(e){var n=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var t,o;(t=n.form,o={phone:t.phone,password:t.password,checkPass:t.checkPass},r.a.request({url:"api/register",data:o,method:"post"})).then(function(e){Object(i.Message)({showClose:!0,message:"注册成功，欢迎登录",type:"success"}),n.$router.push({name:"login"})})})}}},a=t(0),s=Object(a.a)(o,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"login"},[t("div",{staticClass:"header_div"},[t("header",{staticClass:"header_jiantou_div rel"},[t("div",{staticClass:"to_back_div"},[t("router-link",{attrs:{to:"/index"}},[t("i",{staticClass:"el-icon-arrow-left"})])],1),e._v(" "),t("span",{staticClass:"page_title"},[e._v("账号注册")])])]),e._v(" "),t("el-form",{ref:"registerForm",staticClass:"login_fields",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"账号",prop:"phone"}},[t("el-input",{staticClass:"set-plack",attrs:{"prefix-icon":"el-icon-phone",placeholder:"手机号码",type:"text",maxlength:"11"},model:{value:e.form.phone,callback:function(n){e.$set(e.form,"phone",n)},expression:"form.phone"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{staticClass:"set-plack",attrs:{"prefix-icon":"el-icon-lock",placeholder:"请输入密码",autocomplete:"off",type:"password",maxlength:"16"},model:{value:e.form.password,callback:function(n){e.$set(e.form,"password",n)},expression:"form.password"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[t("el-input",{staticClass:"set-plack",attrs:{"prefix-icon":"el-icon-lock",placeholder:"请输入确认密码",autocomplete:"off",type:"password",maxlength:"16"},model:{value:e.form.checkPass,callback:function(n){e.$set(e.form,"checkPass",n)},expression:"form.checkPass"}})],1),e._v(" "),t("div",{staticClass:"login_account"},[e._v("\n            已注册账号？"),t("router-link",{staticClass:"change_login",attrs:{to:"/login"}},[e._v("直接登录 >")])],1),e._v(" "),t("div",{staticClass:"login_fields__submit"},[t("input",{attrs:{type:"button",value:"注册"},on:{click:function(n){return e.handleSubmit("registerForm")}}})])],1)],1)},[],!1,null,null,null);n.default=s.exports}}]);