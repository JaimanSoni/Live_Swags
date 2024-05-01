import React from 'react'
import logo from "../assets/logo.png"

export default function Navbar() {
  return (
    <div>
      <div className="w-full h-[100px] items-center pl-[15px] sm:pl-[30px] pr-[20px] sm:pr-[50px] bg-[#000000] text-white flex justify-between ">
                <div>
                    <a href="https://ieee-sou-sb.github.io/AI_Conclave-Ahmedabad_2024/">

                    {/* <Image className="w-[200px]" src={logo} alt=""/> */}
                    <img src={logo} className='w-[200px]' alt="" />
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://docs.google.com/forms/u/5/d/e/1FAIpQLSeNwGu-RfVB2PaOEcK9J38GHEt9YnbGUSdraC5IP_HoQMKY4g/viewform" className="flex w-[120px] sm:w-[150px] justify-center items-center cursor-pointer rounded-[10px] h-[40px] bg-[#530037]">Buy Ticket</a>
                </div>
            </div>
    </div>
  )
}
