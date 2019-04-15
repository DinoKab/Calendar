<template>
  <div>
    
    <v-toolbar class="grey lighten-2">
      <v-layout>
        <v-flex>
          <v-btn flat dark class="cyan darken-3">Добавить</v-btn>
          <v-btn flat dark class="cyan darken-3">Обновить</v-btn>
        </v-flex>
      </v-layout>
      <v-spacer></v-spacer>
      <v-layout justify-end align-center>
        <v-flex md5>
          <v-text-field label="Поиск" v-model="searchTerm" color="#0097a7"></v-text-field>
        </v-flex>
      </v-layout>
    </v-toolbar>
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
