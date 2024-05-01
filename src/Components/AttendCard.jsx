import React from 'react'
import { useRef, useState } from 'react';
import { exportComponentAsPNG } from "react-component-export-image"
import { Document, Page } from "@react-pdf/renderer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


export default function AttendCard() {
    const componentRef = useRef();

    const [previewSrc, setPreviewSrc] = useState("");

    const previewImage = (input) => {
        if (typeof window !== "undefined") {
            if (input.files && input.files[0]) {
                const reader = new FileReader();

                reader.onload = (e) => {
                    setPreviewSrc(e.target.result);
                };
                reader.readAsDataURL(input.files[0]);
            }
        }
    };
    const handleDownloadImage = async () => {
        const element = document.getElementById('image'),
            canvas = await html2canvas(element),
            data = canvas.toDataURL('image/jpg'),
            link = document.createElement('a');

        link.href = data;
        link.download = 'downloaded-image.jpg';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className=''>
            <div className="text-center my-[30px] font-semibold px-[30px]  ">
                <h1 className=" text-[28px] md:text-[45px] text-[#252525] tracking-[0.5px] mt-[40px] leading-[38px] md:leading-[45px] font-[Merriweather]">Digital Swag</h1>
                <p className=" text-[19px] text-[#4c4c4c] tracking-[0.5px] m-auto mt-[30px] mb-[50px] w-[100%] sm:w-[80%]">Once you've signed up, you're all set for Ai Conclave - Ahmedabad 2024! Just add your name and picture to get your special badge. Then, download it and share it online using #AiConclaveAhmedabad2024 and tagging @gdsc.sou @silveroakuni @ieee_silveroakuni</p>
            </div>
            <div className="  m-auto w-[85%] flex flex-col gap-[20px] md:flex-row items-center gap-x-[15%] justify-center">
                <div className=" absolute -z-50 opacity-0 ">
                    <div className="my_container_1" id='image' ref={componentRef}>
                        <img className='img_con' style={{ backgroundImage: `url(${previewSrc})` }} alt=""/>
                    </div>
                </div>
                <div className="my_container"  >
                    <img src="" className='img_con_1'  style={{ backgroundImage: `url(${previewSrc})` }}  alt="" />
                </div>
                <div className="flex flex-row md:flex-col justify-center gap-[10px] md:gap-[30px] items-center">
                    <div className=" text-center flex justify-center items-center overflow-hidden relative h-[45px] md:h-[55px] cursor-pointer w-[150px] md:w-[220px] bg-[#0181FE] text-white text-[18px] md:text-[21px] rounded-[10px] ">
                        <p>
                            Upload Image
                        </p>
                        <input
                            type="file"
                            id="input_img"
                            onChange={(e) => previewImage(e.target)}
                            title="image"
                            className=" cursor-pointer h-[100%] absolute top-0 right-0 opacity-0"

                        />
                    </div>

                    <button
                        className="text-center flex justify-center items-center overflow-hidden relative h-[45px] md:h-[55px] cursor-pointer w-[170px] md:w-[220px] bg-[#0181FE] text-white text-[18px] md:text-[21px] rounded-[10px]"
                        onClick={() => {
                            handleDownloadImage()
                        }}
                    >
                        Download as PNG
                    </button>
                </div>
            </div>
                <div className=' text-center mt-[50px] text-red-700'>* We respect your privacy and are not storing your pictures on our servers.</div>
        </div>
    )
}
