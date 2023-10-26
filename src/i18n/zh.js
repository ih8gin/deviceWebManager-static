module.exports = {
    common:{
        title:'疲劳驾驶检测管理系统',
        cancel:"取 消",
        confirm:'确 定',
        selecter:'请选择',
    },
    login:{
        loginTitle:"管理员账号登录",
        login:"登 录",
        register:'注 册',
        username_placeholder:'请输入账户名',
        password_placeholder:'请输入密码',
    },
    register:{
        title:"管理员账号注册",
        toLogin:"去登陆",
        email:"邮箱",
        changeToEmail:'改用邮箱',
        phone:"电话",
        changeToPhone:"改用电话",
        captcha:'验证码',
        getCaptcha:"获取验证码",
        password:"密码",
        passwordConfirm:'确认密码',
        submit:'注册',
    },
    home:{
        account:'账户',
        device:'设备',
        alert:'告警',
        MyAccount:'我的账户',
        AccountDetail:'详细信息',
        MyDevice:'我的设备',
        NewDevice:'登记新设备',
        AlertRecord:'告警记录',
        AlertMessage:'告警通知',
    },
    AccountDetail:{
        accountInfo:'账户信息',
        username:'用户名',
        nickname:'用户昵称',
        phone:'联系电话',
        verify:'去验证',
        email:'联系邮箱',
        password:'账户密码',
        bizInfo:'业务信息',
        initTime:"创建时间",
        accountType:"账户类型",
        name:"企业/个人名称",
        verification:'验证信息',
        address:"联系地址",
        field:'应用领域',
        note:'备注信息',
        modifyNickname:'修改账户昵称',
        modifyPhone:'修改账户绑定电话',
        modifyEmail:'修改账户绑定邮箱',
        modifyPassword:'修改账户密码',
        modifyBizInfo:'修改账户业务信息',
        modifyNote:'修改账户备注信息',
        captcha:'验证码',
        getCaptcha:'获取验证码',
        originalPassword:'原密码',
        newPassword:'新密码',
        confirmNewPassword:'确认新密码',
        originalPasswordNotMatch:'输入原密码不正确！',
        newPasswordNotMatch:'两次输入的新密码不一致！',
        emptyInput:'请输入信息!',
    },
    MyAccount:{
        deviceSummary:'设备概览',
        runningDevice:'运行中设备',
        warningDevice:'告警设备',
        phone:'联系电话',
        verify:'去验证',
        email:'联系邮箱',
        modifyPhone:'修改账户绑定电话',
        modifyEmail:'修改账户绑定邮箱',
        captcha:'验证码',
        getCaptcha:'获取验证码',
        emptyInput:'请输入信息!',
    },
    AlertRecord:{
        deviceId:'设备ID',
        timeFrom:'起始时间',
        timeTo:'截止时间',
        type:'告警类型',
        index:'序号',
        username:'用户姓名',
        phone:'用户电话',
        ip:'IP地址',
        time:'产生时间',
        deleteAlerts:'清除告警',
    },
    MyDevice:{
        id:'设备ID',
        type:'设备类型',
        verificationCode:'识别码',
        index:'序号',
        activationTime:'登记时间',
        expirationTime:'过期时间',
        note:'备注'
    },
    NewDevice:{
        verificationCode:'标识码',
        type:'类型',
        expirationTime:'有效截止时间',
        note:'备注信息',
        submit:'注册设备',
    },
    accountTypesEnum:{
        enterprise:'企业账户',
        indivisual:'个人账户',
    },
    welcome:{
        lateNight:'夜深了',
        morning:'早上好',
        noon:'中午好',
        afternoon:'下午好',
        night:'晚上好',
    },
    alertTypesEnum:{
        closeEyes:'闭眼',
        yawn:'哈欠',
        onCall:'打电话',
        lookAround:'左顾右盼',
    },

    // element-ui-locale
    el: {
        colorpicker: {
          confirm: '确定',
          clear: '清空'
        },
        datepicker: {
          now: '此刻',
          today: '今天',
          cancel: '取消',
          clear: '清空',
          confirm: '确定',
          selectDate: '选择日期',
          selectTime: '选择时间',
          startDate: '开始日期',
          startTime: '开始时间',
          endDate: '结束日期',
          endTime: '结束时间',
          prevYear: '前一年',
          nextYear: '后一年',
          prevMonth: '上个月',
          nextMonth: '下个月',
          year: '年',
          month1: '1 月',
          month2: '2 月',
          month3: '3 月',
          month4: '4 月',
          month5: '5 月',
          month6: '6 月',
          month7: '7 月',
          month8: '8 月',
          month9: '9 月',
          month10: '10 月',
          month11: '11 月',
          month12: '12 月',
          // week: '周次',
          weeks: {
            sun: '日',
            mon: '一',
            tue: '二',
            wed: '三',
            thu: '四',
            fri: '五',
            sat: '六'
          },
          months: {
            jan: '一月',
            feb: '二月',
            mar: '三月',
            apr: '四月',
            may: '五月',
            jun: '六月',
            jul: '七月',
            aug: '八月',
            sep: '九月',
            oct: '十月',
            nov: '十一月',
            dec: '十二月'
          }
        },
        select: {
          loading: '加载中',
          noMatch: '无匹配数据',
          noData: '无数据',
          placeholder: '请选择'
        },
        cascader: {
          noMatch: '无匹配数据',
          loading: '加载中',
          placeholder: '请选择',
          noData: '暂无数据'
        },
        pagination: {
          goto: '前往',
          pagesize: '条/页',
          total: '共 {total} 条',
          pageClassifier: '页'
        },
        messagebox: {
          title: '提示',
          confirm: '确定',
          cancel: '取消',
          error: '输入的数据不合法!'
        },
        upload: {
          deleteTip: '按 delete 键可删除',
          delete: '删除',
          preview: '查看图片',
          continue: '继续上传'
        },
        table: {
          emptyText: '暂无数据',
          confirmFilter: '筛选',
          resetFilter: '重置',
          clearFilter: '全部',
          sumText: '合计'
        },
        tree: {
          emptyText: '暂无数据'
        },
        transfer: {
          noMatch: '无匹配数据',
          noData: '无数据',
          titles: ['列表 1', '列表 2'],
          filterPlaceholder: '请输入搜索内容',
          noCheckedFormat: '共 {total} 项',
          hasCheckedFormat: '已选 {checked}/{total} 项'
        },
        image: {
          error: '加载失败'
        },
        pageHeader: {
          title: '返回'
        },
        popconfirm: {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        },
        empty: {
          description: '暂无数据'
        }
      }
}