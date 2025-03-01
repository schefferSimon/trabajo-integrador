import { Header } from "../componentes/header"



const Layout= (props)=>{
    return(
        <div>
            <Header/>
        <main>
           {props.children}
        </main>
        <footer>
             <p>&copy; 2025 Mi Trabajo integrador. Todos los derechos reservados.</p>       
        </footer>
        </div>
    )
}

export{Layout}