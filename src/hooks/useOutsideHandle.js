import { useEffect } from 'react';

const useOutsideHandle = (ref, cb) => {
  useEffect(() => {
    // handle if clicked on outside of element
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
          cb();
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

export default useOutsideHandle;