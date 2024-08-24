// import React from 'react'

function Footer() {
  return (
    <footer className="w-full absolute bg-railmadad flex justify-between px-[7em] py-4 bottom-0 text-white text-[14px]">
      <div>
        <p>Copyright &copy;2019 RAILMADAD. All Rights Reserved.</p>
      </div>
      <div >
        <a className="ml-2 mr-1 hover:underline" href="#">Home</a> |
        <a className="ml-2 mr-1 hover:underline" href="#">FAQs</a> |
        <a className="ml-2 mr-1 hover:underline" href="#">Railway Admin Login</a> |
        <a className="ml-2 mr-1 hover:underline" href="#">MIS Report Login</a>
      </div>
    </footer>
  )
}

export default Footer