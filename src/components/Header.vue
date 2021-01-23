<template>
  <header>
    <nav class="flex sp-between">
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
          <li class="menu-bar pointer dropdown">
            <i class="fas fa-bars"></i>
            <div class=" dropdown-content">
              <ul>
                <li>About Us</li>
                <li>Categories</li>
                <li>Culture</li>
                <li>Latest News</li>
                <li>Careers</li>
                <li>Contact us</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return { isActive: true };
    },
  };
</script>

<style scoped>
  header {
    padding: 0 16.9270833%;
    line-height: 70px;
  }
  h1 {
    margin: 0;
    font-size: 2em;
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

  .dropdown-content {
    display: none;
    position: absolute;
    right: 16.9270833%;
    background-color: #f9f9f9;
    min-width: 120px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  .dropdown:hover .dropdown-content {
    display: block;
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
  @media only screen and (max-width: 460px) {
    h1 {
      font-size: 1.5em;
    }
    i {
      font-size: 1em;
    }
  }
  @media only screen and (max-width: 373px) {
    h1 {
      font-size: 1em;
    }
    i {
      font-size: 0.75em;
    }
  }
</style>
