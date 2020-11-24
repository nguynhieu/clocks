import React from 'react';

import cls from './style.module.scss';

const MainClock = () => {
  return <div className={cls['main-clock']}>
    <div className={cls['main-clock-main']}>
      <div className={cls['show-time']}>
        <div>
          00
        </div>
        <div>
          Hours
        </div>
      </div>
      
      <div className={cls['show-time']}>
        <div>
          00
        </div>
        <div>
          Minutes
        </div>
      </div>

      <div className={cls['show-time']}>
        <div>
          00
        </div>
        <div>
          Seconds
        </div>
      </div>
    </div>

    <div className={cls['main-clock-reflect']}>
      <div className={cls['show-time']}>
        <div>
          00
        </div>
        <div>
          Hours
        </div>
      </div>
      
      <div className={cls['show-time']}>
        <div>
          00
        </div>
        <div>
          Minutes
        </div>
      </div>

      <div className={cls['show-time']}>
        <div>
          00
        </div>
        <div>
          Seconds
        </div>
      </div>
    </div>

  </div>
}

export default MainClock;