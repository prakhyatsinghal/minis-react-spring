import React from "react";
import "./EmployeeCard.css";

const EmployeeCard = ({ employee }) => {
  const { name, title, department, image } = employee;

  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="details">
        <h2>{name}</h2>
        <p>{title}</p>
        <p>{department}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
