/*import '../App.css';*/
import React, {useState} from "react";
import Home from "../pages/home";
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import Login from "../pages/login";
import ButtonAppBar from "../components/NavBar";
import PrivateRoute from "../privateRoute";
import Test from "../pages/Test";
import CartManage from "../pages/CarManage";
import ProductManage from "../pages/productManage";
import CustomerManage from "../pages/CustomerManage";

function App() {

    const [isLogged,setIsLogged]=useState(false)
    const [token,setToken]=useState(true)

    const changeState=() =>{
        setIsLogged(true)
    }

    return (

        <BrowserRouter>
            <Routes>
                {/*<Route exact path='/' element={<Home/>}/>*/}

                <Route element={<PrivateRoute isLogged={isLogged}/> }>
                    <Route path="/home" element={<Home/>} />
                </Route>
                <Route path="/" element={<Login setLogged={changeState}/>} />



                <Route path="/test" element={<Test setLogged={changeState}/>} />
                <Route path="/cartManage" element={<CartManage/>} />
                <Route path="/productManage" element={<ProductManage/>} />
                <Route path="/customerManage" element={<CustomerManage/>} />
                {/*<Route path="/carManage" element={<CarManage/>} />

                */}

                {/*<Route path="/buttonAppBar" element={<ButtonAppBar/>} />*/}
            </Routes>
        </BrowserRouter>

    );
}

export default App;
