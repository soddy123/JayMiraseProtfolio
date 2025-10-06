import React from 'react'

export const EfBtn =({children})=>{
   return (
      <div className='group overflow-hidden relative cursor-pointer leading-6 text-black'>
         <span className='inline-block p-1 transition duration-500 ease-out group-hover:translate-y-[-120%]'>
            {children}
         </span>
         <span className='absolute left-0 translate-y-[120%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-[0] group-hover:rotate-0'>
            {children}
         </span>
      </div>
   )
}