<template>
  <div>
    <el-form v-model="query" style="margin-top: 10px;">
      <el-col :span="4">
        <el-form-item :label="$t('AlertRecord.deviceId')">
          <el-col :span="16">
            <el-input v-model="query.deviceId"></el-input>
          </el-col>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item :label="$t('AlertRecord.timeFrom')">
          <el-col :span="16">
            <el-date-picker type="datetime" v-model="query.timeFrom" value-format="yyyy-MM-ddTHH:mm:ssZ" style="width: 100%;" popper-class="select_box"></el-date-picker>
          </el-col>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item :label="$t('AlertRecord.timeTo')">
          <el-col :span="16">
            <el-date-picker type="datetime" v-model="query.timeTo" value-format="yyyy-MM-ddTHH:mm:ssZ" style="width: 100%;" popper-class="select_box"></el-date-picker>
          </el-col>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item :label="$t('AlertRecord.type')">
          <el-col :span="16">
            <el-select v-model="query.type" multiple :placeholder="$t('common.selecter')">
              <el-option
                v-for="item in alertTypesEnum"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-form-item>
      </el-col>
    </el-form>
    <el-table :data="alerts" max-height="350">
      <el-table-column
        type="index"
        :label="$t('AlertRecord.index')"
        width="40">
      </el-table-column>
      <el-table-column
        prop="deviceId"
        :label="$t('AlertRecord.deviceId')"
        width="40">
      </el-table-column>
      <el-table-column
      :label="$t('AlertRecord.username')"
        width="80">
        <template slot-scope="scope">{{ scope.row.userInfo.split(' ')[0] }}</template>
      </el-table-column>
      <el-table-column
      :label="$t('AlertRecord.phone')"
        width="80">
        <template slot-scope="scope">{{ scope.row.userInfo.split(' ')[1] }}</template>
      </el-table-column>
      <el-table-column
        prop="ip"
        :label="$t('AlertRecord.ip')"
        width="100">
      </el-table-column>
      <el-table-column
        :label="$t('AlertRecord.time')"
        width="100">
        <template slot-scope="scope">{{ scope.row.time.replace(/[TZ]/g, ' ') }}</template>
      </el-table-column>
      <el-table-column
        :label="$t('AlertRecord.type')"
        width="100">
        <template slot-scope="scope">{{ alertTypesEnum[scope.row.type-1] && alertTypesEnum[scope.row.type-1].label }}</template>
      </el-table-column>
    </el-table>
    <el-row style="margin-top: 10px;">
      <el-col :span=3 style="margin-left: 82%;">
        <el-button type="danger" size="mini" @click="deleteAlerts()">{{ $t('AlertRecord.deleteAlerts') }}</el-button>
      </el-col>
    </el-row>
  </div>
</template>
  
<script>
import {alertAPI} from '@/api/API'
import Cookies from 'js-cookie'
export default {
  name:"AlertRecord",
  data() {
    return{
      query: {
        deviceId: '',
        adminId: '',
        timeFrom: '',
        timeTo: '',
        type: []
      },
      alertTypesEnum: [{
        value: 1,
        label: this.$t('alertTypesEnum.closeEyes')
      },
      {
        value: 2,
        label: this.$t('alertTypesEnum.yawn')
      },
      {
        value: 3,
        label: this.$t('alertTypesEnum.onCall')
      },
      {
        value: 4,
        label: this.$t('alertTypesEnum.lookAround')
      }],
      alerts: []
    }
  },
  created() {
    this.queryInit()
    setInterval(this.refreshTable, 5*1000);
  },
  watch: {
    query: {
      handler() {
      // console.log("query has changed")
        this.refreshTable()
      },
      deep: true
    }
  },
  methods: {
    queryInit() {
      this.query.adminId = Cookies.get("user_id")
    },
    refreshTable() {
      alertAPI.getList(this.query).then(data => {
        // console.log("refreashing data!")
        // console.log(data)
        if(data.statusCode == 200) this.alerts = data.data
      })
    },
    deleteAlerts() {
      alertAPI.delete(this.query).then(data => {
        if(data.statusCode == 200) this.alerts = data.data
      })
    }
  }
}
</script>

<style>
</style>