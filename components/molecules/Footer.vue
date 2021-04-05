<template>
  <footer>
    <p>
      <a href="https://github.com/vuurvos1">GitHub</a> /
      <a href="https://codepen.io/Vuurvos">Codepen</a> /
      <a href="https://www.linkedin.com/in/sam-de-kanter-b3020b1a0/"
        >LinkedIn</a
      >
      /
      <a href="https://cssbattle.dev/player/vuurvos">CSS Battle</a>
    </p>
    <p>&copy; 2021 - Sam de Kanter</p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  width: calc(100% - 3rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 0 1.5rem;
  padding: 1.125rem 0;
  border-top: 1px solid #d9d9d9;

  text-align: center;

  p {
    margin: 0;

    &:first-child {
      margin-bottom: 0.75rem;
    }
  }

  // tablet
  @media screen and (min-width: 48rem) {
    width: auto;
    max-width: calc(100vw / 8 * 6);
    flex-direction: row;

    margin: 0 auto;
    padding: 2rem 0;
  }

  // dekstop
  @media screen and (min-width: 64rem) {
    max-width: calc(100vw / 12 * 8);
  }
}
</style>
