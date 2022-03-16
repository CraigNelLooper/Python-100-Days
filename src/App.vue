<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <v-app-bar-nav-icon class="hidden-sm-and-up"></v-app-bar-nav-icon>
        <v-toolbar-title class="mr-4">Daskrans</v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
        <v-btn color="primary" v-for="link in links" :key="link" text>
          {{ link }}
        </v-btn>

        <v-btn plain tile elevation="2" color="secondary">Aetera Token</v-btn>
        </div>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: ["About Us", "Where to buy", "Contact us", "The People"],
  }),
};
</script>
