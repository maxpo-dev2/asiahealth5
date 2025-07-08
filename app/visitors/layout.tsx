import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='bg-[url(/images/image.png)] bg-[#1E1E1E] bg-cover bg-no-repeat'>
        {children}
    </div>
  )
}

export default layout