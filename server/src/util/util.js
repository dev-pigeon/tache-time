function createTaskDictionary(taskList) {
  let taskDictionary = {};
  for (const task of taskList) {
    if (task.deadline in taskDictionary) {
      let deadLineList = taskDictionary[task.deadline];
      deadLineList.push(task);
      taskDictionary[task.deadline] = deadLineList;
    } else {
      taskDictionary[task.deadline] = [task];
    }
  }
  return taskDictionary;
}

module.exports = {
  createTaskDictionary,
};
