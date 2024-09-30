import './Faqs.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export const Faqs = () => {
    // Usamos un estado para gestionar qué preguntas están abiertas
    const [activeIndex, setActiveIndex] = useState(null);

    // Función para manejar el cambio de estado
    const toggleFaq = (index) => {
        // Si el índice ya está activo, lo cerramos (ponemos en null), si no, lo activamos
        setActiveIndex(activeIndex === index ? null : index);
    };
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
                    <div className={`faq-item ${activeIndex === 0 ? 'active' : ''}`}>
                        <button className="faq-question" onClick={() => toggleFaq(0)}>
                            <span>¿Cuál es la mejor comida para perros?</span>
                        </button>
                        <div className="faq-answer" style={{ maxHeight: activeIndex === 0 ? '150px' : '0' }}>
                            <p>Una de las comidas más saludable para perros incluye carne magra, arroz, vegetales como zanahoria,
                                y frutas como manzanas (sin sus semillas). Siempre asegúrate de evitar comida tóxica, como chocolate y cebolla.</p>
                        </div>
                    </div>

                    <div className={`faq-item ${activeIndex === 1 ? 'active' : ''}`}>
                        <button className="faq-question" onClick={() => toggleFaq(1)}>
                            <span>¿Los gatos pueden comer misma comida que los perros?</span>
                            <i className="fas fa-chevron-down"></i>
                        </button>
                        <div className="faq-answer" style={{ maxHeight: activeIndex === 1 ? '150px' : '0' }}>
                            <p>No, los gatos tienen necesidades dietarias muy específicas, incluyendo mayor cantidad deproteína y una
                                cantidad determinada de aminoácidos como la taurina, la cual no está presente en comida para perros.</p>
                        </div>
                    </div>

                    <div className={`faq-item ${activeIndex === 2 ? 'active' : ''}`}>
                        <button className="faq-question" onClick={() => toggleFaq(2)}>
                            <span>¿Qué snacks le puedo dar a las mascotas pequeñas?</span>
                            <i className="fas fa-chevron-down"></i>
                        </button>
                        <div className="faq-answer" style={{ maxHeight: activeIndex === 2 ? '150px' : '0' }}>
                            <p>A las mascotas como conejos o hamsters les encantan las frutas y vegetales como zanahorias, espinaca, y frutillas.
                                De todos modos, se deben prevenir los snacks en exceso para evitar obesidad.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}