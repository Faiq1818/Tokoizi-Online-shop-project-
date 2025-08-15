export default function Mainbody(){
  return(
    <div  className="flex justify-center flex-col items-center">
      <div className="border border-[#e5e7eb] flex flex-row rounded-lg mt-10 mb-2">
        <div className="font-bold text-center mx-5 my-2">
          Biodata Diri
        </div>

        <div className="font-bold text-center mx-5 my-2">
          Alamat
        </div>
      </div>

      <div className="border border-[#e5e7eb] rounded-r-lg flex flex-row py-3">
        <div className="mr-36">
          <div className="text-start mx-5 my-2">
            Name/Shop Name: Faiq Ghozy Erlangga
          </div>
          <div className="text-start mx-5 my-2 text-blue-600 text-sm">
            Change the name
          </div>
          <div className="text-start mx-5 my-2">
            Email: ghozyerlanggafaiq@gmail.com
          </div>
          <div className="text-start mx-5 my-2 text-blue-600 text-sm">
            Change the email
          </div>
        </div>

        <div>
          <div className="text-center mx-5 my-2">
            <img src={`http://localhost:3000/user/profileimg?imgName=defaultProfile.jpg`} className="h-50 w-50 rounded-full"/>
          </div>
          <div className="text-center">
            Change the profile icon
          </div>
        </div>
      </div>
    </div>
  )
}
