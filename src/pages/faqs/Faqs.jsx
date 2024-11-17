import './Faqs.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

export const Faqs = () => {
    return (
        <>
            <section className="faq-hero">
                <div className="faq-hero-text">
                    <h1>Preguntas Frecuentes</h1>
                    <p>¿Tienes dudas sobre la nutrición pet-friendly?</p>
                    <p>En esta sección podrás encontrar las respuestas a algunas de ellas. Si no la encuentras
                        eres bienvenido a agregarla en nuestra sección de <Link to='/contacto'>contacto</Link>
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq">
                <div className="faq-container">
                    <Accordion multiple class="accordion">
                        <AccordionTab class="accordion-item" header={<span id='faq-question'>¿Cuál es la mejor comida para perros?</span>}>
                            <div className="faq-answer">
                                <p>Una de las comidas más saludables para perros incluye carne magra, arroz, vegetales como zanahoria,
                                    y frutas como manzanas (sin sus semillas). Siempre asegúrate de evitar comida tóxica, como chocolate y cebolla.</p>
                            </div>
                        </AccordionTab>
                        <AccordionTab class="accordion-item" header={<span id='faq-question'>¿Los gatos pueden comer la misma comida que los perros?</span>}>
                            <div className="faq-answer">
                                <p>No, los gatos tienen necesidades dietarias muy específicas, incluyendo mayor cantidad de proteína y una
                                    cantidad determinada de aminoácidos como la taurina, la cual no está presente en comida para perros.</p>
                            </div>
                        </AccordionTab>
                        <AccordionTab class="accordion-item" header={<span id='faq-question'>¿Qué snacks le puedo dar a las mascotas pequeñas?</span>}>
                            <div className="faq-answer">
                                <p>A las mascotas como conejos o hamsters les encantan las frutas y vegetales como zanahorias, espinaca, y frutillas.
                                    De todos modos, se deben prevenir los snacks en exceso para evitar obesidad.</p>
                            </div>
                        </AccordionTab>
                    </Accordion>
                </div>
            </section>
        </>
    )
}