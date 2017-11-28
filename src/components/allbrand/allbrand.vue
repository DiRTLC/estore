<template>
  <div class="allBrandWrap">
    <div class="allBrandHeader">
      <span>—— {{item.title}} ——</span>
    </div>
    <div class="allBrandMain">
      <ul class="allBrandList">
        <li class="allBrandItem" v-for="(i, index) in item.list" :key="index">
          <a href="javascript:;">
            <div class="picWrap">
              <img class="pic" :src="i.logo" alt="">
            </div>
            <div class="jian" v-if="i.recommend"><img src="./jian.png" alt=""></div>
            <p class="text">{{i.name}}</p>
            <p class="country">{{i.address}}</p>
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      item: Object
    },
    data () {
      return {
        a: new Array(8)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .allBrandWrap
    box-sizing border-box
    width 100%
    padding-bottom 15px
    margin-bottom 10px
    background-color #fff
    overflow hidden
    .allBrandHeader
      box-sizing border-box
      padding-top 20px
      font-size 12px
      color #999
      text-align center
    .allBrandMain
      box-sizing border-box
      padding 0 5px
      .allBrandList
        width 100%
        overflow hidden
        .allBrandItem
          box-sizing border-box
          margin-top 20px
          width 33.33%
          padding 0 5px
          position relative
          float left
          a
            display block
            color #333
            .picWrap
              box-sizing border-box
              border 1px solid #e2e2e2
              text-align center
              padding 10px 10px 10px
              .pic
                display block
                max-width 90%
                margin auto
                height 40px
            .jian img
              position absolute
              width 13px
              height 13px
              top 0
              left 5px
            .text
              box-sizing border-box
              height 20px
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              font-size 13px
              margin-top 5px
              text-align center
            .country
              height 20px
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              font-size 12px
              color #999
              text-align center








</style>
