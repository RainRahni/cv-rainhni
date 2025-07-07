<template>
  <div class="whole-tech" ref="techSection">
    <div class="tech-stack">
      <h1 class="skill-header">Tech stack</h1>
      <div class="tech-list" :class="{ 'animate-tech': isTechVisible }">
        <h3 class="tech-list-name">Backend Development</h3>
        <div class="tech-item" :class="{ 'animate-tech-item': isTechVisible }" :style="{ transitionDelay: '0.1s' }">
          <img class="stack-img" src="~@/assets/java.png">
          <div class="tech-info">
            <div>
              <h5 class="tech-name">Java</h5>
              <span>80%</span>
            </div>
            <progress max="100" value="80">
            </progress>
          </div>
        </div>
        <div class="tech-item" :class="{ 'animate-tech-item': isTechVisible }" :style="{ transitionDelay: '0.2s' }">
          <img class="stack-img" src="~@/assets/cSharplogo.png">
          <div class="tech-info">
            <div>
              <h5 class="tech-name">C#</h5>
              <span>80%</span>
            </div>
            <progress max="100" value="80">
            </progress>
          </div>
        </div>
        <div class="tech-item" :class="{ 'animate-tech-item': isTechVisible }" :style="{ transitionDelay: '0.3s' }">
          <img class="stack-img" src="../assets/netlogo.png">
          <div class="tech-info" >
            <div>
              <h5 class="tech-name">.NET</h5>
              <span>80%</span>
            </div>
            <progress max="100" value="80">
            </progress>
          </div>
        </div>
        <div class="tech-item" :class="{ 'animate-tech-item': isTechVisible }" :style="{ transitionDelay: '0.4s' }">
          <img class="stack-img" src="~@/assets/spring-logo.png">
          <div class="tech-info" >
            <div>
              <h5 class="tech-name">Spring Boot</h5>
              <span>70%</span>
            </div>
            <progress max="100" value="70">
            </progress>
          </div>
        </div>
        <div class="tech-item" :class="{ 'animate-tech-item': isTechVisible }" :style="{ transitionDelay: '0.5s' }">
          <img class="stack-img" src="~@/assets/efLogo.png">
          <div class="tech-info" >
            <div>
              <h5 class="tech-name">Entity Framework</h5>
              <span>70%</span>
            </div>
            <progress max="100" value="70">
            </progress>
          </div>
        </div>
        <div class="tech-item" :class="{ 'animate-tech-item': isTechVisible }" :style="{ transitionDelay: '0.6s' }">
          <img class="stack-img " src="~@/assets/postgresqllogo.png" style="padding-left: 10px">
          <div class="tech-info" >
            <div>
              <h5 class="tech-name">PostgreSQL</h5>
              <span>70%</span>
            </div>
            <progress max="100" value="70">
            </progress>
          </div>
        </div>
        <div class="tech-item" :class="{ 'animate-tech-item': isTechVisible }" :style="{ transitionDelay: '0.7s' }">
          <img class="stack-img" src="~@/assets/python-logo.png">
          <div class="tech-info" >
            <div>
              <h5 class="tech-name">Python</h5>
              <span>50%</span>
            </div>
            <progress max="100" value="50">
            </progress>
          </div>
        </div>
        <div class="tech-item" :class="{ 'animate-tech-item': isTechVisible }" :style="{ transitionDelay: '0.8s' }">
          <img class="stack-img " src="~@/assets/mssqldbLogo.png" style="padding-left: 10px">
          <div class="tech-info" >
            <div>
              <h5 class="tech-name">MSSQL Express</h5>
              <span>40%</span>
            </div>
            <progress max="100" value="40">
            </progress>
          </div>
        </div>
        <div class="tech-item" :class="{ 'animate-tech-item': isTechVisible }" :style="{ transitionDelay: '0.9s' }">
          <img class="stack-img " src="~@/assets/PHPlogo.png" style="padding-left: 10px">
          <div class="tech-info" >
            <div>
              <h5 class="tech-name">PHP</h5>
              <span>40%</span>
            </div>
            <progress max="100" value="40">
            </progress>
          </div>
        </div>
        <div class="tech-item" :class="{ 'animate-tech-item': isTechVisible }" :style="{ transitionDelay: '1.0s' }">
          <img class="stack-img " src="~@/assets/Laravel.png" style="padding-left: 10px">
          <div class="tech-info" >
            <div>
              <h5 class="tech-name">PHP Laravel</h5>
              <span>40%</span>
            </div>
            <progress max="100" value="40">
            </progress>
          </div>
        </div>
      </div>
      <br>
      <div class="tech-list" :class="{ 'animate-tech': isTechVisible }">
        <h3 class="tech-list-name">Web Development</h3>

        <div class="tech-item" :class="{ 'animate-tech-item': isTechVisible }" :style="{ transitionDelay: '1.1s' }">
          <img class="stack-img" src="~@/assets/reactjslogo.png">
          <div class="tech-info" >
            <div>
              <h5 class="tech-name">React</h5>
              <span>80%</span>
            </div>
            <progress max="100" value="80">
            </progress>
          </div>
        </div>
        <div class="tech-item" :class="{ 'animate-tech-item': isTechVisible }" :style="{ transitionDelay: '1.2s' }">
          <img class="stack-img" src="~@/assets/js-logo.png">
          <div class="tech-info" >
            <div>
              <h5 class="tech-name">Javascript</h5>
              <span>70%</span>
            </div>
            <progress max="100" value="70">
            </progress>
          </div>
        </div>
        <div class="tech-item" :class="{ 'animate-tech-item': isTechVisible }" :style="{ transitionDelay: '1.3s' }">
          <img class="stack-img" src="~@/assets/tslogo.png">
          <div class="tech-info" >
            <div>
              <h5 class="tech-name">Typescript</h5>
              <span>70%</span>
            </div>
            <progress max="100" value="70">
            </progress>
          </div>
        </div>
        <div class="tech-item" :class="{ 'animate-tech-item': isTechVisible }" :style="{ transitionDelay: '1.4s' }">
          <img class="stack-img" src="~@/assets/html-logo.png">
          <div class="tech-info" >
            <div>
              <h5 class="tech-name">HTML</h5>
              <span>70%</span>
            </div>
            <progress max="100" value="70">
            </progress>
          </div>
        </div>
        <div class="tech-item" :class="{ 'animate-tech-item': isTechVisible }" :style="{ transitionDelay: '1.5s' }">
          <img class="stack-img" src="~@/assets/css-logo.png">
          <div class="tech-info" >
            <div>
              <h5 class="tech-name">CSS/SCSS</h5>
              <span>60%</span>
            </div>
            <progress max="100" value="60">
            </progress>
          </div>
        </div>
        <div class="tech-item" :class="{ 'animate-tech-item': isTechVisible }" :style="{ transitionDelay: '1.6s' }">
          <img class="stack-img" src="~@/assets/angularlogo.png">
          <div class="tech-info" >
            <div>
              <h5 class="tech-name">Angular</h5>
              <span>50%</span>
            </div>
            <progress max="100" value="50">
            </progress>
          </div>
        </div>
        <div class="tech-item" :class="{ 'animate-tech-item': isTechVisible }" :style="{ transitionDelay: '1.7s' }">
          <img class="stack-img" src="~@/assets/nextjslogo.png">
          <div class="tech-info" >
            <div>
              <h5 class="tech-name">Next.js</h5>
              <span>50%</span>
            </div>
            <progress max="100" value="50">
            </progress>
          </div>
        </div>
        <div class="tech-item" :class="{ 'animate-tech-item': isTechVisible }" :style="{ transitionDelay: '1.8s' }">
          <img class="stack-img" src="~@/assets/vue-logo.png">
          <div class="tech-info" >
            <div>
              <h5 class="tech-name">Vue.js</h5>
              <span>50%</span>
            </div>
            <progress max="100" value="50">
            </progress>
          </div>
        </div>
      </div>
      <br>
      <div class="tech-list" :class="{ 'animate-tech': isTechVisible }">
        <h3 class="tech-list-name">Other skills</h3>
        <div class="tech-item" :class="{ 'animate-tech-item': isTechVisible }" :style="{ transitionDelay: '1.9s' }">
          <img class="stack-img" src="~@/assets/git-logo.png">
          <div class="tech-info" >
            <div>
              <h5 class="tech-name">Git</h5>
              <span>60%</span>
            </div>
            <progress max="100" value="60">
            </progress>
          </div>
        </div>
        <div class="tech-item" :class="{ 'animate-tech-item': isTechVisible }" :style="{ transitionDelay: '2.0s' }">
          <img class="stack-img" src="~@/assets/dsa-logo.png">
          <div class="tech-info" >
            <div>
              <h5 class="tech-name">Data structures & algorithms</h5>
              <span>60%</span>
            </div>
            <progress max="100" value="60">
            </progress>
          </div>
        </div>
        <div class="tech-item" :class="{ 'animate-tech-item': isTechVisible }" :style="{ transitionDelay: '2.1s' }">
          <img class="stack-img" src="~@/assets/wcg.png">
          <div class="tech-info" >
            <div>
              <h5 class="tech-name">WCAG Compatibility</h5>
              <span>50%</span>
            </div>
            <progress max="100" value="50">
            </progress>
          </div>
        </div>
      </div>
    </div>
    <div class="project">
      <h1 class="skill-header">Project</h1>
      <div class="project-list">
        <div class="project-item" ref="project0" :class="{ 'animate-project': projectVisibility[0] }" :style="{ transitionDelay: '0.1s' }">
          <h3 style="padding-left: 1rem; font-weight: bold" class="project-name">Room renting website</h3>
          <a style="padding-left: 1rem; font-weight: bold;" class="link"
             href="https://mausma.pages.taltech.ee/iti0105-2022/public/pages/room-rent-webpage-main.html" target="_blank">
            Website address</a>

          <h4 style="padding-left: 1rem; font-weight: bold; width: 100%">Sep-2022 to Dec-2022</h4>
          <ul>
            <li>
              Developed a website with two teammates as part of a course project. The goal of the website was
              to make renting rooms in TalTech University more comfortable
              for both teachers and students.</li>
            <li>
              Used HTML, CSS, JavaScript and the
              Bootstrap 5 framework to achieve functionality.
              The project was managed using GitLab.
            </li>
          </ul>
        </div>
        <br>
        <div class="project-item" ref="project1" :class="{ 'animate-project': projectVisibility[1] }" :style="{ transitionDelay: '0.1s' }">
          <h3 style="padding-left: 1rem; font-weight: bold" class="project-name">Post-office website</h3>
          <a style="padding-left: 1rem; font-weight: bold;" href="https://github.com/RainRahni/post-office-back" class="link"
             target="_blank">Backend repo</a>
          <a style="padding-left: 1rem; font-weight: bold;" href="https://github.com/RainRahni/post-office-front" class="link"
             target="_blank">
            Frontend repo</a>
          <h4 style="padding-left: 1rem; font-weight: bold">May-2024 to Jun-2024</h4>
          <ul>
            <li>
              Developed an interactive web platform that provides a comprehensive solution for managing shipments
              and bags. This platform is designed with a user-friendly interface that allows users to view all their
              created shipments and bags. In addition to viewing, the platform also empowers
              users to add new shipments, bags, parcels, and letters themselves. </li>
            <li>
              Used .NET, Entity Framework and MSSQL Database
              to achieve functionality.
              The project was managed using Github.
            </li>
          </ul>
        </div>
        <br>
        <div class="project-item" ref="project2" :class="{ 'animate-project': projectVisibility[2] }" :style="{ transitionDelay: '0.1s' }">
          <h3 style="padding-left: 1rem; font-weight: bold" class="project-name">Calorie tracking website</h3>
          <a style="padding-left: 1rem; font-weight: bold;" href="https://github.com/RainRahni/barv-backend" class="link"
             target="_blank">Backend repo</a>
          <a style="padding-left: 1rem; font-weight: bold;" href="https://github.com/RainRahni/barv-frontend" class="link"
             target="_blank">
            Frontend repo</a>
          <h4 style="padding-left: 1rem; font-weight: bold">Jan-2023 to Jan-2024</h4>
          <ul>
            <li>
              Developed a website for tracking calorie intake, allowing users to add meals
              and track their macros and calories.
            </li>
            <li>
              Used Vue.js, Java, CockroachDB-hosted PostgreSQL and the
              Spring Boot framework to achieve functionality.
              The project was managed using GitHub.
            </li>
          </ul>
        </div>
        <br>
        <div class="project-item" ref="project3" :class="{ 'animate-project': projectVisibility[3] }" :style="{ transitionDelay: '0.1s' }">
          <h3 style="padding-left: 1rem; font-weight: bold" class="project-name">Multiplayer shooting game</h3>
          <a style="padding-left: 1rem; font-weight: bold;" class="link"
             href="https://youtu.be/QyWzJtDD8QM?feature=shared&t=53s" target="_blank">
            Demo link (starts at 0:53)</a>
          <h4 style="padding-left: 1rem; font-weight: bold">Feb-2023 to Jun-2023</h4>
          <ul>
            <li>
              Developed a top-down view game in Java with two other people. The game is playable as a multiplayer game
              and also includes an AI player that follows one of the players using
              the A* pathfinding algorithm.
            </li>
            <li>
              Used Java, Kryonet library, Gradle and the libGDX framework to achieve functionality.
              The project was managed using GitLab.
            </li>
          </ul>
        </div>
        <br>
        <div class="project-item" ref="project4" :class="{ 'animate-project': projectVisibility[4] }" :style="{ transitionDelay: '0.1s' }">
          <h3 style="padding-left: 1rem; font-weight: bold" class="project-name">COOS app</h3>
          <a style="padding-left: 1rem; font-weight: bold;" class="link"
                                                    href="https://youtu.be/Jp6TfgUAibo?feature=shared" target="_blank">
            Demo version before pivoting
</a>
          <h4 style="padding-left: 1rem; font-weight: bold; width: 100%">Work in progress</h4>
          <ul>
            <li>
              Developing a mobile application where users can choose their groceries from stores around Estonia.
              After choosing groceries, the algorithm calculates the cheapest path to buy these items, taking into
              account price, sales, and whether the product is currently available at the store.
            </li>
            <li>
              Currently using React Native, PostgreSQL and Spring Boot.
              The project is managed using GitHub.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
a {
  margin-right: 4%;
  color: black;
}
a:hover {
  background-color: white;
}

h1 {
  display: flex;
  flex-direction: column;
  font-size: 55px;
  margin-right: 20%;
}
.skill-header {
  margin-left: 10%;
  text-align: center;
  margin-top: 15px;
}

.project-item {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 80%;
  border-radius: 5%;
  padding: 3%;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.project-item.animate-project {
  opacity: 1;
  transform: translateY(0);
}

.tech-list {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 80%;
  border-radius: 12px;
  padding: 20px;
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.tech-list.animate-tech {
  opacity: 1;
  transform: translateX(0);
}

.tech-item {
  display: inline-flex;
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
}

.tech-item.animate-tech-item {
  opacity: 1;
  transform: translateX(0);
}

div.tech-item div.tech-info
div {
  display: flex;
  justify-content: space-between;
}
.tech-list-name {
  font-weight: bold;
}
.stack-img {
  width: 100%;
  max-width: 12%;
  vertical-align: bottom;
}
.tech-name {
  font-weight: bold;
}
.tech-info {
  padding-left: 20px;
  width: 100%;
}

progress {
  width: 100%;
}
.whole-tech {
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: black;
  line-height: 2;
}
.link:hover{
  color:cornflowerblue;
}
@media(max-width: 1380px) {
  .whole-tech {
    display: flex;
    flex-direction: column-reverse;
  }
  .project-item {
    width: 90%;
    padding: 30px;
  }
  .project-list {
    padding-bottom: 50px;
  }
  .stack-img {
    width: 300px;
    padding: 2px;
    min-width: 65px;
    max-width: 65px;
  }
  .tech-list {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
}
</style>
<script>
export default {
  data() {
    return {
      isTechVisible: false,
      projectVisibility: [false, false, false, false, false]
    }
  },
  mounted() {
    this.setupIntersectionObserver();
    this.setupProjectObservers();
  },
  beforeUnmount() {
    if (this.techObserver) {
      this.techObserver.disconnect();
    }
    if (this.projectObservers) {
      this.projectObservers.forEach(observer => observer.disconnect());
    }
  },
  methods: {
    setupIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      };

      this.techObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isTechVisible = true;
            this.techObserver.unobserve(entry.target);
          }
        });
      }, options);

      this.techObserver.observe(this.$refs.techSection);
    },

    setupProjectObservers() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 // Trigger when 30% of the project is visible
      };

      this.projectObservers = [];

      // Create observers for each project
      for (let i = 0; i < 5; i++) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.projectVisibility[i] = true;
              observer.unobserve(entry.target);
            }
          });
        }, options);

        this.projectObservers.push(observer);

        // Observe each project element
        const projectRef = this.$refs[`project${i}`];
        if (projectRef) {
          observer.observe(projectRef);
        }
      }
    }
  }
}
</script>