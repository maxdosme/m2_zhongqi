<template>
  <div class="zc_info">
    <el-row>
      <el-col :span="24">
        <div class="zc_title">
          在线注册公司流程
        </div>
        <div class="line"></div>
      </el-col>
    </el-row>
    <div class="zc_content">
      <el-row>
        <el-col :span="24">
          <div class="zc_box">
            <div class="zc_left"></div>
            <div class="zc_right"></div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"

    .clear
      clear both

    .zc_info
        position relative
        margin-bottom 50px
        height auto
        padding-top 1.5rem
        background-color #fff
        .zc_title
          position relative
          display block
          width 90%
          margin 0 auto 
          line-height 1.75rem
          border-left 2px solid #1a78d6
          padding-left 10px
          font-size 2rem
        .line
            display block
            height 1px
            background-color #eaeaea
            width 95%
            margin 1.5rem auto
      .zc_content
          position relative
          padding 0 4px 8px 4px
          .zc_box
            position relative
            display block
            overflow hidden
            width 90%
            height auto 
            font-size 1.3rem
</style>
