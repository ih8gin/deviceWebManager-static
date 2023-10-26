module.exports = {
    common:{
        title:'Driving Fatigue Detection Monitor',
        cancel:"cancel",
        confirm:'confirm',
        selecter:'please select',
    },
    login:{
        loginTitle:"Administrator Login",
        login:"login",
        register:'register',
        username_placeholder:'please input username',
        password_placeholder:'please input password',
    },
    register:{
        title:"Register for Administrator Account",
        toLogin:"Go Login",
        email:"email address",
        changeToEmail:'switch to email',
        phone:"phone number",
        changeToPhone:"switch to phone",
        captcha:'captcha',
        getCaptcha:"get captcha",
        password:"password",
        passwordConfirm:'confirm password',
        submit:'register',
    },
    home:{
        account:'Account',
        device:'Device',
        alert:'Alert',
        MyAccount:'MyAccount',
        AccountDetail:'AccountDetail',
        MyDevice:'MyDevice',
        NewDevice:'NewDevice',
        AlertRecord:'AlertRecord',
        AlertMessage:'AlertMessage',
    },
    AccountDetail:{
        accountInfo:'Account Information',
        username:'username',
        nickname:'nickname',
        phone:'phone',
        verify:'go verify',
        email:'email',
        password:'password',
        bizInfo:'Business Information',
        initTime:"initialized at",
        accountType:"type of account",
        name:"name",
        verification:'verification information',
        address:"address",
        field:'field',
        note:'Note',
        modifyNickname:'Modify Nickname',
        modifyPhone:'Modify phone',
        modifyEmail:'Modify Email',
        modifyPassword:'Modify Password',
        modifyBizInfo:'Modify Business Infomation',
        modifyNote:'Modify Note',
        captcha:'captcha',
        getCaptcha:'get captcha',
        originalPassword:'original',
        newPassword:'new',
        confirmNewPassword:'confirm new',
        originalPasswordNotMatch:'Original password does not match the Input!',
        newPasswordNotMatch:'Double input new passwords do not match!',
        emptyInput:'Empty input!',
    },
    MyAccount:{
        deviceSummary:'Device Summary',
        runningDevice:'Running',
        warningDevice:'Warning',
        phone:'phone',
        verify:'go verify',
        email:'email',
        modifyPhone:'Modify Phone',
        modifyEmail:'Modify Email',
        captcha:'captcha',
        getCaptcha:'get captcha',
        emptyInput:'Empty Input!',
    },
    AlertRecord:{
        deviceId:'device id',
        timeFrom:'from',
        timeTo:'to',
        type:'type',
        index:'index',
        username:'username',
        phone:'phone',
        ip:'ip address',
        time:'time',
        deleteAlerts:'delete',
    },
    MyDevice:{
        id:'id',
        type:'type',
        verificationCode:'verification code',
        index:'index',
        activationTime:'activation',
        expirationTime:'expiration',
        note:'note'
    },
    NewDevice:{
        verificationCode:'verification code',
        type:'type',
        expirationTime:'expiration',
        note:'note',
        submit:'submit',
    },
    accountTypesEnum:{
        enterprise:'enterprise',
        indivisual:'indivisual',
    },
    welcome:{
        lateNight:'Already Late Night',
        morning:'Good Morning',
        noon:'Good Noon',
        afternoon:'Good Afternoon',
        night:'Good Night',
    },
    alertTypesEnum:{
        closeEyes:'eyes close',
        yawn:'yawn',
        onCall:'on call',
        lookAround:'looking around',
    },

    // element-ui-locale
    el: {
        colorpicker: {
          confirm: 'OK',
          clear: 'Clear'
        },
        datepicker: {
          now: 'Now',
          today: 'Today',
          cancel: 'Cancel',
          clear: 'Clear',
          confirm: 'OK',
          selectDate: 'Select date',
          selectTime: 'Select time',
          startDate: 'Start Date',
          startTime: 'Start Time',
          endDate: 'End Date',
          endTime: 'End Time',
          prevYear: 'Previous Year',
          nextYear: 'Next Year',
          prevMonth: 'Previous Month',
          nextMonth: 'Next Month',
          year: '',
          month1: 'January',
          month2: 'February',
          month3: 'March',
          month4: 'April',
          month5: 'May',
          month6: 'June',
          month7: 'July',
          month8: 'August',
          month9: 'September',
          month10: 'October',
          month11: 'November',
          month12: 'December',
          week: 'week',
          weeks: {
            sun: 'Sun',
            mon: 'Mon',
            tue: 'Tue',
            wed: 'Wed',
            thu: 'Thu',
            fri: 'Fri',
            sat: 'Sat'
          },
          months: {
            jan: 'Jan',
            feb: 'Feb',
            mar: 'Mar',
            apr: 'Apr',
            may: 'May',
            jun: 'Jun',
            jul: 'Jul',
            aug: 'Aug',
            sep: 'Sep',
            oct: 'Oct',
            nov: 'Nov',
            dec: 'Dec'
          }
        },
        select: {
          loading: 'Loading',
          noMatch: 'No matching data',
          noData: 'No data',
          placeholder: 'Select'
        },
        cascader: {
          noMatch: 'No matching data',
          loading: 'Loading',
          placeholder: 'Select',
          noData: 'No data'
        },
        pagination: {
          goto: 'Go to',
          pagesize: '/page',
          total: 'Total {total}',
          pageClassifier: ''
        },
        messagebox: {
          title: 'Message',
          confirm: 'OK',
          cancel: 'Cancel',
          error: 'Illegal input'
        },
        upload: {
          deleteTip: 'press delete to remove',
          delete: 'Delete',
          preview: 'Preview',
          continue: 'Continue'
        },
        table: {
          emptyText: 'No Data',
          confirmFilter: 'Confirm',
          resetFilter: 'Reset',
          clearFilter: 'All',
          sumText: 'Sum'
        },
        tree: {
          emptyText: 'No Data'
        },
        transfer: {
          noMatch: 'No matching data',
          noData: 'No data',
          titles: ['List 1', 'List 2'], // to be translated
          filterPlaceholder: 'Enter keyword', // to be translated
          noCheckedFormat: '{total} items', // to be translated
          hasCheckedFormat: '{checked}/{total} checked' // to be translated
        },
        image: {
          error: 'FAILED'
        },
        pageHeader: {
          title: 'Back' // to be translated
        },
        popconfirm: {
          confirmButtonText: 'Yes',
          cancelButtonText: 'No'
        },
        empty: {
          description: 'No Data'
        }
      }
}