<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />

    <!-- <script src="/js/scrollpos.js"></script> -->
  </div>
</template>

<script>
import Header from "~/components/molecules/Header.vue";
import Footer from "~/components/molecules/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
