'use client';
import { FaStar } from "react-icons/fa6";

function cardClick(){
  alert("berhasil")
}

export default function Cardsection(){
  return(
    <>
      <div className="pb-5" onClick={cardClick}>
        <img src="/product1.jpg" className="h-50 rounded-lg"/>
        <p className="text-l truncate w-50" style={{color: '#cdd6f4'}}>Jschlatt 2nd Album deluxe collector edition</p>
        <p className="text-l truncate w-50 font-bold" style={{color: '#cdd6f4'}}>Rp.400.000</p>
        <p className="text-l truncate w-50 flex items-center" style={{color: '#cdd6f4'}}><FaStar className="mr-1 text-yellow-400"/>4.9</p>
        <p className="text-l truncate w-50" style={{color: '#cdd6f4'}}>Toko Music Lampung</p>
      </div>
    </>
  )
}
