class Task {
  constructor(name, id, deadline, timeRemaining, dateString) {
    this.name = name;
    this.id = id;
    this.deadline = deadline;
    this.timeRemaining = timeRemaining;
    this.dateString = dateString;
  }

  decrementTimeRemaining() {
    --this.timeRemaining;
  }

  equals(task) {
    return (
      this.name == task.name &&
      this.deadline == task.deadline &&
      this.description == task.description &&
      this.timeRemaining == task.timeRemaining &&
      this.dateString == task.dateString
    );
  }
}

module.exports = Task;
