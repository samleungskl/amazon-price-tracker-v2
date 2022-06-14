import './AsinList.scss';
import AsinListItem from './AsinListItem';
function AsinList({ asinList }) {
    const result = asinList.map((element) => {
        return <AsinListItem 
        asin={element.asin} 
        asinCurrentPrice={element.asinCurrentPrice} 
        asinDesiredPrice={element.asinDesiredPrice}
        asinFullUrl={element.asinFullUrl}
        asinImageUrl={element.asinImageUrl}
        asinLastUpdate={element.asinLastUpdate}
        asinName={element.asinName}
        key={element.asinUid} />
    })
    return (
        <div className="AsinList">
            {result}
        </div>
    );
}

export default AsinList;
