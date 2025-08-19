import React from 'react'
interface Igetchild {
    children : React.ReactNode
}
function Container({children} : Igetchild) {
  return (
    <div className='container m-auto p-4'>
        {children}
    </div>
  )
}

export default Container