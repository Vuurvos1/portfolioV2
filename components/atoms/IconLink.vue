<script>
export default {
  props: {
    href: {
      type: String,
      default: "/",
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <a :href="href">
    <img :src="`./icons/${icon}.svg?inline`" />
    <slot>Link</slot>
  </a>
</template>

<style lang="scss" scoped>
a {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.25rem 1rem 0.25rem 0.75rem;
  font-size: 0.875rem;
  background: #6200ee;
  border-radius: 0.25rem;
  color: #fff;

  img {
    margin-right: 0.5rem;
    height: 1.125rem;
    width: auto;
    filter: invert(1);
  }
}
</style>
