<template>
  <div id="app">
    <router-view></router-view>
    <live2d></live2d>
  </div>
</template>

<script>
import Live2d from './components/live2d'
export default {
  name: 'App',
  components: { Live2d }
}
</script>

<style>
  body, div {
    margin: 0;
    padding: 0;
    border: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
</style>
