<script setup>
const route = useRoute();

const config = useRuntimeConfig();

const movieId = route.params.id;
const apiKey = config.public.apiKey;
const baseURL = config.public.apiUrl;

const { data: movie, error } = await useFetch(baseURL, {
  pick: ["Title", "Plot", "Poster", "Error"],
  key: `/movies/${movieId}`,
  params: {
    apiKey,
    i: movieId,
  },
});
if (error.value) {
  console.warn(error.value);
}
if (movie.value?.Error?.includes("Incorrect IMDb ID")) {
  showError({ statusMessage: "No movie found", statusCode: 404 });
}
useHead({
  title: movie.value.Title,
  meta: [
    { name: "description", content: movie.value.Plot},
    { property: "og:description", content: movie.value.Plot},
    { property: "og:image", content: movie.value.Poster},
    { name: "twitter:card", content: "summary_large_image"},
  ]
})
</script>

<template>
  <div>
    <pre>
      {{ movie }}
    </pre>
  </div>
</template>

<style scoped></style>
