<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();
    return { article };
  },

  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
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
          content: `http://schelpkikker.nl/projects/${this.article.link}`,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `http://schelpkikker.nl${this.article.img}`,
        },
        {
          hid: "keywords",
          property: "keywords",
          content: this.article.keywords ? this.article.keywords : "",
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
