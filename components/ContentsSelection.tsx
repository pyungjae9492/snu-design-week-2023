import React, { useState } from "react";

export const ContentsSelection = () => {
    const [selected, setSelected] = useState("Visual Identity");

    return (
        <>
            <div className="flex flex-row gap-[5vw] justify-center">
                <div onClick={() => setSelected("Visual Identity")}>
                    <p className="text-white">Visual Identity</p>
                </div>
                <div onClick={() => setSelected("Preperation Comittee")}>
                    <p className="text-white">SNU DESIGN WEEK 2023<br/>Preperation Comittee</p>
                </div>
                <div onClick={() => setSelected("Exhibition Participants")}>
                    <p className="text-white">Exhibition<br/>Participants</p>
                </div>
                <div onClick={() => setSelected("Thanks To")}>
                    <p className="text-white">Thanks To</p>
                </div>
            </div>

            <div>
                {selected === "Visual Identity" ? (
                    <div className="flex flex-row justify-center">
                        <p className="text-white">Visual Identity</p>
                    </div>
                ) : selected === "Preperation Comittee" ? (
                    <div className="flex flex-row justify-center">
                        <p className="text-white">SNU DESIGN WEEK 2023<br/>Preperation Comittee</p>
                    </div>
                ) : selected === "Exhibition Participants" ? (
                    <div className="flex flex-row justify-center">
                        <p className="text-white">Exhibition<br/>Participants</p>
                    </div>
                ) : selected === "Thanks To" ? (
                    <div className="flex flex-row justify-center">
                        <p className="text-white">Thanks To</p>
                    </div>
                ) : null}
            </div>
        </>
    );
}