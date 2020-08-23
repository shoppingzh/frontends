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
    // background-image: url('/loginbg.png');
    // background-position: 50% 50%;
    // background-size: cover;
    background: #43cea2;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #185a9d, #43cea2);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #185a9d, #43cea2);


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