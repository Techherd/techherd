<template>
  <div class="pageContainer">
    <section>
      <h2 class="title">Services</h2>
      <img src="~/assets/services-pic1.jpg" alt="our services" class="imageBanner" />
    </section>

    <section>
      <div class="largeCallout">
        <div>We can help.</div>
        <nuxt-link to="/contact" class="button">Contact Us</nuxt-link>
      </div>
    </section>

    <section>
      <div class="serviceBox">
        <img src="~/assets/networking-pic1.jpg" alt="networking" />
        <div class="text">
          <h2>Networks</h2>
          <p>High speed reliable networks can greatly improve your business. Advance productivity and reduced downtime with what we can offer.</p>

          <ul>
            <li>Fiber</li>
            <li>Wireless</li>
            <li>Security</li>
            <li>Backups</li>
          </ul>
        </div>
      </div>

      <div class="serviceBox">
        <img src="~/assets/websites-pic1.jpg" alt="websites" />
        <div class="text">
          <h2>Website Hosting / Web Design</h2>
          <p>We can help design, develop, and host your site so that it maximizes reachability, functionality, and security. All without you having to lift a finger.</p>

          <ul>
            <li>Hosting</li>
            <li>Design</li>
            <li>Development</li>
            <li>Security</li>
            <li>SEO</li>
            <li>Backups</li>
          </ul>
        </div>
      </div>

      <div class="serviceBox">
        <img src="~/assets/audio-pic1.jpg" alt="websites" />
        <div class="text">
          <h2>Audio</h2>
          <p>We have experience handling high fidelity audio experiences big and small.</p>

          <ul>
            <li>Acoustic Balancing</li>
            <li>Wireless and Wired</li>
            <li>Amplification</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Services',
  transition: 'fade'
}
</script>

<style lang="scss" scoped>
h2.title {
  font-family: 'Saira Semi Condensed';
  font-size: 2.2rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: 0.5px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
}

img {
  object-fit: cover;
  object-position: center center;
}

img.imageBanner {
  max-height: 250px;
  width: 100%;
  border-radius: 0.4rem;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
}

p {
  color: #2b2b2b;

  font-size: 1rem;
  margin-top: 1rem;
}

ul,
ol {
  margin-top: 1rem;
}

li {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #575757;
}

section {
  margin-bottom: 4rem;
}

.largeCallout {
  font-size: 2rem;
  text-align: center;
  font-weight: 100;
}

.serviceBox:nth-child(even) {
  grid-template-areas: 'txt txt txt pic pic';
}

.serviceBox {
  background: #fff;
  border-radius: 0.4rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-areas: 'pic pic txt txt txt';
  border-radius: 0.4rem;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  h2 {
    background: -webkit-linear-gradient(
      143deg,
      rgba(242, 46, 0, 1) 0%,
      rgba(219, 144, 9, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  img {
    grid-area: pic;
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
  }

  .text {
    grid-area: txt;
    padding: 4rem;
  }
}

input {
  width: 100%;
  font-size: 2rem;
  padding: 1rem;
  border-radius: 0.6rem;
  border: 1px solid rgb(33, 187, 244);
  transition: 0.3s;
}

textarea {
  width: 100%;
  min-height: 400px;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 0.6rem;
  border: 1px solid rgb(33, 187, 244);
  transition: 0.3s;
}

input:focus,
textarea:focus {
  outline: none;
  box-shadow: 0px 2px 14px rgba(33, 187, 244, 0.8);
}
</style>