

<template>
    <section class="intro">
      <div class="container">
        <Introduction />
      </div>
    </section>
    <section class="about">
      <div class="container">
        <About />
      </div>
    </section>
  <section class="projects">
      <div class="container">
        <Projects />
      </div>
  </section>
  <section class="education">
    <div class="container">
      <Education />
    </div>
  </section>
  <section class="recommendation">
    <div class="container">
      <Recommendation />
    </div>
  </section>
  <section class="contact">
    <div class="container">
      <Contact />
    </div>
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
  background-color: #badef3;
}
.projects {
  padding-top: 10%;
  padding-bottom: 10%;
  padding-left: 15em;
  padding-right: 15em;
}
.recommendation {
  padding-top: 5%;
  padding-bottom: 10%;
  background-color: #badef3;
}
.education {
  padding-bottom: 5%;
}

</style>
<script setup>

import Introduction from "@/components/Introduction.vue";
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import Education from "@/components/Education.vue";
import Recommendation from "@/components/Recommendation.vue";
import Contact from "@/components/Contact.vue";

</script>
