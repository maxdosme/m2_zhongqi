<template>
   <div class="bottomNav">
        <el-row class="nav">
          <el-col :xs="6">
              <router-link to="/" tag="div">
                <i class="icon iconfont icon-home"></i>
                <p>首页</p>
              </router-link>
          </el-col>
           <el-col :xs="6">
              <router-link to="/zc" tag="div">
                <i class="icon iconfont icon-bianji"></i>
                <p>注册公司</p>
              </router-link>
          </el-col>
           <el-col :xs="6">
              <div>
                <i class="icon iconfont icon-icon-"></i>
                <p>产业园区</p>
              </div>
          </el-col>
           <el-col :xs="6">
              <div>
                <i class="icon iconfont icon-jinqian"></i>
                <p>代理记账</p>
              </div>
          </el-col>
           <el-col :xs="6">
              <div>
                <i class="icon iconfont icon-huiyuanguanli"></i>
                <p>我的</p>
              </div>
          </el-col>        
        </el-row>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .iconfont
        font-size 2rem
    .bottomNav
        position fixed
        bottom 0
        width 100%
        height 5rem
        line-height 1.8rem
        background-color #ffffff
        .nav
            height 100%
            margin-top 0.8333rem
        & .nav .el-col-xs-6
            width 20%;
            text-align center
</style>
