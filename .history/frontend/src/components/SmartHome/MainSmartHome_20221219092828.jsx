import React, {useContext} from 'react'
import { SmartHomeContext } from '../../context/smartHomeContext'
import BlockItemProduct from '../SubComponents/BlockItemProduct';
import TopSlider from '../Tablet/TopSlider';
const MainSmartHome = () => {

    const context = useContext(SmartHomeContext);

    const renderSubProduct = (list_product, sub) => {
        return list_product.filter(val => val.subCate.includes(sub))
      }
      
    return (
        <div className='main-smarthome'>
            <div className="container">
                <TopSlider sliders={context.sliderTablet} banners={context.bannerTablet} />

                <BlockItemProduct 
                    banner={context.banner_block_product.banner_block_healthycare}
                    linkTo={'/'}
                    menuTop={context.menu_healthycare}
                    title={'SẢN PHẨM'}
                />

                <BlockItemProduct 
                    banner={context.banner_block_product.banner_block_home}
                    linkTo={'/'}
                    menuTop={context.menu_home}
                    title={'SẢN PHẨM'}
                />

            </div>
        </div>
    )
}

export default MainSmartHome
