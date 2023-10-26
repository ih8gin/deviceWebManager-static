<template>
  <div id="body">
    <el-row>
      <el-col :span="6" :offset="12">
        <p></p>
        <el-row type="flex" justify="center">
          <h2 style="color: antiquewhite;">{{ $t('login.loginTitle') }}</h2>
        </el-row>
        <el-form v-model="form">
          <el-form-item>
            <el-input :placeholder="$t('login.username_placeholder')" v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input :placeholder="$t('login.password_placeholder')" v-model="form.password" show-password style="margin-top: 10px;"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type='primary' @click="loginCheck" style="width: 100%; margin-top: 10px;">{{ $t('login.login') }}</el-button>
          </el-form-item>
        </el-form>
        <el-row type="flex" justify="center">
          <router-link to="/register">{{ $t('login.register') }}</router-link>
          <!-- <router-link to="/register">忘记密码</router-link> -->
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {adminAPI} from '@/api/API'
import Cookies from "js-cookie"
export default {
  name:"LoginPage",
  data() {
    return {
      form:{
        username: '',
        password: ''
      }
    }
  },
  methods: {
    loginCheck() {
      adminAPI.login(this.form).then(data => {
        if (data.statusCode == 200) {
          Cookies.set("user_id", data.data.id, {
            expires: 1
          })        
          Cookies.set("user_nickname", data.data.nickname, {
            expires: 1
          })
          Cookies.set("token", data.data.token,{
            expires: 1
          })
          this.$router.push('/home')
        } else {
          alert("用户名或密码错误！")
        }
      })
    }
  }
}
</script>

<style>
#body {
  height: 90vh;
  background-image: url("~@/assets/background.png");
  background-size: cover;
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
}
</style>