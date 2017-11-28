<template>
<div class="brandWrapper" ref="brandWrapper">
  <div>
    <allbrand v-for="(item, index) in brands" :key="index" :item="item"/>
  </div>

</div>
</template>

<script>
  import BScroll from 'better-scroll'
  import allbrand from '../../../components/allbrand/allbrand.vue'
  import axios from 'axios'
  export default {
    props: {
      isOn: Function
    },
    data () {
      return {
        brands: []
      }
    },
    mounted () {
      axios.get('classify/brands')
        .then(res => {
          console.log(res.data);
          this.brands = res.data.data
        })
        .catch(err => {})
      this.isOn(false)
      this.$nextTick(() => {
        setTimeout(() => {
          new BScroll(this.$refs.brandWrapper)
        },0)

      })
    },
    watch:{
      brands: function (val) {
        console.log(val);
        if(val){
          this.$nextTick(() => {
              new BScroll(this.$refs.brandWrapper)
        })
        }

      }
    },
    components: {
      allbrand
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.brandWrapper
  position absolute
  top 45px
  left 0
  bottom 0
  background #f3f4f5
</style>
