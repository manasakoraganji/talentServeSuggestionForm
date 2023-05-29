import { Component } from "react";

import "./index.css";

class SuggestionsForm extends Component {
  render() {
    return (
      <div className="suggestions-container">
        <h1 className="s-heading">TalentServe Suggestion Box</h1>
        <div className="name-container">
          <label className="input-label" htmlFor="Name">
            NAME
          </label>
          <input
            type="text"
            className="input-text"
            placeholder="Enter Your Name Here"
          />
        </div>
        <div className="email-container">
          <label className="input-label" htmlFor="Email">
            EMAIL
          </label>
          <input
            type="text"
            className="input-text"
            placeholder="Enter Your Email Here"
          />
        </div>
        <div className="department-container">
          <label className="input-label" htmlFor="Department">
            DEPARTMENT
          </label>
          <select name="dropdown">
            <option value="human resources">Human Resources</option>
            <option value="finance">Finance</option>
            <option value="marketing">Marketing</option>
            <option value="sales">Sales</option>
            <option value="operations">Operations</option>
            <option value="it">Information Technology</option>
            <option value="customer service">Customer Service</option>
            <option value="research and development">
              Research And Development
            </option>
            <option value="administration">Administration</option>
          </select>
        </div>
        <div className="suggestion-container">
          <label className="input-label" htmlFor="suggestions">
            SUGGESTIONS
          </label>
          <textarea
            className="textarea-box"
            rows="5"
            cols="100"
            placeholder="Enter your suggestions here"
          ></textarea>
        </div>
        <div className="problem-container">
          <label className="input-label" htmlFor="Email">
            PROBLEM IDENTIFIED
          </label>
          <input
            type="text"
            className="input-text"
            placeholder="Enter The Problem Identified Here"
          />
        </div>
        <div className="resolution-container">
          <label className="input-label" htmlFor="suggestions">
            RESOLUTION
          </label>
          <textarea
            className="textarea-box"
            rows="10"
            cols="100"
            placeholder="Enter your resolution here"
          ></textarea>
        </div>
        <div className="button-container">
          <button className="button">Submit</button>
        </div>
      </div>
    );
  }
}

export default SuggestionsForm;
