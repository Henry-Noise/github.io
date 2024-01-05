import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Layouts/homepage/HomePage";
import Signinup from "./Pages/SignIn/Index";

import Newsfeeds from "./Pages/Newsfeeds";

import PrivateRouter from "./Components/CheckLogin/checklogin";
import PersonalInformation from "./Pages/personal-information";
// import EditProfile from "./Pages/personal-information/EditProfile/EditProfile";
import ModalPost from "./Pages/Newsfeeds/Posts/modal/ModalPost";
import Short from "./Pages/ShortVideo/Short";
import ShortItem from "./Pages/ShortVideo/ShortItem/ShortItem";
import Error404 from "./Pages/Error404/Error404";
import MyCalendar from './Pages/Calendar/MyCalendar';
import Diary from "./Pages/Diary/Diary";
import Yourself from "./Pages/Yourself/Yourself";
import ReviewBook from "./Pages/ReviewBook/ReviewBook";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Signinup />}>
      </Route>
      <Route
        path="/"
        element={
          <PrivateRouter>
            <HomePage />
          </PrivateRouter>
        }
      >
        <Route exact path="/" element={<Newsfeeds />}>
          <Route path="/:idPost" element={<ModalPost />} />
        </Route>

        {/* Cấu hình Route cho ModalPost */}
        <Route path="/Diary" element={<Diary />}>
        </Route>
        <Route path="/Yourself" element={<Yourself />}>
        </Route>
        <Route path="/ReviewBook" element={<ReviewBook />}>
        </Route>
        <Route path="/short" element={<Short />}>
          <Route path="/short/:id" element={<ShortItem />} />
        </Route>
        <Route path="/calendar" element={<MyCalendar />}>
        </Route>
        <Route path="/Profile/:id" element={<PersonalInformation />}>
          <Route
            path="/Profile/:id/:idPost"
            element={<ModalPost />}
          />
        </Route>


      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
