class Task {
  constructor(name, id, deadline, timeRemaining) {
    this.name = name;
    this.id = id;
    this.deadline = deadline;
    this.timeRemaining = timeRemaining;
  }

  decrementTimeRemaining() {
    --this.timeRemaining;
  }

  equals(task) {
    return (
      this.name == task.name &&
      this.deadline == task.deadline &&
      this.description == task.description &&
      this.timeRemaining == task.timeRemaining
    );
  }
}

module.exports = Task;
