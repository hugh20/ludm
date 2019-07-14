<template>
    <div class="login">
        <div class="header_div">
            <header class="header_jiantou_div rel">
                <div class="to_back_div"><router-link to="/index"><i class="el-icon-arrow-left"></i></router-link></div>
                <span class="page_title">账号注册</span>
            </header>
        </div>
        <el-form class="login_fields" :model="form" :rules="rules"   ref="registerForm" label-width="80px">
            <el-form-item label="账号" prop="phone">
                <el-input v-model="form.phone" prefix-icon="el-icon-phone" placeholder="手机号码" type="text" class="set-plack" maxlength="11"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" prefix-icon="el-icon-lock" placeholder="请输入密码" autocomplete="off" type="password" class="set-plack" maxlength="16"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input v-model="form.checkPass" prefix-icon="el-icon-lock" placeholder="请输入确认密码" autocomplete="off" type="password" class="set-plack" maxlength="16"></el-input>
            </el-form-item>
            <div class="login_account">
                已注册账号？<router-link to="/login" class="change_login">直接登录 &gt;</router-link>
            </div>
            <div class="login_fields__submit"><input type="button" value="注册" @click="handleSubmit('registerForm')"></div>
        </el-form>
    </div>
</template>

<script>
    import './register.scss';
    import {mapActions} from 'vuex';


    export default {
        data: function () {

            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.form.checkPass !== '') {
                        this.$refs.form.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.form.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                form: {
                    phone:'',
                    password:'',
                    checkPass: '',
                },
                rules: {
                    phone: [
                        { required: true,  message: '请输账号', trigger: 'blur' },
                        { min: 11, message: '请输正确手机号', trigger: 'blur' },
                    ],
                    password: [
                        { required: true, validator: validatePass, trigger: 'blur' },
                        { min: 6, message: '请输入6-16位密码', trigger: 'blur' },
                    ],
                    checkPass: [
                        { required: true, validator: validatePass2, trigger: 'blur' },
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
                            this.$router.push({
                                name: 'index'
                            });
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
