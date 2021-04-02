<template>
  <div>
    <Header></Header>
    <main>
      <IconLink :href="'pornhub.com'" icon="launch">sapjes</IconLink>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import IconLink from "../../components/atoms/IconLink.vue";
import Footer from "../../components/molecules/Footer.vue";
import Header from "../../components/molecules/Header.vue";

export default {
  components: { IconLink, Footer, Header },
};
</script>
