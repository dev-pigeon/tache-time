import { useState } from "react";

const useTaskList = () => {
    const [listOpen, setListOpen] = useState<boolean>(false);

    const toggleList = () => {
        console.log("m")
        setListOpen(!listOpen);
    }

    return {
        listOpen,
        toggleList,
    }
}

export default useTaskList;


