<template>
  <div class="dashboard min-h-screen bg-gray-50">
    <nav class="bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <span class="text-2xl font-bold text-cyan-600">后台管理系统</span>
          </div>
          
          <div class="flex items-center space-x-4">
            <button
              @click="toggleDarkMode"
              class="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <n-icon :size="18" :name="darkMode ? 'MoonOutlined' : 'SunOutlined'"/>
            </button>
            
            <div class="relative">
              <button
                @click="showUserMenu = !showUserMenu"
                class="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <img
                  v-if="user.avatar"
                  :src="user.avatar"
                  alt="Avatar"
                  class="w-8 h-8 rounded-full"
                />
                <span class="text-sm font-medium">{{ user.username }}</span>
                <n-icon :size="14" name="DownOutlined"/>
              </button>
              
              <div
                v-if="showUserMenu"
                class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg"
              >
                <div class="py-1">
                  <button
                    @click="handleProfile"
                    class="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded-lg"
                  >个人资料</button>
                  <button
                    @click="handleSettings"
                    class="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded-lg"
                  >设置</button>
                </div>
                <div class="border-t border-gray-100">
                  <button
                    @click="handleLogout"
                    class="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded-lg text-red-600"
                  >退出登录</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const user = computed(() => store.getters.user)
const darkMode = computed(() => store.getters.darkMode)

const showUserMenu = ref(false)

const toggleDarkMode = () => {
  store.commit('SET_DARK_MODE', !darkMode.value)
}

const handleProfile = () => {
  showUserMenu.value = false
  alert('个人资料功能开发中')
}

const handleSettings = () => {
  showUserMenu.value = false
  alert('设置功能开发中')
}

const handleLogout = () => {
  store.dispatch('logout').then(() => {
    window.location.href = '/#'
  })
}
</script>

<style scoped>
.dashboard {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}
</style>