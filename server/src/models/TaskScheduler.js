import { createTaskDictionary } from "../util/util";
class TaskScheduler {
    constructor() {}

    verifyTasks(taskList) {
        const taskDictionary = createTaskDictionary(taskList);
        console.log(taskDictionary);
        throw new Error("Not implemented!")
    }

}

module.exports = TaskScheduler