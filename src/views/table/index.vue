<template>
  <el-table :data="tableData" :border="true">
    <el-table-column prop="date" label="Date" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="date" label="Date" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="address" label="Address" />
  </el-table>
  <el-divider></el-divider>
  <el-button @click="downloadFile">下载附件</el-button>
</template>
<script setup lang="ts">
import { useDownload } from '@/hooks/useDownload'
import { downLoadFile } from '@/api/modules/login'

const downloadFile = () => {
  useDownload(downLoadFile, '图片', {}, true, '.png')
}
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>
<style scoped lang="scss"></style>
