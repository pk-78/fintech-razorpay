import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoCalculatorOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { LuRecycle } from "react-icons/lu";
import { FaHouseChimney } from "react-icons/fa6";
import { BsNewspaper } from "react-icons/bs";
import Card1 from './Card1';

export default function HomeFifthComponent() {
  return (
    <div>
        <div className="px-6 py-4">
      <div className="text-center font-bold text-2xl text-green-500 ">WHAT WE OFFER</div>
      <div className="text-center font-bold text-3xl text-white p-4">Unlock financial freedom with <br /> smart choices </div>
      <div className="flex justify-center p-8 ">  
        <div className="grid lg:grid-cols-3 gap-8">
          <Card1
            title="Tax Consulting"
            description="Our vision is to empower individuals and businesses to make confident, strategic investments that lead to"
            Icon={FaRegFileAlt}
            buttonText="READ MORE"
          />
          <Card1
            title="Accounting"
            description="Our vision is to empower individuals and businesses to make confident, strategic investments that lead to"
            Icon={IoCalculatorOutline}
            buttonText="READ MORE"
          />
          <Card1
            title="Advisory"
            description="Our vision is to empower individuals and businesses to make confident, strategic investments that lead to"
            Icon={BsNewspaper}
            buttonText="READ MORE"
          />
          <Card1
            title="Investment"
            description="Our vision is to empower individuals and businesses to make confident, strategic investments that lead to"
            Icon={AiOutlineDollarCircle}
            buttonText="READ MORE"
          />
          <Card1
            title="Loan Plan"
            description="Our vision is to empower individuals and businesses to make confident, strategic investments that lead to"
            Icon={FaHouseChimney }
            buttonText="READ MORE"
          />
          <Card1
            title="Project Management"
            description="Our vision is to empower individuals and businesses to make confident, strategic investments that lead to"
            Icon={LuRecycle}
            buttonText="READ MORE"
          />
        </div>
        
      </div>
      </div>
    </div>
  )
}