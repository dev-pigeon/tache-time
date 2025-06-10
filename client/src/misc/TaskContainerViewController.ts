import { useState } from "react"
import TaskViewStateEnum from "./TaskViewControllerEnum"

const TaskContainerViewController = () => {
    const [renderedComponent, setRenderedComponent] = useState<TaskViewStateEnum>(TaskViewStateEnum.TASK_WIDGET)

    return {
        renderedComponent
    }
}

export default TaskContainerViewController