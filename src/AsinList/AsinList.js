import './AsinList.scss';
import AsinListItem from './AsinListItem';
function AsinList({ asinList, changeAsinVisibleFn, changeValueFn }) {
    const result = asinList.map((element, index) => {
        return <div className="AsinList" key={element.asinUid}>
            <AsinListItem
            asin={element.asin}
            asinCurrentPrice={element.asinCurrentPrice}
            asinDesiredPrice={element.asinDesiredPrice}
            asinFullUrl={element.asinFullUrl}
            asinImageUrl={element.asinImageUrl}
            asinLastUpdate={element.asinLastUpdate}
            asinName={element.asinName} 
            asinArray={element}
            changeAsinVisibleFn={changeAsinVisibleFn}
            changeValueFn={changeValueFn}/>
        </div>
    })
    return (
        <div className="AsinList">
            <h3 className='appSubtitle'>Monitoring</h3>
            {result}
        </div>
    );
}

export default AsinList;
