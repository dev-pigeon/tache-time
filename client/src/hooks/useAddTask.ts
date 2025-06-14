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
      } catch(error) {
        throw new Error(error as string)
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
        setTaskDueDate,
        setTaskTimeDue,
        validateInputs,
    }
}


export default useAddTask;


