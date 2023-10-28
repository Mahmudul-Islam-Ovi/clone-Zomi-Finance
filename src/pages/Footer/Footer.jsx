import logo from "../../assets/New Logo.png";
import twitter from "../../assets/ic_twitter.9f35b403.svg";
import medium from "../../assets/ic_medium.f6051b2e.svg";
import github from "../../assets/ic_github.dbd4de8a.svg";
import telegram from "../../assets/ic_telegram.af1a4a66.svg";
import wallet from "../../assets/ic_discord.be4d716c.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex-col flex footer p-10 mt-20  border-t-[1px]  border-current bg-base-300 text-base-content">
      <div className="flex w-full  justify-center items-center ">
        <img width={"100px"} src={logo} alt="logo" />
        <p className="text-white font-bold text-2xl font-mono">Romi Finance</p>
      </div>
      <div className="flex w-full lg:gap-16 gap-5 justify-center items-center">
        <Link to="/">
          {" "}
          <img src={twitter} alt="twitter" />
        </Link>
        <Link to="/">
          {" "}
          <img src={medium} alt="medium" />
        </Link>
        <Link to="/">
          {" "}
          <img src={github} alt="github" />
        </Link>
        <Link to="/">
          {" "}
          <img src={telegram} alt="telegram" />
        </Link>
        <Link to="/">
          {" "}
          <img src={wallet} alt="wallet" />
        </Link>
      </div>
      <div className="flex  flex-col lg:flex-row w-full gap-10 justify-center items-center">
        <Link to="/"> Terms and Conditions</Link>
        <Link to="/"> Referral Terms</Link>
        <Link to="/"> Media Kit</Link>
      </div>
    </footer>
  );
};

export default Footer;
