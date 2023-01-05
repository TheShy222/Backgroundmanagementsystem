<template>
  <div class="info">
      <div class="top">
          <h2>个人信息</h2>
      </div>
      <div class="bot">
          <h2>{{ accountName }}</h2>
          <h2>{{ password }}</h2>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
      accountName(){
          return this.$store.getters['loginAccount/loginAccount'].name
      },
      password(){
          return this.$store.getters['loginAccount/loginAccount'].password
      }
  }
}
</script>

<style lang="scss" scoped>
.info {
  width: 800px;
  height: 500px;
  margin: 50px auto;

  .top {
      width: 100%;
      height: 70px;
      background-color: rgb(112, 112, 242);
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2 {
          font-size: 30px;
      }
  }
  .bot {
      width: 800px;
      height: 500px;
      background-color: rgb(154, 235, 154);

  }
}
</style>
