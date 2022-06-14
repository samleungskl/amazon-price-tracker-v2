import './App.scss';
import AsinList from './AsinList/AsinList';
import useApplicationData from './hooks/useApplicationData';

function App() {
  const { state } = useApplicationData();
return (
  <div className="App">
    <h1>Amazon Price Tracker V2</h1>
    <h2>Data is fetched at 12:00am PST everyday </h2>
    <AsinList asinList={state.asin} />
  </div>
);
}

export default App;
