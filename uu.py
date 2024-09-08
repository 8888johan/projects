class FitnessTracker:
    def __init__(self):
        self.steps = 0
        self.calories_burned = 0
        self.workouts = []

    def add_steps(self, number_of_steps):
        self.steps += number_of_steps
        self.update_calories()

    def update_calories(self):
        # Simple estimation: 0.04 calories per step
        self.calories_burned = self.steps * 0.04

    def log_workout(self, workout_name, duration):
        self.workouts.append({'workout': workout_name, 'duration': duration})

    def get_summary(self):
        return {
            'Total Steps': self.steps,
            'Total Calories Burned': self.calories_burned,
            'Workouts': self.workouts
        }

# Example usage
tracker = FitnessTracker()
tracker.add_steps(5000)
tracker.log_workout('Running', 30)  # 30 minutes of running
tracker.log_workout('Cycling', 45)  # 45 minutes of cycling

print(tracker.get_summary())
