import React from 'react'
import { list_icon_opt_home } from '../data'
import { Link } from 'react-router-dom'

const OptionPromote = () => {

  console.log('home')


  return (
    <div className="option-promote">
        {
            list_icon_opt_home.map(option => (
                <Link to='' className="item">
                    <img src={option.url} alt="" />
                    <span>{option.content}</span>
                </Link>
            ))
        }
    </div>
  )
}

export default OptionPromote
