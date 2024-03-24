<template>
  <li>
    <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }"> 
      {{movie.Title}} 
    </NuxtLink>
  </li>
</template>

<script lang="ts" setup>
defineProps({
  movie: { required: true, type: Object }
})
</script>
