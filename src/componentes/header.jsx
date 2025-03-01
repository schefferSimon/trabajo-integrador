import { Link } from "react-router-dom"
import "./header.css"

const Header = ()=>{
    return(
        <header>

            <img 
            src="https://preview.redd.it/tener-una-imagen-random-hace-que-la-publicaci%C3%B3n-tenga-m%C3%A1s-v0-6frn21rqrtoc1.jpeg?auto=webp&s=5f31ac57b8ba0cf15746c8d660b58ee0b68a43d1"
             alt="imagen random" />
           
             <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/api-data">Api</Link></li>
                    <li><Link to="/contact">Contactanos</Link></li>
                </ul>
             </nav>
        </header>
    );
};

export {Header}