<template>
  <main>
    <div>
      <h2 class="welcome" style="color: black;">Hello, I am</h2>
      <h1 class="name" style="color: black;font-weight: bold">Rain Rähni</h1>
      <h2 class="occupation"
          style="color: black;font-weight: bold">Bachelor`s informatics student</h2>
      <br>
      <div class="info-logo">
        <img src="src/assets/mail.png">
        <h3 class="info">rain.rahni5@gmail.com</h3>
      </div>
      <div class="info-logo">
        <img src="src/assets/phone.png">
        <h3 class="info">+372 53065066</h3>
      </div>
      <div class="info-logo">
        <img src="src/assets/location.png">
        <h3 class="info">Tallinn, Estonia</h3>
      </div>
      <span class="links">
        <a class="linkedIn" href="https://www.linkedin.com/in/rainrhni/" target="_blank">
          <img src="src/assets/linkedin%20logo.png">
        </a>
        <a class="github" href="https://github.com/RainRahni" target="_blank">
          <img src="src/assets/github%20logo.png">
        </a>
        <a class="facebook" href="https://www.facebook.com/rain.rahni/" target="_blank">
          <img src="src/assets/facebooklogo.png">
        </a>
        <a class="instagram" href="https://www.instagram.com/rainrahni/" target="_blank">
          <img src="src/assets/insta-logo.png">
        </a>
      </span>
    </div>
    <div>
      <img style="margin-top: 3%; border-radius: 50%" src="src/assets/Rain%20stiparengu%202023.jpg">
    </div>
  </main>
</template>
<style>
.info {
  margin-left: 1%;
}
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: black;
  line-height: 2;
}
a {
  margin-right: 4%;
}

h1 {
  font-size: 55px;
}
.info-logo {
  display: flex;
  margin-top: 1%;
}
</style>
<script setup>
</script>