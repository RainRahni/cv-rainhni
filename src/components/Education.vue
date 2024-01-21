<script setup>

</script>

<template>
  <div class="whole">
    <div class="education">
      <h1 style="text-align: center;">Education & Certificates</h1>
        <div class="ed-item">
          <div class="ed-info-group">
            <img style="width: 20%" src="src/assets/taltech-logo.jpg">
            <div class="ed-info" style="margin-right: 10%">
              <h3>Bachelor of Technology</h3>
              <h2>Informatics/Computer Science</h2>
              <h4>Tallinn University of Technology</h4>
            </div>
          </div>
          <div class="ed-timeline" style="margin-right: 5%">
            <h5>Sep-2022 to June-2025</h5>
          </div>
        </div>
      <div class="ed-item">
        <div class="ed-info-group">
          <img style="width: 20%" src="src/assets/taltech-logo.jpg">
          <div class="ed-info" style="margin-right: 10%">
            <h3>Bachelor of Technology</h3>
            <h2>Informatics/Computer Science</h2>
            <h4>Tallinn University of Technology</h4>
          </div>
        </div>
        <div class="ed-timeline" style="margin-right: 5%">
          <h5>Sep-2022 to June-2025</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.ed-info-group {
  display: flex;
  align-items: center;
}
.ed-item {
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5%;
  align-items: center;
}
.whole {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>