import Analysis from './Analysis/Analysis';
import LineChart from './LineChart/LineChart';
import './PriceAnalysis.scss';
import PriceHistoryTable from './PriceHistoryTable/PriceHistoryTable';

function PriceAnalysis({ asinArray, changeValueFn, priceAnalysisTab }) {
    console.log(asinArray)
    return (
        <div className="PriceAnalysis">
            <div className='backButtonContainer'>
            <a className='backButton' onClick={() => { changeValueFn('currentPage', 'home') }}>Back</a>
            </div>
            <div className='asinInfoContainer'>
                <div className='asinNameFromAnalysis'>{asinArray.asinName}</div>
            </div>
            <div className='LineChartContainer'>
                <LineChart dataArray={asinArray.data} asin={asinArray.asin} />
            </div>
            <div className='tabButtonsContainer'>
                <a className='tabButton' onClick={() => { changeValueFn('priceAnalysisTab', 'analysis') }}>Analysis</a>
                <a className='tabButton' onClick={() => { changeValueFn('priceAnalysisTab', 'data') }}>Data</a>
            </div>

            {priceAnalysisTab === 'data' && <PriceHistoryTable dataArray={asinArray.data} />}
            {priceAnalysisTab === 'analysis' && <Analysis min={asinArray.asinPriceMin} max={asinArray.asinPriceMax} mean={asinArray.asinPriceMean} current={asinArray.asinCurrentPrice} desire={asinArray.asinDesiredPrice} />}
            <div className='asinCreatedDateFromAnalysis'>Created: {asinArray.asinCreatedDate} </div>
            <div className='asinLastUpdateDateFromAnalysis'>Last Update: {asinArray.asinLastUpdate} </div>
        </div>
    );
}

export default PriceAnalysis;
