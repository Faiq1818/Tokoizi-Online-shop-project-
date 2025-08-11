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
    <div className="flex flex-row">
      <div className="bg-gradient-to-tl from-sky-500 via-fuchsia-300 to-slate-100 rounded-l-lg">
        <div className="text-2xl font-bold text-[#898AC4] mr-40 ml-2 mt-1 items-start">
          TOKOIZI
        </div>
      </div>

      <div className="flex flex-col border-[#e5e7eb] border rounded-r-lg p-10">
        <div className="text-2xl font-bold text-[#898AC4] items-start mb-3">
          Sign Up Page
        </div>
        <div className="flex flex-col">
          <input placeholder="Email" className="border-[#e5e7eb] border p-1 my-1 mb-4" value={email} onChange={handleChangeEmail}/>
          <input placeholder="Password" className="border-[#e5e7eb] border p-1 mb-4" value={password} onChange={handleChangePassword}/>
        </div>
        <div className="text-center mb-4">
          <button className="bg-[#373737] px-4 py-1 rounded-md text-white mt-2 mb-1" onClick={handleSubmit}>Sign Up</button>
        </div>
        <div className="text-sm">Have accounts already?</div>
        <div className="text-sm text-blue-700">Login</div>
      </div>
    </div>
  )
}
