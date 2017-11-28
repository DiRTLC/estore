<template>
  <div>
    <div class="commonTab">
      <div class="user">
        <img src="./ico3.png" alt="">
        <input type="text" placeholder="手机号/邮箱/用户名" v-model="phone">
      </div>
      <div class="password">
        <img src="./ico4.png" alt="">
        <input type="text" placeholder="输入密码" v-model="code">
      </div>
      <p class="forgot"><a href="#">忘记密码?</a></p>
      <div class="loginButton">
        <a href="#" @click="login">
          登录
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    props: {
      changeTab: Function
    },
    data () {
      return {
        phone: '',
        code: '',
        tab: 1
      }
    },
    mounted() {
      this.changeTab(true)
      this.$store.dispatch('myepet')
    },
    methods: {
      login() {
        axios.post('/login', {phone: this.phone, code: this.code}).then(response => {
          const result = response.data
          if (result.code == 0) {
            const user = result.data
            alert(`登陆成功: ${user.phone}`)
          } else {
            alert(`登陆失败, 请输入正确的手机号和验证码`)
          }
        })
      }
    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.commonTab
  box-sizing border-box
  border-radius 6px
  margin 0 4% 12px 4%
  padding 0 1.6%
  .user
    box-sizing border-box
    border-bottom #e2e2e2 solid 1px
    padding 12px 0 12px 30px
    position relative
    img
      float left
      width 17px
      height 17px
      margin 1px 0 0 -25px
    input
      display block
      height 21px
      width 100%
      font-size 15px
      color #666
      border-radius: 3px
  .password
    box-sizing border-box
    border-bottom #e2e2e2 solid 1px
    padding 12px 0 12px 30px
    position relative
    img
      float left
      width 16px
      height 20px
      margin 0 0 0 -25px
    input
      display block
      height 21px
      width 100%
      font-size 15px
      color #666
      border-radius: 3px
  .forgot
    box-sizing border-box
    margin-top 11px
    padding 0 10px
    text-align right
  .loginButton
    box-sizing border-box
    padding-top 5px
    text-align center
    a
      box-sizing border-box
      margin 0 -2%
      display block
      color #fff
      letter-spacing 14px
      border-radius 5px
      background #2ec975
      font-size 15px
      padding 7px 0
      text-align center

  input::-webkit-input-placeholder{
    color #e2e2e2
  }


</style>
