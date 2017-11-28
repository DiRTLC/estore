<template>
<div class="ratings">
  <div class="title">
    <a href="#"><img src="./a1225213b3d2bc9067676102e629bf1e.png" alt=""></a>
    <a href="#" class="good">好评率99.64%</a>
  </div>
  <div class="ratingsContent">
    <ul class="ratingsList">
      <li class="rating" v-for="(item, index) in ratingsList" :key="index">
        <div class="pic">
          <img :src="item.main_image.image" alt="">
          <div class="time">{{item.join_time}}</div>
        </div>
        <div class="user">
          <span class="userName">{{item.username}}</span>
          <span class="petName">{{item.pet_des}}</span>
        </div>
        <p class="text">{{item.comment_content}}</p>
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
        ratingsList: []
      }
    },
    mounted () {
      axios.get('home/ratings')
        .then(res => {
          this.ratingsList = res.data.data.list
        })
        .catch(err => {})
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .ratings
    width 100%
    .title
      position relative
      width 100%
      &>a>img
        display block
        margin auto
        height 45px
      .good
        position absolute
        top 15px
        right 0
    .ratingsContent
      box-sizing border-box
      padding 0 10px 10px 0
      width 100%
      .ratingsList
        display flex
        flex-wrap wrap
        justify-content space-around
        width 100%
        .rating
          box-sizing border-box
          padding 10px 0 15px 10px
          width 50%
          .pic
            position relative
            height 150px
            width 100%
            overflow hidden
            &>img
              width 100%
              position absolute
              top 0
              left 0
            .time
              width 100%
              height 19px
              position absolute
              left 0
              bottom 0
              font-size 12px
              line-height 19px
              text-align center
              color #fff
              background-color rgba(0, 0, 0, 0.4)
          .user
            box-sizing border-box
            padding 0 5px
            margin-top 5px
            font-size 12px
            line-height 1.6
            overflow hidden
            .userName
              display block
              float left
            .petName
              display block
              float right
              background-color #ddd
              border-radius 5px
              padding 0 5px
          .text
            box-sizing border-box
            height 60px
            overflow hidden
            color #999
            font-size 13px
            padding 0 5px
            margin-top 5px
            line-height 1.6

  /*https://img1.epetbar.com/2017-11/22/16/8b147515ea3ff6670789dcc328fa1658.jpg
  https://img1.epetbar.com/2017-11/22/16/8b147515ea3ff6670789dcc328fa1658.jpg@!200w-c
  https://img1.epetbar.com/2017-11/22/16/a8302cc21fed89a9302df408c0763ab8.jpg@!200w-c*/
</style>
