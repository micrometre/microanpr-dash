import React from 'react'
import { Docs } from '../../components/docs'


export default function Help() {
  return (

    <div className=" dark:bg-neutral-800  bg-white relative mx-auto px-4 lg:py-20 md:px-6 md:py-16 py-12 text-default max-w-5xl">
      <Docs/>
      <span className="block text-lg font-bold text-neutral-800 dark:text-neutral-200 ]">
        <p className="font-bold">
          Video Lookups 
        </p>
      </span>
    </div>
  )
}
