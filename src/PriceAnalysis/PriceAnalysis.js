import LineChart from './LineChart/LineChart';
import './PriceAnalysis.scss';
import PriceHistoryTable from './PriceHistoryTable/PriceHistoryTable';

function PriceAnalysis({ asinArray }) {
    return (
        <div className="PriceAnalysis">
            <h3>Price Analysis for {asinArray.asin}</h3>
            <LineChart dataArray={asinArray.data} asin={asinArray.asin}/>
            <div>Min: ${asinArray.asinPriceMin}</div>
            <div>Max: ${asinArray.asinPriceMax}</div>
            <div>Mean: ${asinArray.asinPriceMean}</div>
            <PriceHistoryTable dataArray={asinArray.data}/>
        </div>
    );
}

export default PriceAnalysis;
