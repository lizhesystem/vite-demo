<template>
  <el-container>
    <el-aside></el-aside>
    <el-container>
      <el-header>
			<Header></Header>
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
				<Footer></Footer>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import Footer from './Footer/index.vue'
import Header from './Header/index.vue'

const route = useRoute()
console.log(route.meta.keepAlive)
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
