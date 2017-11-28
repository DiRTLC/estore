<template>
  <div class="header">
    <div class="header-top">
      <div class="header-top-left" >
        <router-link @click.native="toPlacePage" to="/place">
          <span class="web">狗狗站</span>&nbsp;|&nbsp;<span class="place">{{city}}</span>
        </router-link>
      </div>
      <div class="search">
        <a href="#" class="searchWrap">
          <input placeholder="搜索商品和品牌" class="text" type="text">
          <img class="pic" src="./search-ico.png" alt="">
        </a>
      </div>
      <a href="#" class="info"><img src="./消息.png" alt=""></a>
    </div>
    <div class="header-bottom" ref="headerNav">
      <ul class="nav">
        <li class="nav-item active">首页</li>
        <li class="nav-item">服饰城</li>
        <li class="nav-item">狗狗主粮</li>
        <li class="nav-item">医疗保健</li>
        <li class="nav-item">零食玩具</li>
        <li class="nav-item">日用外出</li>
        <li class="nav-item">美容香波</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    props: {
      toPlace: Function
    },
    data () {
      return {

      }
    },
    computed: {
      ...mapState(['city'])
    },
    mounted () {
      this.$nextTick(() => {
        new BScroll(this.$refs.headerNav, {
          scrollY: false,
          scrollX: true
        })
      })
    },
    methods: {
      toPlacePage () {
        this.toPlace()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    width 100%
    height 86px
    position fixed
    top 0
    left 0
    z-index: 10
    background-color white
    .header-top
      box-sizing border-box
      padding 13px 10px
      font-size 14px
      text-align center
      width 100%
      height 51px
      .header-top-left
        margin-right 20px
        position relative
        float left
        font-size 14px
        color #898989
        .web
          font-size 14px
          line-height: 1.6
        .place
          font-size 13px
          text-align center
      .search
        float left
        position relative
        text-align center
        width 220px
        .searchWrap
          color #333
          .text
            box-sizing border-box
            width: 100%;
            border: 0;
            height: 25px;
            background: #e9e9e9;
            border-radius: 4px;
            color: #e9e9e9;
            text-indent: 10px;
            font-size: 13px;
            outline: 0;
          .pic
            width 10px
            height 10px
            position absolute
            right 5px
            top 0
            bottom 0
            margin auto 0
      .info
        float right
        display block
        color #333
        text-align center
        &>img
          width 20px
    .header-bottom
      width 100%
      height 35px
      overflow hidden
      .nav
        height 35px
        display flex
        width 526px
        .nav-item
          color #666
          text-align center
          line-height 36px
          width 74.5px
          box-sizing border-box
          &.active
            color green
            border-bottom 2px solid green

</style>
