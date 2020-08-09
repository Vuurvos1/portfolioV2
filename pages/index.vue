<template>
  <main>
    <section class="grid">
      <h1 class="width-3/10">
        Hey, I’m Sam. I’m a Front end Developer currently studying Communication
        and multimedia design in Amsterdam
      </h1>
    </section>

    <section class="grid">
      <h2 class="width-3/10 heading1">What do I do</h2>
      <p class="width-3/10 heading3">
        Apart from Front end development, I am also intrested things like game
        development, programming, and 3D modeling
      </p>
    </section>

    <section class="grid">
      <h2 class="width-1/12">Featured projects</h2>

      <ul class="grid width-1/12 grid--inner">
        <li
          v-for="article of articles"
          :key="article.slug"
          class="span-4 projects__item"
        >
          <NuxtLink
            :to="{ name: 'projects-slug', params: { slug: article.slug } }"
          >
            <img :src="article.img" />
            <div class="projects__text">
              <h2>{{ article.title }}</h2>
              <svg
                width="49"
                height="32"
                viewBox="0 0 49 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32.3182 0L48.1385 15.5691L32.3182 31.1382L30.2139 29L42.3373 17.0691H0V14.0691H42.3373L30.2139 2.13823L32.3182 0Z"
                />
              </svg>
            </div>
          </NuxtLink>
        </li>
      </ul>

      <a class="width-1/12" href="/projects">Explore more projects</a>
    </section>

    <section class="grid">
      <h2>Like what you see?</h2>

      <a href="/contact">Lets get in contact ></a>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .limit(3)
      .only(["title", "description", "img", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles,
    };
  },
  head() {
    return {
      title: "Portfolio | Sam",
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
          content: "Home page",
        },
      ],
    };
  },
};
</script>
