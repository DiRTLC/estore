<template>
<div class="fashion">
  <div class="title">
    <img class="video" src="./2.png" alt="">
    <a href="#" class="more-a"><img class="more" src="./more.png" alt=""></a>
  </div>
  <div class="content">
    <img src="./1.jpg" alt="">
  </div>
  <p class="text">夜空中最亮的星</p>
  <p class="count">
    <span>7397</span>
    <span>&nbsp;|&nbsp;</span>
    <span>02:20</span>
  </p>
</div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.fashion
  width 100%
  .title
    position relative
    width 100%
    height 52px
    .video
      display block
      height 100%
      margin 0 auto
    .more-a
      .more
        height 100%
        position absolute
        top 1px
        right 0
  .content
    width 100%
    &>img
      width 100%
      height 211px
  .text
    text-align center
  .count
    text-align center
</style>
