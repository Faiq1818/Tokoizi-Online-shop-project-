'use client';
import { useState } from 'react';

export default function InputSection() {
  const [images, setImages] = useState([null, null, null, null]);
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");


  function handleImageChange(e, index) {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = URL.createObjectURL(file);
      setImages(newImages);
    }
  }

  const onChangeItemName = event => {
     setItemName(event.target.value);
  };

  const onChangePrice = event => {
     setPrice(event.target.value);
  };

  const onChangeDescription = event => {
     setDescription(event.target.value);
  };

    
  const handleSendData = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3000/auth/login', {
      email: email,
      password: password
    }, {
      withCredentials: true // WAJIB untuk mengirim/terima cookie cross-origin
    })
    .then((response) => {
      console.log(response);
      alert("Sign up berhasil!");
    })
    .catch((error) => {
      console.log(error);
      alert("Sign up gagal!");
    });
  }
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
                  src={img}
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
