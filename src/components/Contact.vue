<script setup>

</script>

<template>
  <div class="whole">
    <h1 style="text-align: center;">Profile links</h1>
    <div class="contact">
      <div class="prof-item">
        <img style="width: 50%;" src="src/assets/linkedin-col-logo.png">
        <br>
        <h3><a href="https://www.linkedin.com/in/rainrhni/" target="_blank">
          @rainrhni</a>
        </h3>
      </div>
      <div class="prof-item">
        <img style="width: 50%" src="src/assets/githlogo.png">
        <br>
        <h3><a href="https://github.com/RainRahni" target="_blank">
          @RainRahni</a>
        </h3>
      </div>
      <div class="prof-item">
        <img style="width: 50%" src="src/assets/leetcode-logo.png">
        <br>
        <h3><a href="https://leetcode.com/RainRahni/" target="_blank">
          @RainRahni</a>
        </h3>
      </div>
    </div>
  </div>
  <footer>
    <div class="containerC">
        <div class="contact-me">
          <h2>Get in touch</h2>
            <div class="info-logo">
            <img class="logo" src="src/assets/mail.png" style="margin-top: 0.5rem">
            <a href="mailto:rain.rahni@mail.ee"><h3 class="info">rain.rahni@mail.ee</h3></a>
          </div>
          <div class="info-logo" style="float: right">
            <img class="logo" src="src/assets/phone.png">
            <a href="tel:+37253065066"><h3 class="info">+372 53065066</h3></a>
        </div>
      </div>
      <div class="credit">
        <h3> Made by Rain Rähni, 2024 </h3>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.prof-item {
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 5%;
  align-items: center;
  justify-content: center;
  padding: 2%;
  margin: 0 10px;
  width: 20%;
  transition: transform 0.3s ease-in-out;
}
.whole {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 5%;
}
.contact {
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 40px 60px;
}
.containerC {
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: black;
}
.contact-me {
  align-items: center;
  justify-content: center;
  margin-left: 30%;
  padding-left: 10%;
}

.credit {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10%;
}
.logo {
  width: 3%;
  height: 1%;
  margin-top: 0.5%;
}
a:hover {
  color: cornflowerblue;
}
.prof-item:hover {
    transform: scale(1.05) translateY(-5px);
}
</style>