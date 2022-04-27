<script setup></script>
<template>
  <header class="header"></header>
  <img
    src="../assets/img/icons/stack.svg#logo_text"
    width="13.21"
    height="13.21"
    alt=""
    class="logo"
  /><button class="login">
    <img src="../assets/img/icons/stack.svg#arrow" alt="" />
    Войти</button
  ><button class="menu__btn">
    <span class="hidden">Меню</span>
    <div class="menu__btn__item" v-for="n in 3" :key="n"></div>
  </button>
</template>
