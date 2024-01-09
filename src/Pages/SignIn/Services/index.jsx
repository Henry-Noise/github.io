import {
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../../Api/firebase";
import moment from "moment";

export const FormatDate = (props) => {
  return moment(props.toDate(), "YYYYMMDD").fromNow();
};

export const getData = async () => {
  const usersCol = collection(db, "users");
  const snapshot = await getDocs(usersCol);
  const Users = snapshot.docs.map((doc) => ({
    id: doc.id,
    email: doc.data().email,
    username: doc.data().username,
    password: doc.data().password,
    avatarUrl: doc.data().avatarUrl,
    bio: doc.data().bio,
    block: doc.data().block,
    language:doc.data().language,
  }));
  return Users
};


