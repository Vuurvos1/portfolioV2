<template>
  <footer class="grid">
    <div class="width-3/10">
      <p class="body2">
        <a class="lineHover" target="social" href="https://github.com/vuurvos1"
          >GitHub</a
        >
        /
        <a class="lineHover" target="social" href="https://codepen.io/Vuurvos"
          >Codepen</a
        >
        /
        <a
          class="lineHover"
          target="social"
          href="https://www.linkedin.com/in/sam-de-kanter-b3020b1a0/"
          >LinkedIn</a
        >
        /
        <a
          class="lineHover"
          target="social"
          href="https://cssbattle.dev/player/vuurvos"
          >CSS Battle</a
        >
      </p>
      <p class="body2">&copy; 2021 - Sam de Kanter</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 1.125rem 0;
    border-top: 1px solid #d9d9d9;

    text-align: center;

    p {
      margin: 0;

      &:first-child {
        margin-bottom: 0.75rem;
      }

      a {
        display: inline-flex;
      }
    }

    // tablet
    @media screen and (min-width: 48rem) {
      flex-direction: row;
      padding: 2rem 0;
    }

    // dekstop
    @media screen and (min-width: 64rem) {
    }
  }
}
</style>
