'use client';
import { useState } from "react"

export default function MainBody(){
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return(
    <>
      <div className="bg-[#45475a] p-3 w-1/4">
        <p className="text-white">Sign Up</p>
        <div className="flex flex-col">
          <input placeholder="Email" className="bg-[#b4befe] p-1 my-1" value={email} onChange={handleChangeEmail}/>
          <input placeholder="Password" className="bg-[#b4befe] p-1" value={password} onChange={handleChangePassword}/>
        </div>
        <div className="flex flex-col">
          <button className="bg-[#f38ba8] mt-2 mb-1">Sign Up</button>
          <button className="bg-[#89b4fa]">Login</button>
        </div>
      </div>
    </>
  )
}
