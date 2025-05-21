class Task {
    constructor(name, description, deadline, timeRemaining) {
        this.name = name;
        this.description = description;
        this.deadline = deadline;
        this.timeRemaining = timeRemaining;
    }

     decrementTimeRemaining() {
        --this.timeRemaining;
    }
}

module.exports = Task;