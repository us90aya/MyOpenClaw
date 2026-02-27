<template>
  <div class="404-container min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-9xl font-bold text-gray-900 mb-4">404</h1>
      <p class="text-xl text-gray-600 mb-6">页面未找到</p>
      <n-button @click="handleGoBack" type="primary">返回首页</n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleGoBack = () => {
  router.push('/')
}
</script>

<style scoped>
.404-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>