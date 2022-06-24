import './PriceHistoryTable.scss';
import PriceHistoryTableItem from './PriceHistoryTableItem';
function priceHistoryTable({ dataArray }) {
    const result = dataArray.map((element) => {
        return <PriceHistoryTableItem dataDate={element.dataCreatedDate} dataPrice={element.dataPrice} key={element.dataUid} />
    })
    return (
        <div className="PriceHistoryTable">
            <table>
                <tbody>
                    <tr>
                        <th className='tableHeader'>Date</th>
                        <th className='tableHeader'>Price</th>
                    </tr>
                    {result}
                </tbody>
            </table>
        </div>
    );
}

export default priceHistoryTable;
