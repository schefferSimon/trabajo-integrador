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
          <section >
                
                <article className="cont">
                        <img 
                            className="img-creator"
                            src="https://images.wikidexcdn.net/mwuploads/wikidex/0/03/latest/20230307171117/Satoshi_Tajiri_2018.jpg" 
                            alt="Creador de pokemon" />
                            <div className="text-creator" >
                            <h3>Satoshi Tajiri</h3>
                            <p>Satoshi Tajiri, el creador principal de Pokémon, se inspiró en su infancia y su amor por la naturaleza. De niño, le encantaba coleccionar insectos y explorar el aire libre, algo que llamaba "cazar bichos". Con el tiempo, se dio cuenta de que los niños de las nuevas generaciones, debido a la urbanización, ya no tenían esa misma conexión con la naturaleza. Tajiri quería recrear esa experiencia de exploración y colección en un videojuego.</p>
                            </div>
                </article>
                <article className="cont-two">
                            <div className="text-creator-two" >
                            <h3>Ken Sugimori</h3>
                            <p>Ken Sugimori, amigo de Tajiri y cofundador de Game Freak, fue el encargado de diseñar las criaturas. Sus diseños se basaron en animales, plantas, objetos y hasta leyendas japonesas, creando un mundo lleno de diversidad y creatividad.</p>
                            </div>
                            <img 
                            className="img-creator-two"
                            src="https://images.mubicdn.net/images/cast_member/437194/cache-475974-1570324441/image-w856.jpg" 
                            alt="Creador de pokemon" />
                           
                </article>
          </section>
        </Layout>
    )
}

export{Home}