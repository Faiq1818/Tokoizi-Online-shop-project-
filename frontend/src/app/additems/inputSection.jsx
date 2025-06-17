'use client';
import { useState } from 'react';

export default function InputSection() {
  const [image, setImage] = useState(null);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }

  return(
    <>
      <div className="" style={{backgroundColor: '#1e1e2e', color: '#cdd6f4'}}>
        <div>
          <div className="pt-5">
            Nama Toko:
          </div>
          <input placeholder="Masukan disini" style={{backgroundColor: '#181825'}} className="p-1 rounded-md"/>
          <div className="pt-5">
            Nama Barang:
          </div>
          <input placeholder="Masukan disini" style={{backgroundColor: '#181825'}} className="p-1 rounded-md"/>
          <div className="pt-5">
            Harga:
          </div>
          <input placeholder="Contoh: 20000" type="number" style={{backgroundColor: '#181825'}} className="p-1 rounded-md"/>
          <div className="pt-5">
            Deskripsi:
          </div>
          <textarea className="w-96 h-32" style={{backgroundColor: '#181825'}} placeholder="Masukan disini"></textarea>

          <div className="pt-5">
            Foto barang (Minimal 1 foto):
          </div>

          <div>
            <label className="cursor-pointer inline-block bg-blue-500 text-white px-2 py-1 rounded-md mr-4">
              Pilih Gambar 1
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
            <label className="cursor-pointer inline-block bg-blue-500 text-white px-2 py-1 rounded-md mr-4">
              Pilih Gambar 2
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
            <label className="cursor-pointer inline-block bg-blue-500 text-white px-2 py-1 rounded-md mr-4">
              Pilih Gambar 3
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
            <label className="cursor-pointer inline-block bg-blue-500 text-white px-2 py-1 rounded-md mr-4">
              Pilih Gambar 4
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>

          </div>
          <div className='flex flex-row'>
            {image && <img src={image} alt="Preview" className="mt-4 mr-4 w-32 h-32" />}
            {image && <img src={image} alt="Preview" className="mt-4 mr-4 w-32 h-32" />}
            {image && <img src={image} alt="Preview" className="mt-4 mr-4 w-32 h-32" />}
            {image && <img src={image} alt="Preview" className="mt-4 mr-4 w-32 h-32" />}
          </div>
        </div>
      </div>
    </>
  )
}
