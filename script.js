// script.js
import { courseData, userData } from '/static/data.js'; // (Optional)

//import Vue from 'vue';
import App from '/static/App.vue'; // Assuming your main component is in App.vue
import WeekView from '/static/WeekView.vue';
//import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    { path: '/week/:id', component: WeekView.vue, props: true },
];

const router = new VueRouter({
    routes,
});

// Define and manage currentWeek data
let currentWeek = null;

new Vue({
    router,
    data() {
        return {
            // Consider fetching or managing courseData here
            courseData, // Assuming courseData is already populated
        };
    },
    methods: {
        handleWeekSelected(selectedWeek) {
            currentWeek = selectedWeek;
        },
    },
    render: h => h(App),
}).$mount('#app');