import Image from "next/image";
import design1 from "../../public/assets/flower.png";
import picture from "../../public/assets/flower2.png";
import design from "../../public/assets/flower3.jpg";
import image from "../../public/assets/flower4.jpg";
import logo from "../../public/assets/flower5.png";
import React from 'react';
import { Montserrat } from "next/font/google";
const mons = Montserrat({ weight: "500", subsets: ["latin"] });

 export default function Home(){
    return (
      <main className="grid grid-cols-3 gap-x-2 gap-y-2 ">
        <div className='h-96 col-span-2 rounded-md ml-8 mr-1 mt-4 border-black 
      border-2'>
          <Image src={design1} alt="" className="w-full h-full "/>
      </div>    
        <div className='min-h-64 row-span-2 rounded-md ml-1 mr-6 mt-4 border-black
      border-2'>
          <Image src={picture} alt="" className="w-full h-full " />
      </div>
          <div className='min-h-64 row-span-3 rounded-md ml-8 mr-1 mb-6 border-black
      border-2 '>
          <Image src={design} alt="" className="h-full w-full" />
      </div>
          <div className='h-96 rounded-md border-black
      border-2'>
          <Image src={image} alt="" className="h-full w-full"/>
      </div>
          <div className='h-96 col-span-2 rounded-md mr-6 mb-4 border-black
      border-2'>
          <Image src={logo} alt="" className="w-full h-full object-fill"/>
        </div>
    
      </main>
    )
  }
