<template>
  <div class="phoneTab">
    <div class="phone">
      <img src="./ico1.png" alt="">
      <input type="text" placeholder="已注册的手机号">
    </div>
    <div class="code">
      <img src="./ico4.png" alt="">
      <input type="text" placeholder="请输入图片内容">
      <span class="codeImg"><img src="./close3.png" alt=""></span>
    </div>
    <div class="dynamic">
      <img src="./ico4.png" alt="">
      <input type="text" placeholder="动态密码">
      <a href="#" class="getCode">获取动态密码</a>
    </div>
    <p class="forgotP"><a href="#">忘记密码?</a></p>
    <div class="loginButton">
      <a href="#">
        登录
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      changeTab: Function
    },
    mounted() {
      this.changeTab(false)
      this.$store.dispatch('myepet')
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .phoneTab
    box-sizing border-box
    border-radius 6px
    margin 0 4% 12px 4%
    padding 0 1.6%
    & input::-webkit-input-placeholder{
        color #e2e2e2
      }
    .phone
      box-sizing border-box
      border-bottom #e2e2e2 solid 1px
      padding 12px 0 12px 30px
      position relative
      img
        float left
        width 10px
        height 17px
        margin 2px 0 0 -25px
      input
        display block
        height 21px
        width 100%
        font-size 15px
        color #666
        border-radius: 3px
    .code
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
      .codeImg
        display block
        position absolute
        top 5px
        right 0
        img
          display block
    .dynamic
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
      .getCode
        box-sizing border-box
        display block
        color #ff4259
        border 1px solid #eb4c33
        position absolute
        top 6px
        right 0
        border-radius 3px
        width 100px
        text-align center
        padding 4px 0
        font-size 12px
  .forgotP
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
</style>
