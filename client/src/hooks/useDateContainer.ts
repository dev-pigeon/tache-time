import { useState } from "react";
import { getCalendarContainerHeight } from "./useCalendarContainer";
import { TimeUnitProps } from "../interfaces/TimeUnitProps";
import dayjs from "dayjs";


interface useDateContainerReturn {
  units : TimeUnitProps[] | undefined,
  initializeUnits : () => void,
}

const useDateContainer = () : useDateContainerReturn => {
    const [units, setUnits] = useState<TimeUnitProps[] | undefined>();

    const initializeUnits = () => {
    let newUnits: TimeUnitProps[] = [];
    const numTimeUnits = 12;
    let date = dayjs().hour(8).minute(0).second(0).millisecond(0); // 8 am today;
    const timeUnitHeight = getCalendarContainerHeight() / numTimeUnits;
    for (let i = 0; i < numTimeUnits; ++i) {
      const unit: TimeUnitProps = {
        time: date,
        height: timeUnitHeight,
        available : false,
      };
      newUnits.push(unit);
      date = date.add(1,'hours');
    }
    setUnits(newUnits);
  };

  return {
    units,
    initializeUnits
  }
}

export default useDateContainer;