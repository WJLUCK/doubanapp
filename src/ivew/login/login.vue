<template>
  <div class="login">
    <div class="login-user">
      <input class="account-form-input" style="outline:none;" type="text" placeholder="手机号 / 邮箱" v-model="user">
    </div>
    <div class="login-password">
      <input class="account-form-input" style="outline:none;" type="password" placeholder="密码" v-model="password">
    </div>
    <div class="login-submit">
      <span @click="login(user,password)">登录</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      user: "",
      password: ""
    };
  },
  mounted() {},
  methods: {
    login(user, password) {
      console.log(user, password);
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  height: 1.62rem;
  margin: 0.2rem;
  margin-top: 0.3rem;
  margin-right: 0.3rem;
  &-user {
    height: 0.42rem;
    input {
      padding-left: 0.1rem;
      width: 100%;
      height: 0.4rem;
    }
  }
  &-password {
    height: 0.42rem;
    input {
      padding-left: 0.1rem;
      width: 100%;

      height: 0.4rem;
    }
  }
  &-submit {
    width: 100%;
    padding-right: 0.12rem;
    border-radius: 3px;
    line-height: 0.44rem;
    text-align: center;
    margin-top: 0.2rem;
    color: #fff;
    background: rgba(66, 189, 86, 0.5);
  }
}
.account-form-input {
  border-top: 1px solid #ccc;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-left: 0.5px solid #ccc;
  border-right: 0.5px solid #ccc;
}
</style>


