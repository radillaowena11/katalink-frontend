<template>
  <div class="wrapper">
    <div class="title mb-4">
      <img src="assets/img/logo.png" alt="logo" />
    </div>
    <form v-on:submit.prevent="Login" class="register" method="post">
      <!-- <form id="form" class="register"> -->
      <div class="grup-input">
        <label for="email">Email</label>
        <input
          v-model="email"
          type="email"
          name="name"
          placeholder="Email"
          id="email"
          required
        />
      </div>

      <div class="grup-input">
        <label for="password">Password</label>
        <input
          :type="showPassword ? 'text' : 'password'"
          name="name"
          placeholder="Password"
          id="password"
          v-model="password"
          required
        />
        <button
          class="toogle"
          v-on:click.prevent="showPassword = !showPassword"
        >
          <i class="fa fa-eye" aria-hidden="true" id="eye"></i>
        </button>
      </div>

      <div class="grup-input">
        <button type="submit" name="submit" class="kotak-submit" value="Sign In">Sign In</button>
        <!-- <button type="submit" class="kotak-submit">Sign Up</button> -->
      </div>
    </form>

    <div class="link">
      <p>Or Login with Your Social Account</p>
    </div>

    <div class="sosmed">
      <button class="kotak-sosmed">
        <img src="assets/img/googlee.svg" alt="logo" />
      </button>
      <button class="kotak-sosmed">
        <img src="assets/img/fab.svg" alt="logo" />
      </button>
    </div>

    <div class="link">
      <p>Don't have an account ?<a href="/register">Register</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
    };
  },
  methods: {
    Login: function () {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/home"))
        .catch((err) => console.log(err));
    },
  },
};
</script>
