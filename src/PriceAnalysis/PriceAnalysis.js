import './PriceAnalysis.scss';
function PriceAnalysis({ lowestPrice, HighestPrice, averagePrice }) {
    return (
        <div className="PriceAnalysis">
            <div>Lowest: ${lowestPrice}</div>
            <div>Highest: ${HighestPrice}</div>
            <div>Average: ${averagePrice}</div>
        </div>
    );
}

export default PriceAnalysis;
