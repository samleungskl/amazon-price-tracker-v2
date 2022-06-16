import './AsinList.scss';
import AsinListItem from './AsinListItem';
import PriceHistoryTable from '../PriceHistoryTable/PriceHistoryTable';
import PriceAnalysis from '../PriceAnalysis/PriceAnalysis';
function AsinList({ asinList, dataList }) {
    const result = asinList.map((element, index) => {
        const filteredData = dataList.filter((data) =>
            data.dataAsin === element.asin
        )
        return <div className="AsinListAndTable" key={element.asinUid}>
            <AsinListItem
            asin={element.asin}
            asinCurrentPrice={element.asinCurrentPrice}
            asinDesiredPrice={element.asinDesiredPrice}
            asinFullUrl={element.asinFullUrl}
            asinImageUrl={element.asinImageUrl}
            asinLastUpdate={element.asinLastUpdate}
            asinName={element.asinName} />
            <PriceAnalysis asinPriceMin={element.asinPriceMin} asinPriceMax={element.asinPriceMax} asinPriceMean={element.asinPriceMean}/>
            <PriceHistoryTable dataArray={filteredData} />
        </div>
    })
    return (
        <div className="AsinList">
            {result}
        </div>
    );
}

export default AsinList;
