import { Layout } from "../../layout/layout";
import "./home.css";

const Home =()=>{
    return(
        <Layout>
            <h1>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" 
                    alt="imagen de pokemon" 
                />
                    
            </h1>
            <p>hola soy lo principal</p>
        </Layout>
    )
}

export{Home}