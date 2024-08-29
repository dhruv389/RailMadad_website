import React from 'react'
import DetailCard3 from "../components/DetailCard3";
import { Link } from "react-router-dom";
import { useState } from 'react';

const PendingStaff = () => {

    const [isDialogOpen, setIsDialogOpen] = useState(false);



    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);


    const products = [
        {
          id: 1,
          image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg",
          name: "Nike Air Force",
          category: "Food",
          user: "John Doe",
          date: "2021-06-20",
          pending: 50,
          status: "Pending",
          price: "$250",
          rating: 4.8,
        },
        {
          id: 2,
          image: "nike-react.png",
          name: "Nike React",
          category: "Water-supply",
          user: "dev joshi",
          date: "2021-06-20",
          pending: 50,
          status: "Pending",
          price: "$200",
          rating: 4.8,
        },
        // Add more products here...
      ];
  return (
    <table className="w-full mt-6 text-xs bg-white shadow-md rounded-lg">
     <DetailCard3
        isOpen={isDialogOpen}
        onClose={closeDialog}
        title="Success"
        text="Your action was successful!"
        icon="success"
      />
    <thead>
      <tr className="text-left bg-gray-100">
        <th className="p-3">No.</th>
        <th className="p-3">Complaint</th>
        <th className="p-3">Category</th>
        <th className="p-3">User</th>
        <th className="p-3">Date</th>
        {/* <th className="p-3">Pending</th> */}
        <th className="p-3">Status</th>
        {/* <th className="p-3">Price</th> */}
        <th className="p-3">Actions</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product, index) => (
        <tr key={product.id} className="border-b" onClick={openDialog}>
          <td className="p-3">{index + 1}</td>
          <td className="p-3 flex items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-10 h-10 mr-3 rounded-full"
            />
            {product.name}
          </td>
          <td className="p-3">{product.category}</td>
          <td className="p-3">{product.user}</td>
          <td className="p-3">{product.date}</td>
          {/* <td className="p-3">{product.pending}</td> */}
          <td className="p-3">
            <span
              className={`px-3 py-1 rounded-full text-white text-sm ${
                product.status === "Available"
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            >
              {product.status}
            </span>
          </td>
          {/* <td className="p-3">{product.price}</td> */}
          <td className="p-3 flex items-center gap-2">
            {/* {product.rating}{" "} */}
           <Link to="#" className="px-2 py-1 rounded-full text-white text-sm bg-blue-500 ">View</Link>
           <Link to="#" className="bg-purple-700 text-sm px-2 py-1 rounded-full text-white ">Complete</Link>
            {/* <span className="text-yellow-500 ml-2">&#9733;</span> */}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default PendingStaff