import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home/Home';
import InventoryItems from './components/InventoryItems/InventoryItems';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import SignIn from './components/Login/SignIn/SignIn';
import SignUp from './components/Login/SignUp/SignUp';
import Header from './components/Shared/Header/Header';

function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}>
                    Home
                </Route>
                <Route path="/home" element={<Home></Home>}>
                    Home
                </Route>
                <Route path="/blogs" element={<Blogs></Blogs>}>
                    Blog
                </Route>
                <Route path="/signin" element={<SignIn></SignIn>}>
                    Sign In
                </Route>
                <Route path="/signup" element={<SignUp></SignUp>}>
                    Sign Up
                </Route>
                <Route
                    path="/inventory/:itemsId"
                    element={
                        <RequireAuth>
                            <InventoryItems></InventoryItems>
                        </RequireAuth>
                    }
                ></Route>
            </Routes>
        </>
    );
}

export default App;
