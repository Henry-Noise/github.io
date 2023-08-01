/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Css/index.css";
import InputComponents from "./Components/input";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { message } from "antd";
import * as yup from "yup";
import { getData } from "./Services/index";
const Signinup = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [Users, setUsers] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState("");
  const key = "updatable";

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const navigate = useNavigate();
  useEffect(() => {
    getData().then(async (data) => {
      setUsers(data)
    })
  }, []);
  console.log("", Users);

  //yup
  const schema = yup
    .object({
      password: yup
        .string()
        .required("Please enter a password")
        .matches(/^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/, "Password without accents")
        .min(6, "Enter more than 6 characters"),
      username: yup
        .string()
        .required("Please enter a username")
        .matches(/^[a-zA-Z0-9._]+$/, "Username without accents")
        .min(6, "Enter more than 6 characters"),
    })
    .required();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: "all", resolver: yupResolver(schema) });
  const changeBoder = (e) => {
    setValue(e.target.value);
  };
  const changeBoder2 = (e) => {
    setIsValid(e.target.value);
  };
  const onSubmit = (values) => {
    const user = Users.find((item) => item.username === values.username);
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    setTimeout(() => {
      if (!user) {
        messageApi.open({
          key,
          type: "warning",
          content:
            "Oops! Account not found please register or create a new account!",
          duration: 2,
        });
      } else {
        if (user.password !== values.password) {
          messageApi.open({
            key,
            type: "warning",
            content: "Oops! Password please try again!",
            duration: 2,
          });
        } else {
          messageApi.open({
            key,
            type: "success",
            content: "Sign In Successfully",
            duration: 2,
            onClose: () => {
              navigate("/");
            },
          });
          localStorage.setItem("ID", user.id);
        }
      }
    }, 1500);
  };
  return (
    <>
      {contextHolder}
      <div className="landscape">
        <div className="mountain"></div>
        <div className="mountain mountain-2"></div>
        <div className="mountain mountain-3"></div>
        <div className="sun-container sun-container-1">
        </div>
        <div class="sun-container">
          <div class="sun">
          </div>
          <div >
            <div className="mainnn">
              <input type="checkbox" id="chk" aria-hidden="false" />
              <div className="signup">
              </div>
              <div className="login">
                <form onSubmit={handleSubmit(onSubmit)} >
                  <label htmlFor="chk" aria-hidden="false">
                    Login
                  </label>

                  <InputComponents
                    placeholder="Enter your username"
                    customStyle={
                      errors.username
                        ? "passError inputEmaill"
                        : value !== ""
                          ? "pass success inputEmaill"
                          : "pass inputEmaill"
                    }
                    register={{
                      ...register("username"),
                    }}
                    handleChange={changeBoder}
                  />
                  {/* <p className="errorText">{errors.username?.message}</p> */}
                  <InputComponents
                    placeholder="Enter your password"
                    customStyle={
                      errors.password
                        ? "passError inputPsww"
                        : isValid !== ""
                          ? "pass success inputPsww"
                          : "pass inputPsww"
                    }
                    handleChange={changeBoder2}
                    type={passwordShown ? "text" : "password"}
                    register={{
                      ...register("password"),
                    }}
                  />
                  {/* <p className="errorText">{errors.password?.message}</p> */}
                  {/* <FontAwesomeIcon
                    onClick={togglePassword}
                    className="icon eyse"
                    icon={passwordShown ? faEyeSlash : faEye}
                  /> */}
                  <button className="btnLogin">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="cloud"></div>
        <div class="cloud cloud-1"></div>
        <div class="sun-container sun-container-reflection">
          <div class="sun"></div>
        </div>
        <div class="light"></div>
        <div class="light light-1"></div>
        <div class="light light-2"></div>
        <div class="light light-3"></div>
        <div class="light light-4"></div>
        <div class="light light-5"></div>
        <div class="light light-6"></div>
        <div class="light light-7"></div>
        <div class="water"></div>
        <div class="splash"></div>
        <div class="splash delay-1"></div>
        <div class="splash delay-2"></div>
        <div class="splash splash-4 delay-2"></div>
        <div class="splash splash-4 delay-3"></div>
        <div class="splash splash-4 delay-4"></div>
        <div class="splash splash-stone delay-3"></div>
        <div class="splash splash-stone splash-4"></div>
        <div class="splash splash-stone splash-5"></div>
        <div class="lotus lotus-1"></div>
        <div class="lotus lotus-2"></div>
        <div class="lotus lotus-3"></div>
        <div class="front">
          <div class="stone"></div>
          <div class="grass"></div>
          <div class="grass grass-1"></div>
          <div class="grass grass-2"></div>
          <div class="reed"></div>
          <div class="reed reed-1"></div>
        </div>
      </div>
    </>

  );
};

export default Signinup;
