<template>
  <div>
    <Header />
    <Nuxt />
    <FooterVar />
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
