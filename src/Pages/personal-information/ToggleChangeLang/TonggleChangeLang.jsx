import React, { useEffect } from "react";
import { useState } from "react";
import "./TonggleChangeLang.css";
import { collection, onSnapshot,doc } from 'firebase/firestore';
import { db } from "../../../Api/firebase";
const TonggleChangeLang = () => {
    const [languageUser,setLanguageUser] = useState();
    const currentId = localStorage.getItem("ID");


    const userLang = ()=>{
        onSnapshot(doc(db, "users", currentId), (doc) => {
            setLanguageUser(doc.data().language);
        })
    }
    useEffect(()=>{
        userLang();
    },[])

    const changeLang=()=>{
      console.log('nqhuy20',languageUser);
    }
  return (
    <div className="buttonChangeLang">
      <input
        id="language-toggle"
        className="check-toggleLang check-toggle-round-flat"
        type="checkbox"
      ></input>
      <label for="language-toggle" onClick={changeLang}></label>
      <span className="buttonChangeLang--on">VI</span>
      <span className="buttonChangeLang--off">EN</span>
    </div>
  );
};

export default TonggleChangeLang;
