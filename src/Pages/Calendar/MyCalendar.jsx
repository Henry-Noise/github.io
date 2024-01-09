import React, { useState, useRef, useEffect } from "react";
import { formatDate } from "@fullcalendar/core";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { db, storage } from "../../Api/firebase";
import { Calendar } from "@fullcalendar/core";
import viLocale from "@fullcalendar/core/locales/vi";
import "./Css/MyCalendar.css";
import { INITIAL_EVENTS, createEventId } from "./Constant/evenet-utils";
import viLocale2 from "@fullcalendar/core/locales/vi";
import { addDoc, collection, getDocs } from "firebase/firestore";
const MyCalendar = (props) => {
  const currentId = localStorage.getItem("ID");
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [dataEvents,setDataEvents] = useState([]);
  useEffect(() => {
    const getEvents = async () => {
      const eventRef = collection(db, "events");
      const eventSnapshot = await getDocs(eventRef);
      const events = eventSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDataEvents(events);
    };
    getEvents();
  }, []);
  console.log('dataEvents',dataEvents);

  const handleDateSelect = (selectInfo) => {
    let title = prompt("Vui lòng nhập tiêu đề cho sự kiện mới của bạn");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // Xóa lựa chọn ngày

    if (title) {
      const createEvent = collection(db, 'events');
    addDoc(createEvent, {
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        userID:currentId
    })
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
    if (
      alert(
        `Bạn có chắc chắn muốn xóa sự kiện '${clickInfo.event.title}' không?`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events) => {
    // const createEvent = collection(db, 'events');
    // addDoc(createEvent, {
    //     title: events.title,
    //     start: events.start,
    //     end: events.end
    // })
    // setCurrentEvents(events);
    console.log("events", events);
  };

  const renderEventContent = (eventInfo) => {
    console.log('eventInfo12121',eventInfo);

    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
        {/* <b>{eventInfo}</b> */}
      </>
    );
  };
  const renderSidebarEvent = (event) => {
    return (
      <li key={event.id}>
        <b>
          {formatDate(event.start, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </b>
        <i>{event.title}</i>
      </li>
    );
  };
  const renderSidebar = () => {
    return (
      <div className="demo-app-sidebar">
        <div className="demo-app-sidebar-section">
          <h2>Hướng dẫn</h2>
          <ul>
            <li>Chọn các ngày bạn muốn tạo sự kiện mới</li>
            <li>Kéo, thả và điều chỉnh kích thước sự kiện</li>
            <li>Nhấp vào một sự kiện để xóa nó</li>
          </ul>
        </div>
        <div className="demo-app-sidebar-section">
          <h2>Tất cả Sự kiện ({currentEvents.length})</h2>
          <ul>{currentEvents.map(renderSidebarEvent)}</ul>
        </div>
      </div>
    );
  };
  return (
    <div className="wraper-calendar">
      {renderSidebar()}
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          start: "today prev,next",
          center: "",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        locale={viLocale}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={weekendsVisible}
        initialEvents={dataEvents} // Hoặc sử dụng thuộc tính `events` để tải từ nguồn cấp dữ liệu
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
