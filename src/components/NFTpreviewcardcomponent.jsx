
import logo from "../assets/NFTpreviewcardcomponent/images/image-equilibrium.jpg"

export default function NFTpreviewcardcomponent() {

  return (

    <div>
      <div>
        <div className= 'bg-blue-950 h-screen w-screen flex justify-center items-center'>
          <div className="w-68 h-110 bg-blue-900 rounded-xl flex flex-col">
            <img className="mt-5 w-60 mx-4 rounded-xl" src={logo} alt="" />
            <p className="text-white font-bold">Equilibrium #3429</p>
          </div>
        </div>
      </div>
    </div>

  )
}
