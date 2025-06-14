import { useState } from "react";
import { TaskListItem } from "../interfaces/TaskListItem";

const useTaskList = () => {
    const [listOpen, setListOpen] = useState<boolean>(false);
    const [taskList, setTaskList] = useState<TaskListItem[]>([]);

    const toggleList = () => {
        console.log("m")
        setListOpen(!listOpen);
    }

    return {
        listOpen,
        toggleList,
        taskList,
    }
}

export default useTaskList;


