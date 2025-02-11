import './App.css'
import icon from "./assets/interactive-rating-component-main/images/icon.svg"

function App() {

  return (
    <div className='w-screen h-screen bg-primary flex justify-center items-center'> 
      <div className='bg-primary-200 w-80 h-80 rounded-3xl'>
        <div className='w-10 h-10 rounded-full m-5 bg-primary-400 flex justify-center items-center'>
          <img className="" src={icon} alt="icon" />
        </div>
          <p className='text-xl font-bold text-white ml-5 font-primary'>How did we do?</p>
        <p className='text-xs ml-5 mt-3 text-white/50'>Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!</p>
        <div className='flex justify-items-center items-center'>
          <div className='text-white/50 text-xs flex justify-center items-center w-10 h-10 rounded-full ml-5 mt-5 bg-primary-400'>1</div>
          <div className='text-white/50 text-xs flex justify-center items-center w-10 h-10 rounded-full ml-5 mt-5 bg-primary-400'>2</div>
          <div className='text-white/50 text-xs flex justify-center items-center w-10 h-10 rounded-full ml-5 mt-5 bg-primary-400'>3</div>
          <div className='text-white/50 text-xs flex justify-center items-center w-10 h-10 rounded-full ml-5 mt-5 bg-primary-400'>4</div>
          <div className='text-white/50 text-xs flex justify-center items-center w-10 h-10 rounded-full ml-5 mt-5 bg-primary-400'>5</div>
        </div>
        <button className='bg-primary-300 w-70 ml-5 mt-7 rounded-full h-8 font-medium text-sm '>SUBMIT</button>
      </div>
    </div>
  )
}

export default App
