import { useState } from "react";


export interface useViewControlReturn {
    editMode : boolean;
    changeMode : () => void;
}


const useViewControl = () : useViewControlReturn => {
    const [editMode, setEditMode] = useState<boolean>(true);

    const changeMode = () : void => {
        setEditMode(!editMode);
    }

    return {
        editMode,
        changeMode
    }
}

export default useViewControl;