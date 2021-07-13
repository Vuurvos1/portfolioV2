<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("cv", "cv").fetch();
    return { article };
  },

  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "CV",
        },
        {
          hid: "ogtitle",
          property: "og:title",
          content: this.article.title,
        },
        {
          hid: "ogdescription ",
          property: "og:description ",
          content: this.article.title,
        },
        {
          hid: "ogurl",
          property: "og:url",
          content: `http://schelpkikker.nl/cv`,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `http://schelpkikker.nl/logo.png`,
        },
        {
          hid: "keywords",
          property: "keywords",
          content: this.article.keywords ? this.article.keywords : "",
        },
        {
          hid: "robots",
          name: "robots",
          content: "index, follow",
        },
        {
          hid: "googlebot",
          name: "googlebot",
          content: "index, follow",
        },
      ],
    };
  },
};
</script>

<template>
  <main class="projectDesc grid">
    <article class="width-4/9 article">
      <nuxt-content :document="article" />
    </article>
  </main>
</template>

<style lang="scss" scoped>
article {
  margin-top: 6ch;
}

p {
  font-size: 1rem;
}

a {
  text-decoration: underline;
}

li {
  font-size: 1rem;
  margin-bottom: 2ch;
}
</style>
