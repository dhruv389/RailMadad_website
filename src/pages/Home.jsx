import React from 'react'
import classes from './Home.module.css'
import  train from "../Images/train4.png"
import i1 from "../Images/download.png"
import { Link } from 'react-router-dom'


const Home = () => {
  return (
   
		<div className={`flex min-h-[80vh] flex-col w-screen justify-center items-center `}>
		 
		<div className="flex  text-xs border w-[65%] mt-10  pt-7 rounded-[2rem]  justify-center  custom:overflow-x-scroll  gap-12 items-start">
               <div className="flex flex-col justify-center text-center items-center  w-[4rem] h-[2re] gap-2">
				<img src={i1} className="h-[3rem] w-[3rem]"   alt="" />
				<p>Ticket Booking</p>
			   </div>
			   <div className="flex flex-col justify-center items-center  text-center w-[4rem] h-[2re] gap-2">
				<img src={i1} className="h-[3rem] w-[3rem]"   alt="" />
				<p>Train Enquiry</p>
			   </div>
			   <div className="flex flex-col justify-center items-center text-center w-[4rem] h-[2re] gap-2">
				<img src={i1} className="h-[3rem] w-[3rem]"   alt="" />
				<p>Reservation Enquiry</p>
			   </div>
			   <div className="flex flex-col justify-center items-center text-center w-[4rem] h-[2re] gap-2">
				<img src={i1} className="h-[3rem] w-[3rem]"   alt="" />
				<p>Indian Railways</p>
			   </div>
			   <div className="flex flex-col justify-center items-center text-center w-[4rem] h-[2re] gap-2">
				<img src={i1} className="h-[3rem] w-[3rem]"   alt="" />
				<p>UTS Ticketing</p>
			   </div>
			   <div className="flex flex-col justify-center items-center text-center w-[4rem] h-[2re] gap-2">
				<img src={i1} className="h-[3rem] w-[3rem]"   alt="" />
				<p>Enqiry</p>
			   </div>
			   <div className="flex flex-col justify-center items-center text-center w-[4rem] h-[2re] gap-2">
				<img src={i1} className="h-[3rem] w-[3rem]"   alt="" />
				<p>Railway Parcel Website</p>
			   </div>
			   <div className="flex flex-col justify-center items-center text-center w-[4rem] h-[2re] gap-2">
				<img src={i1} className="h-[3rem] w-[3rem]"   alt="" />
				<p>Freight Business</p>
			   </div>
			</div>
		 <div className="flex min-h-[80vh] custom:flex-col-reverse  w-screen justify-center items-start pt-14">
			<div className="w-[45%] gap-3 custom:w-[100%] custom:text-center custom:items-center mt-10  h-[100%]  flex items-start justify-center flex-col">
		
				<h1 className='text-[3rem] font-bold  '>Welcome to  RailMadad</h1>
				<p className='w-[70%]'>Your Trusted Partner in Railway Journeys – Enquire, Report, Resolve with Rail Madad.</p>
				<Link to="/dashboard" className='w-[70%] bg-black rounded-xl flex justify-center items-center mt-8 text-white h-[3rem]'>
 Get started
			 </Link>

			</div>

			
		<div className="w-[45%] custom:w-[100%] flex justify-center items-center  h-[80%]">
				<img src={train} alt="" className='h-full  object-contain w-full ' />
			</div>
	
			
			</div>
			
		</div>
	
  )
}

export default Home