import { Header } from "../componentes/header"



const Layout= ({Children})=>{
    return(
        <div>
            <Header/>
        <main>
        {Children}
        </main>
        <footer>
             <p>&copy; 2025 Mi Trabajo integrador. Todos los derechos reservados.</p>       
        </footer>
        </div>
    )
}

export{Layout}