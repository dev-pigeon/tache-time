import { DayProps } from "../interfaces/DayProps";
import { TaskListItem } from "../interfaces/TaskListItem";

export interface useScheduleTasksReturn {
    handleScheduleTasksClick : () => void,
}

interface useScheduleTasksProps {
    packageDays : () => DayProps[];
    getTaskList : () => TaskListItem[];
}

const useScheduleTasks = ({packageDays, getTaskList} : useScheduleTasksProps) : useScheduleTasksReturn => {
    const handleScheduleTasksClick = () => {
        const packagedDays = packageDays()
        const taskList = getTaskList()
        const requestParams = buildScheduleRequestParams(packagedDays, taskList);
        console.log(requestParams)
    }

    const buildScheduleRequestParams = (packagedDays : DayProps[], taskList : TaskListItem[]) => {
        const params = {
            packagedDays,
            taskList
        }
        return params;
    }

    return {
        handleScheduleTasksClick 
    }
}


export default useScheduleTasks