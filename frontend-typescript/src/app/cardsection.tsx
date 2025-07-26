'use client';
import { FaStar } from "react-icons/fa6";
import { useEffect } from "react";
import axios from "axios";

function cardClick(){
  alert("berhasil")
}

type CardItem = {
  email: string;
  itemName: string;
  price: string;
  description: string;
  images: string[]
};


export default function Cardsection({cardData}: {cardData: CardItem}){
  
  return(
    <>
      <div className="pb-5" onClick={cardClick}>
        <img src={`http://localhost:3000/imghandler?imgName=${cardData.images[0]}`} className="h-50 w-50 rounded-lg"/>
        <p className="text-l truncate w-50" style={{color: '#cdd6f4'}}>{cardData.itemName}</p>
        <p className="text-l truncate w-50 font-bold" style={{color: '#cdd6f4'}}>{cardData.price}</p>
        <p className="text-l truncate w-50 flex items-center" style={{color: '#cdd6f4'}}><FaStar className="mr-1 text-yellow-400"/>4.9</p>
        <p className="text-l truncate w-50" style={{color: '#cdd6f4'}}>{cardData.email}</p>
      </div>
    </>
  )
}
