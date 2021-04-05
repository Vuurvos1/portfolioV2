<template>
  <div>
    <main>
      <TicTacToe></TicTacToe>
      <IconLink :href="'pornhub.com'" icon="launch">sapjes</IconLink>
    </main>
  </div>
</template>

<script>
import IconLink from "~/components/atoms/IconLink.vue";
import TicTacToe from "~/components/global/molecules/TicTacToe.vue";

export default {
  components: { IconLink, TicTacToe },
};
</script>
