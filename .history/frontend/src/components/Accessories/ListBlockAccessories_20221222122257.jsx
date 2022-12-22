import React,{useContext} from 'react'
import BlockItemProduct from '../SubComponents/BlockItemProduct'
import { AccessoryContext } from '../../context/accessoryContext'

const ListBlockAccessories = ({listProduct}) => {

    const context = useContext(AccessoryContext)

    const subProduct = (list_product, sub) => {
        return list_product?.filter(val => val.subCate?.toLowerCase().includes(sub.toLowerCase()))
    }

    const mouseGaming = subProduct(listProduct,'Chuột máy tính')
    console.log(mouseGaming)
    // const listKeyboard = subProduct(listProduct,'Bàn phím')

    // const listGaming = [...listKeyboard , ...mouseGaming]

  return (
    <>

            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_apple}
                linkTo={'/'}
                menuTop={context.menu_apple_accessories}
                title={'PHỤ KIỆN APPLE'}
                listProduct={subProduct(listProduct,'Phụ kiện apple')}
                category={'Phụ kiện'}
            />

            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_battery}
                linkTo={'/'}
                menuTop={context.menu_battery}
                title={'SẠC DỰ PHÒNG'}
                listProduct={subProduct(listProduct,'Sạc dự phòng')}
                category={'Phụ kiện'}
            />
            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_chargeCable}
                linkTo={'/'}
                menuTop={context.menu_chargeCable}
                title={'CÁP SAC'}
                listProduct={subProduct(listProduct,'Sạc cáp')}
                category={'Phụ kiện'}
            />
            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_headphone}
                linkTo={'/'}
                menuTop={context.menu_headphone}
                title={'TAI NGHE'}
                listProduct={subProduct(listProduct,'Tai nghe')}
                category={'Phụ kiện'}
            />
            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_speaker}
                linkTo={'/'}
                menuTop={context.menu_speaker}
                title={'LOA'}
                listProduct={subProduct(listProduct,'Loa')}
                category={'Phụ kiện'}
            />
            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_smartHome}
                linkTo={'/'}
                menuTop={context.menu_smartHome}
                title={'THIẾT BỊ THÔNG MINH'}
                listProduct={subProduct(listProduct,'Thiết nhà bị thông minh')}
                category={'Phụ kiện'}
            />
            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_gaming}
                linkTo={'/'}
                menuTop={context.menu_gaming}
                title={'PHỤ KIỆN GAMING'}
                listProduct={listProduct}
                category={'Phụ kiện'}
            />

    </>
  )
}

export default ListBlockAccessories