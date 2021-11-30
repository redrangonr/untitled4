<template>
<div>
  <slot name="footer" v-bind:number="2"></slot>
</div>
</template>

<script>
export default {
  name: "test2"
}
</script>

<style scoped>
h1{
 color: red;
}
</style>