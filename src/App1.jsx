import React, { useState } from 'react'
import logo from "./src/assets/interactive-rating-component-main/images/icon.svg"
import thankyou from "./src/assets/interactive-rating-component-main/images/thankyou.svg"

export default function App1() {

  const [ selectedRating, setSelectedRating ] = useState(null)
  const [ isSubmitted, setIsSubmitted ] = useState(false)

  return (

    <div>
      <div className='bg-primary-100 h-screen flex justify-center items-center'>
        <div className='w-80 h-80 bg-primary-200 rounded-2xl '>

        {!isSubmitted ? (
          <>
          <div className='w-10 h-10 rounded-full bg-primary-400 mx-6 my-7 flex justify-center items-center'>
            <img className='w-3 h-3' src={logo} alt="" />
          </div>
          <div className='space-y-2 px-6'>
            <p className='text-white/80 text-xl'>How did we do?</p>
            <p className='text-white/30 text-xs'>Please let us know how we did with your support request. All feedback is appreciated 
            to help us improve our offering!</p>
            <div className='flex justify-center items-center gap-5 py-2'>
              {[1, 2, 3, 4, 5].map(rating => (
                <div
                onClick={() => setSelectedRating(rating)}
                className= {`${selectedRating === null || rating < selectedRating ? "hover:bg-white/20 bg-primary-500" : "bg-primary-300"} w-10 h-10 rounded-full flex justify-center items-center cursor-pointer`}
                key={rating}>{rating}</div>
              ))}
            </div>
            <button 
            onClick={() => setIsSubmitted(true)}
            disabled={!selectedRating}
            className={`${!isSubmitted && "bg-white" } disabled:bg-primary-300 cursor-pointer flex justify-center items-center font-bold text-xs w-65 my-3 h-9 bg-primary-300 rounded-2xl`}>
              SUBMIT
            </button>
          </div>
          </>
        ) : (

          <div>
          <div className='flex justify-center my-10'>
            <img 
            className='flex justify-center w-30'
            src={thankyou} alt="" />
            </div>
            <div className='flex justify-center items-center flex-col'>
              <p className='text-primary-300/90 w-60 bg-primary-400 rounded-full text-xs h-8 flex justify-center items-center' >{`You selected ${selectedRating} out of 5`}</p>
              <p className='mt-5 text-white text-xl font-bold'>Thank you!</p>
              <p className='mt-3 text-xs text-white/40 text-center'>We appreciate you taking the time to give a rating. <br /> If you ever need more support, don't hesitate to <br /> get in touch!</p>

          </div>
          </div>

        )}
        </div>
      </div>
    </div>

  )
}
