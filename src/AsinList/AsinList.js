import './AsinList.scss';
import AsinListItem from './AsinListItem';
import PriceHistoryTable from '../PriceHistoryTable/PriceHistoryTable';
import PriceAnalysis from '../PriceAnalysis/PriceAnalysis';
function AsinList({ asinList }) {
    const result = asinList.map((element, index) => {
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
            <PriceHistoryTable dataArray={element.data} />
        </div>
    })
    return (
        <div className="AsinList">
            {result}
        </div>
    );
}

export default AsinList;
