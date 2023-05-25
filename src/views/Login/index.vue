<template>
  <div class="login-page">
    <img
      :src="require('@/assets/img/logo/logo.svg')"
      alt=""
      class="img_logo text-center"
      v-once
    />
    <div class="form">
      <div class="row mb-2">
        <div class="col-md-12 border-bottom text-center">
          <h3 class="text-center">Login</h3>
        </div>
      </div>
      <div class="login-form">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Username</label>
          <el-input
            v-model="login.form.username"
            placeholder="Please input password"
          ></el-input>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Password</label>
          <el-input
            placeholder="Please input password"
            show-password
            v-model="login.form.password"
          ></el-input>
        </div>
        <button @click="submitLogin()">login</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Login",
  computed: {
    ...mapState({
      login: (state) => state.login.data,
    }),
  },
  methods: {
    ...mapActions("login", ["", ""]),

    submitLogin() {
      if (
        this.login.form.username === `admin` &&
        this.login.form.password === `admin123`
      ) {
        this.$router.push(`/dashboard`);
        this.$notify({
          title: "Success",
          message: "Selamat datang!",
          type: "sucess",
        });
      } else if (
        this.login.form.username === `bod` &&
        this.login.form.password === `bod123`
      ) {
        this.$router.push(`/bod/dashboard`);
        this.$notify({
          title: "Success",
          message: "Selamat datang!",
          type: "sucess",
        });
      } else {
        this.$notify({
          title: "Opps!",
          message: "Cek kembali data anda.",
          type: "danger",
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Login/index.scss";
</style>
