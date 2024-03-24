<script setup>
const router = useRouter()

definePageMeta({
  layout: "plain",
});

const isLoggedIn = useIsLoggedIn();

function login() {
  isLoggedIn.value = true;
  router.push('/')
}
</script>

<template>
  <form @submit.prevent="login">
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
