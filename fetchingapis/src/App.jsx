import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useState } from "react";
import getApod from "./utils/apodGet";
const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [apod, setApod] = useState(async () => {
        const data = await getApod();
        setApod(data);
    });
  function handleToggleModal() {
      setSidebarOpen(prevState => !prevState);
    }
  return (
    <div>
      {apod ? (<Main data={apod} />) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}

      {sidebarOpen && (
        <Sidebar data={apod} handleToggleModal={handleToggleModal} />
      )}
      {apod && (
        <Footer data={apod} handleToggleModal={handleToggleModal} />
      )}
    </div>
  );
};

export default App;