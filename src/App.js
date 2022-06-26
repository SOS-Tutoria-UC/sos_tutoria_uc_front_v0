import { BrowserRouter, Routes, Route } from "react-router-dom";


//Pages
import Login from "./pages/auth/login/Login";
import { Register } from "./pages/auth/register/Register";
import Main from "./pages/user/main/Main";
import Tutoring from "./pages/user/requests/tutoring/Tutoring";
import BeTutor from "./pages/user/requests/be-tutor/BeTutor";

//Layout
import Private from "./layout/Private";
import Public from "./layout/Public";


//Context
import { AuthProvider } from "./context/AuthProvider";
import { StudentDataProvider } from "./context/StudentDataProvider"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <StudentDataProvider>
            <Routes>
              <Route path="/" element={<Public />}>
                <Route index element={<Login />}/>
                <Route path="register" element={<Register />}/>
              </Route>
              <Route path="/user" element={<Private />} >
                <Route index element={<Main />}/>
                <Route path="request-tutoring" element={<Tutoring />}/>
                <Route path="request-be-tutor" element={<BeTutor />}/>
              </Route>
            </Routes>
        </StudentDataProvider>
      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;
