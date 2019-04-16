<template>
  <!-- <div>    
    <v-toolbar class="grey lighten-2">
      <v-layout row align-center>
        <v-flex xs12 offset-md3>
          <v-btn flat dark class="cyan darken-3">Добавить</v-btn>
          <v-btn flat dark class="cyan darken-3">Обновить</v-btn>
        </v-flex>
      </v-layout>
      <v-spacer></v-spacer>
      <v-layout justify-center align-center>
        <v-flex xs6 md6>
          <v-text-field label="Поиск" v-model="searchTerm" color="#0097a7"></v-text-field>
        </v-flex>
      </v-layout>
    </v-toolbar>
  </div>-->

  <div class="blue-grey lighten-5" style="box-shadow: 0 0 6px rgba(0,0,0,0.5);">
    <v-layout row wrap justify-center class="pt-3">
      <v-flex xs12 md6 text-xs-center text-md-left>
        <v-btn flat round dark class="cyan darken-3" style="text-transform: inherit">Добавить</v-btn>
        <v-btn flat round dark class="cyan darken-3" style="text-transform: inherit">Обновить</v-btn>
      </v-flex>

      <v-flex xs9 md3>
        <v-text-field label="Поиск" v-model="searchTerm" color="#0097a7"></v-text-field>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: ""
    };
  }
};
</script>
