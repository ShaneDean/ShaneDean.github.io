<template>
  <b-navbar type="dark" variant="dark" sticky="true">
    <b-navbar-nav>
      <b-nav-item href="#"><router-link to="/">Home</router-link></b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="代码" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="小游戏" right>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item href="/note"><router-link to="/note">笔记</router-link></b-nav-item>
      <b-nav-item href="#">我</b-nav-item>

    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'navbar'

}
</script>

<style>

</style>