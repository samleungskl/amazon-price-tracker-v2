import './AsinListItem.scss';

function AsinListItem({ asin, asinCurrentPrice, asinDesiredPrice, asinFullUrl, asinImageUrl, asinLastUpdate, asinName, asinArray, changeAsinVisibleFn, changeValueFn }) {
    const isBuyNow = asinDesiredPrice >= asinCurrentPrice
    return (
        <div className="AsinListItem">
            <img src={asinImageUrl} className='image' alt={asin}></img>
            <div className='allInfoContainer'>
                <div className='asinContainer'>
                    <a className='asin' href={asinFullUrl}>{asin}</a>
                    <a className='asinName' href={asinFullUrl}>{asinName}</a>
                </div>

                <div>
                    <div className='priceInfoContainer'>
                        <div className='currentPrice'>Current<br></br>${asinCurrentPrice}</div>
                        <div className='targetPrice'>Target<br></br>${asinDesiredPrice}</div>
                    </div>
                    <div className='lastUpdatedDate'>{asinLastUpdate}</div>
                    <div className='buttonContainer'>
                        <a className='priceAnalysisBtn' onClick={()=>{changeValueFn('currentPage','priceAnalysis'); changeValueFn('selectedRecord', asinArray)}}>Price Analysis</a>
                        {isBuyNow === true && <a className='buyNowBtn' href={asinFullUrl} >BUY NOW!</a>}
                        {isBuyNow === false && <a className='doNotBuyBtn' href={asinFullUrl} >DO NOT BUY</a>}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AsinListItem;
