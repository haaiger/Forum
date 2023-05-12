import { Route, Routes } from "react-router-dom";
import { HomePage } from "./component/HomePage.tsx/HomePage";
import { LoginForm } from "./component/Login/LoginForm";
import NavBar from "./component/Navbar/NavBar";
import { RegistrationForm } from "./component/Registration/RegistrationForm";
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
      </Routes>
    </div>
  );
};
