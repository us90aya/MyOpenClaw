<template>
  <div class="user-detail min-h-screen bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="bg-white rounded-lg shadow-sm p-8">
        <div class="flex justify-between items-start mb-8">
          <div class="flex items-center space-x-4">
            <n-avatar
              round
              size="large"
              :src="user.avatar"
            />
            <div>
              <h1 class="text-3xl font-bold text-gray-900">{{ user.username }}</h1>
              <div class="flex items-center space-x-2 mt-2">
                <n-tag :type="user.role === 'admin' ? 'error' : 'info'">
                  {{ user.role === 'admin' ? '管理员' : '普通用户' }}
                </n-tag>
                <span class="text-sm text-gray-500">
                  {{ user.phone }}
                </span>
              </div>
            </div>
          </div>
          <n-button @click="handleBack" type="default">返回列表</n-button>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-700 mb-4">基本信息</h3>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-gray-600">用户名:</span>
                <span class="font-medium">{{ user.username }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">手机号:</span>
                <span class="font-medium">{{ user.phone }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">角色:</span>
                <span class="font-medium">
                  {{ user.role === 'admin' ? '管理员' : '普通用户' }}
                </span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">用户ID:</span>
                <span class="font-medium">{{ user.id }}</span>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-700 mb-4">账号信息</h3>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-gray-600">注册时间:</span>
                <span class="font-medium">{{ user.createdAt }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">最后登录:</span>
                <span class="font-medium">{{ user.lastLogin || '暂无' }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">登录次数:</span>
                <span class="font-medium">{{ user.loginCount || 0 }}次</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-8 bg-gray-50 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-gray-700 mb-4">操作记录</h3>
          <n-data-table
            :columns="operationColumns"
            :data="operationData"
            :loading="operationLoading"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 用户详情数据
const user = ref({
  id: route.params.id,
  username: '管理员',
  phone: '13800138000',
  role: 'admin',
  avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
  createdAt: '2024-01-15 10:30:00',
  lastLogin: '2024-02-27 08:30:00',
  loginCount: 156,
})

// 操作记录相关
const operationColumns = [
  {
    title: '操作类型',
    key: 'type',
  },
  {
    title: '操作内容',
    key: 'content',
  },
  {
    title: '操作时间',
    key: 'time',
    width: 180,
  },
  {
    title: 'IP地址',
    key: 'ip',
    width: 120,
  },
]

const operationData = ref([
  {
    type: '登录',
    content: '登录系统',
    time: '2024-02-27 08:30:00',
    ip: '192.168.1.100',
  },
  {
    type: '用户管理',
    content: '查看用户列表',
    time: '2024-02-27 08:25:00',
    ip: '192.168.1.100',
  },
  {
    type: '数据操作',
    content: '新增用户数据',
    time: '2024-02-27 08:20:00',
    ip: '192.168.1.100',
  },
])

const operationLoading = ref(false)

// 返回列表
const handleBack = () => {
  router.push('/users')
}

// 加载数据
onMounted(() => {
  // 这里可以添加实际的数据加载逻辑
  console.log('加载用户详情:', route.params.id)
})
</script>

<style scoped>
.user-detail {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}
</style>