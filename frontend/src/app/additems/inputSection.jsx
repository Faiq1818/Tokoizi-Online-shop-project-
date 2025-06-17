'use client';
import { useState } from 'react';

export default function InputSection() {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  function handleImage1Change(e) {
    const file = e.target.files[0];
    if (file) {
      setImage1(URL.createObjectURL(file));
    }
  }
  function handleImage2Change(e) {
    const file = e.target.files[0];
    if (file) {
      setImage2(URL.createObjectURL(file));
    }
  }
  function handleImage3Change(e) {
    const file = e.target.files[0];
    if (file) {
      setImage3(URL.createObjectURL(file));
    }
  }
  function handleImage4Change(e) {
    const file = e.target.files[0];
    if (file) {
      setImage4(URL.createObjectURL(file));
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
                onChange={handleImage1Change}
              />
            </label>
            <label className="cursor-pointer inline-block bg-blue-500 text-white px-2 py-1 rounded-md mr-4">
              Pilih Gambar 2
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImage2Change}
              />
            </label>
            <label className="cursor-pointer inline-block bg-blue-500 text-white px-2 py-1 rounded-md mr-4">
              Pilih Gambar 3
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImage3Change}
              />
            </label>
            <label className="cursor-pointer inline-block bg-blue-500 text-white px-2 py-1 rounded-md mr-4">
              Pilih Gambar 4
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImage4Change}
              />
            </label>

          </div>
          <div className='flex flex-row'>
            {image1 && <img src={image1} alt="Preview" className="mt-4 mr-4 w-32 h-32" />}
            {image2 && <img src={image2} alt="Preview" className="mt-4 mr-4 w-32 h-32" />}
            {image3 && <img src={image3} alt="Preview" className="mt-4 mr-4 w-32 h-32" />}
            {image4 && <img src={image4} alt="Preview" className="mt-4 mr-4 w-32 h-32" />}
          </div>

          <div className='mt-10'>
            <button className='px-2 py-1 rounded-sm' style={{color: '#eff1f5',backgroundColor: '#7287fd'}}>Upload Barang</button>
          </div>
        </div>
      </div>
    </>
  )
}
