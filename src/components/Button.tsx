import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
}

export const Button = ({label, onClick}: ButtonProps) => <button name={label} onClick={onClick}>{label}</button>



//export const Button: React.FC<{ label: string, onClick: () => void }> = ({ label, onClick }) => (
//  <button name={label} onClick={onClick}>{label}</button>
//);

