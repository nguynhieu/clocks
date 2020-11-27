import React, { useContext } from 'react';

import { SelectTimezone } from '../';
import { Logo } from '../../assets/images';
import { data }  from '../../data';

import { TimeContext } from '../../contexts/TimeContext';

import cls from './style.module.scss';

const Header = () => {
  const { 
    setCurrentTimezone, 
    recentTimezones, 
    setRecentTimezones 
  } = useContext(TimeContext);
  
  const onChange = (value) => {
    if (recentTimezones.length === 1 && recentTimezones[0] === value) {
      return;
    }

    const indexValue = recentTimezones.indexOf(value)

    if (indexValue !== -1) {
      recentTimezones.splice(indexValue, 1);
      recentTimezones.unshift(value);
      setRecentTimezones([...recentTimezones]);
    } else {
      recentTimezones.unshift(value);
      setRecentTimezones([...recentTimezones]);
    }

    setCurrentTimezone(value);
  }
  
  return (
    <div className={cls.header}>
      <div className="container">
        <div className={cls.container}>
          <div className={cls['header-infor']}>
            <img src={Logo} alt="Logo"/>
            <span className={cls.title}>Live Clock</span>
          </div>
          <div className={cls['header-select-timezone']}>
            <SelectTimezone 
              data={data} 
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;