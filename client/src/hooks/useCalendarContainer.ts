import {  useEffect, useState } from "react"

import { DayProps } from "../interfaces/DayProps";
import dayjs, { Dayjs } from "dayjs";
import { TimeUnitProps } from "../interfaces/TimeUnitProps";

export interface useCalendarContainerReturnProps {
    initializeDates : (dateIn? : Dayjs) => void;
    days : DayProps[] | undefined;
    getCalendarContainerHeight : () => number;
    getDayOfWeekString : (dayNum : number) => string;
    toggleTimeUnit : (unitTime : Dayjs) => void;
    packageDays : () => DayProps[];
}

export const getCalendarContainerHeight = () : number => {
    return Math.round(window.innerHeight * .75);
}

const useCalendarContainer = () : useCalendarContainerReturnProps => {

    const [days, setDays] = useState<DayProps[] | undefined>(undefined);

    useEffect(() => {
        console.log(days);
    },[days])

    const packageDays = () : DayProps[] => {
    const packagedDays: DayProps[] = days!.map((day) => ({
        ...day,
        timeSlots: day.timeSlots.filter((timeslot) => timeslot.available === true),
    }));
    return packagedDays;
};


    const toggleTimeUnit = (unitTime : Dayjs) => {
        const unitDayIndex : number = getTimeUnitDayIndex(unitTime);
        const timeUnitIndex = getTimeUnitSlotIndex(days![unitDayIndex], unitTime);
        let updatedDays = [...days!];
        updatedDays[unitDayIndex].timeSlots[timeUnitIndex].available = !updatedDays[unitDayIndex].timeSlots[timeUnitIndex].available;
        setDays(updatedDays);
    }

    const getTimeUnitDayIndex = (unitTime : Dayjs) : number => {
        let unitDayIndex : number = 0;
        for(let i = 0; i < days!.length; ++i) {
            if(unitTime.isSame(days![i].date, 'day')) {
                unitDayIndex = i;
                break;
            }
        } 
        return unitDayIndex;
    }

    const getTimeUnitSlotIndex = (day : DayProps, unitTime : Dayjs) => {
        let index : number = 0;
        for(let i = 0; i < day.timeSlots.length; ++i)  {
            if(unitTime.isSame(day.timeSlots[i].time, 'hour')) {
                index = i;
            }
        }
        return index;
    }

    const initializeDates = (dateIn? : Dayjs) => {
        let date : Dayjs = dateIn ? dateIn : dayjs();
        date = date.hour(8).minute(0).second(0).millisecond(0); // sets each days start time to 8am
        let newDates : DayProps[] = [];
        for(let i = 0; i < 7; ++i) {
            // bacially just need to initialize the time slots here...
            const dayTimeUnits = initializeTimeUnits(date);
            const day : DayProps = {
                dayOfWeek : getDayOfWeekString(date.day()),
                dayStr : getDateString(date),
                date : date,
                timeSlots : dayTimeUnits,
            }
            newDates.push(day);
            date = date.add(1, 'days')
        }
        setDays(newDates)
    }

    const initializeTimeUnits = (date : Dayjs) : TimeUnitProps[] => {
        let newUnits : TimeUnitProps[] = [];
        const numTimeUnits = 13;
        for(let i = 0; i < numTimeUnits; ++i) {
            const timeUnit : TimeUnitProps = {
                time : date,
                available : false,
            }
            newUnits.push(timeUnit);
            date = date.add(1,'hours')
        }
        
        return newUnits;
    }


    const getDayOfWeekString = (dayNum : number) : string => {
        const days = ["Sun","Mon","Tue", "Wed", "Thu", "Fri", "Sat"]
        return days[dayNum];
    }

    const getDateString = (date : Dayjs) : string => {
        const monthString : string = getMonthString(date);
        const dayOfMonth : number = date.date();
        const oridinalSuffix = getDateOrdinalSuffix(dayOfMonth);
        return `${monthString} ${dayOfMonth}${oridinalSuffix}`;
    }

    const getMonthString = (date : Dayjs) : string => {
        const months = ["January", "February","March","April","May","June","July","August","September","October","November","December"];
        const monthIndex = date.month();
        return months[monthIndex];
    }

    const getDateOrdinalSuffix = (dayOfMonth : number) : string => {
        if(dayOfMonth >= 11 && dayOfMonth <= 13) return "th"
        const modulus = dayOfMonth % 10;
        switch(modulus) {
            case 1:
                return "st";
            case 2: 
                return "nd";
            case 3: return "rd"
        }
        return "th";
    }

    return {
        initializeDates,
        days,
        getCalendarContainerHeight,
        getDayOfWeekString,
        toggleTimeUnit,
        packageDays
    }
}

export default useCalendarContainer;