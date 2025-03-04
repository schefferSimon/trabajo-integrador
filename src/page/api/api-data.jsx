import { Layout } from "../../layout/layout";
import { useEffect, useState } from "react";
import "./api.css"


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
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resp) => {
                return resp.json()
            })
            .then((data) => {
                setPokemon(data)
            })
    }, [id])


    return (
        <Layout>
            <h1>Encontra tus pokemones favoritos</h1>
            <br />

            <div>
                {pokemones &&

                    <div className="cont-card">
                        <h2>{pokemones.name}</h2>
                        <img
                            className="img-card"
                            src={pokemones.sprites.front_default} alt="pokemon" />

                        <p>Tipo: {pokemones.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
                        <p>Habilidades: {pokemones.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</p>
                        <p>Estadísticas:</p>
                        <ul>
                            {pokemones.stats.map(statInfo => (
                                <li key={statInfo.stat.name}>
                                    {statInfo.stat.name}: {statInfo.base_stat}
                                </li>
                            ))}
                        </ul>
                        <br />
                        <div className="card-button">{
                            id > 1 ? <button onClick={handleAnterior}>Anterior</button> : <button className="btn-disabled" disabled>Anterior</button>
                        }
                            <button onClick={handleSiguiente} >Siguiente</button>
                        </div>
                    </div>


                }
            </div>

        </Layout>
    )
}
export { Api }