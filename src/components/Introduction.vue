<template>
    <div class="whole-intro ">
      <div class="intro-text">
        <div class="box">
          <h2 class="welcome" style="color: white;">Hello, I am</h2>
        </div>
        <div>
          <h1 class="name" style="color: black;font-weight: bold">Rain Rähni</h1>
          <h2 class="occupation"
              style="color: black;font-weight: bold">Bachelor`s computer science student</h2>
        </div>
        <br>
        <div class="info-logo">
          <img id="mais" class="logo"  src="~@/assets/mail.png" style="margin-top: 1%;">
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
      <div class="profp">
        <img style="border-radius: 100%;max-width: 100%; height: auto;"
             src="~@/assets/Rain-stiparengu-2023.jpg">
      </div>
    </div>
</template>
<style>
.info {
  margin-left: 4%;
  width: 100%;
}
.whole-intro {
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
  width: 5%;

}
.logoTwo:hover {
  filter: brightness(0) saturate(100%) invert(27%) sepia(43%) saturate(4094%) hue-rotate(218deg) brightness(99%)
  contrast(91%);
}
.box {
  background-color: cornflowerblue;
  width: 150px;
  text-align: center;
  border-radius: 20px 20px 20px 0px;
}
img {
  vertical-align: bottom;
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

@media(max-width: 1380px) {
  .whole-intro{
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
  .intro-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .profp {
    padding-bottom: 10px;
  }
  .info-logo {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .logo {
    width: 20px;
    height: 23px;
    margin-top: 8px !important;
  }
  .links {
    width: 130%;
  }
  .logoTwo {
    width: 30px;
  }
}


</style>
<script setup>
</script>