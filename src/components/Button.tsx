import React, { Children } from "react";
interface Props {
  children: string;
  onClick: () => void;
  //`?` means btnColor is optional
  //And if value is passing it should be 'primary' or 'secondary'
  btnColor?: "primary" | "secondary" | "danger";
}

// set default value for btnColor as 'primary'
//If there is no value for btnColor in Props it will assign 'Primary'
//Else color will get Props value
const Button = ({ children, onClick, btnColor = "primary" }: Props) => {
  return (
    <button className={`btn btn-${btnColor}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
