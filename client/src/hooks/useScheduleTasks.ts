import { DayProps } from "../interfaces/DayProps";
import { TaskListItem } from "../interfaces/TaskListItem";
import { buildRequestBody, sendJsonRequest } from "./Api";

export interface useScheduleTasksReturn {
    handleScheduleTasksClick : () => void,
}

interface useScheduleTasksProps {
    packageDays : () => DayProps[];
    getTaskList : () => TaskListItem[];
}


const useScheduleTasks = ({packageDays, getTaskList} : useScheduleTasksProps) : useScheduleTasksReturn => {
    const SERVER_URL = "http://localhost:8080"
    const handleScheduleTasksClick =  async() => {
        const packagedDays = packageDays()
        const taskList = getTaskList()
        const requestParams = buildScheduleRequestParams(packagedDays, taskList);
        const requestBody = buildRequestBody(requestParams);
        const response = await sendJsonRequest(`${SERVER_URL}/`,requestBody);
        console.log(response);
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