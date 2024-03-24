<template>
  <form>
    <h1>Login area</h1>
    <label for="username">
      Username
      <input type="text" id="username" />
    </label>
    <label for="password">
      Password
      <input type="password" id="password" />
    </label>
  </form>
</template>

<script setup>
definePageMeta({
  layout: "plain",
});
</script>
