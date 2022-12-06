
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UsersListPage from "./pages/usersListPage/UsersListPage";
import AddUserPage from "./pages/addUserPage/AddUserPage";
import Header from "./components/header/Header";
import {Container} from "react-bootstrap";
import UserInfo from "./components/userInfo/UserInfo";


function App() {
  return (
      <Container>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route index element={<UsersListPage/>}/>
            <Route path="register" index element={<AddUserPage/>}/>
            <Route path="/:id" index element={<UserInfo/>}/>
          </Routes>
        </BrowserRouter>
      </Container>

  );
}

export default App;
