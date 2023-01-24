import { Route, Routes } from 'react-router-dom';
import AddItems from './components/AddItems/AddItems';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home/Home';
import InventoryItems from './components/InventoryItems/InventoryItems';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import SignIn from './components/Login/SignIn/SignIn';
import SignUp from './components/Login/SignUp/SignUp';
import ManageInventories from './components/ManageInventories/ManageInventories';
import MyItems from './components/MyItems/MyItems';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import NotFound from './components/Shared/NotFound/NotFound';

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
                    Blogs
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

                <Route
                    path="/manage-inventories"
                    element={
                        <RequireAuth>
                            <ManageInventories></ManageInventories>
                        </RequireAuth>
                    }
                ></Route>

                <Route
                    path="/add-item"
                    element={
                        <RequireAuth>
                            <AddItems></AddItems>
                        </RequireAuth>
                    }
                ></Route>

                <Route
                    path="/my-items"
                    element={
                        <RequireAuth>
                            <MyItems></MyItems>
                        </RequireAuth>
                    }
                ></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;
