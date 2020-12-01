import React, { useContext } from "react";

import cls from './style.module.scss';

import { MainClock, Clock, Header } from '../../components';
import { TimeContext } from "../../contexts/TimeContext";

const Home = () => {
  const { currentTimezone, recentTimezones, setCurrentTimezone, setRecentTimezones }  = useContext(TimeContext);

  const viewClock = (timezone) => {
    return () => {
      if (timezone === currentTimezone) { return };
      recentTimezones.splice(recentTimezones.indexOf(timezone), 1);
      recentTimezones.unshift(timezone);
      setRecentTimezones([...recentTimezones]);
      setCurrentTimezone(timezone);
    }
  }

  const deleteClock = (timezone) => {
    return () => {
      if (timezone === currentTimezone) {
        recentTimezones.splice(0, 1);
        setCurrentTimezone(recentTimezones[0]);
        return;
      }

      recentTimezones.splice(recentTimezones.indexOf(timezone), 1);
      setRecentTimezones([...recentTimezones]);
    }
  }

  const deleteAllClock = () => {
    setRecentTimezones([currentTimezone]);
  }

  const generatorId = () => {
    return Math.random().toString(36).substr(2, 9);
  }

  return (
    <div className={cls.home}>
      <Header/>
      <div className='container'>
        <div className={cls['main-clock']}>
          <h3 className="mb-4 main-timezone">{currentTimezone}</h3>
          <MainClock currentTimezone={currentTimezone} />
        </div>

        <div className={cls['recent-clocks']}>
          <h3 className="text-center">Recent clocks</h3>
          <div className={cls['recent-clocks-container']}>
            {
              recentTimezones.map((item, index) => 
                <Clock 
                  viewClock={viewClock(item)}
                  deleteClock={deleteClock(item)}
                  deleteAllClock={deleteAllClock}
                  key={index} 
                  uniqueId={generatorId()}
                  timezone={item}
                /> 
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;