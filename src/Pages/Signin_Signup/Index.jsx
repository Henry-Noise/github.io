/* eslint-disable no-undef */
import React from "react";
import { Outlet } from "react-router-dom";
import "./Css/index.css";
import img from "./Image/Isolation_Mode.png";
import img2 from "./Image/Layer_1.png";
import ImageLayout from './Components/ImageLayouts.jsx';
import { useLocation } from "react-router-dom";
const Signinup = () => {
  const location = useLocation();
  return (
    <>
    {/* <div className="no-responsive">
      <p>Chưa hỗ trợ cho điện thoại đâu, chúng tôi sẽ update sau.</p>
    </div>
      <div className="grid-container login">
        <div className="modal-Sign">
          <Outlet />
          <ImageLayout
            img={location.pathname === "/login" ? img : img2}
            children="chat with each other anytime, anywhere"
            customStyle="text"
            classname="grid-item"
          />
        </div>
      </div> */}
      <div class="landscape">
        <div class="mountain"></div>
        <div class="mountain mountain-2"></div>
        <div class="mountain mountain-3"></div>
        <div class="sun-container sun-container-1">
        </div>
        <div class="sun-container">
          <div class="sun">
           
          </div>
          <div >
            <div className="mainnn">
              <input type="checkbox" id="chk" aria-hidden="true" />
              <div className="signup">
              </div>
              <div className="login">
                <form>
                  <label htmlFor="chk" aria-hidden="true">
                    Login
                  </label>
                  <input className="inputEmaill" type="email" name="email" placeholder="Email" required="" />
                  <input className="inputPsww" type="password" name="pswd" placeholder="Password" required="" />
                  <button>Login</button>
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
