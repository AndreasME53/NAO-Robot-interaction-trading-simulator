import React, { useState, useEffect } from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

export default function StockGraph({ setCurrentPrice, setCount, stockData, stockName, savedGraphData, setGraphDataAction }) {
  const [graphData, setGraphData] = useState<any>([]);

  useEffect(() => {
    return () => {
      setGraphData(state => {
        setGraphDataAction(stockName, state);
        return state;
      });
    };
  }, [setGraphDataAction, stockName]);

  useEffect(() => {
    let increment = 1;
    let index = 0;
    if (savedGraphData) {
      setGraphData(savedGraphData);
      index = stockData.indexOf(savedGraphData.pop());
    }

    for (let i = index; i < stockData.length; i++) {
      let stockDataTimeHandler = setTimeout(function() {
        setCurrentPrice(stockData[i]);
        setCount(i);

        setGraphData(data => {
          let updateGraphData = [...data, stockData[i]];
          if (updateGraphData.length > 20) updateGraphData.shift();
          return updateGraphData;
        });
        clearTimeout(stockDataTimeHandler);
      }, 1600 * increment);

      increment = increment + 1;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Sparklines data={graphData} limit={15} height={40}>
      <SparklinesLine style={{ fill: 'none' }} color="#1D365E" />
      <SparklinesSpots />
    </Sparklines>
  );
}
