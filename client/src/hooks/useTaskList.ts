import { useState } from "react";
import { TaskListItem } from "../interfaces/TaskListItem";

export interface useTaskListReturn {
    listOpen : boolean,
    taskList : TaskListItem[],
    addTask : (item : TaskListItem) => void,
    toggleList : () => void,
}

const useTaskList = () : useTaskListReturn => {
    const [listOpen, setListOpen] = useState<boolean>(false);
    const [taskList, setTaskList] = useState<TaskListItem[]>([]);


    const toggleList = () => {
        setListOpen(!listOpen);
    }

     const addTask = (newItem : TaskListItem) => {
        let updatedList : TaskListItem[] = [...taskList];
        updatedList.push(newItem)
        setTaskList(updatedList)
    }

    
    return {
        listOpen,
        toggleList,
        taskList,
        addTask
    }
}

export default useTaskList;


