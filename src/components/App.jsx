import { Routes, Route } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";
import ContactsPage from "pages/ContactsPage";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";

function App() {

  return (
    <div>
      <AppBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </div>
  );

};

export default App;