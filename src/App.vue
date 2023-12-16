<template>
  <div id="app">
      <router-view />
  </div>
</template>
<script>
export default {
  name: 'APP',
  components: {
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgba(240, 242, 245, 1);
  width: 100%;
  height: 100vh;
}
  //滚动条整体部分，可以设置宽度啥的
*::-webkit-scrollbar {
  width: 5px;
  border-radius: 5px;
  background: #80808021;
  display: none;
}
*::-webkit-scrollbar-thumb{
  background: cadetblue;
    border-radius: 5px;
}
// ::-webkit-scrollbar-button 滚动条两端的按钮

// ::-webkit-scrollbar-track 外层轨道

// ::-webkit-scrollbar-track-piece 内层轨道，滚动条中间部分(除去)

// ::-webkit-scrollbar-thumb 滚动条里面可以拖动的那个

// ::-webkit-scrollbar-corner 边角

// ::-webkit-resizer 定义右下角拖动块的样式

</style>
