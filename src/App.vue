<template>
  <el-row>
    <el-col
      :md="{ span: 12, offset: 6 }"
      :xs="{ span: 24, offset: 0 }"
      :style="{ 'padding-top': '2em' }"
    >
      <el-container direction="vertical">
        <Banner />
        <Search />
      </el-container>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Search from './components/Search.vue'
import Banner from './components/Banner.vue'

export default defineComponent({
  name: 'App',
  components: {
    Search,
    Banner,
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
