import dayjs, { Dayjs } from "dayjs";
import { Dispatch, SetStateAction, useState } from "react"

const useAddTask = () => {

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

    const validateInputs = () => {
      try {
        validateDueDate()
        validateEstimatedTime()
      } catch(error) {
        throw new Error(error as string)
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
    }
}


export default useAddTask;


