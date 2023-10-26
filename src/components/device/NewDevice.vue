<template>
  <div>
    <el-row>
      <el-col :offset="4" v-model="form">
        <el-form label-width="120px" label-position="left">
          <el-row>
            <el-col :span="7">
              <el-form-item :label="$t('NewDevice.verificationCode')">
              <el-input v-model="form.verificationCode"></el-input>
            </el-form-item>
            </el-col>
          </el-row>
          <el-row style="margin-top: 10px;">
            <el-col :span="7">
              <el-form-item :label="$t('NewDevice.type')">
                <el-select v-model="form.type" :placeholder="$t('common.selecter')" style="width: 100%;">
                  <el-option
                    v-for="item in deviceTypesEnum"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row style="margin-top: 10px;">
            <el-col :span="7">
              <el-form-item :label="$t('NewDevice.expirationTime')">
                <el-date-picker type="datetime" v-model="form.expirationTime" value-format="yyyy-MM-ddTHH:mm:ssZ" style="width: 100%;" popper-class="select_box"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row style="margin-top: 10px;">
            <el-col :span="7">
              <el-form-item :label="$t('NewDevice.note')">
                <el-input v-model="form.note" type="textarea" :row="2"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row style="margin-top: 10px;">
            <el-col :span="7">
              <el-form-item>
                <el-button type='primary' style="width: 100%;" @click="submit">{{ $t('NewDevice.submit') }}</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
  
  <script>
  import Cookies from 'js-cookie'
  import {deviceAPI} from '@/api/API'
  export default {
    name:"NewDevice",
    data() {
      return{
        form: {
          adminId:'',
          verificationCode:'',
          type:'',
          activationTime:'',
          expirationTime:'',
          note:''
        },
        deviceTypesEnum: [{
          value: 1,
          label: "windows"
        },
        {
          value: 2,
          label: "RK3568"
        }],
      }
    },
    methods: {
      submit() {
        this.form.activationTime = new Date().toISOString()
        this.form.adminId = Cookies.get("user_id")
        deviceAPI.activate(this.form).then(data => {
          alert(data.message)
          // if (data.statusCode == 200) {
          //   this.$router.push()
          // }     
        })
      }
    }
  }
  </script>
  
  <style>
  
  </style>