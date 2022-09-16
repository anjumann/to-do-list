import React from 'react'

export const Alert = ({errorMessage}) => {
    return (
        <div className="px-2 py-6 bg-gradient-to-br from-red-600/100 to-red-100/5  shadow-lg bg 
        rounded-xl
        ">
            <div className='flex flex-row gap-3 text-base-100 items-center justify-center ' >
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6 " fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{errorMessage}</span>
            </div>
        </div>
    )
}

