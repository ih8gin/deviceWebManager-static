<template>
  <div>
    <el-row>
        <h2>{{ username }}, {{ welcome }}</h2>
    </el-row>
    <el-row>
      <el-form label-position="left">
        <el-col :offset="2" :span="6">
          <el-form-item :label="$t('MyAccount.email')">
            <el-col :offset="2" :span="18">
              <el-link v-if="email" :underline="false">{{ email }}</el-link>
              <el-link v-else @click="modifyEmail = true">{{ $t('MyAccount.verify') }}</el-link>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('MyAccount.phone')">
            <el-col :offset="2" :span="18">
              <el-link v-if="phone" :underline="false">{{ phone }}</el-link>
              <el-link v-else @click="modifyPhone = true">{{ $t('MyAccount.verify') }}</el-link>
            </el-col>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
    <el-row>
      <h3>{{ $t('MyAccount.deviceSummary') }}</h3>
    </el-row>
    <el-row>
      <el-col :offset="3" :span="8">
        <radial-indicator
          ref="runningDeviceSummary"
          :numerator="runningDeviceNum"
          :denominator="allDeviceNum"
          speed="10"
          size="155"
          color="#8abf50"
          @animationFinished="animationFinished"
          backgroundColor="#c4dfa7"
          :content="$t('MyAccount.runningDevice')"
          icon="el-icon-delete">
        </radial-indicator>
      </el-col>
      <el-col :span="8">
        <radial-indicator
          ref="warningDeviceSummary"
          :numerator="warningDeviceNum"
          :denominator="runningDeviceNum"
          speed="10"
          size="155"
          color="#F56C6C"
          @animationFinished="animationFinished"
          backgroundColor="#f8cdcd"
          :content="$t('MyAccount.warningDevice')"
          icon="el-icon-delete">
        </radial-indicator>
      </el-col>
    </el-row>

    <el-dialog :title="$t('MyAccount.modifyPhone')" :visible.sync="modifyPhone" width="600px">
      <el-form>
        <el-form-item>
          <el-input :placeholder="$t('MyAccount.phone')" v-model="captchaVerification.phone"></el-input>
        </el-form-item>
        <el-form-item style="margin-top: 10px;">
          <el-col :span="19"><el-input :placeholder="$t('MyAccount.captcha')" v-model="captchaVerification.captcha"></el-input></el-col>
          <el-col :span="5"><el-button @click="requestForCaptcha" style="width: 100%;">{{ $t('MyAccount.getCaptcha') }}</el-button></el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="modifyPhone = false">{{ $t('common.cancel') }}</el-button>
        <el-button type="primary" @click="update()">{{ $t('common.confirm') }}</el-button>
      </div>
    </el-dialog>

    <el-dialog :title="$t('MyAccount.modifyEmail')" :visible.sync="modifyEmail" width="600px">
      <el-form>
        <el-form-item>
          <el-input :placeholder="$t('MyAccount.email')" v-model="captchaVerification.email"></el-input>
        </el-form-item>
        <el-form-item style="margin-top: 10px;">
          <el-col :span="19"><el-input :placeholder="$t('MyAccount.captcha')" v-model="captchaVerification.captcha"></el-input></el-col>
          <el-col :span="5"><el-button @click="requestForCaptcha" style="width: 100%;">{{ $t('MyAccount.getCaptcha') }}</el-button></el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="modifyEmail = false">{{ $t('common.cancel') }}</el-button>
        <el-button type="primary" @click="update()">{{ $t('common.confirm') }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>
  
<script>
import RadialIndicator from '@/components/utils/RadialIndicator.vue'
import Cookies from 'js-cookie'
import {adminAPI, deviceAPI} from '@/api/API'
export default {
  name:"AccountDetail",
  components: {
    RadialIndicator
  },
  data() {
    return{
      username: '',
      welcome: '',
      email: '',
      phone: '',
      allDeviceNum: 1,
      runningDeviceNum: 1,
      warningDeviceNum: 1,
      modifyPhone: false,
      modifyEmail: false,
      captchaVerification:{
        id: '',
        email: '',
        phone: '',
        captcha: ''
      },
    }
  },
  methods: {
    welcomeInit() {
      this.username = Cookies.get("user_nickname")
      var current_hour = new Date().getHours()
      this.welcome = current_hour < 5 ? this.$t('welcome.lateNight') :
                      current_hour < 11 ? this.$t('welcome.morning') :
                      current_hour < 14 ? this.$t('welcome.noon') :
                      current_hour < 18 ? this.$t('welcome.afternoon') : this.$t('welcome.night')
    },
    animationFinished() {

    },
    baseInfoInit() {
      adminAPI.getProfile({id: Cookies.get("user_id")}).then(data => {
        if (data.statusCode == 200){
          this.email = data.data.email
          this.phone = data.data.phone
        }
      })
    },
    deviceSummaryInit() {
      deviceAPI.getSummary({adminId: Cookies.get('user_id')}).then(data => {
        // console.log(data)
        if (data.statusCode == 200){
          this.allDeviceNum = data.data[0]
          this.runningDeviceNum = data.data[1]
          this.warningDeviceNum = data.data[2]
        }
      })
    },
    requestForCaptcha() {
      if (this.captchaVerification.email != ''){
        console.log('请求获取邮件验证码')
        adminAPI.getEmailCaptcha(this.captchaVerification)
      } else if (this.captchaVerification.phone != ''){
        console.log('请求获取短信验证码')
        adminAPI.getPhoneCaptcha(this.captchaVerification)
      } else {
        alert(this.$t('AccountDetail.emptyInput'))
      }
    },
    update(){
        adminAPI.update(this.captchaVerification).then(data => {
          console.log(data)
          if (data.statusCode == 200){
            this.baseInfoInit()
            this.captchaVerification = {
              id: '',
              email: '',
              phone: '',
              captcha: ''
            }
          }
        })
        this.modifyEmail = false
        this.modifyPhone = false
      },
  },
  created() {
    this.captchaVerification.id = Cookies.get('user_id')
    this.welcomeInit()
    this.baseInfoInit()
    this.deviceSummaryInit()
  }
}
</script>

<style>
.cal{
  background-color: rgba(236, 190, 209, 0.133);
}
</style>