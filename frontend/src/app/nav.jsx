import { IoCartOutline } from "react-icons/io5";

export default function Nav(){
  return(
    <>
      <nav className="bg-red-500 p-4 flex justify-between items-center" style={{backgroundColor: '#89b4fa'}}>
        <div className="text-2xl font-bold" style={{color: '#11111b'}}>
          TOKOIZI
        </div>
        <div className="">
          <input placeholder="Search items" className="rounded-lg p-2 w-72" style={{color: '#313244', backgroundColor: '#cdd6f4'}}/>
        </div>
        <div className="">
          <IoCartOutline className="" size={30}/>
        </div>
      </nav>
    </>
  )
}
