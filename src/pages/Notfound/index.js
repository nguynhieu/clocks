import React from "react";

import { Notfound } from '../../assets/images';

import cls from './style.module.scss';

const PageNotfound = () => {
  return (
    <div className={cls.notfound}>
      <img src={Notfound} alt=""/>
    </div>
  )
}

export default PageNotfound;