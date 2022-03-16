import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#034FA0',
            secondary: '#00A3F5',
            accent: '#ADADAD',
            error: '#A61C3C',
          },
        },
      },
});
