import React, { useContext } from "react";

import cls from './style.module.scss';

import { MainClock, Clock, Header } from '../../components';
import { TimeContext } from "../../contexts/TimeContext";

const Home = () => {
  const { currentTimezone, recentTimezones }  = useContext(TimeContext);

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
              recentTimezones.map((item, index) => <Clock key={index} timezone={item}/> )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;