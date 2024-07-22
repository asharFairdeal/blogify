import { Select } from "antd";
import React from "react";

const { Option } = Select;
function Filter(props) {
  return (
    <div className="filters">
      <Select
        value={props.country}
        onChange={props.handleCountryChange}
        style={{ width: 100, marginRight: "10px" }}
      >
        <Option value="in">India</Option>
        <Option value="us">USA</Option>
        <Option value="ca">Canada</Option>
        <Option value="gb">UK</Option>
        {/* Add more countries as needed */}
      </Select>
      <Select
        value={props.category}
        onChange={props.handleCategoryChange}
        style={{ width: 100 }}
        placeholder="Select Category"
      >
        <Option value="">All</Option>
        <Option value="business">Business</Option>
        <Option value="entertainment">Entertainment</Option>
        <Option value="general">General</Option>
        <Option value="health">Health</Option>
        <Option value="science">Science</Option>
        <Option value="sports">Sports</Option>
        <Option value="technology">Technology</Option>
        {/* Add more categories as needed */}
      </Select>
    </div>
  );
}

export default Filter;
