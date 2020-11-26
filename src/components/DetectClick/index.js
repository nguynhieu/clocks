import React, { useEffect, useRef } from 'react';

const useOutsideAlerter = (ref, cb) => {
  useEffect(() => {
    // handle if clicked on outside of element
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
          cb()
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, cb]);
}

const DetectClick = (props) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.cb);

  return <div ref={wrapperRef}>{props.children}</div>;
}

export default DetectClick;