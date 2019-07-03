<template>
    <div class="login">
        <div>
            <div class="header_div">
                <header class="header_jiantou_div rel">
                    <div class="to_back_div"></div>
                    <span class="page_title">账号登录</span>
                </header>
            </div>
            <el-form class="login_fields" :model="form"  ref="loginForm" label-width="80px">
                <el-form-item label="账号">
                    <el-input prefix-icon="el-icon-phone" placeholder="手机号码" type="text" name="account" class="set-plack" maxlength="11"></el-input>
                </el-form-item>

                <el-form-item label="密码">
                    <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" type="password" name="password" oninput="if(value.length>16)value=value.slice(0,16)" class="set-plack"></el-input>
                </el-form-item>
                <div class="login_account">
                    未注册账号？<a href="javascript:;" class="change_login">快速注册 &gt;</a>
                </div>
                <div class="login_fields__submit"><input type="" value="登录" @click="handleSubmit"></div>
            </el-form>
        </div>
        <div class="errorMask" style="display: none;"></div>
        <div class="error" style="display: none;">
            <div class="error_title">登录失败</div>
            <div class="error_message"></div>
            <div class="error_confirm">确定</div>
        </div> <!---->
    </div>
</template>

<script>
    import './login.scss';
    import {mapActions} from 'vuex';


    export default {
        data: function () {
            return {
                form: {

                }
            };
        },
        methods: {
            ...mapActions([
                'handleLogin',
                'getUserInfo'
            ]),
            handleSubmit() {
//                this.$refs.loginForm.validate((valid) => {
//                    if (valid) {
//                        this.saveLoading = true
//                        this.$emit('on-success-valid', {
//                            email: this.form.userName,
//                            password: this.form.password
//                        })
//                    } else {
//                        this.saveLoading = false
//                    }
//                })
            },
//            handleSubmit({email, password}) {
//                this.handleLogin({email, password}).then(res => {
//                    this.getUserInfo().then(res => {
//                        this.$router.push({
//                            name: 'home'
//                        })
//                    })
//                })
//            }
        }
    }
</script>

<style>

</style>
