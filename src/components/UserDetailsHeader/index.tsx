import React, { useEffect } from 'react';
import { UserDetailsWrapper } from './style';
// import { Timer } from 'components/HeaderTimer';
import { TimerContainer } from 'pages/Dashboard/containers';
import { Card, CardTitle, Table } from 'reactstrap';
import Swal from 'sweetalert2';

export default function UserDetailsHeader({ userDetails, isTimeStarted, currentTime, timeOut, setTimeOutAction }) {
  useEffect(() => {
    if (timeOut) goalAlert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeOut]);

  useEffect(() => {
    if (currentTime?.charAt(0) === '-') setTimeOutAction(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTime]);

  const goalAlert = () => {
    if (userDetails.balance > userDetails.goalBalance) Swal.fire('Goal Achieved!', 'Congratulations!', 'success');
    else Swal.fire('Failed!', `you needed ${userDetails.goalBalance - userDetails.balance} more to achieve goal`, 'error');
  };

  return (
    <React.Fragment>
      <UserDetailsWrapper>
        <div className="main-div">
          <Card body className="card-color" style={{ borderRadius: '15px', height: '70px' }}>
            <CardTitle className="mt-0" style={{ fontSize: '20px', width: '90%' }}>
              <Table>
                <tbody>
                  <td>{`Balance: $ ${userDetails.balance}`}</td>
                  <td>{`Goal: $ ${userDetails.goalBalance}`}</td>
                  {isTimeStarted ? (
                    <td>
                      <TimerContainer />
                    </td>
                  ) : (
                    <td>{`Time Left: ${userDetails.timeDuration}`}</td>
                  )}
                </tbody>
              </Table>
            </CardTitle>
          </Card>
        </div>
      </UserDetailsWrapper>
    </React.Fragment>
  );
}
