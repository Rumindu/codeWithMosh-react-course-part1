import { ReactNode } from "react";

interface Props {
  
  children: ReactNode;
  clicked: number;
  onClicked: () => void;
}

const Alert = ({ children, clicked,onClicked }: Props) => {
  if (clicked === 1)
    return (
      <div className="alert alert-warning alert-dismissible fade show">
        {children}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClicked}></button>
      </div>
    );
};

export default Alert;
