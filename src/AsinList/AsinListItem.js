import './AsinListItem.scss';
import PriceAnalysis from '../PriceAnalysis/PriceAnalysis';

function AsinListItem({ asin, asinCurrentPrice, asinDesiredPrice, asinFullUrl, asinImageUrl, asinLastUpdate, asinName, asinArray, changeAsinVisibleFn }) {
    return (
        <div className="AsinListItem">
            <img src={asinImageUrl} className='image'></img>
            <div className='allInfoContainer'>
                <div className='asinContainer'>
                    <div className='asin'>{asin}</div>
                    <div className='asinName'>{asinName}</div>
                </div>
                <div>
                    <div className='priceInfoContainer'>
                        <div className='currentPrice'>Current<br></br>${asinCurrentPrice}</div>
                        <div className='targetPrice'>Target<br></br>${asinDesiredPrice}</div>
                    </div>
                    <div className='lastUpdatedDate'>{asinLastUpdate}</div>
                    <div className='buttonContainer'>
                        <button className='priceAnalysisBtn'>Price Analysis</button>
                        <button className='BuyBtn' href={asinFullUrl} >DO NOT BUY</button>
                    </div>
                </div>
            </div>
            {/* <PriceAnalysis asinArray={asinArray} changeAsinVisibleFn={changeAsinVisibleFn} /> */}
        </div>
    );
}

export default AsinListItem;
