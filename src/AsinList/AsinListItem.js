import './AsinListItem.scss';

function AsinListItem({ asin, asinCurrentPrice, asinDesiredPrice, asinFullUrl, asinImageUrl, asinLastUpdate, asinName }) {
    const isBuyNow = asinDesiredPrice >= asinCurrentPrice
    return (
        <div className="AsinListItem">
            {isBuyNow && <a className='buyNowText' href={asinFullUrl}><h2>Buy Now!</h2></a>}
            <a href={asinFullUrl}>{asinName}</a>
            <div>ASIN: {asin}</div>
            <div>Current Price: ${asinCurrentPrice}</div>
            <div>Target Price: ${asinDesiredPrice}</div>
            <img src={asinImageUrl} className='image'></img>
            <div>Last updated: {asinLastUpdate}</div>
        </div>
    );
}

export default AsinListItem;
