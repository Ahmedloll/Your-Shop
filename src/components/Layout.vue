<template>
  <div>
    <Header></Header>
    <PhotoSlider></PhotoSlider>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from "./Footer";
  import Header from "./Header";
  import PhotoSlider from "./PhotoSlider";

  export default {
    name: "Layout",
    components: {
      Footer,
      Header,
      PhotoSlider,
    },
  };
</script>

<style scoped></style>
