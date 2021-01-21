<template>
  <div>
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from "./Footer";
  import Header from "./Header";

  export default {
    name: "Layout",
    components: {
      Footer,
      Header,
    },
  };
</script>

<style scoped></style>
