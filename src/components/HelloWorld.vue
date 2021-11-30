<template>
  <div class="test">
    <div>
      <button @click="change">Who are you</button>
      <!--      tesst props vs tesst slot-->
      <test v-bind:name="name">
        tesst slot
      </test>
    </div>
    <div>
      <input v-model="message" placeholder="Nhap gi do">
      <p>message: {{ message }}</p>
      <test2 v-slot:footer="slotProps">
        <H1 s> {{ slotProps.number }}</H1>
      </test2>
    </div>
  <div>

  </div>

  </div>

</template>

<script>
import Test from "@/components/test";
import Test2 from "@/components/test2";
import {minLength, maxLength, required, email, numeric} from 'vuelidate/lib/validators'



export default {
  name: "Hello",
  components: {
    Test2,
    Test,
  },

  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  validattion: {
    email: {
      required,
      email
    },
    password: {
      numeric,
      required,
      maxLength: maxLength(12),
      minLength: minLength(6)
    },
  },
  methods: {  submitForm() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        console.log(
            ` Email: ${this.email}, Password: ${this.password}`
        );
      }
    }
  },
}
</script>

<style scoped>
.test {
  background-color: green;
}

p {
  color: red;
}
</style>
