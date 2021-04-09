<template>
  <main class="projects">
    <TextInput :type="'textarea'"></TextInput>

    <section class="header">
      <h1>Projects</h1>

      <!-- <svg
        width="54"
        height="37"
        viewBox="0 0 54 37"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.707107 8.79289L8.79289 0.707107C9.18342 0.316582 9.81658 0.316583 10.2071 0.707107L26.2929 16.7929C26.6834 17.1834 27.3166 17.1834 27.7071 16.7929L43.7929 0.707107C44.1834 0.316582 44.8166 0.316583 45.2071 0.707107L53.2929 8.79289C53.6834 9.18342 53.6834 9.81658 53.2929 10.2071L27.7071 35.7929C27.3166 36.1834 26.6834 36.1834 26.2929 35.7929L0.707107 10.2071C0.316583 9.81658 0.316583 9.18342 0.707107 8.79289Z"
        />
      </svg> -->
    </section>
    <ul class="grid projects--grid">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="span-4 projects__item"
      >
        <PostItem :article="article"></PostItem>
      </li>
    </ul>
  </main>
</template>

<script>
import PostItem from "../../components/atoms/PostItem.vue";
import TextInput from "../../components/atoms/TextInput.vue";
export default {
  components: { PostItem, TextInput },
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
