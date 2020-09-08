<template>
  <section class="partyPickle">
    <div class="positionMove">
      <div class="moveSpace">
        <img
          class="pickle grabNone selectNone"
          src="/img/partyPickle/pickle.png"
          alt="Augurk"
        />
      </div>
    </div>
    <div class="pickleSaus"></div>

    <div class="deksel"></div>
    <img
      class="jar grabNone selectNone"
      src="/img/partyPickle/jar.png"
      alt="Augurken pot"
    />

    <div class="eten"></div>
    <div class="eten"></div>
    <div class="eten"></div>
    <div class="eten"></div>
    <div class="eten"></div>

    <div class="knoppen">
      <div id="drink" class="button selectNone">
        Give Juice
      </div>
      <div id="eten" class="button selectNone">
        Give Food
      </div>
    </div>
  </section>
</template>

<style></style>

<script>
export default {
  head: {
    script: [
      {
        src: "/js/partyPickle.js",
        body: true,
        defer: true,
      },
    ],
  },
};
</script>
