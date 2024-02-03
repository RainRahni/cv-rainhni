<script setup>

</script>

<template>
  <div class="whole">
    <div class="recommendation">
      <h1 style="text-align: center; padding: 5%">Recommendations</h1>
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
          With his academic achievements, Rain ranks among the dean's list, which includes approximately the top 5% of
          the best students. Rain has contributed to promoting the field by participating in the creation of an
          introductory video clip for the information technology curriculum and assisting in organizing the INIT event,
          aimed at introducing TalTech's information technology program to around 50 high school graduates. Rain is
          exemplary and responsible in his studies, always giving his best. His goal is to acquire new knowledge to
          improve people's lives by enhancing existing services and creating new possibilities. In the fall semester,
          Rain serves as a teaching assistant for the introductory programming course, which has over 450 students.
          He helps new students get acquainted with programming, assists in creating and organizing course materials,
          and provides feedback on students' written code. The experience gained not only enhances his communication
          skills but also strengthens his knowledge of programming, which is highly valued in the job market.
          </p>
          <div class="footer" style="margin-right: 3em; padding-bottom: 20px; display: flex; flex-direction: row-reverse;">
              - October 22, 2023
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
.whole {
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
</style>