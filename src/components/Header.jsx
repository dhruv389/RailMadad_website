import React from 'react'
import { Link } from 'react-router-dom'
import icon1 from "../Images/download (2).png"

const Header = () => {
  return (
    <div className="navbar">
    <div className="h-[5rem] gap-10 custom:w-full  flex w-[60%]">
    <Link to="/" className="smj-icon  h-[5rem]   w-[5rem]" >
    <img className="h-full  w-full object-contain " src={icon1} alt=""/>
    </Link>
          
            <div className="rm-icon w-full">
                <h1 className="i-head font-bold text-[3rem] custom:text-[2rem]">RailMadad</h1>
                <p>For Inquiry, Assistance & Grievance Redressal</p>
            </div>
            </div>
            {/* <div className="security w-[30%]">
                <button className="login-btn">
                    <i className="fa-solid fa-phone-volume">139</i>
                </button>
                <p>For Security/Medical Assistance</p>
            </div> */}
            <div className="btns custom:hidden w-[30%] flex gap-10 justify-end ">
                <button className="login-btn" type="submit">Login</button>
                <button className="login-btn" type="submit">Sign Up</button>    
            </div>
        </div>
  )
}

export default Header