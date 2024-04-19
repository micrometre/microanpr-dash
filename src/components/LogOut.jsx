import React from 'react'
import { useState } from 'react';
const click = () =>{
    const data = JSON.stringify(localStorage.getItem('token'))
    localStorage.removeItem("token")
    }

export default function LogOut() {
    return (
        <div>
            <div className="bg-neutral-200 selection:bg-yellow-400 selection:text-neutral-700 dark:bg-neutral-800 flex flex-col flex-wrap sm:flex-row">
                <form className='mt-4'>
                    <button 
                    onClick={click}
                    className="hover:bg-neutral-300 dark:hover:bg-neutral-900  flex h-[48px] grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3"
                    >
                            <span className="block text-lg font-bold text-neutral-800 dark:text-neutral-200">
                                <p className="font-bold">
                                    Sign Out
                                </p>
                            </span>
                    </button>
                </form>
            </div>
        </div>
    )
}
