import { ReactNode } from "react";

interface Props {
  //change type of children from string to ReactNode
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
