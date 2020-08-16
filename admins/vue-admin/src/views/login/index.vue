<template>
  <div class="page">
    <xp-login
      class="login" />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/style/var.scss";
  .page {
    background-color: #9df3f4;
    height: 100%;
    background-image: url('/loginbg.png');
    background-position: 50% 50%;
    background-size: cover;
  }
  .login {
    position: relative;
    top: 25%;
    width: 400px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 5px;
    border-top: 5px solid $--color-primary;
    background-color: #fff;
    box-shadow: 0 0 3px rgba(0, 0, 0, .15), 0 2px 2px rgba(0, 0, 0, .2);
  }
</style>