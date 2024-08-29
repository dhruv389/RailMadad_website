import React, { useState } from "react";



const  DetailCard = ({ isOpen, onClose, title, text, icon }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
        <div className="relative max-w-[70vw]   w-full max-h-[85vh] sm:mx-0 text-center  mx-auto p-6 bg-white shadow-lg rounded-lg">
      
      <div className="flex justify-between h-full  items-start ">
        {/* Left side (Text Details) */}
        <div className="w-[60%] ">
          <h1 className="text-2xl font-bold">Puffer Jacket With Pocket Detail</h1>
          <p className="text-xl font-semibold text-gray-600 mt-2">price <span className="text-black">$47.55</span></p>
          <p className="text-sm font-semibold text-green-500 mt-1">Active</p>

          <div className="mt-6 flex gap-7 justify-start items-start">
            <p className="text-sm font-bold text-gray-600">Product UD</p>
            <p className=" text-sm">PDT-10022024-007</p>
          </div>

          <div className="mt-4 flex gap-7 justify-start items-start">
            <p className="text-sm font-bold text-gray-600">Name Product</p>
            <p className="text-sm">Puffer Jacket With Pocket Detail</p>
          </div>

          <div className="mt-4 flex gap-7 justify-start items-start">
            <p className="text-sm font-bold text-gray-600">Status</p>
            <p className="text-green-500">Active</p>
          </div>

          <div className="mt-4 flex gap-7 justify-start items-start">
            <p className="text-sm font-bold text-gray-600">Category</p>
            <p className="text-sm">Jacket</p>
          </div>

          <div className="mt-4 flex gap-7 justify-start items-start">
            <p className="text-sm font-bold text-gray-600">Description</p>
            <p className="text-start text-sm">
              Cropped puffer jacket made of technical fabric. High neck and long sleeves. Flap pocket at the chest and in-seam side pockets at the hip. Inside pocket detail. Hem with elastic interior. Zip-up front.
            </p>
          </div>

          <div className="mt-4  flex gap-7 justify-start items-start">
            <p className="text-sm font-bold text-gray-600">Unite Price</p>
            <p className="text-sm">$47.55</p>
          </div>

          <div className="mt-4  flex gap-7 justify-start items-start">
            <p className="text-sm font-bold text-gray-600">Stock</p>
            <p className="text-sm">99</p>
          </div>

          <div className="mt-4 flex gap-7 justify-start items-start">
            <p className="text-sm font-bold text-gray-600">Discount</p>
            <p className="text-sm">10%</p>
          </div>

          <div className="mt-4 flex gap-7 justify-start items-start">
            <p className="text-sm font-bold text-gray-600">Discount Type</p>
            <p className="text-sm">Chinese New Year Discount</p>
          </div>

          <div className="mt-4 flex gap-7 justify-start items-start">
            <p className="text-sm font-bold text-gray-600">Size</p>
            <p className="text-sm">S, M, XL</p>
          </div>

          <div className="mt-4 flex gap-7 justify-start items-start">
            <p className="text-sm font-bold text-gray-600">Gender</p>
            <p className="text-sm">Woman</p>
          </div>
        </div>

        {/* Right side (Image Upload and Actions) */}
        <div className="w-[40%] flex flex-col h-full  items-center">
          <div className="bg-gray-200 p-4 w-full   flex justify-center flex-col items-center  rounded-lg mb-2">
            <img className="w-[90%] h-[60%] object-cover rounded-lg" src="https://via.placeholder.com/150" alt="Puffer Jacket" />
            <div className="flex mt-4 space-x-2">
              <img className="w-12 h-12 object-cover rounded-lg" src="https://via.placeholder.com/50" alt="Puffer Jacket" />
              <img className="w-12 h-12 object-cover rounded-lg" src="https://via.placeholder.com/50" alt="Puffer Jacket" />
              <img className="w-12 h-12 object-cover rounded-lg" src="https://via.placeholder.com/50" alt="Puffer Jacket" />
              <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-lg">
                <span className="text-gray-500 text-lg">+</span>
              </div>
            </div>
          </div>

          <div className="flex mt-4 w-full space-x-2 flex-col">
           <input type="text" name="" id="" className="rounded-2xl px-7 py-2 hover:border-blue-300 hover:border-2 bg-gray-200" placeholder="Add comment" />
           <div className="w-full mt-6 flex gap-3">
           <button className="flex-1 bg-red-500 text-white py-2 text-sm rounded-lg">Delete Complaint</button>
           <button className="flex-1 bg-green-500 text-white py-2  text-sm  rounded-lg">Send Complaint  </button>
           </div>
         
          </div>
        </div>
      </div>
    

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={onClose}
          >
            OK
          </button>
        </div>





     
      </div>
    );
  };
  export default DetailCard;