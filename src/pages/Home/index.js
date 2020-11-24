import React from "react";

import cls from './style.module.scss';

import { MainClock, Header } from '../../components';

const Home = () => {
  return <div className={cls.home}>
    <Header/>
    <div className='container'>
      <MainClock/>
    </div>
  </div>
}

export default Home;