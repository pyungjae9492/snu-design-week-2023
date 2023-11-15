import React, { useState, useRef } from "react";

export const ContentsSelection = ({ headingList, contentsByHeading }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const wholeContentsRef = useRef([]); // for calculating height of each contents
    const heightByElementSize = wholeContentsRef.current[selectedIndex] ? { height: wholeContentsRef.current[selectedIndex].offsetHeight} : { height: 3000 };

    return (
    <>  
        <div className="flex flex-row w-[55%] justify-between ml-[22.5%] relative">
            {headingList.map((heading:string, index:number) => (
                <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => setSelectedIndex(index)}>
                    <div className="relative">

                        {index === 0 &&
                            <svg width="326" height="80" viewBox="0 0 326 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${selectedIndex == 0 ? "opacity-100" : "opacity-0"} left-2 bottom-2 absolute transition-opacity duration-500 ease-in-out`}>
                            <path d="M324.889 1.5L0.480469 78.2808" stroke="url(#paint0_linear_818_48836)" stroke-width="1.6555"/>
                            <path d="M324.889 1.5L0.480469 78.2808" stroke="url(#paint1_linear_818_48836)" stroke-width="1.6555"/>
                            <defs>
                            <linearGradient id="paint0_linear_818_48836" x1="162.685" y1="1.49886" x2="283.261" y2="1.49886" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_818_48836" x1="162.685" y1="1.49886" x2="283.261" y2="1.49886" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                            </linearGradient>
                            </defs>
                            </svg>
                        }
                        {index === 1 &&
                            <svg width="107" height="82" viewBox="0 0 107 82" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${selectedIndex == 1 ? "opacity-100" : "opacity-0"} left-2 bottom-2 absolute transition-opacity duration-500 ease-in-out`}>
                            <path d="M106.44 1.5L1.33789 80.6921" stroke="url(#paint0_linear_818_49373)" stroke-width="1.6555"/>
                            <path d="M106.44 1.5L1.33789 80.6921" stroke="url(#paint1_linear_818_49373)" stroke-width="1.6555"/>
                            <defs>
                            <linearGradient id="paint0_linear_818_49373" x1="-25.4947" y1="83.1706" x2="-1.91062" y2="-6.63561" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_818_49373" x1="-25.4947" y1="83.1706" x2="-1.91062" y2="-6.63561" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                            </linearGradient>
                            </defs>
                            </svg>
                        }
                        {index === 2 &&
                            <svg width="150" height="82" viewBox="0 0 150 82" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${selectedIndex == 2 ? "opacity-100" : "opacity-0"} left-[-148px] bottom-2 absolute transition-opacity duration-500 ease-in-out`}>
                            <path d="M0.610886 1.55469L149.5 80.5029" stroke="url(#paint0_linear_818_49892)" stroke-width="1.6555"/>
                            <path d="M0.610886 1.55469L149.5 80.5029" stroke="url(#paint1_linear_818_49892)" stroke-width="1.6555"/>
                            <defs>
                            <linearGradient id="paint0_linear_818_49892" x1="132.696" y1="91.9073" x2="104.033" y2="-6.14952" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_818_49892" x1="132.696" y1="91.9073" x2="104.033" y2="-6.14952" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                            </linearGradient>
                            </defs>
                            </svg>
                        }
                        {index === 3 &&
                            <svg width="340" height="84" viewBox="0 0 340 84" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${selectedIndex == 3 ? "opacity-100" : "opacity-0"} left-[-338px] bottom-2 absolute transition-opacity duration-500 ease-in-out`}>
                            <path d="M1.06009 1.5L339.5 82.5015" stroke="url(#paint0_linear_818_50649)" stroke-width="1.6555"/>
                            <defs>
                            <linearGradient id="paint0_linear_818_50649" x1="163.264" y1="1.49876" x2="42.6876" y2="1.49876" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                            </linearGradient>
                            </defs>
                            </svg>
                        }

                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <ellipse cx="6.62058" cy="6.59934" rx="6.62058" ry="6.59934" transform="matrix(1 0 0 -1 0.722656 13.9414)" fill={`${selectedIndex == index ? "white" : "#5A5A5A"}`}/>
                        </svg>
                    </div>
                    <p className={`${selectedIndex == index ? "opacity-100" : "opacity-50"} text-white whitespace-pre-wrap text-[41.387px] font-normal font-snu-regular text-center mt-[19.8px] transition-opacity duration-500 ease-in-out`}>{heading}</p>
                </div>
            ))}
        </div> 


        <div className={"overflow-hidden relative"} style={heightByElementSize}>
            {contentsByHeading.map((content:()=>JSX.Element, index:number) => (
                <div key={index} className={`${selectedIndex === index ? "opacity-100" : "opacity-0"} absolute transition-opacity duration-500 ease-in-out w-[55%] ml-[22.5%]`} ref={(ref) => {wholeContentsRef.current[index] = ref}}>
                    {content()}
                </div>
            ))}
        </div>
    </>
    );
};

export default ContentsSelection;
