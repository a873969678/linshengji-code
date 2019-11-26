<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
  input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{
    -webkit-appearance: none !important;
  }
  input[type="number"]{-moz-appearance:textfield;}
</style>

