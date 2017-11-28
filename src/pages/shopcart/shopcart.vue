<template>
  <div class="cartWrap">
    <div>
      <div class="cartHeader">
        <div class="back" @click="shopcart">
          <i class="iconfont icon-xiangzuojiantou"></i>
        </div>
        <span class="name">购物车</span>
        <div class="cartMenu"  @click="showMenu"><i class="iconfont icon-jingxi"></i></div>
      </div>
      <transition name="slideDown">
        <div class="dowmMenu" v-if="on">
          <a href="javascript:;" class="home">
            <i class="iconfont icon-aojiao"></i>
            <p class="text">首页</p>
          </a>
          <a href="javascript:;" class="home">
            <i class="iconfont icon-aojiao"></i>
            <p class="text">商品分类</p>
          </a>
          <a href="javascript:;" class="home">
            <i class="iconfont icon-aojiao"></i>
            <p class="text">购物车</p>
          </a>
          <a href="javascript:;" class="home">
            <i class="iconfont icon-aojiao"></i>
            <p class="text">我的e宠</p>
          </a>
        </div>
      </transition>

    </div>

    <div class="cartMain">
      <div><i class="iconfont icon-gouwuche"></i></div>
      <div>购物车是空的</div>
      <div>
        <a href="javascript:;">去逛逛</a>
        <a href="javascript:;">我的收藏</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        on: false,

      }
    },
    methods: {
      shopcart () {
        this.$router.go(-1)
        this.$store.dispatch('showHeaderWrap')
      },
      showMenu () {

        this.on =!this.on
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.cartWrap
  position absolute
  right 0
  top 0
  left 0
  bottom -45px

  background-color #fff
  .cartHeader
    box-sizing border-box
    color #333
    height 50px
    line-height 50px
    padding 0 1em
    border-bottom 1px solid #f3f3f3
    background-color #fff
    text-align center
    .back
      position absolute
      top 0
      left 1em
      height 50px
      overflow hidden
      .iconfont
        font-size 22px
    .name
      display block
      width 80%
      height 50px
      margin auto
      font-size 18px
    .cartMenu
      .iconfont
        position absolute
        top 0
        right 0.7em
        font-size 22px
    /*transform scaleY(1)*/
    /*transform scaleY(0)*/
  .dowmMenu
    box-sizing border-box
    width 100%
    background-color #fff
    border-bottom 1px solid #d7d7d7
    overflow hidden
    position relative
    .home
      display inline-block
      width 25%
      text-align center
      float left
      text-decoration none
      color #333
      .iconfont
        font-size 22px
      .text
        color #666
        font-size 14px
        text-align center
        line-height 20px


</style>
