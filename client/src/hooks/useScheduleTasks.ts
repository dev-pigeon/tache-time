import { DayProps } from "../interfaces/DayProps";
import { TaskListItem } from "../interfaces/TaskListItem";
import { buildRequestBody, sendJsonRequest } from "./Api";

export interface useScheduleTasksReturn {
    handleScheduleTasksClick : () => void,
}

interface useScheduleTasksProps {
    packageDays : () => DayProps[];
    getTaskList : () => TaskListItem[];
    displayValidation : (message : string, status : "error" | "success") => void;
}


const useScheduleTasks = ({packageDays, getTaskList, displayValidation} : useScheduleTasksProps) : useScheduleTasksReturn => {
    const SERVER_URL = "http://localhost:8080/tasks/schedule"
    const handleScheduleTasksClick =  async() => {
        const packagedDays = packageDays()
        console.log(packagedDays)
        const taskList = getTaskList()
        const requestParams = buildScheduleRequestParams(packagedDays, taskList);
        const requestBody = buildRequestBody(requestParams);
        try {
            // @ts-ignore
            const response = await sendJsonRequest(`${SERVER_URL}/`,requestBody);
            console.log(response);
        } catch(error) {
            if(error instanceof Error) {
                displayValidation(error.message, "error");
            }
        }
        
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