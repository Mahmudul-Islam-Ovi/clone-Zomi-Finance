import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/New Logo.png";
import wallet from "../../assets/ic_wallet_24.a19a6758.svg";

const NavBar = () => {
  const menuItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          NFT
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/earn"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Earn
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Buy
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Referrals
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Ecosystem
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <img width={"50px"} src={logo} alt="logo" />
        <p className="text-white font-bold text-2xl font-mono">Romi Finance</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end gap-5">
        <Link
          to="/"
          className="bg-[#4cad79] hover:bg-[#53a077] w-20 text-center text-white p-2 rounded"
        >
          Trade
        </Link>
        <Link
          to="/"
          className="lg:flex gap-1 text-white border-2 border-slate-500 hover:bg-gray-800 rounded px-2 py-1"
        >
          <img src={wallet} alt="wallet" />
          <p className="text-[15px]">Connect Wallet</p>
        </Link>
        <Link
          to="/"
          className="mr-3 text-white border-2 border-slate-500 hover:bg-gray-800 rounded px-2 py-1"
        >
          <div className="dropdown dropdown-bottom dropdown-end flex">
            <img src={wallet} alt="wallet" />
            <label tabIndex={0} className="btn  btn-xs px-2 py-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 border border-slate-500 shadow bg-base-100 rounded w-52"
            >
              <li>
                <p>Network</p>
              </li>
              <li>
                <div>
                  <img src={wallet} alt="" />
                  <Link to={"/"}>Ethereum</Link>
                </div>
                <hr className="" />
              </li>
              <li>
                <div>
                  <img src={wallet} alt="" />
                  <Link to={"/"}>Setting</Link>
                </div>
              </li>
              <li>
                <div>
                  <img src={wallet} alt="" />
                  <Link to={"/"}>Language</Link>
                </div>
              </li>
            </ul>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
