<template>
  <el-row>
    <el-col :span="4">
      <el-menu
        default-active="MyAccount"
        class="el-menu-vertical-demo"
        background-color="#85b8cb"
        text-color="#d1ddd8"
        active-text-color="#ffd04b"
        @select=select
        style="height: 90vh;"
        :default-openeds="['account', 'device', 'alert']">
        <el-submenu index="account">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ $t('home.account') }}</span>
          </template>
          <el-menu-item index="MyAccount">{{ $t('home.MyAccount') }}</el-menu-item>
          <el-menu-item index="AccountDetail">{{ $t('home.AccountDetail') }}</el-menu-item>
        </el-submenu>
        <el-submenu index="device">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ $t('home.device') }}</span>
          </template>
          <el-menu-item index="MyDevice">{{ $t('home.MyDevice') }}</el-menu-item>
          <el-menu-item index="NewDevice">{{ $t('home.NewDevice') }}</el-menu-item>
        </el-submenu>
        <el-submenu index="alert">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ $t('home.alert') }}</span>
          </template>
          <el-menu-item index="AlertRecord">{{ $t('home.AlertRecord') }}</el-menu-item>
          <el-menu-item index="AlertMessage" disabled>{{ $t('home.AlertMessage') }}</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
    <el-col :span="19">
      <el-row>
        <el-col :offset="11">
          <h1>{{ $t('home.'+block) }}</h1>
        </el-col>
      </el-row>
      <el-divider/>
      <el-row>
        <el-col :offset="1" :span="22">
          <component v-bind:is="block"></component>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import MyDevice  from '@/components/device/MyDevice.vue'
import NewDevice from '@/components/device/NewDevice.vue'
import MyAccount from '@/components/account/MyAccount.vue'
import AccountDetail from '@/components/account/AccountDetail.vue'
import AlertRecord from '@/components/alert/AlertRecord.vue'
export default {
  name:"HomePage",
  data() {
    return {
      block: 'MyAccount',
    }
  },
  methods:{
    select(key){
      this.block = key
    }
  },
  components:{
    MyDevice,
    NewDevice,
    MyAccount,
    AccountDetail,
    AlertRecord
  }
}
</script>

<style>

</style>