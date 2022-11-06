import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home/Home';
import SignIn from './components/Login/SignIn/SignIn';
import Header from './components/Shared/Header/Header';

function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}>
                    Home
                </Route>
                <Route path="/blogs" element={<Blogs></Blogs>}>
                    Blog
                </Route>
                <Route path="/signin" element={<SignIn></SignIn>}>
                    Sign In
                </Route>
            </Routes>
        </>
    );
}

export default App;
