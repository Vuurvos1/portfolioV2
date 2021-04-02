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

<style scoped lang="scss">
footer {
  background: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  max-width: calc(100vw / 12 * 6);
  margin: 0 auto;
  padding: 2rem 0;
  border-top: 1px solid #d9d9d9;

  p {
    padding: 0;
  }
}
</style>
