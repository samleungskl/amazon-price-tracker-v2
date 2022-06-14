import './AsinList.scss';
import AsinListItem from './AsinListItem';
import PriceHistoryTable from '../PriceHistoryTable/PriceHistoryTable';
import PriceAnalysis from '../PriceAnalysis/PriceAnalysis';
function AsinList({ asinList, dataList }) {
    const result = asinList.map((element, index) => {
        const filteredData = dataList.filter((data) =>
            data.dataAsin === element.asin
        )

        const sortedArrayByPrice = filteredData.sort((a, b) => {
            return a.dataPrice - b.dataPrice
        })

        const lowestPriceObj = sortedArrayByPrice[0]
        const lastElementOfArray = sortedArrayByPrice.length - 1
        const highestPriceObj = sortedArrayByPrice[lastElementOfArray]
        const lengthOfElement = sortedArrayByPrice.length
        const priceOnlyArray = filteredData.map((element) => {
            return element.dataPrice
        })
        const sumOfArray = priceOnlyArray.reduce((pv, cv) => pv + cv, 0);
        const averagePrice = sumOfArray / lengthOfElement
    
        return <div className="AsinListAndTable" key={element.asinUid}>
            <AsinListItem
            asin={element.asin}
            asinCurrentPrice={element.asinCurrentPrice}
            asinDesiredPrice={element.asinDesiredPrice}
            asinFullUrl={element.asinFullUrl}
            asinImageUrl={element.asinImageUrl}
            asinLastUpdate={element.asinLastUpdate}
            asinName={element.asinName} />
            <PriceAnalysis lowestPriceObj={lowestPriceObj} highestPriceObj={highestPriceObj} averagePrice={averagePrice}/>
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
