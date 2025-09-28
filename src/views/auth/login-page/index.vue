<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
    <div class="w-full max-w-md mb-40">
      <!-- 卡片容器 -->
      <div class="bg-white shadow-2xl rounded-b-sm overflow-hidden transition-all duration-300 hover:shadow-2xl">
        <!-- 页眉 -->
        <div class="px-8 pt-8 pb-2 text-center">
          <div class="flex justify-center mb-4">
            <iconify-icon 
              icon="solar:login-3-bold-duotone" 
              class="text-4xl text-indigo-600"
            ></iconify-icon>
          </div>
          <h1 class="text-2xl font-bold text-gray-800 mb-1">{{ projectConfig.projectName }}</h1>
          <p class="text-sm text-gray-500">欢迎回来，请登录您的账号</p>
        </div>

        <!-- 登录表单 -->
        <div class="px-8 pt-6 pb-8">
          <el-form 
            ref="loginForm" 
            :model="form" 
            :rules="rules" 
            class="space-y-5"
            @submit.prevent="handleLogin"
            label-position="top"
          >
            <!-- 用户名 -->
            <el-form-item prop="username" class="mb-6">
              <template #label>
                <span class=" text-sm font-medium text-gray-700 mb-1"> 用户名 </span>
              </template>
              <el-input
                v-model="form.username"
                placeholder="请输入用户名"
                size="large"
                class="w-full"
              >
                <template #prefix>
                  <iconify-icon icon="solar:user-outline" class="el-input__icon text-gray-400" />
                </template>
              </el-input>
            </el-form-item>

            <!-- 密碼 -->
            <el-form-item prop="password">
              <template #label>
                <span class=" text-sm font-medium text-gray-700 mb-1"> 密码 </span>
              </template>
              <el-input
                v-model="form.password"
                type="password"
                placeholder="请输入密码"
                size="large"
                show-password
                class="w-full"
                @keyup.enter="handleLogin"
              >
                <template #prefix>
                  <iconify-icon icon="solar:lock-password-outline" class="el-input__icon text-gray-400" />
                </template>
              </el-input>
            </el-form-item>

            <!-- 记住我 -->
            <div class="flex items-center justify-between mb-2">
              <el-checkbox v-model="form.remember" class="text-sm">
                记住我
              </el-checkbox>
            </div>

            <!-- 登录按钮 -->
            <el-button
              type="primary"
              native-type="submit"
              class="w-full h-12 rounded-lg text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              :loading="loading"
            >
              <span v-if="!loading">
                <iconify-icon icon="solar:login-3-line-duotone" class="mr-2"></iconify-icon>
                登录
              </span>
              <span v-else>登录中...</span>
            </el-button>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import projectConfig from '@/project-config';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';

const router = useRouter();
const loading = ref(false);

// 表单数据
const form = reactive({
  username: '',
  password: '',
  remember: false
});

// 表单验证规则
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
  ]
};

const loginForm = ref(null);

// 处理登录
const handleLogin = () => {
  loginForm.value.validate((valid) => {
    if (valid) {
      loading.value = true;
      // 这里替换为实际的登录API调用
      setTimeout(() => {
        // 模拟登录成功
        ElMessage.success('登录成功');
        router.push('/business');
        loading.value = false;
      }, 1000);
    }
  });
};
</script>

<style scoped>
/* 自定义 Element Plus 组件样式 */
:deep(.el-input__wrapper) {
  border-radius: 0.5rem;
  padding: 0 15px;
  height: 48px;
  transition: all 0.3s ease;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

:deep(.el-input__wrapper.is-focus) {
  box-shadow: 0 0 0 1px var(--el-color-primary) inset;
}

:deep(.el-form-item__label) {
  padding-bottom: 0;
  margin-bottom: 4px;
}

:deep(.el-button) {
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
}

:deep(.el-button--primary) {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border: none;
}

:deep(.el-button--primary:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}

:deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
  background-color: #6366f1;
  border-color: #6366f1;
}

:deep(.el-checkbox__label) {
  color: #4b5563;
}
</style>
