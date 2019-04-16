<template>
  <div>
    <v-container>
      <v-layout row justify-start align-center text-xs-center text-md-left>
        <v-flex xs6 sm1>
          <v-btn small fab @click="$refs.calendar.prev()">
            <v-icon>keyboard_arrow_left</v-icon>
          </v-btn>
        </v-flex>

        <v-flex xs6 sm1>
          <v-btn small fab @click="$refs.calendar.next()">
            <v-icon>keyboard_arrow_right</v-icon>
          </v-btn>
        </v-flex>
        <v-flex>
          <v-btn round style="text-transform: inherit" @click="goToday()">Сегодня</v-btn>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout wrap>
        <v-flex xs12 class="mb-3">
          <v-sheet height="430">
            <v-calendar
              locale="ru-Latn"
              ref="calendar"
              v-model="today"
              :value="today"
              :type="type"
              :end="end"
              class="teal lighten-5"
              color="primary"
            ></v-calendar>
          </v-sheet>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    type: "month",
    start: "2019-01-01",
    end: "2019-01-06",
    today: new Date().toISOString().slice(0, 10)
  }),
  methods: {
    goToday() {
      this.today = new Date().toISOString().slice(0, 10);
    }
  }
};
</script>

<style scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #0097a7;
  color: #ffffff;
  border: 1px solid #0097a7;
  width: 100%;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
}
</style>
