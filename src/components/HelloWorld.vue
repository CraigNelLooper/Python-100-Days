<template>
  <div fluid style="background-color:white">
    <section>
      <div class="header">
        <!--Content before waves-->
        <div
          class="inner-header"
          style="align-items: center; justify-content: center; display: flex "
        >
          <!--Just the logo.. Don't mind this-->
          <v-rows >
            <v-col  cols="12">
              <v-img class="mx-auto" max-width="300px" src="@/assets/1white.png"></v-img>
            </v-col>
            <v-col cols="12">
              <h1>Daskrans Spring Water</h1>
            </v-col>
            <v-col cols="12">
              <p>
                The life blood of water, straight from the earth, as it was
                meant to be
              </p>
            </v-col>
          </v-rows>
        </div>

        <!--Waves Container-->
        <div>
          <svg
            class="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g class="parallax">
              <use
                xlink:href="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlink:href="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlink:href="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
        <!--Waves end-->
      </div>
      <!--Header ends-->

      <!--Content ends-->
    </section>
    <section>
      <div class="text-center mt-4"><h1 style="font-size : 48px">Photos from the ground</h1></div>
      <v-container>
      <v-carousel style="border-radius:8px" cycle height="76vh">
        <v-carousel-item>
          <v-sheet height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <v-img
                src="https://images.unsplash.com/photo-1564401003800-3cd8ced29bbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              >
              </v-img>
            </v-row>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
          <v-sheet height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <v-img
                src="https://images.unsplash.com/photo-1564401003800-3cd8ced29bbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              ></v-img>
            </v-row>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
          <v-sheet height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <v-img
                src="https://images.unsplash.com/photo-1564401003800-3cd8ced29bbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              ></v-img>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      </v-container>
    </section>
    <section>
    <v-container style="max-width: 80vw">
      <v-row  class="text-right" align="center">
        <v-col cols="12" md="6">
          <h1 style="font-size:36px">Welcome to Daskrans Spring Water</h1>
          <p>
            We understand the importance of clean, mineral rich water and we
            have decided to share that with the world in the form of Daskrans
            Spring Water, water is completely untreated and is naturally
            filtered through multiple layers of soil, many tests have been done
            on the water and it is found to have no impurities other than the
            minerals to make it life giving water.
          </p>
          <p>
            The water comes from deep within the Daskrans hill range and has
            been running without stop for what we believe to be 100s of years
            and through thorough testing have come to the conclusion that the
            spring will not stop for multiple lifetimes
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-img
            eager
            style="border-radius: 8px"
            src="https://images.unsplash.com/photo-1631472548473-3e1a1c74baeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mt-4" style="max-width: 80vw">
      <v-row align="center">
        <v-col cols="12" md="6">
          <v-img
            eager
            style="border-radius: 8px"
            src="https://images.unsplash.com/photo-1456440234190-5ace46584c7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <h1 style="font-size:36px">
            The future leader in spring water combined with decentralised
            technology
          </h1>
          <p>
            We understand the importance of clean, mineral rich water and we
            have decided to share that with the world in the form of Daskrans
            Spring Water, water is completely untreated and is naturally
            filtered through multiple layers of soil, many tests have been done
            on the water and it is found to have no impurities other than the
            minerals to make it life giving water.
          </p>
          <p>
            The water comes from deep within the Daskrans hill range and has
            been running without stop for what we believe to be 100s of years
            and through thorough testing have come to the conclusion that the
            spring will not stop for multiple lifetimes
          </p>
        </v-col>
      </v-row>
    </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Cinzel&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap);

body {
  margin: 0;
}
p {
  font-family: "Comfortaa", cursive;
}
h1 {
  font-family: "Cinzel", serif;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 64px;
}

.header {
  position: relative;
  text-align: center;
  background: linear-gradient(
    60deg,
    rgba(3, 79, 160, 1) 0%,
    rgba(0, 163, 245, 1) 100%
  );
  color: white;
}
.logo {
  width: 50px;
  fill: white;
  padding-right: 15px;
  display: inline-block;
  vertical-align: middle;
}

.inner-header {
  height: 60vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

.flex {
  /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;
}

.content {
  position: relative;
  height: 20vh;
  text-align: center;
  background-color: white;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
  .content {
    height: 30vh;
  }
  h1 {
    font-size: 24px;
  }
}


</style>
