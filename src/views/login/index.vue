<template>
  <div class="login-container min-h-screen flex items-center justify-center bg-gray-50">
    <div class="login-box w-96 bg-white rounded-2xl shadow-2xl p-8">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-2">后台管理系统</h2>
        <p class="text-gray-500 text-sm">请登录以继续</p>
      </div>
      
      <div class="space-y-4">
        <div class="space-y-2">
          <button
            @click="tab = 'phone'"
            :class="tab === 'phone' ? 'btn-active' : 'btn-inactive'"
            class="w-full py-2 px-4 rounded-lg text-sm font-medium"
          >手机号+验证码</button>
          <button
            @click="tab = 'account'"
            :class="tab === 'account' ? 'btn-active' : 'btn-inactive'"
            class="w-full py-2 px-4 rounded-lg text-sm font-medium"
          >用户名+密码</button>
        </div>
        
        <form v-if="tab === 'phone'" @submit.prevent="handlePhoneLogin" class="space-y-4 mt-6">
          <div class="relative">
            <input
              v-model="phone"
              type="tel"
              placeholder="请输入手机号"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              required
            />
          </div>
          
          <div class="relative">
            <input
              v-model="phoneCode"
              type="text"
              placeholder="请输入验证码"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent pr-20"
              required
            />
            <button
              v-if="!counting"
              @click="getPhoneCode"
              type="button"
              class="absolute right-0 top-0 bottom-0 px-4 text-cyan-600 hover:text-cyan-500 bg-transparent rounded-r-lg"
            >获取验证码</button>
            <span
              v-else
              class="absolute right-0 top-0 bottom-0 px-4 text-gray-500 bg-gray-50 rounded-r-lg"
            >{{ countDown }}s</span>
          </div>
          
          <button
            type="submit"
            class="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-medium"
          >登录</button>
        </form>
        
        <form v-if="tab === 'account'" @submit.prevent="handleAccountLogin" class="space-y-4 mt-6">
          <div class="relative">
            <input
              v-model="username"
              type="text"
              placeholder="请输入用户名"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              required
            />
          </div>
          
          <div class="relative">
            <input
              v-model="password"
              type="password"
              placeholder="请输入密码"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              required
            />
          </div>
          
          <button
            type="submit"
            class="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-medium"
          >登录</button>
        </form>
        
        <div class="flex items-center justify-between">
          <button
            @click="showRegister = !showRegister"
            type="button"
            class="text-cyan-600 hover:text-cyan-500 text-sm"
          >注册账号</button>
          <div class="flex items-center space-x-2">
            <input
              v-model="remember"
              type="checkbox"
              class="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
            />
            <span class="text-sm text-gray-600">记住我</span>
          </div>
        </div>
      </div>
      
      <div v-if="showRegister" class="mt-6 pt-6 border-t">
        <div class="text-center mb-4">
          <h3 class="text-sm font-semibold text-gray-900">注册新账号</h3>
        </div>
        
        <form @submit.prevent="handleRegister" class="space-y-4">
          <div class="relative">
            <input
              v-model="registerUsername"
              type="text"
              placeholder="请输入用户名"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              required
            />
          </div>
          
          <div class="relative">
            <input
              v-model="registerPhone"
              type="tel"
              placeholder="请输入手机号"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              required
            />
          </div>
          
          <div class="relative">
            <input
              v-model="registerPassword"
              type="password"
              placeholder="请输入密码"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              required
            />
          </div>
          
          <div class="relative">
            <input
              v-model="registerPhoneCode"
              type="text"
              placeholder="请输入验证码"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent pr-20"
              required
            />
            <button
              v-if="!registerCounting"
              @click="getRegisterCode"
              type="button"
              class="absolute right-0 top-0 bottom-0 px-4 text-cyan-600 hover:text-cyan-500 bg-transparent rounded-r-lg"
            >获取验证码</button>
            <span
              v-else
              class="absolute right-0 top-0 bottom-0 px-4 text-gray-500 bg-gray-50 rounded-r-lg"
            >{{ registerCountDown }}s</span>
          </div>
          
          <button
            type="submit"
            class="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-medium"
          >注册</button>
        </form>
      </div>
      
      <div class="mt-4 text-center text-sm">
        <span class="text-gray-500">没有账号？</span>
        <button
          @click="showRegister = !showRegister"
          type="button"
          class="text-cyan-600 hover:text-cyan-500"
        >立即注册</button>
      </div>
    </div>
    
    <div class="text-center mt-8 text-sm text-gray-500">
      <span class="mr-2">© 2024 后台管理系统</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const tab = ref('phone')
const phone = ref('')
const phoneCode = ref('')
const username = ref('')
const password = ref('')
const remember = ref(false)

const showRegister = ref(false)
const registerUsername = ref('')
const registerPhone = ref('')
const registerPassword = ref('')
const registerPhoneCode = ref('')

// 验证码相关
const counting = ref(false)
const countDown = ref(60)
const registerCounting = ref(false)
const registerCountDown = ref(60)

const getPhoneCode = () => {
  if (!phone.value.trim()) {
    alert('请输入手机号')
    return
  }
  counting.value = true
  const timer = setInterval(() => {
    if (countDown.value > 0) {
      countDown.value--
    } else {
      clearInterval(timer)
      counting.value = false
      countDown.value = 60
    }
  }, 1000)
}

const getRegisterCode = () => {
  if (!registerPhone.value.trim()) {
    alert('请输入手机号')
    return
  }
  registerCounting.value = true
  const timer = setInterval(() => {
    if (registerCountDown.value > 0) {
      registerCountDown.value--
    } else {
      clearInterval(timer)
      registerCounting.value = false
      registerCountDown.value = 60
    }
  }, 1000)
}

const handlePhoneLogin = () => {
  if (!phone.value.trim()) {
    alert('请输入手机号')
    return
  }
  if (!phoneCode.value.trim()) {
    alert('请输入验证码')
    return
  }
  
  // 模拟登录
  const user = {
    id: Date.now(),
    username: '用户' + phoneCode.value,
    phone: phone.value,
    token: 'mock_token_phone_' + phoneCode.value,
    role: 'user',
  }
  
  store.dispatch('login', user).then(() => {
    alert('登录成功！')
    window.location.href = '/#'
  })
}

const handleAccountLogin = () => {
  if (!username.value.trim()) {
    alert('请输入用户名')
    return
  }
  if (!password.value.trim()) {
    alert('请输入密码')
    return
  }
  
  // 模拟登录
  const user = {
    id: Date.now(),
    username: username.value,
    phone: '',
    token: 'mock_token_account_' + username.value,
    role: 'admin',
  }
  
  store.dispatch('login', user).then(() => {
    alert('登录成功！')
    window.location.href = '/#'
  })
}

const handleRegister = () => {
  if (!registerUsername.value.trim()) {
    alert('请输入用户名')
    return
  }
  if (!registerPhone.value.trim()) {
    alert('请输入手机号')
    return
  }
  if (!registerPassword.value.trim()) {
    alert('请输入密码')
    return
  }
  if (!registerPhoneCode.value.trim()) {
    alert('请输入验证码')
    return
  }
  
  // 模拟注册
  const user = {
    id: Date.now(),
    username: registerUsername.value,
    phone: registerPhone.value,
    token: 'mock_token_register_' + registerPhoneCode.value,
    role: 'user',
  }
  
  store.dispatch('login', user).then(() => {
    alert('注册成功，已自动登录！')
    window.location.href = '/#'
  })
}
</script>

<style scoped>
.login-container {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.login-box {
  background: white;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.btn-active {
  background: #1890ff;
  color: white;
  border: 1px solid #1890ff;
}

.btn-inactive {
  background: #f5f5f5;
  color: #666;
  border: 1px solid #d9d9d9;
}
</style>