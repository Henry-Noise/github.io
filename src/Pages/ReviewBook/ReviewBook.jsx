import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../Api/firebase";
import UserItem from "../Newsfeeds/Components/UserItem";
import CreatePost from "../Newsfeeds/CreatePost/Createpost";
import Posts from "../Newsfeeds/Posts/Posts";
import { getDocumentUser } from "../Newsfeeds/services/services";

const ReviewBook = () => {
  const currentId = localStorage.getItem("ID");
  const [dataPostAPI, setDataPostAPI] = useState([]);
  const [UserCurren, setUserCurren] = useState([]);
  const [Users, setUsers] = useState([]);
  const [userGet, setUserGet] = useState({});
  useEffect(() => {
    getDocumentUser().then((data) => {
      setUserGet(data.find((item) => item.id === currentId));
    });
    const postsCol = collection(db, "postItem");

    const q = query(postsCol, orderBy("createdAt", "desc"));
    onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        timeElapsed: doc.data().createdAt && moment(doc.data().createdAt.toDate()).fromNow()
      }));
      const dataReviewBook = data.filter((item) => item.typePost === 'ReviewBook');
      setDataPostAPI(dataReviewBook);
    });
    setInterval(() => {
      const q = query(postsCol, orderBy("createdAt", "desc"));
      onSnapshot(q, (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt.toDate(),
          timeElapsed: moment(doc.data().createdAt.toDate()).fromNow()
        }));
        const dataReviewBook = data.filter((item) => item.typePost === 'ReviewBook');
      setDataPostAPI(dataReviewBook);
      });
    }, 60000);
  }, []);
  const User = () => {
    onSnapshot(doc(db, "users", currentId), (doc) => {
      setUserCurren(doc.data());
    });
  };
  useEffect(() => {
    getDocumentUser().then((data) => {
      setUsers(data);
    });

    User();
  }, []);
  return (
    <>
      <div id="newsfeed">
        <div className="flex">
          <div className="posts ">
            <div className="al-center">
              <div className="gutter-row">
                <CreatePost
                  user={userGet}
                  avatar={userGet === undefined ? "" : userGet.avatarUrl}
                  typePost="ReviewBook"
                  messageCreatPost="How do you feel about this book?"
                />
              </div>
            </div>

            <div>
              <div className="gutter-row">
                <ul>
                  {dataPostAPI.map((e) => (
                    <li key={e.id}>
                      <Posts
                        userSuggestt={userGet?.avatarUrl}
                        id={e.id}
                        data={e}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewBook;
