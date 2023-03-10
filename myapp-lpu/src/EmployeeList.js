import React from "react";
import employees from "./Employees";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = () => {
  return (
    <div className="container">
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeeList;
