<template>
  <div>
    <div class="text-2xl mb-6">{{ t('login') }}</div>

    <el-form ref="formRef" hide-required-asterisk :model="model" :rules="rules" size="large" label-position="top">
      <el-form-item prop="username" :label="t('username.label')">
        <el-input v-model="model.username" :placeholder="t('username.placeholder')">
          <template #prefix>
            <el-icon><icon-mdi-email-outline /></el-icon>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item prop="password" :label="t('password.label')">
        <el-input v-model="model.password" :placeholder="t('password.placeholder')" show-password>
          <template #prefix>
            <el-icon><icon-mdi-lock-outline /></el-icon>
          </template>

          <template #suffix>
            <el-link type="primary" :underline="false">{{ t('password.reset') }}</el-link>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" class="w-full" @click="registerForm(formRef)">{{ t('login') }}</el-button>

        <el-space>
          <el-text type="info">{{ t('register.message') }}</el-text>
          <el-link type="primary" :underline="false">
            {{ t('register.button') }}
          </el-link>
        </el-space>
      </el-form-item>
    </el-form>

    <el-divider>
      <el-text>or</el-text>
    </el-divider>
    <el-row :gutter="12">
      <el-col :span="12">
        <el-button class="w-full">
          <template #icon>
            <el-icon size="20"><icon-local-wechat /></el-icon>
          </template>
          {{ t('wechat') }}
        </el-button>
      </el-col>
      <el-col :span="12">
        <el-button class="w-full">
          <template #icon>
            <el-icon size="20"><icon-local-dingtalk /></el-icon>
          </template>
          {{ t('dingtalk') }}
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'

const { t } = useI18n()

interface LoginForm {
  username: string
  password: string
}

const formRef = ref<FormInstance>()
const model = reactive<LoginForm>({
  username: '',
  password: ''
})
const rules: FormRules<LoginForm> = {
  username: [{ required: true, message: t('username.placeholder') }],
  password: [
    { required: true, message: t('password.placeholder') },
    { min: 6, max: 20, message: t('password.length'), trigger: 'blur' }
  ]
}

const registerForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    console.log(valid, fields)
  })
}
</script>

<i18n lang="yaml">
zh-cn:
  welcome: 欢迎回来!
  login: 登录
  wechat: 微信
  dingtalk: 钉钉
  register:
    message: 还没有账号？
    button: 注册
  username:
    label: 用户名
    placeholder: 请输入用户名
  password:
    label: 密码
    reset: 重置密码
    placeholder: 请输入密码
    length: 密码长度为6-20位
en:
  welcome: Welcome back!
  login: Sign in
  wechat: WeChat
  dingtalk: DingTalk
  register:
    message: Don't have an account?
    button: Sign Up
  username:
    label: Username
    placeholder: Please enter your username
  password:
    label: Password
    reset: Reset Password
    placeholder: Please enter your password
    length: Password length is 6-20 bits
</i18n>
