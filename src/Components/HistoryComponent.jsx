import React from "react";

const SAMPLE_DATA = {
  id: 8,
  timeAccessed: "09:25 AM",
  logoUrl: "https://assets.ccbp.in/frontend/react-js/gmail-img.png",
  title: "Gmail",
  domainUrl: "mail.google.com",
};

const HistoryComponent = ({ history, handleDeleteHistory }) => {
  return (
    <div className="history">
      <div className="history-time">{history.timeAccessed}</div>
      <div className="history-img">
        <img src={`${history.logoUrl}`} alt="Logo" />
      </div>
      <div className="history-title-container">
        <div className="history-title">{history.title}</div>
        <div className="history-url">{history.domainUrl}</div>
      </div>
      <button
        onClick={() => {
          handleDeleteHistory(history.id);
        }}
        className="history-btn"
      >
        Delete
      </button>
    </div>
  );
};

export default HistoryComponent;
