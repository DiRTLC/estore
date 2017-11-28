<template>
  <div class="placeWrap" ref="qwer">
    <div>
      <div>
        <div class="placeHeader">
          <div class="back">
            <router-link to="/home">
              <i class="iconfont icon-xiangzuojiantou"></i>
            </router-link>

          </div>
          <span class="name">选择收货地区</span>
          <div class="placeMenu"  @click="showMenu"><i class="iconfont icon-jingxi"></i></div>
        </div>
        <div class="dowmMenu" v-if="on">
          <a href="javascript:;" class="home">
            <i class="iconfont icon-aojiao"></i>
            <p class="text">首页</p>
          </a>
          <a href="javascript:;" class="home">
            <i class="iconfont icon-aojiao"></i>
            <p class="text">商品分类</p>
          </a>
          <a href="javascript:;" class="home">
            <i class="iconfont icon-aojiao"></i>
            <p class="text">购物车</p>
          </a>
          <a href="javascript:;" class="home">
            <i class="iconfont icon-aojiao"></i>
            <p class="text">我的e宠</p>
          </a>
        </div>
      </div>
      <div class="webClassify">
        <a class="cat"><span>猫猫站</span></a>
        <a class="dog"><span class="active">狗狗站</span></a>
        <a class="water"><span>水族站</span></a>
      </div>
      <div class="defaultPlace" :class="{fixation: isOn}">
        <span>{{title}}:&nbsp;</span>
        <span class="bigPlace">{{province}}</span>
        <span class="detailPlace">{{city}}</span>
      </div>
      <ul class="placeListWrap">
        <li @click="toDetailPlace(p.code, p.cityname)" v-for="(p, index) in place" :key="index">
          {{p.cityname}}
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        isOn: false,
        on: false,
        place: [],
        last: false,
        title: '当前默认地址',
        province: '重庆',
        city: '江北',
        asd: this.$refs.qwer
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
      this.$store.dispatch('shopcartshow')
      axios.get('bigPlace')
        .then(response => {
          this.place = response.data.data
        })
        .catch(error => {

        })
    },
    methods: {
      handleScroll () {
        let top = this.$refs.qwer.getBoundingClientRect().top
        if(top<0) {
          this.isOn = true
        }else{
          this.isOn = false
        }

      },
      showMenu () {
        this.on = !this.on
      },
      toDetailPlace (code, c) {
        if(this.last) {
          this.city = c
          setTimeout(() => {
            this.$router.push('/home')
          }, 1000)

        }else{
          let char = code.charAt(0).toUpperCase()
          axios.get('detailPlace')
            .then(response => {
              let detail = response.data.data
              let result = detail.filter((p, index) => {
                return p.order === char
              })
              this.place = result[0].list
            })
            .catch(error => {

            })
          console.log(this.$refs.qwer);
          this.$store.dispatch('changeCity', {c})
          this.province = c
          this.city = ''
          this.title = '选择新地址'
          this.last = true
        }

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .placeWrap
    position absolute
    right 0
    top 0
    left 0
    bottom -45px
    background-color #fff
    .placeHeader
      box-sizing border-box
      color #333
      height 50px
      line-height 50px
      padding 0 1em
      border-bottom 1px solid #f3f3f3
      background-color #fff
      text-align center
      .back
        position absolute
        top 0
        left 1em
        height 50px
        overflow hidden
        .iconfont
          font-size 22px
      .name
        display block
        width 80%
        height 50px
        margin auto
        font-size 18px
      .placeMenu
        .iconfont
          position absolute
          top 0
          right 0.7em
          font-size 22px

    .webClassify
      box-sizing border-box
      padding 10px
      display flex
      justify-content space-around
      background: #F5F5F5;
      &>a
        display block
        width 33.33%
        &>span
          display block
          border-radius 5px
          background-color #b9b9b9
          font-size 15px
          padding 5px 0
          margin 0 10px
          text-align center
          color #666
          &.active
            color #fff
            background-color red

    .defaultPlace
      width 100%
      box-sizing border-box
      border-bottom 1px solid #e7e7e7
      background-color #ffe6d9
      font-size 14px
      padding 10px
      &.fixation
        position fixed
        top 0
        left 0
    .placeListWrap
      &>li
        box-sizing border-box
        border-bottom 1px solid #e7e7e7
        font-size 13px
        padding 10px

    /*transform scaleY(1)*/
    /*transform scaleY(0)*/
    .dowmMenu
      box-sizing border-box
      width 100%
      background-color #fff
      border-bottom 1px solid #d7d7d7
      overflow hidden
      position relative
      .home
        display inline-block
        width 25%
        text-align center
        float left
        text-decoration none
        color #333
        .iconfont
          font-size 22px
        .text
          color #666
          font-size 14px
          text-align center
          line-height 20px
</style>
