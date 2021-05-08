<script>
export default {
  setup() {},
  methods: {
    closeMenu: function () {
      document.querySelector("#toggleMenu").checked = false;
    },
  },
};
</script>

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
          <rect class="line" x="3" y="6" width="18" height="2" />
          <rect class="line" x="3" y="11" width="18" height="2" />
          <rect class="line" x="3" y="16" width="18" height="2" />
        </svg>
      </label>

      <ul class="menu__list">
        <li @click="closeMenu"><nuxt-link to="/">Home</nuxt-link></li>
        <li @click="closeMenu">
          <nuxt-link to="/projects">Projects</nuxt-link>
        </li>
        <li @click="closeMenu"><nuxt-link to="/contact">Contact</nuxt-link></li>
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
      transition: all 0.3s ease;

      .line {
        transition: all 0.3s ease;
      }
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
        .line:nth-of-type(1) {
          transform-origin: 0 0;
          transform: rotate(45deg) translate(5px, -7px);
        }
        .line:nth-of-type(2) {
          opacity: 0;
          transform-origin: 50%;
        }
        .line:nth-of-type(3) {
          transform-origin: 0 0;
          transform: rotate(-45deg) translate(-12px, 0px);
        }
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
    max-width: 26rem;
    display: flex;
    flex-direction: column;

    transition: all 0.3s ease-out;
    transform: translateX(100%);

    background-color: #161b22;

    li {
      margin-bottom: 2.625rem;
      text-align: center;

      &:first-child {
        margin-top: 6.25rem;
      }
    }

    // li:nth-child(1)::before {
    //   content: "\01F3E0";
    // }

    // li:nth-child(2)::before {
    //   content: "\01F4A1";
    // }

    // li:nth-child(3)::before {
    //   content: "\02709";
    // }
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

        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
}
</style>
