import React, { useState } from "react";

export const ContentsSelection = ({ headingList, contentsByHeading }) => {
    const [selected, setSelected] = useState(0);

    return (
    <>
        <div className="flex flex-row gap-[5vw] justify-center">
            {headingList.map((heading:string, index:number) => (
                <div key={index} onClick={() => setSelected(index)}>
                    <p className="text-white cursor-pointer whitespace-pre-wrap">{heading}</p>
                </div>
            ))}
        </div>

        <div>
            {contentsByHeading.map((content:string, index:number) => (
                selected === index ? (
                    <div className="flex flex-row justify-center" key={index}>
                    <p className="text-white">{content}</p>
                    </div>
                ) : null
            ))}
        </div>
    </>
    );
};

export default ContentsSelection;
