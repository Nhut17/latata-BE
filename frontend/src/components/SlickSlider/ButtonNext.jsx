import React from 'react'

const ButtonNext = (props) => {
    const  {className, style, onClick} = props

    console.log(props)
  return (
    <span className={className} onClick={onClick}
                      style={{...style,
                            position: 'absolute',
                            display: 'flex',
                            width:50,
                            height:80,
                            borderRadius: '5px',
                            backgroundColor: 'rgba(216,216,216,.7)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transform: 'translate(-12px,-20px)',
                            opacity:0.7
                            }} ><i class="fa-solid fa-angle-right" style={{color: 'black',
                                                                            position: 'absolute',
                                                                            fontWeight: 'bold',
                                                                            fontSize:30}} ></i></span>
  )
}

export default ButtonNext
