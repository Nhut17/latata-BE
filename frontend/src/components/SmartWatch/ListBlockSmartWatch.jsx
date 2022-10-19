import React from 'react'
import { useContext } from 'react'
import BlockItemProduct from '../SubComponents/BlockItemProduct'
import { SmartWatchContext } from '../../context/smartWatchContext'


const ListBlockSmartWatch = () => {

    const context = useContext(SmartWatchContext)

  return (
    <>

    <BlockItemProduct 
        banner={context.banner_block_product_smart_watch.banner_fashion}
        linkTo={'/'}
        menuTop={context.menu_fashion}
        title={'ĐỒNG HỒ THỜI TRANG'}
         />
    <BlockItemProduct 
        banner={context.banner_block_product_smart_watch.banner_utility}
        linkTo={'/'}
        menuTop={context.menu_utility}
        title={'ĐA TỆN ÍCH'}
         />
    <BlockItemProduct 
        banner={context.banner_block_product_smart_watch.banner_sport}
        linkTo={'/'}
        menuTop={context.menu_sport}
        title={'THỂ THAO'}
         />
    <BlockItemProduct 
        banner={context.banner_block_product_smart_watch.banner_children}
        linkTo={'/'}
        menuTop={[]}
        title={'ĐỒNG HỒ TRẺ EM'}
         />
    <BlockItemProduct 
        banner={context.banner_block_product_smart_watch.banner_watch_chain}
        linkTo={'/'}
        menuTop={context.menu_watch_chain}
        title={'DÂY ĐỒNG HỒ'}
         />

    </>
  )
}

export default ListBlockSmartWatch