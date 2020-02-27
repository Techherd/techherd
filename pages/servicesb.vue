<template>
  <div class="pageContainer">
    <div class="boxTest"></div>
    <h2 class="title">tada</h2>
    <div>ddfd</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Servicesb'
}
</script>

<style lang="scss" scoped>
h2.title {
  font-family: 'Saira Semi Condensed';
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: 0.5px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
}

.boxTest {
  display: block;
  width: 600px;
  height: 300px;
  background: blue;
  border-radius: 1rem;
  transition: 1.6s;
}
</style>