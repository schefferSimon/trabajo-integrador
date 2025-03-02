import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../page/home/home";
import { Api } from "../page/api-data";
import { Contact } from "../page/contact";


const Routerr = ()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path ="/" element ={<Home/>}/>
            <Route path="/api-data" element ={<Api/>}/>
            <Route path ="/contact" element ={<Contact/>}/>
        </Routes>
        </BrowserRouter>

    )
}

export {Routerr}