<template>
  <div class="container">
    <div class="title">
      <h2>Register</h2>
      <p>Access your account</p>
    </div>
    <form id="form" class="register" v-on:submit.prevent="Register">
      <div class="grup-input">
        <label for="email">Email</label>
        <input
          type="email"
          name="name"
          placeholder="Email"
          id="email"
          v-model="email"
          required
        />
      </div>
      <div class="grup-input">
        <label for="username">Username</label>
        <input
          type="text"
          name="name"
          placeholder="Username"
          id="username"
          v-model="username"
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
        <label for="re-password">Re-Password</label>
        <input
          :type="showConfirmation ? 'text' : 'password'"
          name="name"
          placeholder="Re-Password"
          id="repassword"
          v-model="password_verify"
          required
        />
        <button
          class="toogle"
          v-on:click.prevent="showConfirmation = !showConfirmation"
        >
          <i class="fa fa-eye" aria-hidden="true" id="eye"></i>
        </button>
      </div>
      <div class="grup-input">
        <button
          type="submit"
          name="submit"
          class="kotak-submit"
          value="Sign Up"
        >
          Sign Up
        </button>
        <div class="link">
          <p>
            Already have an account ?<a href="/login"><b>Signin</b></a>
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password_verify: "",
      showPassword: false,
      showConfirmation: false,
    };
  },
  methods: {
    Register: function () {
      let conf = { headers: { Authorization: "Bearer " + this.key } };
      this.$bvToast.show("loadingToast");
      let form = new FormData();
      form.append("id", this.id);
      form.append("username", this.username);
      form.append("email", this.email);
      form.append("password", this.password);
      form.append("password_verify", this.password_verify);
      form.append("password_confirmation", this.password_verify);
      form.append("level", "user");
      this.axios
        .post("/register", form, conf)
        .then(() => this.$router.push("/login"))
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
