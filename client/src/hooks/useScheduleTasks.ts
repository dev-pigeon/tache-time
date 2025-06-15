export interface useScheduleTasksReturn {
    handleScheduleTasksClick : () => void,
}

const useScheduleTasks = () : useScheduleTasksReturn => {
    const handleScheduleTasksClick = () => {
        console.log("I am supposed to be handling things right now")
    }

    return {
        handleScheduleTasksClick 
    }
}


export default useScheduleTasks