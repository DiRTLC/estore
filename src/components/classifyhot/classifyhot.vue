<template>
  <div class="brandsWrap">
    <a class="brandsHeader">
      热门品牌
    </a>
    <ul class="brandsList">
      <li class="brandsItem" v-for="(item, index) in classifyHot">
        <a href="javascript:;">
          <div class="pic">
            <img :src="item.logo" alt="">
          </div>

          <p class="text">{{item.name}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      classifyHot: Array
    },
    data () {
      return {
        a: new Array(18)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .brandsWrap
    box-sizing border-box
    width 100%
    padding 15px 5px 20px
    border-top 1px solid #f3f4f5
    overflow hidden
    .brandsHeader
      box-sizing border-box
      display block
      text-decoration none
      font-size 12px
      color #999
      padding-left 5px
      margin-top 10px
    .brandsList
      width 100%
      overflow hidden
      .brandsItem
        box-sizing border-box
        width 50%
        padding 0 5px
        margin-top 10px
        float left
        a
          display block
          color #333
          .pic
            box-sizing border-box
            border 1px solid #f3f4f5
            text-align center
            padding 0 10px 10px
            background-color #fff
            &>img
              display block
              max-width 100%
              height 45px
              margin 0 auto
              margin-top 10px
          .text
            box-sizing border-box
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            height 20px
            font-size 12px
            color #333
            margin-top 10px
            text-align center







</style>
