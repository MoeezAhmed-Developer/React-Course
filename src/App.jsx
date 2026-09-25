import { Routes, Route } from "react-router";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ServicePage from "./pages/Service";
import OtherPage from "./pages/Other";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/others" element={<OtherPage />} />
      </Routes>
    </>
  );
}

export default App;
