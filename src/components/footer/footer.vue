<template>
<div class="footer">
  <div class="footerNav">
    <span class="touch">触屏版</span>
    <span><a href="#">手机客户端</a></span>
    <span><a href="#">关于我们</a></span>
    <span><a href="#">联系我们</a></span>
  </div>
  <div class="copy">
    &copy; wap.epet.com 版权: 重庆易宠科技有限公司
  </div>
</div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer
    box-sizing border-box
    width 100%
    margin-top 1em
    font-size 14px
    line-height 1.6
    .footerNav
      box-sizing border-box
      padding 15px 0 5px
      font-size 14px
      text-align center
      line-height 1.6
      .touch
        color red
      &>span
        box-sizing border-box
        padding-right 10px
        line-height 1.6
        &>a
          color #333
    .copy
      box-sizing border-box
      text-align center
      margin 0 10px  0 10px
      padding-bottom 25px
      font-size 12px
      line-height 1.6
      font-family 'Microsoft Yahei',-apple-system-font,Helvetica Neue,sans-serif



</style>
