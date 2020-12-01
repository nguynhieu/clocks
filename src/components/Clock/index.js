import React, { useEffect, useState, useContext, useCallback, useRef } from 'react';
import moment from 'moment-timezone';

import { TimeContext } from '../../contexts/TimeContext';
import { DetectClick } from '../';

import { Menu } from '../../assets/images';

import cls from './style.module.scss';

const ClockComponent = ({ timezone, uniqueId, viewClock, deleteClock, deleteAllClock }) => {
  const { recentTimezones } = useContext(TimeContext);

  const [time, setTime] = useState(() => moment().tz(timezone));
  const [hours, setHours] = useState(() => time.format('hh'));
  const [minutes, setMinutes] = useState(() => time.format('mm'));
  const [seconds, setSeconds] = useState(() => time.format('ss'));
  const [period, setPeriod] = useState(() => time.format('a'));
  const [openOption, setOpenOption] = useState(false);

  const hr = useRef(null);
  const mn = useRef(null);
  const sc = useRef(null);

  const clockAnimation = useCallback(() => {
    // 1s = 6deg
    const tick = 6;

    if (hr.current) {
      hr.current.style.transform = `rotateZ(${hours*tick*5 + seconds/720 + minutes/2}deg)`;
      mn.current.style.transform = `rotateZ(${minutes*tick + seconds/10}deg)`;
      sc.current.style.transform = `rotateZ(${seconds*tick}deg)`;
    }
  }, [hours, minutes, seconds]);

  useEffect(() => {
    setTime(moment().tz(timezone));
  }, [timezone]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment().tz(timezone));
    }, 1000);
    clockAnimation();

    return () => {
      clearInterval(intervalId);
    };
  }, [timezone, clockAnimation]);

  useEffect(() => {
    setHours(time.format('hh'));
    setMinutes(time.format('mm'));
    setSeconds(time.format('ss'));
    setPeriod(time.format('a'));
  }, [time]);

  const onClick = () => {
    openOption ? setOpenOption(false) : setOpenOption(true);
  };
  
  return (
    <div className={cls.wrapper}>
      <DetectClick cb={() => { setOpenOption(false) }}>
        <div className={recentTimezones.length === 1 ? cls['action-none'] : ''}>
          <div className={cls[`clock-option`]}>
            <Menu onClick={onClick}/>
            {openOption && (
              <div onClick={onClick}>
                <li onClick={viewClock}>View</li>
                <li onClick={deleteClock}>Delete</li>
                <li onClick={deleteAllClock}>Delete all</li>
              </div>
            )}
          </div>
        </div>
      </DetectClick>

      <div className={cls.clock}>
        <div className={cls.hour}>
          <div ref={hr} className={cls.hr} id={`hr-${uniqueId}`} />
        </div>
        <div className={cls.min}>
          <div ref={mn} className={cls.mn} id={`mn-${uniqueId}`} />
        </div>
        <div className={cls.sec}>
          <div ref={sc} className={cls.sc} id={`sc-${uniqueId}`} />
        </div>
        <div className={cls.period}>{period}</div>
      </div>
      <p>{timezone}</p>
    </div>
  );
};

export default ClockComponent;