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
            <el-row>
              <el-col :span="24">
                  <div class="park_box">
                      <h3>上海佘山经济园</h3>
                      <div class="park_info">
                          <i class="icon iconfont icon-location"></i>
                          松江区
                      </div>
                      <div class="park_info">
                          <i class="icon iconfont icon-zhuyi"></i>
                          金融投资类不接受
                      </div>
                      <div class="park_label">已注册<span>1030</span>家</div>                     
                  </div>
                  <div class="park_foot_box">
                      <div class="park_price">
                          <i class="icon iconfont icon-msnui-rmb"></i>
                          <span>300</span>
                      </div>
                      <a href="javascript:;" class="park_btn">在这里注册</a>
                  </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                  <div class="index_contLine"></div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                  <div class="park_box">
                      <h3>临港产业园区【书院】</h3>
                      <div class="park_info">
                          <i class="icon iconfont icon-location"></i>
                          浦东新区
                      </div>
                      <div class="park_info">
                          <i class="icon iconfont icon-zhuyi"></i>
                          注册资本50万以上，需要面签
                      </div>
                      <div class="park_label">已注册<span>733</span>家</div>                     
                  </div>
                  <div class="park_foot_box">
                      <div class="park_price">
                          <i class="icon iconfont icon-msnui-rmb"></i>
                          <span>498</span>
                      </div>
                      <a href="javascript:;" class="park_btn">在这里注册</a>
                  </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                  <div class="index_contLine"></div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                  <div class="park_box">
                      <h3>G60科创走廊-李塔</h3>
                      <div class="park_info">
                          <i class="icon iconfont icon-location"></i>
                          松江区
                      </div>
                      <div class="park_info">
                          <i class="icon iconfont icon-zhuyi"></i>
                          金融投资类不接受
                      </div>
                      <div class="park_label">已注册<span>590</span>家</div>                     
                  </div>
                  <div class="park_foot_box">
                      <div class="park_price">
                          <i class="icon iconfont icon-msnui-rmb"></i>
                          <span>288</span>
                      </div>
                      <a href="javascript:;" class="park_btn">在这里注册</a>
                  </div>
              </el-col>
            </el-row>
            
            <el-row>
              <el-col :span="24">填充</el-col>
              <el-col :span="24">填充</el-col>
              <el-col :span="24">填充</el-col>
              <el-col :span="24">填充</el-col>
              <el-col :span="24">填充</el-col>
              <el-col :span="24">填充</el-col>
              <el-col :span="24">填充</el-col>
              <el-col :span="24">填充</el-col>
              <el-col :span="24">填充</el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .index_contLine
        display block
        height 1rem
        background-color #f5f5f5
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
        .park_box
            position relative
            background-color #ffffff
            padding 0 2rem        
            & h3
                display block
                height 5rem
                line-height 5rem
                font-size 2rem
                border-bottom 1px solid #f0f0f0
                color #333333
                font-weight bold
            .park_info
                margin 1rem 0
                font-size 1.4rem
                height 2.2rem
                line-height 2.2rem
                text-align left 
                color #888888
                & .iconfont
                    margin-right .5rem
            .park_label
                position absolute
                top 1.5rem
                right 3rem
                font-size 1.6rem
                color #999999
                & span 
                    color #1a78d6
                    font-size 1.6rem
                    font-weight bold
        .park_foot_box
            position relative
            height 6rem
            line-height 6rem
            padding 0 2rem
            background-color #ffffff
            border-top  1px solid #f0f0f0
            .park_price
                position relative
                display inline-block
            & .icon-msnui-rmb
                color #fd7001
                font-size 1.2rem
            & span 
                font-size 2.8rem
                color #fd7001
                font-weight bold
            .park_btn
                display inline-block
                padding 0 1.6rem
                height 3.8rem
                line-height 3.8rem
                background-color #1a78d6
                color #ffffff
                font-size 1.6rem
                float right
                border-radius 3px
                margin-top 1rem
</style>
