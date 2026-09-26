import { Routes, Route } from "react-router";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ServicePage from "./pages/Service";
import OtherPage from "./pages/Other";
import PageNotFound from "./pages/PageNotFound";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/pk/others" element={<OtherPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/user/:id/:name?" element={<UserDetails />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
