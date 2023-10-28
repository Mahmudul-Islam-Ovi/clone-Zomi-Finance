import status from "../../assets/ic_avalanche_24.4f4088f4.svg";
const Tokens = () => {
  return (
    <div>
      <div className=" mt-10">
        <div className="flex gap-2 px-5 lg:px-0">
          <p className="text-3xl text-white font-bold">Tokens </p>
          <img src={status} alt="pic" />
        </div>
        <div className="mt-5 px-5 lg:px-0">
          <p>Platform and $ZLP index tokens.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 mt-10 p-5 lg:p-0">
          <div className="lg:w-[600px] text-white border-2 shadow-2xl border-slate-800 rounded-lg ">
            <div className="">
              <div className="border-b-[1px] w-full  border-slate-800">
                <p className="text-[18px] py-3 px-5">Overview</p>
              </div>
            </div>
            <div className="p-5 flex justify-between ">
              <div className="flex flex-col gap-2">
                <p>AUM</p>
                <p>$ZLP Pool</p>
                <p>24h Volume</p>
                <p>Long Positions</p>
                <p>Short Positions</p>
              </div>
              <div className="flex flex-col gap-2 underline underline-offset-1">
                <p>$33</p>
                <p>$33</p>
                <p>$0</p>
                <p>$0</p>
                <p>$0</p>
              </div>
            </div>
          </div>
          <div className="lg:w-[600px] text-white border-2 shadow-2xl border-slate-800 rounded-lg ">
            <div className="">
              <div className="border-b-[1px] w-full  border-slate-800">
                <p className="text-[18px] py-3 px-5">Total Stats</p>
              </div>
            </div>
            <div className="p-5 flex justify-between ">
              <div className="flex flex-col gap-2">
                <p>Total Fees</p>
                <p>Total Volume</p>
                <p>Floor Price Fund</p>
              </div>
              <div className="flex flex-col gap-2">
                <p>$33</p>
                <p>$33</p>
                <p>$618,905</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokens;
