import "./App.css";
import Homepage from "./pages";
import { GlobalContext } from "./context";

function App() {
  const user = {
    username: "Diaz",
  };
  return (
    <>
      <div className="App">
        <GlobalContext.Provider value={user}>
          <Homepage />
        </GlobalContext.Provider>
      </div>
    </>
  );
}

export default App;
