import React from 'react'

const Layout = (props) => {
  return (
    <div className={`${props.className} font-mont`}>
      {props.children}
      <div className='fixed top-0 h-screen w-screen overflow-hidden bg-gradient-to-b  glass-gradient -z-10'>
      </div>
    </div>
  )
}

export default Layout
