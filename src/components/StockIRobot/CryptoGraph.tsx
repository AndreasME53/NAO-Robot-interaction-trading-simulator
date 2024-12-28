import React, { useState, useEffect } from 'react';

import { Line } from 'react-chartjs-2';

//ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

var speed = 250;
const options = {
  animation: {
    duration: speed * 1.5,
    easing: 'linear'
  },
  interaction: {
    intersect: false
  },
  plugins: {
    legend: false
  },
  scales: {
    x: {
      type: 'linear'
    }
  }
};

export default function CryptoGraph({ setCurrentPrice }) {
  const [graphData, setGraphData] = useState<any>([]);
  const [stockData] = useState<any>([]);

  useEffect(() => {
    let increment = 1;
    stockData.forEach(function(stockValue) {
      let stockDataTimeHandler = setTimeout(function() {
        setCurrentPrice(stockValue);

        setGraphData(data => {
          let updateGraphData = [...data, stockValue];
          if (updateGraphData.length > 20) updateGraphData.shift();
          return updateGraphData;
        });
        clearTimeout(stockDataTimeHandler);
      }, 1600 * increment);

      increment = increment + 1;
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const labels = graphData.map(() => '');

  const data = {
    labels,
    datasets: [
      {
        // label: 'Dataset 1',
        data: graphData,
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
        radius: 0
        // backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  };

  return <Line options={options} data={data} />;
}
