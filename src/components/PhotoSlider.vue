<template>
  <section>
    <vueper-slides fade :touchable="false">
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
        :title="slide.title"
        :content="slide.content"
      />
    </vueper-slides>
  </section>
</template>

<script>
  import { VueperSlides, VueperSlide } from "vueperslides";
  import "vueperslides/dist/vueperslides.css";

  export default {
    name: "PhotoSlider",
    data() {
      return {
        slides: [
          {
            image: require("@/assets/kitchen-wallpaper-3-800x500.jpg"),
          },
          {
            image: require("@/assets/Kitchen-wallpaper-40-640x360.jpg"),
          },
          {
            image: require("@/assets/wallpapertip_furniture-wallpaper_1330196.jpg"),
          },
        ],
      };
    },

    components: { VueperSlides, VueperSlide },
  };
</script>

<style scoped></style>
