<template>
  <div class="myepetWrap">
    <div class="myepetHeader"  v-if="changeShow">
      <div class="myepetTop">
        <div @click="myepet" class="back"><i class="iconfont icon-xiangzuojiantou"></i></div>
        <div class="goRegister"><router-link to="/myepet/register" @click.native="showRegister">注册</router-link></div>
      </div>
      <div class="logo"><img src="./logo.png" alt=""></div>
      <div class="myepetTab">
        <div class="commonLogin" @click="changeTab(true)"><router-link to="/myepet/login1">普通登录</router-link><div class="iconWrap" v-show="tab"><i class="iconfont icon-xiaosanjiao"></i></div></div>
        <div class="phoneLogin" @click="changeTab(false)"><router-link to="/myepet/login2">手机动态密码登录</router-link><div class="iconWrap" v-show="!tab"><i class="iconfont icon-xiaosanjiao"></i></div></div>
      </div>
    </div>
    <router-view :changeTab="changeTab"></router-view>

    <div class="partner" v-if="changeShow">
      <p class="title">合作网站登录</p>
      <div class="partnerLogoWrap">
        <div class="zhifubao">
          <img src="./login_ico4.png" alt="">
        </div>
        <div class="qq">
          <img src="./login_ico2.png" alt="">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
//  import login from './login/login1.vue'
  export default {
    data () {
      return {
        changeShow: true,
        tab: true
      }
    },
    methods: {
      changeTab (b) {
        this.tab = b
      },
      myepet () {
        this.$router.push('/home')
        this.$store.dispatch('showHeaderWrap')
      },
      showRegister () {
        this.changeShow = !this.changeShow
      }
    },
    components: {
//      login
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.myepetWrap
  position absolute
  top 0
  left 0
  right 0
  bottom -45px
  .myepetHeader
    background-image url("./2ac7b0a4f0ab1e4a63819e0668d1cb39.png")
    background-repeat no-repeat
    background-size 100% 100%
    .myepetTop
      height 50px
      line-height 50px
      position relative
      padding 0 1em
      text-align center
      .back
        box-sizing border-box
        width 22px
        height 20px
        position absolute
        line-height 50px
        .icon-xiangzuojiantou
          color #fff
      .goRegister
        box-sizing border-box
        position absolute
        right 10px
        font-size 16px
        line-height 50px
        a
          color #fff
    .logo
      box-sizing border-box
      padding 12px 0 24px 0
      img
        box-sizing border-box
        display block
        margin auto
        width 20%
    .myepetTab
      box-sizing border-box
      background-color rgba(225, 225, 225, 0.3)
      display flex
      .commonLogin, .phoneLogin
        width 50%
        height 44px
        line-height 44px
        position relative
        a
          display block
          width 100%
          height 100%
          text-align center
          font-size 15px
          color #fff
        .iconWrap
          box-sizing border-box
          position absolute
          top 0
          left 50%
          margin-left -10px
          .icon-xiaosanjiao
            box-sizing border-box
            padding-right 50%
            font-size 20px
            color #fff
            position absolute
            top 18px
            left 50%
  .partner
    width 100%
    position fixed
    left 0
    bottom 0
    .title
      text-align center
      color #d7d7d7
    .partnerLogoWrap
      box-sizing border-box
      padding 18px 0
      display flex
      justify-content space-around

      .zhifubao, .qq
        width 50%
        text-align center
        img
          width 30%

</style>
