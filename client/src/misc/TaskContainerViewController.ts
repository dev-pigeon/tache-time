import { useState } from "react"
import { useValidationReturn } from "../hooks/useValidation"


export interface renderedComponentProps {
    widget : boolean,
    addTask : boolean,
    validation : boolean,
}

export interface TaskWidgetContainerReturn {
    renderedComponent : renderedComponentProps,
    changeRenderedComponent : (updatedProps : renderedComponentProps) => void;
    displayValidation : (message : string, status : "error" | "success") => void;

}

const TaskContainerViewController = (validationHook : useValidationReturn) :TaskWidgetContainerReturn => {
    const [renderedComponent, setRenderedComponent] = useState<renderedComponentProps>({
        widget : true,
        addTask : false,
        validation : false,
    })


    const changeRenderedComponent = (updatedProps : renderedComponentProps) => {
       setRenderedComponent(updatedProps)
    }

    const displayValidation = (message : string, status : "error" | "success")  => {
        changeRenderedComponent({widget : false, addTask : false, validation : true})
        validationHook.setValidationMessage(message)
        validationHook.setValidationStatus(status)
        setTimeout(() => {
            changeRenderedComponent({widget : true, addTask : false, validation : false})
            validationHook.setValidationMessage(null);
        }, 3000)
    }

    return {
         renderedComponent,
         changeRenderedComponent,
         displayValidation
    }
}

export default TaskContainerViewController