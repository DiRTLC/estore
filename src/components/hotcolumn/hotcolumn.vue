<template>
<div class="hotWrap">
  <div class="title">
    <img src="./hot.jpg" alt="">
  </div>
  <div class="content">
    <div class="left">
      <a href="#">
        <img src="./1.jpg" alt="">
      </a>
    </div>
    <div class="right">
      <a href="#">
        <img src="./2.png" alt="">
      </a>
      <a href="#">
      <img src="./3.jpg" alt="">
      </a>
    </div>
  </div>
</div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.hotWrap
  width 100%
  height 231px
  /*overflow hidden*/
  .title
    width 100%
    &>img
      width 100%
  .content
    display flex
    width 100%
    .left
      width 42.5%
      &>a
        display block
        width 100%
        &>img
          display block
          width 100%
    .right
      width 57.5%
      &>a
        display block
        width 100%
        &>img
          display block
          width 100%

</style>
