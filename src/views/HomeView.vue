

<template>
    <section class="intro">
      <div class="container">
        <Introduction />
      </div>
    </section>
    <section class="about">
      <div class="container">
        <About />
      </div>
    </section>
</template>
<style>

.intro {
  margin-left: 15%;
  padding-top: 10%;
  padding-bottom: 10%;
}
.about {
  padding-top: 10%;
  padding-bottom: 10%;
  background-color: #badef3;
}
</style>
<script setup>

import Introduction from "@/components/Introduction.vue";
import About from "@/components/About.vue";

</script>
