<template>
  <div class="matrixView">
    <codes :success="success" />
  </div>
</template>

<script>
import codes from '@/code'
export default {
  components: {
    codes
  },
  data() {
    return {

    }
  },
  created() {

  },
  methods: {
    success(type) {
      // type true 成功
      //      false 失败
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>

