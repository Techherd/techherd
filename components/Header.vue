<template>
  <div>
    <div class="logoContainer">
      <Logo />
    </div>
    <SmallLogo />
    <Navigation />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SmallLogo from '~/components/SmallLogo.vue'
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Logo,
    Navigation,
    SmallLogo
  }
}
</script>


<style scoped>
.logoContainer {
  max-width: 1500px;
  margin: 0 auto;
  position: relative;
}
</style>

