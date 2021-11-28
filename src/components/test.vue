<template>
  <div>
    <p> My name: {{name}}</p>
    <h1> hello world</h1>
    <slot></slot>
  </div>

</template>

<script>
export default {
props: ['name']
}
</script>

<style scoped>
div{
  color: aqua;
}
</style>