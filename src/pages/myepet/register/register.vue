<template>
<div class="registerWrap">
  <div class="stepOne" v-if="step1">
    <div class="inputPhone">
      <img src="./ico1.png" alt="">
      <input type="text" placeholder="请输入手机号码" v-model="phoneNumber">
    </div>
    <div class="nextStep" @click="next">
      下一步
    </div>
  </div>
  <div class="stepTwo" v-if="!step1">
    <div>
      <img src="./ico1.png" alt="">
      <p></p>
    </div>
    <div>
      <img src="./ico5.png" alt="">
      <input placeholder="图片验证码" type="text">
      <img src="./close3.png" alt="">
    </div>
    <div>
      <img src="./ico2.png" alt="">
      <input placeholder="验证码" type="text">
      <span>获取短信验证码</span>
    </div>
    <div>
      <img src="./ico3.png" alt="">
      <input placeholder="你的昵称/用户名" type="text">
    </div>
    <div>
      <img src="./ico4.png" alt="">
      <input placeholder="请设置密码" type="text">
    </div>
    <div>
      <img src="./ico4.png" alt="">
      <input placeholder="请确认密码" type="text">
    </div>

    <div @click="goLogin">下一步</div>
  </div>

</div>
</template>

<script>
  import axios from 'axios'
  let regexp="^((/(/d{3}/))|(/d{3}/-))?13[0-9]/d{8}|15[89]/d{8}"
  export default {
    data () {
      return {
        phoneNumber: '',
        step1: true
      }
    },
    methods: {
      next() {
        console.log('发送');
        axios.get(`/sendcode?phone=${this.phoneNumber}`).then(response => {
          alert(response.data.code) // 0
        })
        this.step1 = !this.step1
      },
      goLogin (){
        this.$router.push('/myepet')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .registerWrap
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background-color #fff
    z-index 10
    .stepOne
      width 100%
      .inputPhone
        box-sizing border-box
        border-bottom #e2e2e2 solid 1px
        padding 14px 0 15px 40px

        img
          float left
          width 10px
          height 17px
          margin 2px 0 0 -25px
        input
          display block
          height 21px
          width 100%
          font-size 13px
          color #666
          border-radius: 3px
      .nextStep
        box-sizing border-box
        text-align center
        margin 42px 10% 0
        background-color #d7d7d7
        color #fff
        font-size 15px
        padding 3px 0
        border-radius 30px

    .stepTwo
      div
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
    input::-webkit-input-placeholder{
      color #b8b8b8
      font-size 14px
    }

</style>
