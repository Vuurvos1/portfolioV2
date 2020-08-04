<template>
  <main>
    <h1>Contact page</h1>

    <form>
      <label for="fname">First name:</label><br />
      <input id="fname" type="text" name="fname" /><br />
      <label for="lname">Last name:</label><br />
      <input id="lname" type="text" name="lname" />
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
