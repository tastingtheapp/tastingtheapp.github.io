<template>
    <nav>
        <ul>
            <li v-for="week in weeks" :key="week.id">
                <button @click="$emit('week-selected', week)">{{ week.title }}</button>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        weeks: Array, // Expecting an array of week objects
    },
    methods: {
        // No methods needed in this basic implementation
    },
};
</script>