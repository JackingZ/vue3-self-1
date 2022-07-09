<template>
  <div>
    <img alt="Vue logo" src="../../assets/logo.png" />
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      :size="formSize"
    >
      <el-form-item label="username" prop="username">
        <el-input v-model="ruleForm.username" type="text" autocomplete="on" clearable />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="ruleForm.password" type="password" autocomplete="off" clearable />
      </el-form-item>
      <div>
        <el-button type="primary" @click="submit(ruleFormRef)">登录</el-button>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
const formSize = ref('small')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  username: undefined,
  password: undefined
})
const validateUsername = (rule: any, value: string, callback: Function) => {
  if (!value) {
    callback(new Error('用户名不能为空'))
  } else if (value.length < 3) {
    callback(new Error('用户名不能少于3个字符'))
  } else {
    callback()
  }
}
const validatePassword = (rule: any, value: string, callback: Function) => {
  if (!value) {
    callback(new Error('密码不能为空'))
  } else if (value.length < 6) {
    callback(new Error('密码不能少于3个字符'))
  } else {
    callback()
  }
}
const rules = reactive<FormRules>({
  username: [{ validator: validateUsername, trigger: 'blur' }],
  password: [{ validator: validatePassword, trigger: 'blur' }]
})
const submit = (formEl: FormInstance | undefined) => {
  if(!formEl) return
  formEl.validate((valid) => {
    if(!valid) return

  })
}

</script>

<style scoped>
</style>
