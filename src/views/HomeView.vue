

<template>
  <div class="whole">
    <div class="intro">
      <Introduction />
    </div>
  </div>
</template>
<style>
.whole {
  display: grid;
  grid-template-rows: 1fr 1fr;
}
.intro {

}
</style>
<script setup>

import Introduction from "@/components/Introduction.vue";
</script>
