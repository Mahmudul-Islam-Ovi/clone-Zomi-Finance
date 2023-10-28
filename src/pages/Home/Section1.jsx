import { Link } from "react-router-dom";
import trading from "../../assets/ic_trading.2c53815a.svg";
import totaluser from "../../assets/ic_totaluser.ae09b310.svg";
import stats from "../../assets/ic_stats.f0a18011.svg";
const Section1 = () => {
  return (
    <div className="lg:ml-36 ml-10 mt-10">
      <div>
        <div className="lg:text-[4rem] text-[3rem] font-semibold text-white">
          <p>Decentralized</p>
          <p>Perpetual Exchange</p>
        </div>
        <p className="w-72 font-semibold ">
          Trade BTC, ETH, AVAX and other top cryptocurrencies with up to 30x
          leverage directly from your wallet
        </p>
        <div className="mt-5">
          <Link
            to="/"
            className="bg-[#4cad79] hover:bg-[#53a077] w-20 text-center text-white p-2 rounded"
          >
            Launch Exchange
          </Link>
        </div>
      </div>

      <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:gap-5 lg:mr-28 ">
        <div className="lg:flex w-96 text-white border-2 shadow-2xl border-slate-800 rounded p-5 py-8">
          <div className="flex gap-3 justify-center">
            <img src={trading} alt="wallet" />
            <div>
              <p className="text-[18px]">Total Trading Volume</p>
              <p className="text-[25px] font-bold">$0</p>
            </div>
          </div>
        </div>

        <div className="lg:flex  w-96 text-white border-2 border-slate-800 rounded p-5 py-8">
          <div className="flex gap-3 justify-center">
            <img src={totaluser} alt="wallet" />
            <div>
              <p className="text-[18px]">Open Interest</p>
              <p className="text-[25px] font-bold">$0</p>
            </div>
          </div>
        </div>

        <div className="lg:flex w-96 text-white border-2 border-slate-800 rounded p-5 py-8">
          <div className="flex gap-3 justify-center">
            <img src={stats} alt="wallet" />
            <div>
              <p className="text-[18px]">Total Users</p>
              <p className="text-[25px] font-bold">$0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
