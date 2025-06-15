import Carousel from "./carousel"
import Generatecardsection from "./generatecardsection"

export default function Mainbody(){
  return(
    <>
      {/* Container*/}
      <div className="mx-auto px-80" style={{backgroundColor: '#1e1e2e'}}>
        <Carousel/>
        <Generatecardsection/>
      </div>
    </>
  )
}
