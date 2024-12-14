import "./App.css";
import TotalHistory from "./Components/TotalHistory";
import Header from "./Components/Header";
import { useEffect, useState } from "react";
import initialHistoryList from "./Data/user-data";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [historyObjs, setHistoryObjs] = useState(initialHistoryList);
  const [renderObjs, setRenderObjs] = useState(initialHistoryList);

  useEffect(() => {
    const filteredObjs = historyObjs.filter((obj) => {
      return obj.title.toLowerCase().includes(searchInput.toLowerCase());
    });
    setRenderObjs(filteredObjs);
  }, [searchInput, historyObjs]);

  function handleDeleteHistory(id) {
    setHistoryObjs((cur) => {
      const newObjs = [...cur];
      const afterDeleteObjs = newObjs.filter((obj) => {
        return obj.id !== id;
      });
      return afterDeleteObjs;
    });
  }

  return (
    <>
      <div className="App">
        <Header searchInput={searchInput} setSearchInput={setSearchInput} />

        <div className="app-section1">
          {renderObjs.length > 0 ? (
            <div className="history-container">
              <TotalHistory
                historyObjs={renderObjs}
                handleDeleteHistory={handleDeleteHistory}
              />
            </div>
          ) : (
            <p className="no-history-tag">There is no history to show</p>
          )}
        </div>
      </div>
    </>
  );
}
export default App;

// let renderObjs = [...initialHistoryList];

// const filteredObjsText = initialHistoryList.filter((obj) => {
//   return obj.title.toLowerCase().includes(searchInput.toLowerCase());
// });

// renderObjs = filteredObjsText;

// function handleDeleteHistory(id) {
//   console.log(renderObjs);
//   const filteredObjDel = filteredObjsText.filter((obj) => {
//     return obj.id !== id;
//   });
//   renderObjs = filteredObjDel;

//   console.log("after del", renderObjs);
// }
