<template>
    <div class="whole">
    <div>
      <img style="margin-left: 15%" src="src/assets/coder.png">
    </div>
    <div class="about-text">
      <h1 style="text-align: center; font-weight: bold">About me</h1>
      <p style="text-align: justify">
        Hi, I'm Rain Rähni, a 2nd-year Bachelor's student in Informatics/Computer Science at Tallinn University of
        Technology. I've honed my skills in Backend Development using Java and Spring Boot through several school
        and personal projects. I also have experience with HTML, CSS, JavaScript, and Vue.js. I'm particularly drawn
        to backend development with Java. I am eager to deepen my understanding and contribute to innovative solutions
        in these fields.
        <br>
        <br>
        As an IT student, I aspire to impact the world positively through technological developments, whether initiated by me or others. In the future, I aim to own a company
        that helps people's lifes.Beyond my technical skills, I bring communication to my work. I'm also an active
        football player and enjoy spending time with friends.
      </p>
      <a class="resume-button clickable" href="src/assets/Rain%20Rähni%20CVeng.pdf"
         target="_blank">View
        Resume</a>
    </div>
    </div>
</template>
<style>
.whole {
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: black;
  line-height: 2;
}
.about-text {
  margin-right: 5%;
}
.resume-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  margin-left: 16rem;
  border-radius: 15%;
  padding: 5px;
  width: 25%;
  color: white;
  background-color: teal;
}
</style>
<script>

</script>