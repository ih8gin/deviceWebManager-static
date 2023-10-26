<template>
  <div style="overflow: hidden;">
    <el-row :span="2" style="background-color: #2c3e50">
      <el-col :offset="1" :span="2">
        <img src="./assets/logo.png" width="80" style="margin-top: 10%;"/>
      </el-col>
      <el-col :span="8">
        <h1 style="color: aliceblue;">{{ $t('common.title') }}</h1>
      </el-col>
      <el-col :span="1" :offset="11">
        <h1>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link" style="color: aliceblue;">
              {{language}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="zh">中文</el-dropdown-item>
              <el-dropdown-item command="en">English</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </h1>
      </el-col>
    </el-row>
    <el-row :offset="2"><router-view></router-view></el-row>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return{
      language:'中文'
    }
  },
  methods: {
    handleCommand(command) {
      // console.log('command trigered')
      if (command == 'zh') {
        this.$i18n.locale = 'zh'
        this.language = '中文'
      } else if (command == 'en') {
        this.$i18n.locale = 'en'
        this.language = 'English'
      }
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
