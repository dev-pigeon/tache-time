import { useState } from "react"
import TaskViewStateEnum from "./TaskViewControllerEnum"

const TaskContainerViewController = () => {
    const [renderedComponent, setRenderedComponent] = useState<TaskViewStateEnum>(TaskViewStateEnum.TASK_WIDGET)

    const changeRenderedComponent = (type : TaskViewStateEnum) => {
        setRenderedComponent(type);
    }

    return {
        renderedComponent,
        changeRenderedComponent,
    }
}

export default TaskContainerViewController