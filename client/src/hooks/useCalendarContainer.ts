import { useState } from "react"
import { DateLabelProps } from "../components/calendar/DateLabel";

interface useCalendarContainerReturnProps {
    initializeDates : (dateIn? : Date) => void;
    dates : DateLabelProps[] | undefined;
    getCalendarContainerHeight : () => number;
    getDayOfWeekString : (dayNum : number) => string;
}

export const getCalendarContainerHeight = () : number => {
    return Math.round(window.innerHeight * .85);
}

const useCalendarContainer = () : useCalendarContainerReturnProps => {
    const [dates, setDates] = useState<DateLabelProps[] | undefined>(undefined)

    const initializeDates = (dateIn? : Date) => {
        let date : Date = dateIn ? dateIn : new Date();
        let newDates : DateLabelProps[] = [];
        for(let i = 0; i < 7; ++i) {
            const dateString = getDateString(date);
            const dayOfWeek = getDayOfWeekString(date.getDay());
            const dateLabel : DateLabelProps = {
                date : dateString,
                dayOfWeek : dayOfWeek
            }
            newDates.push(dateLabel);
            date.setDate(date.getDate() + 1)
        }
        setDates(newDates)
    }

    const getDayOfWeekString = (dayNum : number) : string => {
        const days = ["Sun","Mon","Tue", "Wed", "Thu", "Fri", "Sat"]
        return days[dayNum];
    }

    const getDateString = (date : Date) : string => {
        const monthString : string = getMonthString(date);
        const dayOfMonth : number = date.getDate();
        const oridinalSuffix = getDateOrdinalSuffix(dayOfMonth);
        return `${monthString} ${dayOfMonth}${oridinalSuffix}`;
    }

    const getMonthString = (date : Date) : string => {
        const months = ["January", "February","March","April","May","June","July","August","September","October","November","December"];
        const monthIndex = date.getMonth();
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
        dates,
        getCalendarContainerHeight,
        getDayOfWeekString,
    }
}

export default useCalendarContainer;