import React, { useState } from "react";
import HVSTab from "./HVSTab";
import LTCCTab from "./LTCCTab";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState<string>("hvs");

    //  Functions to handle Tab Switching
    const handleHVSTab = () => {
        // update the state to tab1
        setActiveTab("hvs");
    };
    const handleLTCCTab = () => {
        // update the state to tab2
        setActiveTab("ltcc");
    };
    return (
        <div className="Tabs">
            {/* Tab nav */}
            <ul className="nav">
                <li className={activeTab === "hvs" ? "active" : ""}
                    onClick={handleHVSTab}>HVS Vendor</li>
                <li className={activeTab === "ltcc" ? "active" : ""}
                    onClick={handleLTCCTab}>LTCC Vendor</li>
            </ul>
            <div className="outlet" >
                {activeTab === "hvs" ? <HVSTab /> : <LTCCTab />}
            </div>
        </div>
    );
};

export default Tabs;