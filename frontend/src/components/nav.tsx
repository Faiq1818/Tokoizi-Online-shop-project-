'use client';
import { IoCartOutline } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useRouter } from 'next/navigation';

export default function Nav(){
  const router = useRouter()

  return(
    <>
      <nav className="bg-white p-4 flex justify-between items-center sticky top-0 border-b border-[#e5e7eb] px-60">
        <div className="text-2xl font-bold text-[#898AC4]">
          TOKOIZI
        </div>
        <div className="">
          <input placeholder="Search items" className="rounded-lg p-2 w-96 text-[#313244] bg-white border-[#e5e7eb] border focus:outline-none"/>
        </div>
        <div className="columns-2">
          <IoMdAddCircleOutline size={30} onClick={() => router.push('/additems')}/>
          <IoCartOutline className="" size={30}/>
        </div>
      </nav>
    </>
  )
}
