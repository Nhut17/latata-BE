import React from 'react'
import { useContext } from 'react'
import BlockItemProduct from '../SubComponents/BlockItemProduct'
import { SmartWatchContext } from '../../context/smartWatchContext'


const ListBlockSmartWatch = ({listProduct}) => {

    const context = useContext(SmartWatchContext)

    const renderSubProduct = (list_product, sub) => {
      return list_product.filter(val => val.subCate?.includes(sub))
    }

  return (
    <>

    <BlockItemProduct 
        banner={context.banner_block_product_smart_watch.banner_fashion}
        linkTo={'/'}
        menuTop={context.menu_fashion}
        title={'Đồng hồ thời trang'}
        listProduct={listProduct}
         />
    <BlockItemProduct 
        banner={context.banner_block_product_smart_watch.banner_utility}
        linkTo={'/'}
        menuTop={context.menu_utility}
        title={'ĐA TỆN ÍCH'}
        listProduct={listProduct}
         />
    <BlockItemProduct 
        banner={context.banner_block_product_smart_watch.banner_sport}
        linkTo={'/'}
        menuTop={context.menu_sport}
        title={'THỂ THAO'}
        listProduct={listProduct}
         />
    <BlockItemProduct 
        banner={context.banner_block_product_smart_watch.banner_children}
        linkTo={'/'}
        menuTop={[]}
        title={'ĐỒNG HỒ TRẺ EM'}
        listProduct={listProduct}
         />
    <BlockItemProduct 
        banner={context.banner_block_product_smart_watch.banner_watch_chain}
        linkTo={'/'}
        menuTop={context.menu_watch_chain}
        title={'DÂY ĐỒNG HỒ'}
        listProduct={listProduct}
         />

    </>
  )
}

export default ListBlockSmartWatch