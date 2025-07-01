<template>
  <div class="whole-intro ">
    <div class="intro-text">
      <div class="box">
        <h2 class="welcome" style="color: white;">Hello, I am</h2>
      </div>
      <div>
        <h1 class="name" style="color: black;font-weight: bold">Rain Rähni</h1>
        <h2 class="occupation"
            style="color: black;font-weight: bold">Software Engineer</h2>
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
      <div class="profile-container">
        <!-- Profile image with borders -->
        <div class="profile-wrapper">
          <img class="profile-img"
               src="~@/assets/Rain-stiparengu-2023.jpg">
        </div>
      </div>
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
/* Apply animations to different sections */
.box {
  background-color: cornflowerblue;
  width: 150px;
  text-align: center;
  border-radius: 20px 20px 20px 0px;
  animation: dropFromTop 1s ease-out;
}

.name {
  animation: slideFromLeft 1s ease-out 0.3s both;
}

.occupation {
  animation: slideFromLeft 1s ease-out 0.5s both;
}

.info-logo {
  display: flex;
  margin-top: 1%;
  animation: slideFromLeft 1s ease-out 0.7s both;
}

.links {
  animation: slideFromBottom 1s ease-out 1s both;
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
* {
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* New styles for animated circles */
.profp {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.profile-container {
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
}

.profile-wrapper {
  position: relative;
  display: inline-block;
}

/* Inner border - cornflower blue, connected to image, appears first, half width */
.profile-wrapper::before {
  content: '';
  position: absolute;
  top: -18px;
  left: -18px;
  right: -18px;
  bottom: -18px;
  border: 18px solid #6495ed;
  border-radius: 50%;
  opacity: 0.8;
  animation: borderAppear 2s ease-out;
}

/* Outer border - sky blue, wider, appears second, connects to inner */
.profile-wrapper::after {
  content: '';
  position: absolute;
  top: -50px;
  left: -50px;
  right: -50px;
  bottom: -50px;
  border: 32px solid #87ceeb;
  border-radius: 50%;
  opacity: 0.8;
  animation: borderAppear 2s ease-out 0.5s both;
}

.profile-img {
  border-radius: 50%;
  width: 280px;
  height: 280px;
  object-fit: cover;
  display: block;
  position: relative;
  z-index: 10;
}

/* Animation keyframes */
@keyframes dropFromTop {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideFromBottom {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes borderAppear {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 0.8;
    transform: scale(1);
  }
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
    width: 90%;
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
  .name {
    width: 10em;
  }
  .occupation {
    font-size: 20px;
  }
  .border-outer {
    width: 280px;
    height: 280px;
  }
  .border-inner {
    width: 240px;
    height: 240px;
  }
  .profile-container {
    width: 250px;
    height: 250px;
  }
}


</style>

<script setup>
// Your script setup content goes here
</script>