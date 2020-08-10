<template>
  <div>
    <Header />
    <Nuxt />
    <FooterVar />

    <!-- <script src="/js/scrollpos.js"></script> -->
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import FooterVar from "~/components/FooterVar.vue";

export default {
  components: {
    Header,
    FooterVar,
  },
};
</script>
