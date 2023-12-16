<template>
  <div class="hearder-nav header">
    <div v-if="isShow" @click="changeStatus" class="collapse-btn" :title="isCollapse ? '展开' : '折叠'">
      <img v-show='isCollapse' src="@/assets/images/listClose.png" alt="" srcset="">
      <img v-show='!isCollapse' src="@/assets/images/listOpen.png" alt="" srcset="">
    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui'
export default {
  props: {
    isCollapse: Boolean,
    isShow: {
      type: Boolean,
      default: true
    },
    getTitle: {
      type: String,
      default: "XXX大数据"
    },
    routerSelect: Array,
    showRouteSelect: Boolean,
  },
  components: {
  },
  created() {

  },
  data() {
    return {
      selectRouter: "",
    }
  },
  methods: {
    changeStatus() {
      this.$emit("changeStatus")
    },
  },
  watch: {

  },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 50px;
  margin-bottom: 20px;
  position: fixed;
  padding-left: 0.8rem;
  z-index: 121;

  .collapse-btn {
    font-size: 28px;
    height: 100%;
    display: flex;
    align-items: center;

    img {
      width: 1.5rem;
      height: 1.5rem;
      cursor: pointer;
    }
  }

  .lognTitle {
    width: 275px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgba(48, 65, 86, 1);

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
    }

    .title {
      color: white;
    }

    img {
      width: 20px;
      height: 20px;
    }
  }

  .headerRight {
    width: calc(100% - 275px);
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    height: 100%;
    text-align: right;
    padding-right: 10%;
    color: #000;

    img {
      width: 20px;
      height: 20px;
      margin-left: 2%;
    }
  }
}
</style>