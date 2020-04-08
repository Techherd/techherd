<template>
  <div>
    <div class="pageContainer">
      <div class="whyUs">
        <h2>Why Us?</h2>
        <p>We offer service across the technology spectrum and we work with you to meet your needs. Plus, we are local to the Wisconsin area. What more could you ask for?</p>
      </div>

      <div class="techherdHighlights">
        <div class="highlightItem">
          <div class="icon">
            <DesignIcon />
          </div>
          <h3>Design</h3>
          <p>Business Stationary, Logos and Website Design</p>
        </div>

        <div class="highlightItem">
          <div class="icon">
            <DevelopmentIcon />
          </div>
          <h3>Web Development</h3>
          <p>Custom website development</p>
        </div>

        <div class="highlightItem">
          <div class="icon">
            <HostingIcon />
          </div>
          <h3>Web Hosting</h3>
          <p>As a leader in Wisconsin website hosting, we offer affordable web hosting, shared hosting, cloud hosting, virtual/dedicated servers.</p>
        </div>

        <div class="highlightItem">
          <div class="icon">
            <SpeakerIcon />
          </div>
          <h3>Audio/Visual</h3>
          <p>TechHerd is a leading provider of Commercial Audio, TV and Projector installations in Wisconsin.</p>
        </div>

        <div class="highlightItem">
          <div class="icon">
            <ECommIcon />
          </div>
          <h3>eCommerce</h3>
          <p>Using the most powerful and flexible platforms on the market, our skilled technicians can provide the best shopping experience for your customers.</p>
        </div>

        <div class="highlightItem">
          <div class="icon">
            <NetworkIcon />
          </div>
          <h3>Network Solutions</h3>
          <p>Tech Herd provides hi-performance scalable cable and wireless network solutions for data and voice systems.</p>
        </div>

        <div class="highlightItem">
          <div class="icon">
            <SupportIcon />
          </div>
          <h3>Tech Support</h3>
          <p>Technical support for Microsoft and Linux workstations and Servers</p>
        </div>

        <div class="highlightItem">
          <div class="icon">
            <VideoIcon />
          </div>
          <h3>Video Surveillance</h3>
          <p>Next generation Video surveillance management systems with Hybrid Cloud Technology: secure, local storage and convenient remote access with streaming privacy.</p>
        </div>
      </div>
      <div v-html="page.content.rendered"></div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SpeakerIcon from '~/components/icons/SpeakerIcon.vue'
import ECommIcon from '~/components/icons/ECommIcon.vue'
import DesignIcon from '~/components/icons/DesignIcon.vue'
import NetworkIcon from '~/components/icons/NetworkIcon.vue'
import HostingIcon from '~/components/icons/HostingIcon.vue'
import DevelopmentIcon from '~/components/icons/DevelopmentIcon.vue'
import SupportIcon from '~/components/icons/SupportIcon.vue'
import VideoIcon from '~/components/icons/VideoIcon.vue'

export default {
  transition: 'fade',
  components: {
    Logo,
    SpeakerIcon,
    ECommIcon,
    DesignIcon,
    NetworkIcon,
    HostingIcon,
    DevelopmentIcon,
    SupportIcon,
    VideoIcon
  },
  computed: {
    page() {
      return this.$store.getters['getpages/getFrontPage']
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('getpages/fetchFrontPage')
    await store.dispatch('getposts/fetchPosts')
    await store.dispatch('getpages/fetchPages')
    await store.dispatch('getMenus/fetchMenus')
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.whyUs {
  margin-bottom: 2rem;
  text-align: right;
  max-width: 70ch;
  float: right;
  padding: 2rem;

  h2 {
    font-size: 1.6rem;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    font-family: 'Saira Semi Condensed';
  }

  p {
    color: #606060;
    font-size: 0.95rem;
    line-height: 1.5;
  }
}

.darkmode .whyUs,
.darkmode .techherdHighlights .highlightItem {
  h2,
  h3 {
    color: #fff;
  }

  p {
    color: rgb(164, 164, 164);
  }
}

.techherdHighlights {
  clear: both;
  text-align: right;

  display: grid;
  grid-column-gap: 2rem;
  align-items: start;
  justify-items: right;

  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  .highlightItem {
    padding: 2rem;

    h3 {
      margin-bottom: 0.5rem;
    }

    p {
      color: #606060;
      font-size: 0.9rem;
      line-height: 1.5;
    }

    svg {
      width: 40px;
      height: 40px;
      margin-bottom: 0.4rem;
    }
  }

  .highlightItem:nth-child(1) {
    svg {
      path {
        fill: rgb(63, 129, 227);
      }
    }
  }

  .highlightItem:nth-child(2) {
    svg {
      path {
        fill: rgb(174, 220, 67);
      }
    }
  }

  .highlightItem:nth-child(3) {
    svg {
      path {
        fill: rgb(228, 170, 45);
      }
    }
  }

  .highlightItem:nth-child(4) {
    svg {
      path {
        fill: rgb(255, 47, 0);
      }
    }
  }

  .highlightItem:nth-child(5) {
    svg {
      path,
      rect {
        fill: rgb(191, 0, 255);
      }
    }
  }

  .highlightItem:nth-child(6) {
    svg {
      path {
        fill: rgb(98, 0, 255);
      }
    }
  }

  .highlightItem:nth-child(7) {
    svg {
      path {
        fill: rgb(0, 187, 255);
      }
    }
  }

  .highlightItem:nth-child(8) {
    svg {
      path {
        fill: rgb(0, 255, 187);
      }
    }
  }

  .highlightItem:nth-child(9) {
    svg {
      path {
        fill: rgb(242, 255, 0);
      }
    }
  }
}
</style>
