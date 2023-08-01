import React, { useState, useRef } from 'react';
import { formatDate } from '@fullcalendar/core';
import Fullcalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"

import { Calendar } from '@fullcalendar/core';
import viLocale from '@fullcalendar/core/locales/vi';
import "./Css/MyCalendar.css"
import { INITIAL_EVENTS, createEventId } from "./Constant/evenet-utils"
const MyCalendar = (props) => {
    const [weekendsVisible, setWeekendsVisible] = useState(true);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleWeekendsToggle = () => {
        setWeekendsVisible(!weekendsVisible);
    };
    const handleDateSelect = (selectInfo) => {
        let title = prompt('Vui lòng nhập tiêu đề cho sự kiện mới của bạn');
        let calendarApi = selectInfo.view.calendar;

        calendarApi.unselect(); // Xóa lựa chọn ngày

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
            });
        }
    };
    const handleEventClick = (clickInfo) => {
        if (alert(`Bạn có chắc chắn muốn xóa sự kiện '${clickInfo.event.title}' không?`)) {
            clickInfo.event.remove();
        }
    };

    const handleEvents = (events) => {
        setCurrentEvents(events);
    };

    const renderEventContent = (eventInfo) => {
        return (
            <>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title}</i>
            </>
        );
    };
    const renderSidebarEvent = (event) => {
        return (
            <li key={event.id}>
                <b>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
                <i>{event.title}</i>
            </li>
        );
    };
    const renderSidebar = () => {
        return (
            <div className='demo-app-sidebar'>
                <div className='demo-app-sidebar-section'>
                    <h2>Hướng dẫn</h2>
                    <ul>
                        <li>Chọn các ngày bạn muốn tạo sự kiện mới</li>
                        <li>Kéo, thả và điều chỉnh kích thước sự kiện</li>
                        <li>Nhấp vào một sự kiện để xóa nó</li>
                    </ul>
                </div>
                <div className='demo-app-sidebar-section'>
                    <label>
                        <input
                            type='checkbox'
                            checked={weekendsVisible}
                            onChange={handleWeekendsToggle}
                        />
                        Hiển thị cuối tuần
                    </label>
                </div>
                <div className='demo-app-sidebar-section'>
                    <h2>Tất cả Sự kiện ({currentEvents.length})</h2>
                    <ul>{currentEvents.map(renderSidebarEvent)}</ul>
                </div>
            </div>
        );
    };
    return (
        <div className='wraper-calendar'>
            {renderSidebar()}
            <Fullcalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    start: "today prev,next",
                    center: "",
                    end:"dayGridMonth,timeGridWeek,timeGridDay",
                }}
                initialView='dayGridMonth'
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={weekendsVisible}
                initialEvents={INITIAL_EVENTS} // Hoặc sử dụng thuộc tính `events` để tải từ nguồn cấp dữ liệu
                select={handleDateSelect}
                eventContent={renderEventContent} // Hàm tùy chỉnh hiển thị sự kiện
                eventClick={handleEventClick}
                eventsSet={handleEvents} // Được gọi sau khi sự kiện được khởi tạo/thêm/sửa/xóa
          /* Bạn có thể cập nhật cơ sở dữ liệu từ xa khi các sự kiện này xảy ra:
      
                  eventAdd={function(){}}
      
                  eventChange={function(){}}
      
                  eventRemove={function(){}}
      
                  */
                height={"100vh"}
            />
        </div>
    );
};

export default MyCalendar;
