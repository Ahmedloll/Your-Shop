<template>
  <div class="footer">
    <div class="flex sp-between direction-1">
      <div class="sitemap">
        <h3>Sitemap</h3>
        <div class="flex sp-between direction-2">
          <div>
            <ul>
              <li>About</li>
              <li>Culture</li>
              <li>Careers</li>
              <li>Latest News</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>My Orders</li>
              <li>My Account</li>
              <li>Track My Order</li>
              <li>Return Policy</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>FAQ</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h3>Follow us on</h3>
        <div>
          Mon - Fri: 8AM - 6PM<br />
          Sat: 9AM - 6PM<br />
          Sun: 9AM - 6PM
        </div>
        <ul class="flex">
          <li>
            <i class="fab fa-facebook-f"></i>
          </li>
          <li>
            <i class="fab fa-twitter"></i>
          </li>
          <li>
            <i class="fab fa-instagram"></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="copyrights flex sp-between direction-3">
      <div>&copy; 2021 Your Shop &reg; All Rights reserved.</div>
      <div>Developed By Ahmed Alaa</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer",
  };
</script>

<style scoped>
  .footer {
    padding: 15px 16.9270833% 15px;
    background-color: #3c1b44;
    color: white;
  }

  ul {
    list-style: none;
    padding: 0;
  }
  .sitemap ul {
    padding-right: 40px;
  }
  i {
    margin-right: 20px;
  }
  .copyrights {
    margin-top: 20px;
  }
  .copyrights div {
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 900px) {
    .direction-1 {
      flex-direction: column;
    }
  }
  @media only screen and (min-width: 900px) {
    .sitemap {
      width: 75%;
    }
  }
  @media only screen and (max-width: 715px) {
    .direction-3 {
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 610px) {
    .direction-2 {
      flex-direction: column;
    }
  }
</style>
