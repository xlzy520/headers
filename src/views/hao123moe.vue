<template>
  <div class="header-placeholder">
    <div class="header">
      <div class="header-container clearfix">
        <span class="logo-section">
          <a href="#" class="hao123-logo">hao123</a>
          <a href="#" class="sup-logo">萌主页</a>
          <a href="#" class="sub-logo">动画</a>
          <a href="#" class="sub-logo">漫画</a>
          <a href="#" class="sub-logo">专题</a>
        </span>
        <div class="tool-nav userinfo">
          <a href="#" class="tool-title">
            <span class="icon xiongzhang"></span><span class="content">一键登录</span>
          </a>
        </div>
        <div class="tool-nav">
          <a href="#" class="tool-title">
            <span class="icon sethome"></span><span class="content">设为首页</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hao123moe',
  data() {
    return {

    }
  },
  mounted() {
    document.title = this.$route.name
  }
}
</script>

<style lang="less">
  .header-placeholder {
    font: 12px/1.5 arial, SimSun, helvetica, sans-serif;
    width: 100%;
    height: 51px;
  }

  .clearfix:after {
    clear: both;
    content: ".";
    display: block;
    height: 0;
    line-height: 0;
    visibility: hidden;
  }

  .header {
    position: fixed;
    width: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    background-color: rgba(255, 255, 255, .9);

    .header-container {
      width: 1000px;
      margin: 0 auto;

      .logo-section {
        float: left;
        height: 50px;

        .hao123-logo {
          background-image: url(http://s2.hao123img.com/resource/moe/pkg/aio-623880a_z.9b21303.png);
          background-position: -179px 0;
          background-repeat: no-repeat;
          float: left;
          display: inline;
          width: 101px;
          height: 28px;
          margin-top: 10px;
          text-indent: -999em;
        }

        .sup-logo {
          .hao123-logo;
          background-position: -210px -38px;
          width: 70px;
          height: 23px;
          margin-top: 15px;
          margin-left: 10px;
        }

        .sub-logo {
          float: left;
          font-family: 'Microsoft YaHei', serif;
          font-size: 16px;
          color: #666;
          margin: 17px 0 0 10px;
          &:hover {
            color: #f50;
          }
        }
      }

      .tool-nav {
        position: relative;
        float: right;
        height: 30px;
        padding: 20px 8px 0;

        &:hover {
          background-color: #00ca8b;
          .tool-title {
            color: #fbfdfe;
            .icon.sethome {
              background: url(http://s0.hao123img.com/resource/moe/widget/index/header/img/sethome-hover.e95bf00.png) no-repeat;
            }
            .icon.xiongzhang {
              background: url(http://s1.hao123img.com/resource/moe/widget/index/header/img/xiongzhang-hover.aa57be2.png) no-repeat;
            }
          }
        }
        .tool-title {
          font-size: 12px;
          color: #8e9999;

          .icon {
            display: inline-block;
            vertical-align: middle;
            margin-right: 4px;
          }
          .xiongzhang {
            width: 12px;
            height: 12px;
            background: url(http://s2.hao123img.com/resource/moe/widget/index/header/img/xiongzhang.75f62cf.png) no-repeat;
          }
          .sethome {
            width: 14px;
            height: 14px;
            background: url(http://s0.hao123img.com/resource/moe/widget/index/header/img/sethome.340be45.png) no-repeat;
          }
          .content {
            vertical-align: middle;
          }
        }
      }
    }
  }
</style>
