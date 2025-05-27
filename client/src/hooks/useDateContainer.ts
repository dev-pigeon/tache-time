import { useState } from "react";
import { getCalendarContainerHeight } from "./useCalendarContainer";

interface unit {
  time: string;
  height: number;
}

interface useDateContainerReturn {
  units : unit[] | undefined,
  initializeUnits : () => void,
}

const useDateContainer = () : useDateContainerReturn => {
    const [units, setUnits] = useState<unit[] | undefined>();

    const initializeUnits = () => {
    let newUnits: unit[] = [];
    const numTimeUnits = 12;
    let date = new Date(); // 8 am today;
    date.setHours(8);
    date.setMinutes(0);
    const timeUnitHeight = getCalendarContainerHeight() / numTimeUnits;
    for (let i = 0; i < numTimeUnits; ++i) {
      const hourString = date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      const unit: unit = {
        time: hourString,
        height: timeUnitHeight,
      };
      newUnits.push(unit);
      date.setHours(date.getHours() + 1);
    }
    setUnits(newUnits);
  };

  return {
    units,
    initializeUnits
  }
}

export default useDateContainer;