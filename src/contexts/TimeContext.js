import React, { useState } from 'react';

export const TimeContext = React.createContext();

export const TimeProvider = ({ children }) => {
  // get current timezone
  const [currentTimezone, setCurrentTimezone] = useState(() => {
    const timezone = localStorage.getItem('currentTimezone');
    return timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
  });

  // get recently timezone array
  const [recentTimezones, setRecentTimezones] = useState(() => {
    const timezones = localStorage.getItem('recentTimezones');
    return timezones || Intl.DateTimeFormat().resolvedOptions().timeZone;
  });
  
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