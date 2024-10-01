import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { FloatLabel } from 'primereact/floatlabel';

import './Contact.css';

export const Contact = () => {
    // Manejo del estado para los inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

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
                            <div className="field">
                                <FloatLabel>
                                    <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} />
                                    <label htmlFor="name">Ingresa tu nombre</label>
                                </FloatLabel>
                            </div>
                            <div className="field">
                                <FloatLabel>
                                    <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <label htmlFor="email">Ingresa tu email</label>
                                </FloatLabel>
                            </div>
                            <div className="field">
                                <FloatLabel>
                                    <InputTextarea autoResize id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} />
                                    <label htmlFor="message">Escribe tu mensaje</label>
                                </FloatLabel>
                            </div>
                            <button type="button">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
