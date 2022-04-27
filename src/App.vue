<script setup>
import MainHeader from "./components/MainHeader.vue";
import SectionAbout from "./components/SectionAbout.vue";
import SectionHero from "./components/SectionHero.vue";
import SectionStory from "./components/SectionStory.vue";
import TheBreadcrumbs from "./components/TheBreadcrumbs.vue";
</script>

<template>
  <img src="./assets/img/icons/stack.svg#logo" width="35" height="18" alt="" />
  <main-header />
  <the-breadcrumbs />
  <main>
    <section-hero />
    <section-story />
    <section-about />
  </main>
</template>

<style lang="scss">
// ?600
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;600;700&display=swap");
@use "./assets/reset.scss";
:root {
  --regular: 400;
  --semibold: 600;
  --bold: 700;
  --lh_normal: 150%;
  --lh_big: 160%;
  --small: 1rem; // 16
  --normal: 1.125rem; // 18
  --midi: 1.25rem; // 20
  --large: 1.375rem; // 22
  --xl: 1.5rem; // 24
  --2xl: 1.625rem; // 26
  --bg: hsl(0, 0%, 98%);
  --text: 310, 32%, 15%;
  --text_opacity: hsla(--text, 0.8);
  --accent_hue: 300;
  --accent_saturation: 57%;
  --accent_lightness: 56%;
  --accent: hsl(
    var(--accent_hue),
    var(--accent_saturation),
    var(--accent_lightness)
  );
  --gradient: linear-gradient(
    264.91deg,
    hsl(
        calc(var(--accent_hue) - 30),
        calc(var(--accent_saturation) - 20%),
        calc(var(--accent_lightness) - 7%)
      )
      0.73%,
    hsl(
        calc(var(--accent_hue) + 4),
        calc(var(--accent_saturation) + 10%),
        calc(var(--accent_lightness) + 3%)
      )
      95.85%
  );
  --box-shadow: 0px 4px 25px
    hsla(
      calc(var(--accent_hue) + 20),
      calc(var(--accent_saturation) + 20%),
      calc(var(--accent_lightness) - 12%),
      0.25
    );
  --border: 0.78px solid hsla(var(--text), 0.5);
  --breadcrumb: hsla(var(--text), 0.5);
}
</style>
