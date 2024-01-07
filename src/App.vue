<script setup>
import HomeView from "@/views/HomeView.vue";
</script>

<template>
    <HomeView />
</template>

<style scoped>

nav {
  width: 100%;
  text-align: center;
  font-size: 1rem;
  padding: 2rem 0;
}
nav a.router-link-exact-active {
  color: red;
}

nav a {
  display: inline-block;
  border-left: 1px solid var(--color-border);
  color: white;
}

nav a:first-of-type {
  border: 0;
}

</style>
