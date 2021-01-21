<template>
  <header class="flex sp-between">
    <h1><i class="fas fa-store-alt"></i> Your Shop</h1>
    <div>
      <ul class="flex menu">
        <li>About Us</li>
        <li>Categories</li>
        <li>Culture</li>
        <li>Latest News</li>
        <li>Careers</li>
        <li>Contact us</li>
      </ul>
    </div>
    <div>
      <ul class="flex">
        <li><i class="fas fa-user"></i><span> Sign in</span></li>
        <li><i class="far fa-heart"></i><span> Wish lists</span></li>
        <li><i class="fas fa-shopping-cart"></i><span> Cart</span></li>
        <li class="menu-bar"><i class="fas fa-bars"></i></li>
      </ul>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
  };
</script>

<style scoped>
  header {
    padding: 0 16.9270833%;
    line-height: 70px;
  }
  h1 {
    margin: 0;
  }
  h1 i {
    color: #3c1b44;
  }
  ul {
    margin: 0;
  }

  li {
    margin-left: 10px;
  }

  @media only screen and (min-width: 1350px) {
    .menu-bar {
      display: none;
    }
  }
  @media only screen and (max-width: 1350px) {
    .menu {
      display: none;
    }
  }
  @media only screen and (max-width: 700px) {
    span {
      display: none;
    }
  }
</style>
