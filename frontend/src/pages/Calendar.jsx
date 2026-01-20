import { useState } from "react"; 
import {
    format,
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    isSameMonth,
    isSameDay,
    addMonths,
    subMonths,
    startOfWeek,
    endOfWeek,
    isToday
} from "date-fns";

const task = {
    id: 1,
    title: "Sample Task",
    date: "2026-01-21",
    completed: false
};

const Today = format(new Date(task.date), "dd, MMM yyyy")
console.log("Today Date", Today);
console.log(startOfMonth(new Date("2026-01-21")));
console.log(endOfMonth(new Date("2026-01-21")));

function Calendar() {
    return (
        <>
           <p>
              Today Date:
              <hr></hr>
              {Today}
           </p>
        </>
    )
}

export default Calendar;