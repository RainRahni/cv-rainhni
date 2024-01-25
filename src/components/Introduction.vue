<template>
    <div class="whole">
    <div>
      <div class="box">
        <h2 class="welcome" style="color: white;">Hello, I am</h2>
      </div>
      <h1 class="name" style="color: black;font-weight: bold">Rain Rähni</h1>
      <h2 class="occupation"
          style="color: black;font-weight: bold">Bachelor`s computer science student</h2>
      <br>
      <div class="info-logo">
        <img class="logo" src="~@/assets/mail.png" style="margin-top: 1%;">
        <a href="mailto:rain.rahni@mail.ee"><h3 class="info">rain.rahni@mail.ee</h3></a>
      </div>
      <div class="info-logo">
        <img class="logo" src="~@/assets/phone.png">
        <a href="tel:+37253065066"><h3 class="info">+372 53065066</h3></a>
      </div>
      <div class="info-logo">
        <img class="logo" src="~@/assets/location.png">
        <a href="https://www.tallinn.ee/et" target="_blank"><h3 class="info">Tallinn, Estonia</h3></a>
      </div>
      <div class="links" style="padding-top: 4%">
        <a class="linkedIn" href="https://www.linkedin.com/in/rainrhni/" target="_blank">
          <img class="logoTwo" src="~@/assets/linkedin-logo.png">
        </a>
        <a class="github" href="https://github.com/RainRahni" target="_blank">
          <img class="logoTwo" src="~@/assets/githlogo.png">
        </a>
        <a class="facebook" href="https://www.facebook.com/rain.rahni/" target="_blank">
          <img class="logoTwo" src="~@/assets/facebooklogo.png">
        </a>
        <a class="instagram" href="https://www.instagram.com/rainrahni/" target="_blank">
          <img class="logoTwo" src="~@/assets/insta-logo.png">
        </a>
      </div>
    </div>
    <div style="background-color: cornflowerblue; border-radius: 30%; width: 60%">
      <img style="padding-top: 5%; border-radius: 50%; padding-left: 12%" src="~@/assets/Rain%20stiparengu%202023.jpg">
    </div>
    </div>
</template>
<style>
.info {
  margin-left: 1%;
  width: 100%;
}
.whole {
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
.logo {
  width: 3%;
  height: 1%;
  margin-top: 0.5%;
}
.logoTwo {
  width: 3%;

}
.logoTwo:hover {
  filter: brightness(0) saturate(100%) invert(27%) sepia(43%) saturate(4094%) hue-rotate(218deg) brightness(99%)
  contrast(91%);
}
.box {
  background-color: cornflowerblue;
  width: 20%;
  text-align: center;
  border-radius: 20px 20px 20px 0px;
}

.info:hover {
  color: cornflowerblue;
}
a {
  color:cornflowerblue;
}
.info-logo img:hover {
  filter: brightness(0) saturate(100%) invert(27%) sepia(43%) saturate(4094%) hue-rotate(218deg) brightness(99%)
  contrast(91%);
}




</style>
<script setup>
</script>