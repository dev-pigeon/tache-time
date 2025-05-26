import {renderHook, act} from "@testing-library/react";
import useCalendarContainer from "../hooks/useCalendarContainer";

describe("initialize dates works as expected", () => {
    

    test("correctly outputs all 'th' dates", () => {
        const calendarContainerHook = renderHook(() => useCalendarContainer()).result;
        const expected = ["May 10th", "May 11th", "May 12th", "May 13th", "May 14th", "May 15th", "May 16th"];
        const date = new Date(2025, 4, 10);
        act(() => {
            calendarContainerHook.current.initializeDates(date)
        })
         expect(calendarContainerHook.current.dates).toBeDefined()
        for(let i = 0; i < expected.length; ++i) {
            expect(calendarContainerHook.current.dates![i]).toBe(expected[i])
        }
    })

    test("can properly set `nd` `st` and `rd` dates", () => {
        const calendarContainerHook = renderHook(() => useCalendarContainer()).result;
        const expected = ["May 1st", "May 2nd", "May 3rd", "May 4th", "May 5th", "May 6th", "May 7th"];
        const firstDate = new Date(2025, 4, 1);
        act(() => {
            calendarContainerHook.current.initializeDates(firstDate)
        })
         expect(calendarContainerHook.current.dates).toBeDefined()
        for(let i = 0; i < expected.length; ++i) {
            expect(calendarContainerHook.current.dates![i]).toBe(expected[i])
        }
    })
})