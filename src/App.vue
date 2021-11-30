<template>
  <div id="app">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <test-form/>
<!--    <vee-form></vee-form>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import VeeForm from "@/components/veeForm";
import TestForm from "@/components/testForm";


export default {
  name: 'App',
  components: {
    // VeeForm,
    TestForm,
    // HelloWorld,
  }
}
</script>
<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");

/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
