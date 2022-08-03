import './Analysis.scss';
import AnalysisCard from './AnalysisCard';
function Analysis({min, max, mean}) {
    return (
        <div className="Analysis">
            <h4 className='analysisSubtitle'>Min</h4>
            <AnalysisCard title={'All time'} value={min}/>
            <h4 className='analysisSubtitle'>Max</h4>
            <AnalysisCard title={'All time'} value={max}/>
            <h4 className='analysisSubtitle'>Mean</h4>
            <AnalysisCard title={'All time'} value={mean}/>
        </div>
    );
}

export default Analysis;
