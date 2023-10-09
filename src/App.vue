<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
        <HelloWorld msg="You did it!" />

        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
