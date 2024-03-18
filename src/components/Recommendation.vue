<script setup>

</script>

<template>
  <div class="whole-rec">
    <div class="recommendation">
      <h1 style="text-align: center;">Recommendations</h1>
      <div class="rec-item">
        <div class="profile">
          <img src="~@/assets/ago-circ.png" style="width: 100%; max-width: 20%; padding: 4%;">
          <div class="profile-info">
            <div style="display: flex">
              <a href="https://www.linkedin.com/in/ago-luberg/" target="_blank">
                <h2>Ago Luberg, Ph.D</h2>
              </a>
            </div>
            <h3>Program Manager, Senior lecturer</h3>
            <h4>TalTech – Tallinn University of Technology</h4>
          </div>
        </div>
        <p style="padding-left: 4%;padding-right: 4%; text-align: justify">
          Rain Rähni began his studies in the TalTech Bachelor’s program in Informatics in the fall of 2022.
          His academic achievements have earned his a place on the dean’s list since the fall semester of 2022,
          which is an honor bestowed upon approximately the top 10% of students. Over the course of three semesters,
          Rain has accumulated 113 ECTS credits with a weighted average grade of 4.7. Rain actively contributes to
          promoting his field of study. She participated in creating an introductory video clip for the informatics
          curriculum and helped organize the INIT event, where approximately 50 high school graduates were introduced
          to the TalTech informatics program. Rain is an exemplary and responsible student, consistently giving
          his best effort. His goal is to acquire new knowledge to enhance existing services and create new
          opportunities, ultimately improving people’s lives. During the fall semester, Rain served as a teaching
          assistant for the introductory programming course, which had over 450 students enrolled. She assists new
          students in getting acquainted with programming. Additionally, in the spring semester, she is a teaching
          assistant for the fundamental programming course and software development project. In this role, she helps
          create and organize study materials and provides feedback to students on their code. His teaching experience
          is highly valued in the job market
          </p>
          <div class="footer" style="margin-right: 3em; padding-bottom: 20px; display: flex; flex-direction: row-reverse;">
              - March 4, 2024
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>


.profile {
  display: flex;
  align-items: center;
}
.rec-item {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5%;
  background-color: white;
}
.whole-rec {
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 20%;
  padding-right: 20%;
}
a:hover {
  color: cornflowerblue;
}
@media(max-width: 1380px) {
  .whole-rec {
    display: flex;
    flex-direction: column-reverse;
    padding: 0;
  }
  .rec-item {
    width: 90%;
    padding: 30px;
  }
}
</style>