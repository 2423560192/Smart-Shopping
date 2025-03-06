<template>
    <div>
      <!-- 二级路由出口： 二级组件展示的位置 -->
       <router-view></router-view>
    <van-tabbar route active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>

      <van-tabbar-item icon="apps-o" to="/category">分类页</van-tabbar-item>

      <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>

      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
    </div>

  </template>

<script>
export default {
  name: 'LayoutIndex'
}
</script>
