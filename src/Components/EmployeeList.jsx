import React from 'react';

const EmployeeList = ({ employeeStatus, clockIn, clockOut, resetTracking }) => {
  return (
    <div className="EmployeeList">
      <div className="employee-wrapper">
        <h2>Employee List</h2>
        <button onClick={resetTracking} id="reset">Reset Tracking</button>
      </div>
      <div className="employee-status">
        <ul>
          {Object.keys(employeeStatus).map((employee) => (
            <li key={employee}>
              <span id="employee">{employee}</span>
              <span>{employeeStatus[employee].clockedIn ? <p id="clocked-in">Clocked In</p> : <p id="clocked-out">Clocked Out</p>}</span>
              <span>Last Time: {employeeStatus[employee].lastTime || 'No Records Found Yet'}</span>
              <span>Total Hours: {employeeStatus[employee].totalHours.toFixed(2)} hours</span>
              <button onClick={() => employeeStatus[employee].clockedIn ? clockOut(employee) : clockIn(employee)} id="clock-in">
                {employeeStatus[employee].clockedIn ? 'Clock Out' : 'Clock In'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmployeeList;