<template>
  <div>
    <main>
      <IconLink :href="'pornhub.com'" icon="launch">sapjes</IconLink>

      <ScrollArrow />

      <InteractionSphere />
    </main>
  </div>
</template>

<script>
import IconLink from "~/components/atoms/IconLink.vue";
import ScrollArrow from "~/components/atoms/ScrollArrow.vue";
import InteractionSphere from "../../components/atoms/InteractionSphere.vue";

export default {
  components: { IconLink, ScrollArrow, InteractionSphere },
};
</script>
