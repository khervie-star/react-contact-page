import React from "react";

const FormWrapper = () => {
  return (
    <div className="enquiry-container">
      <div className="htx">
        <h3 className="headerText">Send an enquiry</h3>
        <p className="header-text-description">
          Our friendly team would love to hear from you
        </p>
      </div>

      <div className="form-container">
        <form>
          <div className="form-input name-input">
            <div className="first-name">
              <label>First name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter name"
                className="input-field"
              />
            </div>
            <div className="second-name">
              <label>Second name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter name"
                className="input-field"
              />
            </div>
          </div>
          <div className="email form-input">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="input-field"
            />
          </div>
          <div className="phone form-input">
            <label>Phone number</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter phone number"
              className="input-field"
            />
          </div>

          <div className="help form-input">
            <label>How can we help you</label>
            <select className="input-field">
              <option value="" disabled selected>
                Let us know your concern
              </option>
            </select>
          </div>

          <div className="details form-input">
            <label>Your details</label>
            <textarea
              type="text"
              name="phone"
              placeholder=""
              rows={10}
              className="input-field"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormWrapper;
