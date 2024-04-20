// data.js
const courseData = [
    {
        id: 1,
        title: 'Week 1: Introduction to MBSR',
        description: 'This week introduces the concept of mindfulness and MBSR...',
        meditation: {
            audioSrc: '/audio/week1_meditation.mp3',
            instructions:
                'Find a comfortable seated position...',
        },
    },
];

const userData = {
    completedWeeks: [],
    // ... other user data
};

export { courseData, userData };