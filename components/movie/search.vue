<template>
  <form @submit.prevent="emit('click')">
    <input type="text" v-model="query" />
    <button>Search</button>
  </form>
</template>

<script setup>
const query = defineModel({ required: true });
const emit = defineEmits(["click"]);
</script>
