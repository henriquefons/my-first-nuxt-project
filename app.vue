<script setup>
useHead({
  titleTemplate: (title) => (title ? `${title}` : "Movie page"),
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
