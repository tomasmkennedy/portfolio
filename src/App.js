import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Kanban from "./Kanban";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="kanban" element={<Kanban />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
