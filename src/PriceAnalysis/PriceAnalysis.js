import './PriceAnalysis.scss';
function PriceAnalysis({ highestPriceObj, lowestPriceObj, averagePrice }) {
    console.log('lowestPriceObj = ', lowestPriceObj)
    return (
        <div className="PriceAnalysis">
            <div>Lowest: ${lowestPriceObj.dataPrice} on {lowestPriceObj.dataCreatedDate}</div>
            <div>Highest: ${highestPriceObj.dataPrice} on {lowestPriceObj.dataCreatedDate}</div>
            <div>Average: ${averagePrice}</div>
        </div>
    );
}

export default PriceAnalysis;
