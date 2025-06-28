export default function MainBody(){
  return(
    <>
      <div className="bg-[#45475a] p-3 w-1/4">
        <p className="text-white">Sign Up</p>
        <div className="flex flex-col">
          <input placeholder="Email" className="bg-[#b4befe] p-1 my-1"/>
          <input placeholder="Password" className="bg-[#b4befe] p-1"/>
        </div>
        <div className="flex flex-col">
          <button className="bg-[#f38ba8] mt-2 mb-1">Sign Up</button>
          <button className="bg-[#89b4fa]">Login</button>
        </div>
      </div>
    </>
  )
}
