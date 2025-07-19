  <script setup>
  import { onMounted, onUnmounted, ref } from 'vue'

  const workItems = ref([])

  const observeWorkItems = () => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.dataset.index) || 0
              setTimeout(() => {
                entry.target.classList.add('animate-in')
              }, index * 150) // Reduced stagger time
            }
          })
        },
        {
          threshold: 0.2, // Increased threshold
          rootMargin: '0px 0px -20px 0px' // Reduced bottom margin
        }
    )

    // Use nextTick to ensure DOM is ready
    setTimeout(() => {
      const items = document.querySelectorAll('.work-card')
      items.forEach((item, index) => {
        item.dataset.index = index
        observer.observe(item)
      })
    }, 100)

    return observer
  }

  let observer = null

  onMounted(() => {
    observer = observeWorkItems()
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
  </script>

  <template>
    <div class="whole-work">
      <div class="work" style="padding-bottom: 5%;">
        <h1 style="text-align: center;" class="workExp">Work Experience</h1>
        <br>
        <div
            class="w-item work-card"
        >
          <div class="w-info-group">
            <div class="w-info" style="padding-left: 2%">
              <h2>Software Engineer (Intern to Junior)</h2>
              <h3>NetGroup OÜ</h3>
              <p>
                Contributed to the development of large-scale public- and private-sector web platforms, including national digital services and a commercial e-commerce system.
              </p>
              <ul>
                <li>Built new views and improved existing ones across web applications, enhancing user experience and WCAG accessibility.</li>
                <li>Developed backend functionality, extended APIs, and implemented business logic for new features.</li>
                <li>Collaborated with cross-functional teams to deliver reliable, user-focused solutions in production environments.</li>
              </ul>
            </div>
          </div>
          <ul class="times" style="padding-right: 2%">
            <li>
              <div class="time">Sep&nbsp;-&nbsp;2024</div>
            </li>
            <li>
              <div class="time">Present</div>
            </li>
          </ul>
        </div>
        <br>
        <div
            class="w-item work-card"
        >
          <div class="w-info-group">
            <div class="w-info" style="padding-left: 2%">
              <h2>Teaching Assistant</h2>
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
        <div
            class="w-item work-card"
        >
          <div class="w-info-group">
            <div class="w-info" style="padding-left: 2%">
              <h2>Teaching Assistant</h2>
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
        <div
            class="w-item work-card"
        >
          <div class="w-info-group">
            <div class="w-info" style="padding-left: 2%">
              <h2>Teaching Assistant</h2>
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
        <div
            class="w-item work-card"
            style="padding: 3% 5% 3% 5%;"
        >
          <div class="w-info-group">
            <div class="w-info" style="margin-right: 10%">
              <h2>Teaching Assistant</h2>
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
    transition: all 0.3s ease;
    border-radius: 5%;
    align-items: center;
    padding: 2% 5% 2% 5%;
    max-width: 85%; /* Reduced from 100% */
    margin: 0 auto; /* Center the cards */
  }

  .work-card {
    opacity: 0.1; /* Changed from 0 to 0.1 for debugging */
    transform: translateY(30px);
    transition: all 0.6s ease-out;
  }

  .work-card.animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  /* Fallback - show cards after 3 seconds if animation doesn't work */
  .work-card {
    animation: fallback-show 0.1s ease-in-out 3s forwards;
  }

  @keyframes fallback-show {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .whole-work {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 20%;
    padding-right: 20%;
  }

  /* GLOBAL RESET - no default bullets or padding/margin */
  ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  /* TIMELINE DATES — vertical line and custom circle bullets */
  .times {
    border-radius: 12px;
    position: relative;
  }

  .times li {
    padding-bottom: 1.5rem;
    border-left: 1px solid cornflowerblue;
    position: relative;
    padding-left: 20px;
    margin-left: 10px;
    list-style: none; /* keep none here */
  }

  .times li:last-child {
    border-left: 0;
    padding-bottom: 0;
  }

  .times li::before {
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

  /* WORK DESCRIPTION BULLET POINTS — normal discs */
  .w-info ul {
    list-style-type: disc;       /* enable disc bullets */
    padding-left: 1.5rem;        /* indent for bullets */
    margin: 0.5rem 0;
  }

  .w-info ul li {
    list-style-type: disc;       /* bullets on each li */
    margin: 0.3rem 0;
    padding: 0;
    border: none;
  }

  /* Text colors and fonts */
  .work {
    color: black;
  }

  .time {
    color: black;
    font-family: sans-serif;
    font-weight: 500;
  }

  .w-item:hover {
    transform: scale3d(105%, 105%, 105%);
    background-color: #a9fdfd;
  }

  .work-card:hover.animate-in {
    transform: translateY(-5px) scale(1.05);
  }

  .workExp {
    margin-left: 20%;
  }

  @media screen and (max-width: 1380px) {
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
    .w-item {
      width: 90%;
      padding: 30px;
      max-width: 95%; /* Adjust for mobile */
    }
    .workExp {
      font-size: 55px;
    }
  }
  </style>