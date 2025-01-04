import React from "react";
import Image from "next/image";

interface DataObject {
  filters: {
    eta?: string;
    sesso?: string;
    occupazione?: string;
  };
  summaries: Array<{
    title: string;
    description: string;
  }>;
}

interface HeaderUserPersona12Props {
  data?: DataObject;
}

const HeaderUserPersona12: React.FC<HeaderUserPersona12Props> = ({ data }) => {
  return (
    <>
      {data && data !== null && Object.keys(data).length > 0 ? (
        <div>
          <div className="grid grid-cols-4 gap-4">
            {/* First Card */}
            <div className="relative col-span-2 flex flex-col items-start justify-center rounded-[10px] bg-white p-10 shadow-1 dark:bg-gray-dark">
              {/* Small icon in top-left corner */}
              <div className="absolute top-2 left-2 ml-3 mt-3 flex items-center space-x-4">
                <div className="rounded-full bg-[rgba(0,161,129,0.5)] p-3">
                  <Image
                    src="/images/icon/data-search.svg"
                    alt="Small Icon"
                    width={16}
                    height={16}
                  />
                </div>
                <span className="text-start text-body-sm font-medium">Filters</span>
              </div>
  
              {/* Filters List */}
              {data.filters && (
                  <ul className="mt-4 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
                    <li>Age: {data.filters?.eta ?? "Non Specificato"}</li>
                    <li>Gender: {data.filters?.sesso ?? "Non Specificato"}</li>
                    {data.filters.occupazione && <li>Job: {data.filters?.occupazione ?? "Non Specificato"}</li>}
                  </ul>
                )}
                
            </div>
  
            {/* Second Card */}
            <div className="col-span-2 flex flex-col rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
              <div className="flex">
                <div className="mr-4">
                  <Image
                    src="/images/icon/cloud-data.gif"
                    alt="Icon"
                    width={70}
                    height={70}
                  />
                </div>
                <div>
                  <h4 className="text-heading-7 font-bold text-gray-800 mt-4">
                    {data.summaries[0]?.title}
                  </h4>
                </div>
              </div>
              <span className="font-small mt-2 text-gray-600">
                {data.summaries[0]?.description}
              </span>
            </div>
          </div>
  
          {/* Summaries Cards */}
          <div className="grid grid-cols-4 gap-4 mt-5">
            {data.summaries.slice(1).map((item, index) => (
              <div
                key={index}
                className="col-span-2 flex flex-col rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark"
              >
                <div className="flex">
                  <div className="mr-4">
                    <Image
                      src="/images/icon/cloud-data.gif"
                      alt="Icon"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div>
                    <h5 className="text-heading-7 font-bold text-gray-800 mt-4">
                      {item.title}
                    </h5>
                  </div>
                </div>
                <span className="font-small mt-2 text-gray-600">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          No data retrieved yet :)
        </div>
      )}
    </>
  );
  
};

export default HeaderUserPersona12;
