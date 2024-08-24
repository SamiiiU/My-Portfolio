import React from 'react'

const Button = ({title , icons ,positions}) => {
  return (
    <div>
      
        <button className="gap-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-16 font-medium text-teal-50 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 mt-4 focus:ring-offset-slate-50">
          {title}{icons}
        </button>
    

        
      
      
    </div>
  )
}

export default Button
