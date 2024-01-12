import React from 'react'
import "./FlashSale.css"
import { useCountdown } from '../../hooks/useCountDown';
import ProductGallery from '../ProductGallery/ProductGallery';

const FlashSale = ({ flash_sale }) => {

    const [days, hours, minutes, seconds] = useCountdown(new Date(flash_sale.ends_in));

    return (
        <>
            {
                days + hours + minutes + seconds <= 0 ?
                    <></>
                    :
                    <div className='flash-sale'>
                        <div className='flash-header'>
                            <div className='flash-box'></div>
                            <div className='flash-today'>Today’s</div>
                        </div>
                        <div className='flash-content'>
                            <div className='flash-text'>Flash Sales</div>
                            <div className='flash-time'>
                                <div className='flash-days'>{(days + '').padStart(2, '0')}</div><p>:</p>
                                <div className='flash-hours'>{(hours + '').padStart(2, '0')}</div><p>:</p>
                                <div className='flash-minutes'>{(minutes + '').padStart(2, '0')}</div><p>:</p>
                                <div className='flash-seconds'>{(seconds + '').padStart(2, '0')}</div>
                            </div>
                        </div>
                    </div>
            }
            <ProductGallery products={flash_sale.products} />
        </>
    )
}

export default FlashSale