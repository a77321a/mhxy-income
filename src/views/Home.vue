<template>
  <div class="home">
    <el-calendar>
      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
      <template slot="dateCell" slot-scope="{ date, data }">
        <p
          :class="
            new Date(date).getTime() > new Date().getTime() ? 'disabled' : ''
          "
        >
          {{ new Date(date).getDate() }}
        </p>
      </template>
    </el-calendar>
    <el-drawer
      title="今日收益"
      :visible.sync="showDrawer"
      direction="ltr"
      size="80%"
    >
      <AddIncome></AddIncome>
    </el-drawer>
  </div>
</template>

<script>
import AddIncome from "./components/AddIncome.vue";
export default {
  name: "home",
  components: {
    AddIncome
  },
  data() {
    return {
      showDrawer: true
    };
  }
};
</script>
<style lang="less" scoped>
.disabled {
  cursor: not-allowed;
  user-select: none;
  width: 100%;
  height: 100%;
}
</style>
