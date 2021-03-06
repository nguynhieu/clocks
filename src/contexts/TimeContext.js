import React, { useEffect, useState } from 'react';

export const TimeContext = React.createContext();

export const TimeProvider = ({ children }) => {
  // get current timezone
  const [currentTimezone, setCurrentTimezone] = useState(() => {
    let timezone = localStorage.getItem('currentTimezone');
    timezone = localStorage.getItem('currentTimezone');
    if (!timezone) {
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      localStorage.setItem('currentTimezone', timezone);
    }
    return timezone;
  });

  // get recently timezone array
  const [recentTimezones, setRecentTimezones] = useState(() => {
    let timezones;
    timezones = localStorage.getItem('recentTimezones');

    if (!timezones) {
      timezones = Intl.DateTimeFormat().resolvedOptions().timeZone;
      return [timezones];
    };

    return JSON.parse(timezones);
  });

  useEffect(() => {
    localStorage.setItem('recentTimezones', JSON.stringify(recentTimezones));
    localStorage.setItem('currentTimezone', currentTimezone);
  }, [currentTimezone, recentTimezones])
  
  return (
    <TimeContext.Provider value={{
      currentTimezone,
      setCurrentTimezone,
      recentTimezones,
      setRecentTimezones
    }}>
      {children}
    </TimeContext.Provider>
  )
}