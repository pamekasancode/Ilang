import React from 'react'
import { LoadingIcon } from '../assets'

const LoadMore = () => {
  return (
    <>
        <div className="w-full py-4 flex justify-center">
            <img className="w-[50px]" src={LoadingIcon} alt="loading"/>
        </div>
    </>
  )
}

export default LoadMore