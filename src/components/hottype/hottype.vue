<template>
  <div class="hotType">
    <ul class="hotList">
      <li v-for="(item, index) in hot" :key="index"><a href="#">
        <img :src="item.image" alt="">
      </a></li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        hot: []
      }
    },
    mounted () {
      axios.get('home/hotType')
        .then(res => {
          this.hot = res.data.data.menus
        })
        .catch(err => {})
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .hotType

    width 100%
    overflow hidden
    .hotList
      width 100%
      display flex
      flex-wrap wrap
      &>li
        width 25%
        &>a
          display block
          width 100%
          &>img
            width 100%


</style>
