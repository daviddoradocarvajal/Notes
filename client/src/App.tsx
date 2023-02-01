import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <LoadingScreen loading={loading} />
      <div className="bg-slate-800 h-screen text-white">
        <Header />
        <div className="container mx-auto ">
          <Outlet context={{ setLoading }} />
        </div>
      </div>
    </>
  );
}

export default App;
