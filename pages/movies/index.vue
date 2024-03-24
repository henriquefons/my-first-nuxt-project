<script setup>
const config = useRuntimeConfig();

const query = ref("Batman");
const movies = ref([]);

async function onSearch() {
  const apiKey = config.public.apiKey;
  const baseURL = config.public.apiUrl;
  const data = await $fetch(baseURL, {
    params: {
      apiKey,
      s: query.value,
    },
  });

  movies.value = data.Search;
}

onSearch();
</script>

<template>
  <MovieSearch v-model="query" @click="onSearch" />

  <ul>
    <MovieCard v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
  </ul>
</template>

<style scoped></style>
