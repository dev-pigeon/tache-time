export interface useScheduleTasksReturn {
    handleScheduleTasksClick : () => void,
}

interface useScheduleTasksProps {
    packageDays : () => void;
}

const useScheduleTasks = ({packageDays} : useScheduleTasksProps) : useScheduleTasksReturn => {
    const handleScheduleTasksClick = () => {
        const packagedDays = packageDays()
        console.log(packagedDays)
    }

    return {
        handleScheduleTasksClick 
    }
}


export default useScheduleTasks