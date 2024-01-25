<script setup>

</script>

<template>
  <div class="whole">
    <div class="recommendation">
      <h1 style="text-align: center; padding: 5%">Recommendations</h1>
      <div class="rec-item">
        <div class="profile">
          <img src="src/assets/default-prof.png" style="width: 18%; padding: 4%">
          <div class="profile-info">
            <h2>Annemari Riisimäe</h2>
            <h3>Assistant Lecturer</h3>
            <h4>Tallinn University of Technology, Tallinn</h4>
          </div>
        </div>
        <p style="padding-left: 4%;padding-right: 4%; text-align: justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            ojdasi9j0asfas90jjfas0jf0asjf0asjfas´fko0ifhasojfasjfaso
          </p>
          <div class="footer" style="margin-right: 3em; padding-bottom: 20px; display: flex; flex-direction: row-reverse;">
              - January 26, 2024
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
</style>