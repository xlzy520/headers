<template>
  <div class="body">
    <header id="l_header" class="_box">
      <nav class="site-nav">
        <a href="#" class="site-nav__logo">
          <img src="https://pubin.bcyimg.com/Image/logo/logo-home-4fa0654754.png">
        </a>
        <a href="#" class="site-nav__item"><span>首页</span></a>
        <a href="#" class="site-nav__item"><span>绘画</span></a>
        <a href="#" class="site-nav__item"><span>写作</span></a>
        <a href="#" class="site-nav__item"><span>COS</span></a>
        <a href="#" class="site-nav__item"><span>问答</span></a>
        <a href="#" class="site-nav__item js-link curp posr hover-show viewAppBottom">
          <i class="i-phone mr5 mt15"></i>下载APP
        </a>
        <a href="#" class="site-nav__item">银河英雄传说<img class="h50 dib vam ml10" src="https://pubin.bcyimg.com/Image/bangumi/logo-header-ced67fc197.png" alt="银河英雄传说">
        </a>
      </nav>
      <div class="l-right js-publish-btn">
        <a href="#" class="site-publish _btn--red">
          <span class="_icon-text">
            <i class="i-publish"></i>
            发布
          </span>
        </a>
      </div>
      <div class="js-closeHdMsgCenter dropdown-menu dropdown-menu--big l-right">
        <div class="dropdown-menu__toggle">
          <div class="menu__toggleBox">
            <a href="/u/1425239" target="_blank" title="执笔看墨花开">
              <img src="https://user.bcyimg.com/Public/Upload/avatar/1425239/19b1c9e843b54d6f86bdcdd15d41b9e6/fat.jpg/abig">
            </a>
          </div>
        </div>
      </div>
      <div class="flyout">
        <div class="headerItem headerItem--dot">
          <i class="i-notification"></i>
        </div>
      </div>
      <div class="search-box">
        <form>
          <div class="search-input search-input--flat l-nav__search">
            <span class="twitter-typeahead">
              <input/>
            </span>
            <input type="submit"/>
          </div>
        </form>
      </div>
    </header>
  </div>
</template>

<script>
import { setTitleAndIcon } from '@/utils/setTitleAndIcon'
export default {
  name: 'banciyuan',
  data() {
    return {}
  },
  created() {
    setTitleAndIcon(this.$route)
  }
}
</script>

<style lang="less">
  .body{
    min-height: 570px;
    font-family: "-apple-system", "Helvetica Neue", "PingFang SC", "\5fae\8f6f\96c5\9ed1", "\5B8B\4F53",
    "\9ED1\4F53", arial, sans-serif;
    font-size: 12px;
    line-height: 18px;
    color: #333;
    background-color: #f0f0f0;
  }
  a{
    color: #4d70a5;
  }
  #l_header{
    position: fixed;
    width: 100%;
    min-width: 1200px;
    height: 50px;
    transform: translateZ(0);
    font-size: 14px;
     z-index: 101;
    background-color: #fff;
    .site-nav{
      float: left;
      .site-nav__logo{
        display: block;
        float: left;
        margin: 6px 25px 6px 20px;
        img{
          width: 107px;
          height: 38px;
        }
      }
      .site-nav__item{
        float: left;
        padding: 0 15px;
        &:hover{
          color: #ff6fa2;
        }
        .i-phone{
          background: url("https://pubin.bcyimg.com/Image/icon/sprite-2a8ec59f3e.png") -180px -248px no-repeat;
          width: 20px;
          height: 20px;
          margin-right: 5px;
          margin-top: 15px;
        }
      }
      &:after{
        content: "";
        clear: both;
        overflow: hidden;
        display: block;
        height: 0;
        visibility: hidden;
      }
    }

    .l-right{
      float: right;
    }

    .site-publish{
      float: left;
      display: block;
      width: 113px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      box-sizing: border-box;
      border: none;
      span{
        font-size: 16px;
        color: white;
        padding: 15px 0;
        line-height: 20px;
      }
      ._icon-text{
        display: inline-block;
        overflow: hidden;
        vertical-align: top;
        i{
          float: left;
          margin-right: 5px;
        }
      }
    }
    ._btn--red{
      background-color: #ff6fa2;
      color: #fff;
      &:hover{
        background-color: #ff4081;
      }
    }

    .dropdown-menu--big{
      height: 50px;
      .dropdown-menu__toggle{
        position: relative;
        display: inline-block;
        max-width: 149px;
        white-space: nowrap;
        padding: 8px 25px 8px 12px;
        background-color: white;
        .menu__toggleBox{
          position: relative;
          width: 34px;
          height: 34px;
        }
        img{
          display: block;
          z-index: 7;
          border-radius: 50%;
          width: 34px;
          height: 34px;
          transition-property: left,width,height;
          transition-duration: .3s;
        }
      }
    }
    .dropdown-menu{
      position: relative;
      display: inline-block;
      background-color: #222;
      cursor: pointer;
      vertical-align: middle;
      white-space: nowrap;
    }

    .flyout{
      float: right;
      display: inline-block;
      position: relative;
      width: 48px;
      .headerItem{
        padding: 0 12px;
        &:before{
          content: ' ';
          position: absolute;
          top: 10px;
          right: 11px;
          width: 8px;
          height: 8px;
          background-color: #e74747;
          border: 2px solid white;
          border-radius: 50%;
        }
        .i-notification{
          margin: 13px 0;
        }
      }
    }


  }
  .site-nav__item,
  .headerItem{
    display: block;
    font-size: 14px;
    color: #333;
    line-height: 50px;
  }
  ._box{
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.1);
    border-radius: 4px;
    background-color: white;
  }
  .h50{
    height: 50px !important;
  }
  .vam{
    vertical-align: middle;
  }
  .ml10{
    margin-left: 10px;
  }
  .dib{
    display: inline-block;
  }
  i[class^="i-"]{
    display: inline-block;
    overflow: hidden;
    background-repeat: no-repeat;
    vertical-align: top;
  }
  img{
    border: 0;
    display: block;
  }
  .i-publish{
    background-image: url(https://pubin.bcyimg.com/Image/icon/sprite-2a8ec59f3e.png);
    background-position: -132px -226px;
    width: 23px;
    height: 20px;
  }
  .i-notification{
    background-image: url(https://pubin.bcyimg.com/Image/icon/sprite-2a8ec59f3e.png);
    background-position: -55px -192px;
    width: 24px;
    height: 24px;
  }
</style>
