<template>
  <footer>
    <div class="footerInner">
      <div class="location">
        <Navigation />
      </div>
      <div class="resources">
        <p>DECA LLC DBA TECH HERD</p>
        <em>&copy;2020 Techherd</em>
      </div>
    </div>
  </footer>
</template>

<script>
import Navigation from '~/components/Navigation.vue'

export default {
  name: 'Footer',
  components: {
    Navigation
  }
}
</script>

<style lang="scss" scoped>
footer {
  background: rgba(0, 0, 0, 0.15);
  padding: 2rem;

  color: rgba(0, 0, 0, 0.6);
}

.footerInner {
  margin: 0 auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  align-items: center;

  .location {
    position: relative;

    .navContainer {
      position: relative;
      top: unset;
      left: unset;
      right: unset;
    }

    ul {
      display: block;

      li {
        display: block;
      }
    }
  }

  .resources {
    text-align: right;

    em {
      color: rgba(0, 0, 0, 0.2);
      font-size: 0.9rem;
    }
  }
}
</style>