<template>
  <div>
    <el-form label-width="70px" label-position="left">
      <el-row>
        <el-col :span="12">
          <el-form-item :label="$t('MyDevice.activationTime')">
            <el-col :span="11">
              <el-date-picker type="datetime" v-model="query.activationTimeFrom" value-format="yyyy-MM-ddTHH:mm:ssZ" style="width: 93%;" popper-class="select_box"></el-date-picker>
            </el-col>
            <el-col :span="1">-</el-col>
            <el-col :span="11">
              <el-date-picker type="datetime" v-model="query.activationTimeTo" value-format="yyyy-MM-ddTHH:mm:ssZ" style="width: 93%;" popper-class="select_box"></el-date-picker>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="$t('MyDevice.expirationTime')">
            <el-col :span="11">
              <el-date-picker type="datetime" v-model="query.expirationTimeFrom" value-format="yyyy-MM-ddTHH:mm:ssZ" style="width: 93%;" popper-class="select_box"></el-date-picker>
            </el-col>
            <el-col :span="1">-</el-col>
            <el-col :span="11">
              <el-date-picker type="datetime" v-model="query.expirationTimeTo" value-format="yyyy-MM-ddTHH:mm:ssZ" style="width: 93%;" popper-class="select_box"></el-date-picker>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row style="margin-top: 10px;">
        <el-col :span="5">
          <el-form-item :label="$t('MyDevice.id')">
            <el-col>
              <el-input style="width: 93%;" v-model="query.id"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item :label="$t('MyDevice.type')">
            <el-col>
              <el-select style="width: 85%;" :placeholder="$t('common.selecter')" v-model="query.type" multiple>
                <el-option
                  v-for="item in deviceTypesEnum"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label-width="90px" :label="$t('MyDevice.verificationCode')">
            <el-col>
              <el-input style="width: 92%;" v-model="query.verificationCode"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-table :data="devices" style="margin-top: 10px;">
      <el-table-column
        type="index"
        :label="$t('MyDevice.index')"
        width="1">
      </el-table-column>
      <el-table-column
        prop="id"
        :label="$t('MyDevice.id')"
        width="2">
      </el-table-column>
      <el-table-column
        prop="verificationCode"
        :label="$t('MyDevice.verificationCode')"
        width="4">
      </el-table-column>
      <el-table-column
        :label="$t('MyDevice.activationTime')"
        width="4">
        <template slot-scope="scope">{{ scope.row.activationTime.replace(/[TZ]/g, ' ') }}</template>
      </el-table-column>
      <el-table-column
        :label="$t('MyDevice.expirationTime')"
        width="4">
        <template slot-scope="scope">{{ scope.row.expirationTime.replace(/[TZ]/g, ' ') }}</template>
      </el-table-column>
      <el-table-column
        :label="$t('MyDevice.type')"
        width="2">
        <template slot-scope="scope">{{ deviceTypesEnum[scope.row.type-1] && deviceTypesEnum[scope.row.type-1].label }}</template>
      </el-table-column>
      <el-table-column
        prop="note"
        :label="$t('MyDevice.note')"
        width="4">
      </el-table-column>
    </el-table>
  </div>
</template>
  
  <script>
  import {deviceAPI} from '@/api/API'
  import Cookies from 'js-cookie'
  export default {
    name:"MyDevice",
    data() {
      return{
        query: {
          id: '',
          adminId: '',
          verificationCode: '',
          type: [],
          activationTimeFrom: '',
          activationTimeTo: '',
          expirationTimeFrom: '',
          expirationTimeTo: '',
        },
        devices: [{
          id: '',
          verificationCode: '',
          activationTime: '',
          expirationTime: '',
          type: '',
          note: '',
        }],
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
    created() {
      this.queryInit()
    },
    watch: {
      query: {
        handler(newValue) {
        // console.log("query has changed")
        this.refreshTable(newValue)
        },
        deep: true
      }
    },
    methods: {
      queryInit() {
        this.query.adminId = Cookies.get("user_id")
      },
      refreshTable(query) {
        deviceAPI.getList(query).then(data => {
          if(data.statusCode == 200) this.devices = data.data
        })
      }
    }
  }
  </script>
  
  <style>
  
  </style>