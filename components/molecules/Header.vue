<template>
  <header>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  background: #161b22;
  color: var(--white);
}

nav ul {
  display: flex;
  flex-direction: row;

  padding: 1rem 2rem;

  li {
    margin-left: 2.5rem;
  }
}
</style>
