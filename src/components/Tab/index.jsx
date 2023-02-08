import React, { useState } from "react";
import "./tabStyles.css";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {children.map((child, index) => (
          <div
            key={child.props.label}
            className={`tab-label ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </div>
        ))}
      </div>
      <div className="tabs-content">
        {children.map((child, index) => (
          <div
            key={child.props.label}
            className={`tab-content ${activeTab === index ? "active" : ""}`}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

const Tab = ({ label, children }) => {
  return <div>{children}</div>;
};

export { Tabs, Tab };
