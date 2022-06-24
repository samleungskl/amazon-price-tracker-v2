import './PriceHistoryTableItem.scss';
function PriceHistoryTableItem({ dataDate, dataPrice }) {
    return (
        <tr className="PriceHistoryTableItem">
                <td className='tableField'>{dataDate}</td>
                <td className='tableField'>${dataPrice}</td>
        </tr>
    );
}

export default PriceHistoryTableItem;
