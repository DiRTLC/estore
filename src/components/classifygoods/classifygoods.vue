<template>
  <div class="goodsWrap">
    <a class="goodsHeader">
      {{classifyTitle}}
      <img class="allGoods" src="./cate_right_img.png" alt="">
    </a>
    <ul class="goodsList">
      <li class="goodsItem" v-for="(item, index) in classifyGoods" :key="index">
        <a href="javascript:;">
          <img class="pic" :src="item.photo" alt="">
          <p class="text">{{item.name}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      classifyTitle: String,
      classifyGoods: Array
    },
    data () {
      return {

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.goodsWrap
  box-sizing border-box
  width 100%
  padding 15px 5px 20px
  border-top 1px solid #f3f4f5
  overflow hidden
  .goodsHeader
    box-sizing border-box
    display block
    text-decoration none
    font-size 12px
    color #999
    padding-left 5px
    margin-top 10px
    .allGoods
      box-sizing border-box
      height 10px
      margin-top 5px
      float right
      border 0
  .goodsList
    width 100%
    overflow hidden
    .goodsItem
      box-sizing border-box
      width 33.33%
      padding 0 5px
      margin-top 10px
      float left
      a
        display block
        color #333
        .pic
          display block
          width 100%
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
