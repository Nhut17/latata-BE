import React from 'react'
import TopMainSub from './TopMainSub'
import '../../sass/MainSub/MainSub.scss'
import MainContentSub from './MainContentSub'

const MainSub = ({list_product,parentCate,childCate,sliders,banners}) => {
  return (
    <div className='main-sub'>
        
       <TopMainSub parentCate={parentCate} 
                   childCate={childCate} 
                   totalProduct={list_product.length}
                   sliders={sliders}
                   banners={banners} />


        <MainContentSub 
                        childCate={childCate} />

    </div>
  )
}

export default MainSub
