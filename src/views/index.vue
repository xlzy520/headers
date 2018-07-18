<template>
  <div class="main-container">
    <div class="headers-container">
      <div class="headers-title">
        <h1>以下是各个我模仿的网站的头部</h1>
      </div>
      <div class="headers-content">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="less">
  body {
    line-height: 1;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif;
  }
  div{
    margin: 0;
    padding: 0;
    border: 0;
    -webkit-font-smoothing: subpixel-antialiased;
  }
  .main-container{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff url("//activity.hdslb.com/blackboard/static/20180416/b8f2b74d0482aed61472c7065dc1ed56/images/m6kmoznp0p.jpg") center/cover no-repeat;

    .headers-container{
      position: absolute;
      top: 40%;
      left: 25%;
      color: #c99;
      text-align: center;

      .headers-title+h1{
        font-size: 28px;
        margin-bottom: 36px;
      }

      .headers-content{

      }
    }
  }
</style>
