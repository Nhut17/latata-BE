import React from 'react'

const Banner = ({banner}) => {

  console.log('home')


  return (
    <div className='banner'>
        <img src={banner} alt="" />
    </div>
  )
}

export default Banner
