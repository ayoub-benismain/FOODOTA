import React, { useState } from 'react'

function ResturantsImages() {
    
    const [images] = useState(["1","2","3","4","5"])

  return (
    <div className='flex justify-center'>
        {
            images.map((image , index) => {
                return <img key={index} src={`/src/assets/${image}.jpg`} alt="image" className='md:w-20 w-14 mx-2 my-2 cursor-pointer' />
            })
        }
    </div>
  )
}

export default ResturantsImages