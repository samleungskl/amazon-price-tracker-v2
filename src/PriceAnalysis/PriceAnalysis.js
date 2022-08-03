import LineChart from './LineChart/LineChart';
import './PriceAnalysis.scss';
import PriceHistoryTable from './PriceHistoryTable/PriceHistoryTable';

function PriceAnalysis({ asinArray, changeAsinVisibleFn}) {
    return (
        <div className="PriceAnalysis">
            <a className="priceAnaylsisBtn" onClick={()=>changeAsinVisibleFn(asinArray.asin)}>Price Analysis</a>
            {asinArray.asinVisible === true && 
            <>
            <LineChart dataArray={asinArray.data} asin={asinArray.asin}/>
            <div>Min: ${asinArray.asinPriceMin}</div>
            <div>Max: ${asinArray.asinPriceMax}</div>
            <div>Mean: ${asinArray.asinPriceMean}</div>
            <PriceHistoryTable dataArray={asinArray.data}/>
            </>
            }
        </div>
    );
}

export default PriceAnalysis;
