<script setup>

</script>

<template>
  <div class="whole-prof">
    <h1 style="text-align: center; margin-left: 20%">Profile links</h1>
    <div class="contact">
      <div class="prof-item">
        <img id="linkedCol" style="width: 50%;" src="~@/assets/linkedin-col-logo2.png">
        <br>
        <h3><a href="https://www.linkedin.com/in/rainrhni/" target="_blank">
          @rainrhni</a>
        </h3>
      </div>
      <div class="prof-item">
        <img style="width: 50%" src="~@/assets/githlogo.png">
        <br>
        <h3><a href="https://github.com/RainRahni" target="_blank">
          @RainRahni</a>
        </h3>
      </div>
      <div class="prof-item">
        <img style="width: 50%" src="~@/assets/leetcode-logo.png">
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
            <img class="logo" src="~@/assets/mail.png" style="margin-top: 0.5rem">
            <a href="mailto:rain.rahni@mail.ee"><h3 class="info">rain.rahni@mail.ee</h3></a>
          </div>
          <div class="info-logo">
            <img class="logo" src="~@/assets/phone.png">
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
.whole-prof {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 5%;
  color: black;
}
.contact {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
a {
  margin: 0;
}
.logo {
  width: 1em;
  height: 1em;
  margin-top: 5px;
}
a:hover {
  color: cornflowerblue;
}
.prof-item:hover {
    transform: scale(1.05) translateY(-5px);
}
@media(max-width: 1380px) {
  .whole-prof h1 {
    margin-left: 20%;
    font-size: 30px;
  }
  .prof-item {
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    padding: 30px 20px;
    margin: 15px;
    width: 200px;
  }
  .contact {
    width: 90%;
    padding: 0;
    margin-left: 20px;
  }
  .containerC {
    display: flex;
    flex-direction: column;
  }
  .contact-me {
    padding-top: 50px;
    margin-left: 0;
    padding-left: 0;
    text-align: center;
  }
  .credit {
    padding: 30px;
  }
}
</style>