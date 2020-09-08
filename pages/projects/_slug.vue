<template>
  <main v-if="article.title === 'Party Pickle'" class="col-2 footer--var">
    <PartyPickle />

    <section class="col-2-content">
      <nuxt-content :document="article" />
    </section>
  </main>
  <main v-else-if="article.title === 'Tic Tac Toe'" class="col-2 footer--var">
    <TicTacToe />

    <section class="col-2-content">
      <nuxt-content :document="article" />
    </section>
  </main>
  <div v-else-if="article.title === 'C'">
    C
  </div>
  <main v-else class="projectDesc">
    <article>
      <nuxt-content :document="article" />
    </article>
  </main>
</template>

<script>
import PartyPickle from "~/components/PartyPickle.vue";
import TicTacToe from "~/components/TicTacToe.vue";

export default {
  components: {
    PartyPickle,
    TicTacToe,
  },
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
