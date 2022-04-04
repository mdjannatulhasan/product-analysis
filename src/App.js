import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';

function App() {
    return (
        <div className="App">
            <h1>Hello</h1>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/reviews' element={<Reviews></Reviews>}></Route>
                <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
                <Route path='/blogs' element={<Blogs></Blogs>}></Route>
                <Route path='/about' element={<About></About>}></Route>
            </Routes>
        </div>
    );
}

export default App;
