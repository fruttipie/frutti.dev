<script setup>
import WelcomeItem from './WelcomeItem.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
    <div class="bg-black text-white font-bold m-2 p-4 flex gap-2">
        <div>
            WHAT!!!!!!! GOES HARD!!!
        </div>
        <div>
            Test Div This is me
        </div>
        <div>
            Test Div
        </div>
    </div>
  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem>
</template>
