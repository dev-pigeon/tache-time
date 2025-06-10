import dayjs, { Dayjs } from "dayjs";
import { Dispatch, SetStateAction, useState } from "react"

const useAddTask = () => {
    const [taskName, setTaskName] = useState<string>("");
    const [taskDescription, setTaskDescription] = useState<string>("");
    const [estimatedHours, setEstimatedHours] = useState<string>("");
    const [taskDueDate, setTaskDueDate] = useState<Dayjs | null>(null);
    const [taskTimeDue, setTaskTimeDue] = useState<Dayjs | null>(dayjs().hour(23).minute(59).second(0).millisecond(0));


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

    return {
        handleStringElementChange,
        taskName,
        taskDescription,
        taskDueDate,
        taskTimeDue,
        estimatedHours,
        setTaskDueDate,
        setTaskTimeDue
    }
}


export default useAddTask;