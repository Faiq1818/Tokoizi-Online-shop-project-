'use client';
import { IoCartOutline } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useRouter } from 'next/navigation';

export default function Nav(){
  const router = useRouter()

  return(
    <>
      <nav className="bg-red-500 p-4 flex justify-between items-center sticky top-0" style={{backgroundColor: '#89b4fa'}}>
        <div className="text-2xl font-bold" style={{color: '#11111b'}}>
          TOKOIZI
        </div>
        <div className="">
          <input placeholder="Search items" className="rounded-lg p-2 w-72" style={{color: '#313244', backgroundColor: '#cdd6f4'}}/>
        </div>
        <div className="columns-2">
          <IoMdAddCircleOutline size={30} onClick={() => router.push('/additems')}/>
          <IoCartOutline className="" size={30}/>
        </div>
      </nav>
    </>
  )
}
