import React from "react";
import { dataStats } from "@/types/dataStats";
import Image from "next/image";


interface DataStat {
  icon: JSX.Element;
  color: string;
  title: string;
  value: string;
  description?: string;
}

interface HeaderUserPersonaProps {
  dataStatsList: DataStat[];
}
const HeaderUserPersona: React.FC<HeaderUserPersonaProps> = ({ dataStatsList }) => {
  const isValidData = dataStatsList && Object.keys(dataStatsList).length > 0 && dataStatsList.length > 0;

  return (
    <>
      {isValidData ? (
        <div className="grid grid-cols-3 gap-4">
          {/* First Card - 1/3 Width */}
          <div
            className="col-span-1 flex flex-col items-center justify-center rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark"
            style={{ backgroundColor: dataStatsList[0]?.color }}
          >
            <div className="flex justify-center items-center">
              <div>{dataStatsList[0]?.icon}</div>
              <div>
                <h4 className="mt-6 text-center text-heading-6 font-bold text-dark dark:text-white">
                  {dataStatsList[0]?.value}
                </h4>
                <span className="text-center text-body-sm font-medium">
                  {dataStatsList[0]?.title}
                </span>
              </div>
            </div>
          </div>

          {/* Second Card - 2/3 Width */}
          <div
            className="col-span-2 flex flex-col space-y-5 rounded-[10px] bg-white p-3 shadow-1 dark:bg-gray-dark"
            style={{ backgroundColor: dataStatsList[1]?.color }}
          >
            <div className="flex flex-col items-start">
              <div className="flex justify-center items-center">
                <div className="mr-4 animate-pulse">{dataStatsList[1]?.icon}</div>
                <div>
                  <div className="text-body-sm font-bold text-gray-800 mt-3">
                    {dataStatsList[1]?.value}
                  </div>
                </div>
              </div>
            </div>
            <span
              className="text-sm font-small overflow-hidden text-ellipsis whitespace-normal break-words"
              style={{
                maxHeight: 'calc(70% - 20px)',
                overflowY: 'auto',
              }}
            >
              {dataStatsList[1]?.description}
            </span>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500"></div>
      )}
    </>
  );
};

export default HeaderUserPersona;
