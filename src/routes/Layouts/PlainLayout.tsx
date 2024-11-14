import { Outlet } from "react-router-dom";
import { ReactNode } from "react";

type PlainLayoutProps = {
  children?: ReactNode;
};

const PlainLayout = ({ children }: PlainLayoutProps) => {
  return (
    <div>
      {children ? children : <Outlet />}
    </div>
  );
};

export default PlainLayout;