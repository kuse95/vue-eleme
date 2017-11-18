<template>
  <div id="app">
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="msite">
        <img slot="icon" src="./assets/100x100.jpg">
        外卖
      </mt-tab-item>
      <mt-tab-item id="discover">
        <img slot="icon" src="./assets/100x100.jpg">
        发现
      </mt-tab-item>
      <mt-tab-item id="order">
        <img slot="icon" src="./assets/100x100.jpg">
        订单
      </mt-tab-item>
      <mt-tab-item id="profile">
        <img slot="icon" src="./assets/100x100.jpg">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      selected: 'msite'
    }
  },
  watch: {
    selected: function (val, oldval) {
      this.$router.push(val)
    }
  },
  created: function () {
    this.selected = this.$route.path.split('/')[1]
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mint-tabbar {
  background-color: #fff;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, .1);
}
.mint-tabbar > .mint-tab-item.is-selected {
  background: none;
}
</style>
