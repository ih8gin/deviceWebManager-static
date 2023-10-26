<template>
  <el-col :span="7" :offset="8">
    <el-form v-model="form">
      <el-form-item>
        <el-col :span="20"><h3>{{ $t('register.title') }}</h3></el-col>
        <el-col :span="4"><router-link to="/login"><h3>{{ $t('register.toLogin') }}></h3></router-link></el-col>
      </el-form-item>
      <el-form-item style="margin-top: 10px;">
        <div v-show="useEmail">
          <el-col :span="18"><el-input :placeholder="$t('register.email')" v-model="form.email"></el-input></el-col>
          <el-col :span="6"><el-button @click="form.email='', useEmail=false, usePhone=true" style="width: 100%;">{{ $t('register.changeToPhone') }}</el-button></el-col>
        </div>
        <div v-show="usePhone">
          <el-col :span="18"><el-input :placeholder="$t('register.phone')" v-model="form.phone"></el-input></el-col>
          <el-col :span="6"><el-button @click="form.phone='', usePhone=false, useEmail=true" style="width: 100%;">{{ $t('register.changeToEmail') }}</el-button></el-col>
        </div>
      </el-form-item>
      <el-form-item style="margin-top: 10px;">
        <el-col :span="18"><el-input :placeholder="$t('register.captcha')" v-model="form.captcha"></el-input></el-col>
        <el-col :span="6"><el-button @click="requestForCaptcha" style="width: 100%;">{{ $t('register.getCaptcha') }}</el-button></el-col>
      </el-form-item>
      <el-form-item style="margin-top: 10px;">
        <el-input :placeholder="$t('register.password')" v-model="password_once" show-password></el-input>
      </el-form-item>
      <el-form-item style="margin-top: 10px;">
        <el-input :placeholder="$t('register.passwordConfirm')" v-model="form.password" show-password></el-input>
      </el-form-item>
      <el-form-item style="margin-top: 10px;">
        <el-button type='primary' @click="submitRegister" style="width: 100%;">{{ $t('register.submit') }}</el-button>
      </el-form-item>
    </el-form>
  </el-col>
</template>

<script>
import {adminAPI} from '@/api/API'
export default {
  name:"RegisterPage",
  data() {
    return{
      form: {
        username: '',
        password: '',
        captcha: '',
        nickname: '',
        email: '',
        phone: ''
      },
      password_once:'',
      useEmail: false,
      usePhone: true,
    }
  },
  methods: {
    submitRegister() {
      if (this.password_once != this.form.password){
        alert("两次输入的密码不一致！")
        this.form.password_once = ''
        this.form.password = ''
        return
      }
      adminAPI.register(this.form).then(data => {
        if (data.statusCode == 200) {
          alert("注册成功！")
          this.$router.push('/login')
        } else {
          console.log(data)
          alert("注册不成功！")
        }
      })
    },
    requestForCaptcha() {
      if (this.form.email != ''){
        console.log('请求获取邮件验证码')
        adminAPI.getEmailCaptcha({'email': this.form.email})
      } else if (this.form.phone != ''){
        console.log('请求获取短信验证码')
        adminAPI.getPhoneCaptcha({'phone': this.form.phone})
      } else {
        alert("请输入信息!")
      }
    }
  }
}
</script>

<style>

</style>