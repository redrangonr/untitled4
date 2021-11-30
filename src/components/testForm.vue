<template>

  <div>
    <h2>Vuelidate Form</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label>Email</label>
        <input type="email" v-model="email" class="form-control" />
        <span
            v-if="(!$v.email.required || !$v.email.email) && $v.email.$dirty"
            class="text-danger"
        >Valid Email is required!</span>
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" v-model="password" class="form-control" />
        <span
            v-if="!$v.password.required && $v.password.$dirty"
            class="text-danger"
        >Password is required!</span>
        <span v-if="!$v.password.numeric && $v.password.$dirty" class="text-danger">Passworld là kiểu số!</span>
        <span
            v-if="(!$v.password.minLength || !$v.password.maxLength) && $v.password.$dirty"
            class="text-danger"
        >Password must be between {{ $v.password.$params.minLength.min}} and {{ $v.password.$params.maxLength.max}} characters!</span>
      </div>
      <br> <input type="submit" class="btn btn-primary mt-2">
    </form>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  alpha,numeric,
  email
} from "vuelidate/lib/validators";
export default {
  data: () => ({
    name: "",
    email: "",
  }),
  validations: {
    name: {
      required,
      alpha
    },
    email: {
      required,
      email
    },
    password: {
      required,
      numeric,
      maxLength: maxLength(12),
      minLength: minLength(6)
    },
  },
  methods: {
    submitForm() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        console.log(
            `Email: ${this.email}, Password: ${this.password}`
        );
      }
    }
  }
};
</script>

<style scoped>
.test {
  background-color: green;
}

</style>