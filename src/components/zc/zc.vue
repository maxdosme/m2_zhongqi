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
            <div class="zc_left">
              <div class="zc_y">1</div>
              <div class="zc_x"></div>
            </div>
            <div class="zc_right">
              <div class="zcr_title">使用手机号登录/注册</div>
              <div class="zcr_cont">可先在右下角“我的”里面先行注册，仲企只提供使用手机号码注册的方式，已经注册会员的用户可直接使用手机号码登录。注册会员时请务必正确填写邮箱地址，因为仲企会通过邮件的方式将需要签字的文件发送给您。</div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="zc_box">
            <div class="zc_left">
              <div class="zc_y">2</div>
              <div class="zc_x"></div>
            </div>
            <div class="zc_right">
              <div class="zcr_title">选择园区并填写信息</div>
              <div class="zcr_cont">仲企提供不同区域的产业园区，如果投资人没有符合要求的注册地址，投资人可免费使用产业园区提供的注册地址（特殊区域除外），选择好园区后需要进一步填写股东、法定代表人、经营范围等公司登记需要的信息。</div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="zc_box">
            <div class="zc_left">
              <div class="zc_y">3</div>
              <div class="zc_x" style="height:4.3rem"></div>
            </div>
            <div class="zc_right">
              <div class="zcr_title">在线支付</div>
              <div class="zcr_cont">在线支付后，仲企将在1个工作日内开始处理您的订单</div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="zc_box">
            <div class="zc_left">
              <div class="zc_y">4</div>
              <div class="zc_x" style="height:5rem"></div>
            </div>
            <div class="zc_right">
              <div class="zcr_title" style="color:#1a78d6">名称登记（5个工作日，仲企来完成）</div>
              <div class="zcr_cont">将登记文件打印出来后，按照文件中的签字说明签字，并按照需要准备的文件清单邮寄即可。</div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="zc_box">
            <div class="zc_left">
              <div class="zc_y">5</div>
              <div class="zc_x" style="height:5rem"></div>
            </div>
            <div class="zc_right">
              <div class="zcr_title" style="color:#1a78d6">工商登记预审核（5个工作日，仲企完成）</div>
              <div class="zcr_cont">名称登记完成后，仲企会紧接着办理工商登记预审核。</div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="zc_box">
            <div class="zc_left">
              <div class="zc_y">6</div>
              <div class="zc_x" style="height:4rem"></div>
            </div>
            <div class="zc_right">
              <div class="zcr_title">面签或者邮寄登记文件</div>
              <div class="zcr_cont">名称登记完成后，仲企会紧接着办理工商登记。</div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="zc_box">
            <div class="zc_left">
              <div class="zc_y">7</div>
              <div class="zc_x" style="height:8rem"></div>
            </div>
            <div class="zc_right">
              <div class="zcr_title">打印公司证件（5个工作日左右）</div>
              <div class="zcr_cont">工商登记完成后，您将获得公司的营业执照以及印章三枚，在以上过程中。您可在右下方“我的”->“注册公司订单”中查询登记状态，并查看仲企的留言或备注。</div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="zc_box">
            <div class="zc_left">
              <div class="zc_y">8</div>
              <div class="zc_x" style="height:0"></div>
            </div>
            <div class="zc_right">
              <div class="zcr_title">完成</div>
              <div class="zcr_cont">工商登记完成后，您将获得公司的营业执照以及印章三枚。在以上过程中，您可在右下方“我的”—>“注册公司订单”中查询登记状态，并查看仲企的留言或备注。</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="zc_foot">
      <el-row>
        <el-col :span="24">
          <div class="foot_left">
            <i class="icon iconfont icon-ziyuan"></i>
            <h3>在线咨询</h3>
          </div>
          <div class="foot_right">开始注册</div>
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
            margin 0 auto
            font-size 1.3rem
            .zc_left
              float left
              width 10%
              .zc_y
                width 2rem
                height 2rem
                line-height 2rem
                text-align center
                border-radius 2rem
                border 1px solid #1a78d6
                color #1a78d6
              .zc_x
                width 1px
                height 10.3rem
                border-left 1px solid #1a78d6
                margin-left 1rem
            .zc_right
              display inline-block
              float right 
              width 90%
              .zcr_title
                font-size 1.4rem
                line-height 2.5rem
                font-weight 600
                color #666
              .zcr_cont
                font-size 1.2rem
                line-height 2rem
                color #888
      .zc_foot
        position relative
        border-top 1px solid #eaeaea
        border-bottom 1px solid #eaeaea
        margin-bottom 5rem
        height 5rem
        .foot_left
          float left
          width 30%
          height 5rem
          text-align center
          & i 
            display inline-block
            font-size 2.4rem
            color #888
            margin-top 1rem
          & h3
            display block
            color #888
            margin .8rem 0
        .foot_right
          float right
          width 69%
          line-height 5rem
          background-color #1a78d6
          color #fff
          text-align center
          font-size 1.5rem
</style>
