<template>
    <div>
        <form>
            <div class="form-group">
                <label>用户名</label>
                <input type="text" placeholder="任意用户名"  v-model="username">
            </div>

            <div class="form-group">
                <label>用户名</label>
                <input type="text" placeholder="任意密码" :value="password">
            </div>

            <button class="login-btn" type="button" @click="login">登录</button>
        </form>
    </div>
    
</template>

<style>
    form{ display: inline-block; padding: 30px 80px; margin-top: 15%; border-radius: 8px; border: 1px solid #eee; }
    .form-group{ margin-bottom: 10px; }
    .form-group label{ font-size: 14px; font-weight: bold; padding: 0 5px; }
    .form-group label:after{ content: ': '; }
    .form-group input{ border: none; outline: none; padding: 15px 10px; border-bottom: 1px solid #f3f4f7; color: #999; }
    .form-group input:focus{ color: #333; }
    .login-btn{ margin-top: 15px; outline: none; background-color: #2196f3; border: none; box-shadow: none; padding: 8px 20px; border-radius: 3px; color: #fff; font-size: 14px; }
    .login-btn:active{ opacity: .75; }
</style>

<script>
export default {
    data: function(){
        return {
            username: 'admin',
            password: '123456'
        };
    },
    methods: {
        login: function(){
            this.$router.push({ path: '/home', params: { uid: this.username == 'admin' ? 1 : 2 } })
        }
    }
}
</script>