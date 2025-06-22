import { useState } from "react";


export interface useViewControlReturn {
    mode : "View" | "Edit";
    changeMode : (newMode : "View" | "Edit") => void;
}


const useViewControl = () : useViewControlReturn => {
    const [mode, setMode] = useState<"View" | "Edit">("Edit");

    const changeMode = (newMode : "View" | "Edit") : void => {
        setMode(newMode);
    }

    return {
        mode,
        changeMode
    }
}

export default useViewControl;