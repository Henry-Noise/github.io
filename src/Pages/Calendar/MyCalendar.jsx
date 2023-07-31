import React, { useEffect, useRef } from 'react';
import Fullcalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"

import { Calendar } from '@fullcalendar/core';
import viLocale from '@fullcalendar/core/locales/vi';
import "./Css/MyCalendar.css"
const MyCalendar = (props) => {
    return (
        <div className='wraper-calendar'>
            <Fullcalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={"dayGridMonth"}
                headerToolbar={{
                    start: "today prev,next",
                    center: "",
                    end:"dayGridMonth,timeGridWeek,timeGridDay",
                }}
                height={"100vh"}
            />
        </div>
    );
};

export default MyCalendar;
