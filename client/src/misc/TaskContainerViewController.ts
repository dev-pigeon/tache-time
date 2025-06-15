import { useState } from "react"


export interface renderedComponentProps {
    widget : boolean,
    addTask : boolean
}

const TaskContainerViewController = () => {
    const [renderedComponent, setRenderedComponent] = useState<renderedComponentProps>({
        widget : true,
        addTask : false,
    })


    const changeRenderedComponent = (updatedProps : renderedComponentProps) => {
       setRenderedComponent(updatedProps)
    }

    return {
        renderedComponent,
         changeRenderedComponent
    }
}

export default TaskContainerViewController