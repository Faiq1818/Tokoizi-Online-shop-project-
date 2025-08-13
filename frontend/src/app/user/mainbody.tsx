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

      <div className="border border-[#e5e7eb] rounded-r-lg flex flex-row">
        <div>
          <div className="text-start mx-5 my-2">
            Name: Faiq Ghozy Erlangga
          </div>
          <div className="text-center mx-5 my-2">
            Email: ghozyerlanggafaiq@gmail.com
          </div>
        </div>

        <div>
          <div className="text-start mx-5 my-2">
            Profile picture
          </div>
          <div className="text-center mx-5 my-2">
            Email: ghozyerlanggafaiq@gmail.com
          </div>
        </div>
      </div>
    </div>
  )
}
