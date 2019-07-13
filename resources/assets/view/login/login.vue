<template>
    <div class="login">
        <div class="header_div">
            <header class="header_jiantou_div rel">
                <div class="to_back_div"><router-link to="/index"><i class="el-icon-arrow-left"></i></router-link></div>
                <span class="page_title">账号登录</span>
            </header>
        </div>
        <el-form class="login_fields" :model="form" :rules="rules"   ref="loginForm" label-width="80px">
            <el-form-item label="账号" prop="account">
                <el-input v-model="form.phone" prefix-icon="el-icon-phone" placeholder="手机号码" type="text" class="set-plack" maxlength="11"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" prefix-icon="el-icon-lock" placeholder="请输入密码" type="password" class="set-plack" maxlength="16"></el-input>
            </el-form-item>
            <div class="login_account">
                未注册账号？<router-link to="/register" class="change_login">快速注册 &gt;</router-link>
            </div>
            <div class="login_fields__submit"><input type="button" value="登录" @click="handleSubmit('loginForm')"></div>
        </el-form>
    </div>
</template>

<script>
    import './login.scss';
    import {mapActions} from 'vuex';


    export default {
        data: function () {
            return {
                form: {
                    phone:'',
                    password:''
                },
                rules: {
                    phone: [
                        { required: true,  message: '请输账号', trigger: 'blur' },
                        { min: 11, message: '请输正确手机号', trigger: 'blur' },
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, message: '请输入6-16位密码', trigger: 'blur' },
                    ]
                }
            };
        },
        methods: {
            ...mapActions([
                'handleLogin',
                'getUserInfo'
            ]),
            handleSubmit(form_name){
                this.$refs[form_name].validate((valid) => {
                    if (valid) {
                        this.handleLogin(this.form).then(res => {
                            this.getUserInfo().then(res => {
                                this.$router.push({
                                    name: 'home'
                                })
                            })
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
    }
</script>

<style>

</style>
