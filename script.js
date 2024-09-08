// Your Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

document.getElementById('exercise-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const exercise = document.getElementById('exercise').value;
    const duration = document.getElementById('duration').value;
    
    if (exercise && duration) {
        const newExerciseRef = database.ref('exercises').push();
        newExerciseRef.set({
            exercise: exercise,
            duration: duration
        });
        
        // Clear input fields
        document.getElementById('exercise').value = '';
        document.getElementById('duration').value = '';
    }
});

database.ref('exercises').on('child_added', function(snapshot) {
    const data = snapshot.val();
    const exerciseList = document.getElementById('exercise-list');
    
    const listItem = document.createElement('li');
    listItem.textContent = `${data.exercise}: ${data.duration} minutes`;
    
    exerciseList.appendChild(listItem);
});
