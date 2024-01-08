<template>
  <main>
    <div>
      <h2 class="welcome" style="color: black;">Hello, I am</h2>
      <h1 class="name" style="color: black;font-weight: bold">Rain Rähni</h1>
      <h2 class="occupation"
          style="color: black;font-weight: bold">Bachelor`s informatics student</h2>
      <br>
      <h3 class="email">rain.rahni5@gmail.com</h3>
      <h3 class="iphone">+372 53065066</h3>
      <h3 class="location">Tallinn, Estonia</h3>
      <span class="links">
        <a class="linkedIn"><img src="src/assets/linkedin%20logo.png"></a>
        <a class="github"><img src="src/assets/github%20logo.png"></a>
      </span>
    </div>
  </main>
</template>
<style>
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: black;
  line-height: 2;
}

.github {
  margin-left: 4%;
  padding-left: -10px;
}
h1 {
  font-size: 55px;
}
</style>
<script setup>
</script>