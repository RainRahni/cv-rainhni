

<template>
    <section class="intro">
      <div class="container">
        <Introduction />
      </div>
    </section>
    <section class="about">
      <div class="curve-top"></div>
      <div class="container">
        <About />
      </div>
    </section>
  <section class="projects">
      <div class="container">
        <Projects />
      </div>
  </section>
  <section class="work">
    <div class="container">
      <Work />
    </div>
  </section>
  <section class="education">
    <div class="container">
      <Education />
    </div>
  </section>
  <section class="recommendation">
    <div class="wave-top"></div>
    <div class="container">
      <Recommendation />
    </div>
    <div class="curve"></div>
  </section>
  <section class="contact">
    <div class="container">
      <Contact />
    </div>
    <div class="curve-top"></div>
  </section>
</template>
<style>

.intro {
  margin-left: 15%;
  padding-top: 10%;
  padding-bottom: 10%;
}
.about {
  padding-top: 10%;
  padding-bottom: 10%;
  background: linear-gradient(to top, #ffffff , #badef3 50%);
  border-top-left-radius: 50% 120px;
  border-top-right-radius: 50% 100px;
  clip-path: polygon(0 0, 100% 0, 100% 92%, 0% 120%);
}
.projects {
  padding-top: 10%;
  padding-bottom: 10%;
  padding-left: 15em;
}
.recommendation {
  padding-bottom: 10%;
  background: linear-gradient(to bottom, #ffffff , #badef3 50%);
  border-bottom-left-radius: 50% 120px;
  border-bottom-right-radius: 50% 100px;
  clip-path: polygon(0 0, 100% 0, 100% 92%, 0% 120%);

}
.work {
  padding-bottom: 5%;
}
.education {
  padding-bottom: 5%;
}
.curve {
  position: relative;
  width: 100%;
  background: linear-gradient(to bottom, #ffffff 0%, #badef3 100%);
  transform: skewY(-3deg);
  border-bottom-left-radius: 50% 20px;
  border-bottom-right-radius: 50% 20px;
}
.curve-top {
  position: relative;
  width: 100%;
  background: linear-gradient(to top, #ffffff 0%, #badef3 100%);
  transform: skewY(-3deg);
  border-bottom-left-radius: 50% 20px;
  border-bottom-right-radius: 50% 20px;
}
@media(max-width: 1380px) {
  .intro {
    padding: 0;
    padding-top: 10px;
    width: auto;
    margin: 0;
    padding-bottom: 60px;
  }
  .projects {
    padding-left: 6em;

  }
}
</style>
<script setup>

import Introduction from "@/components/Introduction.vue";
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import Education from "@/components/Education.vue";
import Recommendation from "@/components/Recommendation.vue";
import Contact from "@/components/Contact.vue";
import Work from "@/components/Work.vue";

</script>
