<template>
  <div class="classifyWrap">
    <div class="classifyHeader">
      <div class="classifyTab">
        <span>
          <router-link :class="{active: tab}" to="/classify/classifydetail">分类</router-link>
        </span>
      </div>
      <div class="classifyBrand">
        <span>
          <router-link :class="{active: !tab}" to="/classify/brand">品牌</router-link>
        </span>
      </div>
      <a href="#"><img src="./search-ico.png" alt=""></a>
    </div>
    <router-view :isOn="isOn"></router-view>

  </div>
</template>

<script>
export default {
  data () {
    return {
      tab: true
    }
  },
  mounted () {

  },
  methods: {
    isOn (b) {
      this.tab = b
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.classifyWrap
  width 100%
  height 100%
  position relative
  background-color #f3f4f5
  .classifyHeader
    font-size 14px
    box-sizing border-box
    padding 0 15px
    border-bottom 1px solid #cbcbcb
    position fixed
    left 0
    right 0
    top 0
    height 40px
    z-index 10
    background-color #fff
    color #333
    &>div>span
      display block
      box-sizing border-box
      padding 0 4px
      width 34px
      height 100%
      line-height 40px
      font-size 13px
      font-weight 700
    &>div>span>a
      box-sizing border-box
      display block
      width 100%
      height 100%
      font-weight 700
    .classifyTab
      box-sizing border-box
      text-align right
      padding-right 5%
      width 50%
      height 40px
      float left
      &>span
        float right
    .classifyBrand
      box-sizing border-box
      padding-left 5%
      width 50%
      height 40px
      line-height 40px
      float right
    & .active
        color #ed4044
        border-bottom 2px solid #ed4044
    img
      display block
      position absolute
      top 13px
      right 15px
      width 14px
      height 14px





</style>
