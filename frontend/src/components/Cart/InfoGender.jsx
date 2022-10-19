import React from 'react'
import { useState } from 'react'

const InfoGender = () => {

  const [checked,setChecked] = useState('')

  const handleClick = (e) => {

    if(e.target.className === 'male')
    {
      setChecked('male')
 
    }
    else{
      setChecked('female')
    }
  }

  return (
    <div className="gender">
      <input type="radio" name='male' 
             onChange={() => setChecked('male')} 
             checked={checked === 'male'} />
      <label htmlFor="male" className='male' onClick={handleClick}>Anh</label>
      
      <input type="radio" name='female' className='female' 
              onChange={() => setChecked('female')} 
              checked={checked === 'female'} />
      <label htmlFor="female" className='female' onClick={handleClick}>Chị</label>
</div>
  )
}

export default InfoGender