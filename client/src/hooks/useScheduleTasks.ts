import { DayProps } from "../interfaces/DayProps";
import { ScheduledTask } from "../interfaces/ScheduledTask";
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
            const response = await sendJsonRequest(`${SERVER_URL}/`,requestBody);
            // @ts-ignore
            const scheduledTasks = parseScheduledTaskDictionary(response);
        } catch(error) {
            if(error instanceof Error) {
                displayValidation(error.message, "error");
            }
        }
        
    }

    const parseScheduledTaskDictionary = (response : any) => {
        const scheduledTasks : ScheduledTask[] = []
        const scheduleDictionary = response['scheduleDictionary'];
        for(const key in scheduleDictionary) {
            const value = scheduleDictionary[key];
            const task : ScheduledTask = {
                name : value['taskName'],
                timesScheduled : value['timesScheduled']
            }
            scheduledTasks.push(task);
        }
        return scheduledTasks;
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