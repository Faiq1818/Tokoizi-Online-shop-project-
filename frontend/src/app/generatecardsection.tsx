"use client";
import { useState, useEffect } from "react";
import Cardsection from "./cardsection";
import axios from "axios";

type CardItem = {
  email: string;
  itemName: string;
  price: string;
  description: string;
  images: string[]
};

export default function Generatecardsection() {
  const [cardData, setCardData] = useState<CardItem[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getcardsroot", {
        withCredentials: true,
      })
      .then((response) => {
        setCardData(response.data);
        console.log(cardData);
        //alert("data berhasil!");
      })
      .catch((error) => {
        console.log(error);
        alert("data gagal!");
      });
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-10 justify-between">
        {cardData.map((item, index) => (
          <Cardsection key={index} cardData={item} />
        ))}
      </div>
    </>
  );
}
