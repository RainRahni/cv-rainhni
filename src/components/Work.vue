<script setup>

</script>

<template>
  <div class="whole-work">
    <div class="work" style="padding-bottom: 5%;">
      <h1 style="text-align: center;" class="workExp">Work Experience</h1>
      <br>
      <div class="w-item">
        <div class="w-info-group">
          <!--<img style="width: 9em; height: 10em; padding-left: 2%;" src="~@/assets/taltech-logo.jpg">-->
          <div class="w-info" style="padding-left: 2%">
            <h2>Assistant Lecturer</h2>
            <h3>Tallinn University of Technology</h3>
            <p>
              Provided Java programming tutoring to students by assisting them with their assignments and
              mark their exercises.
            </p>
          </div>
        </div>
        <ul class="times" style="padding-right: 2%">
          <li>
            <div class="time">Feb&nbsp;-&nbsp;2024</div>
          </li>
          <li>
            <div class="time">Jun - 2024</div>
          </li>
        </ul>
      </div>
      <br>
      <div class="w-item">
        <div class="w-info-group">
          <!--<img style="width: 9em; height: 10em; padding-left: 2%;" src="~@/assets/taltech-logo.jpg">-->
          <div class="w-info" style="padding-left: 2%">
            <h2>Assistant Lecturer</h2>
            <h3>Tallinn University of Technology</h3>
            <p>
              Provided Java programming, libGdx, Gradle tutoring to students by assisting them with creation of their
              project. Also created materials for other assistant lecturers.
            </p>
          </div>
        </div>
        <ul class="times" style="padding-right: 2%">
          <li>
            <div class="time">Feb&nbsp;-&nbsp;2024</div>
          </li>
          <li>
            <div class="time">Jun - 2024</div>
          </li>
        </ul>
      </div>
      <br>
      <div class="w-item">
        <div class="w-info-group">
          <!--<img style="width: 9em; height: 10em; padding-left: 2%;" src="~@/assets/taltech-logo.jpg">-->
          <div class="w-info" style="padding-left: 2%">
            <h2>Assistant Lecturer</h2>
            <h3>Tallinn University of Technology</h3>
            <p>
              Provided Python programming tutoring to students by assisting them with assignments and mark their
              exercises. Additionally, I created exercises for the course.
            </p>
          </div>
        </div>
        <ul class="times" style="padding-right: 2%">
          <li>
            <div class="time">Sep&nbsp;-&nbsp;2023</div>
          </li>
          <li>
            <div class="time">Jan - 2024</div>
          </li>
        </ul>
      </div>
      <br>
      <div class="w-item" style="padding: 3% 5% 3% 5%;">
        <div class="w-info-group">
          <div class="w-info" style="margin-right: 10%">
            <h2>Assistant Lecturer</h2>
            <h3>Tallinn University of Technology</h3>
            <p>
              Provided assistance with HTML, CSS, Javascript and Python in informatics introductory event "INIT-23".
            </p>
          </div>
        </div>
        <div class="w-timeline">
          <li>
            <div class="time">March&nbsp;-&nbsp;2023</div>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.w-info-group {
  display: flex;
  align-items: center;
  width: 100%;
}
.w-item {
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5%;
  align-items: center;
  padding: 2% 5% 2% 5%;
}
.whole-work {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 20%;
  padding-right: 20%;
}
ul, li{
  list-style: none;
  padding: 0;
}
.times{
  border-radius: 12px;
  position: relative;
}
li{
  padding-bottom: 1.5rem;
  border-left: 1px solid cornflowerblue;
  position: relative;
  padding-left: 20px;
  margin-left: 10px;
  &:last-child{
    border: 0px;
    padding-bottom: 0;
  }
  &:before{
    content: '';
    width: 15px;
    height: 15px;
    background: white;
    border: 1px solid cornflowerblue;
    box-shadow: 3px 3px 0px cornflowerblue;
    border-radius: 50%;
    position: absolute;
    left: -10px;
    top: -1px;
  }
}
.work {
  color: black;
}
.time{
  color: black;
  font-family: sans-serif;
  font-weight: 500;
}
.w-item:hover {
  transform: scale3d(105%, 105%, 105%);
  background-color: #a9fdfd;
}
.workExp {
  margin-left: 20%;
}
@media screen and(max-width: 1380px) {
  .whole-work {
      display: flex;
      flex-direction: column;
      padding: 0;
  }
  .work h1 {
    margin-left: 0;
    width: 90%;
    text-align: center;
    margin-top: 15px;

  }
  .workExp {
    margin-left: 0;
  }
  .w-item {
    width: 90%;
    padding: 30px;
  }
}


</style>