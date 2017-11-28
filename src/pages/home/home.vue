<template>
  <div class="homeWrap">
    <e-header v-if="headerWrap" :toPlace="toPlace" />
    <div v-if="headerWrap" class="home" ref="home">
      <div class="main">
        <banner />
        <space />
        <hottype/>
        <space />
        <surprise />
        <hotcolumn />
        <space />
        <fashion />
        <space />
        <div class="hotSale">
          <img src="./7f62736d64ad9222875ff3f36d094997.png" alt="">
        </div>
        <hotbrand />
        <hotbrand />
        <hotbrand />
        <hotbrand />
        <ratings />
        <space />
        <e-footer />
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import header from '../../components/header/header.vue'
  import banner from '../../components/banner/banner.vue'
  import space from '../../components/space/space.vue'
  import hottype from '../../components/hottype/hottype.vue'
  import surprise from '../../components/surprise/surprise.vue'
  import hotcolumn from '../../components/hotcolumn/hotcolumn.vue'
  import fashion from '../../components/fashion/fashion.vue'
  import hotbrand from '../../components/hotbrand/hotbrand.vue'
  import ratings from '../../components/ratings/ratings.vue'
  import footer from '../../components/footer/footer.vue'
  export default {
    data () {
      return {

      }
    },
    mounted () {
      this.$store.dispatch('showHeaderWrap')
      this.$nextTick(() => {
        setTimeout(() => {
          let homeScroll = new BScroll(this.$refs.home)
        },300)

      })
    },
    computed: {
      ...mapState(['headerWrap'])
    },
    methods: {
      toPlace () {
        this.$store.dispatch('toPlace')
      }
    },
    components: {
      'e-header': header,
      banner,
      space,
      hottype,
      surprise,
      hotcolumn,
      fashion,
      hotbrand,
      ratings,
      'e-footer': footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.homeWrap
  overflow hidden
  .home
    width 100%
    position fixed
    left 0
    top 86px
    bottom 45px
    .main
      width 100%
      overflow hidden
      .hotSale
        width 100%
        height 52px
        &>img
          display block
          height 100%
          margin 0 auto
</style>
