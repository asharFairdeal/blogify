import React from "react";
import { Layout, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "./Header.css"; // Import the custom CSS file

const { Header: AntHeader } = Layout;

function Header({
  showBackButton = false,
  title = "Blogy",
  onBack,
  filters,
  showRightSection = false,
}) {
  return (
    <AntHeader className="header">
      <div className="left-section">
        {showBackButton && (
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={onBack}
            className="back-button"
          />
        )}
        <div className="title">{title}</div>
      </div>
      {showRightSection && <div className="right-section">{filters}</div>}
    </AntHeader>
  );
}

export default Header;
