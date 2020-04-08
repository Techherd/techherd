<template>
  <div class="navContainer">
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li v-for="menuitem in menuitems" :key="menuitem.id">
        <nuxt-link :to="'/' + menuitem.object_slug">
          {{
          menuitem.title
          }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="button" to="/contact">Contact</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  computed: {
    menuitems() {
      return this.$store.getters['getMenus/getMenu']
    }
  },
  created() {
    this.$store.dispatch('getMenus/fetchMenus')
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1000px) {
  div.navContainer {
    right: 3%;
  }
}

@media screen and (max-width: 600px) {
  .homeHeader div.navContainer {
    position: fixed;
    bottom: 0px;
    top: unset;
    left: 0px;
    right: 0px;
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    box-shadow: 0px -1px 16px rgba(0, 0, 0, 0.08);
    z-index: 20;

    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;

      li {
        a {
          color: #000;
        }
        a.button {
          color: #fff;
        }
      }
    }
  }
}

.navContainer {
  position: absolute;
  right: 15%;
  top: 2%;
  z-index: 5;
}

.navContainer ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0px;
  padding: 0px;
  font-size: 1.1rem;
  align-items: center;
}

.darkmode .navContainer ul li {
  a:link {
    color: #fff;
  }

  a:visited {
    color: #fff;
  }

  a:hover {
    border: 2px solid rgba(255, 255, 255, 0.8);
  }

  a.button:hover {
    border: none;
  }
}

.navContainer ul li {
  display: block;
  padding: 0.8rem;

  a:link {
    text-decoration: none;
    color: rgb(67, 67, 67);
    border-radius: 50rem;
    padding: 0.4rem;
    padding-left: 0.9rem;
    padding-right: 0.9rem;
    border: 2px solid rgba(255, 255, 255, 0);
    transition: 0.3s;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.18);
  }

  a:visited {
    text-decoration: none;
    color: rgb(67, 67, 67);
  }

  a:hover {
    border: 2px solid rgba(67, 67, 67, 0.8);
  }

  a.button {
    border: none;
    color: #fff;
  }
}

@media only screen and (max-width: 2000px) {
  .navContainer ul {
    li:nth-child(1) {
      a {
        color: #fff;
      }
      a:hover {
        border: 2px solid rgba(255, 255, 255, 0.8);
      }
    }
  }
}

@media only screen and (max-width: 1870px) {
  .navContainer ul {
    li:nth-child(1),
    li:nth-child(2) {
      a {
        color: #fff;
      }
      a:hover {
        border: 2px solid rgba(255, 255, 255, 0.8);
      }
    }
  }
}

@media only screen and (max-width: 1730px) {
  .navContainer ul {
    li:nth-child(1),
    li:nth-child(2),
    li:nth-child(3) {
      a {
        color: #fff;
      }
      a:hover {
        border: 2px solid rgba(255, 255, 255, 0.8);
      }
    }
  }
}
</style>
