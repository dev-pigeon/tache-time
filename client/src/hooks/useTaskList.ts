import {  useState } from "react";
import { TaskListItem } from "../interfaces/TaskListItem";

export interface useTaskListReturn {
    listOpen : boolean,
    taskList : TaskListItem[],
    addTask : (item : TaskListItem) => void,
    toggleList : () => void,
    removeTask : (taskID : string) => void,
    getTaskList : () => TaskListItem[],
}

const useTaskList = () : useTaskListReturn => {

    const [listOpen, setListOpen] = useState<boolean>(false);
    const [taskList, setTaskList] = useState<TaskListItem[]>([]);

    const toggleList = () => {
        setListOpen(!listOpen);
    }

    const getTaskList  = () : TaskListItem[] => {
        return taskList;
    }

     const addTask = (newItem : TaskListItem) => {
        let updatedList : TaskListItem[] = [...taskList];
        updatedList.push(newItem)
        setTaskList(updatedList)
    }

    const removeTask = (taskID : string) => {
        const updatedTaskList = taskList.filter(task => task.id != taskID);
        setTaskList(updatedTaskList)
    }
    
    return {
        listOpen,
        toggleList,
        taskList,
        addTask,
        removeTask,
        getTaskList
    }
}

export default useTaskList;


