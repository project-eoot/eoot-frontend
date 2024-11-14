import { Link } from "react-router-dom";

import navAddPost from "@assets/navigator/navAddPost.svg";
import navHome from "@assets/navigator/navHome.svg";
import navMyPage from "@assets/navigator/navMyPage.svg";
import navPostList from "@assets/navigator/navPostList.svg";
import navSearch from "@assets/navigator/navSearch.svg";

const Navigator = () => {
  return (
    <div className="sticky bottom-0 items-center flex h-14 justify-around bg-white shrink-0 ">
      <Link to="/post">
        <img
          src={navHome}
          className="h-7 mr-3"
        />
      </Link>
      <Link to="/post/search">
        <img
          src={navSearch}
          className="h-7 mr-3"
        />
      </Link>
      <Link to="/post/write">
        <img
          src={navAddPost}
          className="h-7 mr-3"
        />
      </Link>
      <Link to="/post">
        <img
          src={navPostList}
          className="h-7 mr-3"
        />
      </Link>
      <Link to="/profile">
        <img
          src={navMyPage}
          className="h-7 mr-3"
        />
      </Link>
    </div>
  );
};

export default Navigator;
