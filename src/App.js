import './App.scss';
import AsinList from './AsinList/AsinList';
import useApplicationData from './hooks/useApplicationData';

function App() {
  const { state, changeAsinVisible } = useApplicationData();
  console.log('state = ', state)
return (
  <div className="App">
    <h1>Amazon Price Tracker V2</h1>
    <AsinList asinList={state.asin} dataList={state.data} changeAsinVisibleFn={changeAsinVisible}/>
  </div>
);
}

export default App;
