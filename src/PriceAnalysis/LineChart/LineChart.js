import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

function LineChart({dataArray, asin}) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
    
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: `Price Trend for ${asin}`,
          },
        },
      };
    
      const labels = dataArray.map((element)=>{
        return element.dataCreatedDate
      });
      const priceData = dataArray.map((element)=>{
        return element.dataPrice
      });
    const data = {
        labels,
        datasets: [
          {
            label: `Price in $CAD`,
            data: priceData,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };

    return (
        <div className="LineChart">
        <Line options={options} data={data} height={200}/>
        </div>
    );
}

export default LineChart;
