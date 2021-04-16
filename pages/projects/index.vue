<script>
import PostItem from "../../components/atoms/PostItem.vue";
export default {
  components: { PostItem },
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .only(["title", "description", "img", "slug"])
      .sortBy("createdAt", "asc")
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
    <h1 class="width-3/10 heading2">Projects</h1>

    <ul class="width-3/10 projects__grid">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="projects__item"
      >
        <PostItem :article="article" />
      </li>
    </ul>
  </main>
</template>

<style lang="scss" scoped>
.projects {
  margin-top: 3rem;
  margin-bottom: 3rem;

  &__grid {
    display: grid;
    grid-column-gap: 1.5rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto;

    @media screen and (min-width: 48rem) {
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    }
  }
}
</style>
