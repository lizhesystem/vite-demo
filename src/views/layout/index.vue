<template>
  <el-container>
    <el-aside>
      <Menu />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
        <Tabs />
      </el-header>
      <el-main>
        <router-view v-slot="{ Component }">
          <transition appear name="fade-transform" mode="out-in">
            <section class="main-box">
              <keep-alive v-if="route.meta.keepAlive">
                <component :is="Component" :key="route.path"></component>
              </keep-alive>
              <component v-else :is="Component" :key="route.path"></component>
            </section>
          </transition>
        </router-view>
      </el-main>
      <!--底部-->
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import Footer from './Footer/index.vue'
import Header from './Header/index.vue'
import Tabs from './Tabs/index.vue'
import Menu from './Menu/index.vue'

const route = useRoute()

console.log(route.meta.keepAlive)
</script>
<style scoped lang="scss">
.el-container {
  width: 100%;
  height: 100%;
  min-width: 700px;
  display: flex;

  .el-aside {
    width: auto;
    background-color: #20222a;
  }

  .el-header,
  .el-footer {
    height: auto;
    padding: 0;
  }

  .el-main {
    background: #f0f2f5;
    padding: 10px 13px;
    box-sizing: border-box;
    // 防止切换出现横向滚动条
    overflow-x: hidden;

    .main-box {
      width: 100%;
      height: 100%;
      background-color: #ffffff;
      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
      border-radius: 4px;
      padding: 20px;
      box-sizing: border-box;
      overflow: auto;
      overflow-x: hidden !important;

      &::-webkit-scrollbar {
        background-color: white;
      }
    }
  }
}
</style>
