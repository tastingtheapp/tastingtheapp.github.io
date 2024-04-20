<template>
    <section v-if="currentWeek">
        <h1>Week {{ currentWeek.title }}</h1>
        <p>{{ currentWeek.description }}</p>
        <div v-if="currentWeek.meditation">
            <h2>Guided Meditation</h2>
            <audio :src="currentWeek.meditation.audioSrc" controls></audio>
            <p>{{ currentWeek.meditation.instructions }}</p>
        </div>
    </section>
    <section v-else>
        <p>Week not found.</p>
    </section>
</template>

<script>
export default {
    props: {
        currentWeek: null, // Assuming you're passing week data as a prop
    },
    // No methods needed in this basic implementation (assuming data is passed as prop)
};
</script>