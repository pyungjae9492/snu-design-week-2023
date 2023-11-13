import React, { useState, useRef } from "react";

import { lineEllipse1, lineEllipse2, lineEllipse3, lineEllipse4 } from "./LineEllipse";

export const ContentsSelection = ({ headingList, contentsByHeading }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    // const headingRefs = useRef([]); // for calculating width of each heading (for the position of lineEllipse)
    // const wholeContentsRef = useRef([]); // for calculating height of each contents

    return (
    <>  
        {/* // not working -> retry later... 
        <div className={`${selectedIndex === 0 ? "opacity-100" : "opacity-0"} ${headingRefs.current[0] ? `ml-[${headingRefs.current[0].offsetWidth}]px` : "ml-[1000px]"} transition-opacity duration-1000 ease-in-out`}>{selectedIndex===0 && lineEllipse1()}</div>
        <div className={`${selectedIndex === 1 ? "opacity-100" : "opacity-0"} transition-opacity duration-1000 ease-in-out`}>{selectedIndex===1 && lineEllipse2()}</div>
        <div className={`${selectedIndex === 2 ? "opacity-100" : "opacity-0"} transition-opacity duration-1000 ease-in-out`}>{selectedIndex===2 && lineEllipse3()}</div>
        <div className={`${selectedIndex === 3 ? "opacity-100" : "opacity-0"} transition-opacity duration-1000 ease-in-out`}>{selectedIndex===3 && lineEllipse4()}</div>

        <div className="flex flex-row w-[55%] justify-between ml-[22.5%] relative">
            {headingList.map((heading:string, index:number) => (
                <div className="cursor-pointer" onClick={() => setSelectedIndex(index)} ref={(ref) => {headingRefs.current[index] = ref}} key={index}>
                    <p className={`${selectedIndex === index ? "text-[#FFFFFF]" : "text-[#5A5A5A]"} whitespace-pre-wrap text-[41.387px] font-normal font-snu-regular text-center mt-[19.8px]`}>{heading}</p>
                </div>
            ))}
        </div> 
        */}

        { // height calculation code -> not working //
        /* <div className={`${wholeContentsRef.current[selectedIndex] ? `h-[${wholeContentsRef.current[selectedIndex].offsetHeight}px]` : null} overflow-hidden relative`}>
            {contentsByHeading.map((content:()=>JSX.Element, index:number) => (
                <div key={index} className={`${selectedIndex === index ? "opacity-100" : "opacity-0"} absolute transition-opacity duration-1000 ease-in-out w-[55%] ml-[22.5%]`} ref={(ref) => {wholeContentsRef.current[index] = ref}}>
                    {content()}
                </div>
            ))}
        </div> */
        }

        <div className="flex flex-row w-[55%] justify-between ml-[22.5%] relative">
            {headingList.map((heading:string, index:number) => (
                <div key={index} className="cursor-pointer" onClick={() => setSelectedIndex(index)}>
                    <p className={`${selectedIndex === index ? "text-[#FFFFFF]" : "text-[#5A5A5A]"} whitespace-pre-wrap text-[41.387px] font-normal font-snu-regular text-center mt-[19.8px]`}>{heading}</p>
                </div>
            ))}
        </div>

        <div className="relative">
            {contentsByHeading.map((content:()=>JSX.Element, index:number) => (
                <div key={index} className={`${selectedIndex === index ? "opacity-100 absolute" : "opacity-0 fixed"} transition-opacity duration-1000 ease-in-out w-[55%] ml-[22.5%]`}>
                    {content()}
                </div>
            ))}
        </div>
    </>
    );
};

export default ContentsSelection;
