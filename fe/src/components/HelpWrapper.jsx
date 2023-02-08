import React from "react";
import googleMaps from "../assets/GoogleMapTA.png";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

import { Accordion, AccordionItem } from "./Accordion";
import { accordionData, faqData } from "../data";
import { Tab, Tabs } from "./Tab";

const HelpWrapper = () => {
  return (
    <div className="help-container">
      <Tabs>
        <Tab label="FAQ">
          <div className="faq-content">
            <div className="faq-header">
              <div className="headerText">Talk to our customer service</div>
              <p className="header-text-description">
                How can we help your experience
              </p>
            </div>
            <div className="faq-body">
              {faqData.map((item, i) => (
                <div className="faq-item" key={i}>
                  <div className="icon-wrapper">
                    <item.icon size={20} color="#6762C7" className="icon" />
                  </div>
                  <div className="faq-item-name">{item.name}</div>
                  <div className="faq-item-description">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </Tab>

        <Tab label="How to">
          <div className="howTo-content">
            <div className="howTo-header">
              <div className="headerText">Talk to our customer service</div>
              <p className="header-text-description">
                Our friendly team would love to hear from you (FAQ)
              </p>
            </div>
            <div className="howTo-body">
              <Accordion>
                {accordionData.map((data, i) => (
                  <AccordionItem title={data.title} key={i}>
                    {data.content}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Tab>

        <Tab label="Address">
          <div className="address-content">
            <div className="address-header">Locate us on google maps</div>
            <div className="address-content">
              <div className="maps">
                {/* // Append google maps library here */}
                <img src={googleMaps} width="100%" height="450px" alt="" />
              </div>
              <div className="contacts">
                <div className="phone">
                  <div>
                    <FiPhoneCall color="#6762C7" size={20} />
                  </div>
                  <div>(+234)801-234-5678</div>
                </div>
                <div className="email">
                  <div>
                    <HiOutlineMail color="#6762C7" size={20} />
                  </div>
                  <div>companymail@mail.com</div>
                </div>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default HelpWrapper;
