<template>
  <div class="users-page">
    <div class="bg-white rounded-lg shadow-sm p-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-semibold text-gray-800">用户管理</h2>
        <div class="flex space-x-2">
          <n-input
            v-model="searchQuery"
            placeholder="搜索用户名或手机号"
            class="w-64"
          />
          <n-button @click="handleSearch" type="primary">查询</n-button>
          <n-button @click="handleReset">重置</n-button>
          <n-button @click="handleAdd" type="success">新增</n-button>
        </div>
      </div>
      
      <n-data-table
        :columns="columns"
        :data="tableData"
        :pagination="pagination"
        :loading="loading"
        @update:page="handlePageChange"
        @update:page-size="handlePageSizeChange"
      >
        <template #avatar="props">
          <n-avatar
            round
            size="small"
            :src="props.row.avatar"
          />
        </template>
        
        <template #role="props">
          <n-tag :type="props.row.role === 'admin' ? 'error' : 'info'">
            {{ props.row.role === 'admin' ? '管理员' : '普通用户' }}
          </n-tag>
        </template>
        
        <template #action="props">
          <div class="flex space-x-2">
            <n-button text @click="handleView(props.row)">查看</n-button>
            <n-button text @click="handleEdit(props.row)">编辑</n-button>
            <n-button text type="error" @click="handleDelete(props.row)">删除</n-button>
          </div>
        </template>
      </n-data-table>
    </div>
    
    <!-- 新增/编辑弹窗 -->
    <n-modal v-model:show="showModal" :title="modalTitle" :show-icon="false">
      <n-form
        ref="formRef"
        :model="formModel"
        :rules="formRules"
        label-placement="left"
      >
        <n-form-item label="用户名" path="username">
          <n-input v-model:value="formModel.username" />
        </n-form-item>
        
        <n-form-item label="手机号" path="phone">
          <n-input v-model:value="formModel.phone" />
        </n-form-item>
        
        <n-form-item label="角色" path="role">
          <n-select v-model:value="formModel.role" :options="roleOptions" />
        </n-form-item>
        
        <n-form-item label="头像" path="avatar">
          <n-input v-model:value="formModel.avatar" placeholder="图片链接" />
        </n-form-item>
      </n-form>
      
      <template #footer>
        <n-space>
          <n-button @click="showModal = false">取消</n-button>
          <n-button type="primary" @click="handleSubmit" :loading="submitting">
            提交
          </n-button>
        </n-space>
      </template>
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

// 搜索相关
const searchQuery = ref('')
const handleSearch = () => {
  // 这里可以添加实际的搜索逻辑
  alert('查询功能开发中')
}

const handleReset = () => {
  searchQuery.value = ''
  // 重置数据
  alert('重置功能开发中')
}

// 表格相关
const columns = [
  {
    title: 'ID',
    key: 'id',
    width: 80,
  },
  {
    title: '头像',
    key: 'avatar',
    render: (h, props) => {
      return h('template', { slot: 'avatar', props })
    },
  },
  {
    title: '用户名',
    key: 'username',
  },
  {
    title: '手机号',
    key: 'phone',
  },
  {
    title: '角色',
    key: 'role',
    render: (h, props) => {
      return h('template', { slot: 'role', props })
    },
  },
  {
    title: '创建时间',
    key: 'createdAt',
    width: 180,
  },
  {
    title: '操作',
    key: 'action',
    width: 200,
    render: (h, props) => {
      return h('template', { slot: 'action', props })
    },
  },
]

// 分页相关
const pagination = {
  page: 1,
  pageCount: 10,
  pageSize: 10,
  total: 100,
}

// 弹窗相关
const showModal = ref(false)
const modalTitle = ref('')
const formRef = ref()
const submitting = ref(false)

// 表单数据
const formModel = ref({
  id: null,
  username: '',
  phone: '',
  role: 'user',
  avatar: '',
})

// 角色选项
const roleOptions = [
  { label: '管理员', value: 'admin' },
  { label: '普通用户', value: 'user' },
]

// 表单校验规则
const formRules = {
  username: {
    required: true,
    message: '请输入用户名',
  },
  phone: {
    required: true,
    message: '请输入手机号',
  },
}

// 表格数据（模拟数据）
const tableData = ref([
  {
    id: 1,
    avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
    username: 'admin',
    phone: '13800138000',
    role: 'admin',
    createdAt: '2024-01-15 10:30:00',
  },
  {
    id: 2,
    avatar: 'https://avatars.githubusercontent.com/u/2?v=4',
    username: 'zhangsan',
    phone: '13800138001',
    role: 'user',
    createdAt: '2024-01-16 14:20:00',
  },
  {
    id: 3,
    avatar: 'https://avatars.githubusercontent.com/u/3?v=4',
    username: 'lisi',
    phone: '13800138002',
    role: 'user',
    createdAt: '2024-01-17 09:15:00',
  },
  {
    id: 4,
    avatar: 'https://avatars.githubusercontent.com/u/4?v=4',
    username: 'wangwu',
    phone: '13800138003',
    role: 'user',
    createdAt: '2024-01-18 16:45:00',
  },
  {
    id: 5,
    avatar: 'https://avatars.githubusercontent.com/u/5?v=4',
    username: 'zhaoliu',
    phone: '13800138004',
    role: 'user',
    createdAt: '2024-01-19 11:20:00',
  },
])

// 新增用户
const handleAdd = () => {
  modalTitle.value = '新增用户'
  showModal.value = true
  formModel.value = {
    id: null,
    username: '',
    phone: '',
    role: 'user',
    avatar: '',
  }
}

// 编辑用户
const handleEdit = (row: any) => {
  modalTitle.value = '编辑用户'
  showModal.value = true
  formModel.value = { ...row }
}

// 查看用户详情
const handleView = (row: any) => {
  router.push(`/users/${row.id}`)
}

// 删除用户
const handleDelete = (row: any) => {
  if (confirm(`确定要删除用户 "${row.username}" 吗？`)) {
    // 这里添加实际的删除逻辑
    alert(`删除用户 "${row.username}" 成功！`)
  }
}

// 表单提交
const handleSubmit = async () => {
  const form = formRef.value
  if (!form) return
  
  const validate = await form.validate()
  if (!validate) return
  
  submitting.value = true
  
  // 模拟提交
  setTimeout(() => {
    submitting.value = false
    showModal.value = false
    alert(`用户 ${formModel.value.username} ${formModel.value.id ? '编辑' : '新增'} 成功！`)
    
    // 如果是新增，添加到表格数据
    if (!formModel.value.id) {
      const newUser = {
        ...formModel.value,
        id: Date.now(),
        createdAt: new Date().toLocaleString(),
      }
      tableData.value.unshift(newUser)
    }
  }, 1000)
}

// 分页变化
const handlePageChange = (page: number) => {
  pagination.page = page
  // 这里可以添加实际的分页逻辑
}

const handlePageSizeChange = (pageSize: number) => {
  pagination.pageSize = pageSize
  pagination.page = 1
  // 这里可以添加实际的分页逻辑
}

// 加载数据
onMounted(() => {
  // 这里可以添加实际的数据加载逻辑
})
</script>

<style scoped>
.users-page {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}
</style>