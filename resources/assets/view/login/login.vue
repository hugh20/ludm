<style lang="less">
    @import 'login.scss';
</style>

<template>
    <div class="login">
        <div>
            <div class="header_div">
                <header class="header_jiantou_div rel">
                    <div class="to_back_div iconfont icon-jiantou"></div>
                    <span class="page_title">账号登录</span>
                </header>
            </div>
            <div class="login_fields">
                <div class="pwd_type" style="">
                    <div class="login_fields__user">
                        <div class="icon">
                            <img src="//staticfiles.huazhen.com/h5/static/icon/account.png">
                            <span>账号</span>
                        </div>
                        <input placeholder="账号/手机号码" type="text" name="account" class="set-plack">
                    </div>
                    <div class="login_fields__password">
                        <div class="icon">
                            <img src="//staticfiles.huazhen.com/h5/static/icon/lock.png">
                            <span>密码</span>
                        </div>
                        <input placeholder="请输入密码" type="password" name="password"
                               oninput="if(value.length>16)value=value.slice(0,16)" class="set-plack">
                    </div>
                    <div class="login_account">未注册账号？<a href="javascript:;" class="change_login">快速注册 &gt;</a>
                    </div>
                </div>
                <div class="login_fields__submit"><input type="submit" value="登录"></div>
            </div>
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
    import LoginForm from '_c/login-form'
    import {mapActions} from 'vuex'

    export default {
        components: {
            LoginForm
        },
        methods: {
            ...mapActions([
                'handleLogin',
                'getUserInfo'
            ]),
            handleSubmit({email, password}) {
                this.handleLogin({email, password}).then(res => {
                    this.getUserInfo().then(res => {
                        this.$router.push({
                            name: 'home'
                        })
                    })
                })
            }
        }
    }
</script>

<style>

</style>
