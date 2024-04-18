import React from 'react'
import ImageUpload from '../../components/ImageUpload'



export default function Image() {
  return (

    <div className=" dark:bg-neutral-800  bg-white relative mx-auto px-4 lg:py-20 md:px-6 md:py-16 py-12 text-default max-w-5xl">
      <span className="block text-lg font-bold text-neutral-800 dark:text-neutral-200 ]">
        <p className="font-bold">
           Images/Photos  Lookup 
        </p>
      </span>
      <ImageUpload />
    </div>
  )
}
