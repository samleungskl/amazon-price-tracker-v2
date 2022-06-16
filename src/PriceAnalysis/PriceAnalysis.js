import './PriceAnalysis.scss';
function PriceAnalysis({ asinPriceMin, asinPriceMax, asinPriceMean }) {
    return (
        <div className="PriceAnalysis">
            <div>Min: ${asinPriceMin}</div>
            <div>Max: ${asinPriceMax}</div>
            <div>Mean: ${asinPriceMean}</div>
        </div>
    );
}

export default PriceAnalysis;
