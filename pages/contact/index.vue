<template>
  <main>
    <h1>Contact page</h1>

    <form action="mailto:samdepanter@gmail.com?subject=Portfolio" method="post">
      <div class="textInput--container">
        <input
          id="firstname"
          type="text"
          name="firstname"
          placeholder="Your Name"
          required
        />
        <label for="firstname">Your Name</label>
      </div>

      <div class="textInput--container">
        <input
          id="emailadres"
          type="email"
          name="emailadres"
          placeholder="Your Email Adress"
          required
        />
        <label for="emailadres">Your Email Adress</label>
      </div>

      <div class="textInput--container textInput--large">
        <textarea
          id="message"
          name="message"
          placeholder="Leave a Message"
          required
        ></textarea>
        <label for="message">Leave a Message</label>
      </div>

      <button id="submitbutton" type="submit" class="button">
        Send Message
      </button>
    </form>
  </main>
</template>

<script>
export default {
  layout: "contactLayout",
  head() {
    return {
      title: "Contact Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Find some info about me to find me on different platforms, or contact me if you have any questions",
        },
        {
          hid: "ogtitle",
          property: "og:title",
          content: "Contact page",
        },
      ],
    };
  },
};
</script>
