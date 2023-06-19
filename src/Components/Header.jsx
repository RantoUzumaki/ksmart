import { TbBellRinging2, TbGridDots } from "react-icons/tb";
import { FiLogOut, FiSearch, FiSettings } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import userImg from "./../assets/user.jpg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <p className="logo-text">Logo</p>
        <button>
          <TbGridDots />
        </button>
      </div>
      <div className="header-right">
        <button>
          <FiSearch />
        </button>
        <button>
          <FiSettings />
        </button>
        <button>
          <TbBellRinging2 />
        </button>
        <button>
          <AiOutlineUser />
        </button>
        <button>
          <img src={userImg} alt="user" />
        </button>
        <button>
          <FiLogOut />
        </button>
      </div>
    </div>
  );
};

export default Header;
