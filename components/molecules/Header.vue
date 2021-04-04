<template>
  <header>
    <nav class="menu">
      <input id="toggleMenu" type="checkbox" />
      <label for="toggleMenu">
        Menu
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </label>

      <ul class="menu__list">
        <li class="menu__item"><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/projects">Projects</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  background: #161b22;
  --text-col: var(--white);
}

.menu {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  label {
    z-index: 10;

    display: flex;
    align-items: center;

    padding: 1rem 2rem;
    cursor: pointer;

    font-size: 1.125rem;
    color: var(--text-col);

    svg {
      fill: var(--white);
      margin-left: 1rem;
    }
  }

  input {
    width: 0;
    height: 0;
    display: none;

    &:checked {
      ~ .menu__list {
        transform: translateX(0);
      }

      ~ label svg {
        background-color: hotpink;
      }
    }
  }

  &__list {
    position: absolute;
    z-index: 5;

    top: 0;
    right: 0;
    height: 100vh;
    width: 80vw;
    max-width: 45.75rem;
    display: flex;
    flex-direction: column;

    transition: all 0.3s ease-out;
    transform: translateX(100%);

    background-color: #161b22;
  }

  @media screen and (min-width: 48rem) {
    label {
      display: none;
    }

    &__list {
      flex-direction: row;
      position: initial;
      height: initial;
      width: initial;
      transform: translateX(0);

      padding: 1rem 2rem;

      li {
        margin: 0 0 0 2.5rem;
      }
    }
  }
}

// desktop
@media screen and (min-width: 64rem) {
}
</style>
