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
    <div class="container">
      <div style="display:flex;justify-content: center; padding: 10%;">
        <div class="contact-me">
        <h2>Get in touch</h2>
          <div class="info-logo">
            <img src="src/assets/mail.png">
            <h3 class="info">rain.rahni@mail.ee</h3>
          </div>
          <div class="info-logo">
            <img src="src/assets/phone.png">
            <h3 class="info">+372 53065066</h3>
          </div>
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
  transition: 0.3s;
  border-radius: 5%;
  align-items: center;
  justify-content: center;
  padding: 2%;
  margin: 0 10px;
  width: 20%;
}
.whole {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-left: 20%;
  padding-right: 20%;
}
.contact {
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 40px 0px 60px;
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: black;
}
.credit {
  display: flex;
  align-items: end;
  justify-content: center;
  padding: 10%;
}

</style>