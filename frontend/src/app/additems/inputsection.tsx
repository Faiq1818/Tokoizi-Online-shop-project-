'use client';
import { useState, ChangeEvent, MouseEvent } from 'react';
import axios from "axios";
import { useRouter } from 'next/navigation';

export default function InputSection() {
  const [images, setImages] = useState<(File | null)[]>([null, null, null, null]);
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  function handleImageChange(e: ChangeEvent<HTMLInputElement>, index: number) {
    if (e.target.files && e.target.files.length > 0) {
    const file = e.target.files[0];
      const newImages = [...images];
      newImages[index] = file;
      setImages(newImages);
    }
  }

  const onChangeItemName = (event: ChangeEvent<HTMLInputElement>) => {
     setItemName(event.target.value);
  };

  const onChangePrice = (event: ChangeEvent<HTMLInputElement>)  => {
     setPrice(event.target.value);
  };

  const onChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
     setDescription(event.target.value);
  };

    
  const handleSendData = (event: MouseEvent) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("itemName", itemName);
    formData.append("price", price);
    formData.append("description", description);
    images.forEach((image, index) => {
      if (image) {
        formData.append("images", image);
      }
    });

    axios.post('http://localhost:3000/addItems', formData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {
      console.log(response);
      alert("kirim data berhasil!");
      router.push('/');
    })
    .catch((error) => {
      console.log(error);
      alert("kirim data gagal!");
    });
  }
  

  return(
    <>
      <div className="" style={{backgroundColor: '#1e1e2e', color: '#cdd6f4'}}>
        <div>
          <div className="pt-5">
            Nama Barang:
          </div>
          <input placeholder="Masukan disini" value={itemName} onChange={onChangeItemName} style={{backgroundColor: '#181825'}} className="p-1 rounded-md"/>

          <div className="pt-5">
            Harga:
          </div>
          <input placeholder="Contoh: 20000" value={price} onChange={onChangePrice} type="number" style={{backgroundColor: '#181825'}} className="p-1 rounded-md"/>

          <div className="pt-5">
            Deskripsi:
          </div>
          <textarea className="w-96 h-32" value={description} onChange={onChangeDescription} style={{backgroundColor: '#181825'}} placeholder="Masukan disini"></textarea>

          <div className="pt-5">
            Foto barang (Minimal 1 foto):
          </div>

          {[0, 1, 2, 3].map((i) => (
            <label key={i} className="cursor-pointer inline-block bg-blue-500 text-white px-2 py-1 rounded-md mr-4">
              Pilih Gambar {i + 1}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageChange(e, i)}
              />
            </label>
          ))}

          <div className='flex flex-row'>
            {images.map((img, i) =>
              img ? (
                <img
                  key={i}
                  src={URL.createObjectURL(img)}
                  alt={`Preview ${i + 1}`}
                  className="mt-4 mr-4 w-32 h-32"
                />
              ) : null
            )}
          </div>

          <div className='mt-10'>
            <button className='px-2 py-1 rounded-sm cursor-pointer' style={{color: '#eff1f5',backgroundColor: '#7287fd'}} onClick={handleSendData}>Upload Barang</button>
          </div>
        </div>
      </div>
    </>
  )
}
