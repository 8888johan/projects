const ctx = document.getElementById('exercise-chart').getContext('2d');
let exerciseChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Exercise Duration (minutes)',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Update chart with data
function updateChart(exercises) {
    const labels = exercises.map(ex => new Date(ex.timestamp).toLocaleDateString());
    const data = exercises.map(ex => ex.duration);

    exerciseChart.data.labels = labels;
    exerciseChart.data.datasets[0].data = data;
    exerciseChart.update();
}

auth.onAuthStateChanged(user => {
    if (user) {
        const userId = user.uid;
        database.ref('users/' + userId + '/exercises').on('value', function(snapshot) {
            const exercises = [];
            snapshot.forEach(childSnapshot => {
                exercises.push(childSnapshot.val());
            });
            updateChart(exercises);
        });
    }
});
