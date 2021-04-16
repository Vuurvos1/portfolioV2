<script>
export default {
  props: ["error"],
};
</script>

<template>
  <main>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error ocurred</h1>
    <nuxt-link to="/">Home page</nuxt-link>
  </main>
</template>
