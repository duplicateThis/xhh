<template>
  <div class="login_page fillcontain">
    <transition>
      <section class="form_container">
        <div class="manage_title">
          <p>云享惠后来管理系统</p>
        </div>
        <el-form ref="loginForm" :model="loginForm" rules="rules">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名">

            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="密码" v-model="loginForm.password">

            </el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
          </el-form-item>
          <p class="tip">提示:</p>
        </el-form>
      </section>
    </transition>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import {login, getAdimInfo} from '@/api/getData'

export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {require: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      },
      showLogin: false
    }
  },
  mounted () {
    this.showLogin = true;
    if (!this.adminInfo.id) {
      this.getAdminData()
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
