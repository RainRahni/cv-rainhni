<script setup>

</script>

<template>
  <div class="whole">
    <div class="education" style="padding-bottom: 5%;">
      <h1 style="text-align: center;">Education & Certificates</h1>
      <br>
      <div class="ed-item">
        <div class="ed-info-group">
          <img style="width: 9em; height: 10em; padding-left: 2%;" src="~@/assets/taltech-logo.jpg">
          <div class="ed-info" style="padding-left: 2%">
            <h3>Bachelor of Technology</h3>
            <h2>Informatics/Computer Science</h2>
            <h4>Tallinn University of Technology</h4>
          </div>
        </div>
        <ul class="times" style="padding-right: 2%">
          <li>
            <div class="time" style="width: 100%;">Sep&nbsp;-&nbsp;2022</div>
          </li>
          <li>
            <div class="time" style="width: 100%;">Jun - 2025</div>
          </li>
        </ul>
      </div>
      <br>
      <div class="ed-item" style="padding: 3% 5% 3% 5%;">
        <div class="ed-info-group">
          <img style="width: 15%; padding: 3%" src="~@/assets/cambridge-logo.png">
          <div class="ed-info" style="margin-right: 10%">
            <h4>Credential ID B4398702</h4>
            <h2>C1 Advanced - Score 189</h2>
            <h4>Cambridge University Press & Assessment English</h4>
          </div>
        </div>
        <div class="ed-timeline" style="padding-right: 2%">
          <li>
            <div class="time" style="width: 100%;">May&nbsp;-&nbsp;2021</div>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.ed-info-group {
  display: flex;
  align-items: center;
  width: 100%;
}
.ed-item {
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5%;
  align-items: center;
  padding: 2% 5% 2% 5%;
}
.whole {
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
.time{
  color: black;
  font-family: sans-serif;
  font-weight: 500;
}
.ed-item:hover {
  transform: scale3d(105%, 105%, 105%);
}
</style>