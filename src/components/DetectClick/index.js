import React, { useRef } from 'react';

import { useOutsideHandle } from '../../hooks';

const DetectClick = (props) => {
  const wrapperRef = useRef(null);
  useOutsideHandle(wrapperRef, props.cb);

  return <div ref={wrapperRef}>{props.children}</div>;
}

export default DetectClick;