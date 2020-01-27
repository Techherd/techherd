<template>
  <div class="headerGrid">
    <Logo />
    <Navigation />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Logo,
    Navigation
  }
}
</script>


<style scoped>
.headerGrid {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
</style>

