<script lang="ts" setup>
const config = useRuntimeConfig();

const query = ref("");
const movies = ref([]);

async function onSearch() {
  const apiKey = config.public.apiKey;
  const baseURL = config.public.apiUrl;
  const data: any = await $fetch(baseURL, {
    params: {
      apiKey,
      s: query.value,
    },
  });

  console.log(data.Search)
  movies.value = data.Search
}
</script>

<template>
  <form @submit.prevent="onSearch">
    <input type="text" v-model="query">
    <button> Search </button>
  </form>

  <ul>
    <li v-for="movie in movies" :key="movie.imdbID">
      <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }"> 
        {{movie.Title}} 
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped></style>
