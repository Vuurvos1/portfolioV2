<script>
import TextButton from "~/components/atoms/TextButton.vue";
export default {
  components: { TextButton },
  head: {
    script: [
      {
        src: "/js/ticTacToe.js",
        body: true,
        defer: true,
      },
    ],
  },
};
</script>

<template>
  <section class="ticTacToe">
    <p class="winner heading3">Winner:</p>
    <div class="ticTacToe__Grid">
      <div class="row">
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
      </div>
    </div>

    <TextButton class="restart">Restart game</TextButton>

    <div class="sliderContainer">
      <p>makkelijk</p>
      <input
        id="slider"
        class="slider"
        type="range"
        min="0"
        max="1"
        value="0.5"
        step="0.01"
      />
      <p>moeilijk</p>
    </div>
    <p class="sliderVal">50</p>

    <script src="/js/ticTacToe.js" defer></script>
  </section>
</template>

<style lang="scss" scoped>
.ticTacToe {
  width: 100vw;

  margin-top: 3rem;
  margin-bottom: 2.4rem;
  margin-left: -1.5rem;

  padding: 2.4rem 1.5rem;
  background-color: var(--col-secondary);

  &__Grid {
    margin: 0 auto 2rem auto;

    display: grid;
    grid-template-rows: repeat(3, 1fr);

    width: 85vw;
    max-width: 25rem;
    height: 85vw;
    max-height: 25rem;

    div {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  button {
    margin: 0 auto 1rem auto;
  }

  .row div {
    display: flex;

    justify-content: center;
    align-items: center;

    border-color: rgba(0, 0, 0, 0.4);
    border-width: 4px;
    border-style: solid;

    font-size: 3rem;
    font-weight: 400;
  }

  // remove unnecessary grid lines
  .row:nth-child(1) div {
    border-top: 0;
  }

  .row:nth-child(3) div {
    border-bottom: 0;
  }

  .row div:first-child {
    border-left: 0;
  }

  .row div:last-child {
    border-right: 0;
  }

  .col:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .sliderContainer {
    margin: 0 auto 0.4rem auto;
    max-width: fit-content;

    display: flex;
    flex-direction: row;
    align-items: baseline;

    #slider {
      margin: 0 1rem;
    }

    p {
      margin-bottom: 0;
    }
  }

  .sliderVal {
    text-align: center;
  }

  @media screen and (min-width: 48rem) {
    width: auto;
    margin-left: 0;
  }
}
</style>
