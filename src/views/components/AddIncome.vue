<template>
  <div class="add-imcome">
    <el-form ref="form" :model="formInfo" label-width="80px">
      <el-form-item label="参与活动">
        <el-checkbox-group v-model="formInfo.activities">
          <el-checkbox :label="1">捉鬼</el-checkbox>
          <el-checkbox :label="2">副本</el-checkbox>
          <el-checkbox :label="3">周末活动</el-checkbox>
          <el-checkbox :label="4">神器</el-checkbox>
          <el-checkbox :label="5">其他</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item v-if="formInfo.activities.includes('1')" label="捉鬼收益">
      </el-form-item>
      <el-form-item v-if="formInfo.activities.includes('2')" label="副本收益">
      </el-form-item>
      <el-form-item
        v-if="formInfo.activities.includes('3')"
        label="周末活动收益"
      >
      </el-form-item>
      <el-form-item v-if="formInfo.activities.includes('4')" label="神器收益">
      </el-form-item>
      <el-form-item v-if="formInfo.activities.includes('5')" label="其他收益">
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "AddIncome",
  data() {
    return {
      formInfo: {
        activities: []
      }
    };
  }
};
</script>
<style lang="less" scoped></style>
