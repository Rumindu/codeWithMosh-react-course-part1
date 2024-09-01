import React, { Children } from "react";
interface Props {
  children: string;
  onClick: () => void;
  btnColor?: "primary" | "secondary" | "danger";
}

const Button = ({ children, onClick, btnColor = "primary" }: Props) => {
  return (
    <button className={`btn btn-${btnColor}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
