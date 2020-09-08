<template>
  <section class="ticTacToe">
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

    <p class="winner heading5">.</p>

    <div class="restart">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M480.6 235.6c-11.3 0-20.4 9.1-20.4 20.4 0 112.6-91.6 204.2-204.2 204.2S51.8 368.6 51.8 256 143.4 51.8 256 51.8c61.5 0 118.5 27.1 157.1 73.7h-70.5c-11.3 0-20.4 9.1-20.4 20.4s9.1 20.4 20.4 20.4h114.6c11.3 0 20.4-9.1 20.4-20.4V31.4c0-11.3-9.1-20.4-20.4-20.4s-20.4 9.1-20.4 20.4v59C390.7 40.1 325.8 11 256 11 120.9 11 11 120.9 11 256s109.9 245 245 245 245-109.9 245-245c0-11.3-9.1-20.4-20.4-20.4z"
        />
      </svg>
    </div>

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
  </section>
</template>

<style></style>

<script>
export default {
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
