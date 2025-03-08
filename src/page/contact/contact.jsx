import { Layout } from "../../layout/layout";
import "./contact.css";
import { useState } from "react";




const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData.message);
        setShowPopup(true);
    }

    const handleClosePopup = () => {
        setShowPopup(false);
    }

    return (
        <Layout>
            <section className="contact-section">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h2>Contacto</h2>
                    <label>Ingrese su nombre</label>
                    <input type="text" placeholder="Nombre"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label>Ingrese su correo electrónico</label>
                    <input type="email" placeholder="Correo electrónico"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required />
                    <label>Ingrese su mensaje</label>
                    <textarea placeholder="Mensaje"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required></textarea>
                    <button type="submit">Enviar</button>
                </form>
                {showPopup && (
                    <div className="popup">
                        <div className="popup-content">
                            <h3>Hola {formData.name}</h3>
                            <p>Gracias por contactarnos. Nos pondremos en contacto contigo a tu correo: {formData.email} pronto.</p>
                            <button onClick={handleClosePopup}>Cerrar</button>
                        </div>
                    </div>
                )}
            </section>
        </Layout>
    )
}

export { Contact }