import dayjs, { Dayjs } from "dayjs";
import { Dispatch, SetStateAction, useState } from "react"
import { TaskListItem } from "../interfaces/TaskListItem";
import { useTaskListReturn } from "./useTaskList";

interface useAddTask {
    taskListHook: useTaskListReturn;
}

const useAddTask = ({taskListHook} : useAddTask) => {

    const [taskName, setTaskName] = useState<string>("");
    const [taskDescription, setTaskDescription] = useState<string>("");
    const [estimatedHours, setEstimatedHours] = useState<string>("");
    const [taskDueDate, setTaskDueDate] = useState<Dayjs | null>(null);
    const [taskTimeDue, setTaskTimeDue] = useState<Dayjs | null>(null);

    const handleStringElementChange = (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = event.target;
        if(target) {
            if(target.id) {
                const setState = getProperStateSetter(target.id);
                setState(target.value);
            }
        }
    }

    const getProperStateSetter = (elementID : string) : Dispatch<SetStateAction<string>> => {
        switch(elementID) {
            case "task-name":
                return setTaskName;
            case "task-desc":
                return setTaskDescription;
        }
        return setEstimatedHours
    }

    
    const createTask = () => {
        try {
            validateInputs()
            const newTaskItem = buildTaskListItem();
            taskListHook.addTask(newTaskItem)
            clearInputFields()
        } catch(error) {
            throw new Error(error as string)
        }
    }

    const clearInputFields = () => {
        setEstimatedHours("")
        setTaskDescription("")
        setTaskName("")
        setTaskDueDate(null)
        setTaskTimeDue(null)
    }

    const getMonthString = (monthNum : number) => {
        switch(monthNum) {
            case 0:
                return "Jan"
            case 1:
                return "Feb"
            case 2:
                return "Mar"
            case 3:
                return "Apr"
            case 4:
                return "May"
            case 5:
                return "Jun"
            case 6:
                return "Jul"
            case 7:
                return "Aug"
            case 8:
                return "Sep"
            case 9:
                return "Oct"
            case 10:
                return "Nov"
        }
        return "Dec"
    } 

    const formatDateDue = () => {
        const monthNum = taskDueDate!.month()
        const monthStr = getMonthString(monthNum);
        const dayOfYear = taskDueDate?.format("DD")
        const formattedDate = `${monthStr} ${dayOfYear}`
        return formattedDate
    }

    const buildTaskListItem = () => {
        const dateFormatted = formatDateDue();
        const id = `${taskName}-${dateFormatted}`
        const parsedEstTime = Number(estimatedHours)
        const newTask : TaskListItem = {
            title : taskName,
            description: taskDescription,
            dueTime : taskTimeDue!.format('hh:mm A'),
            dueDate : dateFormatted,
            id : id,
            estimatedTime : parsedEstTime
        }
        return newTask;
    }
    

    const validateInputs = () => {
      try {
        isDueDateMissing()
        isTitleMissing()
        isDueTimeMissing()
        validateDueDate()
        validateEstimatedTime()
      } catch(error) {
        throw new Error(error as string)
      }
     }

     const isDueDateMissing = () => {
        if(taskDueDate == null) {
            throw new Error("Task due date is a required field.")
        }
     }

     const isTitleMissing = () => {
        if(taskName == null) {
            throw new Error("Task name is a required field.")
        }
     }

     const isDueTimeMissing  = () => {
        if(taskTimeDue == null) {
            throw new Error("The time the task is due is a required field.")
        }
     }

     const validateEstimatedTime = () => {
        const parsedTime = Number(estimatedHours)
        if(isNaN(parsedTime)) {
            throw new Error("Estimated task time must be a number.")
        }
     }

    const validateDueDate = () => {
        const upperBound = dayjs().add(7,'days');
        const difference = upperBound.diff(taskDueDate!,'days')
        if(!(difference >= 0 && difference <= 7)) {
            throw new Error("Task due date must be within one week of todays date.");
        }
    }

    return {
        handleStringElementChange,
        taskName,
        taskDescription,
        taskDueDate,
        taskTimeDue,
        estimatedHours,
        setEstimatedHours,
        setTaskDueDate,
        setTaskTimeDue,
        validateInputs,
        createTask,
    }
}


export default useAddTask;


