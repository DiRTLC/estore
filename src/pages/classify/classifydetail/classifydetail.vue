<template>
  <div class="classifyMain">
    <div class="mainLeft" ref="mainLeft">
      <ul class="classifyList">
        <li class="classifyItem" :class="{active: index===current}" @click="changeClassify(item.cateid, index)" v-for="(item, index) in classifyList" :key="index">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="mainRight" ref="mainRight">

        <div class="rightWrap">
          <classifygoods v-if="classifyGoods[0]" :classifyGoods="classifyGoods" :classifyTitle="classifyTitle"/>
          <classifyhot v-if="classifyHot[0]" :classifyHot="classifyHot" />
        </div>


    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import axios from 'axios'
  import classifygoods from '../../../components/classifygoods/classifygoods.vue'
  import classifyhot from '../../../components/classifyhot/classifyhot.vue'
  export default {
    props: {
      isOn: Function
    },
    data () {
      return {
        current: 0,
        classifyTitle: '',
        classifyList: [],
        classifyAll: {},
        classifyGoods: [],
        classifyHot: []
      }
    },
    mounted () {
      this.isOn(true)
      axios.get('classify/classifyList')
        .then(res => {
          this.classifyList = res.data.data
        })
        .catch(err => {})
      axios.get('classify/classifyAll')
        .then(res => {
          this.classifyAll = res.data.data
//          console.log(this.classifyAll);
        })
        .catch(err => {})
      this.$nextTick(() => {
        setTimeout(() => {
          this.changeClassify('88888', 0)
          this.leftScroll = new BScroll(this.$refs.mainLeft, {
            click: true
          })
          this.rightScroll = new BScroll(this.$refs.mainRight, {
            click: true
          })
        },100)
      })
    },
    methods: {
      changeClassify (id, current) {
        this.current = current
        this.classifyTitle = ''
        this.classifyGoods = []
        this.classifyHot = []
        let detail = this.classifyAll.find(item => {
          return item.id === id
        })
        detail.cate_list.map((item, index) => {
          if(item.type===0) {
            this.classifyTitle = item.title
            this.classifyGoods = item.list
          }else if(item.type===2) {
            this.classifyHot = item.list
          }
        })
        this.$nextTick(() => {
          setTimeout(() => {
            this.rightScroll.refresh()
            this.rightScroll.scrollTo(0, 0, 500)
          },100)

        })

//        console.log(this.classifyGoods, this.classifyHot===[]);
      }
    },
    components: {
      classifygoods,
      classifyhot
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .classifyMain
    width 100%
    font-size 14px
    position absolute
    top 43px
    bottom 0
    .mainLeft
      position fixed
      left 0
      top 40px
      bottom 45px
      background-color #fff
      .classifyItem
        box-sizing border-box
        padding 15px 0
        border-bottom 1px solid #f3f4f5
        width 70px
        height 50px
        font-size 13px
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
        text-align center
        &.active
          background-color #f3f4f5
          color #ed4044
    .mainRight
      margin-left 75px
      background-color #fff
      position fixed
      left 0
      top 43px
      bottom 45px
      .rightWrap
        width 100%
        overflow hidden
</style>
