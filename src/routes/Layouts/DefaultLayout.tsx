import { Outlet } from "react-router-dom";

import Header from "@/components/Header/Header";
import Navigator from "@/components/Navigator/Navigator";

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Navigator />
    </div>
  );
};

export default DefaultLayout;
