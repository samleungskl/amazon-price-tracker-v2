import Analysis from './Analysis/Analysis';
import LineChart from './LineChart/LineChart';
import './PriceAnalysis.scss';
import PriceHistoryTable from './PriceHistoryTable/PriceHistoryTable';

function PriceAnalysis({ asinArray, changeValueFn, priceAnalysisTab}) {
    return (
        <div className="PriceAnalysis">
            <a className='backButton' onClick={()=>{changeValueFn('currentPage','home')}}>Back</a>
            <h3 className='appSubtitle'>Price Analysis</h3>
            <LineChart dataArray={asinArray.data} asin={asinArray.asin} className='LineChartContainer'/>
            <div className='tabButtonsContainer'>
            <a className='tabButton' onClick={()=>{changeValueFn('priceAnalysisTab','analysis')}}>Analysis</a>
            <a className='tabButton' onClick={()=>{changeValueFn('priceAnalysisTab','data')}}>Data</a>
            </div>
            {priceAnalysisTab === 'data' && <PriceHistoryTable dataArray={asinArray.data}/>}
            {priceAnalysisTab === 'analysis' && <Analysis min={asinArray.asinPriceMin} max={asinArray.asinPriceMax} mean={asinArray.asinPriceMean}/>}
        </div>
    );
}

export default PriceAnalysis;
