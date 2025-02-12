import { useState } from 'react'
import './App.css'
import icon from "./assets/interactive-rating-component-main/images/icon.svg"
import thankyou from "./assets/interactive-rating-component-main/images/thankyou.svg"


function App() {

  const [ selectedRating, setSelectedRating ] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false);


  return (
    <div className='w-screen h-screen bg-primary flex justify-center items-center bg-primary-100'> 
      <div className='bg-primary-200 w-80 h-80 rounded-3xl'>

      {!isSubmitted ? (
        <>
        <div className='w-10 h-10 rounded-full m-5 bg-primary-400 flex justify-center items-center'>
          <img className="" src={icon} alt="icon" />
        </div>
          <p className='text-xl font-bold text-white ml-5 font-primary'>How did we do?</p>
        <p className='text-xs ml-5 mt-3 text-white/50'>Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!</p>
        <div className='flex justify-items-center items-center'>
          {[1, 2, 3, 4, 5].map(rating => (
            <div
              key={rating}
              className={`cursor-pointer text-white/50 text-xs flex justify-center items-center w-10 h-10 rounded-full ml-5 mt-5 
                ${selectedRating === null || rating < selectedRating ? "bg-primary-500 hover:bg-white/50" : "bg-primary-300" }`}
              onClick={() => setSelectedRating(rating)}

            >{rating}</div>
          ))}
        </div>
        <button  

             className={` text-black w-[280px] mt-5 ml-5 py-2 rounded-full font-medium text-sm cursor-pointer disabled:bg-primary-300 ${isSubmitted ? "bg-primary-300" : "bg-white"}`}
             disabled={!selectedRating} 
             onClick={() => setIsSubmitted(true)
             }
        >SUBMIT</button>
</>
  ) : (
    <>
      <div className="flex justify-center">
        <img src={thankyou} alt="thank-you" className="w-32 h-20 mt-8" />
      </div>
      <p className="text-sm text-orange-400 bg-gray-700 inline-block px-3 py-1 rounded-full ml-20 mt-7">
        You selected {selectedRating} out of 5
      </p>
      <p className="text-xl font-bold text-white mt-6 text-center">Thank you!</p>
      <p className="text-xs text-white/50 mt-2 text-center mt-4">
        We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
      </p>
    </>
  )}
</div>
</div>
);
}

export default App
