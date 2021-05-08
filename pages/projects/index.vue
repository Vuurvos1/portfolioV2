<script>
import PostItem from "../../components/atoms/PostItem.vue";

export default {
  components: { PostItem },
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .only(["title", "description", "img", "slug", "createdAt", "alt"])
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      articles,
    };
  },

  head() {
    return {
      title: "Projecten",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Hey, I’m Sam. I’m a Front end Developer currently studying Communication and multimedia design in Amsterdam. Apart from Front end development, I am also intrested things like game development, programming, and 3D modeling",
        },
        {
          hid: "ogtitle",
          property: "og:title",
          content: "Project page",
        },
      ],
    };
  },
};
</script>

<template>
  <main class="grid projects">
    <h1 class="width-3/10 heading3 titleSide">Projects</h1>

    <ul class="width-3/10 projects__grid">
      <li
        v-for="(article, index) of articles"
        :key="article.slug"
        class="projects__item aspect-1"
      >
        <PostItem :article="article" :loadlazy="index >= 6" />
      </li>
    </ul>
  </main>
</template>

<style lang="scss">
@import "~assets/scss/mixins";

.projects {
  margin-top: 3rem;
  margin-bottom: 3rem;

  .titleSide {
    grid-column: span 2;

    @media screen and (min-width: 48rem) {
      grid-column: 1;
      writing-mode: vertical-rl;
      text-orientation: mixed;
    }

    @media screen and (min-width: 64rem) {
      grid-column: 2;
    }
  }

  &__grid {
    display: grid;
    column-gap: 1.5rem;
    row-gap: 1.5rem;
    grid-template-columns: 1fr;

    @media screen and (min-width: 48rem) {
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
      grid-auto-rows: min-content;
    }
  }

  &__item {
    // move this css to PostItem?
    overflow: hidden;
  }
}
</style>
