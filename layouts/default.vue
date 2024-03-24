<script setup>
const isLoggedIn = useIsLoggedIn();
</script>

<template>
  <div>
    <nav>
      <NuxtLink to="/">Home </NuxtLink>
      <NuxtLink to="/movies"> Movie </NuxtLink>
      <NuxtLink v-if="!isLoggedIn" to="/login"> Login </NuxtLink>
      <NuxtLink v-if="isLoggedIn" to="/admin"> Admin </NuxtLink>
      <NuxtLink to="/teams/HenriqueTeam/users/31"> User 31 </NuxtLink>
      <NuxtLink to="https://www.google.com" target="_blank"> Google </NuxtLink>
    </nav>
    <slot />

    <button @click="isLoggedIn = falses">Loggout</button>
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
}
</style>
