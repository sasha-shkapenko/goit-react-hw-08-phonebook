import { Routes, Route, NavLink } from "react-router-dom";
import ContactsPage from "pages/ContactsPage/ContactsPage";

function App() {

  return (
    <div>
      <NavLink to='/contacts'>Contacts</NavLink>
      <Routes>
        <Route path='/contacts' component={ContactsPage} />
      </Routes>
    </div>
  );

};

export default App;