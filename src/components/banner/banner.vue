<template>
  <mt-swipe class="mt-swipe" :auto="2000">
    <mt-swipe-item v-for="(item, index) in bannerImg" :key="index" class="mt-swipe-item">
      <img :src="item.image" alt="">
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        bannerImg: []
      }
    },
    mounted () {
      axios.get('home/banner')
        .then(res => {
          this.bannerImg = res.data.data.value
        })
        .catch(err => {

        })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mt-swipe
    height 160px
    width 100%
    .mt-swipe-item
      width 100%
      height 100%
      &>img
        width 100%
        height 100%
</style>
