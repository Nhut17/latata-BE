import React,{useContext} from 'react'
import BlockItemProduct from '../SubComponents/BlockItemProduct'
import { AccessoryContext } from '../../context/accessoryContext'

const ListBlockAccessories = ({listProduct}) => {

    const context = useContext(AccessoryContext)

    const subProduct = (list_product, sub) => {
        return list_product?.filter(val => val.subCate?.toLowerCase().includes(sub.toLowerCase()))
    }

    const mouseGaming = subProduct(listProduct,'')

  return (
    <>

            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_apple}
                linkTo={'/'}
                menuTop={context.menu_apple_accessories}
                title={'APPLE'}
                listProduct={subProduct(listProduct,'Phụ kiện apple')}
            />

            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_battery}
                linkTo={'/'}
                menuTop={context.menu_battery}
                title={'SẠC DỰ PHÒNG'}
                listProduct={subProduct(listProduct,'Sạc dự phòng')}
            />
            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_chargeCable}
                linkTo={'/'}
                menuTop={context.menu_chargeCable}
                title={'CÁP SAC'}
                listProduct={subProduct(listProduct,'Sạc cáp')}
            />
            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_headphone}
                linkTo={'/'}
                menuTop={context.menu_headphone}
                title={'TAI NGHE'}
                listProduct={subProduct(listProduct,'Tai nghe')}
            />
            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_speaker}
                linkTo={'/'}
                menuTop={context.menu_speaker}
                title={'LOA'}
                listProduct={subProduct(listProduct,'Loa')}
            />
            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_smartHome}
                linkTo={'/'}
                menuTop={context.menu_smartHome}
                title={'THIẾT BỊ THÔNG MINH'}
                listProduct={subProduct(listProduct,'Thiết bị nhà thông minh')}
            />
            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_gaming}
                linkTo={'/'}
                menuTop={context.menu_gaming}
                title={'PHỤ KIỆN GAMING'}
                listProduct={listProduct}
            />

    </>
  )
}

export default ListBlockAccessories