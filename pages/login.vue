<script setup>

definePageMeta({
  layout: "plain",
});

const user = useUser();
</script>

<template>
  <form @submit.prevent="user.login">
    <h1>Login area</h1>
    <label for="username">
      Username
      <input type="text" id="username" />
    </label>
    <label for="password">
      Password
      <input type="password" id="password" />
    </label>
    <button>Log In</button>
  </form>
</template>
