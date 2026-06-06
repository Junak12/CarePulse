import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <Link href={'/'}>
        <h1 className='text-cyan-500 font-bold text-xl'>Care.<span className='text-pink-500'>Pulse</span></h1>
      </Link>
    </div>
  )
}

export default Logo