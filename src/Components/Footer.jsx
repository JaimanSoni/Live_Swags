import React from 'react'
import logo from "../assets/logo.png"

export default function Footer() {
  return (
    <div>
      <div className="w-full py-[20px] h-fit min-h-[100px] text-white bg-[#000000] mt-[50px] flex flex-col md:flex-row justify-between items-center px-[50px]">
                <div>
                    <a href="https://ieee-sou-sb.github.io/AI_Conclave-Ahmedabad_2024/">
                        {/* <Image src={logo} alt="" className="w-[210px]" /> */}
                        <img src={logo} className='w-[200px]' alt="" />
                    </a>
                </div>
                <div>
                    <p className="text-center mt-[30px] md:mt-[0]">© Copyright 2024 GDSC SOU and IEEE SOU SB</p>
                </div>
            </div>
    </div>
  )
}
