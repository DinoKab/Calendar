<template>
  <div class="blue-grey lighten-5" style="box-shadow: 0 0 6px rgba(0,0,0,0.5);">
    <v-layout row wrap justify-center class="pt-3">
      <v-flex xs12 md6 text-xs-center text-md-left>
        <v-btn
          flat
          round
          dark
          @click="addWindow = true"
          class="cyan darken-3"
          style="text-transform: inherit"
        >Добавить</v-btn>
        <v-btn
          disabled
          flat
          round
          dark
          class="cyan darken-3"
          style="text-transform: inherit"
        >Обновить</v-btn>
      </v-flex>

      <v-flex xs9 md3>
        <v-menu max-width="98%" min-width="240" nudge-bottom="60">
          <template v-slot:activator="{ on }">
            <v-toolbar-title v-on="on">
              <v-text-field label="Поиск" v-model="searchTerm" color="#0097a7"></v-text-field>
            </v-toolbar-title>
          </template>

          <v-list>
            <v-list-tile v-for="event in searchEvents" :key="event.id">
              <v-list-tile-title v-text="event.date + ' - ' + event.title"></v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-flex>
    </v-layout>
    <v-dialog v-model="addWindow" max-width="400">
      <v-card>
        <v-card-text>
          <v-flex xs12>
            <v-menu v-model="dateEvent" :return-value.sync="dateEvent" min-width="290px">
              <template v-slot:activator="{ on }">
                <v-text-field v-model="date" label="Дата" color="#0097a7" readonly v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date" locale="ru-Latn" color="#0097a7" no-title scrollable>
                <v-spacer></v-spacer>
              </v-date-picker>
            </v-menu>
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="title" color="#0097a7" label="Событие" type="text" required></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              v-model="participants"
              color="#0097a7"
              label="Имена участников"
              type="text"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-textarea
              solo
              auto-grow
              v-model="details"
              class="mt-3"
              color="#0097a7"
              label="Описание"
            ></v-textarea>
          </v-flex>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#0097a7" flat="flat" @click="addWindow = false">Отмена</v-btn>
          <v-btn color="#0097a7" flat="flat" @click="saveFile(); addWindow = false">Добавить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    date: new Date().toISOString().slice(0, 10),
    dateEvent: new Date(),
    menu: false,
    title: "",
    participants: "",
    details: "",
    arr: [],
    addWindow: false,
    searchTerm: null
  }),
  computed: {
    events() {
      return this.$store.getters.getEvents;
    },
    searchEvents() {
      let events = this.events;
      if (this.searchTerm)
        events = events.filter(
          s =>
            s.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0 ||
            s.date.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0
        );
      return events;
    }
  }
};
</script>
