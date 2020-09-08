<template>
  <header>
    <nav class="menu">
      <input id="toggleMenu" type="checkbox" tabindex="0" />
      <label class="menu__label" for="toggleMenu">
        Menu
        <svg viewBox="0 0 25 21">
          <rect x="0" y="0" width="25" height="3" />
          <rect x="0" y="9" width="25" height="3" />
          <rect x="0" y="18" width="25" height="3" />
        </svg>
      </label>
      <ul class="menu__list">
        <li class="menu__item">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="menu__item">
          <nuxt-link to="/projects">Projects</nuxt-link>
        </li>
        <li class="menu__item">
          <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
    <div id="swipeTrigger"></div>
  </header>
</template>

<style></style>

<script>
export default {
  head: {
    script: [
      {
        src: "/js/navSwipe.js",
        body: true,
        defer: true,
      },
    ],
  },
};
</script>
