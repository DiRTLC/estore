<template>
  <div id="wrapper">
    <div class="innerWrap">
        <router-view></router-view>

    </div>
    <ul class="bottomNav" v-if="bottomNavShow" @click="bao">
      <li><router-link to="/home"><i class="iconfont icon-chixiao"></i></router-link></li>
      <li><router-link to="/classify"><i class="iconfont icon-deyi"></i></router-link></li>
      <li @click="shopcart"><router-link to="/shopcart"><i class="iconfont icon-konghuang"></i></router-link></li>
      <li @click="myepet"><router-link to="/myepet"><i class="iconfont icon-xingfen"></i></router-link></li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapState} from 'vuex'
  export default{
    data () {
      return {

      }
    },
    mounted () {
      if(this.$route.path==='/shopcart' || this.$route.path==='/myepet') {
        this.$store.dispatch('shopcartshow')
      }

    },
    computed: {
      ...mapState(['bottomNavShow'])
    },
    methods: {
      bao () {
        console.log(12341324231);
        axios.get('classify/:id')
          .then(res => {
            console.log(res);
          })
      },
      shopcart () {
        this.$store.dispatch('shopcartshow')
      },
      myepet () {
        this.$store.dispatch('myepet')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#wrapper
  width 100%
  position absolute
  top 0
  bottom 45px
  left 0
  right 0
  /*overflow hidden*/

  .bottomNav
    background-color white
    display flex
    box-sizing border-box
    width 100%
    height 45px
    border-top 1px solid #e7e7e7
    position fixed
    left 0
    bottom 0
    line-height 45px
    /*background-color #7e8c8d*/
    .iconfont
      display block
      font-size 30px
    &>li
      width 25%
      text-align center
      &>a
        display block
        font-size 10px
        width 100%
        height 100%
  .innerWrap
    width 100%
    height 100%
    overflow hidden

</style>

