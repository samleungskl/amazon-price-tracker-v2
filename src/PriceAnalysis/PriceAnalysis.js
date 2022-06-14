import './PriceAnalysis.scss';
function PriceAnalysis({ lowestPrice, HighestPrice, averagePrice }) {
    console.log('lowestPrice = ', lowestPrice)
    return (
        <div className="PriceAnalysis">
            <div>Lowest: ${lowestPrice}</div>
            <div>Highest: ${HighestPrice}</div>
            <div>Average: ${averagePrice}</div>
        </div>
    );
}

export default PriceAnalysis;
