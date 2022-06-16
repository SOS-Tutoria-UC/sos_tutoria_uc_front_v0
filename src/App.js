import { BrowserRouter, Routes, Route } from "react-router-dom";


//Pages
import Login from "./pages/auth/login/Login";
import { Register } from "./pages/auth/register/Register";
import Main from "./pages/user/main/Main";


//Layout
import Private from "./layout/Private";
import Public from "./layout/Public";


//Context
import { AuthProvider } from "./context/AuthProvider";
import { StudentDataProvider } from "./context/StudentDataProvider"

function App() {
  return (
    <AuthProvider>
      <StudentDataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Public />}>
              <Route index element={<Login />}/>
              <Route path="register" element={<Register />}/>
            </Route>
            <Route path="/user" element={<Private />} >
              <Route index element={<Main />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </StudentDataProvider>
    </AuthProvider>
  );
}

export default App;
