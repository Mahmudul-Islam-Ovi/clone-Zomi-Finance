const Composition = () => {
  return (
    <div className="mt-10">
      <div className="lg:w-[1220px] text-white border-2 shadow-2xl border-slate-800 rounded-lg ">
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
    </div>
  );
};

export default Composition;
