import Carousel from "./carousel"
import Generatecardsection from "./generatecardsection"

export default function Mainbody(){
  return(
    <>
      {/* Container*/}
      <div className="mx-auto px-80 bg-white">
        <Carousel/>
        <Generatecardsection/>
      </div>
    </>
  )
}
