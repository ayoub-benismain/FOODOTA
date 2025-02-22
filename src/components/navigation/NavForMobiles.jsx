import React from 'react'
import Links from './Links'
import Button from './Button'

function NavForMobiles() {
  return (
    <div className = 'absolute z-50 bg-white top-20 h-screen w-screen flex flex-col justify-center items-center'>
        <Links/>
        <Button value={"register"}/>
        <Button value={"login"}/>
    </div>
  )
}

export default NavForMobiles