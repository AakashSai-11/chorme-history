import React, { useState } from "react";
import HistoryComponent from "./HistoryComponent";

const TotalHistory = ({ historyObjs, handleDeleteHistory }) => {
  return (
    <div>
      {historyObjs.map((history) => {
        return (
          <HistoryComponent
            key={history.id}
            history={history}
            handleDeleteHistory={handleDeleteHistory}
          />
        );
      })}
    </div>
  );
};

export default TotalHistory;
