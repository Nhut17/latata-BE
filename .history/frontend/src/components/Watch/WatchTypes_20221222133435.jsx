import React from 'react'
import { Link } from 'react-router-dom'
import ListWatchProduct from './ListWatchProduct'


const WatchTypes = ({listType,idType,listProduct}) => {
  return (

        <div className= "WatchType" >
          {listType.map( type => type.id === idType ? (
            <div className="banner" >
                <img src={type.url} alt="" />

            </div>

          ) : (''))}

            <div className="list-watch">
                {listType.map(idx => idx.id === idType ?   (
                    
                      <div className="tabs-type" key={idx.id}>
                        <p>Xem tất cả {idx.title}  
                            <span><i class="fas fa-caret-right"></i></span>
                        </p>
        
                    
                    </div>
                
                ) : (''))}

                <ListWatchProduct listProduct= {listProduct}/>
            
            </div>
        </div>
   
  )
}

export default WatchTypes
