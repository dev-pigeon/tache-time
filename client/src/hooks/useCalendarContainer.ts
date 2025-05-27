import { useState } from "react"

interface useCalendarContainerReturnProps {
    initializeDates : (dateIn? : Date) => void;
    dates : string[] | undefined;
    getCalendarContainerHeight : () => number;
}

export const getCalendarContainerHeight = () : number => {
    return 0;
}

const useCalendarContainer = () : useCalendarContainerReturnProps => {
    const [dates, setDates] = useState<string[] | undefined>(undefined)

    const initializeDates = (dateIn? : Date) => {
        let date : Date = dateIn ? dateIn : new Date();
        let newDates : string[] = [];
        for(let i = 0; i < 7; ++i) {
            const dateString = getDateString(date);
            newDates.push(dateString);
            date.setDate(date.getDate() + 1)
        }
        setDates(newDates);
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
        getCalendarContainerHeight
    }
}

export default useCalendarContainer;