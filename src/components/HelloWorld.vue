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
    <form style="background-color: brown"  v-on:submit.prevent="submit">
      <div class="col-12 form-group">
        <div>
        <label> Name</label>
        <input type="text" v-model="name">
        </div>
        <div>
        <label>email</label>
        <input type="email" v-model="email">
        </div>
        <div>
        <label>password</label>
        <input type="password" v-model="$v.password.$model">
          <div v-if="!$v.password.required" class="invalid-feedback">The password field is required.</div>
        </div>
      </div>
      <button>submit</button>
    </form>
  </div>

</template>

<script>
import Test from "@/components/test";
import Test2 from "@/components/test2";
import { minLength, maxLength} from 'vuelidate/lib/validators'


export default {
  name: "Hello",
  components: {Test2, Test},

  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  validations: {
    name: {require},
    email: {require},
    password: {require, minLength: minLength(6), maxLength: maxLength(18)}
  },
  methods: {
    change() {
      this.name = " Qanh";
    }
  },
  submit: function() {

    this.$v.$touch();
    if (this.$v.$pendding || this.$v.$error) return;

    alert('Data Submit');
  }
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
