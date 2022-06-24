<template>
  <el-form ref="formRef" :model="form" label-width="80px">
    <el-form-item label="用户名：">
      <el-input>
        <template #prefix>
          <el-icon class="el_input__icon">
            <search/>
          </el-icon>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item label="密码：">
      <el-input type="password" show-password>
        <template #prefix>
          <el-icon class="el_input__icon">
            <search/>
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>

  <el-button type="primary" @click="clickParent">子组件提交</el-button>

</template>

<script setup lang="ts">

const clickParent = () => {

}
</script>

<style scoped lang="scss">
</style>