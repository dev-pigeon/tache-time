import { useState } from "react";


export interface useModeControlReturn {
    editMode : boolean;
    changeMode : () => void;
}


const useModeControl = () : useModeControlReturn => {
    const [editMode, setEditMode] = useState<boolean>(true);

    const changeMode = () : void => {
        setEditMode(!editMode);
    }

    return {
        editMode,
        changeMode
    }
}

export default useModeControl;