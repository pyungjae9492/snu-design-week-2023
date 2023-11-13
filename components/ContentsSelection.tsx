import React, { useState } from "react";

export const ContentsSelection = ({ headingList, contentsByHeading }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
    <>
        <div className="flex flex-row w-[55%] justify-between ml-[22.5%] mt-[52.5px]">
            {headingList.map((heading:string, index:number) => (
                <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => setSelectedIndex(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <ellipse cx="6.62058" cy="6.59934" rx="6.62058" ry="6.59934" transform="matrix(1 0 0 -1 0.722656 13.9414)" fill={selectedIndex === index ? "#FFFFFF" : "#5A5A5A"}/>
                    </svg>
                    <p className={`${selectedIndex === index ? "text-[#FFFFFF]" : "text-[#5A5A5A]"} whitespace-pre-wrap text-[41.387px] font-normal font-snu-regular text-center mt-[19.8px]`}>{heading}</p>
                </div>
            ))}
        </div>

        <div className="relative">
            {contentsByHeading.map((content:()=>JSX.Element, index:number) => (
                <div key={index} className={`${selectedIndex === index ? "opacity-100" : "opacity-0"} transition-opacity duration-500 ease-in-out absolute w-[55%] ml-[22.5%]`}>
                    {content()}
                </div>
            ))}
        </div>
    </>
    );
};

export default ContentsSelection;
