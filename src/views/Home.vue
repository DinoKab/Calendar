<template>
  <div>
    <v-container>
      <v-layout row wrap justify-start align-center text-xs-center>
        <v-flex xs4 sm1>
          <v-btn small fab @click="$refs.calendar.prev()">
            <v-icon>keyboard_arrow_left</v-icon>
          </v-btn>
        </v-flex>

        <v-flex xs4 sm3 md2 lg1>
          <span class="headline blue-grey--text">{{ nowMonth }}</span>
        </v-flex>

        <v-flex xs4 sm1>
          <v-btn small fab @click="$refs.calendar.next()">
            <v-icon>keyboard_arrow_right</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs12 sm1 class="ml-3">
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
            >
              <template v-slot:day="{ date }">
                <template v-for="event in eventsMap[date]">
                  <v-menu :key="event.title" full-width>
                    <template v-slot:activator="{ on }">
                      <div v-ripple class="my-event" v-on="on" v-html="event.title"></div>
                    </template>
                  </v-menu>
                </template>
              </template>
            </v-calendar>
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
    today: new Date().toISOString().slice(0, 10),
    newEvent: null
  }),
  computed: {
    events() {
      return this.$store.getters.getEvents;
    },
    eventsMap() {
      const map = {};
      this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e));
      console.log(this.events)
      return map;
    },
    nowMonth() {
      const month = {
        "01": "Январь",
        "02": "Февраль",
        "03": "Март",
        "04": "Апрель",
        "05": "Май",
        "06": "Июнь",
        "07": "Июль",
        "08": "Август",
        "09": "Сентябрь",
        "10": "Октябрь",
        "11": "Ноябрь",
        "12": "Декабрь"
      };
      return month[this.today.toString().slice(5, 7)];
    }
  },
  methods: {
    goToday() {
      this.today = new Date().toISOString().slice(0, 10);
    }
  }
};
</script>

<style scoped>
.my-event {
  border-radius: 4px;
  background-color: #0097a7;
  color: #ffffff;
  font-size: 12px;
  padding: 3px;
}
</style>
