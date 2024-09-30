import './Contact.css'

export const Contact = () => {
    return (
        <>
            <div className="contact-form-container">
                <div className="contact-us">
                    <div className="header">
                        <h1>¿Quieres enviar tu receta?</h1>
                        <h2>Déjanos tu receta siendo lo más resumida y entendible posible. <br />
                            Pronto la podrás ver en nuestra web!
                        </h2>
                    </div>
                    <div className="contact-form">
                        <form action="">
                            <input type="text" placeholder='Ingresa tu nombre' />
                            <input type="email" placeholder='Ingresa tu email' />
                            <textarea id="" rows={9} placeholder='Escribe tu mensaje...'></textarea>
                            <button type="button">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
