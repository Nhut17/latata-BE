import React from 'react'
import { useContext } from 'react'
import { WatchContext } from '../../context/watchContext'
import TopSlider from '../Tablet/TopSlider'
import WatchTypes from './WatchTypes'
import CollectionWatch from './CollectionWatch'
import LineStrap from './LineStrap'
const MainWatch = () => {
    const context = useContext(WatchContext)
  return (
    
    <div className='main-watch'>
      <div className="container">
        <TopSlider  sliders={context.sliderWatch} 
                    banners={context.bannerWatch}/>
        <CollectionWatch/>

        <div className="wt-for-men wt-border">
            <WatchTypes 
                listType={context.WatchCategories}
                idType={context.WatchCategories[2].id}
                listProduct= {context.listWatchProducts}
              />
          </div>

          <div className="wt-for-women wt-border">
            <WatchTypes 
                listType={context.WatchCategories}
                idType={context.WatchCategories[3].id}
                listProduct= {context.listWatchProducts}
  
              />
          </div>

          <div className="wt-for-couple wt-border">
            <WatchTypes 
                listType={context.WatchCategories}
                idType={context.WatchCategories[4].id}
                listProduct= {context.listWatchProducts}
    
              />
          </div>

          <div className="wt-for-children wt-border">
            <WatchTypes 
                listType={context.WatchCategories}
                idType={context.WatchCategories[5].id}
                listProduct= {context.listWatchProducts}
        
              />
          </div>

          <LineStrap linestrap={context.width_line_strap}/>
      </div>
    </div>
  )
}

export default MainWatch
