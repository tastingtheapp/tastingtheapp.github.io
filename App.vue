<template>
    <div id="app">
        <header-component></header-component>
        <main>
            <WeekNavComponent.vue :weeks="courseData" @week-selected="handleWeekSelected" />
            <router-view />
        </main>
        <footer-component></footer-component>
    </div>
</template>

<script>
import HeaderComponent from '/static/HeaderComponent.vue';
import FooterComponent from '/static/FooterComponent.vue';
import WeekNavComponent from '/static/WeekNavComponent.vue';

export default {
    components: {
        HeaderComponent,
        FooterComponent,
    },
    methods: {
        handleWeekSelected(week) {
            // Navigate to the week route with the selected week ID
            this.$router.push({ path: `/week/${week.id}` });
        },
    },
};
</script>

<style>
/* App-level styles */
</style>