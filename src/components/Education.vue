<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const educationSection = ref(null)
const educationVisibility = ref([false, false])
let educationObservers = []

const setupEducationObservers = async () => {
  // Wait for DOM to be fully rendered
  await nextTick()

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3 // Trigger when 30% of the education item is visible
  }

  educationObservers = []

  // Create observers for each education item
  for (let i = 0; i < 2; i++) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          educationVisibility.value[i] = true
          observer.unobserve(entry.target)
        }
      })
    }, options)

    educationObservers.push(observer)

    // Observe each education item element
    const educationRef = document.querySelector(`[data-education-index="${i}"]`)
    if (educationRef) {
      observer.observe(educationRef)
    } else {
      console.warn(`Education element with data-education-index="${i}" not found`)
    }
  }
}

onMounted(() => {
  setupEducationObservers()
})

onBeforeUnmount(() => {
  if (educationObservers) {
    educationObservers.forEach(observer => observer.disconnect())
  }
})
</script>

<template>
  <div class="whole-ed" ref="educationSection">
    <div class="education">
      <h1 class="edh" style="text-align: center;">Education & Certificates</h1>
      <br>
      <div class="ed-item taltech" :data-education-index="0" :class="{ 'animate-education': educationVisibility[0] }" :style="{ transitionDelay: '0.1s' }">
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
      <div class="ed-item" :data-education-index="1" :class="{ 'animate-education': educationVisibility[1] }" :style="{ transitionDelay: '0.2s' }">
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
  transition: 0.3s;
  border-radius: 5%;
  align-items: center;
  padding: 2% 5% 2% 5%;
  /* Animation properties */
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.ed-item.animate-education {
  opacity: 1;
  transform: translateY(0);
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
}

li:last-child{
  border: 0px;
  padding-bottom: 0;
}

li:before{
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
.whole-ed h1 {
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;
}

.link {
  display: block;
  margin: 5px 0;
  color: cornflowerblue;
  text-decoration: none;
}

.link:hover {
  color: #6495ED;
  text-decoration: underline;
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
</style>