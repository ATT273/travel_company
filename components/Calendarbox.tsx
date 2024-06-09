import React from 'react'
import { DatePicker } from "@nextui-org/date-picker";

const Calendarbox = () => {
    return (
        <div className='calendar-container'>
            <div className="flex gap-x-4">
                <DatePicker label="Date" className="max-w-[300px]" />
            </div>
        </div>
    )
}

export default Calendarbox