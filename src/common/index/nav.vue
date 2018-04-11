<template>
   <div class="bottomNav">
        <el-row class="nav">
          <el-col :xs="6">
              <router-link to="/" tag="div" class="action-btn">
                <i class="icon iconfont icon-home"></i>
                <p>首页</p>
              </router-link>
          </el-col>
           <el-col :xs="6">
              <router-link to="/zc" tag="div" class="action-btn">
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
$(function(){
   //按钮点击效果
    $(document).on("touchstart", ".action-btn:not(.disable)", function (e) {
        var $this = $(this);
        var flag = true;
        //遍历子类
        $this.find("*").each(function () {
            //查看有没有子类触发过active动作
            if ($(this).hasClass("active")) flag = false;
        });
        //如果子类已经触发了active动作，父类则取消active触发操作
        if (flag) $this.addClass("active");

    });
    $(document).on("touchmove", ".action-btn:not(.disable)", function (e) {
        if ($(this).hasClass("active")) $(this).removeClass("active");
    });
    $(document).on("touchend", ".action-btn:not(.disable)", function (e) {
        if ($(this).hasClass("active")) $(this).removeClass("active");
    });
})
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .action-btn
        position relative
        display block
        height 4.2rem
        & i 
            color #a6a6a6
        & p
            color #a6a6a6
    .active
        background-color #ade1f5;
    .bottomNav
        position fixed
        bottom 0
        width 100%
        height 5rem
        line-height 1.8rem
        background-color #ffffff
        .iconfont
            font-size 2rem
        .nav
            height 100%
            margin-top 0.8333rem
        & .nav .el-col-xs-6
            width 20%;
            text-align center
</style>
