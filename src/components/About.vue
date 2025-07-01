<template>
    <div class="whole-about">
    <div class="coderPic">
      <img style="width:45%; float: right; margin: 15%" src="~@/assets/rainCoder.png">
    </div>
    <div class="about-text">
      <h1 class="aboutHead" style="text-align: center; font-weight: bold">About me</h1>
      <p style="text-align: justify">
        Hi, I'm Rain Rähni — a Junior Full-Stack Developer with a strong focus on building accessible, user-centered web applications.
        I have hands-on experience with backend technologies like Java, Spring Boot, .NET, and Python, and I work fluently with frontend
        frameworks including React, Angular, and Vue.js.
        <br>
        <br>
        Beyond tech, I bring strong communication skills, a collaborative mindset, and the discipline of a competitive football player to everything
        I do. I aspire to make a positive impact through technological developments — whether initiated by me or by supporting the work of others.
        In the future, I aim to lead a company that helps improve people’s lives. Outside of work, I enjoy football and spending time with friends.
      </p>
      <div class="syt">
        <a class="resume-button clickable" style="text-align: center"
           href="https://drive.google.com/file/d/1Qw6mTn-JEBoq5QkraXqx4xroC1jwD1e0/view?usp=sharing"
         target="_blank">View Resume</a>
      </div>
      </div>

    </div>
</template>
<style>
.whole-about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: black;
  line-height: 2;
}
.about-text {
  display: flex;
  flex-direction: column;
  width: 70%;
}
.aboutHead {
  margin-left: 20%;
}
.resume-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  margin-left: 14rem;
  border-radius: 15%;
  padding: 5px;
  width: 25%;
  color: white;
  background-color: teal;
  animation: heartbeat 1.5s infinite ease-in-out;
  transition: animation-play-state 0.5s;
}
.resume-button:hover {
  background-color: #00c5c5;
  animation-play-state: paused;
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
@media(max-width: 1380px) {
  .whole-about{
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
  }
  .resume-button {
    display: block;
    margin: auto;
    margin-top: 20px;
    border-radius: 15%;
    width: 10rem;
  }
  .coderPic {
    display: flex;
    flex-direction: row;
    margin-left: 140px;
    width: 40em;
  }
  .aboutHead {
    display: flex;
    margin-left: 1%;
    width: 100%;
  }


}
</style>
<script>

</script>
