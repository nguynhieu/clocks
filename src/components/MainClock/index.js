import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';

import cls from './style.module.scss';

const MainClock = ({ currentTimezone }) => {
  const [currentTime, setCurrentTime] = useState(() => moment().tz(currentTimezone));
  const [hours, setHours] = useState(() => currentTime.format('HH'));
  const [minutes, setMinutes] = useState(() => currentTime.format('mm'));
  const [seconds, setSeconds] = useState(() => currentTime.format('ss'));

  useEffect(() => {
    setCurrentTime(moment().tz(currentTimezone));
  }, [currentTimezone])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().tz(currentTimezone));
    }, 1000)

    return () => {
      clearInterval(intervalId);
    }
  }, [currentTimezone])

  useEffect(() => {
    setHours(currentTime.format('HH'));
    setMinutes(currentTime.format('mm'));
    setSeconds(currentTime.format('ss'));
  }, [currentTime])

  return <div className={cls['main-clock']}>
    <div className={cls['main-clock-main']}>
      <div className={cls['show-time']}>
        <div>
          {hours}
        </div>
        <div>
          Hours
        </div>
      </div>
      
      <div className={cls['show-time']}>
        <div>
          {minutes}
        </div>
        <div>
          Minutes
        </div>
      </div>

      <div className={cls['show-time']}>
        <div>
          {seconds}
        </div>
        <div>
          Seconds
        </div>
      </div>
    </div>

    <div className={cls['main-clock-reflect']}>
      <div className={cls['show-time']}>
        <div>
          {hours}
        </div>
        <div>
          Hours
        </div>
      </div>
      
      <div className={cls['show-time']}>
        <div>
          {minutes}
        </div>
        <div>
          Minutes
        </div>
      </div>

      <div className={cls['show-time']}>
        <div>
          {seconds}
        </div>
        <div>
          Seconds
        </div>
      </div>
    </div>

  </div>
}

export default MainClock;