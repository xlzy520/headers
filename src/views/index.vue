<template>
  <div class="main-container">
    <div class="headers-container">
      <div class="headers-title">
        <h1>以下是各个我模仿的网站的头部</h1>
      </div>
      <div class="headers-content">
        <ul class="headers-list">
          <li class="header-item">
            <router-link class="header-item-link" to="/hao123moe">好123萌主页</router-link>
          </li>
          <li class="header-item">
            <router-link class="header-item-link" to="/bilibili">哔哩哔哩</router-link>
          </li>
          <li class="header-item">
            <router-link class="header-item-link" to="/banciyuan">半次元</router-link>
          </li>
        </ul>
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
  @myBlue: #1296db;
  body {
    cursor: url("../../static/cursor.cur"), auto;
    width: 100%;
    min-height: 100vh;
    line-height: 1.15;
    font-size: 1vw;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica,
    "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif;
  }

  .main-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff url("//activity.hdslb.com/blackboard/static/20180416/b8f2b74d0482aed61472c7065dc1ed56/images/m6kmoznp0p.jpg") center/cover no-repeat;
  }

  .headers-container {
    position: absolute;
    top: 20%;
    left: 20%;
    color: #c99;
    text-align: center;
    ::selection {
      color: @myBlue;
    }

    .headers-title > h1 {
      font-size: 2.5vw;
      margin-bottom: 2.5vw;
    }

    .headers-content {

      .headers-list {
        list-style-type: none;

        .header-item {
          padding: 1vw 5vw;

          a:hover {
            color: inherit;
            text-decoration: underline;
          }
          a.header-item-link {
            font-size: 2vw;
          }
        }
      }
    }
  }
</style>
