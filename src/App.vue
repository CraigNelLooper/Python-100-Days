<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <v-app-bar-nav-icon class="hidden-sm-and-up"></v-app-bar-nav-icon>
        <router-link to="/">
        <v-img class="mr-2" contain max-height="80px" max-width="80px" src="@/assets/1.png"></v-img>
        </router-link>
        <v-toolbar-title class="mr-4 hidden-sm-and-down" style="font-family:'Cinzel', serif; font-size:24px ; font-weight:700"> Daskrans</v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
          <v-btn color="primary" :to="link.link" v-for="link in links" :key="link" text>
            {{ link.text }}
          </v-btn>

          <v-btn disabled tile elevation="2" color="secondary">Aetera Token</v-btn>
        </div>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <router-view />
    </v-main>
    <v-footer  padless>
      <v-card flat tile width="100%" class="blue lighten-1 text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Daskrans | Spring Water</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [{text:"About Us", link:"/about"}, {text:"Where to buy", link:"/wheretobuy"},  {text:"The People",link:"/thepeople"}, {text:"Contact us", link:"/contactus"},],
  }),
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Cinzel&display=swap);

</style>
