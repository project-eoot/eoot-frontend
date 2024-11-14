import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import headerChat from "@assets/header/headerChat.svg";
import headerMenu from "@assets/header/headerMenu.svg";
import headerNotification from "@assets/header/headerNotification.svg";
import iconClose from "@assets/iconClose.svg";

const Header = () => {
  const [notiCount] = useState(12);
  const [showSideBar, setShowSideBar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setShowSideBar(false);
  }, [location]);
  return (
    <div className="shrink-0 w-full sticky top-0 h-20 bg-white z-20 flex justify-between items-center">
      <div
        className={`absolute z-30 w-24 top-0 bg-white h-screen transition-all duration-500 ease-in-out shadow-lg transform ${
          showSideBar
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
        id="sideBar">
        <div
          id="sideNav"
          className="flex flex-col mt-3">
          <img
            className="w-4 cursor-pointer m-3 ml-auto"
            src={iconClose}
            onClick={() => setShowSideBar(false)}
          />
          <ul className="font-light space-y-4 mx-3">
            <li>
              <Link to="/post">홈</Link>
            </li>
            <li>
              <Link to="/post/search">검색</Link>
            </li>
            <li>
              <Link to="/post">게시글</Link>
            </li>
            <li>
              <Link to="/chat/list">채팅</Link>
            </li>
            <li>
              <Link to="/notifications">알림</Link>
            </li>
            <li>
              <Link to="/profile">프로필</Link>
            </li>
          </ul>
        </div>
      </div>

      <div onClick={() => setShowSideBar(true)}>
        <img
          src={headerMenu}
          className="w-8 h-6 mx-3"
        />
      </div>
      <div className="flex">
        <Link to="/chat/list">
          <img
            src={headerChat}
            className="h-8 mr-3"
          />
        </Link>
        <Link to="/notifications">
          <div className="relative">
            <img
              src={headerNotification}
              className="h-8 mr-5"
            />
            {notiCount > 0 ? (
              <span className="absolute top-0 right-2 px-1 bg-secondary text-light text-xs font-medium rounded-xl h-4 flex items-center justify-center">
                {notiCount}
              </span>
            ) : (
              ""
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
