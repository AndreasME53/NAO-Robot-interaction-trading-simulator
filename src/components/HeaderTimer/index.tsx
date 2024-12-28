import React, { useState, useEffect } from 'react';
import moment from 'moment';
import cx from 'classnames';

export const Timer = ({ setTimeAction, userTimeDuration }) => {
  const [duration, setDuration] = useState<any>(moment.duration(userTimeDuration || 10, 'minutes'));
  duration._data.minutes = userTimeDuration - 1;
  let [durationString] = useState<any>(null);
  const [endTime, setEndTime] = useState<any>(null);
  const [isActive] = useState<any>(true);

  function handleTime() {
    let time = `${negativeMark}${Math.abs(duration.minutes())
      .toString()
      .padStart(2, '0')}:${Math.abs(duration.seconds())
      .toString()
      .padStart(2, '0')}`;
    setTimeAction(time);
    if (isNaN(parseInt(time.charAt(0)))) return '00:00.0';
    else return time;
  }

  useEffect(() => {
    let timeout: any = null;
    if (isActive) {
      if (endTime === null) {
        setEndTime(moment().add(duration));
      }
      timeout = setTimeout(() => {
        setDuration(moment.duration(endTime.diff(moment())));
      }, 100);
    } else if (!isActive && endTime !== null) {
      setEndTime(null);
      clearTimeout(timeout);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isActive, duration, endTime]);

  const seconds = duration.asSeconds();
  const nearEnd = seconds <= 60;
  const superNearEnd = seconds <= 30;
  const isNegative = seconds < 0;
  const negativeMark = isNegative ? '-' : '';

  durationString = handleTime();
  const timeClasses = cx('time', { nearEnd, superNearEnd });

  return (
    <div className="no-padding">
      {durationString === '00:00.0' ? <div className={timeClasses}>{'Time Out'}</div> : <div className={timeClasses}>{durationString}</div>}
      <div className="row"></div>
    </div>
  );
};
