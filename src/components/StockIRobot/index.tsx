import React, { useState } from 'react';
import Avatar from 'react-avatar';
import { StockIRobotWrapper } from './style';
import { Table, Row, Col, Card, CardTitle, Input, CardBody, Button, Media } from 'reactstrap';
import NumberFormat from 'react-number-format';
import toaster from 'utils/toaster';
import StockGraph from './StockGraph';
import { etheriumData } from 'data/graphData';
import { bitcoinCash } from 'data/graphData';
import { litecoin } from 'data/graphData';
import { ripple } from 'data/graphData';
import { cardano } from 'data/graphData';

import { iRobot } from 'data/graphData';
import { alibaba } from 'data/graphData';
import { tencent } from 'data/graphData';
import { roku } from 'data/graphData';
import { netflix } from 'data/graphData';
import { STOCKNAMES } from 'config/enums';
import axios from 'axios';

export default function StockIRobot({
  stockName,
  robotExplanation,
  tradingList,
  totalProfit,
  totalBalance,
  savedGraphData,
  setTradingAction,
  updateTradingAction,
  updateUserStockInfoAction,
  setGraphDataAction,
  addActivityLogAction,
  addRequestedHelpAction,
  currentTime
}) {
  const [currentPrice, setCurrentPrice] = useState<any>();
  const [tradingQuantity, setTradingQuantity] = useState<number>(1);
  const [advisorString, setAdvisorString] = useState<any>({ advice: '', explanation: '' });
  const [count, setCount] = useState<any>(0);

  const buyStock = evt => {
    if (currentTime.charAt(0) !== '-') {
      const totalPrice = currentPrice * tradingQuantity;
      const stockId = 'id' + new Date().getTime();
      if (totalPrice < totalBalance) {
        updateUserStockInfoAction({ currentPrice: totalPrice, buyOrSell: 'buy' });

        const tradeObj = {
          stockName: stockName,
          amount: tradingQuantity,
          entryPrice: currentPrice,
          entryTime: currentTime,
          profit: totalProfit,
          stockId: stockId
        };

        setTradingAction(tradeObj);

        const activityLog = {
          stockName: stockName,
          activityName: 'Buy',
          amount: tradingQuantity,
          priceValue: currentPrice,
          time: currentTime,
          stockId: stockId
        };

        addActivityLogAction(activityLog);
      } else toaster.error('You have insufficient balance to buy these stocks!');
    } else toaster.error('You Cannot buy stock after timeout!');
  };

  const sellStock = (stock, amount, price, stockId, listIndex) => {
    if (currentTime !== '-00:01') {
      if (stock === stockName) {
        updateUserStockInfoAction({ currentPrice: currentPrice * amount, buyOrSell: 'sell' });

        let profit = (currentPrice - price) * amount;

        const updateTradings = tradingList.filter((list, lIndex) => lIndex !== listIndex);
        updateTradingAction({ tradingList: updateTradings, totalProfit: profit > 0 ? totalProfit + profit : totalProfit - profit });
        const activityLog = {
          stockName: stockName,
          activityName: 'Sell',
          amount: amount,
          priceValue: currentPrice,
          profit: profit,
          time: currentTime,
          stockId: stockId
        };

        addActivityLogAction(activityLog);
      } else toaster.error(`Stock from ${stock} cannot be sold here`);
    } else toaster.error('You Cannot sell stock after timeout!');
  };

  const handleInput = event => {
    setTradingQuantity(event.target.value);
  };

  const robotSpeak = () => {
    let text = '';
    // if the stock the user is trading is etherium and the stocks price hasn’t reached 2530.15
    // the message to be past to the robot is "buy at 2530.15 and then sell at 3007.96 "
    if (stockName === 'Etherium (COINBASE:ETH)' && ( count < 20)) {
      const advice = 'buy at 2530.15 and then sell at 3007.96 ';
      text += advice; // temp phrase
      setAdvisorString(state => {
        
        return { ...state, advice: advice };
      });

      if (robotExplanation) {
        // if the settings configuration allows robot explanation
        const explanation = 'This trade has a 93% success rate as analysis has proven';
        text += explanation;
        //axios.get('http://127.0.0.1:5000/speak/' + text).catch(error => {    return Promise.reject();     });
        setAdvisorString(state => {
          return { ...state, explanation: explanation };
        });
      }axios.get('http://127.0.0.1:5000/speak/' + text).catch(error => {    return Promise.reject();     });
    } else if (stockName === 'Etherium (COINBASE:ETH)' && ( count < 36)) {
      const advice = 'buy at 2396.84 and then sell at 3160.31 ';
      text += advice; // temp phrase
      //axios.get('http://127.0.0.1:5000/speak/' + text).catch(error => {    return Promise.reject();     });
      setAdvisorString(state => {
        return { ...state, advice: advice };
      });

      if (robotExplanation) {
        // if the settings configuration allows robot explanation
        const explanation = 'This trade has a 83% success rate as analysis has proven ';
        text += explanation;
        
        setAdvisorString(state => {
          return { ...state, explanation: explanation };
        });
      }axios.get('http://127.0.0.1:5000/speak/' + text).catch(error => {    return Promise.reject();     });
    } else if (stockName === 'iRobot (NASDAQ:IRBT)' && (count < 8)) {
      console.log('its coming here : ', stockName);
      const advice = 'buy at 141.29 and then sell at 169.25 ';
      text += advice;
     // axios.get('http://127.0.0.1:5000/speak/' + text).catch(error => {    return Promise.reject();     });
      setAdvisorString(state => {
        return { ...state, advice: advice };
      });

      // robot explanation code
      if (robotExplanation) {
        // if the settings configuration allows robot explanation
        const explanation = 'This trade has a 88% success rate as analysis has proven ';
        text += explanation;
       
        setAdvisorString(state => {
          return { ...state, explanation: explanation };
        });
      } //axios.get('http://127.0.0.1:5000/speak/' + text).catch(error => {    return Promise.reject();     });
    } else if (stockName === 'iRobot (NASDAQ:IRBT)' && (count < 21)) {
      const advice = 'buy at 161.62 and then sell at 188.2 ';
      text += advice;
      //axios.get('http://127.0.0.1:5000/speak/' + text).catch(error => {    return Promise.reject();     });
      setAdvisorString(state => {
        return { ...state, advice: advice };
      });
      // robot explanation code
      if (robotExplanation) {
        // if the settings configuration allows robot explanation
        const explanation = 'This trade has a 97% success rate as analysis has proven ';
        text += explanation;
       
        setAdvisorString(state => {
          return { ...state, explanation: explanation };
        });
      } //axios.get('http://127.0.0.1:5000/speak/' + text).catch(error => {    return Promise.reject();     });
    }
    // *****
    // will replicated above to create more robot advisor text command examples later ..
    // *****
    else {
      // when there is no trade advice to be given
      const advice = 'no accurate data available';
      text += advice;
      axios.get('http://127.0.0.1:5000/speak/' + text).catch(error => {    return Promise.reject();     });
      setAdvisorString(state => {
        return { ...state, advice: advice };
      });
    }

    const requestedHelp = {
      stockName: stockName,
      time: currentTime
    };

    addRequestedHelpAction(requestedHelp);

     //return axios.get('http://127.0.0.1:5000/speak/' + text).catch(error => {    return Promise.reject();     });
  };

  const getGraphData = () => {
    switch (stockName) {
      case STOCKNAMES['Etherium (COINBASE:ETH)']:
        return etheriumData;
      case STOCKNAMES['Bitcoin Cash (COINBASE:BCH)']:
        return bitcoinCash;
      case STOCKNAMES['Litecoin (COINBASE:LTC)']:
        return litecoin;
      case STOCKNAMES['RIPPLE (COINBASE:XRP)']:
        return ripple;
      case STOCKNAMES['Cardano (COINBASE:ADA)']:
        return cardano;
      case STOCKNAMES['iRobot (NASDAQ:IRBT)']:
        return iRobot;
      case STOCKNAMES['Alibaba (NASDAQ:IRBT)']:
        return alibaba;
      case STOCKNAMES['Tencent (NASDAQ:IRBT)']:
        return tencent;
      case STOCKNAMES['Roku (NASDAQ:IRBT)']:
        return roku;
      case STOCKNAMES['Netflix (NASDAQ:IRBT)']:
        return netflix;
      default:
    }
  };
  return (
    <React.Fragment>
      <StockIRobotWrapper>
        <div style={{ width: '100%' }}>
          <h2 className="display-5 mt-5">{stockName ? stockName : 'Stock: IRobot'}</h2>
        </div>
        <Row className="mt-5">
          <Col md={5} className="ml-8">
            <Row>
              <Card className="cardHeight">
                <CardBody>
                  <CardTitle className=" h4 mb-4">
                    <b> Stock Graph:</b>
                  </CardTitle>
                  <StockGraph
                    setCurrentPrice={setCurrentPrice}
                    setCount={setCount}
                    stockData={getGraphData()}
                    stockName={stockName}
                    savedGraphData={savedGraphData[stockName]}
                    setGraphDataAction={setGraphDataAction}
                  />
                  {/* <CryptoGraph setCurrentPrice={setCurrentPrice} /> */}
                </CardBody>
              </Card>
            </Row>
            <Row>
              <Card className="mini-stats-wid h-200">
                <CardBody>
                  <Media>
                    <Media body>
                      <p className="text-center text-muted">Current Stock Price</p>
                      <h4 className="text-center text-muted mt-10 fs-40">
                        <NumberFormat value={currentPrice} displayType={'text'} thousandSeparator={true} decimalScale={2} prefix={'$'} />
                      </h4>
                    </Media>
                  </Media>
                </CardBody>
              </Card>
            </Row>
            <Row className="mt-5 list-card">
              <Col md={12}>
                <Card className="min-card-height">
                  <Row style={{ marginTop: '2rem' }}>
                    <Col md={4} className="ml-10">
                      <Input type="number" defaultValue={1} onChange={handleInput} style={{ width: 'auto' }} />
                    </Col>
                    <Col md={4} className="ml-10">
                      <Button className="btn buy-btn" style={{ marginLeft: '30px' }} onClick={evt => buyStock(evt)}>
                        Buy
                      </Button>
                    </Col>
                  </Row>
                  <hr />
                  <CardTitle className="h4 mt-0 ml-5">Open Trades: </CardTitle>
                  <hr />
                  <CardBody>
                    <div className="table-responsive">
                      <Table className="align-middle mb-0">
                        <thead>
                          <tr>
                            <th>Stock Name</th>
                            <th>Amount</th>
                            <th>Entry Price</th>
                            <th>Entry Time</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tradingList.map((data, index) => {
                            return (
                              <tr key={index}>
                                {data.stockName === stockName && (
                                  <>
                                    <td>{data.stockName}</td>
                                    <td>{data.amount}</td>
                                    <td>{data.entryPrice}</td>
                                    <td>{data.entryTime}</td>
                                    <Button
                                      onClick={() => sellStock(data.stockName, data.amount, data.entryPrice, data.stockId, index)}
                                      className="sell-btn btn-sm"
                                    >
                                      Sell
                                    </Button>
                                  </>
                                )}
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col md={4} className="trading-advisor-card">
            <Card>
              <Row style={{ position: 'relative', margin: 'auto' }} className="mt-5">
                <div className="ml-5">
                  <Avatar facebookId="100008343750912" size="150" round={'50px'} />
                  <h4 className="mt-5">Trading Advisor</h4>
                  <Button className="btn btn-secondary mt-5" onClick={() => robotSpeak()} style={{ marginLeft: '15px' }}>
                    Request Help
                  </Button>
                </div>
              </Row>
              <hr />
              <CardTitle className="h4 mt-0 ml-5">Advisor's Help: </CardTitle>
              <hr />
              <CardBody>
                <div className="table-responsive">
                  <ul style={{ listStyleType: 'none' }}>
                    {advisorString.advice && (
                      <>
                        <li>{`Advice: ${advisorString.advice}`}</li>
                        <br />
                      </>
                    )}
                    {advisorString.explanation && <li>{`Explanation: ${advisorString.explanation}`}</li>}
                  </ul>
                  
                </div>
              </CardBody>
              <CardTitle className="h4 mt-0 ml-5"></CardTitle>
              
              <CardBody>
                <div className="table-responsive"></div>
              </CardBody>
              <CardTitle className="h4 mt-0 ml-5"></CardTitle>
              <hr />
              <CardBody>
                <div className="table-responsive"></div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </StockIRobotWrapper>
    </React.Fragment>
  );
}
