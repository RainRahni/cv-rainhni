<script setup>

</script>

<template>
  <div class="whole-ed">
    <div class="education">
      <h1 class="edh" style="text-align: center;">Education & Certificates</h1>
      <br>
      <div class="ed-item taltech">
        <div class="ed-info-group">
          <img class="stack-img" src="~@/assets/taltech-logo.png">
          <div class="ed-info" style="padding-left: 2%">
            <h3>Bachelor of Technology</h3>
            <h2>Informatics/Computer Science (Cum Laude, GPA 4.74)</h2>
            <h4>Tallinn University of Technology</h4>
            <a target="_blank" class="link" href="https://digikogu.taltech.ee/en/Item/9d540de3-925d-4f0f-aa21-b63f9d0d16e6">Link to my thesis</a>
            <a target="_blank" class="link" href="https://www.youtube.com/live/BrnFsh4IaLY?feature=shared&start=6988">Link to my speech</a>
          </div>
        </div>
        <ul class="times" style="padding-right: 2%">
          <li>
            <div class="time">Sep&nbsp;-&nbsp;2022</div>
          </li>
          <li>
            <div class="time">Jul - 2025</div>
          </li>
        </ul>

      </div>
      <br>
      <div class="ed-item">
        <div class="ed-info-group">
          <img class="stack-img" src="~@/assets/cambridge-logo.png">
          <div class="ed-info" style="padding-left: 2%">
            <h2>Credential ID B4398702</h2>
            <h2>C1 Advanced - Score 189</h2>
            <h4>Cambridge University Press & Assessment English</h4>
          </div>
        </div>
        <div class="ed-timeline" style="padding-right: 2%">
          <li>
            <div class="time">May&nbsp;-&nbsp;2021</div>
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
.education {
  width: 100%;
}
.ed-item {
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 5%;
  align-items: center;
  padding: 2% 5% 2% 5%;
  max-width: 85%; /* same as .w-item */
  width: 100%;
  margin: 0 auto;  /* center horizontally */
}

.whole-ed {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 20%;
  padding-right: 20%;
  color: black;
  font-size: 12px;
}
ul, li{
  list-style: none;
  padding: 0;
}
.times{
  border-radius: 12px;
  position: relative;
}
li {
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
.stack-img {
  width: 100%;
  max-width: 12%;
  vertical-align: bottom;
}

@media (max-width: 1380px) {
  .whole-ed {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  .education h1 {
    margin-left: 0;
    width: 100%;
    text-align: center;
    margin-top: 15px;
  }

  .ed-item {
    width: 90%;
    padding: 30px;
  }
}

@media (max-width: 750px) {
  .times,
  .ed-timeline {
    display: none;
  }
}
.ed-item,
.ed-info,
.time,
li,
.whole-ed {
  opacity: 1 !important;
  color: #000000 !important;
  font-size: 14px;
}
.edh {
  opacity: 1 !important;
  color: #000000 !important;
  margin-left: 20%;
}
</style>