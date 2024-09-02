import React, { useState,useEffect } from 'react';
import { Cloudinary } from 'cloudinary-core';
import { BsStars } from "react-icons/bs";

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import station from "../Stations.json"


function Enquiry() {

    const [stationNames, setStationNames] = useState([]);

    useEffect(() => {
      // Extracting station names from the JSON data
      const names = station.stations.map(station => station.stnName);
      setStationNames(names);
    }, []);
   

    return (
        <div className='w-full h-full flex flex-col gap-2 justify-start overflow-y-scroll  items-center py-8 '>
        <div className="font-bold text-lg">Complaint Form</div>
        <div className="w-[60%] text-sm font-semibold flex justify-start mt-4 flex-col gap-1">
    <p>Train No:</p>
        <input type="text" placeholder='e.g., 12345' className='h-[3rem] py-3 px-2 w-full hover:border-2 hover:border-black rounded-xl border' />
        </div>

        <div className="w-[60%] mt-6 text-sm font-semibold flex justify-start flex-col gap-1">
    <p>Train Class:</p>
        <input type="text" placeholder=' e.g., 1A, 2A , 3A' className='h-[3rem] py-3 px-2 w-full hover:border-2 hover:border-black rounded-xl border' />
        </div>



     

        <div className="w-[60%] mt-6 text-sm font-semibold flex justify-start flex-col gap-1">
    <p>Station Name:</p>
    <Autocomplete
      disablePortal
      options={stationNames}
      sx={{ width: "100%" , marginTop: '7px' ,borderRadius:"10px" , fontFamily:"Poppins" , fontSize:"16px"}}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Station Name"
          sx={{
            '& .MuiInputBase-root': {
              height: '50px', // Adjust the height here
              borderRadius: '10px', // Adjust the border radius here
           
              
              // Smooth transition
            }
            
          }}
        />
      )}
    />
        </div>

        <div class="flex items-center  justify-start  w-[60%] mt-6 flex-col">
        <h1 className='w-full py-3 text-sm font-semibold'>Choose File From Device</h1>
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-100 dark:bg-gray-100 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-200 ">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 


<div className="w-[60%] mt-6 text-sm font-semibold flex justify-start flex-col gap-1">
    <p>Description:</p>
  
        <textarea name="" id="" cols="30" rows="4" className='border  hover:border-2 hover:border-black  rounded-2xl p-3'></textarea>
        </div>


      <button className='w-[60%] mt-[1rem] py-3 flex justify-center items-center gap-3  rounded-2xl text-sm font-bold bg-black text-white '>Submit <BsStars className='text-white' size={"25px"}/></button>

           
        </div>
    );
}

export default Enquiry;
