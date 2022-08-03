import './App.scss';
import AsinList from './AsinList/AsinList';
import useApplicationData from './hooks/useApplicationData';
import PriceAnalysis from './PriceAnalysis/PriceAnalysis';

function App() {
  const { state, changeAsinVisible, changeValueFn } = useApplicationData();
  console.log('state = ', state)
return (
  <div className="App">
    <h1 className='appTitle'>Amazon Price Tracker</h1>
    {state.currentPage === 'home' && <AsinList asinList={state.asin} dataList={state.data} changeAsinVisibleFn={changeAsinVisible} changeValueFn={changeValueFn}/>}
    {state.currentPage === 'priceAnalysis' && <PriceAnalysis asinArray={state.selectedRecord} changeValueFn={changeValueFn} priceAnalysisTab={state.priceAnalysisTab}/>}
  </div>
);
}

export default App;
