<template>
  <div class="xp-login">
    <div class="xp-login__brand">
      <div>xp-admin</div>
    </div>
    <el-form
      ref="form"
      :model="model"
      :rules="rules"
      hide-required-asterisk
      size="small">
      <el-form-item
        label="用户名"
        prop="username">
        <el-input
          v-model="model.username"
          autocomplete="off" />  
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password">
        <el-input
          v-model="model.password"
          type="password"
          show-password
          autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="remember">记住用户名与密码</el-checkbox>
      </el-form-item>
      <el-form-item size="large">
        <el-button
          :loading="loading.submit"
          type="primary"
          class="xp-login__submit"
          @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import md5 from 'blueimp-md5'
import { getItem, setItem, removeItem } from '@/utils/common/store'
export default {
  name: 'XpLogin',
  data() {
    this.rules = {
      username: [{
        required: true,
        message: '请输入用户名'
      }],
      password: [{
        required: true,
        message: '请输入密码'
      }]
    }
    return {
      model: {
        username: 'admin',
        password: ''
      },
      remember: true,
      loading: {
        submit: false
      }
    }
  },
  computed: {
    md5Password() {
      const loginInfo = getItem('loginInfo')
      if (loginInfo && loginInfo.username === this.model.username && loginInfo.password === this.model.password) {
        return this.model.password
      }
      return this.model.password ? md5(this.model.password) : ''
    }
  },
  created() {
    const loginInfo = getItem('loginInfo')
    if (loginInfo) {
      this.model.username = loginInfo.username
      this.model.password = loginInfo.password
    }
  },
  methods: {
    // 持久化登录信息
    persistLoginInfo() {
      if (this.remember) {
        setItem('loginInfo', {
          username: this.model.username,
          password: this.md5Password
        })
      } else {
        removeItem('loginInfo')
      }
    },
    redirect() {
      this.$router.push(this.$route.query.redirect || '/')
    },
    handleLogin() {
      this.$refs.form.validate().then(() => {
        this.$store.dispatch('user/login', {
          username: this.model.username,
          password: this.md5Password
        }).then(() => {
          this.persistLoginInfo()
          this.redirect()
        }).catch(e => {
          console.error(e)
        })
      })
    }
  }
}
</script>

<style>

</style>