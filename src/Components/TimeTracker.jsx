import React, { useState } from 'react';
import EmployeeList from './EmployeeList';

const TimeTracker = ({ employees }) => {
  const initialStatus = {};
  employees.forEach(employee => {
    initialStatus[employee] = { clockedIn: false, lastTime: null, totalHours: 0 };
  });

  const [employeeStatus, setEmployeeStatus] = useState(initialStatus);

  const clockIn = (employee) => {
    const currentTime = new Date().toLocaleString();
    setEmployeeStatus({
      ...employeeStatus,
      [employee]: { ...employeeStatus[employee], clockedIn: true, lastTime: currentTime },
    });
  };

  const clockOut = (employee) => {
    const currentTime = new Date().toLocaleString();
    const lastTime = employeeStatus[employee].lastTime;
    const lastClockInTime = lastTime ? new Date(lastTime) : null;
    const hoursWorked = lastClockInTime ? Math.abs(new Date() - lastClockInTime) / 36e5 : 0;

    setEmployeeStatus({
      ...employeeStatus,
      [employee]: {
        ...employeeStatus[employee],
        clockedIn: false,
        lastTime: currentTime,
        totalHours: employeeStatus[employee].totalHours + hoursWorked,
      },
    });
  };

  const resetTracking = () => {
    const resetStatus = {};
    employees.forEach(employee => {
      resetStatus[employee] = { clockedIn: false, lastTime: null, totalHours: 0 };
    });
    setEmployeeStatus(resetStatus);
  };

  return (
    <div className="TimeTracker">
      <EmployeeList 
        employeeStatus={employeeStatus} 
        clockIn={clockIn} 
        clockOut={clockOut} 
        resetTracking={resetTracking}
      />
    </div>
  );
};

export default TimeTracker;