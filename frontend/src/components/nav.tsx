'use client';
import { CiShoppingCart } from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { useRouter } from 'next/navigation';

export default function Nav(){
  const router = useRouter()

  return(
    <>
      <nav className="bg-white p-4 flex justify-between items-center sticky top-0 border-b border-[#e5e7eb] px-60">
        <div className="text-2xl font-bold text-[#898AC4]">
          TOKOIZI
        </div>
        <div className="flex flex-row items-center">
          <input placeholder="Search items" className="rounded-lg p-2 w-96 text-[#313244] bg-white border-[#e5e7eb] border focus:outline-none mr-5"/>
        </div>
        <div className="columns-2 flex flex-row space-x-2 items-center">
          <IoMdAddCircleOutline size={25} onClick={() => router.push('/additems')}/>
          <CiShoppingCart className="" size={25}/>
          <CiUser size={25} onClick={() => router.push('/additems')}/>
        </div>
      </nav>
    </>
  )
}
