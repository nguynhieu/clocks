import React from 'react';

import { Logo } from '../../assets/images';

import cls from './style.module.scss';

const Header = () => {
  return (
    <div className={cls.header}>
      <div className="container">
        <img src={Logo} alt="Logo"/>
        <span>Live Clock</span>
      </div>
    </div>
  )
}

export default Header;