import cost from "../../assets/ic_cost.b4a729d3.svg";
import simpleswaps from "../../assets/ic_simpleswaps.2005009f.svg";
import liquidity from "../../assets/ic_liquidity.505b3f30.svg";
import ZOMI from "../../assets/download.png";
import ZLP from "../../assets/download (1).png";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <div className="border-t-[1px]  border-current mt-10">
      <div className="lg:ml-28  mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:gap-0 lg:mr-28 ">
        <div className="w-96 text-white font-semibold p-10">
          <div className="flex gap-3 mb-5 items-center">
            <img src={simpleswaps} alt="wallet" />
            <p className="text-[18px]">Reduce Liquidation Risks</p>
          </div>
          <p>
            An aggregate of high-quality price feeds determine when liquidations
            occur. This keeps positions safe from temporary wicks.
          </p>
        </div>
        <div className="w-96 text-white font-semibold p-10">
          <div className="flex gap-3  mb-5  items-center">
            <img src={cost} alt="wallet" />
            <p className="text-[18px]">Reduce Liquidation Risks</p>
          </div>
          <p>
            An aggregate of high-quality price feeds determine when liquidations
            occur. This keeps positions safe from temporary wicks.
          </p>
        </div>
        <div className="w-96 text-white font-semibold p-10">
          <div className="flex gap-3  mb-5 items-center">
            <img src={liquidity} alt="wallet" />
            <p className="text-[18px]">Reduce Liquidation Risks</p>
          </div>
          <p>
            An aggregate of high-quality price feeds determine when liquidations
            occur. This keeps positions safe from temporary wicks.
          </p>
        </div>
      </div>

      <div className="lg:ml-36 text-4xl w-72 text-white px-10 lg:px-0">
        Two tokens create our ecosystem
      </div>

      <div className="lg:ml-36 mt-10 flex gap-5 flex-col lg:flex-row p-5 lg:p-0">
        <div className="lg:w-[600px] text-white border-2 shadow-2xl border-slate-800 rounded-lg p-5 py-10">
          <div className="flex gap-3 pb-3 items-center font-semibold">
            <img width="40px" src={ZOMI} alt="wallet" />
            <div>
              <p className="text-[18px]">$ZOMI</p>
            </div>
          </div>
          <div>
            <p className=" font-semibold lg:w-[500px]">
              $ZOMI is the utility and governance token. Accrues 30% of the
              platforms generated fees.
            </p>
            <p className="mt-3">Ethereum APR: 0.00%</p>
            <div className="flex flex-col lg:flex-row gap-5 mt-5 font-semibold">
              {" "}
              <Link
                to="/"
                className="bg-[#4cad79] w-full hover:bg-[#53a077] lg:w-20 flex items-center justify-center text-white p-1 rounded"
              >
                Buy
              </Link>
              <Link
                to="/"
                className="flex items-center justify-center gap-1 text-white border-2 border-slate-500 hover:bg-gray-800 rounded px-4 py-2"
              >
                <p className="text-[12px] font-semibold">Read more</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-[600px] text-white border-2 shadow-2xl border-slate-800 rounded-lg p-5 py-10">
          <div className="flex gap-3 pb-3 items-center font-semibold">
            <img width="40px" src={ZLP} alt="wallet" />
            <div>
              <p className="text-[18px]">$ZLP</p>
            </div>
          </div>
          <div>
            <p className=" font-semibold lg:w-[500px]">
              $ZLP is the liquidity provider token. Accrues 70% of the platforms
              generated fees.
            </p>
            <p className="mt-3">Ethereum APR: 1,656,207,342.94%</p>

            <div className="flex flex-col lg:flex-row gap-5 mt-5 font-semibold">
              {" "}
              <Link
                to="/"
                target="_blank"
                className="bg-[#4cad79] hover:bg-[#53a077] w-full lg:w-20 flex items-center justify-center text-white p-1 rounded"
              >
                Buy
              </Link>
              <Link
                to="/"
                target="_blank"
                className="flex  items-center justify-center text-white border-2 border-slate-500 hover:bg-gray-800 rounded px-4 py-2"
              >
                <p className="text-[12px] font-semibold">Read more</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
