import React from "react";
import { Link } from 'react-router-dom'

import { Notfound } from '../../assets/images';

import cls from './style.module.scss';

const PageNotfound = () => {
  return (
    <div className={cls.notfound}>
      <h3>Page not found</h3>
      <Link to="/">
        Go Home
      </Link>
      <img src={Notfound} alt=""/>
    </div>
  )
}

export default PageNotfound;