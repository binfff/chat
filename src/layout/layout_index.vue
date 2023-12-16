<template>
  <div id="container" class="lay-out-box theme">
    <headerNav ref="headerRef" :style="!isCollapse ? 'margin-left:0' : 'margin-left:260px'" @changeStatus="changeStatus"
      :isCollapse="isCollapse" :isShow="isShow" @setRouter="setRouter"></headerNav>

    <leftMenu class="leftMenuBox" :style="!isCollapse ? 'width:0' : 'width:260px'" :routers="routers"></leftMenu>
    <el-drawer modal-append-to-body class="leftMenuPhone" direction="ltr" title="我是标题" :visible.sync="drawerShow"
      :with-header="false">
      <leftMenu class="leftMenu" style="width:260px"></leftMenu>
    </el-drawer>
    <div v-if="isShow" class="main">
      <div :class="isCollapse ? 'right-content-main-box openLeft' : 'right-content-main-box closeLeft'">
        <router-view style="box-sizing: border-box;"></router-view>
      </div>
    </div>
    <!-- <collect-star :isCollect="isCollect" @collectBox="collectBox"></collect-star> -->
  </div>
</template>

<script>
import leftMenu from './components/LeftMenu';
import headerNav from "./components/HeaderNav"
// import collectStar from "@/components/Collect.vue"
export default {
  props: {
    isShow: {
      type: Boolean,
      default: true,
    }
  },
  components: {
    leftMenu,
    headerNav,
  },
  computed: {

  },
  created() {
    this.setRouter()
    // 实时检测刷新token
  },
  data() {
    return {
      isCollapse: false,
      drawerShow: false,
    }
  },
  methods: {
    changeStatus() {
      this.isCollapse = !this.isCollapse;
      if (window.innerWidth < 640) {
        this.drawerShow = true;
      }
      this.$Eventbus.$emit('openLeft', this.isCollapse)
    },
    setRouter() {
      this.routers = this.$router.options.routes.filter(item => {
        return item.meta
      })[0].children;
      console.log(this.routers)
    }



  },
  mounted() {

  },
  destroyed() {

  },
  watch: {

  },

};
</script>

<style lang="scss" scoped>
.lay-out-box {
  background: #eaf4fe;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .leftMenuBox,
  .right-content-main-box {
    transition: all 0.28s;
  }



  .main {
    display: flex;
    flex: 1 0 auto;
    height: 0;

    .aside {
      height: 100%;
      background-color: rgba(48, 65, 86, 1);

      .el-menu-vertical-demo {
        overflow-y: auto;
      }

      ::v-deep .el-menu {
        .el-menu-item {
          text-align: left;
          color: white;
        }

        .el-menu-item.is-active {
          background: #3154a5;
        }

        .el-menu-item:hover {
          background: #3154a5;
        }

        .el-menu-item.is-active:before {
          width: 5px;
          height: 100%;
          content: "";
          background: #3154a5;
          display: inline-block;
          position: absolute;
          left: 0px;
        }

      }

      ::v-deep .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 240px;
        height: 100%;
        border-right: none;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);

        .el-submenu__title {
          text-align: left;
          color: #71747B;
        }
      }

      ::v-deep .el-menu--collapse {
        height: 100%;

        .el-icon-arrow-right {
          display: none;
        }
      }
    }

    .el-breadcrumb {
      font-size: 14px;
      line-height: 1;
      margin-left: 10px;
      background: #fff;
      margin-bottom: 5px;
      line-height: 30px;
      height: 30px;
      padding-left: 10px;
    }
  }
}

@media only screen and (min-width:640px) {
  .leftMenuPhone {
    display: none;
  }

  .openLeft {
    margin-left: 260px;
    width: calc(100% - 260px);
  }

  .closeLeft {
    margin-left: 00px;
    width: calc(100%);
  }

}

@media only screen and (max-width:640px) {
  .leftMenuBox {
    display: none;
  }

  .leftMenuPhone {
    display: block;
  }

  .openLeft,
  .closeLeft {
    margin-left: 0;
    width: calc(100%);
  }

  .hearder-nav {
    margin-left: 0 !important;
  }

}</style>
