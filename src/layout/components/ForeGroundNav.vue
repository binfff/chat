<template>
  <div class="fore-ground-nav">
    <el-button v-for="(item, index) in navRoutes" :key="item.path+index" class="nav-title-btn"
      :class="item.path == $route.path ? 'active-btn' : ''"
      @click="$router.push(item.path)">
      {{item.meta.title}}
    </el-button>
    <div @click="goHome" style="color:#fff;font-size:14px;position:absolute;right:130px;cursor:pointer;">首页</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navRoutes: this.$router.options.routes.filter( item => {
      return item.path == "/foreGround"
    })[0].children
    }
  },
  methods:{
     goHome() {
        this.$router.push({
          path: "/home"
        })
      },
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
.fore-ground-nav {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-title-btn {
    background: none;
    border: none;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 0;
    margin-left: 15px;
    margin-right: 15px;
    color: #FFFFFF;
  }

  .active-btn {
    color: #333;
    border-bottom: 1px solid #333;
  }
}
</style>