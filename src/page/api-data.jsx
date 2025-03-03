import { Layout } from "../layout/layout";
import { useEffect, useState } from "react";

const Api = () => {

    const [pokemones, setPokemon] = useState()
    const [id, setId] = useState(1)

    const handleAnterior = () => {
        if (id === 1) {
            return setId(1)
        }
        return setId(id - 1)
    }

    const handleSiguiente = () => {
        return setId(id + 1)
    }



    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/3${id}`)
            .then((resp) => {
                return resp.json()
            })
            .then((data) => {
                setPokemon(data)
            })
    }, [id])


    return (
        <Layout>
            <h1>Api</h1>
            <p>hola soy la api</p>

            <div>
                {pokemones &&
                    <div>
                        <h2>{pokemones.name}</h2>
                        <img src={pokemones.sprites.front_default} alt="pokemon" />
                        <br />
                        {
                            id > 1 ? <button onClick={handleAnterior}>Anterior</button> : <button disabled>Anterior</button>
                        }
                        <button onClick={handleSiguiente} >Siguiente</button>
                    </div>
                }
            </div>

        </Layout>
    )
}
export { Api }