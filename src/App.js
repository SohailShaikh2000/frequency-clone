//React Elements
import { BrowserRouter, Routes, Route } from  "react-router-dom";
import MainPage from "./pages/mainPage/MainPage.jsx"
import LoginPage from "./pages/loginPage/LoginPage";
import Featured from "./pages/featured/Featured.jsx";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<MainPage /> } />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/featured" element={<Featured />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
