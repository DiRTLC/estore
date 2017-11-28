<template>
<div class="surprise">
  <div class="surpriseHead">
    <div class="surpriseDay">
      <img src="./suprice.png" alt="">
    </div>
    <p class="timeWrap">
      距本场结束
      <span class="time">11</span>
      <span>:</span>
      <span class="time">11</span>
      <span>:</span>
      <span class="time">11</span>
    </p>
    <a href="#" class="more"><img src="./more.png" alt=""></a>
  </div>
  <div class="surpriseContent" ref="surpriseContent">
    <ul class="surpriseList">
      <li class="surpriseWrap" v-for="(item, index) in surprise" :key="index">
        <div class="surpriseItem">
          <a href="#">
            <img v-if="item.image" :src="item.image.image" alt="">
            <p>￥{{item.sale_price}}</p>
            <p>{{item.little_price}}</p>
          </a>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
  import BScroll from 'better-scroll'
  import axios from 'axios'
  export default {
    data () {
      return {
        surprise: {}
      }
    },
    mounted () {
      axios.get('surprise')
        .then(res => {
          this.surprise = res.data.data
        })
        .catch(err => {

        })
      this.$nextTick(() => {
        setTimeout(() => {
          let surpriseScroll = new BScroll(this.$refs.surpriseContent, {
            scrollY: false,
            scrollX: true
          })
        }, 30)

      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .surprise
    width 100%
    .surpriseHead
      display flex
      width 100%
      height 60px
      .surpriseDay
        width 100px
        &>img
          width 100%
      .more
        width 67.5px
        height 40px
        &>img
          width 100%
    .surpriseContent
      padding-left 5px
      margin-bottom 10px
      overflow hidden
      .surpriseList

        display flex
        overflow hidden
        width 752px
        .surpriseWrap
          /*width 98px*/
          height 130px
          margin-right 10px
          .surpriseItem
            width 100%
            height 100%
            &>a
              display block
              width 100%
              height 100%
              &>img
                width 84px



</style>
