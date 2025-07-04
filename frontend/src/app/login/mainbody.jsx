'use client';
import { useState } from "react"
import axios from "axios";

export default function MainBody(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
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

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return(
    <>
      <div className="bg-[#45475a] p-3 w-1/4">
        <p className="text-white">Login</p>
        <div className="flex flex-col">
          <input placeholder="Email" className="bg-[#b4befe] p-1 my-1" value={email} onChange={handleChangeEmail}/>
          <input placeholder="Password" className="bg-[#b4befe] p-1" value={password} onChange={handleChangePassword}/>
        </div>
        <div className="flex flex-col">
          <button className="bg-[#f38ba8] mt-2 mb-1" onClick={handleSubmit}>Login</button>
          <button className="bg-[#89b4fa]">Sign Up</button>
        </div>
      </div>
    </>
  )
}
