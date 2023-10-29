<template>
  <footer class="d-flex flex-column">
    <div class="container-fluid d-flex foot justify-content-between">
      <div class="mx-4 mb-3">
        <a href="/#">
          <img src="images/nav-logo.svg" class="mb-3" alt="" />
        </a>
        <div v-if="!isTablet">
          <p>Copyright © 2023</p>
          <p>Wrytopia | All Rights Reserved</p>
        </div>
      </div>
      <div class="mx-4 mb-3">
        <h5>GET IN TOUCH</h5>
        <a
          href="mailto: team.wrytopia@gmail.com"
          target="_blank"
          class="link-underline link-underline-opacity-0"
        >
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                d="M19.1883 6.44971V14.783C19.1883 15.3356 18.9688 15.8655 18.5781 16.2562C18.1874 16.6469 17.6575 16.8664 17.1049 16.8664H4.60494C4.05241 16.8664 3.5225 16.6469 3.1318 16.2562C2.7411 15.8655 2.52161 15.3356 2.52161 14.783V6.44971"
                stroke="#63727e"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.1883 6.44954C19.1883 5.89701 18.9688 5.36711 18.5781 4.97641C18.1874 4.5857 17.6575 4.36621 17.1049 4.36621H4.60494C4.05241 4.36621 3.5225 4.5857 3.1318 4.97641C2.7411 5.36711 2.52161 5.89701 2.52161 6.44954L9.75077 10.9634C10.0819 11.1704 10.4645 11.2801 10.8549 11.2801C11.2454 11.2801 11.628 11.1704 11.9591 10.9634L19.1883 6.44954Z"
                stroke="#63727e"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg></span
          >team.wrytopia@gmail.com
        </a>
        <a
          href="https://www.google.com/maps/place/Cebu+City,+6000+Cebu/@10.37906,123.6811369,11z/data=!3m1!4b1!4m6!3m5!1s0x33a999258dcd2dfd:0x4c34030cdbd33507!8m2!3d10.3156992!4d123.8854366!16zL20vMDFwX2x5?entry=ttu"
          class="link-underline link-underline-opacity-0"
        >
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                d="M17.7158 9.45606C17.7158 14.8349 12.2066 18.1486 11.0617 18.7798C10.9983 18.8148 10.927 18.8332 10.8546 18.8332C10.7822 18.8332 10.7109 18.8148 10.6475 18.7798C9.50174 18.1486 3.99426 14.8349 3.99426 9.45606C3.99426 5.16809 6.56705 2.1665 10.855 2.1665C15.143 2.1665 17.7158 5.16809 17.7158 9.45606Z"
                stroke="#63727e"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.42468 9.02706C7.42468 9.93685 7.7861 10.8094 8.42942 11.4527C9.07274 12.096 9.94527 12.4574 10.8551 12.4574C11.7649 12.4574 12.6374 12.096 13.2807 11.4527C13.924 10.8094 14.2854 9.93685 14.2854 9.02706C14.2854 8.11727 13.924 7.24474 13.2807 6.60141C12.6374 5.95809 11.7649 5.59668 10.8551 5.59668C9.94527 5.59668 9.07274 5.95809 8.42942 6.60141C7.7861 7.24474 7.42468 8.11727 7.42468 9.02706V9.02706Z"
                stroke="#63727e"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg></span
          >Cebu City, Philippines 6000
        </a>
      </div>
      <div class="mx-4 mb-3">
        <h5>LEGAL POLICIES</h5>
        <a
          href="/terms-and-conditions"
          class="link-underline link-underline-opacity-0"
          >Terms & Conditions</a
        >
        <a
          href="/privacy-policy"
          class="link-underline link-underline-opacity-0"
          >Privacy Policy</a
        >
        <a href="/refund-policy" class="link-underline link-underline-opacity-0"
          >Refund Policy</a
        >
      </div>
      <div class="mx-4" v-if="!isTablet">
        <h5>FOLLOW US</h5>
        <a
          href="https://www.facebook.com/wrytopia"
          target="_blank"
          class="link-underline link-underline-opacity-0"
          ><span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <rect
                width="24"
                height="24"
                transform="translate(0.85495 0.5)"
                fill="white"
              />
              <rect
                x="0.85495"
                y="0.5"
                width="24"
                height="24"
                rx="5"
                fill="#F2F1FA"
              />
              <path
                d="M13.8309 18.5V13.0262H15.7606L16.0496 10.893H13.8308V9.53102C13.8308 8.9134 14.0109 8.49252 14.9412 8.49252L16.1277 8.49199V6.58405C15.9225 6.5581 15.2181 6.5 14.3988 6.5C12.6881 6.5 11.517 7.49412 11.517 9.31982V10.893H9.58221V13.0262H11.517V18.4999L13.8309 18.5Z"
                fill="#63727e"
              /></svg></span
          >Facebook</a
        >
        <!-- <a href="#" class="link-underline link-underline-opacity-0"
            ><span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <rect
                  x="0.85495"
                  y="0.5"
                  width="24"
                  height="24"
                  rx="5"
                  fill="#F2F1FA"
                />
                <path
                  d="M6.85495 8.11321C6.85495 7.7284 6.99009 7.41094 7.26036 7.16082C7.53062 6.9107 7.88198 6.78564 8.31441 6.78564C8.73912 6.78564 9.08275 6.90877 9.3453 7.15505C9.61556 7.40902 9.7507 7.73994 9.7507 8.14784C9.7507 8.51725 9.61943 8.82508 9.35688 9.07136C9.08661 9.32533 8.7314 9.45231 8.29124 9.45231H8.27966C7.85495 9.45231 7.51132 9.32533 7.24877 9.07136C6.98622 8.81739 6.85495 8.498 6.85495 8.11321ZM7.00553 18.2142V10.5028H9.57696V18.2142H7.00553ZM11.0017 18.2142H13.5731V13.9083C13.5731 13.6389 13.604 13.4311 13.6658 13.2849C13.7739 13.0233 13.938 12.802 14.158 12.6211C14.3781 12.4403 14.6542 12.3499 14.9862 12.3499C15.8511 12.3499 16.2835 12.9309 16.2835 14.093V18.2142H18.8549V13.7929C18.8549 12.6538 18.5847 11.79 18.0441 11.2012C17.5036 10.6125 16.7893 10.3181 15.9013 10.3181C14.9051 10.3181 14.1291 10.7452 13.5731 11.5995V11.6226H13.5615L13.5731 11.5995V10.5028H11.0017C11.0171 10.7491 11.0248 11.5148 11.0248 12.8001C11.0248 14.0853 11.0171 15.89 11.0017 18.2142Z"
                  fill="#63727e"
                /></svg></span
            >LinkedIn</a
          > -->
        <!-- <a href="#" class="link-underline link-underline-opacity-0"
            ><span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <rect
                  width="24"
                  height="24"
                  transform="translate(0.85495 0.5)"
                  fill="white"
                />
                <rect
                  x="0.85495"
                  y="0.5"
                  width="24"
                  height="24"
                  rx="5"
                  fill="#F2F1FA"
                />
                <path
                  d="M13.8309 18.5V13.0262H15.7606L16.0496 10.893H13.8308V9.53102C13.8308 8.9134 14.0109 8.49252 14.9412 8.49252L16.1277 8.49199V6.58405C15.9225 6.5581 15.2181 6.5 14.3988 6.5C12.6881 6.5 11.517 7.49412 11.517 9.31982V10.893H9.58221V13.0262H11.517V18.4999L13.8309 18.5Z"
                  fill="#63727e"
                /></svg></span
            >Medium</a
          > -->
      </div>
      <div v-if="isTablet" class="text-center mb-3" id="icons">
        <!-- facebook -->
        <a
          href="https://www.facebook.com/wrytopia"
          target="_blank"
          class="text-decoration-none"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <rect
              width="24"
              height="24"
              transform="translate(0.85495 0.5)"
              fill="white"
            />
            <rect
              x="0.85495"
              y="0.5"
              width="24"
              height="24"
              rx="5"
              fill="#F2F1FA"
            />
            <path
              d="M13.8309 18.5V13.0262H15.7606L16.0496 10.893H13.8308V9.53102C13.8308 8.9134 14.0109 8.49252 14.9412 8.49252L16.1277 8.49199V6.58405C15.9225 6.5581 15.2181 6.5 14.3988 6.5C12.6881 6.5 11.517 7.49412 11.517 9.31982V10.893H9.58221V13.0262H11.517V18.4999L13.8309 18.5Z"
              fill="#63727e"
            /></svg
        ></a>

        <!-- linkedin -->
        <a href="#" class="text-decoration-none"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <rect
              x="0.85495"
              y="0.5"
              width="24"
              height="24"
              rx="5"
              fill="#F2F1FA"
            />
            <path
              d="M6.85495 8.11321C6.85495 7.7284 6.99009 7.41094 7.26036 7.16082C7.53062 6.9107 7.88198 6.78564 8.31441 6.78564C8.73912 6.78564 9.08275 6.90877 9.3453 7.15505C9.61556 7.40902 9.7507 7.73994 9.7507 8.14784C9.7507 8.51725 9.61943 8.82508 9.35688 9.07136C9.08661 9.32533 8.7314 9.45231 8.29124 9.45231H8.27966C7.85495 9.45231 7.51132 9.32533 7.24877 9.07136C6.98622 8.81739 6.85495 8.498 6.85495 8.11321ZM7.00553 18.2142V10.5028H9.57696V18.2142H7.00553ZM11.0017 18.2142H13.5731V13.9083C13.5731 13.6389 13.604 13.4311 13.6658 13.2849C13.7739 13.0233 13.938 12.802 14.158 12.6211C14.3781 12.4403 14.6542 12.3499 14.9862 12.3499C15.8511 12.3499 16.2835 12.9309 16.2835 14.093V18.2142H18.8549V13.7929C18.8549 12.6538 18.5847 11.79 18.0441 11.2012C17.5036 10.6125 16.7893 10.3181 15.9013 10.3181C14.9051 10.3181 14.1291 10.7452 13.5731 11.5995V11.6226H13.5615L13.5731 11.5995V10.5028H11.0017C11.0171 10.7491 11.0248 11.5148 11.0248 12.8001C11.0248 14.0853 11.0171 15.89 11.0017 18.2142Z"
              fill="#63727e"
            /></svg
        ></a>

        <!-- medium -->
        <a href="#" class="text-decoration-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="37"
            viewBox="0 0 36 37"
            fill="none"
          >
            <rect y="0.165527" width="36" height="36" rx="8" fill="#E7E6F2" />
            <path
              d="M32 18.1655C32 21.8655 31.4 24.8655 30.6 24.8655C29.8 24.8655 29.2 21.8655 29.2 18.1655C29.2 14.4655 29.8 11.4655 30.6 11.4655C31.4 11.4655 32 14.4655 32 18.1655ZM28.5 18.1655C28.5 22.2655 26.7 25.6655 24.6 25.6655C22.5 25.6655 20.7 22.2655 20.7 18.1655C20.7 14.0655 22.5 10.6655 24.6 10.6655C26.7 10.6655 28.5 14.0655 28.5 18.1655ZM19.8 18.1655C19.8 22.5655 16.3 26.1655 11.9 26.1655C7.5 26.1655 4 22.5655 4 18.1655C4 13.7655 7.5 10.1655 11.9 10.1655C16.3 10.1655 19.8 13.7655 19.8 18.1655Z"
              fill="#8D8BA7"
            />
          </svg>
        </a>
      </div>
      <div v-if="isTablet">
        <hr />
        <p>Copyright © 2023</p>
        <p>Wrytopia | All Rights Reserved</p>
      </div>
    </div>
    <hr class="mt-5" />
    <div id="watermark" class="d-flex flex-wrap justify-content-center">
      <p>
        Developed & designed by
        <a
          href="https://sheldonsagrado.vercel.app"
          target="_blank"
          class="text-decoration-none d-inline"
          >Sheldon</a
        >
        ⨯
        <a
          href="https://www.tiktok.com/@ethan_pptart"
          class="text-decoration-none d-inline"
          target="_blank"
          >Ethan.ppt</a
        >
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      screenWidth: window.innerWidth,
    };
  },
  computed: {
    isTablet() {
      return this.screenWidth < 768;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/stylesheets/sass/variables.scss";

hr {
  color: #d4d2e3 !important;
}
#icons {
  width: 100% !important;

  a {
    display: inline !important;
    margin: 0 5px;
  }

  svg {
    width: 36px;
    height: 36px;
  }
}
footer {
  background-color: $white;
  padding-left: 108px !important;
  padding-right: 108px !important;
  padding-top: 54px !important;
  padding-bottom: 24px !important;
  gap: 10px;

  h5 {
    color: $black !important;
    font-size: 20px !important;
    font-style: normal !important;
    font-weight: 600 !important;
    line-height: 20px !important; /* 71.429% */
    letter-spacing: 2.8px !important;
    margin-bottom: 2rem;
  }

  a {
    color: $gray !important;
    font-family: "Poppins" !important;
    font-size: 14px !important;
    font-weight: 400 !important;
    display: block;
    margin-bottom: 20px;
    white-space: nowrap;
  }

  p {
    color: $black !important;
    font-family: "Poppins" !important;
    font-size: 14px !important;
    font-weight: 400 !important;
  }

  span {
    margin-right: 8px;
  }

  #watermark {
    a {
      color: $accent !important;
    }
  }
}

@media #{$tablet} {
  .foot {
    justify-content: center !important;
    flex-wrap: wrap;
  }
  /* footer a {
      text-align: center;
    }
    footer p {
      text-align: center;
    } */

  * {
    text-align: center !important;
  }
  footer {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
}
</style>
