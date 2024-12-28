import React, { useEffect } from 'react';
import { userRequestedHelps, userTrades } from 'data';
import { AccountWrapper } from './style';
import { Row, Col, Card, CardBody, CardTitle, Table } from 'reactstrap';

export default function AccountHistory({ accountHistory, requestedHelps, participantId, accountHistoryAction, getRequestedHelpsAction }) {
  useEffect(() => {
    accountHistoryAction(participantId);
    getRequestedHelpsAction(participantId);
  }, [accountHistoryAction, getRequestedHelpsAction, participantId]);
  return (
    <React.Fragment>
      <AccountWrapper>
        <div style={{ width: '100%' }}>
          <h1 className="display-5 mt-5">Account History</h1>
        </div>
        <Row className="mt-5">
          <Col md={11} className="ml-5">
            <Card>
              <CardBody className="cardHeight">
                <CardTitle className=" h4 mb-4">
                  <b> Your Trades:</b>
                </CardTitle>
                <div className="table-responsive">
                  <Table className="table mb-0">
                    <thead>
                      <tr>
                        {userTrades.map((trade, key) => {
                          return <th key={key}>{trade}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {accountHistory.map((history, index) => {
                        return (
                          <tr key={index}>
                            <td>{`#${index + 1}`}</td>
                            <td>{history.stockName}</td>
                            <td>{history.amount}</td>
                            <td>{history.entryPrice}</td>
                            <td>{history.exitPrice}</td>
                            <td>{history.entryTime}</td>
                            <td>{history.exitTime}</td>
                            <td>{history.profit}</td>
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

        <Row className="mt-5">
          <Col md={11} className="ml-5">
            <Card>
              <CardBody className="cardHeight">
                <CardTitle className=" h4 mb-4">
                  <b> Requested Help:</b>
                </CardTitle>
                <div className="table-responsive">
                  <Table className="table mb-0">
                    <thead>
                      <tr>
                        {userRequestedHelps.map((requestedHelp, key) => {
                          return <th key={key}>{requestedHelp}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {requestedHelps.map((requestedHelp, index) => {
                        return (
                          <tr key={index}>
                            <td>{`#${index + 1}`}</td>
                            <td>{requestedHelp.stockName}</td>
                            <td>{requestedHelp.time}</td>
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
      </AccountWrapper>
    </React.Fragment>
  );
}
