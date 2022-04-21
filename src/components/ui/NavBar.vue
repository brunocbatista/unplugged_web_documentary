<template>
  <nav class="flex justify-between px-20 py-8 mx-auto">
    <div class="hidden space-x-8 md:flex">
      <router-link to="/">HOME</router-link>
      <router-link to="/statistics">ESTATÍSTICAS</router-link>
      <router-link to="/alternatives">ALTERNATIVAS</router-link>
    </div>
    <div class="flex md:hidden">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
      >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
    <div>
      <h3 class="text-lg font-medium text-blue-500">Desconectados</h3>
    </div>
  </nav>
</template>
<script setup>

</script>
