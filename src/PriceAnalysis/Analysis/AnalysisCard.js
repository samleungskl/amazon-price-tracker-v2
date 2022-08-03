import './AnalysisCard.scss';
function AnalysisCard({title, value}) {
    return (
        <div className="AnalysisCard">
            <div className='analysisCardTitle'>{title}</div>
            <div className='analysisCardValue'>${value}</div>
        </div>
    );
}

export default AnalysisCard;
