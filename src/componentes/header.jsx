import { Link } from "react-router-dom"
import "./header.css"

const Header = ()=>{
    return(
        <header>

            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"
             alt="imagen pokeball" />
           
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