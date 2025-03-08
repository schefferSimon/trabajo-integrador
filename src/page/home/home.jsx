import { Layout } from "../../layout/layout";
import "./home.css";
import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";


const Home =()=>{

    useEffect(() => {
        Aos.init();
      }, []); 

    return(
        <Layout>
            <h1>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" 
                    alt="imagen de pokemon" 
                />
            </h1>
            <h2 className="h2-historia">Un poco de historia!</h2>
            <section className="contenedor-historia">
                <article className="cont-historia">
                    <div className="text-historia" >
                        <h3>¿Qué es Pokémon?</h3>
                        <p>Pokémon es una franquicia de videojuegos creada por Satoshi Tajiri y Ken Sugimori y es propiedad de Nintendo, Game Freak y Creatures. La franquicia fue creada por Satoshi Tajiri en 1996 y se convirtió en una de las más exitosas y populares del mundo. Pokémon es una abreviatura de "Pocket Monsters" (Monstruos de bolsillo) y se centra en la captura y entrenamiento de criaturas ficticias llamadas Pokémon.</p>
                    </div>
                </article>
               </section>


          <section >
                
                <article className="cont">
                        <img 
                            className="img-creator"
                            src="https://images.wikidexcdn.net/mwuploads/wikidex/0/03/latest/20230307171117/Satoshi_Tajiri_2018.jpg" 
                            alt="Creador de pokemon" 
                            data-aos="fade-right"/>
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
                            alt="Creador de pokemon"
                            data-aos="fade-right" />
                           
                </article>
          </section>
        </Layout>
    )
}

export{Home}