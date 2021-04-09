<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<template>
  <NuxtLink :to="{ name: 'projects-slug', params: { slug: article.slug } }">
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

    <div>
      <img src="" alt="" />
      <h3>{{ title }}</h3>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped></style>
