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
                <el-col :span="3"></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .banner
        width 100%
        background-color #fff
        img 
            width: 100%
    .index_cont1
        position relative
        height 7.3333rem
        padding-top 2rem
        .cont1_box
            position relative
            & .icon-wpml
                float left
                font-size 6.5rem
                margin-right .5rem
            & h3
                float left
                font-size 2.4rem
                line-height 3rem
            & p
                float left
                font-size 1.4rem
                line-height 3rem
            .cont1_right
                position absolute
                right 1rem
                float right
                & .icon-you
                    font-size 3rem
                    line-height 5rem
</style>
