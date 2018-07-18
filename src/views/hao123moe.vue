<template>
  <div class="header-placeholder">
    <div class="header">
      <div class="header-container">
        <span class="logo-section">
          <a href="#" class="hao123-logo">hao123</a>
          <a href="#" class="sup-logo"></a>
          <a href="#" class="sub-logo"></a>
          <a href="#" class="sub-logo"></a>
          <a href="#" class="sub-logo"></a>
        </span>
        <div class="tool-nav userinfo"></div>
        <div class="tool-nav"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hao123moe'
}
</script>

<style lang="less">
  @initHeight: 731;
  .height(@height){
    height: (@height/731)*100vh;
  }
.header-placeholder{
  width: 100%;
  .height(51);

  .header{
    position: fixed;
    width: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    background-color: rgba(255,255,255,.9);

    .header-container{

      .logo-section{
        .height(50);
        .hao123-logo{

        }
      }
    }
  }
}
</style>
