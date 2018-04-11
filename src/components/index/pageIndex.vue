<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="banner">
                    <img src="static/image/banner.png" alt="banner">
                </div>
            </el-col>
        </el-row>
        <div class="index_cont1">
            <el-row>
                <el-col :span="21" :offset="3">
                    <div class="cont1_box">
                        <i class="icon iconfont icon-wpml"></i>
                        <h3>注册公司流程</h3>
                        <p>在线注册公司，简单看得见</p>
                        <div class="cont1_right">
                            <i class="icon iconfont icon-you"></i>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="line"></div>
        <div class="index_cont2">
            <el-row>
              <el-col :span="8">
                  <div class="cont2-box">
                      <h3>至今已注册</h3>
                      <p>8,389<span>家</span></p>
                  </div>
              </el-col>
              <el-col :span="8">
                  <div class="cont2-box">
                      <h3>今日注册</h3>
                      <p>9<span>家</span></p>
                  </div>
              </el-col>
              <el-col :span="8">
                  <div class="cont2-box">
                      <h3>30天注册</h3>
                      <p>389<span>家</span></p>
                  </div>
              </el-col>
            </el-row>
        </div>
        <div class="index_cont3">
            <el-row>
              <el-col :span="24">
                  <div class="index_title">
                          <i class="icon iconfont icon-msnui-hot"></i>
                          <h2>热门园区</h2>
                      </div>
              </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .index_title
        position relative
        height 5rem
        background-color #f5f5f5
        & .icon-msnui-hot
            display block
            float left 
            font-size 2.8rem
            color #fd7001
            margin 0 .5rem 0 1.25rem
            height 5rem
            line-height 5rem
        & h2
            display block
            float left 
            font-size 1.8rem
            height 5rem
            line-height 5rem
    .line
        width 90%
        border-top 1px solid #f0f0f0
        margin 0 auto
    .banner
        width 100%
        background-color #fff
        img 
            width: 100%
    .index_cont1
        position relative
        height 7.3333rem
        padding-top 2rem
        background-color #ffffff
        .cont1_box
            position relative
            & .icon-wpml
                float left
                font-size 6.5rem
                margin-right .5rem
                color #1a78d6
            & h3
                float left
                font-size 2.4rem
                line-height 3rem
            & p
                float left
                font-size 1.4rem
                line-height 3rem
                color #999
            .cont1_right
                position absolute
                right 1rem
                float right
                & .icon-you
                    font-size 3rem
                    line-height 5rem
    .index_cont2
        position relative
        height 100%
        background-color #fff
        border-bottom 1px solid #e5e5e5
        padding-bottom 1.8rem
        .cont2-box
            position relative 
            line-height 2rem
            text-align center
            margin-top 1.5rem
            & h3
                font-size 1.4rem
                width 100%
                color #a6a6a6
                line-height 4rem
            & p
                font-size 2.5rem
                width 100%
                color #1a78d6
            & span 
                font-size 1.5rem
                color #a6a6a6
    .index_cont3
        position relative
        background-color #f5f5f5        
</style>
