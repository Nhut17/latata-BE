import React from 'react'

const Banner = ({banner}) => {

  console.log('banner')


  return (
    <div className='banner'>
        <img src={banner} alt="" />
    </div>
  )
}

export default Banner
