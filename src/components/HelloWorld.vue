<template>
  <div fluid>
    <section>
      <v-carousel cycle height="76vh">
        <v-carousel-item>
          <v-sheet height="100%">
            <v-row class="fill-height" align="center" justify="center"> 
              <v-img src="https://images.unsplash.com/photo-1564401003800-3cd8ced29bbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80">
            <v-row align="center" justify="center"> 
            We take water seriously              
            </v-row>
              </v-img>
              
            </v-row>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
          <v-sheet height="100%">
            <v-row class="fill-height" align="center" justify="center"> 
              <v-img src="https://images.unsplash.com/photo-1564401003800-3cd8ced29bbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"></v-img>
              
            </v-row>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
          <v-sheet height="100%">
            <v-row class="fill-height" align="center" justify="center"> 
              <v-img src="https://images.unsplash.com/photo-1564401003800-3cd8ced29bbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"></v-img>
              
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </section>
    <v-container style="max-width: 80vw">
      <v-row class="text-right" align="center">
        <v-col cols="12" md="6">
          <h1>Welcome to Daskrans Spring Water</h1>
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
            style="border-radius: 8px"
            src="https://images.unsplash.com/photo-1631472548473-3e1a1c74baeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mt-4" style="max-width: 80vw">
      <v-row  align="center">
        <v-col cols="12" md="6">
          <v-img
            style="border-radius: 8px"
            src="https://images.unsplash.com/photo-1456440234190-5ace46584c7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <h1>The future leader in spring water combined with technology</h1>
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
