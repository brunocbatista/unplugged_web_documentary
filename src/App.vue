<template>
  <nav-bar/>
  <div class="bg-white p-14 flex items-center justify-center" style="background-image: url('https://i.gifer.com/AaQb.gif');background-size: cover;background-position: center;background-repeat: no-repeat;">
    <video class="w-3/6" controls>
      <source src="https://www.youtube.com/watch?v=TKqa-ZXGKYA&ab_channel=30PRAUM" type="video/mp4">
    </video>
  </div>
  <div class="items-center justify-center text-center p-24">
    <p class="text-4xl">"Aqui iria alguma frase de efeito"</p>
    <p class="text-lg">Por fulano</p>
  </div>
</template>

<script setup>
import NavBar from '@/components/ui/NavBar.vue'
</script>

<style>
@import '@/assets/base.css';
</style>
