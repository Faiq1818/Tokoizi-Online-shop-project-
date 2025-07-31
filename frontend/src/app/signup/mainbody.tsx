'use client';
import { useState, ChangeEvent, MouseEvent } from "react"
import axios from "axios";
import { useRouter } from 'next/navigation';

export default function MainBody(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (event: MouseEvent) => {
    event.preventDefault();

    axios.post('http://localhost:3000/auth/signup', {
      email: email,
      password: password
    })
    .then((response) => {
      console.log(response);
      alert("Sign up berhasil!");
      router.push('/login');
    })
    .catch((error) => {
      console.log(error);
      alert("Sign up gagal!");
    });
  }

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
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
          <button className="bg-[#f38ba8] mt-2 mb-1" onClick={handleSubmit}>Sign Up</button>
          <button className="bg-[#89b4fa]">Login</button>
        </div>
      </div>
    </>
  )
}
