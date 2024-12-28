import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';
import { DashboardWrapper } from './style';
import { highRiskStocks, lowRiskStocks } from 'data';
import { UserStockInfoFormContainer } from 'pages/Dashboard/containers';

export default function Dashboard({ setStockNameAction, startTimeraction, setShowFormAction, userStockInfo, showForm, currentTime }) {
  useEffect(() => {
    if (currentTime && currentTime.charAt(0) === '-') setShowFormAction(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTrade = stockName => {
    setStockNameAction(stockName);
    startTimeraction(true);
  };
  return (
    <React.Fragment>
      <DashboardWrapper>
        <div className="mt-5 stock-list">
          {userStockInfo?.highRiskStocks && (
            <>
              <h1 className="display-6">High Risk Stocks:</h1>
              <div className="table-responsive">
                <Table className="table mb-0">
                  <tbody>
                    {highRiskStocks.map((stock, key) => {
                      return (
                        <tr key={key}>
                          <td>{stock.name}</td>
                          <td>{stock.rate}</td>
                          <td>
                            <Link to={'/stockirobot'}>
                              <Button className="btn btn-sm btn-color btn-alignment" onClick={() => handleTrade(stock.name)}>
                                Trade
                              </Button>
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </>
          )}
          {userStockInfo?.lowRiskStocks && (
            <>
              <div className="mt-5">
                <h1 className="display-6">Low Risk Stocks:</h1>
                <div className="table-responsive">
                  <Table className="table mb-0">
                    <tbody>
                      {lowRiskStocks.map((stock, key) => {
                        return (
                          <tr key={key}>
                            <td>{stock.name}</td>
                            <td>{stock.rate}</td>
                            <td>
                              <Link to={'/stockirobot'}>
                                {' '}
                                <Button className="btn btn-sm btn-color btn-alignment" onClick={() => handleTrade(stock.name)}>
                                  Trade
                                </Button>
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              </div>
            </>
          )}
        </div>

        {showForm && <UserStockInfoFormContainer />}
      </DashboardWrapper>
    </React.Fragment>
  );
}
