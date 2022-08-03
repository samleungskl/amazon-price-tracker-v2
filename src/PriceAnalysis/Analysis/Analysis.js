import './Analysis.scss';
import AnalysisCard from './AnalysisCard';
function Analysis({min, max, mean,current, desire}) {
    return (
        <div className="Analysis">
            <h4 className='analysisSubtitle'>Current</h4>
            <AnalysisCard title={''} value={current}/>
            <h4 className='analysisSubtitle'>Target</h4>
            <AnalysisCard title={''} value={desire}/>
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
