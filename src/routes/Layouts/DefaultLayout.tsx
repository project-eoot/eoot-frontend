import { Outlet } from "react-router-dom";

import Header from "@/components/Header/Header";
import Navigator from "@/components/Navigator/Navigator";

const DefaultLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="h-full overflow-auto">
        <Outlet />
      </div>
      <Navigator />
    </div>
  );
};

export default DefaultLayout;
