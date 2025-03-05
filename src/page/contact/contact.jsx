import { Layout } from "../../layout/layout";
import "./contact.css";

const handleSubmit = (event) => {
    event.preventDefaul();
}

const Contact = () => {
    return (
        <Layout>

            <section>
                <form onSubmit={handleSubmit}>
                    <label >Ingrese su nombre</label>
                    <input type="text" />
                    <br />
                    <label >Ingrese su correo electronico</label>
                    <input type="email" />
                    <br />
                    <label >Ingrese su mensaje</label>
                    <textarea name="" id=""></textarea>
                    <br />
                    <button>Enviar</button>

                </form>
            </section>

        </Layout>
    )
}

export { Contact }