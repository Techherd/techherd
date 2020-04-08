<template>
  <div class="pageContainer">
    <h2 class="title">Contact</h2>
    <p>Get in touch with us if you have questions or are interested in hiring us.</p>
    <form name="contact" netlify>
      <p>
        <label>
          Name
          <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
      </p>

      <p>
        <label>
          Questions
          <textarea name="question" required></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  transition: 'fade'
}
</script>

<style scoped>
h2.title {
  font-family: 'Saira Semi Condensed';
  font-size: 2.2rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: 0.5px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
}

p {
  color: #fff;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  font-size: 1.2rem;
  margin-top: 1rem;
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