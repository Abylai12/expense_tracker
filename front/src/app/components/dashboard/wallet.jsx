import React from "react";

const WalletCard = ({ total }) => {
  const getDif = (array) => {
    if (!array || array.length === 0) return 0;
    const result = array.reduce(
      (acc, item) => acc - item.sum,
      array[0].sum * 2
    );

    return result;
  };

  return (
    <div
      className="bg-[#0166FF] text-white card  w-96 shadow-xl"
      style={{
        backgroundImage: `url("./images/Noise.svg")`,
      }}
    >
      <div className="p-8 flex flex-col gap-16">
        <img src="./images/frame.png" alt="img" className="w-[80px] h-[30px]" />
        <div className="flex justify-between items-center">
          <div>
            <p className="font-normal text-base opacity-50 ">Cash</p>
            {!getDif(total) < 0 ? (
              <div className="font-semibold text-2xl text-green-400">
                {getDif(total)}₮
              </div>
            ) : (
              <div className="font-semibold text-2xl text-red-400">
                {getDif(total) * -1}₮
              </div>
            )}
          </div>
          <img
            src="./images/Union.png"
            alt="img"
            className="w-[12px] h-[20px] mr-6"
          />
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
