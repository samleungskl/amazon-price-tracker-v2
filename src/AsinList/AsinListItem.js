import './AsinListItem.scss';
import PriceAnalysis from '../PriceAnalysis/PriceAnalysis';

function AsinListItem({ asin, asinCurrentPrice, asinDesiredPrice, asinFullUrl, asinImageUrl, asinLastUpdate, asinName, asinArray, changeAsinVisibleFn}) {
    const isBuyNow = asinDesiredPrice >= asinCurrentPrice
    return (
        <div className="AsinListItem">
            {isBuyNow && <a className='buyNowText' href={asinFullUrl}><h2>Buy Now!</h2></a>}
            <a href={asinFullUrl}>{asinName}</a>
            <img src={asinImageUrl} className='image'></img>
            <div>ASIN: {asin}</div>
            <div>Current Price: ${asinCurrentPrice}</div>
            <div>Target Price: ${asinDesiredPrice}</div>
            <div>Last updated: {asinLastUpdate}</div>
            <PriceAnalysis asinArray={asinArray} changeAsinVisibleFn={changeAsinVisibleFn}/>
        </div>
    );
}

export default AsinListItem;
