<template>
  <div class="wrapper">
    <Nav/>
  </div>
  <div>
    <RouterView />
  </div>

  <div>
    Test
  </div>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
</script>

<style scoped>
</style>
