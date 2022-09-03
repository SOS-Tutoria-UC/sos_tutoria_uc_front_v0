import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Login from "./pages/auth/login/Login";
import { Register } from "./pages/auth/register/Register";
import Main from "./pages/user/main/Main";
import Tutoring from "./pages/user/requests/tutoring/Tutoring";

//Layout
import Private from "./layout/Private";
import Public from "./layout/Public";

//Context
import { AuthProvider } from "./context/AuthProvider";
import { StudentDataProvider } from "./context/StudentDataProvider";
import { QuienesSomos } from "./pages/user/main/QuienesSomos";
import { ComoInteractuar } from "./pages/user/main/ComoInteractuar";
import Survey from "./pages/user/survey/Survey";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <StudentDataProvider>
          <Routes>
            <Route path="/" element={<Public />}>
              <Route index element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="/user" element={<Private />}>
              <Route index element={<Main />} />
              <Route path="request-tutoring" element={<Tutoring />} />
              <Route path="quienes-somos" element={<QuienesSomos />} />
              <Route path="como-interactuar" element={<ComoInteractuar />} />
              <Route path="survey" element={<Survey />} />
            </Route>
          </Routes>
        </StudentDataProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
