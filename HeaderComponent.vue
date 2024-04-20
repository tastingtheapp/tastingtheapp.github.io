<template>
    <header>
        <h1>MBSR SPA</h1>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About MBSR</router-link>
            <router-link to="/week/1">Week 1</router-link>
        </nav>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                currentWeek: 1, // Replace with logic to get current week
            };
        },
    };
</script>

<style scoped>
    header {
        background-color: #f0f0f0;
        padding: 1rem;
    }
</style>