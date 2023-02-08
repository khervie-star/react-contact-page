import React, { useState } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import "./accordion.css";

const Accordion = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="accordion-container">
      {children.map((child, index) => {
        return (
          <div key={child.props.title}>
            <div
              className={`accordion-header ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <h3> {child.props.title}</h3>
              <IoMdArrowDropdownCircle
                color="#6762C7"
                className={`arrow-icon ${
                  activeIndex === index ? "active" : ""
                }`}
              />
            </div>
            <div
              className={`accordion-content`}
              style={{
                maxHeight: activeIndex === index ? "1000px" : "0",
                overflow: activeIndex === index ? "visible" : "hidden",
              }}
            >
              {child}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const AccordionItem = ({ title, children }) => {
  return <div>{children}</div>;
};

export { Accordion, AccordionItem };
