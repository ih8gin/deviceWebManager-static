<template>
  <div>
    <el-row>
      <el-col :offset="4">
        <el-row>
          <el-col :span="2">
            <h4>{{ $t('AccountDetail.accountInfo') }}</h4>
          </el-col>
        </el-row>
        <el-form label-position="left" label-width="120px" size="mini">
          <el-row>
            <el-col :span="7">
              <el-form-item :label="$t('AccountDetail.username')">
                <span>{{ accountInfo.username }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item :label="$t('AccountDetail.nickname')">
                <span>{{ accountInfo.nickname }}</span>
                <el-link class="el-icon-edit" @click="modifyNickname = true"></el-link>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <el-form-item :label="$t('AccountDetail.phone')">
                <el-link v-if="accountInfo.phone" :underline="false">
                  {{ accountInfo.phone }}
                  <el-link class="el-icon-edit" @click="modifyPhone = true"></el-link>
                </el-link>
                <el-link v-else @click="modifyPhone = true">{{ $t('AccountDetail.verify') }}</el-link>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item :label="$t('AccountDetail.email')">
                <el-link v-if="accountInfo.email" :underline="false">
                  {{ accountInfo.email }}
                  <el-link class="el-icon-edit" @click="modifyEmail = true"></el-link>
                </el-link>
                <el-link v-else @click="modifyEmail = true">{{ $t('AccountDetail.verify') }}</el-link>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item :label="$t('AccountDetail.password')">
                <span>
                  {{ accountInfo.password.replace(/./g, '*') }}
                  <el-link class="el-icon-edit" @click="modifyPassword = true"></el-link>
                </span>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="2">
              <h4>{{ $t('AccountDetail.bizInfo') }}</h4>
            </el-col>
            <el-col :span="2">
              <h3><el-link class="el-icon-edit" @click="modifyBizInfo = true"></el-link></h3>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <el-form-item :label="$t('AccountDetail.initTime')">
                <span>{{ accountInfo.initTime.replace(/[TZ]/g, ' ') }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item :label="$t('AccountDetail.accountType')">
                <span>{{ accountInfo.accountType }}</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <el-form-item :label="$t('AccountDetail.name')">
                <span>{{ accountInfo.name }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item :label="$t('AccountDetail.verification')">
                <span>{{ accountInfo.verification }}</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <el-form-item :label="$t('AccountDetail.address')">
                <span>{{ accountInfo.address }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item :label="$t('AccountDetail.field')">
                <span>{{ accountInfo.field }}</span>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="2">
              <h4>{{ $t('AccountDetail.note') }}</h4>
            </el-col>
            <el-col :span="2">
              <h3><el-link class="el-icon-edit" @click="modifyNote = true"></el-link></h3>
            </el-col>
          </el-row>
          <el-form-item label="">
            <span>{{ accountInfo.note }}</span>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-dialog :title="$t('AccountDetail.modifyNickname')" :visible.sync="modifyNickname" width="600px">
      <el-input v-model="accountInfo.nickname"></el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="modifyNickname = false">{{ $t('common.cancel') }}</el-button>
        <el-button type="primary" @click="updateNickname()">{{ $t('common.confirm') }}</el-button>
      </div>
    </el-dialog>
    
    <el-dialog :title="$t('AccountDetail.modifyPhone')" :visible.sync="modifyPhone" width="600px">
      <el-form>
        <el-form-item>
          <el-input :placeholder="$t('AccountDetail.phone')" v-model="captchaVerification.phone"></el-input>
        </el-form-item>
        <el-form-item style="margin-top: 10px;">
          <el-col :span="19"><el-input :placeholder="$t('AccountDetail.captcha')" v-model="captchaVerification.captcha"></el-input></el-col>
          <el-col :span="5"><el-button @click="requestForCaptcha" style="width: 100%;">{{ $t('AccountDetail.getCaptcha') }}</el-button></el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="modifyPhone = false">{{ $t('common.cancel') }}</el-button>
        <el-button type="primary" @click="updatePhone()">{{ $t('common.confirm') }}</el-button>
      </div>
    </el-dialog>

    <el-dialog :title="$t('AccountDetail.modifyEmail')" :visible.sync="modifyEmail" width="600px">
      <el-form>
        <el-form-item>
          <el-input :placeholder="$t('AccountDetail.email')" v-model="captchaVerification.email"></el-input>
        </el-form-item>
        <el-form-item style="margin-top: 10px;">
          <el-col :span="19"><el-input :placeholder="$t('AccountDetail.captcha')" v-model="captchaVerification.captcha"></el-input></el-col>
          <el-col :span="5"><el-button @click="requestForCaptcha" style="width: 100%;">{{ $t('AccountDetail.getCaptcha') }}</el-button></el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="modifyEmail = false">{{ $t('common.cancel') }}</el-button>
        <el-button type="primary" @click="updateEmail()">{{ $t('common.confirm') }}</el-button>
      </div>
    </el-dialog>

    <el-dialog :title="$t('AccountDetail.modifyPassword')" :visible.sync="modifyPassword" width="600px">
      <el-form label-position="left" label-width="120px">
        <el-form-item :label="$t('AccountDetail.originalPassword')">
          <el-input v-model="passwordUpdateForm.original"></el-input>
        </el-form-item>
        <el-form-item :label="$t('AccountDetail.newPassword')" style="margin-top: 10px;">
          <el-input v-model="passwordUpdateForm.new_once"></el-input>
        </el-form-item>
        <el-form-item :label="$t('AccountDetail.confirmNewPassword')" style="margin-top: 10px;">
          <el-input v-model="passwordUpdateForm.new"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="modifyPassword = false">{{ $t('common.cancel') }}</el-button>
        <el-button type="primary" @click="updatePassword()">{{ $t('common.confirm') }}</el-button>
      </div>
    </el-dialog>

    <el-dialog :title="$t('AccountDetail.modifyBizInfo')" :visible.sync="modifyBizInfo" width="600px">
      <el-form label-position="left" label-width="120px">
        <el-form-item :label="$t('AccountDetail.accountType')">
          <el-select v-model="accountInfo.accountType" :placeholder="$t('common.selecter')" style="width: 100%;">
              <el-option
                v-for="item in accountTypesEnum"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('AccountDetail.name')" style="margin-top: 10px;">
          <el-input v-model="accountInfo.name"></el-input>
        </el-form-item>
        <el-form-item :label="$t('AccountDetail.address')" style="margin-top: 10px;">
          <el-input v-model="accountInfo.address"></el-input>
        </el-form-item>
        <el-form-item :label="$t('AccountDetail.field')" style="margin-top: 10px;">
          <el-input v-model="accountInfo.field"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="modifyBizInfo = false">{{ $t('common.cancel') }}</el-button>
        <el-button type="primary" @click="updateBizInfo()">{{ $t('common.confirm') }}</el-button>
      </div>
    </el-dialog>

    <el-dialog :title="$t('AccountDetail.modifyNote')" :visible.sync="modifyNote" width="600px">
      <el-input type="textarea" :rows="4" v-model="accountInfo.note"></el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="modifyNote = false">{{ $t('common.cancel') }}</el-button>
        <el-button type="primary" @click="updateNote()">{{ $t('common.confirm') }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>
  
  <script>
  import {adminAPI} from '@/api/API'
  import Cookies from 'js-cookie'
  export default {
    name:"AccountDetail",
    data() {
      return{
        accountInfo: {
          id: '',
          // base info
          username: '',
          nickname: '',
          password: '',
          phone: '',
          email: '',
          // note
          note: '',
          // business info
          initTime: '',
          accountType: '',
          name: '',
          verification: '',
          address: '',
          field: '',
        },
        modifyNickname: false,
        modifyPassword: false,
        modifyEmail: false,
        modifyPhone: false,
        modifyBizInfo: false,
        modifyNote: false,
        captchaVerification:{
          email: '',
          phone: '',
          captcha: ''
        },
        passwordUpdateForm:{
          original: '',
          new_once: '',
          new: ''
        },
        accountTypesEnum:[{
          value: 1,
          label: this.$t('accountTypesEnum.enterprise')
        },
        {
          value: 2,
          label: this.$t('accountTypesEnum.indivisual')
        }]
      }
    },
    created() {
      this.getData()
    },
    methods: {
      async getData() {
        adminAPI.getDetail({id: Cookies.get("user_id")}).then(data => {
          console.log(data)
          if (data.statusCode == 200){
            this.accountInfo = data.data
          }
        })
      },
      clearUpdateCache(){
        this.captchaVerification={
          email: '',
          phone: '',
          captcha: ''
        }
        this.passwordUpdateForm={
          original: '',
          new_once: '',
          new: ''
        }
      },
      updateEmail(){
        adminAPI.update({
          id: this.accountInfo.id,
          email: this.captchaVerification.email,
          captcha: this.captchaVerification.captcha,
        }).then(data => {
          console.log(data)
          if (data.statusCode == 200){
            this.getData()
            this.clearUpdateCache()
          }
        })
        this.modifyEmail = false
      },
      updatePhone(){
        adminAPI.update({
          id: this.accountInfo.id,
          phone: this.captchaVerification.phone,
          captcha: this.captchaVerification.captcha,
        }).then(data => {
          console.log(data)
          if (data.statusCode == 200){
            this.getData()
            this.clearUpdateCache()
          }
        })
        this.modifyPhone = false
      },
      updateNickname(){
        adminAPI.update({
          id: this.accountInfo.id,
          nickname: this.accountInfo.nickname,
        }).then(data => {
          console.log(data)
          if (data.statusCode == 200){
            this.getData()
            Cookies.set("user_nickname", this.accountInfo.nickname, {
              expires: 1
            })
          }
        })
        this.modifyNickname = false
      },
      updatePassword(){
        if (this.passwordUpdateForm.original != this.accountInfo.password){
          alert(this.$t('AccountDetail.originalPasswordNotMatch'))
            this.clearUpdateCache()
          return
        }
        if (this.passwordUpdateForm.new_once != this.passwordUpdateForm.new){
          alert(this.$t('AccountDetail.newPasswordNotMatch'))
          this.passwordUpdateForm.new = ''
          return
        }
        adminAPI.update({
          id: this.accountInfo.id,
          password: this.passwordUpdateForm.new,
        }).then(data => {
          console.log(data)
          if (data.statusCode == 200){
            this.getData()
            this.clearUpdateCache()
          }
        })
        this.modifyPassword = false
      },
      updateBizInfo(){
        adminAPI.update({
          id: this.accountInfo.id,
          accountType: this.accountInfo.accountType,
          name: this.accountInfo.name,
          verification: this.accountInfo.verification,
          address: this.accountInfo.address,
          field: this.accountInfo.field,
        }).then(data => {
          console.log(data)
          if (data.statusCode == 200){
            this.getData()
          }
        })
        this.modifyBizInfo = false
      },
      updateNote(){
        adminAPI.update({
          id: this.accountInfo.id,
          note: this.accountInfo.note
        }).then(data => {
          console.log(data)
          if (data.statusCode == 200){
            this.getData()
          }
        })
        this.modifyNote = false
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
      }
    }
  }
  </script>
  
  <style>
  .el-form-item{
    margin-bottom: 0px;
  }
  </style>